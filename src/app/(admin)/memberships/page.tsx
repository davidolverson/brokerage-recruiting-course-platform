'use client'

import { useEffect, useState } from 'react'
import { adminFetch, isSessionExpired } from '@/lib/admin-fetch'
import type { Membership, TransactionFee } from '@/lib/billing/repository'

/**
 * The membership roster.
 *
 * Shaped like the other admin screens here: a client page talking to
 * /api/admin/* through adminFetch, so an expired session announces itself
 * instead of drawing an empty list with buttons that quietly do nothing.
 *
 * The unconfigured state says so plainly rather than rendering an empty roster,
 * which would read as "nobody has joined".
 *
 * Body text avoids #6B7280 deliberately: it measures 3.9:1 on this background,
 * which fails AA. #9CA3AF and #D1D5DB clear it.
 */

const STATUS_LABELS: Record<string, string> = {
  pending: 'Started, not paid',
  active: 'Active',
  past_due: 'Payment failed',
  canceled: 'Canceled',
}

const STATUS_COLORS: Record<string, string> = {
  pending: 'text-[#9CA3AF]',
  active: 'text-[#5FD08A]',
  past_due: 'text-[#E8A33D]',
  canceled: 'text-[#9CA3AF]',
}

export default function MembershipsPage() {
  const [memberships, setMemberships] = useState<Membership[] | null>(null)
  const [fees, setFees] = useState<TransactionFee[]>([])
  const [unconfigured, setUnconfigured] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [billing, setBilling] = useState<number | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [closingRefs, setClosingRefs] = useState<Record<number, string>>({})
  const [confirmFor, setConfirmFor] = useState<number | null>(null)

  /**
   * The fetch is started here and every state update happens in a callback.
   * Wrapping it in a useCallback the effect then calls trips
   * react-hooks/set-state-in-effect, which cannot see through the indirection.
   */
  useEffect(() => {
    adminFetch('/api/admin/billing/memberships', { cache: 'no-store' })
      .then(async (response) => {
        if (response.status === 503) {
          setUnconfigured(true)
          setMemberships([])
          return
        }
        const data = (await response.json()) as {
          memberships?: Membership[]
          fees?: TransactionFee[]
          error?: string
        }
        if (!response.ok) throw new Error(data.error || 'Could not load the roster.')
        setUnconfigured(false)
        setMemberships(data.memberships ?? [])
        setFees(data.fees ?? [])
      })
      .catch((err) => {
        if (isSessionExpired(err)) return
        setMemberships([])
        setError(err instanceof Error ? err.message : 'Could not load the roster.')
      })
  }, [])

  async function billTransactionFee(membership: Membership) {
    setBilling(membership.id)
    setNotice(null)
    setError(null)
    try {
      const response = await adminFetch('/api/admin/billing/transaction-fee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          membershipId: membership.id,
          closingRef: closingRefs[membership.id] ?? '',
          confirmDuplicate: confirmFor === membership.id,
        }),
      })
      const data = (await response.json()) as { error?: string; needsConfirmation?: boolean }
      if (!response.ok) {
        setError(data.error ?? 'Could not raise the invoice.')
        // A refusal that can be overridden says so, rather than looking broken.
        if (data.needsConfirmation) setConfirmFor(membership.id)
        return
      }
      setNotice(`Invoice sent to ${membership.email} for $500.`)
      setConfirmFor(null)
      setClosingRefs((refs) => ({ ...refs, [membership.id]: '' }))
    } catch (err) {
      if (isSessionExpired(err)) return
      setError('Could not reach Stripe.')
    } finally {
      setBilling(null)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold text-white">Memberships</h1>
      <p className="mt-2 text-sm text-[#9CA3AF]">
        Branch memberships taken through the website. Stripe holds the money and the invoices;
        this is the roster.
      </p>

      {unconfigured ? (
        <div className="mt-8 rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-6">
          <p className="text-sm font-semibold text-white">Billing is not configured yet.</p>
          <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
            No Stripe keys are set on this deployment, so nobody can have joined through the
            website. This is not an empty roster: it is a roster that cannot exist yet. Set
            STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET and STRIPE_PRICE_MEMBERSHIP_MONTHLY to turn
            it on.
          </p>
        </div>
      ) : null}

      {error ? (
        <p role="alert" className="mt-6 text-sm text-[#E8705F]">
          {error}
        </p>
      ) : null}
      {notice ? (
        <p role="status" className="mt-6 text-sm text-[#5FD08A]">
          {notice}
        </p>
      ) : null}

      {memberships === null ? (
        <p className="mt-8 text-sm text-[#9CA3AF]">Loading the roster…</p>
      ) : null}

      {memberships !== null && !unconfigured && memberships.length === 0 ? (
        <p className="mt-8 text-sm text-[#9CA3AF]">
          Nobody has joined through the website yet. Members the branch invoices by hand do not
          appear here.
        </p>
      ) : null}

      {memberships !== null && memberships.length > 0 ? (
        <ul className="mt-8 space-y-3">
          {memberships.map((membership) => (
            <li
              key={membership.id}
              className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-sm font-semibold text-[#D1D5DB]">{membership.email}</p>
                <p
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    STATUS_COLORS[membership.status] ?? 'text-[#9CA3AF]'
                  }`}
                >
                  {STATUS_LABELS[membership.status] ?? membership.status}
                </p>
              </div>

              {membership.conflictingSubscriptionId ? (
                <p className="mt-3 rounded border border-[#E8705F] bg-[#2a0f0c] px-3 py-2 text-xs font-semibold text-[#E8705F]">
                  Billed twice: a second subscription ({membership.conflictingSubscriptionId})
                  completed for this member and was refused rather than allowed to replace the
                  first. They are paying for both until it is cancelled and refunded in Stripe.
                </p>
              ) : null}

              {fees.filter((fee) => fee.membershipId === membership.id).length > 0 ? (
                <ul className="mt-3 space-y-1">
                  {fees
                    .filter((fee) => fee.membershipId === membership.id)
                    .map((fee) => (
                      <li key={fee.id} className="text-xs text-[#9CA3AF]">
                        ${(fee.amountCents / 100).toFixed(0)} transaction fee
                        {fee.closingRef ? ` · ${fee.closingRef}` : ''} ·{' '}
                        {fee.status === 'paid' ? 'paid' : 'awaiting payment'} ·{' '}
                        {new Date(fee.createdAt).toLocaleDateString()}
                      </li>
                    ))}
                </ul>
              ) : null}

              {membership.status === 'active' ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <input
                    type="text"
                    value={closingRefs[membership.id] ?? ''}
                    onChange={(event) =>
                      setClosingRefs((refs) => ({ ...refs, [membership.id]: event.target.value }))
                    }
                    placeholder="Closing reference (optional)"
                    className="min-w-[220px] flex-1 rounded-lg border border-[#222] bg-[#111] px-3 py-2 text-sm text-white placeholder-[#9CA3AF] outline-none focus:border-[#555]"
                  />
                  <button
                    type="button"
                    onClick={() => void billTransactionFee(membership)}
                    disabled={billing === membership.id}
                    className="rounded-lg border border-[#333] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#666] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {billing === membership.id
                      ? 'Sending…'
                      : confirmFor === membership.id
                        ? 'Send it anyway'
                        : 'Bill $500 transaction fee'}
                  </button>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
