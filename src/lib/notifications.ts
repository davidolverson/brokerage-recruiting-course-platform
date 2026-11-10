import { neon } from '@neondatabase/serverless'
import { phoneConsentLine } from './phone-consent'

interface LeadForNotification {
  id: number
  first_name: string | null
  last_name: string | null
  email: string | null
  phone: string | null
  form_type: string
  /**
   * The consent record itself, not a boolean summary of it. Stated in the alert
   * because whoever opens it is the person about to make the call, and guessing
   * wrong costs per message.
   *
   * The pair rather than a flag: consent attaches to the number, so the only
   * way to answer "may I text this" is to compare the number consented to
   * against the number in front of you. A boolean computed somewhere else is a
   * second place that decision can be made, and a second place it can be made
   * wrong.
   */
  consent_at?: string | Date | null
  consent_phone?: string | null
  selected_path: string | null
  selected_team: string | null
  source_route: string | null
  /** Extra form fields (subject, message, license status, etc.) */
  metadata?: Record<string, unknown>
}

// "license_status" -> "License Status"
function humanizeKey(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

export async function sendEmail(to: string, subject: string, text: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey) {
    console.warn('[NOTIFY] No RESEND_API_KEY configured')
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
      console.error('[NOTIFY] Resend error:', error)
      return false
    }
    return true
  } catch (err) {
    console.error('[NOTIFY] Send failed:', err)
    return false
  }
}

export interface BatchEmailMessage {
  to: string
  subject: string
  html: string
  text: string
}

// Resend's batch endpoint caps at 100 messages/call and returns a single
// pass/fail for the whole call (no documented per-item partial-failure
// shape), so campaign-sender.ts treats each 100-message chunk atomically.
export async function sendEmailBatch(messages: BatchEmailMessage[]): Promise<{ ok: boolean; error?: string }> {
  if (messages.length === 0) return { ok: true }
  if (messages.length > 100) {
    return { ok: false, error: 'Batch exceeds Resend limit of 100 messages' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey) {
    console.warn('[NOTIFY] No RESEND_API_KEY configured')
    return { ok: false, error: 'No RESEND_API_KEY configured' }
  }

  try {
    const res = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messages.map((m) => ({ from, to: m.to, subject: m.subject, html: m.html, text: m.text }))),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('[NOTIFY] Batch send error:', error)
      return { ok: false, error }
    }
    return { ok: true }
  } catch (err) {
    console.error('[NOTIFY] Batch send failed:', err)
    return { ok: false, error: String(err) }
  }
}

export async function sendNewLeadAlert(lead: LeadForNotification): Promise<void> {
  const name = [lead.first_name, lead.last_name].filter(Boolean).join(' ') || 'Anonymous'
  const subject = `New Lead: ${name} — ${lead.form_type.replace(/_/g, ' ')}`

  const lines = [
    `New lead submitted on Acme Realty`,
    ``,
    `── Contact ──`,
    `Name:  ${name}`,
    `Email: ${lead.email ?? '—'}`,
    // Whoever opens this alert is the person about to make the call, so the
    // permission is stated on the number itself rather than left to be assumed.
    `Phone: ${lead.phone ? phoneConsentLine({ consent_at: lead.consent_at ?? null, consent_phone: lead.consent_phone ?? null }, lead.phone) : '—'}`,
    ``,
    `── Inquiry ──`,
    `Form:          ${lead.form_type.replace(/_/g, ' ')}`,
    `Path:          ${lead.selected_path || '—'}`,
    `Team Interest: ${lead.selected_team || '—'}`,
    `Source:        ${lead.source_route ?? '—'}`,
  ]

  // Append every extra field the visitor filled in (subject, message,
  // license status, etc.) so the team can act without opening the admin CP.
  const detailEntries = Object.entries(lead.metadata ?? {}).filter(
    ([, value]) => value != null && String(value).trim() !== '',
  )
  if (detailEntries.length > 0) {
    lines.push('', `── Details ──`)
    for (const [key, value] of detailEntries) {
      lines.push(`${humanizeKey(key)}: ${String(value)}`)
    }
  }

  lines.push(
    ``,
    `View lead: ${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/leads/${lead.id}`,
  )
  const text = lines.join('\n')

  // Always notify the owner directly via env var
  const ownerEmail = process.env.LEAD_NOTIFY_EMAIL
  if (ownerEmail) {
    await sendEmail(ownerEmail, subject, text)
  }

  // Also notify admin_users from database (team leaders, etc.)
  const sql = getSql()
  if (!sql) return

  try {
    const recipients = await sql`
      SELECT email FROM admin_users
      WHERE is_active = true
      AND (role = 'owner' OR (role = 'team_leader' AND team_slug = ${lead.selected_team}))
      AND notification_preferences->>'instant_new_lead' = 'true'
    `

    for (const recipient of recipients) {
      // Skip if already sent to owner above
      if (String(recipient.email) === ownerEmail) continue

      const sent = await sendEmail(String(recipient.email), subject, text)

      await sql`
        INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
        VALUES (${String(recipient.email)}, 'new_lead', ${JSON.stringify({ lead_id: lead.id })}::jsonb, ${sent ? new Date().toISOString() : null}, ${sent ? null : 'Send failed'})
      `
    }
  } catch {
    // DB query failure should not prevent owner notification (already sent above)
  }
}

export async function sendLeadAssignedAlert(
  leadId: number,
  leadName: string,
  assignedTeam: string,
): Promise<void> {
  const sql = getSql()
  if (!sql) return

  // Get team leader for the assigned team
  const recipients = await sql`
    SELECT email FROM admin_users
    WHERE is_active = true AND role = 'team_leader' AND team_slug = ${assignedTeam}
    AND notification_preferences->>'instant_assignment' = 'true'
  `

  if (recipients.length === 0) return

  const subject = `Lead Assigned: ${leadName} → ${assignedTeam}`
  const text = [
    `A lead has been assigned to your team.`,
    ``,
    `Lead: ${leadName}`,
    `Team: ${assignedTeam}`,
    ``,
    `View lead: ${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/leads/${leadId}`,
  ].join('\n')

  for (const recipient of recipients) {
    const sent = await sendEmail(String(recipient.email), subject, text)
    await sql`
      INSERT INTO notification_queue (recipient_email, type, payload, sent_at, error)
      VALUES (${String(recipient.email)}, 'lead_assigned', ${JSON.stringify({ lead_id: leadId, team: assignedTeam })}::jsonb, ${sent ? new Date().toISOString() : null}, ${sent ? null : 'Send failed'})
    `
  }
}

export async function sendInviteEmail(
  toEmail: string,
  inviterName: string,
  role: string,
  token: string,
): Promise<boolean> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  const subject = `You've been invited to Acme Realty Admin`
  const text = [
    `${inviterName} has invited you to join Acme Realty Admin as ${role === 'team_leader' ? 'a Team Leader' : 'Staff'}.`,
    ``,
    `Click the link below to set up your account:`,
    `${baseUrl}/accept-invite?token=${token}`,
    ``,
    `This link expires in 72 hours.`,
    ``,
    `— Acme Realty`,
  ].join('\n')

  return sendEmail(toEmail, subject, text)
}
