import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { CATEGORIES } from '@/lib/data/articles'
import { normalizeSections, slugify } from '@/lib/articles-input'

// Admin: list + create /education articles. Same gate as training events —
// owner/team_leader only.
export const dynamic = 'force-dynamic'

const CATS = CATEGORIES.map((c) => c.value as string)
const STATUSES = ['draft', 'published']
const VISIBILITIES = ['public', 'members']

export async function GET() {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT id, slug, title, category, description, read_time, published_date,
           hero_image, sections, status, visibility, handbook_section, sort_order, updated_at
    FROM articles
    ORDER BY sort_order ASC, id ASC
  `
  return NextResponse.json({ articles: rows })
}

export async function POST(request: NextRequest) {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const title = String(b.title || '').trim()
  const category = String(b.category || '')
  if (!title) return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  if (!CATS.includes(category)) return NextResponse.json({ error: 'Invalid category' }, { status: 400 })

  const status = STATUSES.includes(String(b.status)) ? String(b.status) : 'draft'
  // Defaults to 'public': a page only reaches the members handbook when someone
  // deliberately says so.
  const visibility = VISIBILITIES.includes(String(b.visibility)) ? String(b.visibility) : 'public'

  let sections
  try {
    sections = normalizeSections(b.sections)
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 })
  }

  const sql = neon(process.env.DATABASE_URL!)

  let slug = slugify(String(b.slug || title))
  const clash = await sql`SELECT slug FROM articles WHERE slug = ${slug}`
  if (clash.length > 0) slug = `${slug}-${Date.now().toString(36).slice(-4)}`

  const rows = await sql`
    INSERT INTO articles (slug, title, category, description, read_time, published_date,
                          hero_image, sections, status, visibility, handbook_section, sort_order)
    VALUES (${slug}, ${title}, ${category}, ${b.description || ''}, ${b.readTime || null},
            ${b.publishedDate || null}, ${b.heroImage || null},
            ${JSON.stringify(sections)}::jsonb, ${status}, ${visibility},
            ${b.handbookSection || null}, ${b.sortOrder ?? 100})
    RETURNING id, slug
  `
  return NextResponse.json({ success: true, id: rows[0].id, slug: rows[0].slug })
}
