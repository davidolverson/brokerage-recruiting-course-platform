import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

/**
 * SM-2 Algorithm
 *
 * quality: 0-5 rating
 *   0-2: failed (Again/blackout)
 *   3:   Hard (correct with difficulty)
 *   4:   Good (correct with some hesitation)
 *   5:   Easy (perfect recall)
 *
 * Returns updated easeFactor, intervalDays, repetitions, status.
 */
function sm2(
  quality: number,
  currentEaseFactor: number,
  currentInterval: number,
  currentRepetitions: number,
): {
  easeFactor: number
  intervalDays: number
  repetitions: number
  status: 'new' | 'learning' | 'review' | 'graduated'
} {
  // Clamp quality to valid range
  const q = Math.max(0, Math.min(5, Math.round(quality)))

  let easeFactor = currentEaseFactor
  let intervalDays = currentInterval
  let repetitions = currentRepetitions

  if (q >= 3) {
    // Correct response
    if (repetitions === 0) {
      intervalDays = 1
    } else if (repetitions === 1) {
      intervalDays = 6
    } else {
      intervalDays = Math.round(currentInterval * easeFactor)
    }
    repetitions += 1
  } else {
    // Incorrect / difficult response — reset back to the start
    repetitions = 0
    intervalDays = 1
  }

  // Update ease factor (clamped to minimum of 1.3)
  const efDelta = 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)
  easeFactor = Math.max(1.3, easeFactor + efDelta)

  // Determine status
  let status: 'new' | 'learning' | 'review' | 'graduated'
  if (repetitions === 0) {
    status = 'learning'
  } else if (repetitions < 3) {
    status = 'learning'
  } else if (intervalDays >= 21) {
    status = 'graduated'
  } else {
    status = 'review'
  }

  return { easeFactor, intervalDays, repetitions, status }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
  }

  const body = await request.json().catch(() => ({}))
  const { cardId, quality } = body as { cardId: number; quality: number }

  if (typeof cardId !== 'number' || typeof quality !== 'number') {
    return NextResponse.json({ error: 'cardId and quality are required' }, { status: 400 })
  }

  if (quality < 0 || quality > 5) {
    return NextResponse.json({ error: 'quality must be 0-5' }, { status: 400 })
  }

  // Try pre-license first, then PLE
  let enrollment = await getEnrollment(session.user.id, 'pre-license')
  if (!enrollment) {
    enrollment = await getEnrollment(session.user.id, 'ple')
    if (!enrollment) {
      return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
    }
  }

  const sql = neon(databaseUrl)

  // Fetch the card — must belong to this enrollment
  const cardRows = await sql`
    SELECT id, ease_factor, interval_days, repetitions, status
    FROM spaced_repetition_cards
    WHERE id = ${cardId} AND enrollment_id = ${enrollment.id}
    LIMIT 1
  ` as {
    id: number
    ease_factor: string
    interval_days: number
    repetitions: number
    status: string
  }[]

  if (cardRows.length === 0) {
    return NextResponse.json({ error: 'Card not found' }, { status: 404 })
  }

  const card = cardRows[0]
  const currentEaseFactor = parseFloat(card.ease_factor)

  const { easeFactor, intervalDays, repetitions, status } = sm2(
    quality,
    currentEaseFactor,
    card.interval_days,
    card.repetitions,
  )

  // Calculate next review date
  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + intervalDays)

  // Persist the updated card state
  await sql`
    UPDATE spaced_repetition_cards
    SET
      ease_factor      = ${easeFactor.toFixed(4)},
      interval_days    = ${intervalDays},
      repetitions      = ${repetitions},
      next_review_date = ${nextReview.toISOString()},
      last_review_date = now(),
      quality          = ${quality},
      status           = ${status},
      updated_at       = now()
    WHERE id = ${cardId}
  `

  // Log the review event
  await sql`
    INSERT INTO course_activity_log (enrollment_id, event_type, details)
    VALUES (
      ${enrollment.id},
      'sr_card_reviewed',
      ${JSON.stringify({ cardId, quality, intervalDays, repetitions, status })}
    )
  `

  return NextResponse.json({
    cardId,
    quality,
    easeFactor: parseFloat(easeFactor.toFixed(4)),
    intervalDays,
    repetitions,
    status,
    nextReviewDate: nextReview.toISOString(),
  })
}
