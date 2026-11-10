import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'

export async function POST(request: NextRequest) {
  // Require authenticated session via Better Auth
  const session = await getServerSession()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  }

  const sql = neon(databaseUrl)

  // Check if owner already exists
  const existing = await sql`SELECT COUNT(*) as count FROM admin_users WHERE role = 'owner'`
  if (Number(existing[0]?.count) > 0) {
    return NextResponse.json({ error: 'Owner already exists. Setup is locked.' }, { status: 403 })
  }

  // Use authenticated session data — never trust request body for identity
  const { id: userId, email, name } = session.user

  // Create admin_users row for the owner
  await sql`
    INSERT INTO admin_users (id, email, name, role, is_active)
    VALUES (${userId}, ${email.toLowerCase()}, ${name}, 'owner', true)
  `

  // Log activity
  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, details)
    VALUES (${userId}, 'user_invited', 'user', ${JSON.stringify({ role: 'owner', email })}::jsonb)
  `

  return NextResponse.json({ success: true })
}
