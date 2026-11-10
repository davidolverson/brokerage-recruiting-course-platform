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

const STATUS_LABELS: Record<string, string> = {
  new: 'New', contacted: 'Contacted', meeting_set: 'Meeting Set',
  qualified: 'Qualified', won: 'Won', lost: 'Lost', archived: 'Archived',
}
const FORM_LABELS: Record<string, string> = {
  join_team_inquiry: 'Team Inquiry', network_inquiry: 'Growth Network Inquiry',
  branch_tour_booking: 'Tour Booking', general_contact: 'Contact', fit_quiz: 'Quiz',
}

function pathLabel(p: string): string {
  if (p === 'network') return 'Growth Network'
  if (p === 'team') return 'Team'
  if (p === 'toss_up') return 'Toss-Up'
  return p
}

interface OverviewData {
  totalLeads: number
  trend: number
  previousPeriodLeads: number
  byStatus: { status: string; count: number }[]
  byFormType: { form_type: string; count: number }[]
  byPath: { path: string; count: number }[]
  sourceRoutes: { route: string; count: number }[]
  conversion: { total: number; converted: number; rate: number }
  derived: {
    openLeads: number
    newLeads: number
    wonLeads: number
    lostLeads: number
    winRate: number
    dailyAverage: number
    topForm: { type: string; count: number } | null
    topRoute: { route: string; count: number } | null
  }
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

function BreakdownCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">{title}</h3>
      {children}
    </div>
  )
}

export default function AnalyticsPage() {
  const [days, setDays] = useState(30)
  const [data, setData] = useState<OverviewData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [forbidden, setForbidden] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError('')
    adminFetch(`/api/admin/analytics?days=${days}`)
      .then((res) => {
        if (res.status === 403) { setForbidden(true); throw new Error('forbidden') }
        if (!res.ok) throw new Error('Failed to load analytics data.')
        return res.json()
      })
      .then((d: OverviewData) => { setData(d); setLoading(false) })
      .catch((err: Error) => { if (err.message !== 'forbidden') setError(err.message); setLoading(false) })
  }, [days])

  if (forbidden) return <ForbiddenState />

  const totalLeads = data?.byStatus.reduce((s, r) => s + r.count, 0) ?? 0
  const pathTotal = data?.byPath.reduce((s, r) => s + r.count, 0) ?? 0
  const formTotal = data?.byFormType.reduce((s, r) => s + r.count, 0) ?? 0
  const periodLabel = days > 0 ? `last ${days} days` : 'all time'

  return (
    <div>
      {/* Header — wraps gracefully on mobile */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Analytics
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Lead pipeline overview ·{' '}
            <Link href="/analytics/quiz" className="underline hover:text-white">Quiz</Link>
            {' · '}
            <Link href="/analytics/attribution" className="underline hover:text-white">Attribution</Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <DateFilter days={days} onChange={setDays} />
        </div>
      </div>

      {loading ? (
        <LoadingState message="Loading analytics…" />
      ) : error ? (
        <EmptyState
          title="Couldn't load analytics"
          description={error}
        />
      ) : !data ? null : data.totalLeads === 0 ? (
        <EmptyState
          title={`No leads in the ${periodLabel}`}
          description="Once leads start arriving through your forms, pipeline metrics and breakdowns will appear here. Try widening the date range."
          action={{ label: 'View all leads', href: '/leads' }}
        />
      ) : (
        <>
          {/* Primary KPI row */}
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label={days > 0 ? `Leads (${days}d)` : 'Total Leads'}
              value={data.totalLeads}
              sub={
                days > 0
                  ? data.trend !== 0
                    ? `${data.trend > 0 ? '▲ +' : '▼ '}${data.trend}% vs prior ${days}d (${data.previousPeriodLeads})`
                    : `Flat vs prior ${days}d (${data.previousPeriodLeads})`
                  : 'across all time'
              }
            />
            <StatCard
              label="Conversion Rate"
              value={`${data.conversion.rate}%`}
              sub={`${data.conversion.converted} of ${data.conversion.total} qualified or won`}
            />
            <StatCard
              label="Win Rate"
              value={`${data.derived.winRate}%`}
              sub={`${data.derived.wonLeads} won · ${data.derived.lostLeads} lost/archived`}
            />
            <StatCard
              label="Daily Average"
              value={days > 0 ? data.derived.dailyAverage : '—'}
              sub={days > 0 ? 'new leads per day' : 'pick a date range'}
            />
          </div>

          {/* Secondary metric row */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Open Leads" value={data.derived.openLeads} sub="new, contacted or meeting set" />
            <StatCard label="New / Unworked" value={data.derived.newLeads} sub="awaiting first touch" />
            <StatCard
              label="Top Form"
              value={data.derived.topForm ? (FORM_LABELS[data.derived.topForm.type] ?? data.derived.topForm.type) : '—'}
              sub={data.derived.topForm ? `${data.derived.topForm.count} submissions` : 'no form data'}
            />
            <StatCard
              label="Top Source"
              value={data.derived.topRoute ? data.derived.topRoute.route : '—'}
              sub={data.derived.topRoute ? `${data.derived.topRoute.count} leads` : 'no route data'}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Status distribution */}
            <BreakdownCard title="Pipeline Distribution">
              {data.byStatus.length > 0 ? (
                <div className="space-y-3">
                  {data.byStatus.map((s) => (
                    <BarSegment key={s.status} label={STATUS_LABELS[s.status] ?? s.status} count={s.count} total={totalLeads} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#4B5563]">No pipeline data for this period.</p>
              )}
            </BreakdownCard>

            {/* Path split */}
            <BreakdownCard title="Path Split">
              {data.byPath.length > 0 ? (
                <div className="space-y-3">
                  {data.byPath.map((p) => (
                    <BarSegment key={p.path} label={pathLabel(p.path)} count={p.count} total={pathTotal} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#4B5563]">No path selections recorded yet.</p>
              )}
            </BreakdownCard>

            {/* Form types */}
            <BreakdownCard title="Form Types">
              {data.byFormType.length > 0 ? (
                <div className="space-y-3">
                  {data.byFormType.map((f) => (
                    <BarSegment key={f.form_type} label={FORM_LABELS[f.form_type] ?? f.form_type} count={f.count} total={formTotal} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#4B5563]">No form submissions for this period.</p>
              )}
            </BreakdownCard>

            {/* Top source routes */}
            <RankedTable
              title="Top Source Routes"
              data={data.sourceRoutes.map((r) => ({ value: r.route, count: r.count }))}
            />
          </div>
        </>
      )}
    </div>
  )
}
