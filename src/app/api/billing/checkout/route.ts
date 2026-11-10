import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { billingConfig, isBillingConfigured } from '@/lib/billing/config'
import {
  findMembershipByUserId,
  upsertPendingMembership,
  type MembershipStatus,
} from '@/lib/billing/repository'
import { stripeClient } from '@/lib/billing/stripe'

export const dynamic = 'force-dynamic'

/**
 * Starting a branch membership.
 *
 * Signing in is required, so every membership is attached to a known user
 * rather than to whatever address was typed on the Stripe page. That is what
 * makes "manage my billing" safe to offer afterwards.
 */

export interface CheckoutDecision {
  action: 'checkout' | 'reject'
  status?: number
  error?: string
}

/**
 * The whole policy, as a pure function, so it can be exercised without Stripe
 * or a database.
 *
 * The session is checked before configuration deliberately. The other order
 * tells an anonymous caller whether this deployment has billing attached, and
 * makes the authentication path impossible to exercise anywhere billing is
 * unconfigured, because every request 503s before reaching it.
 */
export function checkoutDecision(input: {
  hasSession: boolean
  configured: boolean
  existingStatus: MembershipStatus | null
}): CheckoutDecision {
  if (!input.hasSession) {
    return { action: 'reject', status: 401, error: 'Sign in to join the branch.' }
  }
  if (!input.configured) {
    return { action: 'reject', status: 503, error: 'Billing is not configured.' }
  }
  if (input.existingStatus === 'active' || input.existingStatus === 'past_due') {
    return {
      action: 'reject',
      status: 409,
      error:
        'This account already has a branch membership. Contact the branch to change or restart it.',
    }
  }
  return { action: 'checkout' }
}

/**
 * Where Stripe sends the agent back to. The configured site URL is preferred
 * because the request origin behind a proxy is whatever the proxy says it is.
 */
function siteOrigin(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  return configured && configured.length > 0
    ? configured.replace(/\/$/, '')
    : request.nextUrl.origin
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    const configured = isBillingConfigured()

    const membership = session && configured ? await findMembershipByUserId(session.user.id) : null

    const decision = checkoutDecision({
      hasSession: Boolean(session),
      configured,
      existingStatus: membership?.status ?? null,
    })

    if (decision.action === 'reject' || !session) {
      return NextResponse.json({ error: decision.error }, { status: decision.status ?? 400 })
    }

    const stripe = stripeClient()
    const config = billingConfig()
    const email = session.user.email
    const userId = session.user.id

    /**
     * Reuse the customer this user already has, by Stripe's own record rather
     * than only by ours. An agent the branch already invoices has a customer in
     * Stripe and no row here, and creating a second customer for them is how
     * one person ends up billed twice.
     */
    const existing = await stripe.customers.list({ email, limit: 10 })
    const matched =
      existing.data.find((customer) => customer.metadata?.user_id === userId) ??
      existing.data.find((customer) => customer.email === email) ??
      null

    /**
     * The guard that makes a self-serve button safe next to an existing
     * invoicing practice. Our own table can be empty for someone already billed
     * by hand, so the question has to be put to Stripe.
     */
    if (matched) {
      const subscriptions = await stripe.subscriptions.list({
        customer: matched.id,
        status: 'all',
        limit: 10,
      })
      const live = subscriptions.data.find((subscription) =>
        ['active', 'trialing', 'past_due', 'unpaid'].includes(subscription.status),
      )
      if (live) {
        return NextResponse.json(
          {
            error:
              'This email is already billed for a branch membership. Contact the branch to make a change.',
          },
          { status: 409 },
        )
      }
    }

    const customer =
      matched ??
      (await stripe.customers.create({
        email,
        name: session.user.name ?? undefined,
        metadata: { user_id: userId },
      }))

    await upsertPendingMembership({ userId, email, stripeCustomerId: customer.id })

    const origin = siteOrigin(request)
    const checkout = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customer.id,
      client_reference_id: userId,
      line_items: [{ price: config.monthlyPriceId, quantity: 1 }],
      subscription_data: { metadata: { user_id: userId } },
      success_url: `${origin}/membership?joined=1`,
      cancel_url: `${origin}/membership?canceled=1`,
    })

    return NextResponse.json({ url: checkout.url })
  } catch (err) {
    console.error('[BILLING CHECKOUT]', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
