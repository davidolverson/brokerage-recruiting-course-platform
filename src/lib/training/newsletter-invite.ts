import { occursOn, parseISO, isCalendarDate, type Recurrence } from './calendar'

/**
 * Guard for "attach an event invite" on the Send update screen.
 *
 * The route accepted any string matching `\d{4}-\d{2}-\d{2}` and looked the
 * event up with `if (rows.length)`. Two ways that goes wrong, both of which end
 * with a real email in real inboxes and a `success` response:
 *
 *  1. The date need not be one the event actually happens on. Since skipDates
 *     shipped, that now includes a date the editor has just CANCELLED, so the
 *     tool built to announce a meeting could announce the one meeting that is
 *     not happening.
 *  2. If the slug did not resolve, the event block was silently omitted and the
 *     newsletter went out anyway, as a bare message, reporting success. The
 *     sender is told the invite went; the reader never sees one.
 *
 * A broadcast cannot be taken back, so this refuses BEFORE anything sends
 * rather than reporting afterwards.
 */

export interface InviteEvent {
  title: string
  recurrence: Recurrence
  active: boolean
}

/** A human date, for a message an editor has to act on. */
function readable(dateStr: string): string {
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const d = parseISO(dateStr)
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

/**
 * Returns the reason this invite must not be sent, or null if it is fine.
 * Message-shaped rather than boolean: the editor has to know which of these
 * happened to fix it.
 */
export function inviteAttachmentError(event: InviteEvent | undefined, dateStr: unknown): string | null {
  // isCalendarDate, not a shape regex: "2026-02-30" matches the shape and then
  // silently becomes March 2, so the invite would name a different day than the
  // one that was typed.
  if (!isCalendarDate(dateStr)) {
    return 'Pick a date for the attached event.'
  }
  if (!event) {
    return 'That event no longer exists. Reload the page and pick it again.'
  }
  if (!event.active) {
    return `"${event.title}" is hidden from the calendar, so the invite would point at a page nobody can see. Restore it first, or send without an attached event.`
  }
  if (!occursOn(event, parseISO(dateStr))) {
    return `"${event.title}" does not happen on ${readable(dateStr)}. Check the date, or the event's cancelled dates if it was called off that week.`
  }
  return null
}
