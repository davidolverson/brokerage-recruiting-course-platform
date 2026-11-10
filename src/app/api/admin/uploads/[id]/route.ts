import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { findUploadReferences, explainUploadInUse } from '@/lib/upload-refs'

// Admin: delete an uploaded image. owner/team_leader only, same as the upload.
//
// Storage only ever grew before this: a wrong file, a duplicate at a different
// crop, a flyer replaced by a better scan — all of it stayed in the database
// forever with no way for an editor to clear it.
//
// The one rule is that a delete must never blank a live page, so anything still
// referenced is refused with the list of pages using it rather than deleted.
export const dynamic = 'force-dynamic'

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const numericId = Number(id)
  if (!Number.isInteger(numericId) || numericId <= 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const sql = neon(process.env.DATABASE_URL!)

  const existing = await sql`SELECT id, filename FROM uploads WHERE id = ${numericId}`
  if (existing.length === 0) {
    return NextResponse.json({ error: 'That image no longer exists.' }, { status: 404 })
  }

  // Both tables are small (tens of rows), so the rows are fetched and matched in
  // JS rather than with a SQL LIKE. That keeps the id matching in one tested
  // place — a LIKE '%/api/uploads/2%' would also match upload 20.
  const articles = (await sql`SELECT slug, title, hero_image, sections FROM articles`) as unknown as {
    slug: string
    title: string
    hero_image: string | null
    sections: unknown
  }[]
  const events = (await sql`SELECT slug, title, image_url FROM training_events`) as unknown as {
    slug: string
    title: string
    image_url: string | null
  }[]

  const refs = findUploadReferences(numericId, articles, events)
  if (refs.length > 0) {
    return NextResponse.json({ error: explainUploadInUse(refs), references: refs }, { status: 409 })
  }

  await sql`DELETE FROM uploads WHERE id = ${numericId}`

  return NextResponse.json({
    success: true,
    id: numericId,
    filename: (existing[0] as { filename: string }).filename,
  })
}
