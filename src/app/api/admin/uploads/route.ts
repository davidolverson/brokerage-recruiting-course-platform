import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { createHash } from 'crypto'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { checkUpload, safeFilename, tooLargeMessage, MAX_UPLOAD_BYTES, type UploadKind } from '@/lib/upload-input'
import { annotateUploadUsage, type ArticleRef, type EventRef } from '@/lib/upload-refs'

// Admin: upload an image for an event or article. owner/team_leader only.
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const sql = neon(process.env.DATABASE_URL!)
  // Never select `bytes` here — this is a picker list, not a download.
  const rows = (await sql`
    SELECT id, filename, mime, size_bytes, width, height, created_at
    FROM uploads ORDER BY created_at DESC LIMIT 200
  `) as unknown as { id: number }[]

  // Which pages still point at each image. The library screen needs this to
  // know what is safe to delete, and both tables are small enough to read once
  // here rather than once per image.
  const articles = (await sql`SELECT slug, title, hero_image, sections FROM articles`) as unknown as ArticleRef[]
  const events = (await sql`SELECT slug, title, image_url FROM training_events`) as unknown as EventRef[]

  const annotated = annotateUploadUsage(rows, articles, events)

  return NextResponse.json({
    uploads: annotated.map((r) => ({ ...r, url: `/api/uploads/${r.id}` })),
  })
}

export async function POST(request: NextRequest) {
  let ctx
  try {
    ctx = requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Expected a file upload' }, { status: 400 })
  }

  const file = form.get('file')
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file was attached' }, { status: 400 })
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json(
      { error: tooLargeMessage(file.size) },
      { status: 413 },
    )
  }

  const bytes = new Uint8Array(await file.arrayBuffer())

  // Which allow-list applies is the CALLER's declaration of what kind of field
  // this is, not the file's claim about itself. Anything other than an explicit
  // 'document' stays on the strict image list, so an image picker cannot be
  // widened by an unexpected value.
  const kind: UploadKind = form.get('kind') === 'document' ? 'document' : 'image'

  // The declared content-type is ignored on purpose; the leading bytes decide.
  const check = checkUpload(bytes, kind)
  if (!check.ok) return NextResponse.json({ error: check.error }, { status: 400 })

  const buf = Buffer.from(bytes)
  const sha256 = createHash('sha256').update(buf).digest('hex')
  const filename = safeFilename((file as File).name || 'upload')
  const width = Number(form.get('width')) || null
  const height = Number(form.get('height')) || null

  const sql = neon(process.env.DATABASE_URL!)

  // Re-uploading the same image returns the row that already exists rather than
  // storing a second copy of the bytes.
  const existing = await sql`SELECT id, filename FROM uploads WHERE sha256 = ${sha256}`
  if (existing.length > 0) {
    return NextResponse.json({
      success: true,
      id: existing[0].id,
      url: `/api/uploads/${existing[0].id}`,
      filename: existing[0].filename,
      mime: check.mime,
      deduped: true,
    })
  }

  const rows = await sql`
    INSERT INTO uploads (filename, mime, bytes, size_bytes, sha256, width, height, created_by)
    VALUES (${filename}, ${check.mime}, decode(${buf.toString('hex')}, 'hex'),
            ${buf.length}, ${sha256}, ${width}, ${height}, ${ctx.userId})
    RETURNING id
  `
  return NextResponse.json({
    success: true,
    id: rows[0].id,
    url: `/api/uploads/${rows[0].id}`,
    filename,
    mime: check.mime,
    deduped: false,
  })
}
