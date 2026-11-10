import { getServerSession } from '@/lib/auth-server'
import { isBillingConfigured } from './config'
import { findMembershipByUserId, type MembershipStatus } from './repository'

/**
 * Everything /membership needs to decide what to offer a visitor.
 *
 * When billing is unconfigured this does no work at all: no session lookup, no
 * query. That is what keeps the page identical to the one that shipped before
 * billing existed, and keeps it statically renderable where there are no keys.
 */
export interface MembershipView {
  configured: boolean
  signedIn: boolean
  status: MembershipStatus | null
}

export async function membershipView(): Promise<MembershipView> {
  if (!isBillingConfigured()) {
    return { configured: false, signedIn: false, status: null }
  }

  const session = await getServerSession()
  const membership = session ? await findMembershipByUserId(session.user.id) : null

  return {
    configured: true,
    signedIn: Boolean(session),
    status: membership?.status ?? null,
  }
}
