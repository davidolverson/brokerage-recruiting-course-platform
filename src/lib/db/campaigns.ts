import { neon } from '@neondatabase/serverless'
import type { SegmentFilter } from '@/lib/segment-filter'

export interface Campaign {
  id: number
  subject: string
  html_body: string
  text_body: string
  segment_filter: SegmentFilter
  status: 'draft' | 'sending' | 'sent'
  created_by: string
  recipient_count: number
  sent_count: number
  failed_count: number
  created_at: string
  sent_at: string | null
}

export interface RecipientForSend {
  id: number
  contact_id: number
  email: string
  first_name: string | null
  unsubscribe_token: string
}

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL not configured')
  return neon(url)
}

export async function createCampaign(input: {
  subject: string
  htmlBody: string
  textBody: string
  segmentFilter: SegmentFilter
  createdBy: string
}): Promise<Campaign> {
  const sql = getSql()
  const rows = await sql`
    INSERT INTO campaigns (subject, html_body, text_body, segment_filter, status, created_by)
    VALUES (${input.subject}, ${input.htmlBody}, ${input.textBody}, ${JSON.stringify(input.segmentFilter)}::jsonb, 'sending', ${input.createdBy})
    RETURNING *
  `
  return rows[0] as unknown as Campaign
}

export async function getCampaign(id: number): Promise<Campaign | null> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM campaigns WHERE id = ${id}`
  return (rows[0] as unknown as Campaign) ?? null
}

export async function listCampaigns(): Promise<Campaign[]> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM campaigns ORDER BY created_at DESC`
  return rows as unknown as Campaign[]
}

// Builds a dynamic multi-row VALUES list for the optional/variable-length
// contactIds and executes via the callable (non-tagged-template) form of
// `neon()`, since this driver does not support composing nested `sql\`...\``
// fragments (see src/lib/db/contacts.ts for the same pattern).
export async function queueRecipients(campaignId: number, contactIds: number[]): Promise<void> {
  if (contactIds.length === 0) return
  const sql = getSql()
  const values = contactIds.map((_, i) => `($1, $${i + 2})`).join(', ')
  await sql.query(
    `INSERT INTO campaign_recipients (campaign_id, contact_id) VALUES ${values} ON CONFLICT DO NOTHING`,
    [campaignId, ...contactIds]
  )
  await sql`UPDATE campaigns SET recipient_count = ${contactIds.length} WHERE id = ${campaignId}`
}

export async function getQueuedRecipients(campaignId: number, limit: number): Promise<RecipientForSend[]> {
  const sql = getSql()
  const rows = await sql`
    SELECT cr.id, cr.contact_id, c.email, c.first_name, c.unsubscribe_token
    FROM campaign_recipients cr
    JOIN contacts c ON c.id = cr.contact_id
    WHERE cr.campaign_id = ${campaignId} AND cr.status = 'queued' AND c.unsubscribed = false
    ORDER BY cr.id
    LIMIT ${limit}
  `
  return rows as unknown as RecipientForSend[]
}

export async function markRecipientsSent(recipientIds: number[]): Promise<void> {
  if (recipientIds.length === 0) return
  const sql = getSql()
  await sql`UPDATE campaign_recipients SET status = 'sent', sent_at = now() WHERE id = ANY(${recipientIds})`
}

export async function markRecipientsFailed(recipientIds: number[], error: string): Promise<void> {
  if (recipientIds.length === 0) return
  const sql = getSql()
  await sql`UPDATE campaign_recipients SET status = 'failed', error = ${error} WHERE id = ANY(${recipientIds})`
}

export async function refreshCampaignCounts(campaignId: number): Promise<{ sent: number; failed: number; queued: number }> {
  const sql = getSql()
  const rows = await sql`
    SELECT
      COUNT(*) FILTER (WHERE status = 'sent')::int AS sent,
      COUNT(*) FILTER (WHERE status = 'failed')::int AS failed,
      COUNT(*) FILTER (WHERE status = 'queued')::int AS queued
    FROM campaign_recipients WHERE campaign_id = ${campaignId}
  `
  const counts = rows[0] as { sent: number; failed: number; queued: number }
  await sql`
    UPDATE campaigns SET
      sent_count = ${counts.sent},
      failed_count = ${counts.failed},
      status = CASE WHEN ${counts.queued} = 0 THEN 'sent' ELSE status END,
      sent_at = CASE WHEN ${counts.queued} = 0 AND sent_at IS NULL THEN now() ELSE sent_at END
    WHERE id = ${campaignId}
  `
  return counts
}
