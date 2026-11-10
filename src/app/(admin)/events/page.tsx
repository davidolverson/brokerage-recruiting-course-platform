'use client'

import { useCallback, useEffect, useState } from 'react'
import { CATEGORIES, parseTimeInput, type Recurrence } from '@/lib/training/calendar'
import { EMPTY_FORM, formToRecurrence, rowToForm, type FormState } from '@/lib/training/event-form'
import { ImageField } from '@/components/admin/ImageField'
import { MAX_UPLOAD_MB } from '@/lib/upload-input'
import { buildAnnouncement, type AnnouncementKind } from '@/lib/training/announcement'
import { adminFetch, isSessionExpired } from '@/lib/admin-fetch'


interface EventRow {
  id: number; slug: string; title: string; category: string
  description: string | null; host: string | null; location: string | null; image_url: string | null
  start_time: string | null; end_time: string | null; capacity: number | null
  recurrence: Recurrence; tentative: boolean; active: boolean; sort_order: number; goingCount: number
}
interface Subscriber { id: number; email: string; name: string | null; categories: string[]; created_at: string }

const DOW = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const NTH = ['1st','2nd','3rd','4th','5th']
const CAT_NAME: Record<string, string> = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.name]))

function describePattern(r: Recurrence): string {
  switch (r.type) {
    case 'oneoff': return `One-time · ${r.date}`
    case 'weekly': return `Every ${DOW[r.weekday]}${r.exceptNth?.length ? ` (except ${r.exceptNth.map((n) => NTH[n-1]).join(', ')})` : ''}`
    case 'nthWeekday': return `${NTH[r.n-1]} ${DOW[r.weekday]} monthly`
    case 'weeklyCount': return `${DOW[r.weekday]} × ${r.count} from ${r.start}`
    default: return '—'
  }
}

/**
 * The pattern plus whatever has been bolted onto it. A cancelled date that the
 * row does not mention is invisible until someone opens the editor, and the
 * list is the screen where you check whether you already did the thing.
 */
function describeRecurrence(r: Recurrence): string {
  const parts = [describePattern(r)]
  if (r.extraDates?.length) parts.push(`plus ${r.extraDates.join(', ')}`)
  if (r.skipDates?.length) parts.push(`skipping ${r.skipDates.join(', ')}`)
  return parts.join(' · ')
}

// EMPTY_FORM / formToRecurrence / rowToForm live in lib so the round trip is
// testable without a browser. Keeping a second copy here is the exact drift
// that has bitten this repo repeatedly.

const inputCls = 'w-full rounded-lg border border-[#222] bg-[#111] px-3 py-2 text-sm text-white placeholder-[#4B5563] outline-none focus:border-[#444]'
const labelCls = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]'

/**
 * A list of one-off dates bolted onto a recurrence. Used for both the additions
 * and the cancellations — building the second one by copying the first is how
 * the two drift, and they have to behave identically to be predictable.
 */
function DateChipList({ label, hint, dates, onChange }: {
  label: string; hint: string; dates: string[]; onChange: (next: string[]) => void
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <p className="mb-2 text-xs text-[#6B7280]">{hint}</p>
      <div className="flex flex-wrap items-center gap-2">
        {dates.map((d) => (
          <span key={d} className="inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#111] px-3 py-1 text-sm text-white">
            {d}
            <button
              type="button"
              aria-label={`Remove ${d}`}
              onClick={() => onChange(dates.filter((x) => x !== d))}
              className="text-[#9CA3AF] hover:text-white"
            >×</button>
          </span>
        ))}
        <input
          className={`${inputCls} w-auto`}
          type="date"
          aria-label={`${label} — add a date`}
          value=""
          onChange={(e) => {
            const v = e.target.value
            // Adding the same day twice would render one chip per click and
            // change nothing on the calendar.
            if (v && !dates.includes(v)) onChange([...dates, v].sort())
          }}
        />
      </div>
    </div>
  )
}

