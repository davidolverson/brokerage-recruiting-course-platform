'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { events } from '@/lib/analytics'
import XPBar from '@/components/course/XPBar'

interface EnrollmentStats {
  totalLessons: number
  completedLessons: number
  progressPercent: number
  avgQuizScore: number
  quizzesTaken: number
  examReadinessScore: number
  currentStreak: number
  longestStreak: number
  totalTimeSpent: number
  badgesEarned: number
}

interface Badge {
  badge_name: string
  badge_slug: string
  badge_icon: string
  earned_at: string
}

interface ProgressData {
  enrolled: boolean
  stats: EnrollmentStats
  badges: Badge[]
}

const MODULES = [
  { slug: 'virginia-real-estate-law', title: 'Virginia Real Estate Law & Regulations', chapters: 5, hours: 6.2 },
  { slug: 'property-ownership-land-use', title: 'Property Ownership & Land Use', chapters: 4, hours: 4.3 },
  { slug: 'contracts-agency', title: 'Contracts & Agency', chapters: 5, hours: 5.8, critical: true },
  { slug: 'finance-valuation', title: 'Finance & Valuation', chapters: 4, hours: 4.8 },
  { slug: 'practice-ethics', title: 'Practice & Ethics', chapters: 4, hours: 4.5 },
  { slug: 'virginia-specific-regulations', title: 'Virginia-Specific Regulations', chapters: 4, hours: 3.7 },
  { slug: 'real-property-concepts', title: 'Real Property Concepts & Estates', chapters: 4, hours: 6.3 },
  { slug: 'liens-encumbrances-title', title: 'Liens, Encumbrances & Title', chapters: 4, hours: 5.3 },
  { slug: 'advanced-finance-taxation', title: 'Advanced Real Estate Finance & Taxation', chapters: 4, hours: 5.8 },
  { slug: 'virginia-residential-transaction', title: 'Virginia Residential Transaction', chapters: 4, hours: 5.5 },
  { slug: 'commercial-investment-real-estate', title: 'Commercial & Investment Real Estate', chapters: 4, hours: 5.5 },
  { slug: 'risk-management-professional-development', title: 'Risk Management & Professional Development', chapters: 4, hours: 5.5 },
]

const DAILY_GOAL = 2 // lessons per day

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}

// Animates a number from 0 to target over ~800ms
function useCountUp(target: number, active: boolean, duration = 800): number {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target))
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current) }
  }, [target, active, duration])

  return display
}

