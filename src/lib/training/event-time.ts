import { parseTimeInput } from './calendar'

/**
 * Reading the start/end time an editor typed, for both the POST and the PATCH
 * route.
 *
 * The admin's time boxes are free text labelled "24h, e.g. 11:00", and nothing
 * validated them on either side. "10am" was stored verbatim and the PUBLIC
 * calendar rendered it to the whole branch as "NaN:undefined AM", with the
 * admin screen showing no sign of a problem. The client's own flyer reads
 * "10AM", so the spelling that breaks it is the likely one.
 *
 * Lives in lib rather than in the route because a route file may only export
 * HTTP handlers, and because both routes must answer this question the same
 * way — two copies of a validation rule is how the third one gets forgotten.
 */
export const INVALID_TIME = Symbol('invalid-time')

/**
 * Blank clears the time. A readable time is normalised to 'HH:MM'. Anything
 * else is INVALID_TIME, so the caller refuses it rather than storing it.
 */
export function normaliseTime(raw: unknown): string | null | typeof INVALID_TIME {
  if (raw === undefined || raw === null || String(raw).trim() === '') return null
  return parseTimeInput(String(raw)) ?? INVALID_TIME
}

/** Says what was wrong AND what to type instead. */
export function timeError(field: string, raw: unknown): string {
  return `${field} "${String(raw).trim()}" is not a time. Try 10:00, 10am, or 1:30pm.`
}
