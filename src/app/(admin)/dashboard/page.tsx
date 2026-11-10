'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSession, signOut } from '@/lib/auth-client'
import type { Lead } from '@/lib/db/leads'
import type { DashboardStats } from '@/lib/db/dashboard'
import { StatCard } from '@/components/admin/StatCard'
import EmptyState from '@/components/admin/EmptyState'
import LoadingState from '@/components/admin/LoadingState'
import { adminFetch } from '@/lib/admin-fetch'
import { signOutCompletely } from '@/lib/sign-out'

const STATUS_LABELS: Record<string, string> = {
  new: 'New', contacted: 'Contacted', meeting_set: 'Meeting Set',
  qualified: 'Qualified', won: 'Won', lost: 'Lost', archived: 'Archived',
}

const FORM_TYPE_LABELS: Record<string, string> = {
  join_team_inquiry: 'Team Inquiry', network_inquiry: 'Growth Network Inquiry',
  branch_tour_booking: 'Tour Booking', general_contact: 'Contact', fit_quiz: 'Quiz',
}

const PATH_LABELS: Record<string, string> = {
  network: 'Growth Network', team: 'Team', toss_up: 'Toss-Up',
}

const ACTIVE_STATUSES = ['new', 'contacted', 'meeting_set', 'qualified']

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return `${days}d ago`
}

