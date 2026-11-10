import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { randomBytes } from 'crypto'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { canInviteRole, resolveInviteTeam } from '@/lib/team-permissions'
import { inviteState, canSendInvite, whyCannotInvite } from '@/lib/onboarding/invite-link'
import { sendInviteEmail } from '@/lib/notifications'

export const dynamic = 'force-dynamic'

/**
 * Invite the person on this tracker row to the handbook, without retyping
 * their address.
 *
 * Adding someone to the tracker and inviting them were two separate jobs
 * against the same email, which is the one field the handbook milestone joins
 * on. Two chances to typo it, and the typo failed silently.
 *
 * Authorisation goes through the SAME predicates as the Team screen
 * (canInviteRole / resolveInviteTeam) rather than a second copy: a team_leader
 * may create agents only, in their own team only, and the team is forced from
 * the actor rather than taken from the row.
 */
export async function POST(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let ctx
  try {
    ctx = requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  if (!/^\d+$/.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`SELECT id, name, email, team_slug FROM agent_onboarding WHERE id = ${id}`
  if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  const person = rows[0]

  // Same scoping rule as every other write on this resource.
  if (ctx.role === 'team_leader' && person.team_slug !== ctx.teamSlug) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const actor = { role: ctx.role, teamSlug: ctx.teamSlug, userId: ctx.userId }
  if (!canInviteRole(actor, 'agent')) {
    return NextResponse.json({ error: 'You cannot invite agents.' }, { status: 403 })
  }

  const email = String(person.email).trim().toLowerCase()

  const [accounts, pending] = await Promise.all([
    sql`SELECT id FROM admin_users WHERE lower(email) = ${email} AND is_active = true`,
    sql`SELECT id FROM invite_tokens WHERE email = ${email} AND used_at IS NULL AND expires_at > NOW()`,
  ])
  const state = inviteState({ hasAccount: accounts.length > 0, hasPendingInvite: pending.length > 0 })
  if (!canSendInvite(state)) {
    return NextResponse.json({ error: whyCannotInvite(state), state }, { status: 409 })
  }

  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000)
  const team = resolveInviteTeam(actor, person.team_slug as string | null)

  await sql`
    INSERT INTO invite_tokens (email, role, team_slug, token, invited_by, expires_at)
    VALUES (${email}, 'agent', ${team}, ${token}, ${ctx.userId}, ${expiresAt.toISOString()})
  `

  const sent = await sendInviteEmail(email, ctx.name, 'agent', token)

  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, details)
    VALUES (${ctx.userId}, 'user_invited', 'user', ${JSON.stringify({ email, role: 'agent', team_slug: team, from: 'onboarding_tracker', email_sent: sent })}::jsonb)
  `

  // emailSent is reported honestly: if Resend is down she needs to know the
  // invite exists but nothing was delivered.
  return NextResponse.json({ success: true, emailSent: sent, state: 'pending' })
}
