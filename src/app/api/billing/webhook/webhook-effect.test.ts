import { describe, expect, it } from 'vitest'
import { stripeStatusToMembershipStatus, webhookEffect } from './route'

/**
 * Which Stripe events this app acts on, and how it reads a subscription.
 *
 * Stripe sends far more event types than any one integration cares about, and
 * answering 200-and-ignore is what stops it retrying the ones we have no
 * opinion about. The explicit list is also the audit: a type absent from it
 * provably changes nothing.
 */
describe('webhookEffect', () => {
  it('activates a membership when checkout completes', () => {
    expect(webhookEffect('checkout.session.completed')).toBe('activate')
  })

  it('tracks subscription status changes', () => {
    expect(webhookEffect('customer.subscription.updated')).toBe('status')
    expect(webhookEffect('customer.subscription.deleted')).toBe('status')
  })

  it('marks a failed payment', () => {
    expect(webhookEffect('invoice.payment_failed')).toBe('payment_failed')
  })

  it('closes a transaction fee when its invoice is paid', () => {
    expect(webhookEffect('invoice.paid')).toBe('invoice_paid')
  })

  it('ignores everything else', () => {
    const ignored = [
      'payment_intent.succeeded',
      'customer.created',
      'charge.refunded',
      'invoice.finalized',
      'customer.subscription.created',
      '',
    ]
    for (const type of ignored) {
      expect(webhookEffect(type), `expected ${type || '(empty)'} to be ignored`).toBe('ignore')
    }
  })
})

/**
 * Stripe has more subscription states than this site needs. Anything not
 * plainly live or plainly behind on payment reads as canceled, because the
 * failure that matters is showing someone as a member when they are not.
 */
describe('stripeStatusToMembershipStatus', () => {
  it('reads a live subscription as active', () => {
    expect(stripeStatusToMembershipStatus('active')).toBe('active')
    expect(stripeStatusToMembershipStatus('trialing')).toBe('active')
  })

  it('reads a missed payment as past_due', () => {
    expect(stripeStatusToMembershipStatus('past_due')).toBe('past_due')
    expect(stripeStatusToMembershipStatus('unpaid')).toBe('past_due')
  })

  it('reads anything else as canceled rather than assuming membership', () => {
    for (const status of ['canceled', 'incomplete', 'incomplete_expired', 'paused', 'nonsense']) {
      expect(
        stripeStatusToMembershipStatus(status),
        `expected ${status} to read as canceled`,
      ).toBe('canceled')
    }
  })
})
