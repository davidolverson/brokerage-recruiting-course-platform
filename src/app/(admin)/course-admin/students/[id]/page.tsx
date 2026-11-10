'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import EmptyState from '@/components/admin/EmptyState'
import LoadingState from '@/components/admin/LoadingState'
import ForbiddenState from '@/components/admin/ForbiddenState'
import { adminFetch } from '@/lib/admin-fetch'

interface LessonProgress {
  lesson_id: number
  lesson_title: string | null
  chapter_id: number | null
  chapter_title: string | null
  status: string
  started_at: string | null
  completed_at: string | null
  time_spent_seconds: number
}

interface QuizAttempt {
  id: number
  quiz_type: string
  chapter_id: number | null
  chapter_title: string | null
  score: number | null
  total_questions: number | null
  correct_answers: number | null
  passed: boolean | null
  started_at: string
  completed_at: string | null
}

interface Badge {
  badge_name: string
  badge_slug: string
  badge_icon: string | null
  earned_at: string
}

interface ActivityEvent {
  event_type: string
  details: Record<string, unknown>
  created_at: string
}

interface StudentDetail {
  enrollment: {
    id: number
    user_id: string
    lead_id: number | null
    enrolled_at: string
    status: string
    completed_at: string | null
    exam_readiness_score: number | null
    current_streak_days: number
    longest_streak_days: number
    last_activity_at: string | null
  }
  student: {
    name: string | null
    email: string | null
    lead_id: number | null
  }
  lessonProgress: LessonProgress[]
  quizAttempts: QuizAttempt[]
  badges: Badge[]
  activityLog: ActivityEvent[]
  stats: {
    totalLessons: number
    completedLessons: number
    progressPercent: number
    avgQuizScore: number
    totalTimeSpent: number
  }
}

type LoadState = 'loading' | 'ok' | 'notfound' | 'forbidden' | 'error'

const STATUS_COLORS: Record<string, string> = {
  active: 'border border-[#444] text-[#9CA3AF]',
  completed: 'bg-white text-black',
  paused: 'bg-[#333] text-[#6B7280]',
  dropped: 'bg-[#1A1A1A] text-[#4B5563]',
}

const LESSON_STATUS_COLORS: Record<string, string> = {
  completed: 'text-white',
  in_progress: 'text-[#9CA3AF]',
  not_started: 'text-[#4B5563]',
}

const SECTION_LABEL =
  'text-xs font-semibold uppercase tracking-widest text-[#6B7280]'
