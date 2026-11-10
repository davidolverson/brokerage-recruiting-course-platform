import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { sendEmailBatch } from './notifications'

describe('sendEmailBatch', () => {
  const originalFetch = global.fetch
  const originalEnv = { ...process.env }

  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key'
    process.env.RESEND_FROM_EMAIL = 'test@example.com'
  })

  afterEach(() => {
    global.fetch = originalFetch
    process.env = { ...originalEnv }
  })

  it('returns ok:true with no fetch call for an empty batch', async () => {
    const fetchSpy = vi.fn()
    global.fetch = fetchSpy as unknown as typeof fetch
    const result = await sendEmailBatch([])
    expect(result).toEqual({ ok: true })
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('rejects batches larger than 100 without calling fetch', async () => {
    const fetchSpy = vi.fn()
    global.fetch = fetchSpy as unknown as typeof fetch
    const messages = Array.from({ length: 101 }, (_, i) => ({ to: `${i}@example.com`, subject: 's', html: '<p>h</p>', text: 'h' }))
    const result = await sendEmailBatch(messages)
    expect(result.ok).toBe(false)
    expect(result.error).toMatch(/100/)
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('posts to the Resend batch endpoint and returns ok:true on success', async () => {
    const fetchSpy = vi.fn().mockResolvedValue({ ok: true, text: async () => '' })
    global.fetch = fetchSpy as unknown as typeof fetch
    const result = await sendEmailBatch([{ to: 'a@example.com', subject: 's', html: '<p>h</p>', text: 'h' }])
    expect(result).toEqual({ ok: true })
    expect(fetchSpy).toHaveBeenCalledWith(
      'https://api.resend.com/emails/batch',
      expect.objectContaining({ method: 'POST' })
    )
  })

  it('returns ok:false with the response body on a non-ok response', async () => {
    const fetchSpy = vi.fn().mockResolvedValue({ ok: false, text: async () => 'rate limited' })
    global.fetch = fetchSpy as unknown as typeof fetch
    const result = await sendEmailBatch([{ to: 'a@example.com', subject: 's', html: '<p>h</p>', text: 'h' }])
    expect(result).toEqual({ ok: false, error: 'rate limited' })
  })

  it('returns ok:false when RESEND_API_KEY is not configured', async () => {
    delete process.env.RESEND_API_KEY
    const result = await sendEmailBatch([{ to: 'a@example.com', subject: 's', html: '<p>h</p>', text: 'h' }])
    expect(result.ok).toBe(false)
  })
})
