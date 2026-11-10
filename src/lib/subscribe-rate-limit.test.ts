import { describe, it, expect } from 'vitest'
import { checkRateLimit, SUBSCRIBE_LIMIT, SUBSCRIBE_WINDOW_MS, type RateLimitEntry } from './subscribe-rate-limit'

// The subscribe endpoint is rate limited per IP. That is correct for abuse, and
// wrong for the way this list actually gets filled: the office manager asks the whole team to
// subscribe during a meeting, and a room full of agents on the office wifi share
// ONE public IP. At 5 per minute the sixth person was told "Too many requests.
// Please slow down." — which reads as a broken site, not a rate limit.

const fresh = () => new Map<string, RateLimitEntry>()

describe('checkRateLimit', () => {
  it('allows the first request from an address', () => {
    expect(checkRateLimit(fresh(), '1.2.3.4', 0, 5, 60_000)).toBe(true)
  })

  it('allows requests up to the limit inside the window', () => {
    const m = fresh()
    for (let i = 0; i < 5; i++) {
      expect(checkRateLimit(m, '1.2.3.4', i * 100, 5, 60_000), `request ${i + 1}`).toBe(true)
    }
  })

  it('blocks the request past the limit inside the window', () => {
    const m = fresh()
    for (let i = 0; i < 5; i++) checkRateLimit(m, '1.2.3.4', 0, 5, 60_000)
    expect(checkRateLimit(m, '1.2.3.4', 0, 5, 60_000)).toBe(false)
  })

  it('allows again once the window has passed', () => {
    const m = fresh()
    for (let i = 0; i < 5; i++) checkRateLimit(m, '1.2.3.4', 0, 5, 60_000)
    expect(checkRateLimit(m, '1.2.3.4', 60_001, 5, 60_000)).toBe(true)
  })

  it('counts each address separately', () => {
    const m = fresh()
    for (let i = 0; i < 5; i++) checkRateLimit(m, '1.2.3.4', 0, 5, 60_000)
    expect(checkRateLimit(m, '9.9.9.9', 0, 5, 60_000)).toBe(true)
  })

  // The regression this exists to prevent.
  it('lets a whole team subscribe from one office IP during a meeting', () => {
    const m = fresh()
    const results = []
    for (let person = 0; person < 30; person++) {
      // Thirty agents, same wifi, same public IP, spread over about a minute.
      results.push(checkRateLimit(m, '203.0.113.7', person * 2_000, SUBSCRIBE_LIMIT, SUBSCRIBE_WINDOW_MS))
    }
    expect(results.filter((r) => r === false)).toEqual([])
  })

  it('still refuses an obviously abusive burst from one address', () => {
    const m = fresh()
    const results = []
    for (let i = 0; i < 200; i++) results.push(checkRateLimit(m, '198.51.100.1', 0, SUBSCRIBE_LIMIT, SUBSCRIBE_WINDOW_MS))
    expect(results).toContain(false)
  })
})
