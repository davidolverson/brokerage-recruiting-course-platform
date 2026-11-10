'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Lead, LeadNote, StatusHistoryEntry } from '@/lib/db/leads'
import { CALL_ONLY_LABEL, MAY_TEXT_LABEL, isConsentedFor } from '@/lib/phone-consent'
import { teams } from '@/lib/data/teams'
import LoadingState from '@/components/admin/LoadingState'
import EmptyState from '@/components/admin/EmptyState'
import { adminFetch } from '@/lib/admin-fetch'

const STATUSES = ['new', 'contacted', 'meeting_set', 'qualified', 'won', 'lost', 'archived']
const STATUS_LABELS: Record<string, string> = {
  new: 'New', contacted: 'Contacted', meeting_set: 'Meeting Set',
  qualified: 'Qualified', won: 'Won', lost: 'Lost', archived: 'Archived',
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  })
}

/** Human label for an arbitrary metadata key, e.g. utm_source -> "Utm Source". */
function humanizeKey(key: string): string {
  return key
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">{label}</p>
      <div className="mt-1 break-words text-sm text-[#9CA3AF]">{children}</div>
    </div>
  )
}

// Metadata keys already surfaced elsewhere on the page — skip in the generic dump.
const HANDLED_META_KEYS = new Set([
  'answers', 'score_breakdown', 'utm_source', 'utm_medium', 'utm_campaign',
])

