import { describe, expect, it } from 'vitest'
import { checkoutDecision } from './route'

/**
 * Who may start a checkout.
 *
 * The case that matters most is the already-billed one. Onboarding agents are
 * already invoiced through this same Stripe account on recurring autopay, so a
 * self-serve Join button sits one click away from charging an existing member a
 * second time. That has to fail closed.
 *
 * Configuration is checked after the session on purpose: answering 503 first
 * would tell an anonymous caller whether this deployment has billing attached,
 * and would make the auth path impossible to exercise where billing is off.
 */
describe('checkoutDecision', () => {
  const base = { hasSession: true, configured: true, existingStatus: null } as const

  it('starts a checkout for a signed-in non-member', () => {
    expect(checkoutDecision(base).action).toBe('checkout')
  })

  it('refuses an anonymous caller with 401 before it looks at configuration', () => {
    const decision = checkoutDecision({ ...base, hasSession: false, configured: false })
    expect(decision.action).toBe('reject')
    expect(decision.status).toBe(401)
  })

  it('refuses with 503 when billing is not configured', () => {
    const decision = checkoutDecision({ ...base, configured: false })
    expect(decision.action).toBe('reject')
    expect(decision.status).toBe(503)
  })

  it('refuses an already-billed member with 409 rather than double-billing', () => {
    for (const status of ['active', 'past_due'] as const) {
      const decision = checkoutDecision({ ...base, existingStatus: status })
      expect(decision.action, `expected ${status} to be refused`).toBe('reject')
      expect(decision.status).toBe(409)
    }
  })

  it('lets a canceled or pending member start again', () => {
    for (const status of ['canceled', 'pending'] as const) {
      expect(
        checkoutDecision({ ...base, existingStatus: status }).action,
        `expected ${status} to be allowed to retry`,
      ).toBe('checkout')
    }
  })

  it('carries a readable sentence on every refusal', () => {
    const refusals = [
      checkoutDecision({ ...base, hasSession: false }),
      checkoutDecision({ ...base, configured: false }),
      checkoutDecision({ ...base, existingStatus: 'active' }),
    ]
    for (const decision of refusals) {
      expect(decision.action).toBe('reject')
      expect(decision.error && decision.error.length > 0).toBe(true)
    }
  })
})
