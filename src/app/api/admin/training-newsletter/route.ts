import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getAdminContext, requireRole, RoleError } from '@/lib/permissions'
import { sendEmail } from '@/lib/notifications'
import { timeLabel, parseISO, type Recurrence } from '@/lib/training/calendar'
import { inviteAttachmentError } from '@/lib/training/newsletter-invite'

// Admin: send a newsletter / event invite to matching subscribers.
// owner/team_leader only. Optionally attach an event block (with a Google Calendar
// "add to calendar" link) so it reads like an invite.
export const dynamic = 'force-dynamic'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DOW_FULL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

interface Subscriber { email: string; name: string | null; categories: string[]; unsubscribe_token: string }

function pad(n: number) { return (n < 10 ? '0' : '') + n }
function googleLink(title: string, d: Date, start: string | null, end: string | null, details: string): string {
  const sH = start ? +start.split(':')[0] : 9, sM = start ? +start.split(':')[1] : 0
  const eH = end ? +end.split(':')[0] : sH + 1, eM = end ? +end.split(':')[1] : sM
  const s = new Date(d.getFullYear(), d.getMonth(), d.getDate(), sH, sM)
  const e = new Date(d.getFullYear(), d.getMonth(), d.getDate(), eH, eM)
  const z = (x: Date) => `${x.getUTCFullYear()}${pad(x.getUTCMonth()+1)}${pad(x.getUTCDate())}T${pad(x.getUTCHours())}${pad(x.getUTCMinutes())}00Z`
  const params = new URLSearchParams({ action: 'TEMPLATE', text: title, dates: `${z(s)}/${z(e)}`, details })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export async function POST(request: NextRequest) {
  let ctx
  try {
    ctx = requireRole(await getAdminContext(), 'owner', 'team_leader')
  } catch (e) {
    if (e instanceof RoleError) return NextResponse.json({ error: e.message }, { status: e.status })
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const b = await request.json().catch(() => null)
  if (!b) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  const subject = String(b.subject || '').trim()
  let message = String(b.message || '').trim()
  const categories: string[] = Array.isArray(b.categories) ? b.categories.map(String) : []
  if (!subject) return NextResponse.json({ error: 'Subject is required' }, { status: 400 })
  if (!message) return NextResponse.json({ error: 'Message is required' }, { status: 400 })

  const sql = neon(process.env.DATABASE_URL!)

  // Optional event block → reads like an invite.
  //
  // Every failure here REFUSES rather than quietly dropping the block. A
  // newsletter that went out without the invite the sender attached, and
  // reported success, is worse than one that did not go: nobody knows to
  // resend. And since the date was never checked against the recurrence, this
  // could announce a meeting on a day it does not happen — including one the
  // editor had just cancelled.
  if (b.eventSlug) {
    const evRows = await sql`
      SELECT title, host, start_time, end_time, location, description, recurrence, active
      FROM training_events WHERE slug = ${b.eventSlug} LIMIT 1`
    const row = evRows[0] as undefined | {
      title: string; host: string | null; start_time: string | null; end_time: string | null
      location: string | null; description: string | null; recurrence: Recurrence; active: boolean
    }
    const problem = inviteAttachmentError(
      row && { title: row.title, recurrence: row.recurrence, active: row.active },
      b.eventDate,
    )
    if (problem) return NextResponse.json({ error: problem }, { status: 400 })

    const ev = row!
    const d = parseISO(b.eventDate)
    const dateStr = `${DOW_FULL[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    const tl = ev.start_time ? timeLabel({ startTime: ev.start_time, endTime: ev.end_time }) : 'Time TBD'
    const details = (ev.description || '') + (ev.host ? `\n\nHosted by ${ev.host}` : '')
    const link = googleLink(ev.title, d, ev.start_time, ev.end_time, details)
    message += `\n\n──────────\n${ev.title}\n${dateStr}${ev.start_time ? ' · ' + tl : ''}` +
      (ev.location ? `\nWhere: ${ev.location}` : '') +
      (ev.host ? `\nHost: ${ev.host}` : '') +
      `\n\nAdd to your calendar: ${link}`
  }

  // Resolve recipients. Subscriber with empty categories = wants everything.
  // Admin with empty categories = send to everyone.
  const subs = (await sql`SELECT email, name, categories, unsubscribe_token FROM training_subscribers WHERE active = true`) as unknown as Subscriber[]
  const targets = subs.filter((s) => {
    if (!categories.length) return true
    const sc = Array.isArray(s.categories) ? s.categories : []
    if (!sc.length) return true
    return sc.some((c) => categories.includes(c))
  })

  if (!targets.length) return NextResponse.json({ success: true, sent: 0, message: 'No matching subscribers' })

  // Send (throttled). Log each to notification_queue.
  let sent = 0, failed = 0
  for (const t of targets) {
    const greeting = t.name ? `Hi ${t.name.split(' ')[0]},\n\n` : ''
    // Every commercial send carries a working opt-out. The admin screen promised
    // one and none was included — the promise was the only part that existed.
    // The token is the credential; /api/unsubscribe resolves it against
    // training_subscribers as well as contacts.
    const footer =
      `\n\n---\nYou're receiving this because you subscribed to the Example Investor Team training calendar.` +
      `\nUnsubscribe: ${BASE_URL}/unsubscribe?token=${t.unsubscribe_token}`
    const ok = await sendEmail(
      t.email,
      subject,
      `${greeting}${message}\n\n— Acme Realty · Example Investor Team${footer}`,
    )
    if (ok) sent++; else failed++
    try {
      await sql`INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
                VALUES (${t.email}, ${'training_newsletter'}, ${JSON.stringify({ subject, by: ctx.email })}::jsonb, ${ok ? new Date().toISOString() : null}, ${ok ? null : 'send failed'})`
    } catch { /* notification_queue is best-effort */ }
  }

  return NextResponse.json({ success: true, sent, failed, recipients: targets.length })
}
