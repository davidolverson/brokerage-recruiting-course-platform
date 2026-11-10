import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'
import { getOverviewStats, getTopSourceRoutes, getConversionRate } from '@/lib/db/analytics'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  if (!ctx || ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  const rawDays = parseInt(new URL(request.url).searchParams.get('days') ?? '30')
  const days = isNaN(rawDays) || rawDays < 1 ? 30 : Math.min(rawDays, 365)

  const [overview, sourceRoutes, conversion] = await Promise.all([
    getOverviewStats(days),
    getTopSourceRoutes(days),
    getConversionRate(days),
  ])

  // ─── Derived metrics (computed, no new query) ──────────────────────────────
  const openStatuses = new Set(['new', 'contacted', 'meeting_set'])
  const closedWonStatuses = new Set(['won'])
  const closedLostStatuses = new Set(['lost', 'archived'])

  let openLeads = 0
  let wonLeads = 0
  let lostLeads = 0
  for (const row of overview.byStatus) {
    if (openStatuses.has(row.status)) openLeads += row.count
    else if (closedWonStatuses.has(row.status)) wonLeads += row.count
    else if (closedLostStatuses.has(row.status)) lostLeads += row.count
  }

  const newLeads = overview.byStatus.find((s) => s.status === 'new')?.count ?? 0
  const closedTotal = wonLeads + lostLeads
  const winRate = closedTotal > 0 ? Math.round((wonLeads / closedTotal) * 100) : 0
  const topForm = overview.byFormType[0] ?? null
  const topRoute = sourceRoutes[0] ?? null
  const dailyAverage = days > 0 ? Math.round((overview.totalLeads / days) * 10) / 10 : 0

  const derived = {
    openLeads,
    newLeads,
    wonLeads,
    lostLeads,
    winRate,
    dailyAverage,
    topForm: topForm ? { type: topForm.form_type, count: topForm.count } : null,
    topRoute: topRoute ? { route: topRoute.route, count: topRoute.count } : null,
  }

  return NextResponse.json({ ...overview, sourceRoutes, conversion, derived })
}
