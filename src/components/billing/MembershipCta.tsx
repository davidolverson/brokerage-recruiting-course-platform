'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { MembershipView } from '@/lib/billing/view'

/**
 * The call to action on /membership, in whichever of its five states applies.
 *
 * The unconfigured branch renders exactly the two links the page carried before
 * billing existed. That is deliberate: a deployment without Stripe keys should
 * look like the site it was, not a broken version of the site it is becoming.
 *
 * This is one client component rather than a server shell plus two islands,
 * because the only interactive parts are the two buttons and splitting them out
 * would mean three files to say the same thing.
 */

/**
 * Taken verbatim from the two links this block replaced, because /membership is
 * a LIGHT marketing page. Styling these from the dark admin shell would have
 * put white-on-white buttons on a white page, and the unconfigured state has to
 * render exactly what shipped before.
 */
const PRIMARY =
  'inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1F2937] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-60'

const SECONDARY =
  'inline-flex items-center rounded-md border border-black px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-60'

function useBillingAction(endpoint: string) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function run() {
    setBusy(true)
    setError(null)
    try {
      const response = await fetch(endpoint, { method: 'POST' })
      const data = (await response.json()) as { url?: string; error?: string }
      if (!response.ok || !data.url) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        setBusy(false)
        return
      }
      // Left busy deliberately: the page is navigating away, and re-enabling
      // first invites a second click and a second Stripe session.
      window.location.href = data.url
    } catch {
      setError('We could not reach Stripe. Please check your connection and try again.')
      setBusy(false)
    }
  }

  return { busy, error, run }
}

export function MembershipCta({ view }: { view: MembershipView }) {
  const checkout = useBillingAction('/api/billing/checkout')
  const portal = useBillingAction('/api/billing/portal')

  if (!view.configured) {
    return (
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/contact" className={PRIMARY}>
          Talk to the branch
        </Link>
        <Link href="/book-a-tour" className={SECONDARY}>
          See the space
        </Link>
      </div>
    )
  }

  if (!view.signedIn) {
    return (
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/login?redirect=/membership" className={PRIMARY}>
          Sign in to join
        </Link>
        <Link href="/contact" className={SECONDARY}>
          Talk to the branch
        </Link>
      </div>
    )
  }

  if (view.status === 'active' || view.status === 'past_due') {
    return (
      <div className="mt-12">
        <div className="flex flex-wrap gap-4">
          <button type="button" onClick={() => void portal.run()} disabled={portal.busy} className={SECONDARY}>
            {portal.busy
              ? 'Opening…'
              : view.status === 'past_due'
                ? 'Update payment method'
                : 'Manage billing'}
          </button>
          <Link href="/contact" className={SECONDARY}>
            Talk to the branch
          </Link>
        </div>
        {view.status === 'past_due' ? (
          <p className="mt-3 text-sm text-[#92400E]">
            Your last payment did not go through. Your membership is still here.
          </p>
        ) : null}
        {portal.error ? (
          <p role="alert" className="mt-3 text-sm text-[#B42318]">
            {portal.error}
          </p>
        ) : null}
      </div>
    )
  }

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-4">
        <button type="button" onClick={() => void checkout.run()} disabled={checkout.busy} className={PRIMARY}>
          {checkout.busy ? 'Starting checkout…' : 'Join the branch'}
        </button>
        <Link href="/contact" className={SECONDARY}>
          Talk to the branch
        </Link>
      </div>
      {checkout.error ? (
        <p role="alert" className="mt-3 text-sm text-[#B42318]">
          {checkout.error}
        </p>
      ) : null}
    </div>
  )
}
