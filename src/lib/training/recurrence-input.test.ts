import { describe, it, expect } from 'vitest'
import { withCleanRecurrenceDates } from './recurrence-input'
import { sanitiseDateList, MAX_RECURRENCE_DATES } from './calendar'

describe('sanitiseDateList', () => {
  it('keeps real dates, sorted, deduped', () => {
    expect(sanitiseDateList(['2026-09-04', '2026-08-21', '2026-08-21']))
      .toEqual(['2026-08-21', '2026-09-04'])
  })

  it('drops anything that is not a date rather than storing it', () => {
    expect(sanitiseDateList(['2026-13-01', '2026-08-32', 'tomorrow', '', '2026-8-1', 42, null, {}]))
      .toEqual([])
  })

  it('drops a date that is well-formed but does not exist', () => {
    // These pass the shape regex. Stored as a skipDate, "2026-02-30" would roll
    // to March 2 in every reader, so the cancellation would silently apply to
    // the wrong day or to no day at all.
    expect(sanitiseDateList(['2026-02-30', '2026-04-31', '2027-02-29'])).toEqual([])
    expect(sanitiseDateList(['2028-02-29'])).toEqual(['2028-02-29']) // a real leap day
  })

  it('bounds the list, because it is client-supplied and stored as jsonb', () => {
    const many = Array.from({ length: 500 }, (_, i) => `2026-01-${String((i % 28) + 1).padStart(2, '0')}`)
    expect(sanitiseDateList(many).length).toBeLessThanOrEqual(MAX_RECURRENCE_DATES)
  })

  it('is empty for anything that is not a list at all', () => {
    for (const v of [undefined, null, '2026-08-21', 7, {}]) expect(sanitiseDateList(v)).toEqual([])
  })
})

describe('withCleanRecurrenceDates', () => {
  it('leaves the pattern untouched', () => {
    expect(withCleanRecurrenceDates({ type: 'nthWeekday', weekday: 5, n: 1 }))
      .toEqual({ type: 'nthWeekday', weekday: 5, n: 1 })
  })

  it('omits the key entirely when there is nothing to add', () => {
    // Absent, not empty: an untouched event keeps the shape it had before the
    // field existed, so nothing churns in the database.
    const out = withCleanRecurrenceDates({ type: 'weekly', weekday: 2, extraDates: ['nope'] })
    expect('extraDates' in out).toBe(false)
  })

  it('cleans what it keeps', () => {
    expect(withCleanRecurrenceDates({ type: 'oneoff', date: '2026-08-21', extraDates: ['2026-09-04', 'junk'] }))
      .toEqual({ type: 'oneoff', date: '2026-08-21', extraDates: ['2026-09-04'] })
  })

  it('survives junk in place of a recurrence', () => {
    expect(withCleanRecurrenceDates(null)).toEqual({})
    expect(withCleanRecurrenceDates('weekly')).toEqual({})
  })

  // The second list is the one that arrives by copy-paste, so it gets the same
  // battery rather than a token case: cleaning only extraDates is the failure
  // to guard against, and it would look identical on the happy path.
  it('cleans skipDates by the same rule', () => {
    expect(withCleanRecurrenceDates({ type: 'weekly', weekday: 2, skipDates: ['2026-08-25', 'junk', '2026-13-01'] }))
      .toEqual({ type: 'weekly', weekday: 2, skipDates: ['2026-08-25'] })
  })

  it('omits skipDates entirely when nothing survives cleaning', () => {
    const out = withCleanRecurrenceDates({ type: 'weekly', weekday: 2, skipDates: ['nope'] })
    expect('skipDates' in out).toBe(false)
  })

  it('bounds skipDates too', () => {
    const many = Array.from({ length: 500 }, (_, i) => `2026-01-${String((i % 28) + 1).padStart(2, '0')}`)
    const out = withCleanRecurrenceDates({ type: 'weekly', weekday: 2, skipDates: many })
    expect((out.skipDates as string[]).length).toBeLessThanOrEqual(MAX_RECURRENCE_DATES)
  })

  it('cleans both lists in one pass', () => {
    expect(withCleanRecurrenceDates({
      type: 'weekly', weekday: 2, extraDates: ['2026-09-04', 'junk'], skipDates: ['2026-08-25', 'junk'],
    })).toEqual({ type: 'weekly', weekday: 2, extraDates: ['2026-09-04'], skipDates: ['2026-08-25'] })
  })
})
