import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getServerSession } from '@/lib/auth-server'

export const dynamic = 'force-dynamic'

/**
 * Delete the caller's session row, server-side, before the cookie is cleared.
 *
 * Signing out cleared the cookie but LEFT THE SESSION ROW in the database:
 * measured after a real sign-out, /api/admin/me answered 401 while the row sat
 * there valid for another 24 hours. The cookie is httpOnly and Secure so it is
 * not trivially stealable, but "sign out" that does not revoke server-side
 * means a token which has leaked anywhere — a log, a backup, a borrowed
 * machine — keeps working after the person believes they are out.
 *
 * Called BEFORE the client's signOut(): once the cookie is gone the server can
 * no longer tell whose session to revoke.
 *
 * Only the CURRENT session is revoked, deliberately. Signing out on the office
 * desktop should not sign you out on your phone.
 *
 * No role gate: this is authenticated-only and acts solely on the caller's own
 * session. It is listed in role-gate-coverage's exemptions for that reason.
 */
export async function POST() {
  const session = await getServerSession()
  // Already signed out is a success, not an error — the desired state holds.
  if (!session) return NextResponse.json({ success: true, revoked: 0 })

  const token = (session as { session?: { token?: string } }).session?.token
  if (!token) return NextResponse.json({ success: true, revoked: 0 })

  const sql = neon(process.env.DATABASE_URL!)
  const deleted = await sql`DELETE FROM session WHERE token = ${token} RETURNING id`

  return NextResponse.json({ success: true, revoked: deleted.length })
}
