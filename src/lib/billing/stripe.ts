import Stripe from 'stripe'
import { billingConfig } from './config'

/**
 * The Stripe client, built on first use rather than at module load.
 *
 * Constructing it at import time would mean every route that merely imports
 * this file throws on a deployment with no keys, which is exactly the 500 the
 * configuration gate exists to prevent. Callers reach this only after
 * `isBillingConfigured()` has answered true.
 */
let client: Stripe | null = null

export function stripeClient(): Stripe {
  if (!client) client = new Stripe(billingConfig().secretKey)
  return client
}
