import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext } from '@/lib/permissions'

/**
 * POST /api/admin/reset-user-password
 * Owner-only: reset any admin user's password directly.
 * Body: { userId: string, newPassword: string }
 */
export async function POST(request: NextRequest) {
  const ctx = await getAdminContext()
  if (!ctx || ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json()
  const { userId, newPassword } = body as { userId?: string; newPassword?: string }

  if (!userId || !newPassword) {
    return NextResponse.json({ error: 'userId and newPassword are required' }, { status: 400 })
  }

  if (newPassword.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
  }

  const sql = neon(process.env.DATABASE_URL!)

  // Verify user exists in Better Auth user table
  const users = await sql`SELECT id, email FROM "user" WHERE id = ${userId}`
  if (users.length === 0) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  // Hash password using Better Auth's built-in hashing (bcrypt-compatible via better-auth)
  const { hashPassword } = await import('better-auth/crypto')
  const hashedPassword = await hashPassword(newPassword)

  // Update the password in Better Auth's account table
  const updated = await sql`
    UPDATE "account"
    SET "password" = ${hashedPassword}
    WHERE "user_id" = ${userId} AND "provider_id" = 'credential'
    RETURNING id
  `

  if (updated.length === 0) {
    return NextResponse.json({ error: 'No credential account found for this user' }, { status: 404 })
  }

  // Log the action
  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, details)
    VALUES (${ctx.userId}, 'password_reset', 'user', ${JSON.stringify({ targetUserId: userId, targetEmail: users[0].email })}::jsonb)
  `

  return NextResponse.json({ success: true })
}
