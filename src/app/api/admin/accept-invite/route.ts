import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { todayInBrokerageTz } from '@/lib/onboarding/milestones'

export async function GET(request: NextRequest) {
  const token = new URL(request.url).searchParams.get('token')
  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 })
  }

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT email, role, team_slug, expires_at, used_at FROM invite_tokens WHERE token = ${token}
  `

  if (rows.length === 0) {
    return NextResponse.json({ error: 'Invalid invite token' }, { status: 404 })
  }

  const invite = rows[0]
  if (invite.used_at) {
    return NextResponse.json({ error: 'This invite has already been used' }, { status: 410 })
  }
  if (new Date(String(invite.expires_at)) < new Date()) {
    return NextResponse.json({ error: 'This invite has expired' }, { status: 410 })
  }

  return NextResponse.json({
    email: invite.email,
    role: invite.role,
    team_slug: invite.team_slug,
  })
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
  const { token, userId, name } = body as { token?: string; userId?: string; name?: string }

  if (!token || !userId || !name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const sql = neon(process.env.DATABASE_URL!)

  // Validate token
  const rows = await sql`
    SELECT email, role, team_slug, expires_at, used_at FROM invite_tokens WHERE token = ${token}
  `

  if (rows.length === 0) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 404 })
  }

  const invite = rows[0]
  if (invite.used_at) {
    return NextResponse.json({ error: 'Already used' }, { status: 410 })
  }
  if (new Date(String(invite.expires_at)) < new Date()) {
    return NextResponse.json({ error: 'Expired' }, { status: 410 })
  }

  // Create admin_users row
  await sql`
    INSERT INTO admin_users (id, email, name, role, team_slug, is_active)
    VALUES (${userId}, ${String(invite.email)}, ${name}, ${String(invite.role)}, ${invite.team_slug ?? null}, true)
  `

  // Mark token as used
  await sql`UPDATE invite_tokens SET used_at = NOW() WHERE token = ${token}`

  // Activity log
  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, details)
    VALUES (${userId}, 'user_invited', 'user', ${JSON.stringify({ role: invite.role, team_slug: invite.team_slug })}::jsonb)
  `

  // Keep the onboarding tracker in step without anyone maintaining it.
  //
  // An agent invited from the Team screen would otherwise never appear in the
  // tracker, so the two views of the same person disagreed and someone had to
  // reconcile them by hand. ON CONFLICT DO NOTHING because the usual path is
  // the reverse — invited FROM a tracker row that already exists — and this
  // must not overwrite the progress already recorded against it.
  //
  // Deliberately only for `agent`: staff and brokers are not onboarding
  // through the handbook and would be noise on that screen.
  if (String(invite.role) === 'agent') {
    try {
      await sql`
        INSERT INTO agent_onboarding (name, email, team_slug, started_at, created_by)
        VALUES (${name}, ${String(invite.email).toLowerCase()}, ${invite.team_slug ?? null}, ${todayInBrokerageTz()}, ${userId})
        ON CONFLICT (email) DO NOTHING
      `
    } catch (e) {
      // Never fail an account creation over bookkeeping. Someone who cannot
      // accept their invite is a far worse outcome than a missing tracker row.
      console.error('[ACCEPT-INVITE] could not create onboarding row:', e)
    }
  }

  return NextResponse.json({ success: true })
}
