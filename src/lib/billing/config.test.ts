import { afterEach, describe, expect, it } from 'vitest'
import { isBillingConfigured, TRANSACTION_FEE_CENTS } from './config'

/**
 * The gate that decides whether this deployment can take a payment.
 *
 * A partial configuration is worse than none: a secret key with no price id
 * yields a Checkout session that cannot be built, which an agent experiences as
 * a Join button that breaks after they click it. So the gate is all-or-nothing.
 *
 * ⛔ This needs THREE variables. Anytown has no
 * legacy entry fee, so gating on a legacy price id would gate this branch on a
 * price it never charges. The last case below is what stops that creeping in.
 */
const VARS = [
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'STRIPE_PRICE_MEMBERSHIP_MONTHLY',
] as const

function setAll() {
  process.env.STRIPE_SECRET_KEY = 'sk_test_x'
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_x'
  process.env.STRIPE_PRICE_MEMBERSHIP_MONTHLY = 'price_monthly'
}

afterEach(() => {
  for (const name of VARS) delete process.env[name]
  delete process.env.STRIPE_PRICE_LEGACY_ENTRY
})

describe('isBillingConfigured', () => {
  it('is false with nothing set', () => {
    expect(isBillingConfigured()).toBe(false)
  })

  it('is true when all three variables are present', () => {
    setAll()
    expect(isBillingConfigured()).toBe(true)
  })

  it('is false when any single variable is missing', () => {
    for (const missing of VARS) {
      setAll()
      delete process.env[missing]
      expect(isBillingConfigured(), `expected false without ${missing}`).toBe(false)
    }
  })

  it('treats an empty or whitespace-only value as missing', () => {
    setAll()
    process.env.STRIPE_SECRET_KEY = '   '
    expect(isBillingConfigured()).toBe(false)
  })

  it('does not require a legacy price, which Anytown never charges', () => {
    setAll()
    expect(isBillingConfigured()).toBe(true)
  })
})

describe('the transaction fee', () => {
  it('is the $500 per closing both branches charge', () => {
    expect(TRANSACTION_FEE_CENTS).toBe(50_000)
  })
})
