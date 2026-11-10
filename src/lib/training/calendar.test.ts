import { describe, it, expect } from 'vitest'
import { parseTimeInput, format12, timeLabel, timeMinutes, occursOn } from './calendar'

describe('parseTimeInput — reading what an editor actually types', () => {
  it('accepts the format the label asks for', () => {
    expect(parseTimeInput('10:00')).toBe('10:00')
    expect(parseTimeInput('13:00')).toBe('13:00')
    expect(parseTimeInput('09:30')).toBe('09:30')
  })

  it('accepts the way people write times, which is what broke the calendar', () => {
    // the office manager's own flyer says "10AM". These all reached the DB verbatim before
    // and rendered as "NaN:undefined AM" on the public page.
    expect(parseTimeInput('10am')).toBe('10:00')
    expect(parseTimeInput('10 AM')).toBe('10:00')
    expect(parseTimeInput('10:00 AM')).toBe('10:00')
    expect(parseTimeInput('10')).toBe('10:00')
    expect(parseTimeInput('1:30pm')).toBe('13:30')
    expect(parseTimeInput('  1:30 PM  ')).toBe('13:30')
    expect(parseTimeInput('9.30')).toBe('09:30')
  })

  it('gets noon and midnight right, where a naive %12 is off by twelve hours', () => {
    expect(parseTimeInput('12am')).toBe('00:00')
    expect(parseTimeInput('12pm')).toBe('12:00')
    expect(parseTimeInput('12:30am')).toBe('00:30')
    expect(parseTimeInput('12:30pm')).toBe('12:30')
  })

  it('refuses what is not a time instead of storing it', () => {
    for (const bad of ['ten', '25:00', '10:75', 'noon', '10pm sharp', '0am', '13pm', 'abc']) {
      expect(parseTimeInput(bad), bad).toBeNull()
    }
  })

  it('treats blank as no time rather than as an error', () => {
    expect(parseTimeInput('')).toBeNull()
    expect(parseTimeInput('   ')).toBeNull()
    expect(parseTimeInput(null)).toBeNull()
    expect(parseTimeInput(undefined)).toBeNull()
  })
})

describe('the readers refuse to render junk that is already stored', () => {
  it('format12 says nothing rather than "NaN:undefined AM"', () => {
    for (const bad of ['10am', '10', '10:00 AM', 'ten', '1000']) {
      expect(format12(bad), bad).toBeNull()
    }
    expect(format12('10:00')).toBe('10:00 AM')
    expect(format12('00:05')).toBe('12:05 AM')
    expect(format12('12:00')).toBe('12:00 PM')
  })

  it('timeLabel falls back to Time TBD, which is honest', () => {
    expect(timeLabel({ startTime: '10am', endTime: null })).toBe('Time TBD')
    expect(timeLabel({ startTime: '10:00', endTime: null })).toBe('10:00 AM')
  })

  it('timeMinutes sorts junk last instead of poisoning the sort with NaN', () => {
    // NaN compares false against everything, which scrambles a whole day.
    expect(Number.isNaN(timeMinutes('10am'))).toBe(false)
    expect(timeMinutes('10am')).toBe(99999)
    expect(timeMinutes('10:00')).toBe(600)
    expect(timeMinutes(null)).toBe(99999)
  })
})

describe('extraDates — an extra session on top of a repeating pattern', () => {
  const base = { slug: 'pickleball', title: "First Friday's Pickleball", category: 'community' as const,
    description: null, host: null, location: null, imageUrl: null, startTime: '10:00', endTime: null,
    capacity: 24, tentative: false, sortOrder: 50 }
  const firstFriday = { ...base, recurrence: { type: 'nthWeekday' as const, weekday: 5, n: 1 } }
  const withExtra = { ...base, recurrence: { type: 'nthWeekday' as const, weekday: 5, n: 1, extraDates: ['2026-08-21'] } }
  const d = (s: string) => { const [y, m, day] = s.split('-').map(Number); return new Date(y, m - 1, day) }

  it('is exactly what the client asked for and the pattern could not say', () => {
    // Aug 21 2026 is the THIRD Friday, so the first-Friday pattern misses it.
    expect(occursOn(firstFriday, d('2026-08-21'))).toBe(false)
    expect(occursOn(withExtra, d('2026-08-21'))).toBe(true)
  })

  it('adds to the pattern rather than replacing it', () => {
    // The regression to fear: extraDates becoming the whole answer and the
    // repeating dates quietly vanishing from the calendar.
    for (const day of ['2026-08-07', '2026-09-04', '2026-10-02']) {
      expect(occursOn(withExtra, d(day)), day).toBe(true)
    }
  })

  it('does not invent days that are in neither the pattern nor the list', () => {
    for (const day of ['2026-08-20', '2026-08-22', '2026-09-11']) {
      expect(occursOn(withExtra, d(day)), day).toBe(false)
    }
  })

  it('works on a one-off too, so a two-date event needs one entry not two', () => {
    const twoDates = { ...base, recurrence: { type: 'oneoff' as const, date: '2026-08-21', extraDates: ['2026-09-04'] } }
    expect(occursOn(twoDates, d('2026-08-21'))).toBe(true)
    expect(occursOn(twoDates, d('2026-09-04'))).toBe(true)
    expect(occursOn(twoDates, d('2026-09-05'))).toBe(false)
  })

  it('leaves every event written before the field existed alone', () => {
    expect(occursOn(firstFriday, d('2026-09-04'))).toBe(true)
    expect(occursOn(firstFriday, d('2026-09-11'))).toBe(false)
  })

  it('does not let an extra date override an exclusion it duplicates', () => {
    // A date already produced by the pattern stays a single occurrence:
    // occursOn answers yes or no, it never counts.
    const dupe = { ...base, recurrence: { type: 'nthWeekday' as const, weekday: 5, n: 1, extraDates: ['2026-09-04'] } }
    expect(occursOn(dupe, d('2026-09-04'))).toBe(true)
  })
})

