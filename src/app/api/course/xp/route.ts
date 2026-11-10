import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, logCourseActivity } from '@/lib/db/course'
import {
  calculateXP,
  getXPProgress,
  getLevelForXP,
  XP_ACTIONS,
  type XPAction,
} from '@/lib/data/gamification-config'

export const dynamic = 'force-dynamic'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

// ─── GET: Current XP, level, progress ────────────────────────────────────────

export async function GET() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
  }

  try {
    const sql = getSql()

    // Fetch current XP total from the XP log table.
    // Falls back gracefully if the table doesn't exist yet.
    const xpRows = await sql`
      SELECT COALESCE(SUM(xp_amount), 0) as total_xp
      FROM course_xp_log
      WHERE enrollment_id = ${enrollment.id}
    `.catch(() => [{ total_xp: 0 }])

    const totalXP = Number(xpRows[0]?.total_xp ?? 0)
    const progress = getXPProgress(totalXP)

    // Recent XP events
    const recentRows = await sql`
      SELECT action, xp_amount, streak_days, created_at
      FROM course_xp_log
      WHERE enrollment_id = ${enrollment.id}
      ORDER BY created_at DESC
      LIMIT 10
    `.catch(() => [])

    return NextResponse.json({
      totalXP,
      currentLevel: progress.currentLevel,
      nextLevel: progress.nextLevel,
      xpIntoLevel: progress.xpIntoLevel,
      xpNeededForNext: progress.xpNeededForNext,
      progressPercent: progress.progressPercent,
      recentXP: recentRows,
    })
  } catch (err) {
    console.error('[XP] GET failed:', err)
    return NextResponse.json({ error: 'Failed to fetch XP data' }, { status: 500 })
  }
}

// ─── POST: Award XP for an action ─────────────────────────────────────────────

interface AwardXPBody {
  action: XPAction
  // Optional overrides
  streakDays?: number
  multiplier?: number
  // Context metadata stored in the log
  lessonId?: number
  quizAttemptId?: number
  challengeId?: string
}

export async function POST(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
  }

  const body: AwardXPBody = await request.json().catch(() => ({}))

  // Validate action type
  if (!body.action || !(body.action in XP_ACTIONS)) {
    return NextResponse.json(
      {
        error: 'Invalid action',
        validActions: Object.keys(XP_ACTIONS),
      },
      { status: 400 },
    )
  }

  const streakDays =
    body.streakDays ?? enrollment.current_streak_days ?? 0
  const multiplier = typeof body.multiplier === 'number' ? body.multiplier : 1

  const xpEarned = calculateXP(body.action, streakDays, multiplier)

  try {
    const sql = getSql()

    // Ensure the XP log table exists (idempotent DDL).
    // The migration should create this, but we guard here for safety.
    await sql`
      CREATE TABLE IF NOT EXISTS course_xp_log (
        id           SERIAL PRIMARY KEY,
        enrollment_id INTEGER NOT NULL REFERENCES course_enrollments(id) ON DELETE CASCADE,
        action        TEXT NOT NULL,
        xp_amount     INTEGER NOT NULL DEFAULT 0,
        streak_days   INTEGER NOT NULL DEFAULT 0,
        multiplier    TEXT NOT NULL DEFAULT '1',
        context       JSONB DEFAULT '{}',
        created_at    TIMESTAMPTZ DEFAULT now()
      )
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_xp_log_enrollment
        ON course_xp_log (enrollment_id)
    `

    // Insert XP event
    await sql`
      INSERT INTO course_xp_log
        (enrollment_id, action, xp_amount, streak_days, multiplier, context)
      VALUES (
        ${enrollment.id},
        ${body.action},
        ${xpEarned},
        ${streakDays},
        ${String(multiplier)},
        ${JSON.stringify({
          lessonId: body.lessonId ?? null,
          quizAttemptId: body.quizAttemptId ?? null,
          challengeId: body.challengeId ?? null,
        })}
      )
    `

    // Log to activity log for analytics
    await logCourseActivity(enrollment.id, 'xp_earned', {
      action: body.action,
      xpEarned,
      streakDays,
      multiplier,
    })

    // Re-fetch total to return updated state
    const xpRows = await sql`
      SELECT COALESCE(SUM(xp_amount), 0) as total_xp
      FROM course_xp_log
      WHERE enrollment_id = ${enrollment.id}
    `
    const newTotalXP = Number(xpRows[0]?.total_xp ?? 0)
    const oldTotalXP = newTotalXP - xpEarned

    const oldLevel = getLevelForXP(oldTotalXP)
    const newProgress = getXPProgress(newTotalXP)
    const leveledUp = newProgress.currentLevel.level > oldLevel.level

    return NextResponse.json({
      xpEarned,
      totalXP: newTotalXP,
      action: body.action,
      actionLabel: XP_ACTIONS[body.action].label,
      streakDays,
      multiplier,
      leveledUp,
      currentLevel: newProgress.currentLevel,
      nextLevel: newProgress.nextLevel,
      xpIntoLevel: newProgress.xpIntoLevel,
      xpNeededForNext: newProgress.xpNeededForNext,
      progressPercent: newProgress.progressPercent,
      ...(leveledUp && { newLevel: newProgress.currentLevel }),
    })
  } catch (err) {
    console.error('[XP] POST failed:', err)
    return NextResponse.json({ error: 'Failed to award XP' }, { status: 500 })
  }
}
