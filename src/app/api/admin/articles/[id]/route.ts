import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { CATEGORIES } from '@/lib/data/articles'
import { normalizeSections, slugify } from '@/lib/articles-input'

// Admin: update / delete a single article. owner/team_leader only.
export const dynamic = 'force-dynamic'

const CATS = CATEGORIES.map((c) => c.value as string)
const STATUSES = ['draft', 'published']
const VISIBILITIES = ['public', 'members']

function guard(): Promise<void> {
  return getAdminContext().then((ctx) => {
    requireRole(ctx, 'owner', 'team_leader')
  })
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try { await guard() } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  if (b.category && !CATS.includes(b.category)) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
  }
  if (b.status && !STATUSES.includes(String(b.status))) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }
  if (b.visibility && !VISIBILITIES.includes(String(b.visibility))) {
    return NextResponse.json({ error: 'Invalid visibility' }, { status: 400 })
  }

  const sql = neon(process.env.DATABASE_URL!)

  // Column names come from this fixed map, never from the request body.
  const colMap: Record<string, string> = {
    title: 'title',
    category: 'category',
    description: 'description',
    readTime: 'read_time',
    publishedDate: 'published_date',
    heroImage: 'hero_image',
    status: 'status',
    visibility: 'visibility',
    handbookSection: 'handbook_section',
    sortOrder: 'sort_order',
  }

  const fields: Record<string, unknown> = {}
  for (const k of Object.keys(colMap)) if (k in b) fields[colMap[k]] = b[k]

  // Renaming an article changes its public URL, so a clash has to be caught
  // rather than silently suffixed the way a new article's slug is.
  if ('slug' in b) {
    const nextSlug = slugify(String(b.slug || ''))
    const clash = await sql`SELECT id FROM articles WHERE slug = ${nextSlug} AND id <> ${id}`
    if (clash.length > 0) {
      return NextResponse.json({ error: 'Another article already uses that URL' }, { status: 409 })
    }
    fields['slug'] = nextSlug
  }

  let sectionsJson: string | null = null
  if ('sections' in b) {
    try {
      sectionsJson = JSON.stringify(normalizeSections(b.sections))
    } catch (err) {
      return NextResponse.json({ error: (err as Error).message }, { status: 400 })
    }
  }

  if (!Object.keys(fields).length && sectionsJson === null) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
  }

  for (const [col, val] of Object.entries(fields)) {
    await sql.query(`UPDATE articles SET ${col} = $1, updated_at = now() WHERE id = $2`, [val, id])
  }
  if (sectionsJson !== null) {
    await sql`UPDATE articles SET sections = ${sectionsJson}::jsonb, updated_at = now() WHERE id = ${id}`
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try { await guard() } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const sql = neon(process.env.DATABASE_URL!)
  // Unpublish rather than drop the row. /education URLs are in the sitemap and
  // may be linked externally; a mis-click should be recoverable.
  await sql`UPDATE articles SET status = 'draft', updated_at = now() WHERE id = ${id}`
  return NextResponse.json({ success: true })
}