export default function EventsAdminPage() {
  const [tab, setTab] = useState<'events' | 'subscribers' | 'send'>('events')
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Training &amp; Events</h1>
        <p className="mt-1 text-sm text-[#6B7280]">Manage the calendar, your subscriber list, and send updates.</p>
      </div>
      <div className="mb-6 inline-flex rounded-lg border border-[#1A1A1A] bg-[#0A0A0A] p-1">
        {([['events','Events'],['subscribers','Subscribers'],['send','Send update']] as [typeof tab, string][]).map(([t, l]) => (
          <button key={t} onClick={() => setTab(t)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${tab === t ? 'bg-white text-black' : 'text-[#6B7280] hover:text-white'}`}>{l}</button>
        ))}
      </div>
      {tab === 'events' && <EventsTab />}
      {tab === 'subscribers' && <SubscribersTab />}
      {tab === 'send' && <SendTab />}
    </div>
  )
}

// ── Events tab ──
function EventsTab() {
  const [events, setEvents] = useState<EventRow[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState<FormState | null>(null)
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await adminFetch('/api/admin/events', { cache: 'no-store' })
      const data = await res.json()
      setEvents(data.events || [])
    } catch (e) {
      // An expired session already sent the browser to /login. Everything else
      // is a real failure and has to say so: an empty list here used to be the
      // only symptom of being signed out.
      if (!isSessionExpired(e)) setErr('Could not load the calendar. Reload the page to try again.')
      setEvents([])
    } finally { setLoading(false) }
  }, [])
  useEffect(() => { load() }, [load])

  const save = async () => {
    if (!form) return
    setErr(null)
    if (!form.title.trim()) { setErr('Title is required'); return }
    // The boxes normalise on blur, so reaching here means it is genuinely not
    // a time. Say so before the round trip rather than after.
    for (const [value, label] of [[form.startTime, 'Start time'], [form.endTime, 'End time']] as const) {
      if (value.trim() && parseTimeInput(value) === null) {
        setErr(`${label} "${value.trim()}" is not a time. Try 10:00, 10am, or 1:30pm.`)
        return
      }
    }
    setSaving(true)
    const payload = {
      title: form.title, category: form.category, description: form.description || null, host: form.host || null,
      location: form.location || null, imageUrl: form.imageUrl || null, startTime: form.startTime || null,
      endTime: form.endTime || null, capacity: form.capacity === '' ? null : Number(form.capacity),
      tentative: form.tentative, active: form.active, recurrence: formToRecurrence(form),
    }
    try {
      const res = form.id
        ? await adminFetch(`/api/admin/events/${form.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        : await adminFetch('/api/admin/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || 'Save failed')
      setForm(null); load()
    } catch (e) { setErr(e instanceof Error ? e.message : 'Save failed') } finally { setSaving(false) }
  }

  // Both of these used to fire and ignore the response entirely, so a refusal
  // of any kind read as success until the reload put the row straight back.
  const deactivate = async (ev: EventRow) => {
    if (!confirm(`Hide "${ev.title}" from the calendar? (RSVPs are preserved.)`)) return
    setErr(null)
    try {
      const res = await adminFetch(`/api/admin/events/${ev.id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error(`Could not hide "${ev.title}".`)
      load()
    } catch (e) {
      if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : `Could not hide "${ev.title}".`)
    }
  }
  const reactivate = async (ev: EventRow) => {
    setErr(null)
    try {
      const res = await adminFetch(`/api/admin/events/${ev.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ active: true }) })
      if (!res.ok) throw new Error(`Could not show "${ev.title}" again.`)
      load()
    } catch (e) {
      if (!isSessionExpired(e)) setErr(e instanceof Error ? e.message : `Could not show "${ev.title}" again.`)
    }
  }

  if (loading) return <div className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-10 text-center text-[#6B7280]">Loading…</div>

  return (
    <div>
      {/* The only other `err` on this screen lives INSIDE the editor, so a
          failure raised while the editor is closed (loading the list, hiding a
          row) had nowhere to render and read as nothing happening at all. */}
      {err && !form && (
        <div className="mb-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">{err}</div>
      )}

      <div className="mb-4 flex justify-end">
        <button onClick={() => setForm({ ...EMPTY_FORM })} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">+ New event</button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#1A1A1A] bg-[#0A0A0A]">
        {events.length === 0 ? <div className="p-10 text-center text-[#6B7280]">No events yet.</div> :
          events.map((e) => (
            <div key={e.id} className="flex flex-wrap items-center gap-3 border-b border-[#1A1A1A] px-4 py-3.5 last:border-b-0">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{e.title}</span>
                  {!e.active && <span className="rounded-full bg-[#222] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#9CA3AF]">Hidden</span>}
                  {e.tentative && <span className="rounded-full bg-[#3a2e12] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#D97706]">TBD</span>}
                </div>
                <div className="mt-0.5 text-xs text-[#6B7280]">{CAT_NAME[e.category]} · {describeRecurrence(e.recurrence)}{e.start_time ? ` · ${e.start_time}` : ''}{e.capacity ? ` · cap ${e.capacity}` : ''} · {e.goingCount} going</div>
              </div>
              <button onClick={() => setForm(rowToForm(e))} className="rounded-md border border-[#222] px-3 py-1.5 text-xs font-semibold text-[#9CA3AF] hover:border-[#444] hover:text-white">Edit</button>
              {e.active
                ? <button onClick={() => deactivate(e)} className="rounded-md border border-[#222] px-3 py-1.5 text-xs font-semibold text-[#9CA3AF] hover:border-[#7f1d1d] hover:text-[#fca5a5]">Hide</button>
                : <button onClick={() => reactivate(e)} className="rounded-md border border-[#222] px-3 py-1.5 text-xs font-semibold text-[#9CA3AF] hover:border-[#166534] hover:text-[#86efac]">Restore</button>}
            </div>
          ))}
      </div>

      {form && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/70 p-4 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) setForm(null) }}>
          <div className="my-auto w-full max-w-2xl rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6">
            <h3 className="mb-4 text-lg font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{form.id ? 'Edit event' : 'New event'}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2"><label className={labelCls}>Title</label><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
              <div><label className={labelCls}>Category</label><select className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>{CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
              <div><label className={labelCls}>Host (optional)</label><input className={inputCls} value={form.host} onChange={(e) => setForm({ ...form, host: e.target.value })} /></div>
              <div className="sm:col-span-2"><label className={labelCls}>Description</label><textarea className={inputCls} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
              <div><label className={labelCls}>Start time</label><input className={inputCls} placeholder="10:00 or 10am" value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })} onBlur={(e) => setForm({ ...form, startTime: parseTimeInput(e.target.value) ?? e.target.value })} /></div>
              <div><label className={labelCls}>End time (optional)</label><input className={inputCls} placeholder="1:30pm" value={form.endTime} onChange={(e) => setForm({ ...form, endTime: e.target.value })} onBlur={(e) => setForm({ ...form, endTime: parseTimeInput(e.target.value) ?? e.target.value })} /></div>
              <div><label className={labelCls}>Capacity (optional)</label><input className={inputCls} type="number" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} /></div>
              <div><label className={labelCls}>Location (optional)</label><input className={inputCls} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></div>
              <div className="sm:col-span-2">
                <ImageField
                  id="event-image"
                  label="Flyer or image (optional)"
                  value={form.imageUrl}
                  onChange={(v) => setForm({ ...form, imageUrl: v })}
                  inputClass={inputCls}
                  labelClass={labelCls}
                  hint={`PNG, JPEG, WebP or GIF, up to ${MAX_UPLOAD_MB} MB. Portrait flyers are fine, they are shown whole, not cropped.`}
                />
              </div>

              {/* recurrence builder */}
              <div className="sm:col-span-2 rounded-lg border border-[#222] p-3">
                <label className={labelCls}>Repeats</label>
                <div className="mb-3 flex flex-wrap gap-2">
                  {([['weekly','Weekly'],['nthWeekday','Monthly (nth weekday)'],['weeklyCount','Weekly for N weeks'],['oneoff','One-time']] as [FormState['repeat'], string][]).map(([r, l]) => (
                    <button key={r} type="button" onClick={() => setForm({ ...form, repeat: r })}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${form.repeat === r ? 'border-white bg-white text-black' : 'border-[#222] text-[#9CA3AF] hover:border-[#444]'}`}>{l}</button>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {form.repeat !== 'oneoff' && (
                    <div><label className={labelCls}>Weekday</label><select className={inputCls} value={form.weekday} onChange={(e) => setForm({ ...form, weekday: Number(e.target.value) })}>{DOW.map((d, i) => <option key={i} value={i}>{d}</option>)}</select></div>
                  )}
                  {form.repeat === 'nthWeekday' && (
                    <div><label className={labelCls}>Which</label><select className={inputCls} value={form.nth} onChange={(e) => setForm({ ...form, nth: Number(e.target.value) })}>{NTH.map((n, i) => <option key={i} value={i+1}>{n}</option>)}</select></div>
                  )}
                  {form.repeat === 'weekly' && (
                    <label className="flex items-center gap-2 self-end pb-2 text-sm text-[#9CA3AF]"><input type="checkbox" checked={form.skipFirst} onChange={(e) => setForm({ ...form, skipFirst: e.target.checked })} /> Skip 1st of month</label>
                  )}
                  {form.repeat === 'weeklyCount' && (<>
                    <div><label className={labelCls}>Start date</label><input className={inputCls} type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} /></div>
                    <div><label className={labelCls}># of weeks</label><input className={inputCls} type="number" value={form.count} onChange={(e) => setForm({ ...form, count: Number(e.target.value) })} /></div>
                  </>)}
                  {form.repeat === 'oneoff' && (
                    <div><label className={labelCls}>Date</label><input className={inputCls} type="date" value={form.oneoffDate} onChange={(e) => setForm({ ...form, oneoffDate: e.target.value })} /></div>
                  )}
                </div>

                {/* The pattern alone could not say "and also on this one day",
                    which is what an extra or make-up session is. Without this
                    the only way to add one was a second event carrying its own
                    title, image and RSVP list. */}
                <div className="mt-4">
                  <DateChipList
                    label="Also on these dates (optional)"
                    hint="One-off additions on top of the pattern above. Use this for an extra or make-up session rather than creating a second event."
                    dates={form.extraDates}
                    onChange={(extraDates) => setForm({ ...form, extraDates })}
                  />
                </div>

                {/* And the other direction: cancelling one occurrence. Hide
                    removes every future date, which is not what "no team
                    meeting that week" means. */}
                <div className="mt-4">
                  <DateChipList
                    label="Cancelled on these dates (optional)"
                    hint="Takes this event off the calendar on those days only, and leaves the rest of the series alone. Use it when a meeting is skipped or replaced by something else."
                    dates={form.skipDates}
                    onChange={(skipDates) => setForm({ ...form, skipDates })}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 sm:col-span-2">
                <label className="flex items-center gap-2 text-sm text-[#9CA3AF]"><input type="checkbox" checked={form.tentative} onChange={(e) => setForm({ ...form, tentative: e.target.checked })} /> Tentative / details TBD</label>
                <label className="flex items-center gap-2 text-sm text-[#9CA3AF]"><input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} /> Visible on calendar</label>
              </div>
            </div>
            {err && <p className="mt-3 text-sm text-[#fca5a5]">{err}</p>}
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setForm(null)} className="rounded-lg border border-[#222] px-4 py-2 text-sm font-semibold text-[#9CA3AF] hover:text-white">Cancel</button>
              <button onClick={save} disabled={saving} className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-60">{saving ? 'Saving…' : 'Save event'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Subscribers tab ──
function SubscribersTab() {
  const [subs, setSubs] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [paste, setPaste] = useState('')
  const [consentBasis, setConsentBasis] = useState('')
  const [adding, setAdding] = useState(false)
  const [addResult, setAddResult] = useState<string>('')
  const [addError, setAddError] = useState('')

  const load = () => adminFetch('/api/admin/training-subscribers', { cache: 'no-store' })
    .then((r) => r.json()).then((d) => setSubs(d.subscribers || [])).catch(() => setSubs([]))

  useEffect(() => { load().finally(() => setLoading(false)) }, [])

  async function addSubscribers() {
    setAdding(true); setAddError(''); setAddResult('')
    try {
      const res = await adminFetch('/api/admin/training-subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ list: paste, consentBasis }),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(d.error || 'Could not add those')
      const bits: string[] = []
      if (d.added) bits.push(`${d.added} added`)
      if (d.reactivated) bits.push(`${d.reactivated} re-subscribed`)
      if (d.alreadyThere?.length) bits.push(`${d.alreadyThere.length} already on the list`)
      if (d.invalid?.length) bits.push(`${d.invalid.length} skipped (not valid): ${d.invalid.slice(0, 3).join(', ')}`)
      setAddResult(bits.join(' · ') || 'Nothing to do.')
      setPaste('')
      setConsentBasis('')
      await load()
    } catch (e) {
      setAddError((e as Error).message)
    } finally {
      setAdding(false)
    }
  }

  const emails = subs.map((s) => s.email).join(', ')
  const csv = () => {
    const rows = [['email','name','categories','joined'], ...subs.map((s) => [s.email, s.name || '', (s.categories || []).join('|'), new Date(s.created_at).toISOString().slice(0,10)])]
    const text = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n')
    const blob = new Blob([text], { type: 'text/csv' })
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'example-investor-team-subscribers.csv'; a.click(); URL.revokeObjectURL(url)
  }

  if (loading) return <div className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-10 text-center text-[#6B7280]">Loading…</div>

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="text-sm text-[#9CA3AF]"><b className="text-white">{subs.length}</b> subscriber{subs.length === 1 ? '' : 's'}</span>
        <div className="ml-auto flex gap-2">
          <button onClick={() => { navigator.clipboard?.writeText(emails); setCopied(true); setTimeout(() => setCopied(false), 1500) }} className="rounded-lg border border-[#222] px-3 py-2 text-xs font-semibold text-[#9CA3AF] hover:text-white">{copied ? 'Copied!' : 'Copy all emails'}</button>
          <button onClick={csv} className="rounded-lg border border-[#222] px-3 py-2 text-xs font-semibold text-[#9CA3AF] hover:text-white">Export CSV</button>
        </div>
      </div>
      {/* Until this existed the only way onto the list was an agent subscribing
          on the public page, which is why it sat empty and "Send update" had
          nobody to send to. */}
      <div className="mb-4 rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-4">
        <label className={labelCls} htmlFor="sub-paste">Add people to the list</label>
        <textarea
          id="sub-paste"
          className={`${inputCls} min-h-[90px]`}
          value={paste}
          onChange={(e) => setPaste(e.target.value)}
          placeholder={'One per line, or comma separated:\njane@example.com\nJane Smith <jane@example.com>'}
        />
        <label className={`${labelCls} mt-3`} htmlFor="sub-consent">
          How did they agree to hear from Example Investor Team?
        </label>
        <input
          id="sub-consent"
          className={inputCls}
          value={consentBasis}
          onChange={(e) => setConsentBasis(e.target.value)}
          placeholder="e.g. Signed up at the August branch meeting"
        />
        <p className="mt-1 text-xs text-[#6B7280]">
          Stored against every address you add, so the answer still exists in six months.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            onClick={addSubscribers}
            disabled={adding || !paste.trim() || consentBasis.trim().length < 4}
            className="min-h-[40px] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#E5E7EB] disabled:opacity-50"
          >
            {adding ? 'Adding…' : 'Add to list'}
          </button>
          <span className="text-xs text-[#6B7280]">
            Only add people who agreed to hear from Example Investor Team. Every email carries an unsubscribe link.
          </span>
        </div>
        {addResult && <p className="mt-2 text-xs text-[#86efac]">{addResult}</p>}
        {addError && <p className="mt-2 text-xs text-[#fca5a5]">{addError}</p>}
      </div>

      <div className="overflow-hidden rounded-xl border border-[#1A1A1A] bg-[#0A0A0A]">
        {subs.length === 0 ? <div className="p-10 text-center text-[#6B7280]">No subscribers yet — paste some addresses above to start the list.</div> :
          subs.map((s) => (
            <div key={s.id} className="flex flex-wrap items-center gap-3 border-b border-[#1A1A1A] px-4 py-3 last:border-b-0">
              <div className="min-w-0 flex-1">
                <span className="font-semibold text-white">{s.name || s.email}</span>
                {s.name && <span className="ml-2 text-xs text-[#6B7280]">{s.email}</span>}
              </div>
              <div className="text-xs text-[#6B7280]">{(s.categories || []).length ? (s.categories || []).map((c) => CAT_NAME[c] || c).join(', ') : 'All events'}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

// ── Send update tab ──
function SendTab() {
  const [events, setEvents] = useState<EventRow[]>([])
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [cats, setCats] = useState<Set<string>>(new Set())
  const [eventSlug, setEventSlug] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => { adminFetch('/api/admin/events', { cache: 'no-store' }).then((r) => r.json()).then((d) => setEvents((d.events || []).filter((e: EventRow) => e.active))).catch(() => {}) }, [])

  const send = async () => {
    setErr(null); setResult(null)
    if (!subject.trim() || !message.trim()) { setErr('Subject and message are required'); return }
    if (eventSlug && !/^\d{4}-\d{2}-\d{2}$/.test(eventDate)) { setErr('Pick a date for the attached event'); return }
    if (!confirm('Send this to matching subscribers now?')) return
    setSending(true)
    try {
      const res = await adminFetch('/api/admin/training-newsletter', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message, categories: [...cats], eventSlug: eventSlug || undefined, eventDate: eventSlug ? eventDate : undefined }),
      })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || 'Send failed')
      setResult(`Sent to ${data.sent} of ${data.recipients} subscriber${data.recipients === 1 ? '' : 's'}${data.failed ? ` (${data.failed} failed)` : ''}.`)
      setSubject(''); setMessage(''); setEventSlug(''); setEventDate('')
    } catch (e) { setErr(e instanceof Error ? e.message : 'Send failed') } finally { setSending(false) }
  }

  return (
    <div className="max-w-2xl">
      <div className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-5">
        <div className="mb-4"><label className={labelCls}>Subject</label><input className={inputCls} value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="This week at Example Investor Team" /></div>
        <div className="mb-4"><label className={labelCls}>Message</label><textarea className={inputCls} rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your update…" /></div>
        <div className="mb-4">
          <label className={labelCls}>Audience (leave empty = everyone)</label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const on = cats.has(c.id)
              return <button key={c.id} type="button" onClick={() => setCats((s) => { const n = new Set(s); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n })}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${on ? 'border-white bg-white text-black' : 'border-[#222] text-[#9CA3AF] hover:border-[#444]'}`}>{c.name}</button>
            })}
          </div>
        </div>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div><label className={labelCls}>Attach event invite (optional)</label><select className={inputCls} value={eventSlug} onChange={(e) => setEventSlug(e.target.value)}><option value="">— none —</option>{events.map((e) => <option key={e.id} value={e.slug}>{e.title}</option>)}</select></div>
          {eventSlug && <div><label className={labelCls}>Event date</label><input className={inputCls} type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} /></div>}
        </div>

        {/* Writing the subject and body from scratch every time is the friction
            that turns "we'll email you when something is coming up" into nobody
            being told. Pick the event and a date, then start from a draft. */}
        {eventSlug && /^\d{4}-\d{2}-\d{2}$/.test(eventDate) && (
          <div className="mb-4 rounded-lg border border-[#222] bg-[#0F0F0F] p-3">
            <p className={labelCls}>Start from a draft</p>
            <div className="flex flex-wrap gap-2">
              {([
                ['announce', 'Announce it'],
                ['week', 'A week out'],
                ['tomorrow', 'Day before'],
              ] as [AnnouncementKind, string][]).map(([kind, txt]) => (
                <button
                  key={kind}
                  type="button"
                  onClick={() => {
                    const ev = events.find((e) => e.slug === eventSlug)
                    if (!ev) return
                    const d = buildAnnouncement(
                      {
                        title: ev.title,
                        description: ev.description,
                        host: ev.host,
                        location: ev.location,
                        startTime: ev.start_time,
                        endTime: ev.end_time,
                      },
                      eventDate,
                      kind,
                    )
                    setSubject(d.subject)
                    setMessage(d.message)
                  }}
                  className="rounded-lg border border-[#333] px-3 py-2 text-xs font-semibold text-white hover:bg-[#1A1A1A]"
                >
                  {txt}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-[#6B7280]">
              Fills the subject and message above from the event. Edit it before sending — nothing goes out until you press Send.
            </p>
          </div>
        )}
        {err && <p className="mb-3 text-sm text-[#fca5a5]">{err}</p>}
        {result && <p className="mb-3 rounded-lg bg-[#0c2a16] px-3 py-2 text-sm text-[#86efac]">{result}</p>}
        <button onClick={send} disabled={sending} className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-60">{sending ? 'Sending…' : 'Send update'}</button>
      </div>
    </div>
  )
}
