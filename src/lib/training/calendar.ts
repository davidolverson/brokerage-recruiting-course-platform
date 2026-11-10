// Shared training-calendar types + recurrence engine.
// Pure functions — safe to import on both server and client.

export type CategoryId =
  | 'branch' | 'example' | 'newagent' | 'prelicense' | 'community' | 'broker' | 'popup'

export interface Category {
  id: CategoryId
  name: string
}

export const CATEGORIES: Category[] = [
  { id: 'branch', name: 'Branch Offerings' },
  { id: 'example', name: 'Example Investor Team Events' },
  { id: 'newagent', name: 'New Agent Trainings' },
  { id: 'prelicense', name: 'Pre-Licensing Classes' },
  { id: 'community', name: 'Community Events' },
  { id: 'broker', name: 'Broker Resources' },
  { id: 'popup', name: 'Pop-Up Classes' },
]

export const CATEGORY_NAME: Record<string, string> =
  Object.fromEntries(CATEGORIES.map((c) => [c.id, c.name]))

type RecurrencePattern =
  | { type: 'nthWeekday'; weekday: number; n: number }
  | { type: 'weekly'; weekday: number; exceptNth?: number[] }
  | { type: 'weeklyCount'; weekday: number; start: string; count: number }
  | { type: 'oneoff'; date: string }

/**
 * A repeating pattern, plus the one-off dates added to and removed from it.
 *
 * `extraDates` exists because the pattern alone could not express what the
 * client actually asked for. On 2026-08-13 the office manager asked to add her first-Friday
 * pickleball "also on August 21st" — a session outside the pattern. There was
 * no way to say that, so it had to become a SECOND event with its own title,
 * image and RSVP list, which is not what she meant and not what her agents
 * see. Anyone running a recurring meetup hits this the first time they add a
 * make-up session.
 *
 * `skipDates` is the same gap in the other direction, and it turned up the very
 * next day: on 2026-08-14 the office manager asked for a builder tour "in place of the
 * normal team meeting" on Tuesday August 25th. The team meeting is
 * `weekly/Tuesday`, so it lands on the 25th, and nothing could take it off just
 * that one day. The only controls were Hide, which removes EVERY future
 * Tuesday, and leaving it, which shows the branch two 11:00 events on a day she
 * had just said one of them was cancelled. Cancelling one occurrence is a
 * normal week in an office; it must not need a developer.
 *
 * `exceptNth` does not cover this. It is a rule about the pattern ("never the
 * 1st Tuesday"), so it repeats forever and cannot name a single date.
 *
 * Both optional, so every row written before these fields existed still parses.
 */
export type Recurrence = RecurrencePattern & { extraDates?: string[]; skipDates?: string[] }

export interface TrainingEvent {
  slug: string
  title: string
  category: CategoryId
  description: string | null
  host: string | null
  location: string | null
  imageUrl: string | null
  startTime: string | null // 'HH:MM' 24h
  endTime: string | null
  capacity: number | null
  recurrence: Recurrence
  tentative: boolean
  sortOrder: number
}

// ── Date helpers (all local time) ────────────────────────────────────────────
export function pad(n: number): string { return (n < 10 ? '0' : '') + n }
export function dateKey(d: Date): string {
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())
}
export function parseISO(s: string): Date {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}
export function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function nthOfWeekday(d: Date): number { return Math.floor((d.getDate() - 1) / 7) + 1 }

export function occurrenceKey(slug: string, d: Date): string {
  return slug + ':' + dateKey(d)
}

/**
 * Does this event occur on the given date?
 *
 * Takes only the recurrence rather than a whole TrainingEvent, so callers that
 * hold a database row (the newsletter route) can ask the same question as the
 * calendar without inventing the other fields. A second copy of this logic is
 * exactly how the answer would drift.
 */
export function occursOn(ev: { recurrence: Recurrence }, d: Date): boolean {
  const r = ev.recurrence
  const key = dateKey(d)
  // A skipped date beats everything, including an extra date. It is the most
  // specific thing an editor can say about a single day, and it is the safer
  // way for the two lists to disagree: an occurrence that is missing gets
  // reported, whereas a cancelled meeting still on the calendar is exactly the
  // thing being cancelled. Checked before the pattern so no branch can miss it.
  if (r.skipDates && r.skipDates.includes(key)) return false
  // An extra date is an addition to the pattern, never a replacement, so it is
  // checked first and short-circuits. A date that the pattern already produces
  // is not doubled: occursOn answers yes/no, it does not count.
  if (r.extraDates && r.extraDates.includes(key)) return true
  switch (r.type) {
    case 'nthWeekday':
      return d.getDay() === r.weekday && nthOfWeekday(d) === r.n
    case 'weekly':
      if (d.getDay() !== r.weekday) return false
      if (r.exceptNth && r.exceptNth.includes(nthOfWeekday(d))) return false
      return true
    case 'weeklyCount': {
      const s = parseISO(r.start)
      for (let i = 0; i < r.count; i++) {
        const o = new Date(s.getFullYear(), s.getMonth(), s.getDate() + i * 7)
        if (sameDay(o, d)) return true
      }
      return false
    }
    case 'oneoff':
      return sameDay(parseISO(r.date), d)
    default:
      return false
  }
}

