import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, getQuizAttempts } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
  }

  const url = new URL(request.url)
  const quizType = url.searchParams.get('quizType') ?? undefined
  const chapterId = url.searchParams.get('chapterId') ? parseInt(url.searchParams.get('chapterId')!) : undefined

  const attempts = await getQuizAttempts(enrollment.id, quizType, chapterId)

  return NextResponse.json({ attempts })
}
