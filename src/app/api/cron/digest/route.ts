import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false

  // Vercel Cron sends this header automatically
  const cronHeader = req.headers.get('x-cron-secret')
  if (cronHeader === secret) return true

  // Also accept Authorization: Bearer <secret>
  const auth = req.headers.get('authorization')
  if (auth === `Bearer ${secret}`) return true

  return false
}

async function sendEmail(to: string, subject: string, text: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey) {
    console.warn('[DIGEST] No RESEND_API_KEY configured')
    return false
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject, text }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('[DIGEST] Resend error:', error)
      return false
    }
    return true
  } catch (err) {
    console.error('[DIGEST] Send failed:', err)
    return false
  }
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sql = getSql()
  let sent = 0
  let errors = 0

  try {
    // 1. Get all recipients who opted in to weekly digest
    const recipients = await sql`
      SELECT id, email, name FROM admin_users
      WHERE is_active = true
      AND notification_preferences->>'weekly_digest' = 'true'
    `

    if (recipients.length === 0) {
      return NextResponse.json({ sent: 0, errors: 0, message: 'No digest recipients' })
    }

    // 2. Gather stats for the past 7 days
    const now = new Date()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()

    // Leads created this week
    const [leadsCreated] = await sql`
      SELECT COUNT(*)::int AS count FROM leads
      WHERE created_at >= ${weekAgo}
    `

    // Unworked leads (status = 'new')
    const [unworkedLeads] = await sql`
      SELECT COUNT(*)::int AS count FROM leads
      WHERE status = 'new'
    `

    // Path split (team vs grid)
    const pathSplit = await sql`
      SELECT
        COALESCE(selected_path, 'unspecified') AS path,
        COUNT(*)::int AS count
      FROM leads
      WHERE created_at >= ${weekAgo}
      GROUP BY selected_path
      ORDER BY count DESC
    `

    // Top 3 source routes
    const topSources = await sql`
      SELECT
        COALESCE(source_route, 'direct') AS source,
        COUNT(*)::int AS count
      FROM leads
      WHERE created_at >= ${weekAgo}
      GROUP BY source_route
      ORDER BY count DESC
      LIMIT 3
    `

    // Top 3 form types
    const topForms = await sql`
      SELECT
        form_type,
        COUNT(*)::int AS count
      FROM leads
      WHERE created_at >= ${weekAgo}
      GROUP BY form_type
      ORDER BY count DESC
      LIMIT 3
    `

    // Leads that moved to 'won' or 'qualified' this week
    const advancedLeads = await sql`
      SELECT
        id,
        COALESCE(first_name, '') || ' ' || COALESCE(last_name, '') AS name,
        status,
        updated_at
      FROM leads
      WHERE status IN ('won', 'qualified')
      AND updated_at >= ${weekAgo}
      ORDER BY updated_at DESC
    `

    // 3. Build digest text
    const pathLines = pathSplit.map(
      (r: Record<string, unknown>) => `  ${String(r.path)}: ${r.count}`
    ).join('\n')

    const sourceLines = topSources.length > 0
      ? topSources.map(
          (r: Record<string, unknown>, i: number) => `  ${i + 1}. ${String(r.source)} (${r.count})`
        ).join('\n')
      : '  No leads this week'

    const formLines = topForms.length > 0
      ? topForms.map(
          (r: Record<string, unknown>, i: number) => `  ${i + 1}. ${String(r.form_type).replace(/_/g, ' ')} (${r.count})`
        ).join('\n')
      : '  No leads this week'

    const advancedLines = advancedLeads.length > 0
      ? advancedLeads.map(
          (r: Record<string, unknown>) => `  - ${String(r.name).trim() || 'Anonymous'} → ${r.status}`
        ).join('\n')
      : '  None this week'

    const weekEnd = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const weekStart = new Date(weekAgo).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    const digestText = [
      `Acme Realty — Weekly Digest`,
      `${weekStart} – ${weekEnd}`,
      ``,
      `LEADS THIS WEEK: ${leadsCreated.count}`,
      `UNWORKED LEADS: ${unworkedLeads.count}`,
      ``,
      `PATH SPLIT:`,
      pathLines || '  No leads this week',
      ``,
      `TOP SOURCES:`,
      sourceLines,
      ``,
      `TOP FORM TYPES:`,
      formLines,
      ``,
      `WON / QUALIFIED THIS WEEK:`,
      advancedLines,
      ``,
      `—`,
      `View dashboard: ${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/admin`,
    ].join('\n')

    // 4. Send to each recipient and log
    const subject = `Acme Realty Weekly Digest — ${weekEnd}`

    for (const recipient of recipients) {
      const email = String(recipient.email)
      const success = await sendEmail(email, subject, digestText)

      if (success) {
        sent++
      } else {
        errors++
      }

      // Log to notification_queue
      await sql`
        INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
        VALUES (
          ${email},
          'weekly_digest',
          ${JSON.stringify({ week_start: weekAgo, leads_count: leadsCreated.count })}::jsonb,
          ${success ? now.toISOString() : null},
          ${success ? null : 'Send failed'}
        )
      `
    }

    return NextResponse.json({ sent, errors })
  } catch (err) {
    console.error('[DIGEST] Cron error:', err)
    return NextResponse.json(
      { error: 'Internal error', sent, errors },
      { status: 500 },
    )
  }
}
