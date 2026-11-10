import { describe, it, expect, vi, afterEach } from 'vitest'
import { adminFetch, loginRedirectUrl, isSessionExpired, SessionExpiredError } from './admin-fetch'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('loginRedirectUrl', () => {
  it('carries the page the user was on so they land back where they were', () => {
    expect(loginRedirectUrl('/events')).toBe('/login?expired=1&redirect=%2Fevents')
  })

  it('keeps the query string with it', () => {
    expect(loginRedirectUrl('/leads', '?status=new')).toBe(
      '/login?expired=1&redirect=%2Fleads%3Fstatus%3Dnew',
    )
  })

  it('refuses a protocol-relative path, which looks like a site path and is not one', () => {
    expect(loginRedirectUrl('//evil.com')).toBe('/login?expired=1&redirect=%2Fdashboard')
  })

  it('refuses an absolute url', () => {
    expect(loginRedirectUrl('https://evil.com/steal')).toBe('/login?expired=1&redirect=%2Fdashboard')
  })
})

describe('adminFetch', () => {
  it('returns the response untouched when the call succeeds', async () => {
    const ok = new Response(JSON.stringify({ events: [] }), { status: 200 })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(ok))

    await expect(adminFetch('/api/admin/events')).resolves.toBe(ok)
  })

  it('sends the session cookie, or every admin call is anonymous', async () => {
    const spy = vi.fn().mockResolvedValue(new Response('{}', { status: 200 }))
    vi.stubGlobal('fetch', spy)

    await adminFetch('/api/admin/events', { method: 'POST' })

    expect(spy.mock.calls[0][1]).toMatchObject({ credentials: 'include', method: 'POST' })
  })

  it('THROWS on 401 rather than handing back a response a .catch() can turn into an empty list', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('Unauthorized', { status: 401 })))

    await expect(adminFetch('/api/admin/events')).rejects.toBeInstanceOf(SessionExpiredError)
  })

  it('leaves other failures alone so a real 500 still reaches the screen that reports it', async () => {
    const boom = new Response('nope', { status: 500 })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(boom))

    await expect(adminFetch('/api/admin/events')).resolves.toBe(boom)
  })

  it('does not treat a 403 as an expired session — that is a role problem, not a sign-in problem', async () => {
    const forbidden = new Response('nope', { status: 403 })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(forbidden))

    await expect(adminFetch('/api/admin/events')).resolves.toBe(forbidden)
  })
})

describe('isSessionExpired', () => {
  it('recognises its own error', () => {
    expect(isSessionExpired(new SessionExpiredError())).toBe(true)
  })

  it('does not claim an ordinary failure was a sign-out', () => {
    expect(isSessionExpired(new Error('Save failed'))).toBe(false)
    expect(isSessionExpired(undefined)).toBe(false)
  })
})
