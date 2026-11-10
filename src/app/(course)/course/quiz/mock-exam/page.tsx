'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { events } from '@/lib/analytics'

interface QuizOption {
  id: number
  text: string
}

interface QuizQuestion {
  id: number
  questionText: string
  difficulty: string
  topicTag: string
  options: QuizOption[]
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function MockExamPage() {
  const [phase, setPhase] = useState<'intro' | 'loading' | 'exam' | 'submitting' | 'results'>('intro')
  const [attemptId, setAttemptId] = useState<number | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState(150 * 60) // 150 minutes
  const [score, setScore] = useState<number | null>(null)
  const [passed, setPassed] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [error, setError] = useState('')

  // Timer
  useEffect(() => {
    if (phase !== 'exam') return
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Auto-submit when time runs out
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  const startExam = useCallback(async () => {
    setPhase('loading')
    try {
      const res = await fetch('/api/course/quiz/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quizType: 'mock_exam', count: 120 }),
      })
      const data = await res.json()
      if (data.error) { setError(data.error); return }
      setAttemptId(data.attemptId)
      setQuestions(data.questions)
      if (data.timeLimit) setTimeLeft(data.timeLimit)
      setPhase('exam')
      events.courseQuizStarted('mock_exam', 'all')
    } catch {
      setError('Failed to start exam')
    }
  }, [])

  const submitExam = useCallback(async () => {
    if (!attemptId) return
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase('submitting')

    const formattedAnswers = questions.map((q) => ({
      questionId: q.id,
      selectedOptionId: answers[q.id] ?? null,
    }))

    try {
      const res = await fetch('/api/course/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attemptId, answers: formattedAnswers }),
      })
      const data = await res.json()
      setScore(data.score)
      setPassed(data.passed)
      setCorrectCount(data.correctAnswers)
      setTotalCount(data.totalQuestions)
      setPhase('results')
      events.courseQuizCompleted('mock_exam', data.score ?? 0, data.passed ?? false)
      if (data.passed) events.courseExamPassed('mock_exam', data.score ?? 0)
    } catch {
      setError('Failed to submit exam')
    }
  }, [attemptId, questions, answers])

  // Auto-submit when time runs out
  useEffect(() => {
    if (timeLeft === 0 && phase === 'exam') {
      submitExam()
    }
  }, [timeLeft, phase, submitExam])

  // Intro screen
  if (phase === 'intro') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <Link href="/course/dashboard" className="mb-8 block text-sm text-gray-500 hover:text-gray-900">
            &larr; Back to Dashboard
          </Link>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#EA580C]">PSI Format Simulation</p>
          <h1 className="mb-3 text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Full Mock Exam
          </h1>
          <p className="mb-6 text-gray-600">
            Timed and structured to match the actual Virginia PSI real estate exam. Clear your schedule before you start.
          </p>
          <div className="mb-8 grid grid-cols-3 gap-3">
            <div className="rounded-xl border-2 border-gray-800 p-4 text-center">
              <p className="text-2xl font-extrabold text-gray-900">120</p>
              <p className="text-xs text-gray-500 mt-1">Questions</p>
            </div>
            <div className="rounded-xl border-2 border-gray-800 p-4 text-center">
              <p className="text-2xl font-extrabold text-gray-900">150</p>
              <p className="text-xs text-gray-500 mt-1">Minutes</p>
            </div>
            <div className="rounded-xl border-2 border-[#EA580C] bg-[#EA580C]/5 p-4 text-center">
              <p className="text-2xl font-extrabold text-[#EA580C]">70%</p>
              <p className="text-xs text-gray-500 mt-1">To pass</p>
            </div>
          </div>
          <button
            onClick={startExam}
            className="w-full rounded-lg bg-[#EA580C] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#e0740f]"
          >
            Begin Exam
          </button>
          <p className="mt-3 text-xs text-center text-gray-400">National threshold 70% &middot; State portion 75%</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-red-600">{error}</p>
          <Link href="/course/dashboard" className="text-gray-700 hover:underline">Back to Dashboard</Link>
        </div>
      </div>
    )
  }

  if (phase === 'loading' || phase === 'submitting') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">{phase === 'loading' ? 'Loading exam...' : 'Submitting your exam...'}</p>
      </div>
    )
  }

  // Results
  if (phase === 'results') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="w-full max-w-sm">
          <div className={`mb-6 rounded-2xl border-2 p-8 text-center ${passed ? 'border-green-300 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            <p className={`text-6xl font-extrabold ${passed ? 'text-green-700' : 'text-red-700'}`}>
              {score}%
            </p>
            <h2 className={`mt-2 text-xl font-bold ${passed ? 'text-green-700' : 'text-red-700'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              {passed ? 'Exam Passed' : 'Not There Yet'}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {correctCount} of {totalCount} correct
            </p>
          </div>
          {passed ? (
            <p className="mb-6 text-sm text-center text-gray-600">
              You hit the passing threshold. Book your PSI exam while confidence is high.
            </p>
          ) : (
            <p className="mb-6 text-sm text-center text-gray-600">
              Review the modules where you struggled, then come back and try again.
            </p>
          )}
          <div className="flex gap-3">
            <Link href="/course/dashboard" className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50">
              Dashboard
            </Link>
            <button
              onClick={() => { setPhase('intro'); setAnswers({}); setCurrentIndex(0); }}
              className="flex-1 rounded-lg bg-[#EA580C] px-4 py-3 text-sm font-bold text-white hover:bg-[#e0740f]"
            >
              Retake Exam
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Exam phase
  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Timer header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-6 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <span className="text-sm text-gray-500">
            Q{currentIndex + 1}/{questions.length}
          </span>
          <span className={`font-mono text-lg font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-900'}`}>
            {formatTime(timeLeft)}
          </span>
          <button
            onClick={submitExam}
            className="rounded-lg bg-[#EA580C] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#e0740f]"
          >
            Submit ({answeredCount}/{questions.length})
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8">
        {currentQuestion && (
          <div>
            <h2 className="mb-6 text-lg font-bold text-gray-900">
              {currentQuestion.questionText}
            </h2>
            <div className="space-y-3">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: opt.id }))}
                  className={`w-full rounded-xl border p-4 text-left text-sm transition ${
                    answers[currentQuestion.id] === opt.id
                      ? 'border-[#EA580C] bg-[#EA580C]/5 font-medium'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-30"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))}
                disabled={currentIndex === questions.length - 1}
                className="rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-700 disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
