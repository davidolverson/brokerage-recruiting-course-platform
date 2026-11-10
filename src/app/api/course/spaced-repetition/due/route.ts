import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'
import { COURSE_TERMS } from '@/lib/data/course-terms'
import { PLE_TERMS } from '@/lib/data/ple-terms'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
  }

  const { searchParams } = new URL(request.url)
  const limitParam = parseInt(searchParams.get('limit') ?? '20', 10)
  const limit = Math.min(Math.max(1, limitParam), 50)

  // Try pre-license first, then PLE
  let enrollment = await getEnrollment(session.user.id, 'pre-license')
  let termSource: Record<string, { definition: string; example?: string }>

  if (!enrollment) {
    enrollment = await getEnrollment(session.user.id, 'ple')
    if (!enrollment) {
      return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
    }
    termSource = PLE_TERMS
  } else {
    termSource = COURSE_TERMS
  }

  const sql = neon(databaseUrl)

  // Fetch cards due for review today (next_review_date <= now)
  // Prioritize: 'learning' status first, then 'review', then 'new'
  const dueRows = await sql`
    SELECT
      id,
      term_key,
      ease_factor,
      interval_days,
      repetitions,
      next_review_date,
      last_review_date,
      quality,
      status
    FROM spaced_repetition_cards
    WHERE enrollment_id = ${enrollment.id}
      AND next_review_date <= now()
    ORDER BY
      CASE status
        WHEN 'learning' THEN 1
        WHEN 'review'   THEN 2
        WHEN 'new'      THEN 3
        ELSE                 4
      END,
      next_review_date ASC
    LIMIT ${limit}
  ` as {
    id: number
    term_key: string
    ease_factor: string
    interval_days: number
    repetitions: number
    next_review_date: string
    last_review_date: string | null
    quality: number | null
    status: string
  }[]

  // Attach term content from in-memory data
  const cards = dueRows.map((row) => {
    const term = termSource[row.term_key]
    return {
      id: row.id,
      termKey: row.term_key,
      term: row.term_key,
      definition: term?.definition ?? '',
      example: term?.example ?? null,
      easeFactor: parseFloat(row.ease_factor),
      intervalDays: row.interval_days,
      repetitions: row.repetitions,
      nextReviewDate: row.next_review_date,
      lastReviewDate: row.last_review_date,
      quality: row.quality,
      status: row.status,
    }
  })

  // Also get total counts for the session stats display
  const statsRows = await sql`
    SELECT
      COUNT(*) FILTER (WHERE next_review_date <= now()) as due_total,
      COUNT(*) FILTER (WHERE status = 'graduated') as graduated,
      COUNT(*) FILTER (WHERE last_review_date >= now() - interval '1 day') as reviewed_today,
      COUNT(*) as total_cards
    FROM spaced_repetition_cards
    WHERE enrollment_id = ${enrollment.id}
  ` as { due_total: string; graduated: string; reviewed_today: string; total_cards: string }[]

  const stats = statsRows[0]

  // Find the next scheduled review date for when there's nothing due
  let nextReviewDate: string | null = null
  if (cards.length === 0) {
    const nextRows = await sql`
      SELECT next_review_date
      FROM spaced_repetition_cards
      WHERE enrollment_id = ${enrollment.id}
        AND next_review_date > now()
      ORDER BY next_review_date ASC
      LIMIT 1
    ` as { next_review_date: string }[]
    nextReviewDate = nextRows[0]?.next_review_date ?? null
  }

  return NextResponse.json({
    cards,
    stats: {
      dueTotal: Number(stats?.due_total ?? 0),
      graduated: Number(stats?.graduated ?? 0),
      reviewedToday: Number(stats?.reviewed_today ?? 0),
      totalCards: Number(stats?.total_cards ?? 0),
    },
    nextReviewDate,
  })
}
