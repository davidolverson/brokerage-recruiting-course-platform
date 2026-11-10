/**
 * Whether this deployment can take a payment at all.
 *
 * `isBillingConfigured()` is the single place that decides it, and every caller
 * branches on it rather than throwing, so a deployment with no Stripe keys
 * renders the page it rendered before billing existed instead of a 500, or a
 * Join button that cannot work.
 *
 * It is deliberately all-or-nothing. A secret key with no price id would let a
 * request reach Stripe and fail there, which an agent experiences as a button
 * that breaks after they click it.
 *
 * ⛔ This needs THREE variables. Anytown sells
 * $99/month and a $500 per-closing fee, with no legacy entry and no seat cap
 * (see src/app/(marketing)/membership/page.tsx, which states the difference).
 * Do not add a legacy entry-fee price here:
 * that would gate billing on a price it never charges.
 */

export interface BillingConfig {
  secretKey: string
  webhookSecret: string
  monthlyPriceId: string
}

/**
 * The per-transaction fee, in cents.
 *
 * The one amount that lives in code rather than in a Stripe price, because the
 * fee is invoiced per closing rather than bought from a price object. $500 is
 * common to both branches and is the branch lead's own written figure.
 */
export const TRANSACTION_FEE_CENTS = 50_000

/**
 * An unset variable and one set to the empty string mean the same thing here,
 * so a cleared value in a hosting dashboard reads as unconfigured rather than
 * as a usable key.
 */
function read(name: string): string | null {
  const value = process.env[name]
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

export function isBillingConfigured(): boolean {
  return (
    read('STRIPE_SECRET_KEY') !== null &&
    read('STRIPE_WEBHOOK_SECRET') !== null &&
    read('STRIPE_PRICE_MEMBERSHIP_MONTHLY') !== null
  )
}

/**
 * Throws rather than returning a partial configuration. Callers reach this only
 * after `isBillingConfigured()` has answered true, so a throw is a real fault.
 */
export function billingConfig(): BillingConfig {
  const secretKey = read('STRIPE_SECRET_KEY')
  const webhookSecret = read('STRIPE_WEBHOOK_SECRET')
  const monthlyPriceId = read('STRIPE_PRICE_MEMBERSHIP_MONTHLY')

  if (!secretKey || !webhookSecret || !monthlyPriceId) {
    throw new Error('Billing is not configured.')
  }

  return { secretKey, webhookSecret, monthlyPriceId }
}
