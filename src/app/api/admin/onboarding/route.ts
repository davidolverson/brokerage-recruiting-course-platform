import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { sanitiseMilestones, calculateProgress, isStalled, todayInBrokerageTz } from '@/lib/onboarding/milestones'
import { inviteState } from '@/lib/onboarding/invite-link'

export const dynamic = 'force-dynamic'

/**
 * The agent onboarding tracker. owner and team_leader only — this is the
 * internal ops view, not something an agent or a broker has any business in.
 */
function actorOr403(ctx: Awaited<ReturnType<typeof getAdminContext>>) {
  return requireRole(ctx, 'owner', 'team_leader')
}

function fail(e: unknown) {
  if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

/**
 * A team_leader is confined to their own team, and their writes are FORCED
 * into it rather than trusting the team in the body — the same rule as team
 * invites, for the same reason.
 */
function scopeFor(ctx: { role: string; teamSlug: string | null }): string | null {
  return ctx.role === 'team_leader' ? ctx.teamSlug : null
}

export async function GET() {
  let ctx
  try { ctx = actorOr403(await getAdminContext()) } catch (e) { return fail(e) }

  const sql = neon(process.env.DATABASE_URL!)
  const scope = scopeFor(ctx)

  const rows = scope
    ? await sql`SELECT * FROM agent_onboarding WHERE team_slug = ${scope} ORDER BY archived, started_at DESC, id DESC`
    : await sql`SELECT * FROM agent_onboarding ORDER BY archived, started_at DESC, id DESC`

  // The one derived milestone: handbook access is true exactly when an active
  // agent account exists for that email. Asked once here rather than per row.
  const agents = await sql`SELECT lower(email) AS email FROM admin_users WHERE role = 'agent' AND is_active = true`
  const withAccess = new Set(agents.map((a) => String(a.email)))

  // Pending invites, so the row can say "invite sent, not accepted" instead of
  // leaving her guessing whether she already did it.
  const invites = await sql`SELECT lower(email) AS email FROM invite_tokens WHERE used_at IS NULL AND expires_at > NOW()`
  const invited = new Set(invites.map((i) => String(i.email)))

  const now = new Date()
  const people = rows.map((r) => {
    const milestones = sanitiseMilestones(r.milestones)
    const key = String(r.email).toLowerCase()
    const hasHandbookAccess = withAccess.has(key)
    const input = { milestones, hasHandbookAccess }
    return {
      id: r.id,
      name: r.name,
      email: r.email,
      teamSlug: r.team_slug,
      startedAt: r.started_at,
      notes: r.notes,
      archived: r.archived,
      milestones,
      hasHandbookAccess,
      inviteState: inviteState({ hasAccount: hasHandbookAccess, hasPendingInvite: invited.has(key) }),
      progress: calculateProgress(input),
      stalled: isStalled(input, r.started_at, now),
    }
  })

  return NextResponse.json({
    people,
    summary: {
      active: people.filter((p) => !p.archived && !p.progress.complete).length,
      complete: people.filter((p) => p.progress.complete).length,
      stalled: people.filter((p) => p.stalled && !p.archived).length,
    },
  })
}

export async function POST(request: NextRequest) {
  let ctx
  try { ctx = actorOr403(await getAdminContext()) } catch (e) { return fail(e) }

  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const name = String(b.name || '').trim()
  const email = String(b.email || '').trim().toLowerCase()
  if (!name) return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email is required — it is how handbook access is matched.' }, { status: 400 })
  }

  const scope = scopeFor(ctx)
  const teamSlug = scope ?? (b.teamSlug ? String(b.teamSlug) : null)
  const startedAt = /^\d{4}-\d{2}-\d{2}$/.test(String(b.startedAt || '')) ? String(b.startedAt) : null

  const sql = neon(process.env.DATABASE_URL!)
  const existing = await sql`SELECT id, name FROM agent_onboarding WHERE email = ${email}`
  if (existing.length) {
    return NextResponse.json(
      { error: `${existing[0].name} is already being tracked with that email.` },
      { status: 409 },
    )
  }

  // Never fall through to the column's CURRENT_DATE default: Postgres reads
  // that in UTC, so anyone added after ~8pm Eastern was recorded as starting
  // tomorrow.
  const start = startedAt ?? todayInBrokerageTz()
  const rows = await sql`INSERT INTO agent_onboarding (name, email, team_slug, started_at, created_by)
                         VALUES (${name}, ${email}, ${teamSlug}, ${start}, ${ctx.userId}) RETURNING id`

  return NextResponse.json({ success: true, id: rows[0].id })
}
