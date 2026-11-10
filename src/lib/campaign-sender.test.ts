import { describe, it, expect, vi, beforeEach } from 'vitest'
import { processCampaignBatch } from './campaign-sender'
import * as campaignsDb from './db/campaigns'
import * as notifications from './notifications'

vi.mock('./db/campaigns')
vi.mock('./notifications')

const mockCampaign = {
  id: 1,
  subject: 'Test',
  html_body: '<p>Hi {{first_name}}</p>',
  text_body: 'Hi {{first_name}}',
  segment_filter: {},
  status: 'sending' as const,
  created_by: 'owner@example.com',
  recipient_count: 3,
  sent_count: 0,
  failed_count: 0,
  created_at: '2026-01-01T00:00:00Z',
  sent_at: null,
}

function recipient(id: number, email: string) {
  return { id, contact_id: id, email, first_name: 'Jane', unsubscribe_token: `tok-${id}` }
}

describe('processCampaignBatch', () => {
  beforeEach(() => {
    vi.mocked(campaignsDb.getCampaign).mockResolvedValue(mockCampaign)
    vi.mocked(campaignsDb.markRecipientsSent).mockResolvedValue(undefined)
    vi.mocked(campaignsDb.markRecipientsFailed).mockResolvedValue(undefined)
  })

  it('sends a single chunk and marks the campaign sent when the queue empties', async () => {
    vi.mocked(campaignsDb.getQueuedRecipients)
      .mockResolvedValueOnce([recipient(1, 'a@example.com'), recipient(2, 'b@example.com')])
      .mockResolvedValueOnce([])
    vi.mocked(notifications.sendEmailBatch).mockResolvedValue({ ok: true })
    vi.mocked(campaignsDb.refreshCampaignCounts).mockResolvedValue({ sent: 2, failed: 0, queued: 0 })

    const result = await processCampaignBatch(1, 'https://example.com')

    expect(result).toEqual({ sent: 2, failed: 0, queued: 0, status: 'sent' })
    expect(campaignsDb.markRecipientsSent).toHaveBeenCalledWith([1, 2])
    const sentHtml = vi.mocked(notifications.sendEmailBatch).mock.calls[0][0][0].html
    expect(sentHtml).toContain('Hi Jane')
    expect(sentHtml).toContain('/unsubscribe?token=tok-1')
  })

  it('records a failed chunk without blocking, and leaves status sending if queue remains', async () => {
    vi.mocked(campaignsDb.getQueuedRecipients)
      .mockResolvedValueOnce([recipient(1, 'a@example.com')])
      .mockResolvedValueOnce([])
    vi.mocked(notifications.sendEmailBatch).mockResolvedValue({ ok: false, error: 'Resend down' })
    vi.mocked(campaignsDb.refreshCampaignCounts).mockResolvedValue({ sent: 0, failed: 1, queued: 2 })

    const result = await processCampaignBatch(1, 'https://example.com')

    expect(result).toEqual({ sent: 0, failed: 1, queued: 2, status: 'sending' })
    expect(campaignsDb.markRecipientsFailed).toHaveBeenCalledWith([1], 'Resend down')
  })

  it('stops pulling more chunks once it has processed 500 recipients in one call', async () => {
    const chunk = (offset: number) => Array.from({ length: 100 }, (_, i) => recipient(offset + i, `${offset + i}@example.com`))
    vi.mocked(campaignsDb.getQueuedRecipients)
      .mockResolvedValueOnce(chunk(0)).mockResolvedValueOnce(chunk(100))
      .mockResolvedValueOnce(chunk(200)).mockResolvedValueOnce(chunk(300))
      .mockResolvedValueOnce(chunk(400))
    vi.mocked(notifications.sendEmailBatch).mockResolvedValue({ ok: true })
    vi.mocked(campaignsDb.refreshCampaignCounts).mockResolvedValue({ sent: 500, failed: 0, queued: 250 })

    const result = await processCampaignBatch(1, 'https://example.com')

    expect(campaignsDb.getQueuedRecipients).toHaveBeenCalledTimes(5)
    expect(result.status).toBe('sending')
  })

  it('throws if the campaign does not exist', async () => {
    vi.mocked(campaignsDb.getCampaign).mockResolvedValue(null)
    await expect(processCampaignBatch(999, 'https://example.com')).rejects.toThrow('Campaign not found')
  })
})
