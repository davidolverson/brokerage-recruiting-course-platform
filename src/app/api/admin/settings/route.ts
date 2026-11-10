import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext } from '@/lib/permissions'

export const dynamic = 'force-dynamic'

export async function GET() {
  const ctx = await getAdminContext()
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT branch_name, contact_email, contact_phone, scheduler_url, default_team, settings, updated_at
    FROM branch_settings
    WHERE id = 1
  `

  if (rows.length === 0) {
    return NextResponse.json({
      branch_name: 'Acme Realty',
      contact_email: null,
      contact_phone: null,
      scheduler_url: null,
      default_team: null,
      settings: {},
      updated_at: null,
    })
  }

  return NextResponse.json(rows[0])
}

export async function PATCH(request: Request) {
  const ctx = await getAdminContext()
  if (!ctx) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (ctx.role !== 'owner') {
    return NextResponse.json({ error: 'Owner access only' }, { status: 403 })
  }

  let body: Record<string, unknown>
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
  const { branch_name, contact_email, contact_phone, scheduler_url, default_team } = body as {
    branch_name?: string; contact_email?: string | null; contact_phone?: string | null; scheduler_url?: string | null; default_team?: string | null
  }

  // Validate contact_email format
  if (contact_email !== null && contact_email !== undefined && contact_email !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contact_email)) {
      return NextResponse.json({ error: 'Invalid email address format' }, { status: 400 })
    }
  }

  // Validate contact_phone format
  if (contact_phone !== null && contact_phone !== undefined && contact_phone !== '') {
    const phoneRegex = /^[0-9\s\-()+ ]{7,}$/
    if (!phoneRegex.test(contact_phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number — use digits, spaces, dashes, or parentheses (7+ characters)' },
        { status: 400 }
      )
    }
  }

  // Validate scheduler_url is a safe HTTPS URL
  if (scheduler_url !== null && scheduler_url !== undefined && scheduler_url !== '') {
    if (!scheduler_url.startsWith('https://')) {
      return NextResponse.json(
        { error: 'Scheduler URL must start with https://' },
        { status: 400 }
      )
    }
  }

  const sql = neon(process.env.DATABASE_URL!)

  // Validate default_team is a known slug if provided
  if (default_team !== null && default_team !== undefined && default_team !== '') {
    const { teams } = await import('@/lib/data/teams')
    const valid = teams.some((t) => t.slug === default_team)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid team slug' }, { status: 400 })
    }
  }

  const rows = await sql`
    UPDATE branch_settings
    SET
      branch_name = COALESCE(${branch_name ?? null}, branch_name),
      contact_email = ${contact_email ?? null},
      contact_phone = ${contact_phone ?? null},
      scheduler_url = ${scheduler_url ?? null},
      default_team = ${default_team ?? null},
      updated_at = NOW()
    WHERE id = 1
    RETURNING branch_name, contact_email, contact_phone, scheduler_url, default_team, settings, updated_at
  `

  if (rows.length === 0) {
    return NextResponse.json({ error: 'Settings row not found — run migration 0006' }, { status: 500 })
  }

  return NextResponse.json(rows[0])
}
