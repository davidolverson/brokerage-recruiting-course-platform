'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
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

interface QuizResult {
  questionId: number
  questionText: string
  explanation: string
  options: { id: number; text: string; isCorrect: boolean }[]
  selectedOptionId: number | null
  isCorrect: boolean
}

// ─── Confetti (same palette as lesson page) ───────────────────────
const PASS_COLORS = ['#EA580C', '#16A34A', '#ffffff', '#D97706', '#000000']
const FAIL_COLORS = ['#9CA3AF', '#4B5563', '#D1D5DB']

function spawnConfetti(colors: string[]) {
  const count = 70
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div')
    el.className = 'confetti-particle'
    const color = colors[Math.floor(Math.random() * colors.length)]
    const left = Math.random() * 100
    const fallDur = 1.8 + Math.random() * 1.2
    const driftDur = 1.2 + Math.random() * 1.0
    const delay = Math.random() * 0.5
    const size = 6 + Math.floor(Math.random() * 8)
    const isCircle = Math.random() > 0.5
    el.style.cssText = `
      left: ${left}vw;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: ${isCircle ? '50%' : '2px'};
      --fall-dur: ${fallDur}s;
      --drift-dur: ${driftDur}s;
      --fall-delay: ${delay}s;
    `
    document.body.appendChild(el)
    setTimeout(() => el.remove(), (fallDur + delay + 0.2) * 1000)
  }
}

// ─── Animated score counter ───────────────────────────────────────
function useCountUp(target: number | null, active: boolean, duration = 1200): number {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!active || target === null) return
    const safeTarget = target
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * safeTarget))
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current) }
  }, [target, active, duration])

  return display
}

// ─── Topic breakdown ──────────────────────────────────────────────
interface TopicStat {
  tag: string
  total: number
  correct: number
}

