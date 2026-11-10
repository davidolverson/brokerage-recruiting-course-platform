import { NextRequest, NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { billingConfig, isBillingConfigured } from '@/lib/billing/config'
import {
  activateMembership,
  closeTransactionFeeByInvoice,
  forgetBillingEvent,
  recordBillingEvent,
  setMembershipStatus,
  type MembershipStatus,
} from '@/lib/billing/repository'
import { stripeClient } from '@/lib/billing/stripe'

export const dynamic = 'force-dynamic'

/**
 * Stripe's view of the truth, applied to ours.
 *
 * This is the only path that moves a membership to `active`. The redirect back
 * from Checkout is not evidence of payment, so nothing is written there.
 *
 * Two rules hold this route together:
 *
 *  1. The body is read as raw text. Signature verification runs against the
 *     exact bytes Stripe signed, so `request.json()` must never be called here;
 *     a re-serialised body fails verification in a way that looks like a
 *     misconfigured secret.
 *  2. The event id is recorded before any other work, and released again if the
 *     handler throws. Claiming it and failing would mean Stripe's retry is
 *     dismissed as a duplicate and the work is lost silently.
 */

export type WebhookEffect = 'activate' | 'status' | 'payment_failed' | 'invoice_paid' | 'ignore'

export function webhookEffect(type: string): WebhookEffect {
  switch (type) {
    case 'checkout.session.completed':
      return 'activate'
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      return 'status'
    case 'invoice.payment_failed':
      return 'payment_failed'
    case 'invoice.paid':
      return 'invoice_paid'
    default:
      return 'ignore'
  }
}

/**
 * Anything not plainly live or plainly behind on payment reads as `canceled`.
 * The failure that matters is showing someone as a member when they are not, so
 * an unfamiliar status fails closed.
 */
export function stripeStatusToMembershipStatus(status: string): MembershipStatus {
  switch (status) {
    case 'active':
    case 'trialing':
      return 'active'
    case 'past_due':
    case 'unpaid':
      return 'past_due'
    default:
      return 'canceled'
  }
}

/** Stripe sends ids as either a string or an expanded object. */
function idOf(value: string | { id: string } | null | undefined): string | null {
  if (!value) return null
  return typeof value === 'string' ? value : value.id
}

export async function POST(request: NextRequest) {
  // There is no session on this path, so there is no authorisation check to come
  // first and configuration is the right gate to lead with.
  if (!isBillingConfigured()) {
    return NextResponse.json({ error: 'Billing is not configured.' }, { status: 503 })
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature.' }, { status: 400 })
  }

  const raw = await request.text()

  let event: Stripe.Event
  try {
    event = stripeClient().webhooks.constructEvent(raw, signature, billingConfig().webhookSecret)
  } catch (err) {
    // Deliberately not recorded: an unverified event is not evidence that Stripe
    // sent anything, and recording it would let a forged id suppress the real
    // delivery that follows.
    console.error('[BILLING WEBHOOK] signature verification failed', err)
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  try {
    if (!(await recordBillingEvent(event.id, event.type))) {
      return NextResponse.json({ received: true, duplicate: true })
    }

    switch (webhookEffect(event.type)) {
      case 'activate': {
        const checkout = event.data.object as Stripe.Checkout.Session
        const userId = checkout.client_reference_id
        const subscriptionId = idOf(checkout.subscription as string | { id: string } | null)
        if (!userId || !subscriptionId) {
          console.error('[BILLING WEBHOOK] checkout completed without a user or subscription', {
            sessionId: checkout.id,
          })
          break
        }
        const membership = await activateMembership({ userId, subscriptionId })
        /**
         * A refused second subscription is money leaving the member's account
         * every month until somebody cancels it, so it is logged the moment it
         * is seen as well as being shown on the roster.
         */
        if (membership.conflictingSubscriptionId === subscriptionId) {
          console.warn(
            '[BILLING WEBHOOK] a second subscription completed for a member who already has one; it was refused, not applied. Cancel and refund it in Stripe.',
            {
              userId,
              keptSubscription: membership.stripeSubscriptionId,
              refusedSubscription: subscriptionId,
            },
          )
        }
        break
      }

      case 'status': {
        const subscription = event.data.object as Stripe.Subscription
        await setMembershipStatus(
          subscription.id,
          event.type === 'customer.subscription.deleted'
            ? 'canceled'
            : stripeStatusToMembershipStatus(subscription.status),
        )
        break
      }

      case 'payment_failed': {
        const invoice = event.data.object as Stripe.Invoice & {
          subscription?: string | { id: string } | null
        }
        const subscriptionId = idOf(invoice.subscription)
        if (subscriptionId) await setMembershipStatus(subscriptionId, 'past_due')
        break
      }

      case 'invoice_paid': {
        const invoice = event.data.object as Stripe.Invoice & {
          subscription?: string | { id: string } | null
        }
        await closeTransactionFeeByInvoice(invoice.id ?? '')
        const subscriptionId = idOf(invoice.subscription)
        if (subscriptionId) await setMembershipStatus(subscriptionId, 'active')
        break
      }

      case 'ignore':
        break
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    /**
     * Release the claimed event id before answering, so the retry a 500 invites
     * can actually run. Leaving it claimed turns a transient error into a
     * membership paid for in Stripe and never activated here.
     */
    await forgetBillingEvent(event.id).catch((cleanupErr) => {
      console.error('[BILLING WEBHOOK] could not release event id for retry', event.id, cleanupErr)
    })
    console.error('[BILLING WEBHOOK]', event.type, err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
