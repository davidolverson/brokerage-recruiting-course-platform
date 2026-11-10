'use client'

import { useCallback, useEffect, useState } from 'react'
import { adminFetch, isSessionExpired } from '@/lib/admin-fetch'
import { MILESTONES, type MilestoneState } from '@/lib/onboarding/milestones'
import { inviteLabel, canSendInvite, type InviteState } from '@/lib/onboarding/invite-link'

interface Person {
  id: number
  name: string
  email: string
  teamSlug: string | null
  startedAt: string
  notes: string | null
  archived: boolean
  milestones: MilestoneState
  hasHandbookAccess: boolean
  inviteState: InviteState
  progress: { done: number; total: number; percent: number; complete: boolean; nextKey: string | null; nextLabel: string | null }
  stalled: boolean
}

const input = 'w-full rounded-lg border border-[#222] bg-[#111] px-3 py-2 text-sm text-white placeholder-[#4B5563] outline-none focus:border-[#444]'
const label = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]'

export default function OnboardingPage() {
  const [people, setPeople] = useState<Person[]>([])
  const [summary, setSummary] = useState({ active: 0, complete: 0, stalled: 0 })
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showArchived, setShowArchived] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', startedAt: '' })
  const [saving, setSaving] = useState(false)
  const [open, setOpen] = useState<number | null>(null)
  const [edit, setEdit] = useState<{ id: number; name: string; email: string; startedAt: string } | null>(null)
  const [notesDraft, setNotesDraft] = useState<{ id: number; text: string } | null>(null)
  const [inviting, setInviting] = useState<number | null>(null)

  /**
   * `silent` matters more than it looks. Every milestone tick refreshes, and a
   * refresh that flips the full-page loading state replaces the whole list
   * with "Loading…" — which detaches the checkbox you were about to tick next.
   * Ticking two boxes in a row was impossible: the second click landed on a
   * node that no longer existed. Only the FIRST load owns the page-level
   * spinner.
   */
  const load = useCallback(async (silent = false) => {
    if (!silent) setLoading(true)
    try {
      const res = await adminFetch('/api/admin/onboarding', { cache: 'no-store' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Could not load the tracker.')
      setPeople(data.people || [])
      setSummary(data.summary || { active: 0, complete: 0, stalled: 0 })
    } catch (e) {
      if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : 'Could not load the tracker.')
      setPeople([])
    } finally { if (!silent) setLoading(false) }
  }, [])
  useEffect(() => { load() }, [load])

  const add = async () => {
    setErr(null)
    if (!form.name.trim()) { setErr('Name is required'); return }
    setSaving(true)
    try {
      const res = await adminFetch('/api/admin/onboarding', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Could not add them.')
      setForm({ name: '', email: '', startedAt: '' }); setShowAdd(false); load(true)
    } catch (e) {
      if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : 'Could not add them.')
    } finally { setSaving(false) }
  }

  const toggle = async (p: Person, key: string, done: boolean) => {
    setErr(null)
    const next: MilestoneState = { ...p.milestones }
    if (done) next[key] = new Date().toISOString()
    else delete next[key]
    // Optimistic, but the reload below is what the numbers come from.
    setPeople((prev) => prev.map((x) => (x.id === p.id ? { ...x, milestones: next } : x)))
    try {
      const res = await adminFetch(`/api/admin/onboarding/${p.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ milestones: next }),
      })
      if (!res.ok) throw new Error('That did not save.')
      load(true)
    } catch (e) {
      if (!isSessionExpired(e)) { setErr(e instanceof Error ? e.message : 'That did not save.'); load(true) }
    }
  }

  const patch = async (id: number, body: Record<string, unknown>, onOk?: () => void) => {
    setErr(null)
    try {
      const res = await adminFetch(`/api/admin/onboarding/${id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'That did not save.')
      onOk?.(); load(true)
    } catch (e) {
      if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : 'That did not save.')
    }
  }

  const invite = async (p: Person) => {
    setErr(null)
    setInviting(p.id)
    try {
      const res = await adminFetch(`/api/admin/onboarding/${p.id}/invite`, { method: 'POST' })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Could not send that invite.')
      // Honest about delivery: the invite exists either way, but if the mail
      // did not go she has to hand them the link herself.
      setErr(data.emailSent ? null : `Invite created for ${p.email}, but the email did not send. Check with them directly.`)
      load(true)
    } catch (e) {
      if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : 'Could not send that invite.')
    } finally { setInviting(null) }
  }

  const remove = async (p: Person) => {
    if (!confirm(`Remove ${p.name} from the tracker? This cannot be undone. Archive instead if you just want them out of the way.`)) return
    setErr(null)
    try {
      const res = await adminFetch(`/api/admin/onboarding/${p.id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Could not remove them.')
      setOpen(null); load(true)
    } catch (e) { if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : 'Could not remove them.') }
  }

  const setArchived = async (p: Person, archived: boolean) => {
    setErr(null)
    try {
      const res = await adminFetch(`/api/admin/onboarding/${p.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archived }),
      })
      if (!res.ok) throw new Error('That did not save.')
      load(true)
    } catch (e) { if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : 'That did not save.') }
  }

  const visible = people.filter((p) => showArchived || !p.archived)

  if (loading) return <div className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-10 text-center text-[#6B7280]">Loading…</div>

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Agent Onboarding</h1>
        <p className="mt-1 text-sm text-[#6B7280]">
          Where each new agent is up to. Eight milestones, not the full checklist — the handbook does the explaining.
        </p>
      </div>

      {err && <div className="mb-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">{err}</div>}

      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        {[['In progress', summary.active], ['Finished', summary.complete], ['Not moved in 2 weeks', summary.stalled]].map(([l, n]) => (
          <div key={String(l)} className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">{l}</p>
            <p className="mt-1 text-2xl font-bold text-white">{n as number}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-sm text-[#9CA3AF]">
          <input type="checkbox" checked={showArchived} onChange={(e) => setShowArchived(e.target.checked)} /> Show archived
        </label>
        <button onClick={() => setShowAdd((v) => !v)} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
          {showAdd ? 'Cancel' : '+ Add an agent'}
        </button>
      </div>

      {showAdd && (
        <div className="mb-5 rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <div><label className={label}>Name</label><input className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" /></div>
            <div>
              <label className={label}>Email</label>
              <input className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" />
              <p className="mt-1 text-xs text-[#4B5563]">Used to match their handbook account, so use the one you invite.</p>
            </div>
            <div><label className={label}>Start date</label><input className={input} type="date" value={form.startedAt} onChange={(e) => setForm({ ...form, startedAt: e.target.value })} /></div>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={add} disabled={saving} className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-60">
              {saving ? 'Adding…' : 'Add'}
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-[#1A1A1A] bg-[#0A0A0A]">
        {visible.length === 0 ? (
          <div className="p-10 text-center text-[#6B7280]">
            <p className="font-semibold text-white">Nobody being tracked yet</p>
            <p className="mt-2 text-sm">Add the next agent who joins and their progress shows up here.</p>
          </div>
        ) : visible.map((p) => (
          <div key={p.id} className="border-b border-[#1A1A1A] last:border-b-0">
            <div className="flex flex-wrap items-center gap-3 px-4 py-3.5">
              <button
                onClick={() => setOpen(open === p.id ? null : p.id)}
                aria-expanded={open === p.id}
                className="min-w-0 flex-1 text-left"
              >
                <div className="flex flex-wrap items-center gap-2">
                  {/* Nothing used to say the row opened. */}
                  <span aria-hidden className={`inline-block text-[#6B7280] transition-transform ${open === p.id ? 'rotate-90' : ''}`}>&rsaquo;</span>
                  <span className="font-semibold text-white">{p.name}</span>
                  {p.progress.complete && <span className="rounded-full bg-emerald-950/50 px-2 py-0.5 text-[10px] font-semibold uppercase text-emerald-400">Done</span>}
                  {p.stalled && <span className="rounded-full bg-[#3a2e12] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#D97706]">Not moved in 2 weeks</span>}
                  {p.archived && <span className="rounded-full bg-[#222] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#9CA3AF]">Archived</span>}
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${p.inviteState === 'active' ? 'bg-[#0f2a24] text-emerald-400' : p.inviteState === 'pending' ? 'bg-[#1f2937] text-[#9CA3AF]' : 'bg-[#3a2e12] text-[#D97706]'}`}>
                    {inviteLabel(p.inviteState)}
                  </span>
                </div>
                {/* "next" used to be last in one truncating line, so on a phone
                    the most useful field was the first thing to disappear. */}
                <p className="mt-0.5 truncate text-xs text-[#6B7280]">{p.email} · started {p.startedAt}</p>
                {!p.progress.complete && p.progress.nextLabel && (
                  <p className="mt-0.5 text-xs text-[#9CA3AF]">Next: {p.progress.nextLabel}</p>
                )}
              </button>
              <div className="flex w-40 shrink-0 items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1A1A1A]">
                  <div className="h-full rounded-full bg-white" style={{ width: `${p.progress.percent}%` }} />
                </div>
                <span className="w-12 shrink-0 text-right text-xs text-[#9CA3AF]">{p.progress.done}/{p.progress.total}</span>
              </div>
            </div>

            {open === p.id && (
              <div className="border-t border-[#1A1A1A] bg-[#080808] px-4 py-4">
                {/* The automation fails SILENTLY on a typo'd email: no account
                    matches, so the milestone simply never ticks and nothing
                    says why. Make the silence visible. */}
                {p.inviteState !== 'active' && (
                  <div className="mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-amber-900/50 bg-amber-950/20 px-3 py-2 text-xs text-amber-300">
                    <span className="min-w-0 flex-1">
                      {p.inviteState === 'pending'
                        ? <>Invite sent to <span className="font-semibold">{p.email}</span>, not accepted yet. Handbook access ticks itself the moment they do.</>
                        : <>No handbook account matches <span className="font-semibold">{p.email}</span> yet. Check the address is right, then invite them.</>}
                    </span>
                    {canSendInvite(p.inviteState) && (
                      <button
                        onClick={() => invite(p)}
                        disabled={inviting === p.id}
                        className="shrink-0 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black hover:opacity-90 disabled:opacity-60"
                      >
                        {inviting === p.id ? 'Sending…' : 'Invite to handbook'}
                      </button>
                    )}
                  </div>
                )}

                {edit?.id === p.id ? (
                  <div className="mb-4 grid gap-3 rounded-lg border border-[#222] bg-[#0A0A0A] p-3 sm:grid-cols-3">
                    <div><label className={label}>Name</label><input className={input} value={edit.name} onChange={(e) => setEdit({ ...edit, name: e.target.value })} /></div>
                    <div><label className={label}>Email</label><input className={input} value={edit.email} onChange={(e) => setEdit({ ...edit, email: e.target.value })} /></div>
                    <div><label className={label}>Start date</label><input className={input} type="date" value={edit.startedAt} onChange={(e) => setEdit({ ...edit, startedAt: e.target.value })} /></div>
                    <div className="flex items-end gap-2 sm:col-span-3">
                      <button onClick={() => patch(p.id, { name: edit.name, email: edit.email, startedAt: edit.startedAt }, () => setEdit(null))} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">Save details</button>
                      <button onClick={() => setEdit(null)} className="rounded-lg border border-[#222] px-3 py-2 text-sm font-semibold text-[#9CA3AF] hover:text-white">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setEdit({ id: p.id, name: p.name, email: p.email, startedAt: String(p.startedAt).slice(0, 10) })} className="mb-4 text-xs font-semibold text-[#6B7280] underline underline-offset-2 hover:text-white">
                    Edit name, email or start date
                  </button>
                )}

                <ul className="flex flex-col gap-2">
                  {MILESTONES.map((m) => {
                    const auto = m.source === 'auto'
                    // The database's answer, asked first and never overwritten.
                    const derived = auto && p.hasHandbookAccess
                    // Ticked by hand while the automation is still waiting on
                    // the agent. Kept visually distinct from the automation
                    // firing, so "they have an account" and "The office manager vouched for
                    // it" never read as the same fact.
                    const overridden = auto && !derived && !!p.milestones[m.key]
                    const done = auto ? derived || overridden : !!p.milestones[m.key]
                    return (
                      <li key={m.key} className="flex flex-wrap items-start gap-3 rounded-lg px-2 py-2 hover:bg-[#0F0F0F]">
                        <input
                          type="checkbox"
                          className="mt-1"
                          checked={done}
                          // Only locked when the database itself says done.
                          // Locking it while the automation is merely WAITING
                          // is what turned this step into a dead end.
                          disabled={derived}
                          aria-label={m.label}
                          onChange={(e) => toggle(p, m.key, e.target.checked)}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`text-sm font-semibold ${done ? 'text-white' : 'text-[#9CA3AF]'}`}>{m.label}</span>
                            {auto && !overridden && (
                              <span className="rounded-full bg-[#0f2a24] px-2 py-0.5 text-[10px] font-semibold uppercase text-emerald-400">
                                Automatic
                              </span>
                            )}
                            {overridden && (
                              <span className="rounded-full bg-[#2a220f] px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-400">
                                Marked by hand
                              </span>
                            )}
                            {m.handbookSlug && (
                              <a href={`/handbook/${m.handbookSlug}`} target="_blank" rel="noreferrer" className="text-xs text-[#6B7280] underline underline-offset-2 hover:text-white">
                                handbook page
                              </a>
                            )}
                          </div>
                          <p className="mt-0.5 text-xs text-[#4B5563]">
                            {m.definition}
                            {auto && ' Ticks itself once their agent account is active.'}
                            {/* The invitation to tick it is only useful while it
                                is UNticked. Shown alongside "Ticked by you" it
                                read as two instructions arguing with each other. */}
                            {auto && !derived && !overridden && ' You can tick it yourself if you are handling access another way, or just to move past it.'}
                            {overridden && ' Ticked by you; their account is still not active.'}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                {/* Said out loud because it was not obvious from the screen.
                    Nothing here has ever been sequential, but a step that
                    refused to tick read as a gate on everything under it. */}
                <p className="mt-2 px-2 text-xs text-[#4B5563]">
                  Tick these in any order. Nothing is blocked by the step above it.
                </p>
                <div className="mt-4">
                  <label className={label}>Notes</label>
                  <textarea
                    className={input}
                    rows={2}
                    placeholder="Anything worth remembering about this person's onboarding."
                    value={notesDraft?.id === p.id ? notesDraft.text : (p.notes ?? '')}
                    onChange={(e) => setNotesDraft({ id: p.id, text: e.target.value })}
                  />
                  {notesDraft?.id === p.id && notesDraft.text !== (p.notes ?? '') && (
                    <button onClick={() => patch(p.id, { notes: notesDraft.text }, () => setNotesDraft(null))} className="mt-2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black hover:opacity-90">
                      Save note
                    </button>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap justify-end gap-2">
                  <button onClick={() => remove(p)} className="rounded-lg border border-red-900/50 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-950/30">
                    Remove
                  </button>
                  <button onClick={() => setArchived(p, !p.archived)} className="rounded-lg border border-[#222] px-3 py-1.5 text-xs font-semibold text-[#9CA3AF] hover:text-white">
                    {p.archived ? 'Un-archive' : 'Archive'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
