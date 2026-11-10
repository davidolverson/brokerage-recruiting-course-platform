import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext } from '@/lib/permissions'

export const dynamic = 'force-dynamic'

const DEFAULT_PREFERENCES = {
  instant_new_lead: true,
  instant_assignment: true,
  weekly_digest: true,
}

export async function GET() {
  const ctx = await getAdminContext()
  if (!ctx) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`SELECT notification_preferences, email FROM admin_users WHERE id = ${ctx.userId}`

  if (rows.length === 0) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const stored = rows[0].notification_preferences
  const preferences = stored
    ? { ...DEFAULT_PREFERENCES, ...stored }
    : DEFAULT_PREFERENCES

  return NextResponse.json({
    preferences,
    email: String(rows[0].email),
  })
}

export async function PATCH(request: Request) {
  const ctx = await getAdminContext()
  if (!ctx) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const allowed = ['instant_new_lead', 'instant_assignment', 'weekly_digest']
  const updates: Record<string, boolean> = {}

  for (const key of allowed) {
    if (key in body && typeof body[key] === 'boolean') {
      updates[key] = body[key] as boolean
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No valid preference fields provided' }, { status: 400 })
  }

  // Fetch current preferences then merge
  const sql = neon(process.env.DATABASE_URL!)
  const current = await sql`SELECT notification_preferences FROM admin_users WHERE id = ${ctx.userId}`
  const existing = current[0]?.notification_preferences ?? DEFAULT_PREFERENCES
  const prefs = { ...DEFAULT_PREFERENCES, ...existing, ...updates }

  await sql`UPDATE admin_users SET notification_preferences = ${JSON.stringify(prefs)}::jsonb, updated_at = NOW() WHERE id = ${ctx.userId}`

  return NextResponse.json({ preferences: prefs })
}
