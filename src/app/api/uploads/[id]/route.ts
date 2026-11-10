import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { ALLOWED_MIME } from '@/lib/upload-input'
import { canReadHandbook } from '@/lib/permissions'

// Serves an uploaded image.
//
// This was written as "public by design — event flyers and article images", and
// that was true when the only consumers were public pages. The members-only
// handbook then landed in the same articles table, so an image on a fee
// schedule page would have been served to anyone who asked. Ids are a serial,
// so /api/uploads/1,2,3… is trivially enumerable.
//
// The gate is DERIVED from what references the image rather than stored on the
// upload row. A stored flag would drift the moment an article flipped between
// public and members, and the drift would fail open. This way the protection
// follows the content automatically.
export const dynamic = 'force-dynamic'

async function isMembersOnly(id: number): Promise<boolean> {
  const sql = neon(process.env.DATABASE_URL!)
  const url = `/api/uploads/${id}`
  const rows = (await sql`
    SELECT 1 AS hit FROM articles
    WHERE visibility = 'members'
      AND (hero_image = ${url} OR sections::text LIKE ${'%' + url + '"%'})
    LIMIT 1
  `) as unknown as unknown[]
  return rows.length > 0
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const numericId = Number(id)
  if (!Number.isInteger(numericId) || numericId <= 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT encode(bytes, 'base64') AS b64, mime, filename, size_bytes, sha256
    FROM uploads WHERE id = ${numericId}
  `
  if (rows.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  // 404 rather than 403 for an unentitled viewer: whether a particular image id
  // exists is itself a small disclosure, and there is nothing useful they can do
  // with the difference.
  const membersOnly = await isMembersOnly(numericId)
  if (membersOnly && !(await canReadHandbook())) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const row = rows[0] as { b64: string; mime: string; filename: string; size_bytes: number; sha256: string }

  // Only ever echo back a type from the allow-list. The stored value was set
  // from magic bytes, but pinning it again here means a bad row can never turn
  // this route into a way to serve script with an attacker-chosen type.
  const mime = (ALLOWED_MIME as readonly string[]).includes(row.mime) ? row.mime : 'application/octet-stream'

  const etag = `"${row.sha256.slice(0, 32)}"`

  // The platform serves this response with a weak validator (W/"..."), so the
  // browser sends W/"..." back and a strict === never matched: every
  // revalidation returned a full 200 and the immutable cache header was doing
  // all the work alone. RFC 7232 specifies weak comparison for GET, and
  // If-None-Match may be a list, so normalise both sides.
  const ifNoneMatch = request.headers.get('if-none-match')
  if (ifNoneMatch) {
    const normalise = (v: string) => v.trim().replace(/^W\//, '')
    const candidates = ifNoneMatch.split(',').map(normalise)
    if (candidates.includes('*') || candidates.includes(normalise(etag))) {
      return new NextResponse(null, { status: 304, headers: { ETag: etag } })
    }
  }

  const body = Buffer.from(row.b64, 'base64')

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': mime,
      'Content-Length': String(body.length),
      // Rows are immutable, so a public image can be cached hard: a changed
      // image is a new upload with a new id. A members image must never sit in
      // a shared cache, where it would outlive the entitlement check.
      'Cache-Control': membersOnly
        ? 'private, no-store, max-age=0, must-revalidate'
        : 'public, max-age=31536000, immutable',
      ETag: etag,
      // never let the browser guess a different type
      'X-Content-Type-Options': 'nosniff',
      // Images and PDFs render in the browser, so inline is what an agent
      // wants. A Word or Excel file cannot render anywhere, so inline just
      // produces a download with a worse name; say attachment and mean it.
      'Content-Disposition': `${
        mime.startsWith('image/') || mime === 'application/pdf' ? 'inline' : 'attachment'
      }; filename="${row.filename.replace(/"/g, '')}"`,
    },
  })
}