const CARD = 'rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6'

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${STATUS_COLORS[status] ?? 'border border-[#444] text-[#9CA3AF]'}`}
    >
      {status}
    </span>
  )
}

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return 'Never'
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return `${days}d ago`
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function formatMinutes(seconds: number): string {
  const mins = Math.round(seconds / 60)
  if (mins < 1) return '0m'
  if (mins < 60) return `${mins}m`
  const hrs = Math.floor(mins / 60)
  const rem = mins % 60
  return rem > 0 ? `${hrs}h ${rem}m` : `${hrs}h`
}

function ReadinessBar({ score }: { score: number }) {
  const color =
    score >= 80 ? 'bg-white' : score >= 60 ? 'bg-[#9CA3AF]' : 'bg-[#444]'

  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className={SECTION_LABEL}>Exam Readiness</span>
        <span
          className="text-2xl font-extrabold text-white sm:text-3xl"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {score}%
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-[#1A1A1A]">
        <div
          className={`h-2 rounded-full transition-all ${color}`}
          style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }}
        />
      </div>
      <p className="mt-1.5 text-xs text-[#4B5563]">
        {score >= 80
          ? 'Exam-ready — strong performance across the board.'
          : score >= 60
            ? 'Getting close — a little more practice recommended.'
            : 'Needs more practice before sitting the exam.'}
      </p>
    </div>
  )
}

function EventLabel({ type }: { type: string }) {
  const labels: Record<string, string> = {
    lesson_completed: 'Completed lesson',
    quiz_started: 'Started quiz',
    quiz_completed: 'Completed quiz',
    badge_earned: 'Earned badge',
    enrollment_created: 'Enrolled',
  }
  return <span>{labels[type] ?? type.replace(/_/g, ' ')}</span>
}

const TABS = ['lessons', 'quizzes', 'badges', 'activity'] as const
type Tab = (typeof TABS)[number]

export default function StudentDetailPage() {
  const params = useParams()
  const enrollmentId = params.id as string

  const [data, setData] = useState<StudentDetail | null>(null)
  const [state, setState] = useState<LoadState>('loading')
  const [activeTab, setActiveTab] = useState<Tab>('lessons')

  const fetchDetail = useCallback(async () => {
    setState('loading')
    try {
      const res = await adminFetch(`/api/admin/course/enrollments/${enrollmentId}`)
      if (res.status === 403) {
        setState('forbidden')
        return
      }
      if (res.status === 404) {
        setState('notfound')
        return
      }
      if (!res.ok) throw new Error('Failed to fetch')
      const json = (await res.json()) as StudentDetail
      setData(json)
      setState('ok')
    } catch {
      setData(null)
      setState('error')
    }
  }, [enrollmentId])

  useEffect(() => {
    fetchDetail()
  }, [fetchDetail])

  if (state === 'loading') {
    return <LoadingState message="Loading student..." />
  }

  if (state === 'forbidden') {
    return <ForbiddenState />
  }

  if (state === 'notfound' || state === 'error' || !data) {
    return (
      <div>
        <Link
          href="/course-admin/students"
          className="mb-4 inline-flex items-center gap-1 text-xs text-[#6B7280] hover:text-white"
        >
          <span aria-hidden>&larr;</span> Back to students
        </Link>
        <EmptyState
          title={
            state === 'notfound'
              ? 'Student not found'
              : "Couldn't load this student"
          }
          description={
            state === 'notfound'
              ? 'This enrollment record does not exist or has been removed.'
              : 'The course module may not be set up yet. Try again, or head back to the roster.'
          }
          action={{ label: 'Back to students', href: '/course-admin/students' }}
        />
      </div>
    )
  }

  const { enrollment, student, stats } = data
  const displayName = student.name ?? 'Unknown Student'
  const displayEmail = student.email ?? ''

  // Group lesson progress by chapter
  const byChapter: Record<string, LessonProgress[]> = {}
  for (const lp of data.lessonProgress) {
    const key = lp.chapter_title ?? `Chapter ${lp.chapter_id ?? '?'}`
    if (!byChapter[key]) byChapter[key] = []
    byChapter[key].push(lp)
  }

  const quizzesPassed = data.quizAttempts.filter((q) => q.passed === true).length
  const tabCounts: Record<Tab, number> = {
    lessons: data.lessonProgress.length,
    quizzes: data.quizAttempts.length,
    badges: data.badges.length,
    activity: data.activityLog.length,
  }

  return (
    <div>
      {/* Back */}
      <Link
        href="/course-admin/students"
        className="mb-4 inline-flex items-center gap-1 text-xs text-[#6B7280] hover:text-white"
      >
        <span aria-hidden>&larr;</span> Back to students
      </Link>

      {/* Page header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#222] text-base font-bold text-white">
            {displayName[0]?.toUpperCase() ?? '?'}
          </div>
          <div className="min-w-0">
            <h2
              className="truncate text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {displayName}
            </h2>
            <p className="mt-0.5 truncate text-sm text-[#6B7280]">
              Enrollment #{enrollment.id} · joined{' '}
              {timeAgo(enrollment.enrolled_at)}
            </p>
          </div>
        </div>
        <div className="shrink-0">
          <StatusBadge status={enrollment.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Sidebar — renders first on mobile, right column on lg */}
        <div className="space-y-4 sm:space-y-6 lg:order-2 lg:col-span-1">
          {/* Student Info */}
          <div className={CARD}>
            <h4 className={`mb-3 ${SECTION_LABEL}`}>Contact</h4>
            {displayEmail ? (
              <a
                href={`mailto:${displayEmail}`}
                className="block break-all text-sm text-[#9CA3AF] underline hover:text-white"
              >
                {displayEmail}
              </a>
            ) : (
              <p className="text-sm text-[#4B5563]">No email on file</p>
            )}
            {student.lead_id && (
              <Link
                href={`/leads/${student.lead_id}`}
                className="mt-3 block text-xs text-[#6B7280] underline hover:text-white"
              >
                View lead record &rarr;
              </Link>
            )}
          </div>

          {/* Exam Readiness */}
          <div className={CARD}>
            <ReadinessBar score={enrollment.exam_readiness_score ?? 0} />
          </div>

          {/* Stats */}
          <div className={CARD}>
            <h4 className={`mb-3 ${SECTION_LABEL}`}>Stats</h4>
            <div className="space-y-2.5">
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-[#4B5563]">Progress</span>
                <span className="text-right font-semibold text-white">
                  {stats.completedLessons}/{stats.totalLessons} lessons (
                  {stats.progressPercent}%)
                </span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-[#4B5563]">Avg Quiz Score</span>
                <span className="font-semibold text-white">
                  {stats.avgQuizScore}%
                </span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-[#4B5563]">Quizzes Passed</span>
                <span className="font-semibold text-white">
                  {quizzesPassed}/{data.quizAttempts.length}
                </span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-[#4B5563]">Total Study Time</span>
                <span className="font-semibold text-white">
                  {formatMinutes(stats.totalTimeSpent)}
                </span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-[#4B5563]">Current Streak</span>
                <span className="font-semibold text-white">
                  {enrollment.current_streak_days}d
                </span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-[#4B5563]">Longest Streak</span>
                <span className="font-semibold text-white">
                  {enrollment.longest_streak_days}d
                </span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-[#4B5563]">Badges Earned</span>
                <span className="font-semibold text-white">
                  {data.badges.length}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className={CARD}>
            <h4 className={`mb-3 ${SECTION_LABEL}`}>Timeline</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-[#4B5563]">Enrolled</span>
                <span className="text-right text-[#9CA3AF]">
                  {timeAgo(enrollment.enrolled_at)}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-[#4B5563]">Last active</span>
                <span className="text-right text-[#9CA3AF]">
                  {timeAgo(enrollment.last_activity_at)}
                </span>
              </div>
              {enrollment.completed_at && (
                <div className="flex justify-between gap-3">
                  <span className="text-[#4B5563]">Completed</span>
                  <span className="text-right text-[#9CA3AF]">
                    {formatDate(enrollment.completed_at)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main column */}
        <div className="space-y-4 sm:space-y-6 lg:order-1 lg:col-span-2">
          {/* Progress overview */}
          <div className={CARD}>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className={SECTION_LABEL}>Course Progress</h3>
              <span className="text-sm font-semibold text-white">
                {stats.progressPercent}%
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-[#1A1A1A]">
              <div
                className="h-2.5 rounded-full bg-white transition-all"
                style={{
                  width: `${Math.min(Math.max(stats.progressPercent, 0), 100)}%`,
                }}
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                {
                  label: 'Lessons',
                  value: `${stats.completedLessons}/${stats.totalLessons}`,
                },
                { label: 'Avg Quiz', value: `${stats.avgQuizScore}%` },
                {
                  label: 'Study Time',
                  value: formatMinutes(stats.totalTimeSpent),
                },
                { label: 'Streak', value: `${enrollment.current_streak_days}d` },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                    {m.label}
                  </p>
                  <p className="mt-1 text-base font-extrabold text-white">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="-mx-1 flex gap-1 overflow-x-auto rounded-xl border border-[#222] bg-[#111] p-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#6B7280] hover:text-white'
                }`}
              >
                {tab}
                <span className="ml-1.5 text-[#4B5563]">
                  {tabCounts[tab]}
                </span>
              </button>
            ))}
          </div>

          {/* Lessons Tab */}
          {activeTab === 'lessons' && (
            <div className={CARD}>
              <h3 className={`mb-4 ${SECTION_LABEL}`}>Lesson Progress</h3>
              {data.lessonProgress.length === 0 ? (
                <p className="text-xs text-[#4B5563]">
                  No lesson activity recorded yet.
                </p>
              ) : (
                <div className="space-y-5">
                  {Object.entries(byChapter).map(([chapterTitle, lessons]) => {
                    const done = lessons.filter(
                      (l) => l.status === 'completed',
                    ).length
                    return (
                      <div key={chapterTitle}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <p className="min-w-0 truncate text-xs font-semibold text-[#9CA3AF]">
                            {chapterTitle}
                          </p>
                          <span className="shrink-0 text-xs text-[#4B5563]">
                            {done}/{lessons.length} done
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          {lessons.map((lp) => (
                            <div
                              key={lp.lesson_id}
                              className="flex items-center gap-3 rounded-lg bg-[#0A0A0A] px-3 py-2"
                            >
                              <div
                                className={`h-2 w-2 shrink-0 rounded-full ${
                                  lp.status === 'completed'
                                    ? 'bg-white'
                                    : lp.status === 'in_progress'
                                      ? 'bg-[#555]'
                                      : 'bg-[#222]'
                                }`}
                              />
                              <span
                                className={`min-w-0 flex-1 truncate text-xs ${LESSON_STATUS_COLORS[lp.status] ?? 'text-[#4B5563]'}`}
                              >
                                {lp.lesson_title ?? `Lesson ${lp.lesson_id}`}
                              </span>
                              {lp.time_spent_seconds > 0 && (
                                <span className="shrink-0 text-[10px] text-[#4B5563]">
                                  {formatMinutes(lp.time_spent_seconds)}
                                </span>
                              )}
                              {lp.completed_at && (
                                <span className="hidden shrink-0 text-[10px] text-[#4B5563] sm:inline">
                                  {timeAgo(lp.completed_at)}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {/* Quizzes Tab */}
          {activeTab === 'quizzes' && (
            <div className={CARD}>
              <h3 className={`mb-4 ${SECTION_LABEL}`}>Quiz Attempts</h3>
              {data.quizAttempts.length === 0 ? (
                <p className="text-xs text-[#4B5563]">
                  No quiz attempts recorded yet.
                </p>
              ) : (
                <>
                  {/* Mobile: stacked cards */}
                  <div className="space-y-2.5 sm:hidden">
                    {data.quizAttempts.map((attempt) => (
                      <div
                        key={attempt.id}
                        className="rounded-lg border border-[#222] bg-[#0A0A0A] p-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm text-white">
                              {attempt.chapter_title ??
                                attempt.quiz_type.replace(/_/g, ' ')}
                            </p>
                            <p className="truncate text-[10px] capitalize text-[#4B5563]">
                              {attempt.quiz_type.replace(/_/g, ' ')}
                            </p>
                          </div>
                          {attempt.passed === null ? (
                            <span className="shrink-0 text-xs text-[#4B5563]">
                              —
                            </span>
                          ) : attempt.passed ? (
                            <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-black">
                              Passed
                            </span>
                          ) : (
                            <span className="shrink-0 rounded-full border border-[#444] px-2.5 py-0.5 text-xs font-semibold text-[#6B7280]">
                              Failed
                            </span>
                          )}
                        </div>
                        <div className="mt-2 flex items-baseline justify-between gap-3">
                          <span className="text-sm font-semibold text-white">
                            {attempt.score !== null ? (
                              <>
                                {attempt.score}%
                                {attempt.total_questions !== null && (
                                  <span className="ml-1.5 text-[10px] font-normal text-[#4B5563]">
                                    {attempt.correct_answers}/
                                    {attempt.total_questions} correct
                                  </span>
                                )}
                              </>
                            ) : (
                              <span className="text-[#4B5563]">In progress</span>
                            )}
                          </span>
                          <span className="shrink-0 text-[10px] text-[#4B5563]">
                            {timeAgo(
                              attempt.completed_at ?? attempt.started_at,
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop: table */}
                  <div className="hidden overflow-x-auto sm:block">
                    <table className="w-full min-w-[480px] text-sm">
                      <thead>
                        <tr className="border-b border-[#222]">
                          <th className={`pb-3 text-left ${SECTION_LABEL}`}>
                            Quiz
                          </th>
                          <th className={`pb-3 text-left ${SECTION_LABEL}`}>
                            Score
                          </th>
                          <th className={`pb-3 text-left ${SECTION_LABEL}`}>
                            Result
                          </th>
                          <th className={`pb-3 text-right ${SECTION_LABEL}`}>
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.quizAttempts.map((attempt) => (
                          <tr
                            key={attempt.id}
                            className="border-b border-[#1A1A1A]"
                          >
                            <td className="py-3 pr-3">
                              <p className="text-white">
                                {attempt.chapter_title ??
                                  attempt.quiz_type.replace(/_/g, ' ')}
                              </p>
                              <p className="text-xs capitalize text-[#4B5563]">
                                {attempt.quiz_type.replace(/_/g, ' ')}
                              </p>
                            </td>
                            <td className="py-3 pr-3">
                              {attempt.score !== null ? (
                                <span className="font-semibold text-white">
                                  {attempt.score}%
                                </span>
                              ) : (
                                <span className="text-[#4B5563]">
                                  In progress
                                </span>
                              )}
                              {attempt.total_questions !== null && (
                                <p className="text-[10px] text-[#4B5563]">
                                  {attempt.correct_answers}/
                                  {attempt.total_questions} correct
                                </p>
                              )}
                            </td>
                            <td className="py-3 pr-3">
                              {attempt.passed === null ? (
                                <span className="text-xs text-[#4B5563]">
                                  —
                                </span>
                              ) : attempt.passed ? (
                                <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-black">
                                  Passed
                                </span>
                              ) : (
                                <span className="rounded-full border border-[#444] px-2.5 py-0.5 text-xs font-semibold text-[#6B7280]">
                                  Failed
                                </span>
                              )}
                            </td>
                            <td className="py-3 text-right text-xs text-[#4B5563]">
                              {timeAgo(
                                attempt.completed_at ?? attempt.started_at,
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Badges Tab */}
          {activeTab === 'badges' && (
            <div className={CARD}>
              <h3 className={`mb-4 ${SECTION_LABEL}`}>Badges Earned</h3>
              {data.badges.length === 0 ? (
                <p className="text-xs text-[#4B5563]">
                  No badges earned yet — badges unlock as the student hits
                  course milestones.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {data.badges.map((badge) => (
                    <div
                      key={badge.badge_slug}
                      className="flex flex-col items-center rounded-xl border border-[#222] bg-[#0A0A0A] p-4 text-center"
                    >
                      {badge.badge_icon ? (
                        <span className="mb-2 text-2xl">
                          {badge.badge_icon}
                        </span>
                      ) : (
                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#222] text-sm font-bold text-white">
                          {badge.badge_name[0]}
                        </div>
                      )}
                      <p className="text-xs font-semibold text-white">
                        {badge.badge_name}
                      </p>
                      <p className="mt-1 text-[10px] text-[#4B5563]">
                        {timeAgo(badge.earned_at)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className={CARD}>
              <h3 className={`mb-4 ${SECTION_LABEL}`}>Activity Log</h3>
              {data.activityLog.length === 0 ? (
                <p className="text-xs text-[#4B5563]">
                  No activity recorded yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {data.activityLog.map((event, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#333]" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs capitalize text-[#9CA3AF]">
                          <EventLabel type={event.event_type} />
                        </p>
                        {Object.keys(event.details).length > 0 && (
                          <p className="break-words text-[10px] text-[#4B5563]">
                            {Object.entries(event.details)
                              .map(([k, v]) => `${k}: ${String(v)}`)
                              .join(' · ')}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 text-[10px] text-[#4B5563]">
                        {timeAgo(event.created_at)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
