import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { sendNewLeadAlert } from '@/lib/notifications'
import { upsertContact } from '@/lib/contacts'
import { derivePhoneConsent } from '@/lib/phone-consent'

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/leads — Lead capture endpoint
//
// Validates form data, stores in Neon Postgres, returns success.
// Rate limited: 5 submissions per IP per 60 seconds.
// No auth required — public endpoint for website forms.
// ─────────────────────────────────────────────────────────────────────────────

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5
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

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  // 7+ chars of digits and common separators — and at least 7 actual digits.
  if (!/^[\d\s\-().+]{7,}$/.test(phone)) return false
  return (phone.match(/\d/g) ?? []).length >= 7
}

const VALID_FORM_TYPES = [
  'join_team_inquiry',
  'network_inquiry',
  'branch_tour_booking',
  'general_contact',
  'fit_quiz',
  'newsletter',
  'course_enrollment',
] as const

// Lead-gen forms where a phone number is mandatory so the team can call back
// within the 24h SLA. course_enrollment is account signup (handled separately).
const PHONE_REQUIRED_FORM_TYPES: string[] = [
  'join_team_inquiry',
  'network_inquiry',
  'branch_tour_booking',
  'general_contact',
  'fit_quiz',
]

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // ── Enrichment path ──────────────────────────────────────────────────────
    // A quiz lead is created up-front (contact gate), then enriched with the
    // answers/result once the quiz is completed. Enrichment updates the existing
    // row instead of inserting a duplicate. Restricted to fit_quiz rows so a
    // forged lead_id can't clobber other lead types.
    if (body.lead_id != null) {
      const id = Number(body.lead_id)
      if (!Number.isInteger(id) || id <= 0) {
        return NextResponse.json({ success: false, error: 'Invalid lead_id' }, { status: 400 })
      }
      const databaseUrl = process.env.DATABASE_URL
      if (!databaseUrl) return NextResponse.json({ success: true })

      const knownTopLevel = new Set([
        'lead_id', 'form_type', 'source_route', 'source_section',
        'selected_path', 'selected_team', 'campaign_id', 'partner_ref',
        'first_name', 'last_name', 'email', 'phone', 'timestamp',
        // Dropped here rather than blobbed. Enrichment cannot grant consent: the
        // row was created at the contact gate and already carries whatever tick
        // was given there. Accepting one on this path would let a later request
        // restate consent for a row, and letting it fall through to enrichMeta
        // would bury it in metadata, where it looks like a record without being
        // queryable or usable as evidence.
        'phone_consent',
      ])
      const enrichMeta: Record<string, unknown> = {}
      for (const [key, value] of Object.entries(body)) {
        if (!knownTopLevel.has(key)) enrichMeta[key] = value
      }

      const sql = neon(databaseUrl)
      const updated = await sql`
        UPDATE leads
        SET selected_path = COALESCE(${body.selected_path || null}, selected_path),
            selected_team = COALESCE(${body.selected_team || null}, selected_team),
            metadata = COALESCE(metadata, '{}'::jsonb) || ${JSON.stringify(enrichMeta)}::jsonb,
            updated_at = NOW()
        WHERE id = ${id} AND form_type = 'fit_quiz'
        RETURNING id
      `
      return NextResponse.json({ success: true, id: updated[0]?.id ?? null })
    }

    // Validate required fields
    const errors: Record<string, string> = {}
    if (!body.form_type || !VALID_FORM_TYPES.includes(body.form_type)) {
      errors.form_type = 'Invalid form type'
    }

    // Anonymous form types (no contact info required)
    const ANONYMOUS_FORM_TYPES = ['newsletter']
    const isAnonymous = ANONYMOUS_FORM_TYPES.includes(body.form_type)

    if (!isAnonymous) {
      if (!body.first_name?.trim()) errors.first_name = 'First name is required'
      if (!body.last_name?.trim()) errors.last_name = 'Last name is required'
      if (!body.email?.trim()) errors.email = 'Email is required'
      else if (!validateEmail(body.email)) errors.email = 'Invalid email format'

      if (PHONE_REQUIRED_FORM_TYPES.includes(body.form_type)) {
        if (!body.phone?.trim()) errors.phone = 'Phone number is required'
        else if (!validatePhone(body.phone)) errors.phone = 'Please enter a valid phone number'
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // Build clean lead data
    const lead = {
      first_name: body.first_name?.trim() || null,
      last_name: body.last_name?.trim() || null,
      email: body.email?.trim()?.toLowerCase() || null,
      phone: body.phone?.trim() || null,
      form_type: body.form_type,
      source_route: body.source_route || null,
      source_section: body.source_section || null,
      selected_path: body.selected_path || null,
      selected_team: body.selected_team || null,
      campaign_id: body.campaign_id || null,
      partner_ref: body.partner_ref?.trim() || null,
    }

    // TCPA. The rule itself lives in src/lib/phone-consent.ts, where it can be
    // tested without a request or a database — the consent record is the one
    // part of a lead that cannot be reconstructed later, so it is worth being
    // able to prove.
    //
    // This deliberately does NOT reject a phone submitted without the tick,
    // unlike the sibling sites, because four form types here make the phone
    // mandatory and rejecting would break them. Consent also may not be a
    // condition of service, so the box stays optional. Unconsented rows are
    // call-only, and every surface that shows a number says which it is.
    const consent = derivePhoneConsent(body.phone_consent, lead.phone)

    // Collect extra fields into metadata JSON
    const knownKeys = new Set([
      'first_name', 'last_name', 'email', 'phone', 'form_type',
      'source_route', 'source_section', 'selected_path', 'selected_team',
      'campaign_id', 'partner_ref', 'timestamp',
      // Stored in its own columns below, not as loose metadata: a consent
      // record buried in a JSON blob is neither queryable nor evidence.
      'phone_consent',
    ])
    const metadata: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(body)) {
      if (!knownKeys.has(key)) {
        metadata[key] = value
      }
    }

    // Store in Neon Postgres
    const databaseUrl = process.env.DATABASE_URL
    if (databaseUrl) {
      const sql = neon(databaseUrl)
      const result = await sql`
        INSERT INTO leads (first_name, last_name, email, phone, form_type, source_route, source_section, selected_path, selected_team, campaign_id, metadata, consent_at, consent_phone)
        VALUES (${lead.first_name}, ${lead.last_name}, ${lead.email}, ${lead.phone}, ${lead.form_type}, ${lead.source_route}, ${lead.source_section}, ${lead.selected_path}, ${lead.selected_team}, ${lead.campaign_id}, ${JSON.stringify({ ...metadata, partner_ref: lead.partner_ref })}::jsonb, ${consent.consent_at}, ${consent.consent_phone})
        RETURNING id, created_at
      `
      const leadId = result[0]?.id

      if (lead.email) {
        upsertContact({
          email: lead.email,
          firstName: lead.first_name,
          lastName: lead.last_name,
          phone: lead.phone,
          source: `lead:${lead.form_type}`,
          teamSlug: lead.selected_team,
          // Carried, not recomputed. contacts is the list outreach actually runs
          // from, so the consent has to survive the hop — otherwise every number
          // on that list looks identical whether or not anyone agreed to it.
          consentAt: consent.consent_at,
          consentPhone: consent.consent_phone,
        }).catch(() => {}) // Best-effort — must never block lead capture
      }

      // Fire-and-forget: send new lead notification
      sendNewLeadAlert({
        id: leadId,
        first_name: lead.first_name,
        last_name: lead.last_name,
        email: lead.email,
        phone: lead.phone,
        form_type: lead.form_type,
        consent_at: consent.consent_at,
        consent_phone: consent.consent_phone,
        selected_path: body.selected_path ?? null,
        selected_team: body.selected_team ?? null,
        source_route: lead.source_route,
        metadata,
      }).catch(() => {}) // Silent — notification failure must not block lead capture

      return NextResponse.json({
        success: true,
        id: leadId,
      })
    } else {
      // No database configured — log warning
      console.warn('[LEAD] No DATABASE_URL configured. Lead not persisted:', lead.form_type, lead.email)
      return NextResponse.json({ success: true })
    }
  } catch (err) {
    console.error('[LEAD] Error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

// GET /api/leads — Retrieve leads (protected by API key)
export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key')
  if (!apiKey || apiKey !== process.env.LEADS_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return NextResponse.json({ error: 'No database configured' }, { status: 503 })
  }

  const sql = neon(databaseUrl)
  const { searchParams } = new URL(request.url)
  const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 200)
  const offset = parseInt(searchParams.get('offset') || '0')
  const formType = searchParams.get('form_type')

  let leads
  if (formType) {
    leads = await sql`
      SELECT * FROM leads WHERE form_type = ${formType} ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
    `
  } else {
    leads = await sql`
      SELECT * FROM leads ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}
    `
  }

  const countResult = await sql`SELECT COUNT(*) as total FROM leads`

  return NextResponse.json({
    leads,
    total: countResult[0]?.total,
    limit,
    offset,
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
    },
  })
}
