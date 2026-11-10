import { neon } from '@/db/sql'

/**
 * Persistence for branch memberships.
 *
 * Stripe is the source of truth for money, so this deliberately stores very
 * little: who is a member, what state their subscription is in, and which
 * webhook events have already been handled. Anything that can be asked of
 * Stripe is asked of Stripe.
 *
 * Every write that moves a membership to `active` happens on the webhook path,
 * never on the request that starts a checkout. A browser tab closed on the
 * Stripe page is the normal case, not an edge one, and treating the redirect
 * back as confirmation is how a site ends up with members who never paid.
 *
 * ⛔ There is no legacy-seat column here. This membership has no
 * capped entry fee, so there is no cap to count and nothing to flag for refund.
 *
 * The SQL client comes from `@/db/sql`, not from `@neondatabase/serverless`
 * directly as the rest of this repo still does. That driver speaks HTTP to Neon
 * and cannot reach an ordinary Postgres, which meant none of the code below
 * could be executed anywhere but production. Money code that has never run is
 * not code anyone should trust, so billing selects its driver from the
 * connection string: Neon in production, node-postgres against a throwaway
 * database in tests. Nothing about the production path changes.
 */

export type MembershipStatus = 'pending' | 'active' | 'past_due' | 'canceled'

export interface Membership {
  id: number
  userId: string
  email: string
  stripeCustomerId: string | null
  stripeSubscriptionId: string | null
  status: MembershipStatus
  /**
   * A second live subscription that arrived for this member and was refused
   * rather than allowed to overwrite the first. Someone has to cancel and
   * refund it in Stripe; until they do, the member is paying twice.
   */
  conflictingSubscriptionId: string | null
}

function sql() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) throw new Error('DATABASE_URL is not configured')
  return neon(databaseUrl)
}

type Row = Record<string, unknown>

const STATUSES: readonly MembershipStatus[] = ['pending', 'active', 'past_due', 'canceled']

/**
 * An unrecognised status reads as `pending` rather than being trusted through.
 * The column is free text, so the alternative is letting a typo widen into a
 * member who appears active with no subscription behind them.
 */
function toStatus(value: unknown): MembershipStatus {
  const candidate = String(value)
  return STATUSES.includes(candidate as MembershipStatus)
    ? (candidate as MembershipStatus)
    : 'pending'
}

function toMembership(row: Row): Membership {
  return {
    id: Number(row.id),
    userId: String(row.user_id),
    email: String(row.email),
    stripeCustomerId: row.stripe_customer_id ? String(row.stripe_customer_id) : null,
    stripeSubscriptionId: row.stripe_subscription_id ? String(row.stripe_subscription_id) : null,
    status: toStatus(row.status),
    conflictingSubscriptionId: row.conflicting_subscription_id
      ? String(row.conflicting_subscription_id)
      : null,
  }
}

export async function findMembershipByUserId(userId: string): Promise<Membership | null> {
  const rows = (await sql()`
    SELECT * FROM memberships WHERE user_id = ${userId}
  `) as Row[]
  return rows.length > 0 ? toMembership(rows[0]) : null
}

export async function findMembershipById(id: number): Promise<Membership | null> {
  const rows = (await sql()`
    SELECT * FROM memberships WHERE id = ${id}
  `) as Row[]
  return rows.length > 0 ? toMembership(rows[0]) : null
}

export async function listMemberships(): Promise<Membership[]> {
  const rows = (await sql()`
    SELECT * FROM memberships ORDER BY created_at DESC
  `) as Row[]
  return rows.map(toMembership)
}

/**
 * Records the intent to join, before the agent reaches Stripe. Deliberately
 * leaves `status` at `pending`, so a checkout that is never completed leaves
 * nothing behind that reads as a member.
 */
export async function upsertPendingMembership(input: {
  userId: string
  email: string
  stripeCustomerId: string
}): Promise<Membership> {
  const rows = (await sql()`
    INSERT INTO memberships (user_id, email, stripe_customer_id, status)
    VALUES (${input.userId}, ${input.email}, ${input.stripeCustomerId}, 'pending')
    ON CONFLICT (user_id) DO UPDATE
      SET email = ${input.email},
          stripe_customer_id = ${input.stripeCustomerId},
          updated_at = NOW()
    RETURNING *
  `) as Row[]
  return toMembership(rows[0])
}

/**
 * The only path to `active`, driven by the webhook.
 *
 * ⛔ This deliberately refuses to overwrite a DIFFERENT live subscription.
 *
 * The row holds one `stripe_subscription_id`, so a plain write made a second
 * completed checkout silently destructive: the first subscription kept billing
 * the member every month and nothing in the product mentioned it again. The
 * checkout guard reads Stripe before opening a session, but two attempts close
 * enough together both pass that read, and the Join button re-enables after a
 * failed attempt.
 *
 * So the incumbent stays the membership of record and the newcomer is recorded
 * in `conflicting_subscription_id` for staff to cancel and refund. Cancelling a
 * paying customer automatically, with no human looking, is the worse failure.
 *
 * It is one statement on purpose. Reading the row and then writing it would let
 * two webhooks for the same user straddle the gap and both decide they were
 * first. Both CASE arms see the pre-update row, so they agree.
 */
