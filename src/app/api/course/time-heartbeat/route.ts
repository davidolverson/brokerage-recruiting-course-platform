import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getDb } from '@/db'
import { courseEnrollments, courseLessonTimeEnforcement, courseLessonProgress } from '@/db/schema'
import { eq, and } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

// Time heartbeat endpoint - called every 30 seconds from the lesson reader
// Updates actual time spent and determines if student can proceed

export async function POST(req: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { enrollmentId, lessonId, secondsElapsed } = body

  if (!enrollmentId || !lessonId || typeof secondsElapsed !== 'number') {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Verify enrollment belongs to authenticated user
  const enrollment = await getDb()
    .select()
    .from(courseEnrollments)
    .where(eq(courseEnrollments.id, enrollmentId))
    .limit(1)

  if (enrollment.length === 0 || enrollment[0].userId !== session.user.id) {
    return NextResponse.json({ error: 'Enrollment not found or unauthorized' }, { status: 403 })
  }

  // Update time enforcement record
  const existing = await getDb()
    .select()
    .from(courseLessonTimeEnforcement)
    .where(
      and(
        eq(courseLessonTimeEnforcement.enrollmentId, enrollmentId),
        eq(courseLessonTimeEnforcement.lessonId, lessonId)
      )
    )
    .limit(1)

  if (existing.length === 0) {
    return NextResponse.json({ error: 'Time enforcement record not found' }, { status: 404 })
  }

  const record = existing[0]
  const newActual = Math.max(record.actualSeconds ?? 0, secondsElapsed)
  const canProceed = newActual >= record.minimumSeconds

  await getDb()
    .update(courseLessonTimeEnforcement)
    .set({
      actualSeconds: newActual,
      canProceed,
      lastHeartbeat: new Date(),
    })
    .where(eq(courseLessonTimeEnforcement.id, record.id))

  // Also update lesson progress time
  await getDb()
    .update(courseLessonProgress)
    .set({
      timeSpentSeconds: newActual,
    })
    .where(
      and(
        eq(courseLessonProgress.enrollmentId, enrollmentId),
        eq(courseLessonProgress.lessonId, lessonId)
      )
    )

  return NextResponse.json({
    actualSeconds: newActual,
    minimumSeconds: record.minimumSeconds,
    canProceed,
    remainingSeconds: canProceed ? 0 : record.minimumSeconds - newActual,
  })
}
