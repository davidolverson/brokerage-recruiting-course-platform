import { NextRequest, NextResponse } from 'next/server'
import { getAdminContext, canAccessLead, canMutateLead } from '@/lib/permissions'
import { addLeadNote, getLeadNotes, getLeadById } from '@/lib/db/leads'

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

  const notes = await getLeadNotes(leadId)
  return NextResponse.json({ notes })
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const ctx = await getAdminContext()
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Staff cannot add notes
  if (ctx.role === 'staff') {
    return NextResponse.json({ error: 'Staff cannot add notes' }, { status: 403 })
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
  if (!(body.content as string)?.trim()) {
    return NextResponse.json({ error: 'Note content is required' }, { status: 400 })
  }

  const note = await addLeadNote(leadId, ctx.userId, (body.content as string).trim())
  return NextResponse.json({ note })
}
