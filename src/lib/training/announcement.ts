import { format12, parseISO, type TrainingEvent } from './calendar'

// Builds the announcement email for an event occurrence.
//
// The subscribe confirmation tells people "we'll email you when something is
// coming up". Keeping that promise was entirely manual: pick an event, then
// write the subject and body from scratch every time. That is the kind of
// friction that quietly turns into "nobody was told", which is the actual
// reason a room is thin. Pure function so the wording is testable.

// Read from the environment so a rename, or the Example Investor Team domain question
// still open with the office manager, does not silently email people a dead link.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

const DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export type AnnouncementKind = 'announce' | 'week' | 'tomorrow'

export function longDate(isoDate: string): string {
  const d = parseISO(isoDate)
  if (Number.isNaN(d.getTime())) return isoDate
  return `${DOW[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

function timeLine(ev: Pick<TrainingEvent, 'startTime' | 'endTime'>): string {
  if (!ev.startTime) return 'Time to be confirmed'
  const start = format12(ev.startTime)
  return ev.endTime ? `${start} - ${format12(ev.endTime)}` : String(start)
}

export function buildAnnouncement(
  ev: Pick<TrainingEvent, 'title' | 'description' | 'host' | 'location' | 'startTime' | 'endTime'>,
  isoDate: string,
  kind: AnnouncementKind = 'announce',
): { subject: string; message: string } {
  const when = longDate(isoDate)

  const subject =
    kind === 'tomorrow'
      ? `Tomorrow: ${ev.title}`
      : kind === 'week'
        ? `Next week: ${ev.title} — ${when}`
        : `${ev.title} — ${when}`

  const opener =
    kind === 'tomorrow'
      ? `A quick reminder that this is happening tomorrow.`
      : kind === 'week'
        ? `A heads up on what is coming up next week.`
        : `Putting this on your radar.`

  const lines: string[] = [opener, '', ev.title, when, timeLine(ev)]

  if (ev.location) lines.push(ev.location)
  if (ev.host) lines.push(`Hosted by ${ev.host}`)

  if (ev.description) {
    // The full description can run long; lead with the opening paragraph and
    // point at the calendar for the rest rather than pasting an essay.
    const firstPara = ev.description.split(/\n\s*\n/)[0].trim()
    if (firstPara) {
      lines.push('', firstPara)
    }
  }

  lines.push(
    '',
    'Full details, who else is going, and one-click add-to-calendar:',
    `${BASE_URL}/training-events`,
    '',
    'Hope to see you there.',
  )

  return { subject, message: lines.join('\n') }
}
