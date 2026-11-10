import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, requireCrmAccess, RoleError } from '@/lib/permissions'
import { exportLeadsCsv } from '@/lib/db/leads'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const ctx = await getAdminContext()
  try { requireCrmAccess(ctx) } catch (e) {
    return NextResponse.json({ error: 'Forbidden' }, { status: e instanceof RoleError ? e.status : 403 })
  }
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Staff cannot export
  if (ctx.role === 'staff') {
    return NextResponse.json({ error: 'Staff cannot export leads' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)

  const filters = {
    q: searchParams.get('q') || undefined,
    status: searchParams.get('status')?.split(',').filter(Boolean) || undefined,
    formType: searchParams.get('form_type')?.split(',').filter(Boolean) || undefined,
    path: searchParams.get('path') || undefined,
    team: searchParams.get('team') || undefined,
    // Team leader scoping
    scopedTeam: ctx.role === 'team_leader' ? (ctx.teamSlug ?? undefined) : undefined,
  }

  const csv = await exportLeadsCsv(filters)
  const date = new Date().toISOString().split('T')[0]

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="acme-realty-leads-${date}.csv"`,
    },
  })
}
