import type { Recurrence } from './calendar'

/**
 * The events editor's form state, and the two mappings between it and a stored
 * recurrence. Pulled out of the page component so they can be tested without a
 * browser.
 *
 * These two functions are where this repo's most-repeated defect lives: a field
 * gets added to the shared type and to ONE of the two mappers, which compiles
 * cleanly and silently drops the value — on save if `formToRecurrence` was
 * missed, on the next edit if `rowToForm` was. That is exactly how three copies
 * of the article section type and the events admin's own local `Recurrence`
 * copy went wrong. A round-trip test is the cheap guard, and it needs these to
 * be importable.
 */

export const EMPTY_FORM = {
  id: null as number | null, title: '', category: 'example', description: '', host: '', location: '',
  imageUrl: '', startTime: '', endTime: '', capacity: '' as string | number, tentative: false, active: true,
  repeat: 'weekly' as 'oneoff' | 'weekly' | 'nthWeekday' | 'weeklyCount',
  weekday: 2, nth: 1, skipFirst: false, oneoffDate: '', startDate: '', count: 4,
  extraDates: [] as string[], skipDates: [] as string[],
}
export type FormState = typeof EMPTY_FORM

/** The columns of a `training_events` row that the editor reads. */
export interface EventFormRow {
  id: number; title: string; category: string
  description: string | null; host: string | null; location: string | null; image_url: string | null
  start_time: string | null; end_time: string | null; capacity: number | null
  recurrence: Recurrence; tentative: boolean; active: boolean
}

export function formToRecurrence(f: FormState): Recurrence {
  // Only emitted when there are any, so an untouched event keeps the exact
  // recurrence shape it had before these fields existed.
  const dates = {
    ...(f.extraDates.length ? { extraDates: [...f.extraDates].sort() } : {}),
    ...(f.skipDates.length ? { skipDates: [...f.skipDates].sort() } : {}),
  }
  switch (f.repeat) {
    case 'oneoff': return { type: 'oneoff', date: f.oneoffDate || '2026-01-01', ...dates }
    case 'weekly': return { type: 'weekly', weekday: f.weekday, ...(f.skipFirst ? { exceptNth: [1] } : {}), ...dates }
    case 'nthWeekday': return { type: 'nthWeekday', weekday: f.weekday, n: f.nth, ...dates }
    case 'weeklyCount': return { type: 'weeklyCount', weekday: f.weekday, start: f.startDate || '2026-01-01', count: f.count, ...dates }
  }
}

export function rowToForm(e: EventFormRow): FormState {
  const r = e.recurrence
  const base = { ...EMPTY_FORM, id: e.id, title: e.title, category: e.category, description: e.description || '',
    host: e.host || '', location: e.location || '', imageUrl: e.image_url || '', startTime: e.start_time || '',
    endTime: e.end_time || '', capacity: e.capacity ?? '', tentative: e.tentative, active: e.active,
    extraDates: r.extraDates ?? [], skipDates: r.skipDates ?? [] }
  if (r.type === 'oneoff') return { ...base, repeat: 'oneoff', oneoffDate: r.date }
  if (r.type === 'weekly') return { ...base, repeat: 'weekly', weekday: r.weekday, skipFirst: !!r.exceptNth?.includes(1) }
  if (r.type === 'nthWeekday') return { ...base, repeat: 'nthWeekday', weekday: r.weekday, nth: r.n }
  if (r.type === 'weeklyCount') return { ...base, repeat: 'weeklyCount', weekday: r.weekday, startDate: r.start, count: r.count }
  return base
}
