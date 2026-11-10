'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  CATEGORIES, type CategoryId, type TrainingEvent,
  dateKey, sameDay, occurrenceKey, eventsOnDate, timeLabel,
} from '@/lib/training/calendar'
import { linkify } from '@/lib/training/linkify'

// ── Types ────────────────────────────────────────────────────────────────────
type Status = 'going' | 'maybe' | 'not_going'
type Roster = { going: string[]; maybe: string[] }
type Identity = { name: string; email: string }
type ViewMode = 'month' | 'week' | 'agenda'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const DOW_FULL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// ── Category icons (monochrome SVG) ──────────────────────────────────────────
function CatIcon({ cat, className = 'h-3.5 w-3.5' }: { cat: CategoryId; className?: string }) {
  const p: Record<CategoryId, React.ReactNode> = {
    branch: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5" />,
    example: <><circle cx="9" cy="8" r="3" /><path d="M15 11a3 3 0 1 0-2-5.2M3 20a6 6 0 0 1 12 0M14 14a6 6 0 0 1 7 6" /></>,
    newagent: <path d="M5 19l3-3m-3 3l1-4 9-9 3 3-9 9-4 1zM13 5l3 3" />,
    prelicense: <><path d="M22 9L12 5 2 9l10 4 10-4z" /><path d="M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5" /></>,
    community: <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3 1 4 2.5 1-1.5 2-2.5 4-2.5 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />,
    broker: <path d="M12 3v18M7 21h10M5 7l-2 5h6L7 7H5l-2 0M17 7l-2 5h6l-2-5M3 7h18" />,
    popup: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {p[cat]}
    </svg>
  )
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '?'
}

// deterministic grey for an avatar so the same name looks consistent
function avatarShade(name: string): string {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  const shades = ['#111827', '#1F2937', '#374151', '#4B5563', '#6B7280']
  return shades[h % shades.length]
}

function Avatar({ name, you, size = 24 }: { name: string; you?: boolean; size?: number }) {
  return (
    <span
      title={name}
      className="inline-grid place-items-center rounded-full border-2 border-white font-semibold text-white shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.38, background: you ? '#000' : avatarShade(name), boxShadow: you ? '0 0 0 2px #000' : '0 1px 2px rgba(0,0,0,.15)' }}
    >
      {you ? 'You' : initials(name)}
    </span>
  )
}

function Stack({ names, max = 4, size = 24 }: { names: string[]; max?: number; size?: number }) {
  if (!names.length) return null
  const shown = names.slice(0, max)
  const extra = names.length - shown.length
  return (
    <span className="flex items-center">
      {shown.map((n, i) => (
        <span key={i} style={{ marginLeft: i === 0 ? 0 : -8 }}><Avatar name={n} size={size} /></span>
      ))}
      {extra > 0 && (
        <span style={{ marginLeft: -8, width: size, height: size, fontSize: size * 0.34 }}
          className="inline-grid place-items-center rounded-full border-2 border-white bg-[#F3F4F6] font-semibold text-[#4B5563] shrink-0">
          +{extra}
        </span>
      )}
    </span>
  )
}

