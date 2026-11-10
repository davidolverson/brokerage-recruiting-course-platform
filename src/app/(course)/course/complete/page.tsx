'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { events } from '@/lib/analytics'

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

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}

const NEXT_STEPS = [
  {
    number: '01',
    title: 'Book Your PSI Exam',
    color: '#111111',
    content: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          Your next step is scheduling the Virginia real estate salesperson exam through PSI Exams.
          You have <strong>12 months from when you pass the exam</strong> to submit your license application
          to DPOR, so book your test soon while the material is fresh.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Create an account at <strong>psiexams.com</strong></li>
          <li>Select "Virginia Real Estate" as your exam type</li>
          <li>Choose a testing center near you, or opt for remote proctoring</li>
          <li>Exam fee is <strong>$60</strong> — paid to PSI at registration</li>
          <li>Bring two valid IDs to the test center; no study materials allowed in the room</li>
        </ul>
        <a
          href="https://www.psiexams.com/virginia-real-estate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-gray-800 px-4 py-2 text-xs font-bold text-gray-800 hover:bg-gray-800 hover:text-white transition"
        >
          Go to PSI Virginia Registration &rarr;
        </a>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Background Check & Fingerprinting',
    color: '#111111',
    content: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          Virginia requires a background check as part of your license application. DPOR uses
          IdentoGO (MorphoTrust) for fingerprinting. Plan ahead -- there can be wait times at
          fingerprinting locations.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Schedule fingerprinting at <strong>identogo.com</strong> using service code <strong>17YF7Y</strong></li>
          <li>Cost is approximately <strong>$52</strong></li>
          <li>DPOR reviews your criminal history -- prior offenses do not automatically disqualify you,
            but you must disclose everything accurately on your application</li>
          <li>Results are typically received within 3-5 business days</li>
          <li>Your exam score and background check results are valid for <strong>45 days</strong> after passing
            -- submit your application within that window</li>
        </ul>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Choose Your Path at Acme Realty',
    color: '#EA580C',
    content: (
      <div className="space-y-4 text-sm text-gray-600">
        <p>
          Once you pass the exam and get licensed, you need a broker to hang your license with.
          Acme Realty has two tracks designed for different goals:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-gray-800 p-5">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-900">Join a Team</p>
            <p className="mb-3 text-sm text-gray-600">
              Work alongside experienced agents. Get mentorship, leads, and systems from day one.
              Best if you want accountability and a built-in support structure.
            </p>
            <Link
              href="/join-a-team"
              className="block rounded-lg bg-black px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Learn About Our Teams
            </Link>
          </div>
          <div className="rounded-xl border-2 border-[#EA580C] p-5">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#EA580C]">Go Independent with Growth Network</p>
            <p className="mb-3 text-sm text-gray-600">
              Build your own brand under Acme's brokerage umbrella. Full commission splits,
              Acme's tech stack, and access to 10,000+ agents globally.
            </p>
            <Link
              href="/network"
              className="block rounded-lg bg-[#EA580C] px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#e0740f]"
            >
              Explore Growth Network
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Submit Your License Application',
    color: '#111111',
    content: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          After passing the PSI exam and completing fingerprinting, submit your salesperson license
          application through DPOR's Licensing Online system.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Application fee: <strong>$170</strong> (paid to DPOR)</li>
          <li>You will need the name and license number of your supervising or principal broker --
            that is us once you choose your path</li>
          <li>Apply at <strong>dpor.virginia.gov</strong> under "Licensing Online"</li>
          <li>Processing takes 2-5 business days once all documents are received</li>
          <li>Your license will be mailed to your broker of record</li>
        </ul>
        <a
          href="https://www.dpor.virginia.gov/Boards/Real-Estate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-gray-800 px-4 py-2 text-xs font-bold text-gray-800 hover:bg-gray-800 hover:text-white transition"
        >
          DPOR Real Estate Licensing &rarr;
        </a>
      </div>
    ),
  },
  {
    number: '05',
    title: 'Post-License Education (First Year)',
    color: '#111111',
    content: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          Virginia requires all new salespersons to complete <strong>30 hours of post-license education</strong>
          within their first license year. This is separate from continuing education and covers
          practical topics you will actually use in the field.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Required within the first 12 months of licensure -- no exceptions</li>
          <li>Courses must be from a DPOR-approved provider</li>
          <li>Topics include agency law, contracts, real estate finance, and fair housing in practice</li>
          <li>Failure to complete post-license education within the first year places your license
            in inactive status automatically</li>
          <li>Acme Realty can point you to approved, cost-effective providers once you are licensed</li>
        </ul>
      </div>
    ),
  },
]

