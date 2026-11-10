import { NextResponse } from 'next/server'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { ADMIN_SURFACE_ROLES } from '@/lib/roles'
import { isBillingConfigured } from '@/lib/billing/config'
import { listMemberships, listTransactionFees } from '@/lib/billing/repository'

export const dynamic = 'force-dynamic'

/**
 * The membership roster, for the admin screen.
 *
 * Gated on ADMIN_SURFACE_ROLES rather than on "is there an admin context",
 * because `broker` exists for the DPOR course and `agent` exists for the
 * handbook and both are active admin_users rows. This roster carries member
 * emails and billing state, so neither belongs in it.
 */
export async function GET() {
  try {
    // Authorisation before configuration: the other order tells an
    // unauthenticated caller whether this deployment has billing attached.
    requireRole(await getAdminContext(), ...ADMIN_SURFACE_ROLES)
    if (!isBillingConfigured()) {
      return NextResponse.json({ error: 'Billing is not configured.' }, { status: 503 })
    }
    /**
     * The fees ship with the roster deliberately. They were being written and
     * never read anywhere in the product, so staff could raise a $500 invoice
     * and then had no way to see that they had, which is also how the same
     * closing gets billed twice.
     */
    const [memberships, fees] = await Promise.all([listMemberships(), listTransactionFees()])
    return NextResponse.json({ memberships, fees })
  } catch (err) {
    if (err instanceof RoleError) {
      return NextResponse.json({ error: err.message }, { status: err.status })
    }
    console.error('[BILLING ROSTER]', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
