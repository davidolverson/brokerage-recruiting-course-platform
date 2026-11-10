'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DateFilter } from '@/components/admin/DateFilter'
import { StatCard } from '@/components/admin/StatCard'
import EmptyState from '@/components/admin/EmptyState'
import LoadingState from '@/components/admin/LoadingState'
import ForbiddenState from '@/components/admin/ForbiddenState'
import { adminFetch } from '@/lib/admin-fetch'

interface EnrollmentTrendPoint {
  date: string
  count: number
}

interface RecentEnrollment {
  id: number
  student_name: string | null
  student_email: string | null
  lead_name: string | null
  lead_email: string | null
  progress_percent: number
  last_activity_at: string | null
  status: string
  enrolled_at: string
}

interface DropoffLesson {
  lesson_id: number
  lesson_title: string | null
  chapter_title: string | null
  dropoff_count: number
}

interface ChapterQuiz {
  chapter_id: number
  chapter_title: string | null
  avg_score: number
  pass_rate: number
  total_attempts: number
}

interface DashboardData {
  totalEnrollments: number
  activeStudents: number
  completionRate: number
  avgQuizScore: number
  avgTimeSpent: number
  enrollmentTrend: EnrollmentTrendPoint[]
  dropoff: DropoffLesson[]
  quizPerformance: ChapterQuiz[]
}

const STATUS_COLORS: Record<string, string> = {
  active: 'border border-[#444] text-[#9CA3AF]',
  completed: 'bg-white text-black',
  paused: 'bg-[#333] text-[#6B7280]',
  dropped: 'bg-[#1A1A1A] text-[#4B5563]',
}

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

function formatMinutes(seconds: number): string {
  const mins = Math.round(seconds / 60)
  if (mins < 1) return '0m'
  if (mins < 60) return `${mins}m`
  const hrs = Math.floor(mins / 60)
  const rem = mins % 60
  return rem > 0 ? `${hrs}h ${rem}m` : `${hrs}h`
}

function TrendBar({ trend }: { trend: EnrollmentTrendPoint[] }) {
  const last14 = trend.slice(-14)
  const max = last14.length > 0 ? Math.max(...last14.map((t) => t.count), 1) : 1

  if (last14.length === 0) {
    return (
      <div className="flex h-16 items-center">
        <p className="text-xs text-[#4B5563]">No enrollment data yet.</p>
      </div>
    )
  }

  return (
    <div className="flex h-16 items-end gap-1">
      {last14.map((point, i) => (
        <div
          key={i}
          title={`${point.date}: ${point.count}`}
          className="min-w-0 flex-1 rounded-t bg-white/20 transition-all hover:bg-white/40"
          style={{ height: `${Math.max((point.count / max) * 100, 4)}%` }}
        />
      ))}
    </div>
  )
}

const SECTION_LABEL = 'text-xs font-semibold uppercase tracking-widest text-[#6B7280]'
const CARD = 'rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6'