function BarSegment({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 truncate text-xs text-[#6B7280]">{label}</span>
      <div className="min-w-0 flex-1">
        <div className="h-2 w-full rounded-full bg-[#1A1A1A]">
          <div className="h-2 rounded-full bg-white transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <span className="w-16 shrink-0 text-right text-xs font-semibold text-white">
        {count}
        <span className="ml-1 font-normal text-[#4B5563]">{pct}%</span>
      </span>
    </div>
  )
}

export default function AdminDashboardPage() {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [recentLeads, setRecentLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    // Timeout: if session check takes >5s, redirect to login
    const timeout = setTimeout(() => {
      if (isPending) router.replace('/login')
    }, 5000)

    if (isPending) return () => clearTimeout(timeout)
    clearTimeout(timeout)

    if (!session) { router.replace('/login'); return }

    adminFetch('/api/admin/dashboard')
      .then((res) => {
        if (!res.ok) throw new Error('Dashboard fetch failed')
        return res.json()
      })
      .then((data) => {
        setStats(data)
        setRecentLeads(data.recentLeads ?? [])
        setLoading(false)
      })
      .catch(() => {
        setLoadError(true)
        setLoading(false)
      })
  }, [session, isPending, router])

  if (isPending || loading) {
    return <LoadingState message="Loading dashboard..." />
  }

  if (!session) return null

  const totalLeads = stats?.pipelineSnapshot.reduce((sum, s) => sum + s.count, 0) ?? 0
  const pathTotal = stats?.pathSplit.reduce((sum, s) => sum + s.count, 0) ?? 0
  const formTotal = stats?.formBreakdown.reduce((sum, s) => sum + s.count, 0) ?? 0

  // Enriched computed metrics
  const won = stats?.wonCount ?? 0
  const lost = stats?.lostCount ?? 0
  const closed = won + lost
  const winRate = closed > 0 ? Math.round((won / closed) * 100) : 0
  const conversionRate = totalLeads > 0 ? Math.round((won / totalLeads) * 100) : 0
  const activeLeads = stats?.pipelineSnapshot
    .filter((s) => ACTIVE_STATUSES.includes(s.status))
    .reduce((sum, s) => sum + s.count, 0) ?? 0

  const cur30 = stats?.totalLeads30d ?? 0
  const prev30 = stats?.prevLeads30d ?? 0
  const trendPct = prev30 > 0 ? Math.round(((cur30 - prev30) / prev30) * 100) : null
  const trendLabel =
    trendPct === null
      ? 'No prior data'
      : `${trendPct >= 0 ? '+' : ''}${trendPct}% vs prior 30d`

  const topPath = stats?.pathSplit[0]
  const topForm = stats?.formBreakdown[0]

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Dashboard
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">Welcome back, {session.user.name}</p>
        </div>
        <button
          type="button"
          onClick={async () => { await signOutCompletely(); router.push('/login') }}
          className="h-10 w-full rounded-lg border border-[#333] px-4 text-sm font-medium text-[#9CA3AF] transition-colors hover:border-white hover:text-white sm:w-auto"
        >
          Sign Out
        </button>
      </div>

      {loadError && (
        <div className="mb-6 rounded-xl border border-red-900/50 bg-red-950/30 p-5 text-sm text-red-400 sm:p-6">
          Could not load dashboard data. Refresh the page or try again shortly.
        </div>
      )}

      {/* KPI Cards */}
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Leads (30d)"
          value={cur30}
          sub={trendLabel}
        />
        <StatCard
          label="New / Unworked"
          value={stats?.newUnworked ?? 0}
          sub={
            stats && stats.newUnworked > 0
              ? `${stats.newUnworked} need a first touch`
              : 'All caught up'
          }
        />
        <StatCard
          label="Active Pipeline"
          value={activeLeads}
          sub={`${totalLeads} leads total`}
        />
        <StatCard
          label="Win Rate"
          value={`${winRate}%`}
          sub={`${won} won · ${lost} lost`}
        />
      </div>

      {/* Secondary stat row */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:mb-8 lg:grid-cols-4">
        <StatCard label="New Today" value={stats?.totalLeadsToday ?? 0} />
        <StatCard label="New This Week" value={stats?.totalLeads7d ?? 0} />
        <StatCard
          label="Lead → Won"
          value={`${conversionRate}%`}
          sub="all-time conversion"
        />
        <Link
          href="/leads"
          className="flex flex-col justify-between rounded-xl border border-[#222] bg-[#111] p-5 transition-colors hover:border-white sm:p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Manage Leads
          </p>
          <p className="mt-2 text-sm font-medium text-white">View all leads &rarr;</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Pipeline Snapshot */}
        <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Pipeline
            </h3>
            <span className="text-xs text-[#4B5563]">{totalLeads} total</span>
          </div>
          <div className="space-y-3">
            {stats?.pipelineSnapshot.map((s) => (
              <BarSegment
                key={s.status}
                label={STATUS_LABELS[s.status] ?? s.status}
                count={s.count}
                total={totalLeads}
              />
            ))}
            {(!stats?.pipelineSnapshot || stats.pipelineSnapshot.length === 0) && (
              <p className="text-xs text-[#4B5563]">No leads yet — your pipeline is empty.</p>
            )}
          </div>
        </div>

        {/* Path Split */}
        <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Path Split
            </h3>
            {topPath && (
              <span className="text-xs text-[#4B5563]">
                Top: {PATH_LABELS[topPath.path] ?? topPath.path}
              </span>
            )}
          </div>
          <div className="space-y-3">
            {stats?.pathSplit.map((s) => (
              <BarSegment
                key={s.path}
                label={PATH_LABELS[s.path] ?? s.path}
                count={s.count}
                total={pathTotal}
              />
            ))}
            {(!stats?.pathSplit || stats.pathSplit.length === 0) && (
              <p className="text-xs text-[#4B5563]">No leads have chosen a path yet.</p>
            )}
          </div>
        </div>

        {/* Form Type Breakdown */}
        <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Form Types
            </h3>
            {topForm && (
              <span className="text-xs text-[#4B5563]">
                Top: {FORM_TYPE_LABELS[topForm.form_type] ?? topForm.form_type}
              </span>
            )}
          </div>
          <div className="space-y-3">
            {stats?.formBreakdown.map((s) => (
              <BarSegment
                key={s.form_type}
                label={FORM_TYPE_LABELS[s.form_type] ?? s.form_type}
                count={s.count}
                total={formTotal}
              />
            ))}
            {(!stats?.formBreakdown || stats.formBreakdown.length === 0) && (
              <p className="text-xs text-[#4B5563]">No form submissions yet.</p>
            )}
          </div>
        </div>

        {/* Recent Leads */}
        <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Recent Leads
            </h3>
            <Link href="/leads" className="text-xs text-[#6B7280] hover:text-white">
              View all &rarr;
            </Link>
          </div>
          {recentLeads.length === 0 ? (
            <EmptyState
              title="No leads yet"
              description="New form submissions will appear here as soon as they arrive."
            />
          ) : (
            <div className="space-y-2">
              {recentLeads.map((lead) => {
                const name =
                  [lead.first_name, lead.last_name].filter(Boolean).join(' ') || 'Anonymous'
                return (
                  <Link
                    key={lead.id}
                    href={`/leads/${lead.id}`}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#1A1A1A]"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{name}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-1.5">
                        <span className="rounded bg-[#1A1A1A] px-1.5 py-0.5 text-[10px] font-medium text-[#9CA3AF]">
                          {FORM_TYPE_LABELS[lead.form_type] ?? lead.form_type}
                        </span>
                        <span className="text-[10px] text-[#4B5563]">
                          {STATUS_LABELS[lead.current_status] ?? lead.current_status}
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-[#6B7280]">
                      {timeAgo(lead.created_at)}
                    </span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
