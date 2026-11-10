import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext } from '@/lib/permissions'
import { assignLead, getLeadById } from '@/lib/db/leads'
import { sendLeadAssignedAlert } from '@/lib/notifications'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const ctx = await getAdminContext()
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Only owner can assign leads
  if (ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Only the branch owner can assign leads' }, { status: 403 })
  }

  const { id } = await params
  const leadId = parseInt(id)
  if (isNaN(leadId)) return NextResponse.json({ error: 'Invalid lead ID' }, { status: 400 })

  const body = await request.json()
  const { team_slug, assigned_to } = body

  await assignLead(leadId, team_slug ?? null, assigned_to ?? null, ctx.userId)

  // Fire-and-forget: notify assigned team leader
  if (team_slug) {
    const lead = await getLeadById(leadId)
    if (lead) {
      const name = [lead.first_name, lead.last_name].filter(Boolean).join(' ') || 'Lead'
      sendLeadAssignedAlert(leadId, name, team_slug).catch(() => {})
    }
  }

  return NextResponse.json({ success: true })
}
