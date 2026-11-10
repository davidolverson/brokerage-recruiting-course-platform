'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { StatCard } from '@/components/admin/StatCard'
import EmptyState from '@/components/admin/EmptyState'
import LoadingState from '@/components/admin/LoadingState'
import ForbiddenState from '@/components/admin/ForbiddenState'
import { adminFetch } from '@/lib/admin-fetch'

const ENROLLMENT_STATUSES = ['active', 'paused', 'completed', 'dropped'] as const

interface EnrollmentRow {
  id: number
  student_name: string | null
  student_email: string | null
  lead_name: string | null
  lead_email: string | null
  progress_percent: number
  avg_quiz_score: number
  current_streak_days: number
  enrolled_at: string
  last_activity_at: string | null
  status: string
  exam_readiness_score: number | null
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function ProgressBar({ value, className = '' }: { value: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-1.5 min-w-0 flex-1 rounded-full bg-[#1A1A1A]">
        <div
          className="h-1.5 rounded-full bg-white transition-all"
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
      <span className="shrink-0 text-xs font-semibold text-white">{value}%</span>
    </div>
  )
}

const SECTION_LABEL =
  'text-xs font-semibold uppercase tracking-widest text-[#6B7280]'

export default function CourseStudentsWrapper() {
  return (
    <Suspense fallback={<LoadingState message="Loading students..." />}>
      <CourseStudentsPage />
    </Suspense>
  )
}

function CourseStudentsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [students, setStudents] = useState<EnrollmentRow[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [forbidden, setForbidden] = useState(false)
  const [errored, setErrored] = useState(false)
  const [search, setSearch] = useState(searchParams.get('q') ?? '')
  const [statusFilter, setStatusFilter] = useState(searchParams.get('status') ?? '')
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1') || 1)
  const perPage = 25

  const fetchStudents = useCallback(async () => {
    setLoading(true)
    setForbidden(false)
    setErrored(false)
    const params = new URLSearchParams()
    if (search) params.set('q', search)
    if (statusFilter) params.set('status', statusFilter)
    params.set('page', String(page))
    params.set('per_page', String(perPage))

    try {
      const res = await adminFetch(`/api/admin/course/enrollments?${params}`)
      if (res.status === 403) {
        setForbidden(true)
        setStudents([])
        setTotal(0)
        return
      }
      if (!res.ok) throw new Error('Failed to fetch')
      const data = (await res.json()) as {
        enrollments?: EnrollmentRow[]
        total?: number
      }
      setStudents(data.enrollments ?? [])
      setTotal(data.total ?? 0)
    } catch {
      setStudents([])
      setTotal(0)
      setErrored(true)
    } finally {
      setLoading(false)
    }
  }, [search, statusFilter, page])

  useEffect(() => {
    const timer = setTimeout(fetchStudents, search ? 300 : 0)
    return () => clearTimeout(timer)
  }, [fetchStudents, search])

  const totalPages = Math.ceil(total / perPage)
  const hasFilters = Boolean(search || statusFilter)

  // Enrichment: derive page-level summary from the loaded rows
  const onPage = students.length
  const avgProgress =
    onPage > 0
      ? Math.round(
          students.reduce((s, x) => s + x.progress_percent, 0) / onPage,
        )
      : 0
  const examReady = students.filter(
    (s) => (s.exam_readiness_score ?? 0) >= 80,
  ).length
  const activeOnPage = students.filter((s) => s.status === 'active').length

  if (forbidden) {
    return <ForbiddenState />
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/course-admin"
          className="mb-2 inline-flex items-center gap-1 text-xs text-[#6B7280] hover:text-white"
        >
          <span aria-hidden>&larr;</span> Course Admin
        </Link>
        <h2
          className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Students
        </h2>
        <p className="mt-1 text-sm text-[#6B7280]">
          {total} student{total !== 1 ? 's' : ''}{' '}
          {hasFilters ? 'match your filters' : 'enrolled in the course'}
        </p>
      </div>

      {/* Summary stats (this page) */}
      {!loading && !errored && onPage > 0 && (
        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="On This Page" value={onPage} />
          <StatCard
            label="Active"
            value={activeOnPage}
            sub="currently progressing"
          />
          <StatCard
            label="Avg Progress"
            value={`${avgProgress}%`}
            sub="across this page"
          />
          <StatCard
            label="Exam-Ready"
            value={examReady}
            sub="readiness 80%+"
          />
        </div>
      )}

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          className="h-11 w-full rounded-lg border border-[#333] bg-[#111] px-4 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
        />
      </div>

      {/* Status filter pills */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => {
            setStatusFilter('')
            setPage(1)
          }}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            statusFilter === ''
              ? 'bg-white text-black'
              : 'border border-[#444] text-[#9CA3AF] hover:border-white hover:text-white'
          }`}
        >
          All
        </button>
        {ENROLLMENT_STATUSES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setStatusFilter(s)
              setPage(1)
            }}
            className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
              statusFilter === s
                ? 'bg-white text-black'
                : 'border border-[#444] text-[#9CA3AF] hover:border-white hover:text-white'
            }`}
          >
            {s}
          </button>
        ))}
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setSearch('')
              setStatusFilter('')
              setPage(1)
            }}
            className="text-xs text-[#6B7280] underline hover:text-white"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Body */}
      {loading ? (
        <LoadingState message="Loading students..." />
      ) : errored ? (
        <EmptyState
          title="Couldn't load students"
          description="The course roster is unavailable right now. The course module may not be set up yet — students will appear here once they enroll."
          action={{ label: 'Back to Course Admin', href: '/course-admin' }}
        />
      ) : students.length === 0 ? (
        <EmptyState
          title={hasFilters ? 'No matching students' : 'No students enrolled yet'}
          description={
            hasFilters
              ? 'Try a different search term or clear your filters.'
              : 'Students will appear here once they enroll in the pre-licensing course.'
          }
        />
      ) : (
        <>
          {/* Mobile: stacked cards */}
          <div className="space-y-3 md:hidden">
            {students.map((student) => {
              const name =
                student.student_name ?? student.lead_name ?? 'Unknown'
              const email =
                student.student_email ?? student.lead_email ?? ''
              return (
                <Link
                  key={student.id}
                  href={`/course-admin/students/${student.id}`}
                  className="block rounded-xl border border-[#222] bg-[#111] p-5 transition-colors hover:border-[#333]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#222] text-xs font-bold text-white">
                        {name[0]?.toUpperCase() ?? '?'}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {name}
                        </p>
                        <p className="truncate text-xs text-[#4B5563]">
                          {email || 'No email on file'}
                        </p>
                      </div>
                    </div>
                    <StatusBadge status={student.status} />
                  </div>

                  <div className="mt-4">
                    <div className="mb-1 flex items-baseline justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">
                        Progress
                      </span>
                    </div>
                    <ProgressBar value={student.progress_percent} />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#1A1A1A] pt-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                        Avg Quiz
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {student.avg_quiz_score}%
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                        Streak
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {student.current_streak_days > 0
                          ? `${student.current_streak_days}d`
                          : '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                        Last Active
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {timeAgo(student.last_activity_at)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-[10px] text-[#4B5563]">
                    Enrolled {formatDate(student.enrolled_at)}
                  </p>
                </Link>
              )
            })}
          </div>

          {/* Desktop: table */}
          <div className="hidden overflow-x-auto rounded-xl border border-[#222] md:block">
            <table className="w-full min-w-[820px] text-sm">
              <thead>
                <tr className="border-b border-[#222] bg-[#111]">
                  <th className={`px-4 py-3 text-left ${SECTION_LABEL}`}>
                    Student
                  </th>
                  <th className={`px-4 py-3 text-left ${SECTION_LABEL}`}>
                    Progress
                  </th>
                  <th className={`px-4 py-3 text-left ${SECTION_LABEL}`}>
                    Avg Quiz
                  </th>
                  <th className={`px-4 py-3 text-left ${SECTION_LABEL}`}>
                    Streak
                  </th>
                  <th className={`px-4 py-3 text-left ${SECTION_LABEL}`}>
                    Enrolled
                  </th>
                  <th className={`px-4 py-3 text-left ${SECTION_LABEL}`}>
                    Last Active
                  </th>
                  <th className={`px-4 py-3 text-left ${SECTION_LABEL}`}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  const name =
                    student.student_name ?? student.lead_name ?? 'Unknown'
                  const email =
                    student.student_email ?? student.lead_email ?? ''
                  return (
                    <tr
                      key={student.id}
                      onClick={() =>
                        router.push(`/course-admin/students/${student.id}`)
                      }
                      className="cursor-pointer border-b border-[#1A1A1A] transition-colors hover:bg-[#111]"
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{name}</p>
                        <p className="text-xs text-[#4B5563]">
                          {email || 'No email on file'}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <ProgressBar
                          value={student.progress_percent}
                          className="w-32"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-semibold text-white">
                          {student.avg_quiz_score}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#9CA3AF]">
                        {student.current_streak_days > 0
                          ? `${student.current_streak_days}d`
                          : '—'}
                      </td>
                      <td className="px-4 py-3 text-[#9CA3AF]">
                        {formatDate(student.enrolled_at)}
                      </td>
                      <td className="px-4 py-3 text-[#4B5563]">
                        {timeAgo(student.last_activity_at)}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={student.status} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Pagination */}
      {!loading && !errored && totalPages > 1 && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#6B7280]">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="h-10 flex-1 rounded-lg border border-[#333] px-4 text-xs font-medium text-[#9CA3AF] transition-colors hover:border-white hover:text-white disabled:opacity-30 sm:flex-none"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              className="h-10 flex-1 rounded-lg border border-[#333] px-4 text-xs font-medium text-[#9CA3AF] transition-colors hover:border-white hover:text-white disabled:opacity-30 sm:flex-none"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
