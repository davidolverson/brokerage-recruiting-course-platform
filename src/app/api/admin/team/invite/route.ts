import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { randomBytes } from 'crypto'
import { getServerSession } from '@/lib/auth-server'
import { getAdminUserByAuthId } from '@/lib/db/dashboard'
import { sendInviteEmail } from '@/lib/notifications'
import { canUseTeamScreen, canInviteRole, resolveInviteTeam } from '@/lib/team-permissions'

export async function POST(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const adminUser = await getAdminUserByAuthId(session.user.id)
  if (!adminUser || !canUseTeamScreen({ role: adminUser.role })) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const actor = { role: adminUser.role, teamSlug: adminUser.team_slug ?? null, userId: adminUser.id }

  let body: Record<string, unknown>
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
  const { email, role, team_slug } = body as { email?: string; role?: string; team_slug?: string }

  if (!email?.trim() || !role) {
    return NextResponse.json({ error: 'Email and role are required' }, { status: 400 })
  }

  if (!['team_leader', 'staff', 'broker', 'agent'].includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
  }

  // A team_leader may create agents and nothing else. Anything that carries an
  // admin surface stays with the owner.
  if (!canInviteRole(actor, role)) {
    return NextResponse.json(
      { error: 'You can invite Example Investor Team agents. Ask an administrator for anything with admin access.' },
      { status: 403 },
    )
  }

  // Never trust the team in the body for a team_leader: it is client-supplied
  // and is the obvious way to plant an account in someone else's team.
  const inviteTeam = resolveInviteTeam(actor, team_slug)

  if (role === 'team_leader' && !inviteTeam) {
    return NextResponse.json({ error: 'Team slug is required for team leaders' }, { status: 400 })
  }

  const sql = neon(process.env.DATABASE_URL!)

  // Check if user already exists
  const existing = await sql`SELECT id FROM admin_users WHERE email = ${email.trim().toLowerCase()}`
  if (existing.length > 0) {
    return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 })
  }

  // Check for existing pending invite
  const pendingInvite = await sql`
    SELECT id FROM invite_tokens
    WHERE email = ${email.trim().toLowerCase()} AND used_at IS NULL AND expires_at > NOW()
  `
  if (pendingInvite.length > 0) {
    return NextResponse.json({ error: 'A pending invite already exists for this email' }, { status: 409 })
  }

  // Generate token
  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000) // 72 hours

  await sql`
    INSERT INTO invite_tokens (email, role, team_slug, token, invited_by, expires_at)
    VALUES (${email.trim().toLowerCase()}, ${role}, ${inviteTeam}, ${token}, ${session.user.id}, ${expiresAt.toISOString()})
  `

  // Send invite email
  const sent = await sendInviteEmail(
    email.trim(),
    String(adminUser.name),
    role,
    token,
  )

  // Log activity
  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, details)
    VALUES (${session.user.id}, 'user_invited', 'user', ${JSON.stringify({ email, role, team_slug, email_sent: sent })}::jsonb)
  `

  return NextResponse.json({ success: true, emailSent: sent })
}
