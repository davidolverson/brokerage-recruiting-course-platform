import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import {
  sendWeeklyProgressEmail,
  sendInactivityReminderEmail,
  type WeeklyProgressStats,
} from '@/lib/emails/course-emails'

export const dynamic = 'force-dynamic'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false

  // Vercel Cron sends this header automatically
  const cronHeader = req.headers.get('x-cron-secret')
  if (cronHeader === secret) return true

  // Also accept Authorization: Bearer <secret>
  const auth = req.headers.get('authorization')
  if (auth === `Bearer ${secret}`) return true

  return false
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sql = getSql()
  let progressSent = 0
  let inactivitySent = 0
  let errors = 0

  try {
    const now = new Date()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const inactivityCutoff = weekAgo // 7+ days since last activity

    // Fetch all active enrollments joined with Better Auth "user" table
    const enrollments = await sql`
      SELECT
        ce.id                        AS enrollment_id,
        ce.user_id,
        ce.status,
        ce.last_activity_at,
        ce.current_streak_days,
        ce.exam_readiness_score,
        u.email,
        COALESCE(u.name, u.email)    AS name
      FROM course_enrollments ce
      JOIN "user" u ON u.id = ce.user_id
      WHERE ce.status = 'active'
        AND u.email IS NOT NULL
    `

    if (enrollments.length === 0) {
      return NextResponse.json({
        progressSent: 0,
        inactivitySent: 0,
        errors: 0,
        message: 'No active enrollments',
      })
    }

    // Total published lessons (shared denominator for all enrollments)
    const [totalRow] = await sql`
      SELECT COUNT(*)::int AS count FROM course_lessons WHERE is_published = true
    `
    const totalLessons = Number(totalRow?.count ?? 0)

    for (const enrollment of enrollments) {
      const enrollmentId = enrollment.enrollment_id as number
      const email = String(enrollment.email)
      const name = String(enrollment.name)
      const lastActivity = enrollment.last_activity_at as string | null
      const currentStreak = Number(enrollment.current_streak_days ?? 0)

      // Determine if this student is inactive (no activity in 7+ days)
      const isInactive =
        !lastActivity ||
        new Date(lastActivity).getTime() < new Date(inactivityCutoff).getTime()

      try {
        if (isInactive) {
          // --- Inactivity reminder ---
          const daysSinceActive = lastActivity
            ? Math.floor(
                (now.getTime() - new Date(lastActivity).getTime()) /
                  (1000 * 60 * 60 * 24),
              )
            : 30 // fallback for never-active

          // Get overall progress percent
          const [completedRow] = await sql`
            SELECT COUNT(*)::int AS count
            FROM course_lesson_progress
            WHERE enrollment_id = ${enrollmentId}
              AND status = 'completed'
          `
          const completedLessons = Number(completedRow?.count ?? 0)
          const progressPercent =
            totalLessons > 0
              ? Math.round((completedLessons / totalLessons) * 100)
              : 0

          const sent = await sendInactivityReminderEmail(
            email,
            name,
            daysSinceActive,
            progressPercent,
          )

          if (sent) {
            inactivitySent++
            await sql`
              INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
              VALUES (
                ${email},
                'course_inactivity',
                ${JSON.stringify({ enrollment_id: enrollmentId, days_since_active: daysSinceActive, progress_percent: progressPercent })}::jsonb,
                ${now.toISOString()},
                null
              )
            `
          } else {
            errors++
            await sql`
              INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
              VALUES (
                ${email},
                'course_inactivity',
                ${JSON.stringify({ enrollment_id: enrollmentId })}::jsonb,
                null,
                'Send failed'
              )
            `
          }
        } else {
          // --- Weekly progress digest ---

          // Lessons completed in the past 7 days
          const [weekLessonsRow] = await sql`
            SELECT COUNT(*)::int AS count
            FROM course_lesson_progress
            WHERE enrollment_id = ${enrollmentId}
              AND status = 'completed'
              AND completed_at >= ${weekAgo}
          `

          // Total completed lessons ever
          const [totalCompletedRow] = await sql`
            SELECT COUNT(*)::int AS count
            FROM course_lesson_progress
            WHERE enrollment_id = ${enrollmentId}
              AND status = 'completed'
          `

          // Quizzes this week
          const [weekQuizRow] = await sql`
            SELECT
              COUNT(*)::int                        AS count,
              COALESCE(ROUND(AVG(score)), 0)::int  AS avg_score
            FROM course_quiz_attempts
            WHERE enrollment_id = ${enrollmentId}
              AND completed_at >= ${weekAgo}
              AND score IS NOT NULL
          `

          // Next incomplete lesson — join chapters + modules to build full URL
          const nextLessonRows = await sql`
            SELECT
              l.id,
              l.title,
              l.slug          AS lesson_slug,
              cc.slug         AS chapter_slug,
              cm.slug         AS module_slug
            FROM course_lessons l
            JOIN course_chapters cc ON cc.id = l.chapter_id
            JOIN course_modules  cm ON cm.id = cc.module_id
            WHERE l.is_published = true
              AND l.id NOT IN (
                SELECT lesson_id FROM course_lesson_progress
                WHERE enrollment_id = ${enrollmentId} AND status = 'completed'
              )
            ORDER BY cm.order_index ASC, cc.order_index ASC, l.order_index ASC
            LIMIT 1
          `
          const nextLesson = nextLessonRows[0] as
            | { id: number; title: string; lesson_slug: string; chapter_slug: string; module_slug: string }
            | undefined

          const lessonsCompletedThisWeek = Number(weekLessonsRow?.count ?? 0)
          const totalLessonsCompleted = Number(totalCompletedRow?.count ?? 0)
          const progressPercent =
            totalLessons > 0
              ? Math.round((totalLessonsCompleted / totalLessons) * 100)
              : 0
          const quizzesTakenThisWeek = Number(weekQuizRow?.count ?? 0)
          const avgQuizScoreThisWeek =
            quizzesTakenThisWeek > 0 ? Number(weekQuizRow?.avg_score ?? null) : null

          const BASE_URL =
            process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

          const stats: WeeklyProgressStats = {
            lessonsCompletedThisWeek,
            totalLessonsCompleted,
            totalLessons,
            progressPercent,
            quizzesTakenThisWeek,
            avgQuizScoreThisWeek,
            currentStreak,
            nextLessonTitle: nextLesson?.title,
            nextLessonUrl:
              nextLesson?.module_slug && nextLesson?.chapter_slug && nextLesson?.lesson_slug
                ? `${BASE_URL}/course/module/${nextLesson.module_slug}/${nextLesson.chapter_slug}/${nextLesson.lesson_slug}`
                : undefined,
          }

          const sent = await sendWeeklyProgressEmail(email, name, stats)

          if (sent) {
            progressSent++
            await sql`
              INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
              VALUES (
                ${email},
                'course_weekly_progress',
                ${JSON.stringify({ enrollment_id: enrollmentId, week_start: weekAgo, lessons_this_week: lessonsCompletedThisWeek, progress_percent: progressPercent })}::jsonb,
                ${now.toISOString()},
                null
              )
            `
          } else {
            errors++
            await sql`
              INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
              VALUES (
                ${email},
                'course_weekly_progress',
                ${JSON.stringify({ enrollment_id: enrollmentId })}::jsonb,
                null,
                'Send failed'
              )
            `
          }
        }
      } catch (enrollmentErr) {
        console.error(`[COURSE-DIGEST] Error processing enrollment ${enrollmentId}:`, enrollmentErr)
        errors++
      }
    }

    return NextResponse.json({ progressSent, inactivitySent, errors })
  } catch (err) {
    console.error('[COURSE-DIGEST] Cron error:', err)
    return NextResponse.json(
      { error: 'Internal error', progressSent, inactivitySent, errors },
      { status: 500 },
    )
  }
}
