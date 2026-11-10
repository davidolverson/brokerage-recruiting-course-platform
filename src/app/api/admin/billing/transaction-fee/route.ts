import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { isBillingConfigured, TRANSACTION_FEE_CENTS } from '@/lib/billing/config'
import {
  countRecentFeesFor,
  findFeeByClosingRef,
  findMembershipById,
  recordTransactionFee,
} from '@/lib/billing/repository'
import { stripeClient } from '@/lib/billing/stripe'

export const dynamic = 'force-dynamic'

/**
 * Billing the $500 per-transaction fee.
 *
 * The fee is charged when a deal closes, which no public checkout can know has
 * happened, so it is staff-initiated by design: an invoice Stripe emails to the
 * member rather than a card charge taken without warning.
 *
 * Narrower than the roster on purpose. Reading who is a member is part of
 * running the branch; charging one of them $500 is not.
 */
const AUTHORS = ['owner', 'team_leader'] as const

export async function POST(request: NextRequest) {
  try {
    // Authorisation before configuration, as elsewhere in this directory.
    const ctx = requireRole(await getAdminContext(), ...AUTHORS)
    if (!isBillingConfigured()) {
      return NextResponse.json({ error: 'Billing is not configured.' }, { status: 503 })
    }

    const body = (await request.json()) as {
      membershipId?: unknown
      closingRef?: unknown
      confirmDuplicate?: unknown
    }
    const confirmDuplicate = body.confirmDuplicate === true
    const membershipId = Number(body.membershipId)
    if (!Number.isInteger(membershipId) || membershipId <= 0) {
      return NextResponse.json({ error: 'A membership is required.' }, { status: 400 })
    }

    const closingRef =
      typeof body.closingRef === 'string' && body.closingRef.trim().length > 0
        ? body.closingRef.trim().slice(0, 200)
        : null

    const membership = await findMembershipById(membershipId)
    if (!membership) {
      return NextResponse.json({ error: 'That membership does not exist.' }, { status: 404 })
    }
    if (!membership.stripeCustomerId) {
      return NextResponse.json(
        { error: 'That member has no Stripe customer yet, so there is nobody to invoice.' },
        { status: 409 },
      )
    }

    /**
     * The duplicate guard. Membership checkout refuses to bill someone twice
     * and this route did not, which made the staff path the easier way to
     * charge a member $1,000 for one closing: two clicks sent two invoices,
     * and nothing in the product showed the first.
     */
    if (closingRef) {
      const existing = await findFeeByClosingRef(membership.id, closingRef)
      if (existing) {
        return NextResponse.json(
          {
            error: `A $${(existing.amountCents / 100).toFixed(0)} fee for closing "${closingRef}" was already invoiced to this member.`,
          },
          { status: 409 },
        )
      }
    } else if (!confirmDuplicate && (await countRecentFeesFor(membership.id)) > 0) {
      return NextResponse.json(
        {
          error:
            'Another transaction fee was invoiced to this member in the last five minutes. Add a closing reference, or confirm to send it anyway.',
          needsConfirmation: true,
        },
        { status: 409 },
      )
    }

    const stripe = stripeClient()
    const description = closingRef ? `Transaction fee — ${closingRef}` : 'Transaction fee'

    /**
     * The draft invoice is created FIRST, and the line item is then attached to
     * it by id.
     *
     * The other order is the obvious one and it is wrong. A bare
     * `invoiceItems.create({ customer })` leaves a PENDING item on the customer,
     * and the next invoice drawn for that customer sweeps up every pending item
     * — including the subscription's own monthly invoice if it happens to
     * finalise in the window. The $500 would then be charged to the card
     * automatically on the monthly cycle instead of being sent as an invoice due
     * in 14 days, which is a charge the member never agreed to take
     * automatically.
     *
     * `invoices.create` returns a DRAFT, so creating it first cannot finalise an
     * empty invoice.
     */
    const invoice = await stripe.invoices.create({
      customer: membership.stripeCustomerId,
      collection_method: 'send_invoice',
      days_until_due: 14,
      // Belt and braces: never absorb unrelated pending items into this invoice.
      pending_invoice_items_behavior: 'exclude',
      metadata: { membership_id: String(membership.id), closing_ref: closingRef ?? '' },
    })

    if (!invoice.id) {
      throw new Error('Stripe returned an invoice without an id')
    }

    await stripe.invoiceItems.create({
      customer: membership.stripeCustomerId,
      invoice: invoice.id,
      amount: TRANSACTION_FEE_CENTS,
      currency: 'usd',
      description,
    })

    const sent = await stripe.invoices.sendInvoice(invoice.id)

    await recordTransactionFee({
      membershipId: membership.id,
      stripeInvoiceId: invoice.id,
      amountCents: TRANSACTION_FEE_CENTS,
      closingRef,
      createdBy: ctx.userId,
    })

    return NextResponse.json(
      { invoiceId: invoice.id, hostedInvoiceUrl: sent.hosted_invoice_url ?? null },
      { status: 201 },
    )
  } catch (err) {
    if (err instanceof RoleError) {
      return NextResponse.json({ error: err.message }, { status: err.status })
    }
    console.error('[BILLING TRANSACTION FEE]', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
