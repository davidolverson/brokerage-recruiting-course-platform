import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { getCampaign } from '@/lib/db/campaigns'
import { processCampaignBatch } from '@/lib/campaign-sender'

export const dynamic = 'force-dynamic'

export async function POST(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
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
  if (campaign.status !== 'sending') {
    return NextResponse.json({ error: 'Campaign is not in a sending state' }, { status: 400 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  const result = await processCampaignBatch(campaign.id, siteUrl)
  return NextResponse.json(result)
}
