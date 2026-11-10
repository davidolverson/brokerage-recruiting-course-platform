import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { normaliseTime, timeError, INVALID_TIME } from '@/lib/training/event-time'
import { withCleanRecurrenceDates } from '@/lib/training/recurrence-input'

// Admin: update / delete a single training event. owner/team_leader only.
export const dynamic = 'force-dynamic'

const CATS = ['branch','example','newagent','prelicense','community','broker','popup']

function guard(): Promise<void> {
  return getAdminContext().then((ctx) => { requireRole(ctx, 'owner', 'team_leader') })
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try { await guard() } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  if (b.category && !CATS.includes(b.category)) return NextResponse.json({ error: 'Invalid category' }, { status: 400 })

  const sql = neon(process.env.DATABASE_URL!)
  // Build a dynamic update with COALESCE-style "only set provided fields"
  const fields: Record<string, unknown> = {}
  const allowed = ['title','category','description','host','location','imageUrl','startTime','endTime','capacity','tentative','active','sortOrder'] as const
  const colMap: Record<string, string> = {
    title:'title', category:'category', description:'description', host:'host', location:'location',
    imageUrl:'image_url', startTime:'start_time', endTime:'end_time', capacity:'capacity',
    tentative:'tentative', active:'active', sortOrder:'sort_order',
  }
  for (const k of allowed) if (k in b) fields[colMap[k]] = b[k]

  // Same rule as POST, from the same module. Editing an existing event is the
  // path the client actually uses, so validating only on create would leave
  // the hole exactly where she works.
  for (const [key, label] of [['start_time', 'Start time'], ['end_time', 'End time']] as const) {
    if (!(key in fields)) continue
    const normalised = normaliseTime(fields[key])
    if (normalised === INVALID_TIME) {
      return NextResponse.json({ error: timeError(label, fields[key]) }, { status: 400 })
    }
    fields[key] = normalised
  }

  if ('recurrence' in b && b.recurrence && typeof b.recurrence === 'object') {
    fields['recurrence'] = JSON.stringify(withCleanRecurrenceDates(b.recurrence))
  }
  if (!Object.keys(fields).length) return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })

  // Apply each field with a parameterized query (small, explicit, injection-safe)
  for (const [col, val] of Object.entries(fields)) {
    if (col === 'recurrence') {
      await sql`UPDATE training_events SET recurrence = ${val as string}::jsonb, updated_at = now() WHERE id = ${id}`
    } else {
      await sql.query(`UPDATE training_events SET ${col} = $1, updated_at = now() WHERE id = $2`, [val, id])
    }
  }
  return NextResponse.json({ success: true })
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try { await guard() } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const sql = neon(process.env.DATABASE_URL!)
  // Soft-delete: deactivate so existing RSVPs/links are preserved.
  await sql`UPDATE training_events SET active = false, updated_at = now() WHERE id = ${id}`
  return NextResponse.json({ success: true })
}
