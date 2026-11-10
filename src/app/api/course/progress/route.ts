import { NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, getEnrollmentStats, getLessonProgress, getUserBadges, getCourseActivityLog } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

export async function GET() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ enrolled: false })
  }

  try {
    const [stats, lessons, badges, recentActivity] = await Promise.all([
      getEnrollmentStats(enrollment.id),
      getLessonProgress(enrollment.id),
      getUserBadges(enrollment.id),
      getCourseActivityLog(enrollment.id, 20),
    ])

    return NextResponse.json({
      enrolled: true,
      enrollment,
      stats,
      lessons,
      badges,
      recentActivity,
    })
  } catch (err) {
    console.error('[COURSE] Progress fetch failed:', err)
    return NextResponse.json({ error: 'Failed to load progress' }, { status: 500 })
  }
}