describe('skipDates — cancelling one occurrence of a repeating event', () => {
  // The real row and the real ask. The office manager, 2026-08-14: a builder tour
  // "in place of the normal team meeting" on Tuesday August 25th. The team
  // meeting is weekly/Tuesday, so it lands on the 25th; before skipDates the
  // only controls were Hide (every future Tuesday) or leave it (two 11:00
  // events on a day she had just cancelled one of them).
  const base = { slug: 'od-team', title: 'Example Investor Team Meeting', category: 'example' as const,
    description: null, host: null, location: null, imageUrl: null, startTime: '11:00', endTime: '12:00',
    capacity: 40, tentative: false, sortOrder: 20 }
  const weekly = { ...base, recurrence: { type: 'weekly' as const, weekday: 2, exceptNth: [1] } }
  const skipped = { ...base, recurrence: { type: 'weekly' as const, weekday: 2, exceptNth: [1], skipDates: ['2026-08-25'] } }
  const d = (s: string) => { const [y, m, day] = s.split('-').map(Number); return new Date(y, m - 1, day) }

  it('is the case the pattern could not express', () => {
    // Aug 25 2026 is the FOURTH Tuesday, so exceptNth:[1] does not reach it.
    expect(occursOn(weekly, d('2026-08-25'))).toBe(true)
    expect(occursOn(skipped, d('2026-08-25'))).toBe(false)
  })

  it('removes only that day, not the series', () => {
    // The regression to fear is the mirror of the extraDates one: a skip that
    // quietly takes the whole repeating event off the calendar. Hiding the
    // event already does that, and it is what this exists to avoid.
    for (const day of ['2026-08-11', '2026-08-18', '2026-09-08', '2026-09-15']) {
      expect(occursOn(skipped, d(day)), day).toBe(true)
    }
  })

  it('does not resurrect a day the pattern never produced', () => {
    for (const day of ['2026-08-24', '2026-08-26', '2026-08-04']) {
      expect(occursOn(skipped, d(day)), day).toBe(false)
    }
  })

  it('beats an extra date for the same day', () => {
    // The two lists can disagree, and the answer has to be decided rather than
    // fall out of statement order. A cancelled meeting still on the calendar
    // is the exact thing being cancelled; a missing one gets reported.
    const both = { ...base, recurrence: { type: 'weekly' as const, weekday: 2, extraDates: ['2026-08-26'], skipDates: ['2026-08-26'] } }
    expect(occursOn(both, d('2026-08-26'))).toBe(false)
  })

  it('applies to every pattern type, not just weekly', () => {
    for (const recurrence of [
      { type: 'nthWeekday' as const, weekday: 5, n: 1, skipDates: ['2026-09-04'] },
      { type: 'weeklyCount' as const, weekday: 3, start: '2026-09-02', count: 4, skipDates: ['2026-09-09'] },
      { type: 'oneoff' as const, date: '2026-09-04', skipDates: ['2026-09-04'] },
    ]) {
      const day = recurrence.skipDates[0]
      expect(occursOn({ ...base, recurrence }, d(day)), `${recurrence.type} ${day}`).toBe(false)
    }
  })

  it('leaves every event written before the field existed alone', () => {
    expect(occursOn(weekly, d('2026-08-25'))).toBe(true)
    expect(occursOn(weekly, d('2026-08-04'))).toBe(false)
  })
})