// ── .ics / add-to-calendar helpers ───────────────────────────────────────────
function pad(n: number) { return (n < 10 ? '0' : '') + n }
function partsFor(ev: TrainingEvent, d: Date) {
  const sH = ev.startTime ? +ev.startTime.split(':')[0] : 9
  const sM = ev.startTime ? +ev.startTime.split(':')[1] : 0
  const eH = ev.endTime ? +ev.endTime.split(':')[0] : sH + 1
  const eM = ev.endTime ? +ev.endTime.split(':')[1] : sM
  return {
    s: new Date(d.getFullYear(), d.getMonth(), d.getDate(), sH, sM),
    e: new Date(d.getFullYear(), d.getMonth(), d.getDate(), eH, eM),
    allDay: !ev.startTime,
  }
}
function zulu(d: Date) { return `${d.getUTCFullYear()}${pad(d.getUTCMonth()+1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z` }
function dateOnly(d: Date) { return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}` }
function icsEsc(s: string) { return s.replace(/[\\,;]/g, (m) => '\\' + m).replace(/\n/g, '\\n') }

function addToCalendar(ev: TrainingEvent, d: Date, kind: 'google' | 'outlook' | 'ics') {
  const p = partsFor(ev, d)
  const details = (ev.description || '') + (ev.host ? `\n\nHosted by ${ev.host}` : '')
  if (kind === 'google') {
    const dates = p.allDay
      ? `${dateOnly(p.s)}/${dateOnly(new Date(p.s.getTime() + 86400000))}`
      : `${zulu(p.s)}/${zulu(p.e)}`
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${dates}&details=${encodeURIComponent(details)}${ev.location ? `&location=${encodeURIComponent(ev.location)}` : ''}`, '_blank')
    return
  }
  if (kind === 'outlook') {
    window.open(`https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(ev.title)}&body=${encodeURIComponent(details)}&startdt=${p.s.toISOString()}&enddt=${p.e.toISOString()}`, '_blank')
    return
  }
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Example Investor Team//Training Calendar//EN','CALSCALE:GREGORIAN','BEGIN:VEVENT',`UID:${occurrenceKey(ev.slug, d)}@example`,`DTSTAMP:${zulu(new Date())}`]
  if (p.allDay) {
    lines.push(`DTSTART;VALUE=DATE:${dateOnly(p.s)}`, `DTEND;VALUE=DATE:${dateOnly(new Date(p.s.getTime() + 86400000))}`)
  } else {
    lines.push(`DTSTART:${zulu(p.s)}`, `DTEND:${zulu(p.e)}`)
  }
  lines.push(`SUMMARY:${icsEsc(ev.title)}`, `DESCRIPTION:${icsEsc(details)}`)
  if (ev.location) lines.push(`LOCATION:${icsEsc(ev.location)}`)
  lines.push('END:VEVENT', 'END:VCALENDAR')
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = `${ev.slug}-${dateKey(d)}.ics`
  document.body.appendChild(a); a.click(); a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function swap(fn: () => void) {
  const rm = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const doc = document as Document & { startViewTransition?: (cb: () => void) => void }
  if (rm || !doc.startViewTransition) { fn(); return }
  doc.startViewTransition(fn)
}

