import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { randomUUID } from 'crypto'
import { sendEmail } from '@/lib/notifications'
import { CATEGORIES, CATEGORY_NAME } from '@/lib/training/calendar'
import { upsertContact } from '@/lib/contacts'
import {
  checkRateLimit,
  SUBSCRIBE_LIMIT,
  SUBSCRIBE_WINDOW_MS,
  type RateLimitEntry,
} from '@/lib/subscribe-rate-limit'

// POST /api/training/subscribe — join the training-calendar mailing list.
// Body: { email, name?, categories?: string[] }  (empty categories = all)
// Upserts on email. Public. Rate limited per IP, see subscribe-rate-limit.ts —
// the limit is sized for a whole branch meeting subscribing from one office IP.

const rateLimitMap = new Map<string, RateLimitEntry>()

const VALID_CATS = new Set<string>(CATEGORIES.map((c) => c.id))
function validateEmail(e: string): boolean { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(rateLimitMap, ip, Date.now(), SUBSCRIBE_LIMIT, SUBSCRIBE_WINDOW_MS)) {
      return NextResponse.json({ success: false, error: 'Too many requests. Please slow down.' }, { status: 429 })
    }

    const body = await request.json().catch(() => null)
    if (!body) return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })

    const email = String(body.email || '').trim().toLowerCase()
    const name = body.name ? String(body.name).trim() : null
    const categories: string[] = Array.isArray(body.categories)
      ? body.categories.map((c: unknown) => String(c)).filter((c: string) => VALID_CATS.has(c))
      : []

    if (!validateEmail(email)) {
      return NextResponse.json({ success: false, errors: { email: 'Please enter a valid email' } }, { status: 400 })
    }

    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) return NextResponse.json({ success: false, error: 'Database not configured' }, { status: 500 })
    const sql = neon(databaseUrl)

    const token = randomUUID()
    await sql`
      INSERT INTO training_subscribers (email, name, categories, unsubscribe_token, active)
      VALUES (${email}, ${name}, ${JSON.stringify(categories)}::jsonb, ${token}, true)
      ON CONFLICT (email)
      DO UPDATE SET name = COALESCE(EXCLUDED.name, training_subscribers.name),
                    categories = EXCLUDED.categories,
                    active = true,
                    updated_at = now()
    `

    upsertContact({ email, firstName: name, source: 'training_subscriber' }).catch(() => {})

    const interestLabel = categories.length
      ? categories.map((c) => CATEGORY_NAME[c]).join(', ')
      : 'all training & events'
    const lines = [
      `Hi${name ? ' ' + name.split(' ')[0] : ''},`,
      '',
      `You're subscribed to the Acme Realty · Example Investor Team training calendar.`,
      `You'll hear about: ${interestLabel}.`,
      '',
      // Says what actually happens. The previous wording ("we'll send you
      // upcoming events and invites") read as an automatic feed, and nothing
      // sends on a schedule — announcements are written and sent by the One
      // Dream team. Promising a drip that does not exist is its own defect.
      `When something is coming up, the Example Investor Team team will email you the details and a link to add it straight to your calendar.`,
      `You can unsubscribe from any of those emails.`,
      '',
      `— Acme Realty · Example Investor Team`,
    ]
    sendEmail(email, `You're subscribed — Example Investor Team Training Calendar`, lines.join('\n')).catch(() => {})

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[TRAINING] subscribe failed:', err)
    return NextResponse.json({ success: false, error: 'Failed to subscribe' }, { status: 500 })
  }
}
