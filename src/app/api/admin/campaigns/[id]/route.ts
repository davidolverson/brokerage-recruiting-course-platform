import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { getCampaign } from '@/lib/db/campaigns'

export const dynamic = 'force-dynamic'

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    requireRole(await getAdminContext(), 'owner', 'staff')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const campaignId = Number(id)
  if (!Number.isInteger(campaignId)) {
    return NextResponse.json({ error: 'Invalid campaign id' }, { status: 400 })
  }
  const campaign = await getCampaign(campaignId)
  if (!campaign) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ campaign })
}