// ── Main component ───────────────────────────────────────────────────────────
export function TrainingCalendar() {
  const [events, setEvents] = useState<TrainingEvent[]>([])
  const [occ, setOcc] = useState<Record<string, Roster>>({})
  const [mine, setMine] = useState<Record<string, Status>>({})
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const [view, setView] = useState<ViewMode>('month')
  const [cursor, setCursor] = useState(() => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()) })
  const today = useMemo(() => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()) }, [])
  const [activeCats, setActiveCats] = useState<Set<CategoryId>>(() => new Set(CATEGORIES.map((c) => c.id)))

  const [identity, setIdentity] = useState<Identity | null>(null)
  const [modal, setModal] = useState<{ ev: TrainingEvent; date: Date } | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // load stored identity
  useEffect(() => {
    try {
      const raw = localStorage.getItem('od_identity')
      if (raw) setIdentity(JSON.parse(raw))
    } catch {}
  }, [])

  // On phones the 7-column month grid is too cramped — default to the agenda
  // (list) view, which reads cleanly on narrow screens. The toggle still lets
  // mobile users switch to month/week if they want.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) setView('agenda')
  }, [])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  // fetch events + rsvps for a wide window once (and when identity email changes)
  const reload = useCallback(async () => {
    setLoading(true); setLoadError(false)
    const from = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    const to = new Date(today.getFullYear(), today.getMonth() + 7, 0)
    const qs = new URLSearchParams({ from: dateKey(from), to: dateKey(to) })
    if (identity?.email) qs.set('email', identity.email)
    try {
      const res = await fetch(`/api/training?${qs.toString()}`, { cache: 'no-store' })
      if (!res.ok) throw new Error('load failed')
      const data = await res.json()
      setEvents(data.events || [])
      setOcc(data.occurrences || {})
      setMine(data.mine || {})
    } catch {
      setLoadError(true)
    } finally {
      setLoading(false)
    }
  }, [identity?.email, today])

  useEffect(() => { reload() }, [reload])

  // roster compute for an occurrence
  const rosterFor = useCallback((ev: TrainingEvent, date: Date) => {
    const k = occurrenceKey(ev.slug, date)
    const o = occ[k] || { going: [], maybe: [] }
    const cap = ev.capacity ?? Infinity
    const confirmed = o.going.slice(0, cap === Infinity ? undefined : cap)
    const waitlist = cap === Infinity ? [] : o.going.slice(cap)
    const myStatus = mine[k] || null
    const myIdx = identity ? o.going.indexOf(identity.name) : -1
    const youWaitlisted = myStatus === 'going' && cap !== Infinity && myIdx >= cap
    return { key: k, confirmed, waitlist, maybe: o.maybe, total: o.going.length, cap: ev.capacity, full: o.going.length >= cap, myStatus, youWaitlisted }
  }, [occ, mine, identity])

  const visibleEvents = useMemo(() => events.filter((e) => activeCats.has(e.category)), [events, activeCats])
  const eventsOn = useCallback((d: Date) => eventsOnDate(visibleEvents, d), [visibleEvents])

  // ── RSVP action ──
  const doRsvp = useCallback(async (ev: TrainingEvent, date: Date, status: Status, who?: Identity) => {
    const id = who || identity
    if (!id || !id.email || !id.name) return false
    const k = occurrenceKey(ev.slug, date)
    setMine((m) => ({ ...m, [k]: status })) // optimistic
    try {
      const res = await fetch('/api/training/rsvp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventSlug: ev.slug, date: dateKey(date), name: id.name, email: id.email, status }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.error || 'failed')
      setOcc((o) => ({ ...o, [k]: { going: data.roster.going, maybe: data.roster.maybe } }))
      showToast(
        status === 'going' ? (data.youWaitlisted ? "Added to the waitlist" : "You're going!") :
        status === 'maybe' ? 'Marked as maybe' : "Marked as can't go"
      )
      return true
    } catch {
      showToast('Could not save RSVP — try again')
      reload()
      return false
    }
  }, [identity, showToast, reload])

  const saveIdentity = useCallback((id: Identity) => {
    setIdentity(id)
    try { localStorage.setItem('od_identity', JSON.stringify(id)) } catch {}
  }, [])

  // ── render helpers ──
  const periodLabel = useMemo(() => {
    if (view === 'agenda') return 'Upcoming'
    if (view === 'week') {
      const s = new Date(cursor); s.setDate(s.getDate() - s.getDay())
      const e = new Date(s); e.setDate(e.getDate() + 6)
      return `${MONTHS[s.getMonth()].slice(0,3)} ${s.getDate()} – ${MONTHS[e.getMonth()].slice(0,3)} ${e.getDate()}, ${e.getFullYear()}`
    }
    return `${MONTHS[cursor.getMonth()]} ${cursor.getFullYear()}`
  }, [view, cursor])

  const step = (dir: number) => {
    swap(() => setCursor((c) => {
      const n = new Date(c)
      if (view === 'week') n.setDate(n.getDate() + 7 * dir)
      else n.setMonth(n.getMonth() + dir)
      return n
    }))
  }

  return (
    <section className="bg-white py-16 sm:py-20" id="calendar">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* heading */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">Acme Realty · Example Investor Team</p>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Training &amp; Events Calendar</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#4B5563]">
            Everything happening across the branch and the Example Investor Team team. Filter to what you care about,
            RSVP to see who else is going, and add events straight to your calendar.
          </p>
        </div>

        {/* toolbar */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {view !== 'agenda' && (
            <div className="flex items-center gap-2">
              <button onClick={() => step(-1)} aria-label="Previous"
                className="grid h-10 w-10 place-items-center rounded-lg border border-[#E5E7EB] bg-white text-lg text-black transition hover:-translate-y-0.5 hover:border-black">‹</button>
              <div className="min-w-[180px] text-center text-lg font-bold tracking-tight text-black sm:min-w-[210px] sm:text-xl">{periodLabel}</div>
              <button onClick={() => step(1)} aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-lg border border-[#E5E7EB] bg-white text-lg text-black transition hover:-translate-y-0.5 hover:border-black">›</button>
            </div>
          )}
          {view === 'agenda' && <div className="text-lg font-bold tracking-tight text-black sm:text-xl">Upcoming events</div>}
          {view !== 'agenda' && (
            <button onClick={() => { swap(() => setCursor(today)) }}
              className="h-10 rounded-lg bg-black px-4 text-xs font-semibold uppercase tracking-wide text-white transition hover:opacity-90">Today</button>
          )}
          <div className="ml-auto inline-flex overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
            {(['month','week','agenda'] as ViewMode[]).map((v) => (
              <button key={v} onClick={() => swap(() => setView(v))}
                className={`h-10 px-4 text-xs font-semibold uppercase tracking-wide transition ${view === v ? 'bg-black text-white' : 'text-[#6B7280] hover:bg-[#F9FAFB]'}`}>{v}</button>
            ))}
          </div>
        </div>

        {/* filters */}
        <div className="mb-5 rounded-xl border border-[#E5E7EB] bg-white p-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Show</span>
            {CATEGORIES.map((c) => {
              const on = activeCats.has(c.id)
              return (
                <button key={c.id} aria-pressed={on}
                  onClick={() => setActiveCats((s) => { const n = new Set(s); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n })}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-semibold transition ${on ? 'border-black bg-black text-white' : 'border-[#E5E7EB] bg-white text-[#6B7280] hover:border-[#9CA3AF]'}`}>
                  <CatIcon cat={c.id} /> {c.name}
                </button>
              )
            })}
            <div className="ml-auto flex gap-2">
              <button onClick={() => setActiveCats(new Set(CATEGORIES.map((c) => c.id)))}
                className="rounded-md border border-[#E5E7EB] px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#6B7280] hover:border-black">All</button>
              <button onClick={() => setActiveCats(new Set())}
                className="rounded-md border border-[#E5E7EB] px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#6B7280] hover:border-black">None</button>
            </div>
          </div>
        </div>

        {/* body */}
        {loading ? (
          <div className="grid h-72 place-items-center rounded-xl border border-[#E5E7EB] bg-white text-[#9CA3AF]">Loading calendar…</div>
        ) : loadError ? (
          <div className="grid h-72 place-items-center rounded-xl border border-[#E5E7EB] bg-white text-center text-[#6B7280]">
            <div>
              <p className="mb-3">We couldn&apos;t load the calendar.</p>
              <button onClick={reload} className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">Try again</button>
            </div>
          </div>
        ) : (
          <div style={{ viewTransitionName: 'calview' } as React.CSSProperties}>
            {view === 'month' && <MonthGrid cursor={cursor} today={today} eventsOn={eventsOn} rosterFor={rosterFor} onOpen={(ev, d) => setModal({ ev, date: d })} />}
            {view === 'week' && <WeekView cursor={cursor} today={today} eventsOn={eventsOn} rosterFor={rosterFor} onOpen={(ev, d) => setModal({ ev, date: d })} />}
            {view === 'agenda' && <AgendaView today={today} eventsOn={eventsOn} rosterFor={rosterFor} onOpen={(ev, d) => setModal({ ev, date: d })} />}
          </div>
        )}

        {/* ongoing / TBD */}
        <OngoingPanel />

        {/* subscribe */}
        <SubscribePanel showToast={showToast} defaultIdentity={identity} />
      </div>

      {modal && (
        <EventModal
          ev={modal.ev} date={modal.date} roster={rosterFor(modal.ev, modal.date)}
          identity={identity} onClose={() => setModal(null)}
          onRsvp={doRsvp} onSaveIdentity={saveIdentity}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-2xl">{toast}</div>
      )}
    </section>
  )
}

// ── Event pill (month/week) ──
type TrainingCalendarRoster = (ev: TrainingEvent, d: Date) => {
  key: string; confirmed: string[]; waitlist: string[]; maybe: string[]; total: number
  cap: number | null; full: boolean; myStatus: Status | null; youWaitlisted: boolean
}

function EventPill({ ev, date, roster, onOpen }: { ev: TrainingEvent; date: Date; roster: ReturnType<TrainingCalendarRoster>; onOpen: () => void }) {
  return (
    <button onClick={(e) => { e.stopPropagation(); onOpen() }}
      className="group w-full rounded-md border-l-[3px] border-black bg-[#F9FAFB] px-1.5 py-1 text-left transition hover:-translate-y-px hover:bg-[#F3F4F6] hover:shadow-sm">
      <div className="flex items-start gap-1">
        <span className="mt-0.5 text-black"><CatIcon cat={ev.category} className="h-3 w-3" /></span>
        <span className="line-clamp-2 text-[11.5px] font-semibold leading-tight text-[#111827]">{ev.title}</span>
      </div>
      {roster.total > 0 && (
        <div className="mt-1 flex items-center gap-1.5 pl-4">
          <Stack names={roster.confirmed} max={3} size={16} />
          <span className={`text-[9.5px] font-semibold uppercase tracking-wide ${roster.full ? 'text-[#DC2626]' : 'text-[#6B7280]'}`}>{roster.full ? 'Full' : `${roster.total} going`}</span>
        </div>
      )}
    </button>
  )
}

// ── Month grid ──
function MonthGrid({ cursor, today, eventsOn, rosterFor, onOpen }: {
  cursor: Date; today: Date; eventsOn: (d: Date) => TrainingEvent[]; rosterFor: TrainingCalendarRoster; onOpen: (ev: TrainingEvent, d: Date) => void
}) {
  const y = cursor.getFullYear(), m = cursor.getMonth()
  const first = new Date(y, m, 1)
  const startDow = first.getDay()
  const dim = new Date(y, m + 1, 0).getDate()
  const pdim = new Date(y, m, 0).getDate()
  const total = Math.ceil((startDow + dim) / 7) * 7
  const cells: { date: Date; out: boolean }[] = []
  for (let i = 0; i < total; i++) {
    let dnum: number, cy = y, cm = m, out = false
    if (i < startDow) { dnum = pdim - startDow + 1 + i; cm = m - 1; out = true; if (cm < 0) { cm = 11; cy-- } }
    else if (i >= startDow + dim) { dnum = i - (startDow + dim) + 1; cm = m + 1; out = true; if (cm > 11) { cm = 0; cy++ } }
    else dnum = i - startDow + 1
    cells.push({ date: new Date(cy, cm, dnum), out })
  }
  return (
    <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
      <div className="grid grid-cols-7 border-b border-[#E5E7EB] bg-[#F9FAFB]">
        {DOW.map((d) => <div key={d} className="py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">{d}</div>)}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((c, i) => {
          const isToday = sameDay(c.date, today)
          const evs = eventsOn(c.date)
          return (
            <div key={i} className={`min-h-[112px] border-b border-r border-[#E5E7EB] p-1.5 [&:nth-child(7n)]:border-r-0 ${c.out ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
              <div className={`grid h-6 w-6 place-items-center rounded-full text-[12px] font-semibold ${isToday ? 'bg-black text-white' : c.out ? 'text-[#D1D5DB]' : 'text-[#6B7280]'}`}>{c.date.getDate()}</div>
              <div className="mt-1 flex flex-col gap-1">
                {evs.map((ev) => <EventPill key={ev.slug} ev={ev} date={c.date} roster={rosterFor(ev, c.date)} onOpen={() => onOpen(ev, c.date)} />)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Week view ──
function WeekView({ cursor, today, eventsOn, rosterFor, onOpen }: {
  cursor: Date; today: Date; eventsOn: (d: Date) => TrainingEvent[]; rosterFor: TrainingCalendarRoster; onOpen: (ev: TrainingEvent, d: Date) => void
}) {
  const s = new Date(cursor); s.setDate(s.getDate() - s.getDay())
  const days = Array.from({ length: 7 }, (_, i) => new Date(s.getFullYear(), s.getMonth(), s.getDate() + i))
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-7">
      {days.map((d, i) => {
        const isToday = sameDay(d, today)
        const evs = eventsOn(d)
        return (
          <div key={i} className={`flex min-h-[140px] flex-col overflow-hidden rounded-xl border bg-white ${isToday ? 'border-black ring-1 ring-black' : 'border-[#E5E7EB]'}`}>
            <div className="flex items-baseline justify-between border-b border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#6B7280]">{DOW[d.getDay()]}</span>
              <span className="text-base font-bold text-black">{d.getDate()}</span>
            </div>
            <div className="flex flex-col gap-1.5 p-2">
              {evs.length === 0 ? <span className="py-2 text-center text-[11px] italic text-[#D1D5DB]">—</span> :
                evs.map((ev) => {
                  const r = rosterFor(ev, d)
                  return (
                    <button key={ev.slug} onClick={() => onOpen(ev, d)}
                      className="rounded-lg border-l-[3px] border-black bg-[#F9FAFB] p-2 text-left transition hover:-translate-y-px hover:shadow-sm">
                      <div className="flex items-center gap-1.5 text-[12.5px] font-bold leading-tight text-[#111827]"><CatIcon cat={ev.category} className="h-3 w-3" />{ev.title}</div>
                      <div className="mt-0.5 text-[11px] text-[#6B7280]">{timeLabel(ev)}{r.total ? ` · ${r.full ? 'Full' : `${r.total} going`}` : ''}</div>
                      {r.confirmed.length > 0 && <div className="mt-1.5"><Stack names={r.confirmed} max={4} size={20} /></div>}
                    </button>
                  )
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Agenda view ──
function AgendaView({ today, eventsOn, rosterFor, onOpen }: {
  today: Date; eventsOn: (d: Date) => TrainingEvent[]; rosterFor: TrainingCalendarRoster; onOpen: (ev: TrainingEvent, d: Date) => void
}) {
  const blocks: { date: Date; evs: TrainingEvent[] }[] = []
  for (let off = 0; off < 160 && blocks.length < 35; off++) {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + off)
    const evs = eventsOn(d)
    if (evs.length) blocks.push({ date: d, evs })
  }
  if (!blocks.length) return <div className="grid h-40 place-items-center rounded-xl border border-[#E5E7EB] bg-white text-[#9CA3AF]">No matching events — try turning filters back on.</div>
  return (
    <div className="flex flex-col gap-3">
      {blocks.map((b, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
          <h3 className="border-b border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-[#6B7280]">
            {DOW_FULL[b.date.getDay()]} · {MONTHS[b.date.getMonth()]} {b.date.getDate()}, {b.date.getFullYear()}{sameDay(b.date, today) ? '  ·  Today' : ''}
          </h3>
          {b.evs.map((ev) => {
            const r = rosterFor(ev, b.date)
            return (
              <button key={ev.slug} onClick={() => onOpen(ev, b.date)}
                className="flex w-full items-center gap-3 border-b border-[#E5E7EB] px-4 py-3.5 text-left last:border-b-0 hover:bg-[#F9FAFB]">
                <span className="self-stretch w-1 rounded bg-black" />
                <span className="text-black"><CatIcon cat={ev.category} className="h-4 w-4" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-bold text-[#111827]">{ev.title}</span>
                  <span className="block text-[13px] text-[#6B7280]">{timeLabel(ev)}{ev.host ? ` · ${ev.host}` : ''}</span>
                </span>
                <span className="hidden items-center gap-2 sm:flex">
                  <Stack names={r.confirmed} max={4} size={22} />
                  <span className="whitespace-nowrap rounded-full bg-[#F3F4F6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#4B5563]">{r.full ? 'Full · waitlist' : `${r.total} / ${r.cap ?? '∞'} going`}</span>
                </span>
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

// ── Ongoing panel ──
function OngoingPanel() {
  const items = [
    { name: 'Pre-Licensing Classes', note: 'Live classes to help you get licensed. Next session date coming soon.', cat: 'prelicense' as CategoryId },
    { name: 'Travel Club Trips', note: 'Member trips with the Example Investor Team community. Details to come.', cat: 'community' as CategoryId },
  ]
  return (
    <div className="mt-6 rounded-xl border border-dashed border-[#D1D5DB] bg-white p-5">
      <h3 className="text-lg font-bold text-black">Ongoing &amp; scheduling soon</h3>
      <p className="mb-3 text-[13.5px] text-[#6B7280]">These run regularly or are still being scheduled — dates will land on the calendar as they&apos;re confirmed.</p>
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.name} className="flex items-start gap-2.5 rounded-lg border border-[#E5E7EB] p-3">
            <span className="mt-0.5 text-black"><CatIcon cat={it.cat} className="h-4 w-4" /></span>
            <span><b className="block text-sm text-black">{it.name}</b><span className="text-[12.5px] text-[#6B7280]">{it.note}</span></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Subscribe panel ──
function SubscribePanel({ showToast, defaultIdentity }: { showToast: (m: string) => void; defaultIdentity: Identity | null }) {
  const [name, setName] = useState(defaultIdentity?.name || '')
  const [email, setEmail] = useState(defaultIdentity?.email || '')
  const [cats, setCats] = useState<Set<CategoryId>>(new Set())
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => { if (defaultIdentity) { setName((n) => n || defaultIdentity.name); setEmail((e) => e || defaultIdentity.email) } }, [defaultIdentity])

  const submit = async () => {
    setErr(null)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('Please enter a valid email'); return }
    setBusy(true)
    try {
      const res = await fetch('/api/training/subscribe', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: name || undefined, categories: [...cats] }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.error || 'failed')
      setDone(true); showToast('Subscribed — check your inbox!')
    } catch {
      setErr('Could not subscribe — try again')
    } finally { setBusy(false) }
  }

  if (done) return (
    <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-black p-6 text-center text-white">
      <h3 className="text-xl font-bold">You&apos;re on the list 🎉</h3>
      <p className="mt-1 text-sm text-[#D1D5DB]">We&apos;ll send you upcoming events and calendar invites.</p>
    </div>
  )

  return (
    <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-black p-6 text-white sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <h3 className="text-2xl font-bold">Never miss an event</h3>
          <p className="mt-2 text-sm text-[#D1D5DB]">Subscribe and we&apos;ll email you upcoming trainings and events, with invites you can add right to your calendar. Pick what you care about.</p>
        </div>
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const on = cats.has(c.id)
              return (
                <button key={c.id} type="button" onClick={() => setCats((s) => { const n = new Set(s); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n })}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition ${on ? 'border-white bg-white text-black' : 'border-[#374151] text-[#D1D5DB] hover:border-white'}`}>
                  <CatIcon cat={c.id} /> {c.name}
                </button>
              )
            })}
          </div>
          <p className="mb-3 text-[11.5px] text-[#9CA3AF]">No categories selected = you&apos;ll hear about everything.</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
              name="subscribe-name" autoComplete="name"
              className="w-full rounded-lg border border-[#374151] bg-[#111827] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-white sm:w-1/3" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email"
              name="subscribe-email" autoComplete="email"
              className="w-full flex-1 rounded-lg border border-[#374151] bg-[#111827] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-white" />
            <button onClick={submit} disabled={busy}
              className="whitespace-nowrap rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-60">{busy ? 'Subscribing…' : 'Subscribe'}</button>
          </div>
          {err && <p className="mt-2 text-[12.5px] text-[#FCA5A5]">{err}</p>}
        </div>
      </div>
    </div>
  )
}

// ── Event modal ──
function EventModal({ ev, date, roster, identity, onClose, onRsvp, onSaveIdentity }: {
  ev: TrainingEvent; date: Date; roster: ReturnType<TrainingCalendarRoster>
  identity: Identity | null; onClose: () => void
  onRsvp: (ev: TrainingEvent, date: Date, status: Status, who?: Identity) => Promise<boolean>
  onSaveIdentity: (id: Identity) => void
}) {
  const [seg, setSeg] = useState<'going' | 'maybe' | 'waitlist'>('going')
  const [atcOpen, setAtcOpen] = useState(false)
  const [editingId, setEditingId] = useState(!identity)
  const [fName, setFName] = useState(identity?.name || '')
  const [fEmail, setFEmail] = useState(identity?.email || '')
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { closeRef.current?.focus() }, [])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], input, [tabindex]:not([tabindex="-1"])')
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const dateStr = `${DOW_FULL[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  const cap = roster.cap
  const pct = cap ? Math.min(100, Math.round((roster.total / cap) * 100)) : 0
  const statusColor: Record<string, string> = { going: '#16A34A', maybe: '#D97706', not_going: '#DC2626' }

  const handleStatus = async (status: Status) => {
    if (identity) { await onRsvp(ev, date, status); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail) || fName.trim().length < 2) return
    const id = { name: fName.trim(), email: fEmail.trim() }
    onSaveIdentity(id); setEditingId(false)
    await onRsvp(ev, date, status, id)
  }

  const segList = seg === 'going' ? roster.confirmed : seg === 'maybe' ? roster.maybe : roster.waitlist

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-auto bg-black/55 p-4 backdrop-blur-sm sm:p-8"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }} role="dialog" aria-modal="true" aria-label={ev.title}>
      <div ref={dialogRef} className="relative my-auto w-full max-w-[560px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button ref={closeRef} onClick={onClose} aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/15 text-xl leading-none text-white hover:bg-black/30">×</button>

        {/* Event flyers are portrait and made almost entirely of text. `h-40
            object-cover` cropped them to an unreadable strip, and alt="" hid
            that text from screen readers entirely. Contain it, cap the height
            so it cannot push the RSVP controls off screen, and let people open
            the full-size image. The details below the flyer carry the same
            information, which is what the alt text points at. */}
        {ev.imageUrl && (
          <a
            href={ev.imageUrl}
            target="_blank"
            rel="noreferrer"
            className="block bg-[#F3F4F6]"
            aria-label={`Open the full-size flyer for ${ev.title} in a new tab`}
          >
            <img
              src={ev.imageUrl}
              alt={`Event flyer for ${ev.title}. The date, time, location and full description are listed below.`}
              className="mx-auto max-h-[420px] w-auto max-w-full object-contain"
            />
          </a>
        )}

        <div className="border-t-[5px] border-black bg-gradient-to-b from-[#F9FAFB] to-white px-6 pb-4 pt-5">
          <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"><CatIcon cat={ev.category} /> {CATEGORIES.find((c) => c.id === ev.category)?.name}</span>
          <h2 className="text-2xl font-bold leading-tight text-black">{ev.title}</h2>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 px-6 pt-3.5 text-sm text-[#374151]">
          <span className="flex items-center gap-1.5"><CalIcon /> {dateStr}</span>
          <span className="flex items-center gap-1.5"><ClockIcon /> {timeLabel(ev)}</span>
          {ev.location && <span className="flex items-center gap-1.5"><PinIcon /> {ev.location}</span>}
        </div>

        {ev.host && <div className="mx-6 mt-3 rounded-xl bg-[#F3F4F6] px-3.5 py-2.5 text-[13.5px]"><b className="mb-0.5 block text-[10.5px] font-semibold uppercase tracking-wide text-[#6B7280]">Hosted by</b>{ev.host}</div>}
        {ev.tentative && <div className="mx-6 mt-3 rounded-lg bg-[#FFFBEB] px-3 py-2.5 text-[12.5px] text-[#92400E]">Date &amp; details are still being finalized — check back soon.</div>}
        {ev.description && (
          // whitespace-pre-line, not tidying. The admin editor is a TEXTAREA:
          // the office manager types paragraphs and bulleted-looking lists with real line
          // breaks in it, and without this every one of them collapsed into a
          // single run-on block. Caught on the Launch Pad Anytown copy, where "The
          // gaps we fill:" and its six lines rendered as one sentence. Affects
          // every event with a multi-line description, not just that one.
          <p className="whitespace-pre-line px-6 pt-3 text-[14.5px] leading-relaxed text-[#4B5563]">
            {linkify(ev.description).map((run, i) => run.href ? (
              <a
                key={i}
                href={run.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1F2937] underline decoration-[#9CA3AF] underline-offset-2 hover:decoration-[#1F2937] [overflow-wrap:anywhere]"
              >{run.label ?? run.text}</a>
            ) : <span key={i}>{run.text}</span>)}
          </p>
        )}

        {/* RSVP */}
        <div className="mx-6 mt-4 overflow-hidden rounded-xl border border-[#E5E7EB]">
          <div className="border-b border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3">
            <div className="mb-2 flex items-baseline justify-between text-[13px]">
              <span>{roster.full ? <span className="font-bold text-[#DC2626]">At capacity — join the waitlist</span> : <><b className="font-bold">{roster.total}</b> going{cap ? ` · ${cap - roster.total} spots left` : ''}</>}</span>
              {cap && <span className="text-[#6B7280]">{roster.total} / {cap}</span>}
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
              <div className="h-full rounded-full transition-all" style={{ width: `${cap ? pct : (roster.total ? 100 : 0)}%`, background: roster.full ? '#DC2626' : '#16A34A' }} />
            </div>
          </div>

          {editingId && (
            <div className="grid gap-2 border-b border-[#E5E7EB] px-4 py-3 sm:grid-cols-2">
              <input value={fName} onChange={(e) => setFName(e.target.value)} placeholder="Your name"
                name="rsvp-name" autoComplete="name"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-black" />
              <input value={fEmail} onChange={(e) => setFEmail(e.target.value)} placeholder="you@example.com" type="email"
                name="rsvp-email" autoComplete="email"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-black" />
            </div>
          )}

          <div className="grid grid-cols-3 gap-2 p-3">
            {([['going', 'Going'], ['maybe', 'Maybe'], ['not_going', "Can't go"]] as [Status, string][]).map(([s, label]) => {
              const on = roster.myStatus === s
              return (
                <button key={s} onClick={() => handleStatus(s)}
                  className="flex flex-col items-center gap-1 rounded-xl border px-2 py-2.5 text-[13.5px] font-bold transition hover:-translate-y-px"
                  style={on ? { background: statusColor[s], borderColor: statusColor[s], color: '#fff' } : { background: '#fff', borderColor: '#E5E7EB', color: '#4B5563' }}>
                  {label}
                </button>
              )
            })}
          </div>
          {!editingId && identity && (
            <div className="px-4 pb-3 text-[12px] text-[#6B7280]">RSVPing as <b className="text-[#374151]">{identity.name}</b> · <button onClick={() => setEditingId(true)} className="underline hover:text-black">change</button></div>
          )}
          {roster.youWaitlisted && <div className="mx-4 mb-3 rounded-lg bg-[#FFFBEB] px-3 py-2 text-[12.5px] text-[#92400E]">You&apos;re on the waitlist — we&apos;ll move you up if a spot opens.</div>}
        </div>

        {/* Attendees */}
        <div className="mx-6 mt-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {([['going', 'Going', roster.confirmed.length], ['maybe', 'Maybe', roster.maybe.length], ['waitlist', 'Waitlist', roster.waitlist.length]] as [typeof seg, string, number][]).map(([s, label, n]) => (
              <button key={s} onClick={() => setSeg(s)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide ${seg === s ? 'border-black bg-black text-white' : 'border-[#E5E7EB] bg-white text-[#6B7280]'}`}>{label} <span className="opacity-70">{n}</span></button>
            ))}
          </div>
          <div className="flex max-h-52 flex-col gap-2.5 overflow-auto pr-1">
            {segList.length === 0 ? <span className="py-1.5 text-[13px] italic text-[#9CA3AF]">No one yet — be the first.</span> :
              segList.map((n, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm">
                  <Avatar name={n} size={30} you={identity?.name === n} />
                  <span className="font-semibold text-[#1F2937]">{identity?.name === n ? 'You' : n}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Add to calendar */}
        <div className="relative mx-6 mb-6 mt-4">
          <button onClick={() => setAtcOpen((o) => !o)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-[12.5px] font-semibold uppercase tracking-wide text-white hover:opacity-90">＋ Add to calendar</button>
          {atcOpen && (
            <div className="absolute bottom-[calc(100%+8px)] left-0 right-0 z-10 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-2xl">
              {([['google', '🗓️ Google Calendar'], ['outlook', '📧 Outlook'], ['ics', '⬇️ Download .ics (Apple / other)']] as ['google' | 'outlook' | 'ics', string][]).map(([k, label]) => (
                <button key={k} onClick={() => { addToCalendar(ev, date, k); setAtcOpen(false) }}
                  className="flex w-full items-center gap-2.5 border-b border-[#E5E7EB] px-4 py-3 text-left text-sm last:border-b-0 hover:bg-[#F9FAFB]">{label}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── small inline icons ──
function CalIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.7" className="h-4 w-4"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg> }
function ClockIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.7" className="h-4 w-4"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg> }
function PinIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.7" className="h-4 w-4"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg> }
