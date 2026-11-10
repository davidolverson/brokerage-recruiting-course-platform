import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, canAccessLead } from '@/lib/permissions'
import { getLeadHistory, getLeadById } from '@/lib/db/leads'

export const dynamic = 'force-dynamic'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const ctx = await getAdminContext()
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const leadId = parseInt(id)
  if (isNaN(leadId)) return NextResponse.json({ error: 'Invalid lead ID' }, { status: 400 })

  // Check lead scope
  const lead = await getLeadById(leadId)
  if (!lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
  if (!canAccessLead(ctx, lead)) {
    return NextResponse.json({ error: 'You do not have access to this lead' }, { status: 403 })
  }

  const history = await getLeadHistory(leadId)
  return NextResponse.json({ history })
}
