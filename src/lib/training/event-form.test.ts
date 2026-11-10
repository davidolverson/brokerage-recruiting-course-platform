import { describe, it, expect } from 'vitest'
import { rowToForm, formToRecurrence, type EventFormRow } from './event-form'
import type { Recurrence } from './calendar'

const row = (recurrence: Recurrence): EventFormRow => ({
  id: 2, title: 'Example Investor Team Meeting', category: 'example',
  description: null, host: null, location: null, image_url: null,
  start_time: '11:00', end_time: '12:00', capacity: 40,
  recurrence, tentative: false, active: true,
})

/**
 * Opening an event in the editor and saving it without touching anything must
 * give back the recurrence it started with. The failure this guards is the one
 * this repo keeps producing: a field added to the type and to only ONE of the
 * two mappers. That compiles, and it silently drops the value.
 */
describe('the editor round-trips a recurrence unchanged', () => {
  const cases: Recurrence[] = [
    { type: 'weekly', weekday: 2 },
    { type: 'weekly', weekday: 2, exceptNth: [1] },
    { type: 'nthWeekday', weekday: 5, n: 1 },
    { type: 'weeklyCount', weekday: 3, start: '2026-07-15', count: 4 },
    { type: 'oneoff', date: '2026-08-21' },
    // The two free lists, alone and together. The office manager's real rows.
    { type: 'nthWeekday', weekday: 5, n: 1, extraDates: ['2026-08-21'] },
    { type: 'weekly', weekday: 2, exceptNth: [1], skipDates: ['2026-08-25'] },
    { type: 'weekly', weekday: 2, extraDates: ['2026-09-04'], skipDates: ['2026-08-25'] },
  ]

  for (const recurrence of cases) {
    it(JSON.stringify(recurrence), () => {
      expect(formToRecurrence(rowToForm(row(recurrence)))).toEqual(recurrence)
    })
  }
})

describe('the editor does not invent keys', () => {
  it('leaves an event with no date lists shaped exactly as it was', () => {
    const out = formToRecurrence(rowToForm(row({ type: 'weekly', weekday: 2 })))
    expect('extraDates' in out).toBe(false)
    expect('skipDates' in out).toBe(false)
  })

  it('carries a cancelled date through an unrelated edit', () => {
    // Changing the title must not quietly un-cancel a meeting.
    const form = { ...rowToForm(row({ type: 'weekly', weekday: 2, skipDates: ['2026-08-25'] })), title: 'Renamed' }
    expect(formToRecurrence(form)).toEqual({ type: 'weekly', weekday: 2, skipDates: ['2026-08-25'] })
  })

  it('keeps the two lists apart', () => {
    const form = rowToForm(row({ type: 'weekly', weekday: 2, extraDates: ['2026-09-04'], skipDates: ['2026-08-25'] }))
    expect(form.extraDates).toEqual(['2026-09-04'])
    expect(form.skipDates).toEqual(['2026-08-25'])
  })
})