export default function LeadDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [lead, setLead] = useState<Lead | null>(null)
  const [notes, setNotes] = useState<LeadNote[]>([])
  const [history, setHistory] = useState<StatusHistoryEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [noteContent, setNoteContent] = useState('')
  const [submittingNote, setSubmittingNote] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [assignTeam, setAssignTeam] = useState('')
  const [savingAssignment, setSavingAssignment] = useState(false)

  const fetchLead = useCallback(async () => {
    try {
      setLoadError(false)
      const [notesRes, historyRes, allRes] = await Promise.all([
        adminFetch(`/api/admin/leads/${id}/notes`),
        adminFetch(`/api/admin/leads/${id}/history`),
        adminFetch(`/api/admin/leads?per_page=100&summary=0`),
      ])

      if (!allRes.ok) throw new Error('Failed to load leads')
      const allData = await allRes.json()
      const foundLead = (allData.leads as Lead[]).find((l) => l.id === parseInt(id))

      if (foundLead) {
        setLead(foundLead)
        setAssignTeam(foundLead.assigned_team ?? '')
      }

      if (notesRes.ok) {
        const notesData = await notesRes.json()
        setNotes(notesData.notes)
      }

      if (historyRes.ok) {
        const historyData = await historyRes.json()
        setHistory(historyData.history)
      }
    } catch {
      setLoadError(true)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => { fetchLead() }, [fetchLead])

  async function handleStatusChange(newStatus: string) {
    if (!lead || newStatus === lead.current_status) return
    setUpdatingStatus(true)
    try {
      const res = await adminFetch(`/api/admin/leads/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        setLead({ ...lead, current_status: newStatus })
        fetchLead() // Refresh history
      }
    } finally {
      setUpdatingStatus(false)
    }
  }

  async function handleAddNote() {
    if (!noteContent.trim()) return
    setSubmittingNote(true)
    try {
      const res = await adminFetch(`/api/admin/leads/${id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: noteContent.trim() }),
      })
      if (res.ok) {
        setNoteContent('')
        fetchLead() // Refresh notes
      }
    } finally {
      setSubmittingNote(false)
    }
  }

  async function handleAssign() {
    if (!lead) return
    setSavingAssignment(true)
    try {
      const res = await adminFetch(`/api/admin/leads/${id}/assign`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ team_slug: assignTeam || null }),
      })
      if (res.ok) {
        setLead({ ...lead, assigned_team: assignTeam || null })
      }
    } finally {
      setSavingAssignment(false)
    }
  }

  if (loading) {
    return <LoadingState message="Loading lead..." />
  }

  if (loadError) {
    return (
      <EmptyState
        title="Couldn't load this lead"
        description="Something went wrong fetching the lead. Try again."
        action={{ label: 'Back to leads', href: '/leads' }}
      />
    )
  }

  if (!lead) {
    return (
      <EmptyState
        title="Lead not found"
        description="This lead may have been removed, or you may not have access to it."
        action={{ label: 'Back to leads', href: '/leads' }}
      />
    )
  }

  const metadata = (lead.metadata ?? {}) as Record<string, unknown>
  const quizAnswers = metadata.answers as Array<{ question_id: number; label: string; score: string }> | undefined
  const scoreBreakdown = metadata.score_breakdown as { grid: number; team: number; neutral: number } | undefined
  const assignedTeamName = lead.assigned_team
    ? teams.find((t) => t.slug === lead.assigned_team)?.name ?? lead.assigned_team
    : null
  const fullName = [lead.first_name, lead.last_name].filter(Boolean).join(' ') || 'Unnamed lead'

  // Generic, no-fake-data dump of any extra metadata keys not handled above.
  const extraMeta = Object.entries(metadata).filter(
    ([k, v]) =>
      !HANDLED_META_KEYS.has(k) &&
      v != null &&
      v !== '' &&
      typeof v !== 'object',
  )

  // Time-to-first-contact: gap between created and first non-"new" status.
  const firstContact = [...history]
    .sort((a, b) => new Date(a.changed_at).getTime() - new Date(b.changed_at).getTime())
    .find((h) => h.new_status !== 'new')

  return (
    <div>
      {/* Back link */}
      <Link href="/leads" className="mb-4 inline-flex items-center gap-1 text-xs text-[#6B7280] hover:text-white">
        <span aria-hidden>&larr;</span> Back to leads
      </Link>

      {/* Page header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2
            className="truncate text-xl font-extrabold text-white sm:text-2xl lg:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {fullName}
          </h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Lead #{lead.id} · {FORM_TYPE_LABELS[lead.form_type] ?? lead.form_type} · submitted {timeAgo(lead.created_at)}
          </p>
        </div>
        <StatusBadge status={lead.current_status} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        {/* Left column — 2/3 on desktop */}
        <div className="space-y-5 sm:space-y-6 lg:col-span-2">

          {/* Contact card */}
          <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Contact</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Email">
                {lead.email ? (
                  <a href={`mailto:${lead.email}`} className="text-white underline underline-offset-2 hover:text-[#E5E7EB]">
                    {lead.email}
                  </a>
                ) : '—'}
              </Field>
              <Field label="Phone">
                {lead.phone ? (
                  <>
                    <a href={`tel:${lead.phone}`} className="text-white underline underline-offset-2 hover:text-[#E5E7EB]">
                      {lead.phone}
                    </a>
                    {/* The permission is stated on the number itself. This page is
                        where someone decides how to contact a lead, and a texting
                        mistake costs $500 a message, $1,500 if wilful. */}
                    {isConsentedFor(lead, lead.phone) ? (
                      <span
                        className="ml-2 inline-block rounded border border-[#14532D] bg-[#052E16] px-1.5 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-[#4ADE80]"
                        title={`Consent recorded ${formatDate(lead.consent_at as string)} for ${lead.consent_phone}`}
                      >
                        {MAY_TEXT_LABEL}
                      </span>
                    ) : (
                      <span
                        className="ml-2 inline-block rounded border border-[#7F1D1D] bg-[#450A0A] px-1.5 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-[#FCA5A5]"
                        title={
                          lead.consent_at
                            ? `Consent was given for ${lead.consent_phone}, which is not this number. Do not text.`
                            : 'No consent on record for this number. Do not text.'
                        }
                      >
                        {CALL_ONLY_LABEL}
                      </span>
                    )}
                  </>
                ) : '—'}
              </Field>
              <Field label="Form Type">{FORM_TYPE_LABELS[lead.form_type] ?? lead.form_type}</Field>
              <Field label="Submitted">{formatDate(lead.created_at)}</Field>
            </div>

            {/* Quick contact actions — touch-friendly, full width on mobile */}
            {(lead.email || lead.phone) && (
              <div className="mt-5 flex flex-col gap-2 border-t border-[#1A1A1A] pt-5 sm:flex-row">
                {lead.email && (
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex min-h-[40px] flex-1 items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[#E5E7EB]"
                  >
                    Email lead
                  </a>
                )}
                {lead.phone && (
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex min-h-[40px] flex-1 items-center justify-center rounded-lg border border-[#333] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white"
                  >
                    Call lead
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Attribution card */}
          <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Attribution</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Source Route">{lead.source_route ?? '—'}</Field>
              <Field label="Source Section">{lead.source_section ?? '—'}</Field>
              <Field label="Path">{pathLabel(lead.selected_path)}</Field>
              <Field label="Team Interest">{lead.selected_team ?? '—'}</Field>
              <Field label="Partner Ref">{lead.partner_ref ?? '—'}</Field>
              <Field label="Campaign">{lead.campaign_id ?? '—'}</Field>
              {metadata.utm_source != null && (
                <>
                  <Field label="UTM Source">{String(metadata.utm_source)}</Field>
                  <Field label="UTM Medium">{String(metadata.utm_medium ?? '—')}</Field>
                  <Field label="UTM Campaign">{String(metadata.utm_campaign ?? '—')}</Field>
                </>
              )}
              {extraMeta.map(([k, v]) => (
                <Field key={k} label={humanizeKey(k)}>{String(v)}</Field>
              ))}
            </div>
          </div>

          {/* Quiz results (if applicable) */}
          {lead.form_type === 'fit_quiz' && quizAnswers && (
            <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Quiz Results</h4>
              {scoreBreakdown && (
                <div className="mb-4 grid grid-cols-3 gap-3">
                  <div className="rounded-lg border border-[#1A1A1A] bg-[#0A0A0A] p-3 text-center">
                    <p className="text-lg font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{scoreBreakdown.grid}</p>
                    <p className="mt-0.5 text-xs text-[#6B7280]">Growth Network</p>
                  </div>
                  <div className="rounded-lg border border-[#1A1A1A] bg-[#0A0A0A] p-3 text-center">
                    <p className="text-lg font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{scoreBreakdown.team}</p>
                    <p className="mt-0.5 text-xs text-[#6B7280]">Team</p>
                  </div>
                  <div className="rounded-lg border border-[#1A1A1A] bg-[#0A0A0A] p-3 text-center">
                    <p className="text-lg font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{scoreBreakdown.neutral}</p>
                    <p className="mt-0.5 text-xs text-[#6B7280]">Neutral</p>
                  </div>
                </div>
              )}
              <div className="space-y-2">
                {quizAnswers.map((a, i) => (
                  <div key={i} className="flex flex-wrap items-start gap-x-2 gap-y-0.5 text-sm">
                    <span className="shrink-0 font-semibold text-[#6B7280]">Q{a.question_id}.</span>
                    <span className="min-w-0 flex-1 text-[#9CA3AF]">{a.label}</span>
                    <span className="text-xs text-[#4B5563]">{a.score}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Notes{notes.length > 0 ? ` (${notes.length})` : ''}
            </h4>

            {/* Add note — stacks on mobile */}
            <div className="mb-4 flex flex-col gap-2 sm:flex-row">
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Add a note..."
                rows={2}
                className="flex-1 rounded-lg border border-[#333] bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button
                type="button"
                onClick={handleAddNote}
                disabled={!noteContent.trim() || submittingNote}
                className="flex min-h-[40px] w-full items-center justify-center self-stretch rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#E5E7EB] disabled:opacity-40 sm:w-auto sm:self-end"
              >
                {submittingNote ? 'Saving...' : 'Add Note'}
              </button>
            </div>

            {/* Notes list */}
            {notes.length === 0 ? (
              <p className="text-xs text-[#4B5563]">No notes yet. Add the first one above.</p>
            ) : (
              <div className="space-y-3">
                {notes.map((note) => (
                  <div key={note.id} className="rounded-lg border border-[#1A1A1A] bg-[#0A0A0A] p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#333] text-[10px] font-bold text-white">
                        {(note.author_name ?? 'U')[0].toUpperCase()}
                      </div>
                      <span className="text-xs font-semibold text-[#9CA3AF]">{note.author_name ?? 'Unknown'}</span>
                      <span className="text-xs text-[#4B5563]" title={formatDate(note.created_at)}>
                        {timeAgo(note.created_at)}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap break-words text-sm text-[#9CA3AF]">{note.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Status History */}
          <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Status History{history.length > 0 ? ` (${history.length})` : ''}
            </h4>
            {history.length === 0 ? (
              <p className="text-xs text-[#4B5563]">No status changes yet — this lead is still {STATUS_LABELS[lead.current_status]}.</p>
            ) : (
              <ol className="space-y-4">
                {history.map((entry, i) => (
                  <li key={entry.id} className="flex gap-3">
                    {/* Timeline rail */}
                    <div className="flex flex-col items-center pt-1">
                      <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${i === 0 ? 'bg-white' : 'bg-[#444]'}`} />
                      {i < history.length - 1 && <div className="mt-1 w-px flex-1 bg-[#222]" />}
                    </div>
                    <div className="min-w-0 flex-1 pb-1">
                      <p className="text-sm text-[#9CA3AF]">
                        {entry.old_status && (
                          <span className="text-[#6B7280]">{STATUS_LABELS[entry.old_status] ?? entry.old_status} → </span>
                        )}
                        <strong className="text-white">{STATUS_LABELS[entry.new_status] ?? entry.new_status}</strong>
                      </p>
                      <p className="mt-0.5 text-xs text-[#4B5563]">
                        {entry.changed_by_name ? `${entry.changed_by_name} · ` : ''}
                        <span title={formatDate(entry.changed_at)}>{timeAgo(entry.changed_at)}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>

        {/* Right column — 1/3 on desktop */}
        <div className="space-y-5 sm:space-y-6">

          {/* Snapshot */}
          <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Snapshot</h4>
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-[#4B5563]">Lead ID</dt>
                <dd className="text-[#9CA3AF]">#{lead.id}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[#4B5563]">Current status</dt>
                <dd><StatusBadge status={lead.current_status} /></dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[#4B5563]">Assigned team</dt>
                <dd className="min-w-0 truncate text-right text-[#9CA3AF]">{assignedTeamName ?? 'Unassigned'}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[#4B5563]">Submitted</dt>
                <dd className="text-[#9CA3AF]" title={formatDate(lead.created_at)}>{timeAgo(lead.created_at)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[#4B5563]">Last updated</dt>
                <dd className="text-[#9CA3AF]" title={formatDate(lead.updated_at)}>{timeAgo(lead.updated_at)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[#4B5563]">First contact</dt>
                <dd className="text-[#9CA3AF]">
                  {firstContact
                    ? timeAgo(firstContact.changed_at)
                    : lead.current_status === 'new'
                      ? 'Not yet contacted'
                      : '—'}
                </dd>
              </div>
            </dl>
          </div>

          {/* Status control */}
          <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Update Status</h4>
            <div className="flex flex-col gap-1.5">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => handleStatusChange(s)}
                  disabled={updatingStatus || s === lead.current_status}
                  className={`flex min-h-[40px] items-center rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
                    s === lead.current_status
                      ? 'bg-white text-black'
                      : 'text-[#9CA3AF] hover:bg-[#1A1A1A] hover:text-white'
                  } disabled:cursor-default`}
                >
                  {STATUS_LABELS[s]}
                  {s === lead.current_status && <span className="ml-auto text-xs text-[#6B7280]">current</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Assignment */}
          <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Assignment</h4>
            <select
              value={assignTeam}
              onChange={(e) => setAssignTeam(e.target.value)}
              className="mb-3 min-h-[40px] w-full rounded-lg border border-[#333] bg-[#0A0A0A] px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
            >
              <option value="">Unassigned</option>
              {teams.filter((t) => !t.isPlaceholder).map((t) => (
                <option key={t.slug} value={t.slug}>{t.name}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleAssign}
              disabled={savingAssignment || assignTeam === (lead.assigned_team ?? '')}
              className="flex min-h-[40px] w-full items-center justify-center rounded-lg border border-[#333] px-4 py-2 text-sm font-medium text-[#9CA3AF] transition-colors hover:border-white hover:text-white disabled:opacity-30"
            >
              {savingAssignment ? 'Saving...' : 'Update Assignment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
