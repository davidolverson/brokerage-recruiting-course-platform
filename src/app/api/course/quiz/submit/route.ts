import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, submitQuizAttempt, awardBadge } from '@/lib/db/course'

export const dynamic = 'force-dynamic'

interface SubmittedAnswer {
  questionId: number
  selectedOptionId: number
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

  const body = await request.json().catch(() => ({}))
  const attemptId = parseInt(body.attemptId)
  const answers = body.answers as SubmittedAnswer[]

  if (!attemptId || !Array.isArray(answers) || answers.length === 0) {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 })
  }

  // Verify this attempt belongs to this enrollment
  const url = process.env.DATABASE_URL
  if (!url) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
  }
  const sql = neon(url)

  const attemptRows = await sql`
    SELECT * FROM course_quiz_attempts WHERE id = ${attemptId} AND enrollment_id = ${enrollment.id}
  `
  if (attemptRows.length === 0) {
    return NextResponse.json({ error: 'Attempt not found' }, { status: 404 })
  }
  if (attemptRows[0].completed_at) {
    return NextResponse.json({ error: 'Quiz already submitted' }, { status: 400 })
  }

  // Look up correct answers for all submitted questions
  const questionIds = answers.map((a) => a.questionId)
  const correctOptions = await sql`
    SELECT question_id, id as option_id, is_correct
    FROM course_quiz_options
    WHERE question_id = ANY(${questionIds})
  ` as { question_id: number; option_id: number; is_correct: boolean }[]

  // Grade each answer
  const responses = answers.map((answer) => {
    const correctOption = correctOptions.find(
      (o) => o.question_id === answer.questionId && o.option_id === answer.selectedOptionId
    )
    return {
      questionId: answer.questionId,
      selectedOptionId: answer.selectedOptionId,
      isCorrect: correctOption?.is_correct ?? false,
    }
  })

  // Submit and score
  const attempt = await submitQuizAttempt(attemptId, responses)

  // Award badges based on score
  if (attempt.score !== null) {
    if (attempt.score >= 90) await awardBadge(enrollment.id, 'quiz_ace')
    if (attempt.score === 100) await awardBadge(enrollment.id, 'perfect_score')
    if (attempt.quiz_type === 'mock_exam' && attempt.score >= 80) {
      await awardBadge(enrollment.id, 'mock_exam_ready')
    }
  }

  // Fetch full question details with explanations for the results page
  const questionDetails = await sql`
    SELECT q.id, q.question_text, q.explanation, q.topic_tag,
           json_agg(json_build_object(
             'id', o.id,
             'text', o.option_text,
             'isCorrect', o.is_correct
           ) ORDER BY o.order_index) as options
    FROM course_quiz_questions q
    JOIN course_quiz_options o ON o.question_id = q.id
    WHERE q.id = ANY(${questionIds})
    GROUP BY q.id
  ` as { id: number; question_text: string; explanation: string; topic_tag: string; options: { id: number; text: string; isCorrect: boolean }[] }[]

  // Build results with user's answers
  const results = questionDetails.map((q) => {
    const userResponse = responses.find((r) => r.questionId === q.id)
    return {
      questionId: q.id,
      questionText: q.question_text,
      explanation: q.explanation,
      topicTag: q.topic_tag,
      options: q.options,
      selectedOptionId: userResponse?.selectedOptionId ?? null,
      isCorrect: userResponse?.isCorrect ?? false,
    }
  })

  return NextResponse.json({
    attemptId: attempt.id,
    score: attempt.score,
    totalQuestions: attempt.total_questions,
    correctAnswers: attempt.correct_answers,
    passed: attempt.passed,
    timeTaken: attempt.time_taken_seconds,
    results,
  })
}