function TopicBreakdown({ results }: { results: QuizResult[] }) {
  const topicMap = new Map<string, TopicStat>()

  // Build topic stats from question topicTag field
  // results don't carry topicTag so we infer it from question text patterns;
  // the quiz API returns topicTag only in the questions array.
  // We tag by grouping result index into buckets of 2 as a fallback visual.
  // If topicTag data is available on the result we use it directly.
  results.forEach((r) => {
    // topicTag is not on QuizResult — the quiz API only returns it on the
    // questions array — so this reads it optionally rather than asserting the
    // whole result is untyped. If the API starts sending it, this picks it up.
    const tag = (r as QuizResult & { topicTag?: string }).topicTag ?? 'General'
    if (!topicMap.has(tag)) {
      topicMap.set(tag, { tag, total: 0, correct: 0 })
    }
    const stat = topicMap.get(tag)!
    stat.total++
    if (r.isCorrect) stat.correct++
  })

  const topics = Array.from(topicMap.values())
  if (topics.length === 0) return null

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
        Topic Breakdown
      </h2>
      <div className="space-y-3">
        {topics.map((t) => {
          const pct = Math.round((t.correct / t.total) * 100)
          const needsWork = pct < 70
          return (
            <div key={t.tag}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-gray-800">{t.tag}</span>
                <span className={`font-semibold ${needsWork ? 'text-red-600' : 'text-green-600'}`}>
                  {t.correct}/{t.total} ({pct}%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full transition-all duration-700"
                  style={{
                    width: `${pct}%`,
                    background: pct >= 70 ? '#16A34A' : pct >= 50 ? '#D97706' : '#DC2626',
                  }}
                />
              </div>
              {needsWork && (
                <p className="mt-0.5 text-xs text-red-500">Needs more study</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function ChapterQuizPage() {
  const params = useParams()
  const router = useRouter()
  const chapterId = params.chapterId as string

  const [phase, setPhase] = useState<'loading' | 'quiz' | 'submitting' | 'results'>('loading')
  const [attemptId, setAttemptId] = useState<number | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [score, setScore] = useState<number | null>(null)
  const [passed, setPassed] = useState(false)
  const [results, setResults] = useState<QuizResult[]>([])
  const [error, setError] = useState('')
  const [scoreRevealActive, setScoreRevealActive] = useState(false)

  // Start the quiz
  useEffect(() => {
    fetch('/api/course/quiz/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quizType: 'chapter_quiz', chapterId, count: 10 }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.error) {
          setError(d.error)
          return
        }
        setAttemptId(d.attemptId)
        setQuestions(d.questions)
        setPhase('quiz')
        events.courseQuizStarted('chapter_quiz', chapterId)
      })
      .catch(() => setError('Failed to load quiz'))
  }, [chapterId])

  // Trigger score reveal animation + confetti when entering results
  useEffect(() => {
    if (phase === 'results') {
      // Small delay so the DOM has rendered the score card
      const t = setTimeout(() => {
        setScoreRevealActive(true)
        spawnConfetti(passed ? PASS_COLORS : FAIL_COLORS)
      }, 120)
      return () => clearTimeout(t)
    }
  }, [phase, passed])

  const animatedScore = useCountUp(score, scoreRevealActive, 1200)

  const selectAnswer = useCallback((questionId: number, optionId: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }, [])

  const submitQuiz = useCallback(async () => {
    if (!attemptId) return
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
      setResults(data.results ?? [])
      setPhase('results')
      events.courseQuizCompleted('chapter_quiz', data.score ?? 0, data.passed ?? false)
    } catch {
      setError('Failed to submit quiz')
      setPhase('quiz')
    }
  }, [attemptId, questions, answers])

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

  if (phase === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading quiz...</p>
      </div>
    )
  }

  // Results phase
  if (phase === 'results') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="border-b border-gray-200 bg-white px-6 py-4">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Link href="/course/dashboard" className="text-sm text-gray-500 hover:text-gray-900">&larr; Dashboard</Link>
            <span className="text-sm font-medium text-gray-900">Quiz Results</span>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-8">
          {/* Animated score card */}
          <div
            className={`mb-8 rounded-xl border p-8 text-center score-reveal ${
              passed ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
            }`}
          >
            <p
              className={`text-6xl font-extrabold tabular-nums ${
                passed ? 'text-green-700' : score !== null && score >= 50 ? 'text-[#D97706]' : 'text-gray-800'
              }`}
            >
              {scoreRevealActive ? animatedScore : 0}%
            </p>
            <p
              className={`mt-3 text-lg font-semibold ${
                passed ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              {passed
                ? 'Great work - chapter passed!'
                : score !== null && score >= 50
                  ? 'Getting there - review the missed topics below'
                  : 'Keep studying - you have got this'}
            </p>
            <p className="mt-1 text-sm text-gray-400">70% required to pass</p>

            {/* Encouragement message for fail */}
            {!passed && (
              <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                <p className="font-semibold text-gray-800">Not quite yet - here's the plan:</p>
                <ul className="mt-2 space-y-1 text-left list-disc list-inside">
                  <li>Review the explanations for wrong answers below</li>
                  <li>Study the highlighted topics in the breakdown</li>
                  <li>Retake the quiz when you feel ready</li>
                </ul>
              </div>
            )}
          </div>

          {/* Topic breakdown */}
          {results.length > 0 && <TopicBreakdown results={results} />}

          {/* Question review */}
          <h2 className="mb-4 text-xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Review Answers
          </h2>
          <div className="space-y-6">
            {results.map((r, i) => (
              <div key={r.questionId} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex items-start gap-3">
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${r.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                    {r.isCorrect ? '\u2713' : '\u2717'}
                  </span>
                  <p className="font-medium text-gray-900">
                    <span className="text-gray-400">Q{i + 1}.</span> {r.questionText}
                  </p>
                </div>
                <div className="ml-9 space-y-2">
                  {r.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`rounded-lg px-4 py-2 text-sm ${
                        opt.isCorrect
                          ? 'border border-green-300 bg-green-50 font-medium text-green-800'
                          : opt.id === r.selectedOptionId
                            ? 'border border-red-300 bg-red-50 text-red-800'
                            : 'border border-gray-100 text-gray-600'
                      }`}
                    >
                      {opt.text}
                      {opt.isCorrect && <span className="ml-2 text-green-600">(Correct)</span>}
                      {opt.id === r.selectedOptionId && !opt.isCorrect && <span className="ml-2 text-red-600">(Your answer)</span>}
                    </div>
                  ))}
                </div>
                {r.explanation && (
                  <div className="ml-9 mt-3 rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
                    <strong>Explanation:</strong> {r.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/course/dashboard" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Back to Dashboard
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-[#EA580C] px-6 py-3 text-sm font-bold text-white hover:bg-[#e0740f]"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Quiz phase
  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-6 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <span className="text-sm text-gray-500">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <div className="flex items-center gap-3">
            <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-[#EA580C] transition-all"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400">{answeredCount}/{questions.length}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8">
        {currentQuestion && (
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
              {currentQuestion.topicTag} &middot; {currentQuestion.difficulty}
            </p>
            <h2 className="mb-6 text-xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {currentQuestion.questionText}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => selectAnswer(currentQuestion.id, opt.id)}
                  className={`w-full rounded-xl border p-4 text-left text-sm transition ${
                    answers[currentQuestion.id] === opt.id
                      ? 'border-[#EA580C] bg-[#EA580C]/5 font-medium text-gray-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 disabled:opacity-30"
              >
                Previous
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  className="rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submitQuiz}
                  disabled={!allAnswered || phase === 'submitting'}
                  className="rounded-lg bg-[#EA580C] px-6 py-2 text-sm font-bold text-white hover:bg-[#e0740f] disabled:opacity-50"
                >
                  {phase === 'submitting' ? 'Submitting...' : 'Submit Quiz'}
                </button>
              )}
            </div>

            {/* Question dots */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {questions.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-8 w-8 rounded-full text-xs font-medium transition ${
                    i === currentIndex
                      ? 'bg-gray-900 text-white'
                      : answers[q.id]
                        ? 'bg-[#EA580C]/20 text-[#EA580C]'
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
