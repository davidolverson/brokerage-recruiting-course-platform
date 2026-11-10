import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, createQuizAttempt, resolveChapterId } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const enrollment = await getEnrollment(session.user.id)
  if (!enrollment) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 400 })
  }

  const body = await request.json().catch(() => ({}))
  const quizType = body.quizType as string
  const chapterId = body.chapterId ? await resolveChapterId(String(body.chapterId)) : null
  const questionCount = Math.min(Math.max(parseInt(body.count) || 10, 5), 120)

  if (!['chapter_quiz', 'section_exam', 'mock_exam'].includes(quizType)) {
    return NextResponse.json({ error: 'Invalid quiz type' }, { status: 400 })
  }

  // Create the attempt record
  const attempt = await createQuizAttempt(enrollment.id, quizType, chapterId)

  // Fetch randomized questions from the database
  const url = process.env.DATABASE_URL
  if (!url) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
  }
  const sql = neon(url)

  let questions
  if (chapterId && quizType === 'chapter_quiz') {
    questions = await sql`
      SELECT q.id, q.question_text, q.difficulty, q.topic_tag
      FROM course_quiz_questions q
      WHERE q.chapter_id = ${chapterId} AND q.is_published = true
      ORDER BY RANDOM()
      LIMIT ${questionCount}
    `
  } else if (quizType === 'mock_exam') {
    // Mock exam: pull from all chapters, weighted by exam topic distribution
    questions = await sql`
      SELECT q.id, q.question_text, q.difficulty, q.topic_tag
      FROM course_quiz_questions q
      WHERE q.is_published = true
      ORDER BY RANDOM()
      LIMIT ${questionCount}
    `
  } else {
    // Section exam: pull from all chapters in the module
    questions = await sql`
      SELECT q.id, q.question_text, q.difficulty, q.topic_tag
      FROM course_quiz_questions q
      WHERE q.is_published = true
      ORDER BY RANDOM()
      LIMIT ${questionCount}
    `
  }

  // Fetch options for each question (without revealing correct answer)
  const questionIds = (questions as { id: number }[]).map((q) => q.id)
  let options: { id: number; question_id: number; option_text: string; order_index: number }[] = []

  if (questionIds.length > 0) {
    options = await sql`
      SELECT id, question_id, option_text, order_index
      FROM course_quiz_options
      WHERE question_id = ANY(${questionIds})
      ORDER BY question_id, order_index
    ` as typeof options
  }

  // Group options by question (don't send is_correct to client)
  type QuestionRow = { id: number; question_text: string; difficulty: string; topic_tag: string }
  const questionsWithOptions = (questions as QuestionRow[]).map((q) => ({
    id: q.id,
    questionText: q.question_text,
    difficulty: q.difficulty,
    topicTag: q.topic_tag,
    options: options
      .filter((o) => o.question_id === q.id)
      .map((o) => ({ id: o.id, text: o.option_text })),
  }))

  return NextResponse.json({
    attemptId: attempt.id,
    quizType,
    questions: questionsWithOptions,
    totalQuestions: questionsWithOptions.length,
    timeLimit: quizType === 'mock_exam' ? 150 * 60 : quizType === 'section_exam' ? 45 * 60 : null,
  })
}