export default function CourseCompletePage() {
  const router = useRouter()
  const [data, setData] = useState<ProgressData | null>(null)
  const [loading, setLoading] = useState(true)
  const [openStep, setOpenStep] = useState<number | null>(0)

  useEffect(() => {
    document.title = 'Course Complete! | VA License Prep | Acme Realty'
    events.courseCompleted()
  }, [])

  useEffect(() => {
    fetch('/api/course/progress')
      .then((r) => r.json())
      .then((d: ProgressData) => {
        setData(d)
        setLoading(false)
        // If not enrolled, redirect to course landing
        if (!d.enrolled) {
          router.replace('/course')
        }
      })
      .catch(() => {
        setLoading(false)
      })
  }, [router])

  function handleDownloadCertificate() {
    window.open('/api/course/certificate', '_blank')
  }

  function handlePrintCertificate() {
    window.open('/api/course/certificate?format=html', '_blank')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading your results...</p>
      </div>
    )
  }

  if (!data?.enrolled) {
    return null
  }

  const { stats, badges } = data
  const readinessLabel =
    stats.examReadinessScore >= 80
      ? 'Exam Ready'
      : stats.examReadinessScore >= 65
      ? 'Nearly There'
      : stats.examReadinessScore >= 50
      ? 'Good Progress'
      : 'Keep Studying'

  const readinessColor =
    stats.examReadinessScore >= 80
      ? 'text-green-600'
      : stats.examReadinessScore >= 65
      ? 'text-yellow-600'
      : 'text-orange-600'

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-sm font-bold text-gray-900 hover:underline">
            Acme Realty
          </Link>
          <Link href="/course/dashboard" className="text-sm text-gray-500 hover:text-[#EA580C]">
            &larr; Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Hero: congratulations */}
      <section className="border-b border-gray-100 bg-black px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#EA580C] text-3xl">
            &#127941;
          </div>
          <h1
            className="mb-3 text-4xl font-extrabold text-white sm:text-5xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            You Did It.
          </h1>
          <p className="mb-2 text-lg text-white/80">
            You have completed the Virginia Real Estate Pre-Licensing Prep Course.
          </p>
          <p className="text-sm text-white/60">
            Your certificate is ready. Your exam is next.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">

        {/* Certificate section */}
        <section>
          <div className="rounded-2xl border-2 border-gray-800 bg-gray-50 p-8">
            <div className="mb-6 text-center">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                Your Certificate
              </p>
              <h2
                className="text-2xl font-extrabold text-gray-900"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Certificate of Completion
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Virginia Real Estate Pre-Licensing Prep Course
              </p>
            </div>

            {/* SVG preview embed */}
            <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/api/course/certificate"
                alt="Your completion certificate"
                className="w-full"
                onError={(e) => {
                  // If not yet complete, show placeholder
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML =
                      '<div class="flex items-center justify-center py-12 text-gray-400 text-sm">Certificate preview available after course completion is confirmed.</div>'
                  }
                }}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={handleDownloadCertificate}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#EA580C] px-8 py-3 text-sm font-bold text-white shadow transition hover:bg-[#e0740f]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Certificate
              </button>
              <button
                onClick={handlePrintCertificate}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-800 px-8 py-3 text-sm font-bold text-gray-800 transition hover:bg-gray-800 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print / Save as PDF
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
              Share on LinkedIn, Instagram, or print it for your records. You earned it.
            </p>
          </div>
        </section>

        {/* Stats section */}
        <section>
          <h2
            className="mb-5 text-xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Your Final Stats
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-extrabold text-gray-900">{stats.completedLessons}</p>
              <p className="mt-0.5 text-xs text-gray-500">Lessons Completed</p>
              <p className="text-xs text-gray-400">of {stats.totalLessons}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-extrabold text-[#EA580C]">
                {stats.quizzesTaken > 0 ? `${stats.avgQuizScore}%` : '--'}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">Avg Quiz Score</p>
              {stats.quizzesTaken > 0 && (
                <p className="text-xs text-gray-400">{stats.quizzesTaken} quizzes</p>
              )}
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <p className={`text-2xl font-extrabold ${readinessColor}`}>
                {stats.examReadinessScore > 0 ? `${stats.examReadinessScore}%` : '--'}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">Exam Readiness</p>
              {stats.examReadinessScore > 0 && (
                <p className={`text-xs font-medium ${readinessColor}`}>{readinessLabel}</p>
              )}
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-extrabold text-gray-900">{formatTime(stats.totalTimeSpent)}</p>
              <p className="mt-0.5 text-xs text-gray-500">Time Studied</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-extrabold text-gray-900">{badges.length}</p>
              <p className="mt-0.5 text-xs text-gray-500">Badges Earned</p>
            </div>
          </div>

          {/* Badges earned */}
          {badges.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.badge_slug}
                  className="flex items-center gap-2 rounded-full border border-[#EA580C]/30 bg-[#EA580C]/5 px-4 py-2"
                >
                  <span className="text-lg">{badge.badge_icon}</span>
                  <span className="text-sm font-medium text-gray-900">{badge.badge_name}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Next Steps */}
        <section>
          <div className="mb-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">What Comes Next</p>
            <h2
              className="mt-1 text-xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Your Path to a Virginia License
            </h2>
          </div>
          <p className="mb-6 text-sm text-gray-500">
            The course is done. Here is exactly what you need to do to get your license and start your career.
          </p>

          <div className="space-y-3">
            {NEXT_STEPS.map((step, i) => {
              const isOpen = openStep === i
              return (
                <div
                  key={step.number}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <button
                    onClick={() => setOpenStep(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left transition hover:bg-gray-50"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                      style={{ background: step.color }}
                    >
                      {step.number}
                    </span>
                    <span className="flex-1 font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {step.title}
                    </span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 py-5">
                      {step.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA: Choose your path */}
        <section className="rounded-2xl border-2 border-[#EA580C] bg-[#FFF5EC] px-8 py-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#EA580C]">
            Ready to Join?
          </p>
          <h2
            className="mb-3 text-2xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            A Team Is Waiting for You at Acme Realty
          </h2>
          <p className="mb-8 text-sm text-gray-600">
            You completed the prep course. Once you pass your PSI exam and get licensed,
            reach out. We will help you land your first transaction.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/join-a-team"
              className="rounded-lg bg-black px-8 py-3 text-sm font-bold text-white shadow transition hover:bg-gray-800"
            >
              Join a Team
            </Link>
            <Link
              href="/network"
              className="rounded-lg bg-[#EA580C] px-8 py-3 text-sm font-bold text-white shadow transition hover:bg-[#e0740f]"
            >
              Go Independent with Growth Network
            </Link>
          </div>
        </section>

        {/* Footer note */}
        <p className="pb-8 text-center text-xs text-gray-400">
          Acme Realty &mdash; Brokered by Acme Realty. Virginia Real Estate License #0000-000000 (placeholder).
        </p>
      </div>
    </div>
  )
}
