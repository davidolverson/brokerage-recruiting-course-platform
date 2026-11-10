'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { Lead } from '@/lib/db/leads'
import LoadingState from '@/components/admin/LoadingState'
import ForbiddenState from '@/components/admin/ForbiddenState'
import { adminFetch } from '@/lib/admin-fetch'

const COLUMNS = [
  { key: 'new', label: 'New' },
  { key: 'contacted', label: 'Contacted' },
  { key: 'meeting_set', label: 'Meeting Set' },
  { key: 'qualified', label: 'Qualified' },
  { key: 'won', label: 'Won' },
  { key: 'lost', label: 'Lost' },
]

/** Stages a lead can advance to (mobile dropdown) — excludes archived */
const MOVE_TARGETS = COLUMNS.map((c) => c.key)

const ACTIVE_KEYS = ['new', 'contacted', 'meeting_set', 'qualified']

const FORM_TYPE_SHORT: Record<string, string> = {
  join_team_inquiry: 'Team',
  network_inquiry: 'Growth Network',
  branch_tour_booking: 'Tour',
  general_contact: 'Contact',
  fit_quiz: 'Quiz',
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h`
  const days = Math.floor(hrs / 24)
  return `${days}d`
}

function pathLabel(path: string): string {
  return path === 'network' ? 'Growth Network' : path === 'team' ? 'Team' : path === 'toss_up' ? 'Toss-Up' : path
}

interface CardProps {
  lead: Lead
}

/** Draggable card used on the desktop kanban board */
function Card({ lead }: CardProps) {
  const router = useRouter()
  const name = [lead.first_name, lead.last_name].filter(Boolean).join(' ') || 'Anonymous'

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('leadId', String(lead.id))
        e.dataTransfer.setData('fromStatus', lead.current_status)
        e.dataTransfer.effectAllowed = 'move'
      }}
      onClick={() => router.push(`/leads/${lead.id}`)}
      className="cursor-pointer rounded-lg border border-[#222] bg-[#111] p-3 transition-all hover:border-[#444] active:scale-[0.98]"
    >
      <p className="truncate text-sm font-semibold text-white">{name}</p>
      <div className="mt-1.5 flex items-center gap-2">
        <span className="rounded bg-[#1A1A1A] px-1.5 py-0.5 text-[10px] font-medium text-[#9CA3AF]">
          {FORM_TYPE_SHORT[lead.form_type] ?? lead.form_type}
        </span>
        {lead.selected_path && (
          <span className="text-[10px] text-[#4B5563]">{pathLabel(lead.selected_path)}</span>
        )}
        <span className="ml-auto text-[10px] text-[#4B5563]">{timeAgo(lead.created_at)}</span>
      </div>
      {(lead.selected_team || lead.assigned_team) && (
        <p className="mt-1 truncate text-[10px] text-[#6B7280]">
          {lead.assigned_team ?? lead.selected_team}
        </p>
      )}
    </div>
  )
}

interface MobileRowProps {
  lead: Lead
  onMove: (lead: Lead, target: string) => void
}

/** Stacked list row used on phones (no drag — uses a status <select> instead) */
function MobileRow({ lead, onMove }: MobileRowProps) {
  const router = useRouter()
  const name = [lead.first_name, lead.last_name].filter(Boolean).join(' ') || 'Anonymous'

  return (
    <div className="rounded-lg border border-[#222] bg-[#111] p-3">
      <button
        type="button"
        onClick={() => router.push(`/leads/${lead.id}`)}
        className="block w-full text-left"
      >
        <p className="truncate text-sm font-semibold text-white">{name}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <span className="rounded bg-[#1A1A1A] px-1.5 py-0.5 text-[10px] font-medium text-[#9CA3AF]">
            {FORM_TYPE_SHORT[lead.form_type] ?? lead.form_type}
          </span>
          {lead.selected_path && (
            <span className="text-[10px] text-[#4B5563]">{pathLabel(lead.selected_path)}</span>
          )}
          {(lead.selected_team || lead.assigned_team) && (
            <span className="truncate text-[10px] text-[#6B7280]">
              {lead.assigned_team ?? lead.selected_team}
            </span>
          )}
          <span className="ml-auto text-[10px] text-[#4B5563]">{timeAgo(lead.created_at)}</span>
        </div>
      </button>
      <label className="mt-2.5 flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-[#6B7280]">Stage</span>
        <select
          value={lead.current_status}
          onChange={(e) => onMove(lead, e.target.value)}
          className="h-10 flex-1 rounded-lg border border-[#333] bg-[#0A0A0A] px-2 text-xs text-white focus:border-white focus:outline-none"
        >
          {COLUMNS.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default function PipelinePage() {
  const [columns, setColumns] = useState<Record<string, Lead[]>>({})
  const [counts, setCounts] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [forbidden, setForbidden] = useState(false)
  const [search, setSearch] = useState('')
  const [formTypeFilter, setFormTypeFilter] = useState('')
  const [pathFilter, setPathFilter] = useState('')
  const [dragOverCol, setDragOverCol] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [activeMobileCol, setActiveMobileCol] = useState('new')

  const fetchPipeline = useCallback(async () => {
    const params = new URLSearchParams()
    if (search) params.set('q', search)
    if (formTypeFilter) params.set('form_type', formTypeFilter)
    if (pathFilter) params.set('path', pathFilter)

    try {
      const res = await adminFetch(`/api/admin/pipeline?${params}`)
      if (res.status === 403) {
        setForbidden(true)
        setLoading(false)
        return
      }
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setColumns(data.columns)
      setCounts(data.counts)
    } catch {
      setError('Failed to load pipeline. Refresh the page or try again shortly.')
    } finally {
      setLoading(false)
    }
  }, [search, formTypeFilter, pathFilter])

  useEffect(() => {
    const timer = setTimeout(fetchPipeline, search ? 300 : 0)
    return () => clearTimeout(timer)
  }, [fetchPipeline, search])

  const persistMove = useCallback(
    async (
      leadId: number,
      fromStatus: string,
      targetStatus: string,
      prevColumns: Record<string, Lead[]>,
      prevCounts: Record<string, number>,
    ) => {
      try {
        const res = await adminFetch(`/api/admin/leads/${leadId}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: targetStatus }),
        })

        if (!res.ok) {
          setColumns(prevColumns)
          setCounts(prevCounts)
          const data = await res.json()
          setToast(data.error ?? 'Failed to update status')
          setTimeout(() => setToast(null), 3000)
        }
      } catch {
        setColumns(prevColumns)
        setCounts(prevCounts)
        setToast('Network error — status not updated')
        setTimeout(() => setToast(null), 3000)
      }
    },
    [],
  )

  /** Shared move logic for both drag-drop and the mobile <select>. */
  const moveLead = useCallback(
    (lead: Lead, fromStatus: string, targetStatus: string) => {
      if (fromStatus === targetStatus) return

      const prevColumns = { ...columns }
      const prevCounts = { ...counts }

      setColumns((prev) => ({
        ...prev,
        [fromStatus]: (prev[fromStatus] ?? []).filter((l) => l.id !== lead.id),
        [targetStatus]: [
          { ...lead, current_status: targetStatus },
          ...(prev[targetStatus] ?? []),
        ],
      }))
      setCounts((prev) => ({
        ...prev,
        [fromStatus]: (prev[fromStatus] ?? 0) - 1,
        [targetStatus]: (prev[targetStatus] ?? 0) + 1,
      }))

      void persistMove(lead.id, fromStatus, targetStatus, prevColumns, prevCounts)
    },
    [columns, counts, persistMove],
  )

  function handleDrop(targetStatus: string, e: React.DragEvent) {
    e.preventDefault()
    setDragOverCol(null)

    const leadId = e.dataTransfer.getData('leadId')
    const fromStatus = e.dataTransfer.getData('fromStatus')
    if (!leadId || fromStatus === targetStatus) return

    const lead = columns[fromStatus]?.find((l) => l.id === parseInt(leadId))
    if (!lead) return

    moveLead(lead, fromStatus, targetStatus)
  }

  if (loading) {
    return <LoadingState message="Loading pipeline..." />
  }

  if (forbidden) {
    return <ForbiddenState />
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-900/50 bg-red-950/30 p-5 text-sm text-red-400 sm:p-6">
        {error}
      </div>
    )
  }

  const filtersActive = Boolean(search || formTypeFilter || pathFilter)
  const totalLeads = MOVE_TARGETS.reduce((sum, k) => sum + (counts[k] ?? 0), 0)
  const activeLeads = ACTIVE_KEYS.reduce((sum, k) => sum + (counts[k] ?? 0), 0)
  const won = counts.won ?? 0
  const lost = counts.lost ?? 0
  const closed = won + lost
  const winRate = closed > 0 ? Math.round((won / closed) * 100) : 0
  const isEmpty = totalLeads === 0

  function clearFilters() {
    setSearch('')
    setFormTypeFilter('')
    setPathFilter('')
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-5 sm:mb-6">
        <h2
          className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Pipeline
        </h2>
        <p className="mt-1 text-sm text-[#6B7280]">
          <span className="hidden sm:inline">Drag leads between stages to update status.</span>
          <span className="sm:hidden">Tap a stage tab, then use each card&apos;s menu to move it.</span>
        </p>
      </div>

      {/* Summary stats */}
      <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-6 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-[#222] bg-[#111] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Total</p>
          <p
            className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {totalLeads}
          </p>
        </div>
        <div className="rounded-xl border border-[#222] bg-[#111] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Active</p>
          <p
            className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {activeLeads}
          </p>
        </div>
        <div className="rounded-xl border border-[#222] bg-[#111] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Won</p>
          <p
            className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {won}
          </p>
        </div>
        <div className="rounded-xl border border-[#222] bg-[#111] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Win Rate</p>
          <p
            className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {winRate}%
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
        <input
          type="text"
          placeholder="Search name, email, phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 w-full rounded-lg border border-[#333] bg-[#111] px-3 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none sm:w-56"
        />
        <select
          value={formTypeFilter}
          onChange={(e) => setFormTypeFilter(e.target.value)}
          className="h-10 w-full rounded-lg border border-[#333] bg-[#111] px-3 text-sm text-[#9CA3AF] focus:border-white focus:outline-none sm:w-auto"
        >
          <option value="">All types</option>
          <option value="join_team_inquiry">Team Inquiry</option>
          <option value="network_inquiry">Growth Network Inquiry</option>
          <option value="branch_tour_booking">Tour Booking</option>
          <option value="general_contact">Contact</option>
          <option value="fit_quiz">Quiz</option>
        </select>
        <select
          value={pathFilter}
          onChange={(e) => setPathFilter(e.target.value)}
          className="h-10 w-full rounded-lg border border-[#333] bg-[#111] px-3 text-sm text-[#9CA3AF] focus:border-white focus:outline-none sm:w-auto"
        >
          <option value="">All paths</option>
          <option value="team">Team</option>
          <option value="network">Growth Network</option>
          <option value="toss_up">Toss-Up</option>
        </select>
        {filtersActive && (
          <button
            type="button"
            onClick={clearFilters}
            className="h-10 w-full rounded-lg border border-[#333] px-3 text-sm font-medium text-white transition-colors hover:border-white sm:w-auto"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className="mb-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
          {toast}
        </div>
      )}

      {isEmpty ? (
        <div className="rounded-xl border border-[#222] bg-[#111] p-8 text-center">
          <h3
            className="text-base font-semibold text-[#6B7280]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {filtersActive ? 'No leads match your filters' : 'No leads in the pipeline'}
          </h3>
          <p className="mt-2 text-sm text-[#4B5563]">
            {filtersActive
              ? 'Try clearing the search or filters above.'
              : 'New form submissions will appear here automatically.'}
          </p>
          {filtersActive && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 inline-flex h-10 items-center rounded-lg border border-[#333] px-4 text-sm font-medium text-white transition-colors hover:border-white"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Desktop kanban board */}
          <div className="hidden gap-4 overflow-x-auto pb-4 md:flex">
            {COLUMNS.map((col) => {
              const isEndState = col.key === 'won' || col.key === 'lost'
              const colLeads = columns[col.key] ?? []

              return (
                <div
                  key={col.key}
                  className={`shrink-0 ${isEndState ? 'w-48' : 'w-64'}`}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOverCol(col.key)
                  }}
                  onDragLeave={() => setDragOverCol(null)}
                  onDrop={(e) => handleDrop(col.key, e)}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                      {col.label}
                    </h3>
                    <span className="rounded-full bg-[#1A1A1A] px-2 py-0.5 text-[10px] font-bold text-[#9CA3AF]">
                      {counts[col.key] ?? 0}
                    </span>
                  </div>

                  <div
                    className={`min-h-[200px] space-y-2 rounded-xl border p-2 transition-colors ${
                      dragOverCol === col.key
                        ? 'border-white/30 bg-[#111]'
                        : 'border-[#1A1A1A] bg-[#0A0A0A]'
                    }`}
                  >
                    {colLeads.length === 0 ? (
                      <p className="py-8 text-center text-[10px] text-[#4B5563]">No leads</p>
                    ) : (
                      colLeads.map((lead) => <Card key={lead.id} lead={lead} />)
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile stacked view — stage tabs + stacked card list */}
          <div className="md:hidden">
            <div className="-mx-1 mb-4 flex gap-2 overflow-x-auto px-1 pb-1">
              {COLUMNS.map((col) => {
                const active = activeMobileCol === col.key
                return (
                  <button
                    key={col.key}
                    type="button"
                    onClick={() => setActiveMobileCol(col.key)}
                    className={`flex h-10 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition-colors ${
                      active
                        ? 'border-white bg-white text-black'
                        : 'border-[#333] text-[#9CA3AF] hover:border-white'
                    }`}
                  >
                    {col.label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                        active ? 'bg-black/10 text-black' : 'bg-[#1A1A1A] text-[#6B7280]'
                      }`}
                    >
                      {counts[col.key] ?? 0}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="space-y-2">
              {(columns[activeMobileCol] ?? []).length === 0 ? (
                <div className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-8 text-center">
                  <p className="text-xs text-[#4B5563]">
                    No leads in{' '}
                    {COLUMNS.find((c) => c.key === activeMobileCol)?.label ?? activeMobileCol}.
                  </p>
                </div>
              ) : (
                (columns[activeMobileCol] ?? []).map((lead) => (
                  <MobileRow
                    key={lead.id}
                    lead={lead}
                    onMove={(l, target) => moveLead(l, l.current_status, target)}
                  />
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
