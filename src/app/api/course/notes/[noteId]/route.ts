import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

// ─── Ownership check helper ────────────────────────────────────────────────

async function getNoteForEnrollment(noteId: number, enrollmentId: number) {
  const sql = getSql()
  const rows = await sql`
    SELECT * FROM course_notes
    WHERE id = ${noteId} AND enrollment_id = ${enrollmentId}
    LIMIT 1
  `
  return rows[0] ?? null
}

// ─── PUT /api/course/notes/[noteId] ───────────────────────────────────────
// Body: { content?, tags?, noteType? }

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ noteId: string }> },
) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  }

  const { noteId: noteIdStr } = await params
  const noteId = parseInt(noteIdStr, 10)
  if (isNaN(noteId)) {
    return NextResponse.json({ error: 'Invalid note ID' }, { status: 400 })
  }

  const existing = await getNoteForEnrollment(noteId, enrollment.id)
  if (!existing) {
    return NextResponse.json({ error: 'Note not found' }, { status: 404 })
  }

  let body: { content?: string; tags?: string[]; noteType?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { content, tags, noteType } = body

  // Validate at least one field to update
  if (!content && !tags && !noteType) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
  }

  const validNoteTypes = ['lesson', 'quiz', 'highlight', 'bookmark']

  try {
    const sql = getSql()
    const newContent = typeof content === 'string' && content.trim() ? content.trim() : (existing as Record<string, unknown>).content as string
    const newTags = Array.isArray(tags) ? tags.filter((t) => typeof t === 'string') : (existing as Record<string, unknown>).tags as string[]
    const newType = validNoteTypes.includes(noteType ?? '') ? noteType! : (existing as Record<string, unknown>).note_type as string

    const rows = await sql`
      UPDATE course_notes
      SET
        content = ${newContent},
        tags = ${newTags},
        note_type = ${newType},
        updated_at = now()
      WHERE id = ${noteId} AND enrollment_id = ${enrollment.id}
      RETURNING *
    `

    return NextResponse.json({ note: rows[0] })
  } catch (err) {
    console.error('[NOTES] PUT failed:', err)
    return NextResponse.json({ error: 'Failed to update note' }, { status: 500 })
  }
}

// ─── DELETE /api/course/notes/[noteId] ────────────────────────────────────

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ noteId: string }> },
) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  }

  const { noteId: noteIdStr } = await params
  const noteId = parseInt(noteIdStr, 10)
  if (isNaN(noteId)) {
    return NextResponse.json({ error: 'Invalid note ID' }, { status: 400 })
  }

  const existing = await getNoteForEnrollment(noteId, enrollment.id)
  if (!existing) {
    return NextResponse.json({ error: 'Note not found' }, { status: 404 })
  }

  try {
    const sql = getSql()
    await sql`
      DELETE FROM course_notes
      WHERE id = ${noteId} AND enrollment_id = ${enrollment.id}
    `

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[NOTES] DELETE failed:', err)
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 })
  }
}
