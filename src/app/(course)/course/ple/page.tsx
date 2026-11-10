import { redirect } from 'next/navigation'
import { getServerSession } from '@/lib/auth-server'
import { getEnrollment, getEnrollmentStats } from '@/lib/db/course'
import { PLE_MODULE_INFO, PLE_COURSE_META } from '@/lib/data/ple-index'

export const metadata = {
  title: 'Post-License Education | Acme Realty',
  description: 'Virginia DPOR-approved 30-hour Post-License Education course for newly licensed real estate salespersons.',
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"
        style={{ width: `${Math.min(percent, 100)}%` }}
      />
    </div>
  )
}

function ModuleCard({
  module,
  isLocked,
  isComplete,
}: {
  module: (typeof PLE_MODULE_INFO)[number]
  isLocked: boolean
  isComplete: boolean
}) {
  const statusColor = isComplete
    ? 'border-green-500/40 bg-green-500/5'
    : isLocked
      ? 'border-white/10 bg-white/[0.02] opacity-60'
      : 'border-orange-500/30 bg-orange-500/5'

  return (
    <div className={`rounded-xl border p-5 ${statusColor} transition-all`}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-white/50">
          Module {module.number}
        </span>
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60">
          {module.creditHours} hrs
        </span>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-white">{module.title}</h3>
      <p className="mb-3 text-sm text-white/50">{module.dporCategory}</p>

      {isComplete ? (
        <div className="flex items-center gap-1.5 text-sm text-green-400">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Complete
        </div>
      ) : isLocked ? (
        <div className="flex items-center gap-1.5 text-sm text-white/30">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Complete previous module first
        </div>
      ) : (
        <a
          href={`/course/module/${module.slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Continue
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  )
}

export default async function PleDashboard() {
  const session = await getServerSession()
  if (!session) redirect('/course/signup?redirect=/course/ple')

  const enrollment = await getEnrollment(session.user.id, 'ple')

  // If not enrolled, show enrollment CTA
  if (!enrollment) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10">
              <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="mb-2 text-2xl font-bold text-white">Virginia Post-License Education</h1>
            <p className="mb-1 text-white/60">30-Hour DPOR-Approved Course</p>
            <p className="mb-6 text-sm text-white/40">
              Required for all newly licensed Virginia real estate salespersons before first license renewal.
            </p>

            <div className="mb-8 grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-2xl font-bold text-orange-500">30</div>
                <div className="text-xs text-white/50">Credit Hours</div>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-2xl font-bold text-orange-500">9</div>
                <div className="text-xs text-white/50">Modules</div>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-2xl font-bold text-orange-500">300+</div>
                <div className="text-xs text-white/50">Quiz Questions</div>
              </div>
            </div>

            <form action="/api/course/ple-enroll" method="POST">
              <button
                type="submit"
                className="rounded-xl bg-orange-500 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-orange-600"
              >
                Enroll Now - Free
              </button>
            </form>

            <p className="mt-4 text-xs text-white/30">
              {PLE_COURSE_META.dporApprovalStatement}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Show PLE dashboard
  const stats = await getEnrollmentStats(enrollment.id)
  const isComplete = enrollment.status === 'completed' || stats.progressPercent >= 100

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Post-License Education</h1>
          <p className="mt-1 text-white/50">
            Virginia DPOR | 30 Credit Hours | {PLE_MODULE_INFO.length} Modules
          </p>
        </div>

        {/* Progress overview */}
        <div className="mb-8 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-white/60">Overall Progress</span>
            <span className="text-sm font-bold text-orange-500">{stats.progressPercent}%</span>
          </div>
          <ProgressBar percent={stats.progressPercent} />

          <div className="mt-4 grid grid-cols-4 gap-4">
            <div>
              <div className="text-xl font-bold text-white">{stats.completedLessons}/{stats.totalLessons}</div>
              <div className="text-xs text-white/40">Lessons</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">{stats.quizzesTaken}</div>
              <div className="text-xs text-white/40">Quizzes Passed</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">{stats.avgQuizScore > 0 ? `${stats.avgQuizScore}%` : '--'}</div>
              <div className="text-xs text-white/40">Avg Score</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">{Math.round(stats.totalTimeSpent / 3600)}h</div>
              <div className="text-xs text-white/40">Time Logged</div>
            </div>
          </div>
        </div>

        {/* Certificate button if complete */}
        {isComplete && (
          <div className="mb-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6 text-center">
            <h2 className="mb-2 text-xl font-bold text-green-400">Course Complete!</h2>
            <p className="mb-4 text-sm text-white/50">
              Your PLE certificate is ready. Report your completion to DPOR.
            </p>
            <a
              href="/api/course/ple-certificate?format=html"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              View PLE Certificate
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}

        {/* Module grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLE_MODULE_INFO.map((module, idx) => (
            <ModuleCard
              key={module.slug}
              module={module}
              isLocked={false} // All modules accessible - PLE students can study in any order
              isComplete={isComplete} // Full course completion flag
            />
          ))}
        </div>

        {/* DPOR notice */}
        <p className="mt-8 text-center text-xs text-white/20">
          {PLE_COURSE_META.dporApprovalStatement}
        </p>
      </div>
    </div>
  )
}
