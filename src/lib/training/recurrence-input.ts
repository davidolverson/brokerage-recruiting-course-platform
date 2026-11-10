import { sanitiseDateList } from './calendar'

/** The free-form date lists on a recurrence. Both are cleaned the same way. */
const DATE_LISTS = ['extraDates', 'skipDates'] as const

/**
 * Applied by BOTH the create and the update route, from one place.
 *
 * The recurrence object is stored as jsonb exactly as the client sent it, and
 * extraDates/skipDates are the free-form lists in it. Cleaning them on create
 * only would leave the update path — the one an editor actually uses day to
 * day — accepting anything at all.
 *
 * Driven off a list rather than repeated per field: adding the second one by
 * copying the first is how a third would arrive uncleaned on one of the two
 * routes, which is the same silent-drift shape as the three copies of the
 * article section type.
 */
export function withCleanRecurrenceDates(recurrence: unknown): Record<string, unknown> {
  const r = (recurrence && typeof recurrence === 'object' ? recurrence : {}) as Record<string, unknown>
  const out = { ...r }
  for (const field of DATE_LISTS) {
    const clean = sanitiseDateList(r[field])
    // Absent rather than empty: an untouched event keeps the exact shape it had
    // before these fields existed, so nothing churns in the database.
    if (clean.length) out[field] = clean
    else delete out[field]
  }
  return out
}
