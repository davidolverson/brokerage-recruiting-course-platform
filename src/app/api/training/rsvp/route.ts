import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { sendEmail } from '@/lib/notifications'
import { timeLabel } from '@/lib/training/calendar'
import { upsertContact } from '@/lib/contacts'

// POST /api/training/rsvp — public RSVP for a single event occurrence.
// Body: { eventSlug, date (YYYY-MM-DD), name, email, status: going|maybe|not_going }
// Upserts on (occurrence_key, email). Returns the updated roster for that occurrence.
// Rate limited: 10 / IP / 60s.

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 10
const RATE_WINDOW_MS = 60_000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const STATUSES = ['going', 'maybe', 'not_going']
function validateEmail(e: string): boolean { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ success: false, error: 'Too many requests. Please slow down.' }, { status: 429 })
    }

    const body = await request.json().catch(() => null)
    if (!body) return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })

    const eventSlug = String(body.eventSlug || '').trim()
    const date = String(body.date || '').trim()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim().toLowerCase()
    const status = String(body.status || '').trim()

    const errors: Record<string, string> = {}
    if (!eventSlug) errors.eventSlug = 'Missing event'
    if (!DATE_RE.test(date)) errors.date = 'Invalid date'
    if (!name || name.length < 2) errors.name = 'Please enter your name'
    if (!validateEmail(email)) errors.email = 'Please enter a valid email'
    if (!STATUSES.includes(status)) errors.status = 'Invalid status'
    if (Object.keys(errors).length) return NextResponse.json({ success: false, errors }, { status: 400 })

    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) return NextResponse.json({ success: false, error: 'Database not configured' }, { status: 500 })
    const sql = neon(databaseUrl)

    // Event must exist + be active
    const evRows = await sql`
      SELECT slug, title, category, host, start_time, end_time, capacity, tentative
      FROM training_events WHERE slug = ${eventSlug} AND active = true LIMIT 1
    `
    if (!evRows.length) return NextResponse.json({ success: false, error: 'Event not found' }, { status: 404 })
    const ev = evRows[0]
    const occurrenceKey = `${eventSlug}:${date}`

    // Upsert the RSVP
    await sql`
      INSERT INTO training_rsvps (occurrence_key, event_slug, event_date, name, email, status)
      VALUES (${occurrenceKey}, ${eventSlug}, ${date}, ${name}, ${email}, ${status})
      ON CONFLICT (occurrence_key, email)
      DO UPDATE SET status = EXCLUDED.status, name = EXCLUDED.name, updated_at = now()
    `

    upsertContact({ email, firstName: name, source: 'training_rsvp' }).catch(() => {})

    // Updated roster, ordered by RSVP time
    const rosterRows = await sql`
      SELECT name, email, status, created_at FROM training_rsvps
      WHERE occurrence_key = ${occurrenceKey} AND status IN ('going','maybe')
      ORDER BY created_at ASC
    `
    const going = rosterRows.filter((r) => r.status === 'going')
    const maybe = rosterRows.filter((r) => r.status === 'maybe')
    const cap: number | null = ev.capacity
    const waitlist = cap ? going.slice(cap) : []
    const youWaitlisted =
      status === 'going' && cap != null && waitlist.some((r) => r.email === email)

    // Fire-and-forget confirmation email (never blocks the response)
    if (status === 'going' || status === 'maybe') {
      const when = `${date}${ev.start_time ? ' · ' + timeLabel({ startTime: ev.start_time, endTime: ev.end_time }) : ''}`
      const verb = youWaitlisted
        ? `You're on the waitlist for`
        : status === 'going' ? `You're confirmed for` : `You're marked as "maybe" for`
      const lines = [
        `Hi ${name.split(' ')[0]},`,
        '',
        `${verb} ${ev.title}.`,
        `When: ${when}`,
        ev.host ? `Host: ${ev.host}` : '',
        '',
        youWaitlisted
          ? `The event is at capacity, but we'll move you up automatically if a spot opens.`
          : `We look forward to seeing you there!`,
        '',
        `— Acme Realty · Example Investor Team`,
      ].filter(Boolean)
      sendEmail(email, `RSVP confirmed: ${ev.title}`, lines.join('\n')).catch(() => {})
    }

    return NextResponse.json({
      success: true,
      occurrenceKey,
      status,
      youWaitlisted,
      roster: {
        going: going.map((r) => r.name), // full ordered list; client slices by capacity
        maybe: maybe.map((r) => r.name),
        capacity: cap,
      },
    })
  } catch (err) {
    console.error('[TRAINING] RSVP failed:', err)
    return NextResponse.json({ success: false, error: 'Failed to save RSVP' }, { status: 500 })
  }
}