export async function activateMembership(input: {
  userId: string
  subscriptionId: string
}): Promise<Membership> {
  const rows = (await sql()`
    UPDATE memberships
       SET
         stripe_subscription_id = CASE
           WHEN stripe_subscription_id IS NULL
             OR stripe_subscription_id = ${input.subscriptionId}
             OR status NOT IN ('active', 'past_due')
           THEN ${input.subscriptionId}
           ELSE stripe_subscription_id END,
         status = CASE
           WHEN stripe_subscription_id IS NULL
             OR stripe_subscription_id = ${input.subscriptionId}
             OR status NOT IN ('active', 'past_due')
           THEN 'active'
           ELSE status END,
         conflicting_subscription_id = CASE
           WHEN stripe_subscription_id IS NULL
             OR stripe_subscription_id = ${input.subscriptionId}
             OR status NOT IN ('active', 'past_due')
           THEN conflicting_subscription_id
           ELSE ${input.subscriptionId} END,
         conflicting_seen_at = CASE
           WHEN stripe_subscription_id IS NULL
             OR stripe_subscription_id = ${input.subscriptionId}
             OR status NOT IN ('active', 'past_due')
           THEN conflicting_seen_at
           ELSE NOW() END,
         updated_at = NOW()
     WHERE user_id = ${input.userId}
    RETURNING *
  `) as Row[]
  if (rows.length === 0) {
    throw new Error(`No membership to activate for user ${input.userId}`)
  }
  return toMembership(rows[0])
}

export async function setMembershipStatus(
  subscriptionId: string,
  status: MembershipStatus,
): Promise<void> {
  await sql()`
    UPDATE memberships
       SET status = ${status}, updated_at = NOW()
     WHERE stripe_subscription_id = ${subscriptionId}
  `
}

/**
 * The replay guard, and the reason the webhook is safe to retry.
 *
 * Returns false when this event has been seen before. The insert happens before
 * any other work on the webhook path, so a redelivered event cannot apply the
 * same effect twice.
 */
export async function recordBillingEvent(eventId: string, type: string): Promise<boolean> {
  const rows = (await sql()`
    INSERT INTO billing_events (stripe_event_id, type)
    VALUES (${eventId}, ${type})
    ON CONFLICT (stripe_event_id) DO NOTHING
    RETURNING stripe_event_id
  `) as Row[]
  return rows.length === 1
}

/**
 * Releases an event id so Stripe's retry can do the work again.
 *
 * The replay guard claims the id before the handler runs, which is what makes a
 * redelivery safe. The cost is that a handler which throws has already claimed
 * its id, so without this the retry would be dismissed as a duplicate and the
 * work lost in silence: a membership paid for in Stripe and never activated.
 */
export async function forgetBillingEvent(eventId: string): Promise<void> {
  await sql()`DELETE FROM billing_events WHERE stripe_event_id = ${eventId}`
}

export interface TransactionFee {
  id: number
  membershipId: number
  stripeInvoiceId: string | null
  amountCents: number
  closingRef: string | null
  status: string
  createdAt: string
}

function toTransactionFee(row: Row): TransactionFee {
  return {
    id: Number(row.id),
    membershipId: Number(row.membership_id),
    stripeInvoiceId: row.stripe_invoice_id ? String(row.stripe_invoice_id) : null,
    amountCents: Number(row.amount_cents),
    closingRef: row.closing_ref ? String(row.closing_ref) : null,
    status: String(row.status),
    createdAt: String(row.created_at),
  }
}

export async function listTransactionFees(): Promise<TransactionFee[]> {
  const rows = (await sql()`
    SELECT * FROM transaction_fees ORDER BY created_at DESC
  `) as Row[]
  return rows.map(toTransactionFee)
}

/**
 * An existing fee for the same closing, used to refuse a duplicate.
 *
 * Without this, raising the $500 fee twice for one closing simply sends two
 * invoices. The subscription checkout has a duplicate guard and this did not,
 * which made the staff-facing path the easier way to bill somebody twice.
 */
export async function findFeeByClosingRef(
  membershipId: number,
  closingRef: string,
): Promise<TransactionFee | null> {
  const rows = (await sql()`
    SELECT * FROM transaction_fees
     WHERE membership_id = ${membershipId} AND closing_ref = ${closingRef}
     LIMIT 1
  `) as Row[]
  return rows.length > 0 ? toTransactionFee(rows[0]) : null
}

/**
 * How many fees were raised for this member in the last few minutes. The
 * honest fallback when there is no closing reference to match on: a second
 * $500 invoice seconds after the first is far more likely to be a double click
 * than two closings.
 */
export async function countRecentFeesFor(membershipId: number): Promise<number> {
  const rows = (await sql()`
    SELECT COUNT(*)::int AS n FROM transaction_fees
     WHERE membership_id = ${membershipId} AND created_at > NOW() - INTERVAL '5 minutes'
  `) as Row[]
  return Number(rows[0]?.n ?? 0)
}

export async function recordTransactionFee(input: {
  membershipId: number
  stripeInvoiceId: string
  amountCents: number
  closingRef: string | null
  createdBy: string
}): Promise<void> {
  await sql()`
    INSERT INTO transaction_fees
      (membership_id, stripe_invoice_id, amount_cents, closing_ref, created_by)
    VALUES
      (${input.membershipId}, ${input.stripeInvoiceId}, ${input.amountCents},
       ${input.closingRef}, ${input.createdBy})
  `
}

export async function closeTransactionFeeByInvoice(invoiceId: string): Promise<void> {
  await sql()`
    UPDATE transaction_fees SET status = 'paid' WHERE stripe_invoice_id = ${invoiceId}
  `
}
