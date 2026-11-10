import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { normaliseTime, timeError, INVALID_TIME } from '@/lib/training/event-time'
import { withCleanRecurrenceDates } from '@/lib/training/recurrence-input'



// Admin: list + create training events. Guarded — owner/team_leader only.
export const dynamic = 'force-dynamic'

const CATS = ['branch','example','newagent','prelicense','community','broker','popup']

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'event'
}

export async function GET() {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT id, slug, title, category, description, host, location, image_url,
           start_time, end_time, capacity, recurrence, tentative, active, sort_order
    FROM training_events ORDER BY active DESC, sort_order ASC, title ASC
  `
  // RSVP counts per event (any occurrence)
  const counts = await sql`
    SELECT event_slug, count(*)::int n FROM training_rsvps WHERE status='going' GROUP BY event_slug
  `
  const countMap: Record<string, number> = Object.fromEntries(counts.map((c) => [c.event_slug, c.n]))
  return NextResponse.json({ events: rows.map((r) => ({ ...r, goingCount: countMap[r.slug] || 0 })) })
}

export async function POST(request: NextRequest) {
  try {
    requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const title = String(b.title || '').trim()
  const category = String(b.category || '')
  if (!title) return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  if (!CATS.includes(category)) return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
  // The start-time box is free text. Read what the editor typed rather than
  // trusting it: unparsed, "10am" reached the public calendar as
  // "NaN:undefined AM" with nothing on the admin screen to say so.
  const startTime = normaliseTime(b.startTime)
  if (startTime === INVALID_TIME) return NextResponse.json({ error: timeError('Start time', b.startTime) }, { status: 400 })
  const endTime = normaliseTime(b.endTime)
  if (endTime === INVALID_TIME) return NextResponse.json({ error: timeError('End time', b.endTime) }, { status: 400 })

  const rawRecurrence = b.recurrence && typeof b.recurrence === 'object' ? b.recurrence : { type: 'oneoff', date: '2026-01-01' }
  const recurrence = withCleanRecurrenceDates(rawRecurrence)

  const sql = neon(process.env.DATABASE_URL!)
  let slug = b.slug ? slugify(String(b.slug)) : slugify(title)
  // ensure unique slug
  const existing = await sql`SELECT slug FROM training_events WHERE slug LIKE ${slug + '%'}`
  if (existing.some((r) => r.slug === slug)) slug = `${slug}-${Date.now().toString(36).slice(-4)}`

  const rows = await sql`
    INSERT INTO training_events (slug, title, category, description, host, location, image_url, start_time, end_time, capacity, recurrence, tentative, active, sort_order)
    VALUES (${slug}, ${title}, ${category}, ${b.description || null}, ${b.host || null}, ${b.location || null}, ${b.imageUrl || null},
            ${startTime}, ${endTime}, ${b.capacity ?? null}, ${JSON.stringify(recurrence)}::jsonb,
            ${!!b.tentative}, ${b.active !== false}, ${b.sortOrder ?? 100})
    RETURNING id, slug
  `
  return NextResponse.json({ success: true, id: rows[0].id, slug: rows[0].slug })
}
