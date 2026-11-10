import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'
import { getAdminUsers, getAdminUserByAuthId } from '@/lib/db/dashboard'
import { canUseTeamScreen, visibleTeamUsers, canInviteRole } from '@/lib/team-permissions'
import type { AdminRole } from '@/lib/roles'

export const dynamic = 'force-dynamic'

interface PendingInvite {
  id: string
  email: string
  role: string
  team_slug: string | null
  created_at: string
  expires_at: string
}

export async function GET() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const adminUser = await getAdminUserByAuthId(session.user.id)
  if (!adminUser || !canUseTeamScreen({ role: adminUser.role })) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const actor = { role: adminUser.role, teamSlug: adminUser.team_slug ?? null, userId: adminUser.id }

  // A team_leader sees only their own row and the agents in their team. The
  // page used to 403 outright for them, which rendered it empty.
  const allUsers = (await getAdminUsers()) as unknown as Array<{ id: string; role: AdminRole; team_slug: string | null }>
  const users = visibleTeamUsers(actor, allUsers)

  // Pending (unused, unexpired) invites — backward-compatible additive field
  let pendingInvites: PendingInvite[] = []
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const rows = await sql`
      SELECT id, email, role, team_slug, created_at, expires_at
      FROM invite_tokens
      WHERE used_at IS NULL AND expires_at > NOW()
      ORDER BY created_at DESC
    `
    pendingInvites = rows as unknown as PendingInvite[]
  } catch {
    pendingInvites = []
  }

  // The screen used to offer every role to everyone and let the API refuse.
  // Sending the caller's actual capability keeps ONE source of truth for it.
  const invitableRoles = ['team_leader', 'staff', 'broker', 'agent'].filter((r) => canInviteRole(actor, r))

  return NextResponse.json({ users, pendingInvites, role: actor.role, invitableRoles })
}
