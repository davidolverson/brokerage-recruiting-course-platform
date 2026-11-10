import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment } from '@/lib/db/course'
import { COURSE_TERMS } from '@/lib/data/course-terms'
import { PLE_TERMS } from '@/lib/data/ple-terms'

export const dynamic = 'force-dynamic'

export async function POST() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
  }

  // Try to get pre-license enrollment first, then PLE
  let enrollment = await getEnrollment(session.user.id, 'pre-license')
  let termSource: Record<string, { definition: string; example?: string }>

  if (!enrollment) {
    enrollment = await getEnrollment(session.user.id, 'ple')
    if (!enrollment) {
      return NextResponse.json({ error: 'Not enrolled in any course' }, { status: 400 })
    }
    termSource = PLE_TERMS
  } else {
    // Pre-license gets all pre-license terms
    termSource = COURSE_TERMS
  }

  const sql = neon(databaseUrl)

  // Check how many cards already exist for this enrollment
  const existingRows = await sql`
    SELECT COUNT(*) as count FROM spaced_repetition_cards
    WHERE enrollment_id = ${enrollment.id}
  `
  const existingCount = Number(existingRows[0]?.count ?? 0)

  const termKeys = Object.keys(termSource)

  if (existingCount >= termKeys.length) {
    return NextResponse.json({
      message: 'Cards already initialized',
      total: existingCount,
      skipped: true,
    })
  }

  // Batch insert all terms that don't exist yet using ON CONFLICT DO NOTHING
  // Process in chunks of 100 to avoid hitting query limits
  const CHUNK_SIZE = 100
  let inserted = 0

  for (let i = 0; i < termKeys.length; i += CHUNK_SIZE) {
    const chunk = termKeys.slice(i, i + CHUNK_SIZE)

    for (const termKey of chunk) {
      await sql`
        INSERT INTO spaced_repetition_cards
          (enrollment_id, term_key, ease_factor, interval_days, repetitions, next_review_date, status)
        VALUES
          (${enrollment.id}, ${termKey}, '2.5', 1, 0, now(), 'new')
        ON CONFLICT (enrollment_id, term_key) DO NOTHING
      `
      inserted++
    }
  }

  // Log the initialization event
  await sql`
    INSERT INTO course_activity_log (enrollment_id, event_type, details)
    VALUES (${enrollment.id}, 'sr_initialized', ${JSON.stringify({ termCount: termKeys.length })})
  `

  return NextResponse.json({
    message: 'Spaced repetition cards initialized',
    total: termKeys.length,
    inserted,
  })
}
