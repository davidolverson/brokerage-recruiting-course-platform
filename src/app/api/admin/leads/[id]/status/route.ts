import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, canMutateLead } from '@/lib/permissions'
import { updateLeadStatus, getLeadById } from '@/lib/db/leads'

const VALID_STATUSES = ['new', 'contacted', 'meeting_set', 'qualified', 'won', 'lost', 'archived']

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const ctx = await getAdminContext()
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Staff cannot update status
  if (ctx.role === 'staff') {
    return NextResponse.json({ error: 'Staff cannot update lead status' }, { status: 403 })
  }

  const { id } = await params
  const leadId = parseInt(id)
  if (isNaN(leadId)) return NextResponse.json({ error: 'Invalid lead ID' }, { status: 400 })

  // Check lead scope for team leaders
  const lead = await getLeadById(leadId)
  if (!lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
  if (!canMutateLead(ctx, lead)) {
    return NextResponse.json({ error: 'You do not have access to this lead' }, { status: 403 })
  }

  let body: Record<string, unknown>
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
  const { status } = body
  if (!status || !VALID_STATUSES.includes(status as string)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  await updateLeadStatus(leadId, status as string, ctx.userId)
  return NextResponse.json({ success: true })
}