// Circular progress gauge
function ExamReadinessGauge({ score }: { score: number }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const color =
    score >= 70 ? '#16A34A' : score >= 50 ? '#D97706' : '#DC2626'

  const label =
    score >= 70 ? 'Ready to test!' : score >= 50 ? 'Getting close' : 'Keep studying'

  return (
    <div className="flex flex-col items-center">
      <svg width="128" height="128" viewBox="0 0 128 128" className="rotate-[-90deg]">
        {/* Track */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="12"
        />
        {/* Arc */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="gauge-arc"
          style={{
            ['--gauge-total' as string]: circumference,
            ['--gauge-offset' as string]: offset,
            transition: 'stroke-dashoffset 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </svg>
      {/* Score label — rotate back to readable */}
      <div className="mt-[-104px] flex h-[128px] items-center justify-center">
        <div className="text-center">
          <p
            className="text-3xl font-extrabold leading-none"
            style={{ color, fontFamily: 'Manrope, sans-serif' }}
          >
            {score}%
          </p>
          <p className="mt-1 text-xs font-medium text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  )
}

// Daily goal tracker
function DailyGoalTracker({ completed }: { completed: number }) {
  const done = Math.min(completed, DAILY_GOAL)
  const pct = (done / DAILY_GOAL) * 100

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Daily Goal</p>
        <span className="text-xs font-bold text-gray-900">{done}/{DAILY_GOAL} lessons</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-2.5 rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: done >= DAILY_GOAL ? '#16A34A' : '#EA580C',
          }}
        />
      </div>
      <p className="mt-2 text-xs text-gray-400">
        {done >= DAILY_GOAL
          ? 'Daily goal reached! Great work.'
          : `Complete ${DAILY_GOAL - done} more lesson${DAILY_GOAL - done !== 1 ? 's' : ''} to hit your goal`}
      </p>
    </div>
  )
}

export default function CourseDashboardPage() {
  const router = useRouter()
  const [data, setData] = useState<ProgressData | null>(null)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { document.title = 'Dashboard | VA License Prep | Acme Realty' }, [])

  useEffect(() => {
    fetch('/api/course/progress')
      .then((r) => r.json())
      .then((d) => {
        setData(d)
        setLoading(false)
        // Small delay so CSS fade-up starts after paint
        requestAnimationFrame(() => setMounted(true))
      })
      .catch(() => setLoading(false))
  }, [])

  async function handleEnroll() {
    setEnrolling(true)
    const res = await fetch('/api/course/enroll', { method: 'POST' })
    if (res.ok) {
      events.courseEnrolled()
      router.refresh()
      window.location.reload()
    }
    setEnrolling(false)
  }

  // Animated counters — only run after data loads
  const completedCount = useCountUp(data?.stats?.completedLessons ?? 0, mounted, 900)
  const quizScore = useCountUp(data?.stats?.avgQuizScore ?? 0, mounted, 1000)
  const streakCount = useCountUp(data?.stats?.currentStreak ?? 0, mounted, 700)

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading your course...</p>
      </div>
    )
  }

  // Not enrolled yet - show enrollment CTA
  if (!data?.enrolled) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border-2 border-gray-800 p-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#EA580C]">Free Course</p>
          <h1 className="mb-3 text-2xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Virginia Real Estate License Prep
          </h1>
          <p className="mb-6 text-sm text-gray-600">
            60 hours of interactive content, chapter quizzes, and timed mock exams built for the PSI format.
          </p>
          <div className="mb-8 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-lg font-extrabold text-gray-900">60h</p>
              <p className="text-xs text-gray-500">Content</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-lg font-extrabold text-gray-900">200+</p>
              <p className="text-xs text-gray-500">Questions</p>
            </div>
            <div className="rounded-lg bg-[#EA580C]/10 p-3">
              <p className="text-lg font-extrabold text-[#EA580C]">$0</p>
              <p className="text-xs text-gray-500">Cost</p>
            </div>
          </div>
          <button
            onClick={handleEnroll}
            disabled={enrolling}
            className="w-full rounded-lg bg-[#EA580C] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#e0740f] disabled:opacity-50"
          >
            {enrolling ? 'Enrolling...' : 'Enroll and Begin Module 1'}
          </button>
          <Link href="/" className="mt-4 block text-sm text-gray-500 hover:text-gray-900">
            Back to Acme Realty
          </Link>
        </div>
      </div>
    )
  }

  const { badges = [] } = data
  const stats: EnrollmentStats = data.stats ?? {
    totalLessons: 0,
    completedLessons: 0,
    progressPercent: 0,
    avgQuizScore: 0,
    quizzesTaken: 0,
    examReadinessScore: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalTimeSpent: 0,
    badgesEarned: 0,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header bar */}
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-sm font-bold text-gray-900 hover:underline">
            Acme Realty
          </Link>
          <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            VA License Prep
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/course/quiz/mock-exam" className="rounded-lg border border-[#EA580C] px-3 py-1 text-xs font-semibold text-[#EA580C] hover:bg-[#EA580C]/5 transition">
              Mock Exam
            </Link>
          </div>
        </div>
      </header>

      {/* XP progress bar */}
      <div className="border-b border-gray-800 bg-[#0a0a0a] px-6 py-2.5">
        <div className="mx-auto max-w-6xl">
          <XPBar totalXP={stats.totalTimeSpent} compact />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* Exam Readiness gauge — prominent top section */}
        <div className={`mb-8 rounded-xl border-2 border-gray-900 bg-white p-6 fade-up fade-up-1`}>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Exam Readiness
              </h2>
              <p className="mb-4 text-sm text-gray-500">
                Based on your quiz performance across all chapters
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">70%</span> required to sit for the PSI exam
                </p>
                {stats.examReadinessScore >= 70 && (
                  <p className="font-semibold text-green-600">You are ready to book your exam!</p>
                )}
                {stats.examReadinessScore > 0 && stats.examReadinessScore < 70 && (
                  <p className="text-gray-500">
                    {70 - stats.examReadinessScore} more percentage points to go
                  </p>
                )}
                {stats.examReadinessScore === 0 && (
                  <p className="text-gray-400 italic">Complete chapter quizzes to see your score</p>
                )}
              </div>
            </div>
            <ExamReadinessGauge score={stats.examReadinessScore} />
          </div>
        </div>

        {/* Daily goal tracker */}
        <div className={`mb-6 fade-up fade-up-2`}>
          <DailyGoalTracker completed={stats.completedLessons % DAILY_GOAL} />
        </div>

        {/* Quick links */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          <Link
            href="/course/review"
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-[#EA580C] hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EA580C]/10 text-lg">
              🔁
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900">Daily Review</p>
              <p className="text-xs text-gray-500">Spaced repetition</p>
            </div>
          </Link>
          <Link
            href="/course/readiness"
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-[#EA580C] hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EA580C]/10 text-lg">
              📊
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900">Exam Readiness</p>
              <p className="text-xs text-gray-500">Mastery dashboard</p>
            </div>
          </Link>
          <Link
            href="/course/notes"
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-[#EA580C] hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EA580C]/10 text-lg">
              📝
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900">My Notes</p>
              <p className="text-xs text-gray-500">All your notes</p>
            </div>
          </Link>
        </div>

        {/* Animated stats row */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Progress */}
          <div className={`col-span-2 rounded-xl border-2 border-gray-800 bg-white p-5 sm:col-span-1 fade-up fade-up-2`}>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Course Progress</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">{stats.progressPercent}%</p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-2 rounded-full bg-[#EA580C] transition-all duration-700" style={{ width: `${stats.progressPercent}%` }} />
            </div>
            <p className="mt-1 text-xs text-gray-400">
              <span className="font-semibold text-gray-700">{completedCount}</span> of {stats.totalLessons} lessons
            </p>
          </div>

          <div className={`rounded-xl border border-gray-200 bg-white p-4 fade-up fade-up-3`}>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Avg Quiz Score</p>
            <p className="mt-1 text-2xl font-extrabold text-gray-900">
              {stats.quizzesTaken > 0 ? `${quizScore}%` : '--'}
            </p>
            {stats.quizzesTaken > 0 && (
              <p className="mt-0.5 text-xs text-gray-400">{stats.quizzesTaken} quiz{stats.quizzesTaken !== 1 ? 'zes' : ''}</p>
            )}
          </div>

          <div className={`rounded-xl border border-gray-200 bg-white p-4 fade-up fade-up-4`}>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Study Streak</p>
            <p className="mt-1 text-2xl font-extrabold text-gray-900">
              {streakCount}
              <span className="text-sm font-normal text-gray-400"> days</span>
            </p>
            {stats.longestStreak > 0 && <p className="mt-0.5 text-xs text-gray-400">Best: {stats.longestStreak}</p>}
          </div>

          <div className={`rounded-xl border border-gray-200 bg-white p-4 fade-up fade-up-5`}>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Time Studied</p>
            <p className="mt-1 text-2xl font-extrabold text-gray-900">{formatTime(stats.totalTimeSpent)}</p>
            {stats.badgesEarned > 0 && (
              <p className="mt-0.5 text-xs text-gray-400">{stats.badgesEarned} badge{stats.badgesEarned !== 1 ? 's' : ''} earned</p>
            )}
          </div>
        </div>

        {/* Modules */}
        <h2 className={`mb-4 text-xl font-bold text-gray-900 fade-up fade-up-5`} style={{ fontFamily: 'Manrope, sans-serif' }}>
          Course Modules
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <Link
              key={mod.slug}
              href={`/course/module/${mod.slug}`}
              className={`group rounded-xl border border-gray-200 bg-white p-6 transition hover:border-[#EA580C] hover:shadow-md fade-up`}
              style={{ animationDelay: `${0.28 + i * 0.07}s` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  {i + 1}
                </span>
                {mod.critical && (
                  <span className="rounded-full bg-[#EA580C]/10 px-2 py-0.5 text-xs font-medium text-[#EA580C]">
                    High Priority
                  </span>
                )}
              </div>
              <h3 className="mb-1 font-bold text-gray-900 group-hover:text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {mod.title}
              </h3>
              <p className="text-sm text-gray-500">
                {mod.chapters} chapters &middot; ~{mod.hours} hours
              </p>
            </Link>
          ))}
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className={`mt-8 fade-up fade-up-6`}>
            <h2 className="mb-4 text-xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Your Badges</h2>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div key={badge.badge_slug} className="flex items-center gap-2 rounded-full border border-[#EA580C]/30 bg-[#EA580C]/5 px-4 py-2">
                  <span className="text-lg">{badge.badge_icon}</span>
                  <span className="text-sm font-medium text-gray-900">{badge.badge_name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
