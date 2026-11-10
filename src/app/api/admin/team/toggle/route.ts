import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from '@/lib/auth-server'
import { getAdminUserByAuthId, toggleUserActive } from '@/lib/db/dashboard'
import { canUseTeamScreen, canToggleUser } from '@/lib/team-permissions'
import type { AdminRole } from '@/lib/roles'
import { neon } from '@neondatabase/serverless'

export async function PATCH(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const adminUser = await getAdminUserByAuthId(session.user.id)
  if (!adminUser || !canUseTeamScreen({ role: adminUser.role })) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const actor = { role: adminUser.role, teamSlug: adminUser.team_slug ?? null, userId: adminUser.id }

  const body = await request.json()
  const { userId, isActive } = body

  if (!userId || typeof isActive !== 'boolean') {
    return NextResponse.json({ error: 'userId and isActive are required' }, { status: 400 })
  }

  // Read the target before deciding, so the answer is about who they actually
  // are rather than who the caller says they are.
  const sql = neon(process.env.DATABASE_URL!)
  const found = await sql`SELECT id, role, team_slug FROM admin_users WHERE id = ${userId}`
  if (!found.length) {
    return NextResponse.json({ error: 'No such user' }, { status: 404 })
  }
  const target = { id: String(found[0].id), role: found[0].role as AdminRole, team_slug: found[0].team_slug as string | null }

  // Covers self-deactivation for both roles, and confines a team_leader to the
  // agents in their own team so a departing agent can be switched off without
  // waiting on us.
  if (!canToggleUser(actor, target)) {
    return NextResponse.json({ error: 'You can only deactivate agents on your own team.' }, { status: 403 })
  }

  await toggleUserActive(userId, isActive)
  return NextResponse.json({ success: true })
}
