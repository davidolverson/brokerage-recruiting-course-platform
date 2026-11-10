'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import type { Lead, LeadsSummary } from '@/lib/db/leads'
import { CALL_ONLY_BADGE, isConsentedFor } from '@/lib/phone-consent'
import { StatCard } from '@/components/admin/StatCard'
import LoadingState from '@/components/admin/LoadingState'
import EmptyState from '@/components/admin/EmptyState'
import { adminFetch } from '@/lib/admin-fetch'

const STATUSES = ['new', 'contacted', 'meeting_set', 'qualified', 'won', 'lost', 'archived']
const FORM_TYPES = ['join_team_inquiry', 'network_inquiry', 'branch_tour_booking', 'general_contact', 'fit_quiz']
const PATHS = ['team', 'network', 'toss_up']

const STATUS_LABELS: Record<string, string> = {
  new: 'New',
  contacted: 'Contacted',
  meeting_set: 'Meeting Set',
  qualified: 'Qualified',
  won: 'Won',
  lost: 'Lost',
  archived: 'Archived',
}

const FORM_TYPE_LABELS: Record<string, string> = {
  join_team_inquiry: 'Team Inquiry',
  network_inquiry: 'Growth Network Inquiry',
  branch_tour_booking: 'Tour Booking',
  general_contact: 'Contact',
  fit_quiz: 'Quiz',
}

function pathLabel(p: string | null | undefined): string {
  if (!p) return '—'
  return p === 'network' ? 'Growth Network' : p === 'toss_up' ? 'Toss-Up' : p === 'team' ? 'Team' : p
}

