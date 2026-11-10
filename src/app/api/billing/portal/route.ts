import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { isBillingConfigured } from '@/lib/billing/config'
import { findMembershipByUserId } from '@/lib/billing/repository'
import { stripeClient } from '@/lib/billing/stripe'

export const dynamic = 'force-dynamic'

/**
 * A member's own Stripe customer portal.
 *
 * The customer id is read from the signed-in session's membership row and is
 * never accepted from the request. Taking it from the body would turn this into
 * "open anyone's billing if you can guess their customer id", which is the whole
 * reason joining requires an account.
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Sign in to manage your billing.' }, { status: 401 })
    }
    if (!isBillingConfigured()) {
      return NextResponse.json({ error: 'Billing is not configured.' }, { status: 503 })
    }

    const membership = await findMembershipByUserId(session.user.id)
    if (!membership?.stripeCustomerId) {
      return NextResponse.json({ error: 'No membership found for this account.' }, { status: 404 })
    }

    const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim()
    const origin =
      configured && configured.length > 0
        ? configured.replace(/\/$/, '')
        : request.nextUrl.origin

    const portal = await stripeClient().billingPortal.sessions.create({
      customer: membership.stripeCustomerId,
      return_url: `${origin}/membership`,
    })

    return NextResponse.json({ url: portal.url })
  } catch (err) {
    console.error('[BILLING PORTAL]', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