/**
 * The one shape a stored time may have. Anything else is not a time, and the
 * readers below refuse to guess at it.
 */
const HHMM = /^([01]\d|2[0-3]):([0-5]\d)$/

/**
 * Read what a person typed and give back 'HH:MM', or null if it is not a time.
 *
 * The admin's start-time box is free text labelled "24h, e.g. 11:00", and
 * nothing validated it on either side, so "10am" went into the database
 * verbatim and the PUBLIC calendar rendered "NaN:undefined AM" to the whole
 * branch. The editor saw nothing wrong. The office manager's own flyer says "10AM", so the
 * wrong spelling is the likely one.
 *
 * Accepts what people actually write: 10, 10:00, 10am, 10 AM, 10:00am,
 * 1:30 pm, 13:00, 9.30. Rejects what is not a time rather than storing it.
 */
export function parseTimeInput(raw: string | null | undefined): string | null {
  if (raw == null) return null
  const v = String(raw).trim().toLowerCase().replace(/\./g, ':')
  if (!v) return null

  const m = v.match(/^(\d{1,2})(?::(\d{1,2}))?\s*(am|pm)?$/)
  if (!m) return null

  let h = Number(m[1])
  const min = m[2] === undefined ? 0 : Number(m[2])
  const meridiem = m[3]

  if (min > 59) return null
  if (meridiem) {
    if (h < 1 || h > 12) return null
    h = meridiem === 'pm' ? (h % 12) + 12 : h % 12
  } else if (h > 23) return null

  return `${pad(h)}:${pad(min)}`
}

/** Is this already a storable time? */
export function isValidTime(t: string | null | undefined): boolean {
  return t == null || t === '' || HHMM.test(String(t))
}

/**
 * Minutes-from-midnight for a 'HH:MM' string; large number for null or for
 * anything malformed, so it sorts last instead of poisoning the comparison
 * with NaN (NaN compares false against everything and scrambles the order).
 */
export function timeMinutes(t: string | null): number {
  if (!t) return 99999
  const m = String(t).match(HHMM)
  if (!m) return 99999
  return Number(m[1]) * 60 + Number(m[2])
}

/**
 * 'HH:MM' as a human clock time, or null if the stored value is not a time.
 *
 * Returning null makes the caller print "Time TBD", which is honest. It used
 * to split blindly and emit "NaN:undefined AM" onto the public calendar.
 */
export function format12(t: string | null): string | null {
  if (!t) return null
  const m = String(t).match(HHMM)
  if (!m) return null
  const h = Number(m[1])
  const ap = h >= 12 ? 'PM' : 'AM'
  const h12 = ((h + 11) % 12) + 1
  return `${h12}:${m[2]} ${ap}`
}

export function timeLabel(ev: { startTime: string | null; endTime: string | null }): string {
  const a = format12(ev.startTime)
  // Not just "no time set": a stored value that is not a time reads as no
  // time too. Hardening format12 alone left this caller handing its null
  // straight to the page, which is a blank where a time should be.
  if (!a) return 'Time TBD'
  const b = ev.endTime ? format12(ev.endTime) : null
  return b ? `${a} – ${b}` : a
}

/** Events occurring on a date, sorted by start time. */
export function eventsOnDate(events: TrainingEvent[], d: Date): TrainingEvent[] {
  return events
    .filter((ev) => occursOn(ev, d))
    .sort((a, b) => timeMinutes(a.startTime) - timeMinutes(b.startTime))
}

/** A calendar date, exactly as dateKey() writes one. Shape only. */
const ISO_DATE = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

/**
 * A date that is BOTH well-formed and real.
 *
 * The shape regex alone lets "2026-02-30" through, and `parseISO` then rolls it
 * over to March 2 without complaint. Two ways that bites: stored in skipDates
 * it can never match a rendered day, so the cancellation silently does nothing
 * forever; passed to the newsletter it silently becomes a DIFFERENT date than
 * the one the editor typed. Round-tripping through the date constructor is what
 * distinguishes them, and it costs nothing.
 */
export function isCalendarDate(value: unknown): value is string {
  if (typeof value !== 'string') return false
  const t = value.trim()
  if (!ISO_DATE.test(t)) return false
  return dateKey(parseISO(t)) === t
}

/**
 * The recurrence object is client-supplied and stored as jsonb, wholesale.
 * extraDates and skipDates are the parts of it that are free lists rather than
 * a fixed shape, so they are the parts that can grow without bound. Anything
 * that is not a date is dropped rather than stored: it could never match a
 * rendered day anyway, so keeping it would only make the row heavier and the
 * column harder to read.
 */
export const MAX_RECURRENCE_DATES = 60

export function sanitiseDateList(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  const seen = new Set<string>()
  for (const v of value) {
    if (typeof v !== 'string') continue
    const t = v.trim()
    if (isCalendarDate(t)) seen.add(t)
    if (seen.size >= MAX_RECURRENCE_DATES) break
  }
  return [...seen].sort()
}