export default function CourseAdminDashboard() {
  const [days, setDays] = useState(30)
  const [data, setData] = useState<DashboardData | null>(null)
  const [enrollments, setEnrollments] = useState<RecentEnrollment[]>([])
  const [loading, setLoading] = useState(true)
  const [forbidden, setForbidden] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    setForbidden(false)

    Promise.all([
      adminFetch(`/api/admin/course/analytics?days=${days}`).then(async (res) => {
        if (res.status === 403) {
          const err = new Error('forbidden')
          err.name = 'ForbiddenError'
          throw err
        }
        if (!res.ok) throw new Error('Unable to load course analytics.')
        return res.json() as Promise<DashboardData>
      }),
      adminFetch(`/api/admin/course/enrollments?per_page=8`)
        .then((res) => (res.ok ? res.json() : { enrollments: [] }))
        .catch(() => ({ enrollments: [] })),
    ])
      .then(([analyticsData, enrollmentData]) => {
        if (cancelled) return
        setData(analyticsData)
        setEnrollments(
          (enrollmentData as { enrollments?: RecentEnrollment[] }).enrollments ?? [],
        )
        setLoading(false)
      })
      .catch((err: Error) => {
        if (cancelled) return
        if (err.name === 'ForbiddenError') {
          setForbidden(true)
        } else {
          setError(err.message || 'Something went wrong loading the dashboard.')
        }
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [days])

  if (forbidden) {
    return <ForbiddenState />
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2
            className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Course Admin
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Pre-licensing course performance &amp;{' '}
            <Link href="/course-admin/students" className="underline hover:text-white">
              student roster
            </Link>
          </p>
        </div>
        <div className="shrink-0">
          <DateFilter days={days} onChange={setDays} />
        </div>
      </div>

      {loading ? (
        <LoadingState message="Loading course analytics..." />
      ) : error ? (
        <EmptyState
          title="Course analytics unavailable"
          description={`${error} The course module may not be set up yet — data will appear here once students begin enrolling.`}
          action={{ label: 'View students', href: '/course-admin/students' }}
        />
      ) : data ? (
        <>
          {/* KPI Row */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label={days > 0 ? `Enrollments (${days}d)` : 'Total Enrollments'}
              value={data.totalEnrollments}
              sub={
                days > 0
                  ? 'new sign-ups in window'
                  : 'all-time course sign-ups'
              }
            />
            <StatCard
              label="Active Students"
              value={data.activeStudents}
              sub={
                data.totalEnrollments > 0
                  ? `${Math.round(
                      (data.activeStudents / data.totalEnrollments) * 100,
                    )}% of enrollments active`
                  : 'active in selected window'
              }
            />
            <StatCard
              label="Completion Rate"
              value={`${data.completionRate}%`}
              sub="finished the full course"
            />
            <StatCard
              label="Avg Quiz Score"
              value={`${data.avgQuizScore}%`}
              sub={`Avg ${formatMinutes(data.avgTimeSpent)} studied per student`}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
            {/* Enrollment Trend */}
            <div className={CARD}>
              <h3 className={`mb-4 ${SECTION_LABEL}`}>
                Enrollment Trend (Last 14 Days)
              </h3>
              <TrendBar trend={data.enrollmentTrend} />
              {data.enrollmentTrend.length > 0 && (
                <div className="mt-2 flex justify-between gap-2">
                  <span className="truncate text-[10px] text-[#4B5563]">
                    {data.enrollmentTrend.slice(-14)[0]?.date}
                  </span>
                  <span className="truncate text-[10px] text-[#4B5563]">
                    {data.enrollmentTrend[data.enrollmentTrend.length - 1]?.date}
                  </span>
                </div>
              )}
            </div>

            {/* Quiz Performance by Chapter */}
            <div className={CARD}>
              <h3 className={`mb-4 ${SECTION_LABEL}`}>
                Quiz Performance by Chapter
              </h3>
              {data.quizPerformance.length === 0 ? (
                <p className="text-xs text-[#4B5563]">
                  No quiz attempts recorded yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {data.quizPerformance.map((ch) => (
                    <div key={ch.chapter_id}>
                      <div className="mb-1 flex items-baseline justify-between gap-3">
                        <span className="min-w-0 flex-1 truncate text-xs text-[#9CA3AF]">
                          {ch.chapter_title ?? `Chapter ${ch.chapter_id}`}
                        </span>
                        <span className="shrink-0 text-xs font-semibold text-white">
                          {ch.avg_score}%{' '}
                          <span className="font-normal text-[#4B5563]">
                            · {ch.pass_rate}% pass
                          </span>
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#1A1A1A]">
                        <div
                          className="h-2 rounded-full bg-white transition-all"
                          style={{ width: `${ch.avg_score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Dropoff Analysis */}
            <div className={CARD}>
              <h3 className={`mb-1 ${SECTION_LABEL}`}>Dropoff Analysis</h3>
              <p className="mb-3 text-xs text-[#4B5563]">
                Last lesson completed before students went inactive
              </p>
              {data.dropoff.length === 0 ? (
                <p className="text-xs text-[#4B5563]">
                  No dropoff signal yet — students are sticking with it.
                </p>
              ) : (
                <div className="space-y-2.5">
                  {data.dropoff.slice(0, 8).map((d, i) => {
                    const max = data.dropoff[0]?.dropoff_count ?? 1
                    return (
                      <div key={d.lesson_id} className="flex items-center gap-3">
                        <span className="w-4 shrink-0 text-right text-[10px] font-bold text-[#4B5563]">
                          {i + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="mb-0.5 flex items-baseline justify-between gap-2">
                            <span className="min-w-0 truncate text-xs text-[#9CA3AF]">
                              {d.lesson_title ?? `Lesson ${d.lesson_id}`}
                              {d.chapter_title && (
                                <span className="text-[#4B5563]">
                                  {' '}
                                  · {d.chapter_title}
                                </span>
                              )}
                            </span>
                            <span className="shrink-0 text-xs font-semibold text-white">
                              {d.dropoff_count}
                            </span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-[#1A1A1A]">
                            <div
                              className="h-1.5 rounded-full bg-white/40 transition-all"
                              style={{ width: `${(d.dropoff_count / max) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Recent Enrollments */}
            <div className={CARD}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className={SECTION_LABEL}>Recent Enrollments</h3>
                <Link
                  href="/course-admin/students"
                  className="shrink-0 text-xs text-[#6B7280] underline hover:text-white"
                >
                  View all
                </Link>
              </div>
              {enrollments.length === 0 ? (
                <p className="text-xs text-[#4B5563]">
                  No students have enrolled yet.
                </p>
              ) : (
                <div className="space-y-1">
                  {enrollments.map((e) => {
                    const name = e.student_name ?? e.lead_name ?? 'Unknown'
                    const email = e.student_email ?? e.lead_email ?? ''
                    return (
                      <Link
                        key={e.id}
                        href={`/course-admin/students/${e.id}`}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[#1A1A1A]"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#222] text-[10px] font-bold text-white">
                          {name[0]?.toUpperCase() ?? '?'}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold text-white">
                            {name}
                          </p>
                          <p className="truncate text-[10px] text-[#4B5563]">
                            {email || 'No email on file'}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-xs font-semibold text-white">
                            {e.progress_percent}%
                          </p>
                          <p className="text-[10px] text-[#4B5563]">
                            {timeAgo(e.last_activity_at)}
                          </p>
                        </div>
                        <StatusBadge status={e.status} />
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <EmptyState
          title="No course data yet"
          description="Course analytics will appear here once students begin enrolling."
        />
      )}
    </div>
  )
}
