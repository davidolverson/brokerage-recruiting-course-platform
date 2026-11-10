import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, markLessonComplete, getEnrollmentStats, awardBadge, resolveLessonId } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lessonId: string }> },
) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
  }

  const { lessonId } = await params
  const lessonIdNum = await resolveLessonId(lessonId)
  if (lessonIdNum === null) {
    return NextResponse.json({ error: 'Invalid lesson ID' }, { status: 400 })
  }

  const body = await request.json().catch(() => ({}))
  const timeSpentSeconds = Math.max(0, Math.min(parseInt(body.timeSpentSeconds) || 0, 7200))

  const progress = await markLessonComplete(enrollment.id, lessonIdNum, timeSpentSeconds)

  // Re-fetch enrollment for fresh streak data (markLessonComplete updates streaks)
  const [stats, freshEnrollment] = await Promise.all([
    getEnrollmentStats(enrollment.id),
    getEnrollment(session.user.id),
  ])

  // First lesson badge
  if (stats.completedLessons === 1) {
    await awardBadge(enrollment.id, 'first_lesson')
  }

  // Progress milestone badges
  if (stats.progressPercent >= 25) await awardBadge(enrollment.id, 'quarter_complete')
  if (stats.progressPercent >= 50) await awardBadge(enrollment.id, 'half_complete')
  if (stats.progressPercent >= 75) await awardBadge(enrollment.id, 'three_quarter_complete')
  if (stats.progressPercent >= 100) await awardBadge(enrollment.id, 'course_graduate')

  // Streak badges (use fresh data after markLessonComplete updated streaks)
  const streak = freshEnrollment?.current_streak_days ?? 0
  if (streak >= 7) await awardBadge(enrollment.id, 'streak_7')
  if (streak >= 30) await awardBadge(enrollment.id, 'streak_30')

  return NextResponse.json({ progress, stats })
}
