import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import type { TrainingEvent } from '@/lib/training/calendar'

// GET /api/training?from=YYYY-MM-DD&to=YYYY-MM-DD&email=optional
// Returns active events + RSVP rosters (going/maybe names, ordered by RSVP time)
// for the requested date window, plus the caller's own RSVP statuses if `email` given.
// Public, read-only.

export const dynamic = 'force-dynamic'

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

export async function GET(request: NextRequest) {
  try {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    const sql = neon(databaseUrl)

    const { searchParams } = new URL(request.url)
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const email = searchParams.get('email')?.trim().toLowerCase() || null

    const rows = await sql`
      SELECT slug, title, category, description, host, location, image_url,
             start_time, end_time, capacity, recurrence, tentative, sort_order
      FROM training_events
      WHERE active = true
      ORDER BY sort_order ASC, title ASC
    `
    const events: TrainingEvent[] = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      category: r.category,
      description: r.description,
      host: r.host,
      location: r.location,
      imageUrl: r.image_url,
      startTime: r.start_time,
      endTime: r.end_time,
      capacity: r.capacity,
      recurrence: r.recurrence,
      tentative: r.tentative,
      sortOrder: r.sort_order,
    }))

    // RSVP rosters within the window (defaults to a wide window if not supplied)
    const fromDate = from && DATE_RE.test(from) ? from : '2000-01-01'
    const toDate = to && DATE_RE.test(to) ? to : '2100-01-01'

    const rsvpRows = await sql`
      SELECT occurrence_key, name, status, created_at
      FROM training_rsvps
      WHERE event_date >= ${fromDate} AND event_date <= ${toDate}
        AND status IN ('going','maybe')
      ORDER BY created_at ASC
    `
    const occurrences: Record<string, { going: string[]; maybe: string[] }> = {}
    for (const r of rsvpRows) {
      const o = (occurrences[r.occurrence_key] ||= { going: [], maybe: [] })
      if (r.status === 'going') o.going.push(r.name)
      else if (r.status === 'maybe') o.maybe.push(r.name)
    }

    let mine: Record<string, string> = {}
    if (email) {
      const mineRows = await sql`
        SELECT occurrence_key, status FROM training_rsvps
        WHERE email = ${email} AND event_date >= ${fromDate} AND event_date <= ${toDate}
      `
      mine = Object.fromEntries(mineRows.map((r) => [r.occurrence_key, r.status]))
    }

    return NextResponse.json({ events, occurrences, mine })
  } catch (err) {
    console.error('[TRAINING] GET failed:', err)
    return NextResponse.json({ error: 'Failed to load calendar' }, { status: 500 })
  }
}
