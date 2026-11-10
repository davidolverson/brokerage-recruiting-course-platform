// Fixed-window rate limiting for the public subscribe endpoint.
//
// Deliberately a separate module from rate-limit.ts, which is the DB-backed
// LOGIN limiter (5 attempts / 15 min against the rate_limits table). These two
// protect different things and must not share a knob: loosening subscribe to fit
// a branch meeting must never loosen login.
//
// `now` is a parameter rather than a Date.now() call inside, because a limiter
// that reads the clock itself can only be tested by sleeping, which means in
// practice it never gets tested at the boundary at all.

export interface RateLimitEntry {
  count: number
  resetTime: number
}

export function checkRateLimit(
  map: Map<string, RateLimitEntry>,
  key: string,
  now: number,
  limit: number,
  windowMs: number,
): boolean {
  const entry = map.get(key)
  if (!entry || now > entry.resetTime) {
    map.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  if (entry.count >= limit) return false
  entry.count++
  return true
}

/**
 * Subscribe limits.
 *
 * This list is filled in bursts, not by a trickle: the office manager asks the whole team to
 * subscribe during a branch meeting, and everyone in the room is behind the
 * office's single public IP. The old value of 5 per minute meant the sixth agent
 * to tap the button was told "Too many requests. Please slow down." on the one
 * day it mattered, which reads as a broken site rather than a rate limit.
 *
 * 40 covers a full room while still refusing a scripted burst. The endpoint
 * upserts on email, so a repeat subscribe cannot inflate the list.
 */
export const SUBSCRIBE_LIMIT = 40
export const SUBSCRIBE_WINDOW_MS = 60_000
