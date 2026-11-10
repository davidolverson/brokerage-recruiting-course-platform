import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireCrmAccess, RoleError } from '@/lib/permissions'
import { getLeads, getLeadsSummary } from '@/lib/db/leads'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  try { requireCrmAccess(ctx) } catch (e) {
    return NextResponse.json({ error: 'Forbidden' }, { status: e instanceof RoleError ? e.status : 403 })
  }
  if (!ctx) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)

  // Team leader scoping
  const scopedTeam = ctx.role === 'team_leader' ? (ctx.teamSlug ?? undefined) : undefined

  const filters = {
    q: searchParams.get('q') || undefined,
    status: searchParams.get('status')?.split(',').filter(Boolean) || undefined,
    formType: searchParams.get('form_type')?.split(',').filter(Boolean) || undefined,
    path: searchParams.get('path') || undefined,
    team: searchParams.get('team') || undefined,
    page: parseInt(searchParams.get('page') || '1'),
    perPage: Math.min(parseInt(searchParams.get('per_page') || '25'), 100),
    scopedTeam,
  }

  const result = await getLeads(filters)

  // Additive, backward-compatible: include an unfiltered summary so the list
  // page can render a stat row + filter count badges without extra round-trips.
  // Opt-out by passing ?summary=0.
  if (searchParams.get('summary') === '0') {
    return NextResponse.json(result)
  }

  const summary = await getLeadsSummary({ scopedTeam })
  return NextResponse.json({ ...result, summary })
}
