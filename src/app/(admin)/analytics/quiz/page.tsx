'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DateFilter } from '@/components/admin/DateFilter'
import { StatCard } from '@/components/admin/StatCard'
import { RankedTable } from '@/components/admin/RankedTable'
import EmptyState from '@/components/admin/EmptyState'
import LoadingState from '@/components/admin/LoadingState'
import ForbiddenState from '@/components/admin/ForbiddenState'
import { adminFetch } from '@/lib/admin-fetch'

function pathLabel(p: string): string {
  if (p === 'network') return 'Growth Network'
  if (p === 'team') return 'Team'
  if (p === 'toss_up') return 'Toss-Up'
  return p
}

function BarSegment({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="w-20 shrink-0 truncate text-xs text-[#6B7280] sm:w-28">{label}</span>
      <div className="min-w-0 flex-1">
        <div className="h-2 w-full rounded-full bg-[#1A1A1A]">
          <div className="h-2 rounded-full bg-white transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <span className="w-14 shrink-0 text-right text-xs font-semibold text-white sm:w-16">
        {count} <span className="text-[#4B5563]">({pct}%)</span>
      </span>
    </div>
  )
}

interface QuizData {
  totalQuiz: number
  withEmail: number
  emailRate: number
  pathDistribution: { path: string; count: number }[]
  teamDistribution: { team: string; count: number }[]
  quizConversion: { quizWithEmail: number; converted: number; rate: number }
  derived: {
    noEmail: number
    stalled: number
    teamOptions: number
    topPath: { path: string; count: number; share: number } | null
    topTeam: { team: string; count: number } | null
  }
}

export default function QuizAnalyticsPage() {
  const [days, setDays] = useState(30)
  const [data, setData] = useState<QuizData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [forbidden, setForbidden] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError('')
    adminFetch(`/api/admin/analytics/quiz?days=${days}`)
      .then((res) => {
        if (res.status === 403) { setForbidden(true); throw new Error('forbidden') }
        if (!res.ok) throw new Error('Failed to load quiz data.')
        return res.json()
      })
      .then((d: QuizData) => { setData(d); setLoading(false) })
      .catch((err: Error) => { if (err.message !== 'forbidden') setError(err.message); setLoading(false) })
  }, [days])

  if (forbidden) return <ForbiddenState />

  const pathTotal = data?.pathDistribution.reduce((s, r) => s + r.count, 0) ?? 0
  const teamTotal = data?.teamDistribution.reduce((s, r) => s + r.count, 0) ?? 0
  const periodLabel = days > 0 ? `last ${days} days` : 'all time'

  return (
    <div>
      {/* Header — wraps gracefully on mobile */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Quiz Analytics
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Fit-quiz funnel ·{' '}
            <Link href="/analytics" className="underline hover:text-white">Overview</Link>
            {' · '}
            <Link href="/analytics/attribution" className="underline hover:text-white">Attribution</Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <DateFilter days={days} onChange={setDays} />
        </div>
      </div>

      {loading ? (
        <LoadingState message="Loading quiz analytics…" />
      ) : error ? (
        <EmptyState title="Couldn't load quiz analytics" description={error} />
      ) : !data ? null : data.totalQuiz === 0 ? (
        <EmptyState
          title={`No quiz completions in the ${periodLabel}`}
          description="When visitors finish the fit quiz, completion, email-capture, and path-recommendation metrics will appear here. Try widening the date range."
        />
      ) : (
        <>
          {/* Primary KPIs */}
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Quiz Completions" value={data.totalQuiz} sub={`in the ${periodLabel}`} />
            <StatCard
              label="Email Captures"
              value={data.withEmail}
              sub={`${data.emailRate}% capture rate`}
            />
            <StatCard
              label="No Email"
              value={data.derived.noEmail}
              sub="completed quiz, no email left"
            />
            <StatCard
              label="Quiz → Apply"
              value={`${data.quizConversion.rate}%`}
              sub={
                data.quizConversion.quizWithEmail > 0
                  ? `${data.quizConversion.converted} of ${data.quizConversion.quizWithEmail} with email applied`
                  : 'requires email capture'
              }
            />
          </div>

          {/* Funnel & top-performer row */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Stalled After Capture"
              value={data.derived.stalled}
              sub="captured email but never applied"
            />
            <StatCard
              label="Top Path"
              value={data.derived.topPath ? pathLabel(data.derived.topPath.path) : '—'}
              sub={data.derived.topPath ? `${data.derived.topPath.count} (${data.derived.topPath.share}% of paths)` : 'no path data'}
            />
            <StatCard
              label="Top Team Match"
              value={data.derived.topTeam ? data.derived.topTeam.team : '—'}
              sub={data.derived.topTeam ? `${data.derived.topTeam.count} recommendations` : 'no team data'}
            />
            <StatCard
              label="Abandonment"
              value="—"
              sub="requires GA4 (fit_quiz_started event)"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Recommended path */}
            <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Recommended Path</h3>
              {data.pathDistribution.length > 0 ? (
                <div className="space-y-3">
                  {data.pathDistribution.map((p) => (
                    <BarSegment key={p.path} label={pathLabel(p.path)} count={p.count} total={pathTotal} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#4B5563]">No path recommendations recorded yet.</p>
              )}
            </div>

            {/* Recommended team */}
            <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Recommended Team</h3>
              {data.teamDistribution.length > 0 ? (
                <div className="space-y-3">
                  {data.teamDistribution.map((t) => (
                    <BarSegment key={t.team} label={t.team} count={t.count} total={teamTotal} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#4B5563]">No team recommendations recorded yet.</p>
              )}
            </div>

            {/* Ranked team leaderboard — richer view, no horizontal scroll */}
            <RankedTable
              title="Team Match Leaderboard"
              data={data.teamDistribution.map((t) => ({ value: t.team, count: t.count }))}
            />

            {/* Funnel summary */}
            <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Funnel Summary</h3>
              <div className="space-y-3">
                {[
                  { label: 'Completed quiz', value: data.totalQuiz, total: data.totalQuiz },
                  { label: 'Left email', value: data.withEmail, total: data.totalQuiz },
                  { label: 'Applied after', value: data.quizConversion.converted, total: data.totalQuiz },
                ].map((step) => (
                  <BarSegment key={step.label} label={step.label} count={step.value} total={step.total} />
                ))}
              </div>
              <p className="mt-4 text-xs text-[#4B5563]">
                {data.derived.stalled > 0
                  ? `${data.derived.stalled} lead${data.derived.stalled === 1 ? '' : 's'} left an email but haven't applied — a follow-up opportunity.`
                  : 'Everyone who left an email has applied.'}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
