import { NextResponse } from 'next/server'
import { getAdminContext, requireCrmAccess, RoleError } from '@/lib/permissions'
import { getDashboardStats, getTeamDashboardStats } from '@/lib/db/dashboard'
import { getLeads } from '@/lib/db/leads'

export const dynamic = 'force-dynamic'

export async function GET() {
  const ctx = await getAdminContext()
  try { requireCrmAccess(ctx) } catch (e) {
    return NextResponse.json({ error: 'Forbidden' }, { status: e instanceof RoleError ? e.status : 403 })
  }
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Staff cannot access dashboard
  if (ctx.role === 'staff') {
    return NextResponse.json({ error: 'Staff does not have dashboard access' }, { status: 403 })
  }

  // Team leader gets scoped stats
  if (ctx.role === 'team_leader' && ctx.teamSlug) {
    const [stats, recentLeads] = await Promise.all([
      getTeamDashboardStats(ctx.teamSlug),
      getLeads({ page: 1, perPage: 5, scopedTeam: ctx.teamSlug }),
    ])
    return NextResponse.json({ ...stats, recentLeads: recentLeads.leads })
  }

  // Owner gets full stats
  const [stats, recentLeads] = await Promise.all([
    getDashboardStats(),
    getLeads({ page: 1, perPage: 5 }),
  ])

  return NextResponse.json({ ...stats, recentLeads: recentLeads.leads })
}
