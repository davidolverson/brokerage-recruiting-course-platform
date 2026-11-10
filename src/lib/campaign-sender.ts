import {
  getCampaign,
  getQueuedRecipients,
  markRecipientsSent,
  markRecipientsFailed,
  refreshCampaignCounts,
} from '@/lib/db/campaigns'
import { renderMergeTags, appendUnsubscribeFooter } from '@/lib/campaign-mergetags'
import { sendEmailBatch } from '@/lib/notifications'

const CHUNK_SIZE = 100
const MAX_PER_REQUEST = 500

export interface SendBatchResult {
  sent: number
  failed: number
  queued: number
  status: 'sending' | 'sent'
}

// Drains up to MAX_PER_REQUEST queued recipients for a campaign, in chunks
// of 100 (Resend's batch limit). Safe to call repeatedly — each call only
// touches rows still in 'queued' status. Used both for the initial send
// (Task 12) and the manual "Resume sending" action (Task 13) when a segment
// is larger than one request can drain.
export async function processCampaignBatch(campaignId: number, siteUrl: string): Promise<SendBatchResult> {
  const campaign = await getCampaign(campaignId)
  if (!campaign) throw new Error('Campaign not found')

  let sent = 0
  let failed = 0
  let processed = 0

  while (processed < MAX_PER_REQUEST) {
    const recipients = await getQueuedRecipients(campaignId, CHUNK_SIZE)
    if (recipients.length === 0) break

    const messages = recipients.map((r) => {
      const renderedHtml = renderMergeTags(campaign.html_body, { firstName: r.first_name })
      const renderedText = renderMergeTags(campaign.text_body, { firstName: r.first_name })
      const unsubscribeUrl = `${siteUrl}/unsubscribe?token=${r.unsubscribe_token}`
      const { html, text } = appendUnsubscribeFooter(renderedHtml, renderedText, unsubscribeUrl)
      return { to: r.email, subject: campaign.subject, html, text }
    })

    const result = await sendEmailBatch(messages)
    const ids = recipients.map((r) => r.id)
    if (result.ok) {
      await markRecipientsSent(ids)
      sent += ids.length
    } else {
      await markRecipientsFailed(ids, result.error ?? 'Unknown error')
      failed += ids.length
    }
    processed += recipients.length
  }

  const counts = await refreshCampaignCounts(campaignId)
  return { sent, failed, queued: counts.queued, status: counts.queued === 0 ? 'sent' : 'sending' }
}
