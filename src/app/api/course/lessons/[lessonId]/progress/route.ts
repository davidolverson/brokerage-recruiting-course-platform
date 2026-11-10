import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, startLesson, updateLessonTimeSpent, resolveLessonId } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

// Heartbeat endpoint: tracks time spent on a lesson (called every 30s from the client)
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
  const action = body.action as string

  if (action === 'start') {
    const progress = await startLesson(enrollment.id, lessonIdNum)
    return NextResponse.json({ progress })
  }

  // Default: heartbeat with time update
  const additionalSeconds = Math.max(0, Math.min(parseInt(body.seconds) || 30, 120))
  await updateLessonTimeSpent(enrollment.id, lessonIdNum, additionalSeconds)
  return NextResponse.json({ ok: true })
}
