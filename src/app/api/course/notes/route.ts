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

// ─── GET /api/course/notes ──────────────────────────────────────────────────
// Query params: lessonId, moduleSlug, tag, noteType, limit, offset

export async function GET(req: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  }

  const { searchParams } = req.nextUrl
  const lessonId = searchParams.get('lessonId')
  const moduleSlug = searchParams.get('moduleSlug')
  const tag = searchParams.get('tag')
  const noteType = searchParams.get('noteType')
  const search = searchParams.get('search')
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '100', 10), 200)
  const offset = parseInt(searchParams.get('offset') ?? '0', 10)

  try {
    const sql = getSql()

    // Build a dynamic but safe query using neon tagged templates
    // We'll use multiple queries and merge — neon doesn't support dynamic WHERE clauses
    // so we build conditions programmatically via multiple optional fetches
    let rows: Record<string, unknown>[]

    if (lessonId) {
      const lid = parseInt(lessonId, 10)
      rows = await sql`
        SELECT
          cn.*,
          cl.slug AS lesson_slug,
          cl.title AS lesson_title
        FROM course_notes cn
        LEFT JOIN course_lessons cl ON cl.id = cn.lesson_id
        WHERE cn.enrollment_id = ${enrollment.id}
          AND cn.lesson_id = ${lid}
        ORDER BY cn.created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else if (tag) {
      rows = await sql`
        SELECT
          cn.*,
          cl.slug AS lesson_slug,
          cl.title AS lesson_title
        FROM course_notes cn
        LEFT JOIN course_lessons cl ON cl.id = cn.lesson_id
        WHERE cn.enrollment_id = ${enrollment.id}
          AND ${tag} = ANY(cn.tags)
        ORDER BY cn.created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else if (noteType) {
      rows = await sql`
        SELECT
          cn.*,
          cl.slug AS lesson_slug,
          cl.title AS lesson_title
        FROM course_notes cn
        LEFT JOIN course_lessons cl ON cl.id = cn.lesson_id
        WHERE cn.enrollment_id = ${enrollment.id}
          AND cn.note_type = ${noteType}
        ORDER BY cn.created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else if (moduleSlug) {
      rows = await sql`
        SELECT
          cn.*,
          cl.slug AS lesson_slug,
          cl.title AS lesson_title
        FROM course_notes cn
        LEFT JOIN course_lessons cl ON cl.id = cn.lesson_id
        WHERE cn.enrollment_id = ${enrollment.id}
          AND cn.page_context LIKE ${moduleSlug + '%'}
        ORDER BY cn.created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else if (search) {
      rows = await sql`
        SELECT
          cn.*,
          cl.slug AS lesson_slug,
          cl.title AS lesson_title
        FROM course_notes cn
        LEFT JOIN course_lessons cl ON cl.id = cn.lesson_id
        WHERE cn.enrollment_id = ${enrollment.id}
          AND (
            cn.content ILIKE ${'%' + search + '%'}
            OR cn.highlighted_text ILIKE ${'%' + search + '%'}
          )
        ORDER BY cn.created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else {
      rows = await sql`
        SELECT
          cn.*,
          cl.slug AS lesson_slug,
          cl.title AS lesson_title
        FROM course_notes cn
        LEFT JOIN course_lessons cl ON cl.id = cn.lesson_id
        WHERE cn.enrollment_id = ${enrollment.id}
        ORDER BY cn.created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    }

    // Count total
    const countRows = await sql`
      SELECT COUNT(*) AS total FROM course_notes
      WHERE enrollment_id = ${enrollment.id}
    `

    return NextResponse.json({
      notes: rows,
      total: Number(countRows[0]?.total ?? 0),
    })
  } catch (err) {
    console.error('[NOTES] GET failed:', err)
    return NextResponse.json({ error: 'Failed to load notes' }, { status: 500 })
  }
}

// ─── POST /api/course/notes ─────────────────────────────────────────────────
// Body: { lessonId?, quizAttemptId?, noteType, content, highlightedText?, pageContext?, tags? }

export async function POST(req: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  }

  let body: {
    lessonId?: number | null
    quizAttemptId?: number | null
    noteType?: string
    content?: string
    highlightedText?: string | null
    pageContext?: string | null
    tags?: string[]
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { lessonId, quizAttemptId, noteType, content, highlightedText, pageContext, tags } = body

  if (!content || typeof content !== 'string' || content.trim().length === 0) {
    return NextResponse.json({ error: 'content is required' }, { status: 400 })
  }

  const validNoteTypes = ['lesson', 'quiz', 'highlight', 'bookmark']
  const resolvedType = validNoteTypes.includes(noteType ?? '') ? noteType! : 'lesson'
  const resolvedTags = Array.isArray(tags) ? tags.filter((t) => typeof t === 'string') : []

  try {
    const sql = getSql()
    const rows = await sql`
      INSERT INTO course_notes (
        enrollment_id, lesson_id, quiz_attempt_id,
        note_type, content, highlighted_text,
        page_context, tags
      )
      VALUES (
        ${enrollment.id},
        ${lessonId ?? null},
        ${quizAttemptId ?? null},
        ${resolvedType},
        ${content.trim()},
        ${highlightedText ?? null},
        ${pageContext ?? null},
        ${resolvedTags}
      )
      RETURNING *
    `

    return NextResponse.json({ note: rows[0] }, { status: 201 })
  } catch (err) {
    console.error('[NOTES] POST failed:', err)
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 })
  }
}
