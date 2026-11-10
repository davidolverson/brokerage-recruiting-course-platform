import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireCrmAccess, RoleError } from '@/lib/permissions'
import { getLeads } from '@/lib/db/leads'

export const dynamic = 'force-dynamic'

const PIPELINE_STATUSES = ['new', 'contacted', 'meeting_set', 'qualified', 'won', 'lost']

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  try { requireCrmAccess(ctx) } catch (e) {
    return NextResponse.json({ error: 'Forbidden' }, { status: e instanceof RoleError ? e.status : 403 })
  }
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  if (ctx.role === 'staff') {
    return NextResponse.json({ error: 'Staff does not have pipeline access' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)

  // Fetch all pipeline leads using the existing getLeads with a high perPage
  const filters = {
    q: searchParams.get('q') || undefined,
    formType: searchParams.get('form_type') ? [searchParams.get('form_type')!] : undefined,
    path: searchParams.get('path') || undefined,
    team: searchParams.get('team') || undefined,
    status: PIPELINE_STATUSES,
    scopedTeam: ctx.role === 'team_leader' ? (ctx.teamSlug ?? undefined) : undefined,
    page: 1,
    perPage: 500,
  }

  const result = await getLeads(filters)

  // Group by status
  const columns: Record<string, typeof result.leads> = {}
  const counts: Record<string, number> = {}

  for (const status of PIPELINE_STATUSES) {
    columns[status] = []
    counts[status] = 0
  }

  for (const lead of result.leads) {
    const status = lead.current_status
    if (columns[status]) {
      columns[status].push(lead)
      counts[status]++
    }
  }

  return NextResponse.json({ columns, counts })
}
