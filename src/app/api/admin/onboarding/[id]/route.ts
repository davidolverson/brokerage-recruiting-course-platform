import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { sanitiseMilestones } from '@/lib/onboarding/milestones'

export const dynamic = 'force-dynamic'

function fail(e: unknown) {
  if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

/**
 * Read the row BEFORE deciding, so the answer is about the record that exists
 * rather than about what the caller claims. A team_leader may only touch their
 * own team's rows.
 */
async function loadOwned(id: string, ctx: { role: string; teamSlug: string | null }) {
  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`SELECT id, team_slug, milestones FROM agent_onboarding WHERE id = ${id}`
  if (!rows.length) return { error: NextResponse.json({ error: 'Not found' }, { status: 404 }) }
  if (ctx.role === 'team_leader' && rows[0].team_slug !== ctx.teamSlug) {
    return { error: NextResponse.json({ error: 'Not found' }, { status: 404 }) }
  }
  return { row: rows[0] }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let ctx
  try { ctx = requireRole(await getAdminContext(), 'owner', 'team_leader') } catch (e) { return fail(e) }

  const { id } = await params
  if (!/^\d+$/.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const sql = neon(process.env.DATABASE_URL!)
  const found = await loadOwned(id, ctx)
  if (found.error) return found.error

  if ('milestones' in b) {
    // Sanitised, so a derived milestone can never be written by hand and an
    // unknown key never reaches jsonb.
    const clean = sanitiseMilestones(b.milestones)
    await sql`UPDATE agent_onboarding SET milestones = ${JSON.stringify(clean)}::jsonb, updated_at = now() WHERE id = ${id}`
  }
  if ('notes' in b) {
    const notes = b.notes === null ? null : String(b.notes).slice(0, 2000)
    await sql`UPDATE agent_onboarding SET notes = ${notes}, updated_at = now() WHERE id = ${id}`
  }
  if ('archived' in b) {
    await sql`UPDATE agent_onboarding SET archived = ${!!b.archived}, updated_at = now() WHERE id = ${id}`
  }
  if ('name' in b && String(b.name).trim()) {
    await sql`UPDATE agent_onboarding SET name = ${String(b.name).trim()}, updated_at = now() WHERE id = ${id}`
  }

  // The email is the join key for the derived handbook milestone, so a typo
  // means the automation silently never fires for that person. It has to be
  // correctable, with the same validation and uniqueness the create path uses.
  if ('email' in b) {
    const email = String(b.email || '').trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'That is not a valid email address.' }, { status: 400 })
    }
    const clash = await sql`SELECT id, name FROM agent_onboarding WHERE email = ${email} AND id <> ${id}`
    if (clash.length) {
      return NextResponse.json({ error: `${clash[0].name} is already tracked with that email.` }, { status: 409 })
    }
    await sql`UPDATE agent_onboarding SET email = ${email}, updated_at = now() WHERE id = ${id}`
  }

  if ('startedAt' in b && /^\d{4}-\d{2}-\d{2}$/.test(String(b.startedAt))) {
    await sql`UPDATE agent_onboarding SET started_at = ${String(b.startedAt)}, updated_at = now() WHERE id = ${id}`
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let ctx
  try { ctx = requireRole(await getAdminContext(), 'owner', 'team_leader') } catch (e) { return fail(e) }

  const { id } = await params
  if (!/^\d+$/.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const sql = neon(process.env.DATABASE_URL!)
  const found = await loadOwned(id, ctx)
  if (found.error) return found.error

  await sql`DELETE FROM agent_onboarding WHERE id = ${id}`
  return NextResponse.json({ success: true })
}
