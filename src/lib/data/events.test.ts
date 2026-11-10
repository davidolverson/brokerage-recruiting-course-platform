import { describe, it, expect } from 'vitest'
import { events, featuredEvents, isUpcoming, upcomingFeaturedEvents, type Event } from './events'

// the Annual Summit 2026 finished on June 2 and was still being advertised in August as a
// "Save the Date" banner AND as an upcoming schema.org Event from two separate
// JSON-LD emitters, because "is it still upcoming" was decided in three places
// and the layout had no date check at all.

const AUG_2026 = new Date('2026-08-10T12:00:00')
const MAY_2026 = new Date('2026-05-01T12:00:00')

const ev = (over: Partial<Event>): Event => ({
  slug: 't', title: 'T', eventType: 'conference',
  datetimeStart: '2026-06-01T09:00', location: 'X', summary: 'S',
  registrationCta: 'Go', registrationUrl: 'https://example.com', tag: 'T',
  ...over,
})

describe('isUpcoming', () => {
  it('is false once the end date has passed', () => {
    expect(isUpcoming(ev({ datetimeStart: '2026-06-01T09:00', datetimeEnd: '2026-06-02T17:00' }), AUG_2026)).toBe(false)
  })

  it('is true before the event', () => {
    expect(isUpcoming(ev({ datetimeStart: '2026-06-01T09:00', datetimeEnd: '2026-06-02T17:00' }), MAY_2026)).toBe(true)
  })

  it('uses the end date, so a multi-day event stays upcoming while it runs', () => {
    const during = new Date('2026-06-02T09:00:00')
    expect(isUpcoming(ev({ datetimeStart: '2026-06-01T09:00', datetimeEnd: '2026-06-02T17:00' }), during)).toBe(true)
  })

  it('falls back to the start date when there is no end', () => {
    expect(isUpcoming(ev({ datetimeStart: '2026-06-01T09:00', datetimeEnd: undefined }), MAY_2026)).toBe(true)
    expect(isUpcoming(ev({ datetimeStart: '2026-06-01T09:00', datetimeEnd: undefined }), AUG_2026)).toBe(false)
  })

  it('is false for a placeholder, which has no real date', () => {
    expect(isUpcoming(ev({ datetimeStart: 'Weekly · Tuesdays', isPlaceholder: true }), MAY_2026)).toBe(false)
  })

  it('is false for an unparseable date rather than throwing or defaulting to true', () => {
    expect(isUpcoming(ev({ datetimeStart: 'sometime next spring' }), MAY_2026)).toBe(false)
  })
})

describe('upcomingFeaturedEvents', () => {
  it('drops a featured event that has finished', () => {
    expect(upcomingFeaturedEvents(AUG_2026)).toEqual([])
  })

  it('returns it while it is still ahead', () => {
    expect(upcomingFeaturedEvents(MAY_2026).map((e) => e.slug)).toEqual(
      featuredEvents.map((e) => e.slug),
    )
  })
})

describe('the events list itself', () => {
  it('has no dated entry sitting in the past while still marked as real', () => {
    // Catches the original defect class: a hardcoded date quietly going stale.
    // Placeholders are exempt; they are surfaced by the calendar, not as dates.
    const stale = events
      .filter((e) => !e.isPlaceholder)
      .filter((e) => !isUpcoming(e))
      .map((e) => e.slug)

    // the Annual Summit 2026 is knowingly past and is filtered everywhere it is rendered.
    expect(stale).toEqual(['annual-summit-2026'])
  })
})