function StatusBadge({ status }: { status: string }) {
  const filled = status === 'won' || status === 'qualified'
  const muted = status === 'lost' || status === 'archived'
  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        filled ? 'bg-white text-black' :
        muted ? 'bg-[#333] text-[#6B7280]' :
        'border border-[#444] text-[#9CA3AF]'
      }`}
    >
      {STATUS_LABELS[status] ?? status}
    </span>
  )
}

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

export default function AdminLeadsWrapper() {
  return (
    <Suspense fallback={<LoadingState message="Loading leads..." />}>
      <AdminLeadsPage />
    </Suspense>
  )
}

function AdminLeadsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [leads, setLeads] = useState<Lead[]>([])
  const [total, setTotal] = useState(0)
  const [summary, setSummary] = useState<LeadsSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState(searchParams.get('q') ?? '')
  const [statusFilter, setStatusFilter] = useState<string[]>(
    searchParams.get('status')?.split(',').filter(Boolean) ?? []
  )
  const [formTypeFilter, setFormTypeFilter] = useState(searchParams.get('form_type') ?? '')
  const [pathFilter, setPathFilter] = useState(searchParams.get('path') ?? '')
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'))
  const perPage = 25

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    setError(false)
    const params = new URLSearchParams()
    if (search) params.set('q', search)
    if (statusFilter.length > 0) params.set('status', statusFilter.join(','))
    if (formTypeFilter) params.set('form_type', formTypeFilter)
    if (pathFilter) params.set('path', pathFilter)
    params.set('page', String(page))
    params.set('per_page', String(perPage))

    try {
      const res = await adminFetch(`/api/admin/leads?${params}`)
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setLeads(data.leads)
      setTotal(data.total)
      if (data.summary) setSummary(data.summary as LeadsSummary)
    } catch {
      setLeads([])
      setTotal(0)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [search, statusFilter, formTypeFilter, pathFilter, page])

  useEffect(() => {
    const timer = setTimeout(fetchLeads, search ? 300 : 0)
    return () => clearTimeout(timer)
  }, [fetchLeads, search])

  const totalPages = Math.ceil(total / perPage)
  const hasActiveFilters = statusFilter.length > 0 || !!formTypeFilter || !!pathFilter || !!search

  function toggleStatus(s: string) {
    setStatusFilter((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
    setPage(1)
  }

  function clearFilters() {
    setStatusFilter([])
    setFormTypeFilter('')
    setPathFilter('')
    setSearch('')
    setPage(1)
  }

  const exportHref = `/api/admin/leads/export?${new URLSearchParams({
    ...(search ? { q: search } : {}),
    ...(statusFilter.length > 0 ? { status: statusFilter.join(',') } : {}),
    ...(formTypeFilter ? { form_type: formTypeFilter } : {}),
    ...(pathFilter ? { path: pathFilter } : {}),
  })}`

  // Pipeline = active (not won/lost/archived) leads
  const pipeline = summary
    ? summary.total -
      (summary.byStatus['won'] ?? 0) -
      (summary.byStatus['lost'] ?? 0) -
      (summary.byStatus['archived'] ?? 0)
    : 0

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Leads
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            {summary ? summary.total : total} lead{(summary ? summary.total : total) !== 1 ? 's' : ''} total
            {hasActiveFilters && total !== (summary?.total ?? total) && (
              <span className="text-[#4B5563]"> · {total} match current filters</span>
            )}
          </p>
        </div>
        <a
          href={exportHref}
          className="inline-flex w-full items-center justify-center rounded-lg border border-[#333] px-4 py-2.5 text-sm font-medium text-[#9CA3AF] transition-colors hover:border-white hover:text-white sm:w-auto"
        >
          Export CSV
        </a>
      </div>

      {/* Summary stat row */}
      {summary && (
        <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <StatCard label="Total Leads" value={summary.total} sub={`${summary.unassigned} unassigned`} />
          <StatCard label="New This Week" value={summary.newThisWeek} sub="last 7 days" />
          <StatCard
            label="In Pipeline"
            value={pipeline}
            sub={`${summary.byStatus['new'] ?? 0} new · ${summary.byStatus['meeting_set'] ?? 0} meeting set`}
          />
          <StatCard
            label="Conversion"
            value={`${summary.conversionRate}%`}
            sub={`${summary.byStatus['won'] ?? 0} won · ${summary.byStatus['lost'] ?? 0} lost`}
          />
        </div>
      )}

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          className="w-full rounded-lg border border-[#333] bg-[#111] px-4 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
        />
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3">
        {/* Status pills with counts */}
        <div className="flex flex-wrap gap-1.5">
          {STATUSES.map((s) => {
            const count = summary?.byStatus[s] ?? 0
            const active = statusFilter.includes(s)
            return (
              <button
                key={s}
                onClick={() => toggleStatus(s)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? 'bg-white text-black'
                    : 'border border-[#444] text-[#9CA3AF] hover:border-white hover:text-white'
                }`}
              >
                {STATUS_LABELS[s]}
                {summary && (
                  <span className={active ? 'text-[#6B7280]' : 'text-[#4B5563]'}>{count}</span>
                )}
              </button>
            )
          })}
        </div>

        {/* Select filters */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={formTypeFilter}
            onChange={(e) => { setFormTypeFilter(e.target.value); setPage(1) }}
            className="min-w-0 flex-1 rounded-lg border border-[#333] bg-[#111] px-3 py-2 text-xs text-[#9CA3AF] focus:border-white focus:outline-none sm:flex-none"
          >
            <option value="">All form types</option>
            {FORM_TYPES.map((ft) => (
              <option key={ft} value={ft}>
                {FORM_TYPE_LABELS[ft]}{summary ? ` (${summary.byFormType[ft] ?? 0})` : ''}
              </option>
            ))}
          </select>

          <select
            value={pathFilter}
            onChange={(e) => { setPathFilter(e.target.value); setPage(1) }}
            className="min-w-0 flex-1 rounded-lg border border-[#333] bg-[#111] px-3 py-2 text-xs text-[#9CA3AF] focus:border-white focus:outline-none sm:flex-none"
          >
            <option value="">All paths</option>
            {PATHS.map((p) => (
              <option key={p} value={p}>
                {pathLabel(p)}{summary ? ` (${summary.byPath[p] ?? 0})` : ''}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-lg border border-[#333] px-3 py-2 text-xs text-[#6B7280] transition-colors hover:border-white hover:text-white"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <LoadingState message="Loading leads..." />
      ) : error ? (
        <EmptyState
          title="Couldn't load leads"
          description="Something went wrong fetching leads. Check your connection and try again."
        />
      ) : leads.length === 0 ? (
        <EmptyState
          title="No leads found"
          description={
            hasActiveFilters
              ? 'No leads match your current filters. Try clearing them.'
              : 'Leads will appear here once submitted through the website.'
          }
        />
      ) : (
        <>
          {/* Mobile: stacked cards */}
          <div className="space-y-3 md:hidden">
            {leads.map((lead) => (
              <Link
                key={lead.id}
                href={`/leads/${lead.id}`}
                className="block rounded-xl border border-[#222] bg-[#111] p-4 transition-colors hover:border-[#333] active:border-white"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">
                      {[lead.first_name, lead.last_name].filter(Boolean).join(' ') || 'Unnamed lead'}
                    </p>
                    <p className="mt-0.5 truncate text-sm text-[#9CA3AF]">{lead.email ?? 'No email'}</p>
                  </div>
                  <StatusBadge status={lead.current_status} />
                </div>
                {lead.phone && (
                  <p className="mt-1.5 flex items-center gap-2 truncate text-sm text-[#6B7280]">
                    {lead.phone}
                    {/* Stated wherever the number is, not only on the detail page.
                        Someone scanning this list to pick who to text needs to see
                        it here, before they open anything. */}
                    {!isConsentedFor(lead, lead.phone) && (
                      <span
                        className="shrink-0 rounded border border-[#7F1D1D] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#FCA5A5]"
                        title={
                          lead.consent_at
                            ? `Consent was given for ${lead.consent_phone}, which is not this number. Do not text.`
                            : 'No consent on record for this number. Do not text.'
                        }
                      >
                        {CALL_ONLY_BADGE}
                      </span>
                    )}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#4B5563]">
                  <span className="text-[#6B7280]">{FORM_TYPE_LABELS[lead.form_type] ?? lead.form_type}</span>
                  {(lead.selected_path || lead.selected_team) && <span>·</span>}
                  {lead.selected_path && <span>{pathLabel(lead.selected_path)}</span>}
                  {(lead.selected_team || lead.assigned_team) && (
                    <span>{lead.selected_team ?? lead.assigned_team}</span>
                  )}
                  <span className="ml-auto">{timeAgo(lead.created_at)}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden overflow-x-auto rounded-xl border border-[#222] md:block">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="border-b border-[#222] bg-[#111]">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Path</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Team</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Source</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => router.push(`/leads/${lead.id}`)}
                    className="cursor-pointer border-b border-[#1A1A1A] transition-colors hover:bg-[#111]"
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      {[lead.first_name, lead.last_name].filter(Boolean).join(' ') || '—'}
                    </td>
                    <td className="px-4 py-3 text-[#9CA3AF]">{lead.email ?? '—'}</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">{FORM_TYPE_LABELS[lead.form_type] ?? lead.form_type}</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">{pathLabel(lead.selected_path)}</td>
                    <td className="px-4 py-3 text-[#9CA3AF]">{lead.selected_team ?? lead.assigned_team ?? '—'}</td>
                    <td className="px-4 py-3"><StatusBadge status={lead.current_status} /></td>
                    <td className="px-4 py-3 text-[#4B5563]">{lead.source_route ?? '—'}</td>
                    <td className="px-4 py-3 text-right text-[#4B5563]">{timeAgo(lead.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xs text-[#6B7280]">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-lg border border-[#333] px-3 py-2 text-xs text-[#9CA3AF] transition-colors hover:border-white hover:text-white disabled:opacity-30"
            >
              Previous
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-[#333] px-3 py-2 text-xs text-[#9CA3AF] transition-colors hover:border-white hover:text-white disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
