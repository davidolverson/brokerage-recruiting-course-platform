import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'
import { getAttributionStats } from '@/lib/db/analytics'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  if (!ctx || ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  const rawDays = parseInt(new URL(request.url).searchParams.get('days') ?? '30')
  const days = isNaN(rawDays) || rawDays < 1 ? 30 : Math.min(rawDays, 365)
  const stats = await getAttributionStats(days)

  // ─── Derived summary (computed, no new query) ──────────────────────────────
  const sum = (rows: { count: number }[]) => rows.reduce((s, r) => s + r.count, 0)
  const top = (rows: { value: string; count: number }[]) => rows[0] ?? null

  const trackedLeads = sum(stats.utmSource)
  const partnerLeads = sum(stats.partnerRef)
  const campaignLeads = sum(stats.campaignId)

  const summary = {
    trackedLeads,
    partnerLeads,
    campaignLeads,
    uniqueSources: stats.utmSource.length,
    uniqueMediums: stats.utmMedium.length,
    uniqueCampaigns: stats.utmCampaign.length,
    uniquePartners: stats.partnerRef.length,
    uniqueRoutes: stats.sourceRoute.length,
    topSource: top(stats.utmSource),
    topMedium: top(stats.utmMedium),
    topCampaign: top(stats.utmCampaign),
    topPartner: top(stats.partnerRef),
    topRoute: top(stats.sourceRoute),
  }

  return NextResponse.json({ ...stats, summary })
}
