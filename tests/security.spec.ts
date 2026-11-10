import { test, expect } from '@playwright/test'

test('homepage — has required security headers', async ({ request }) => {
  const response = await request.get('/')

  const headers = response.headers()

  // X-Frame-Options
  expect(headers['x-frame-options']).toBe('DENY')

  // X-Content-Type-Options
  expect(headers['x-content-type-options']).toBe('nosniff')

  // Referrer-Policy
  expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin')

  // HSTS
  expect(headers['strict-transport-security']).toContain('max-age=')

  // No X-Powered-By (should be removed)
  expect(headers['x-powered-by']).toBeUndefined()
})

test('homepage — CSP header present', async ({ request }) => {
  const response = await request.get('/')
  const headers = response.headers()

  const csp = headers['content-security-policy']
  expect(csp).toBeDefined()
  expect(csp).toContain("default-src 'self'")
})

test('/api/leads — rejects GET requests', async ({ request }) => {
  const response = await request.get('/api/leads')
  expect(response.status()).toBe(405)
})

test('/api/leads — validates required fields', async ({ request }) => {
  const response = await request.post('/api/leads', {
    data: { form_type: 'general_contact' }, // missing name/email
  })
  expect(response.status()).toBe(400)
  const body = await response.json()
  expect(body.errors).toBeDefined()
})

test('/api/leads — rejects invalid form_type', async ({ request }) => {
  const response = await request.post('/api/leads', {
    data: {
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      form_type: 'invalid_type',
    },
  })
  expect(response.status()).toBe(400)
})

test('no console errors on homepage', async ({ page }) => {
  const errors: string[] = []
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text())
  })

  await page.goto('/', { waitUntil: 'networkidle' })

  // Filter out known non-critical errors
  const criticalErrors = errors.filter(e =>
    !e.includes('favicon') &&
    !e.includes('404') &&
    !e.includes('hydration')
  )

  expect(criticalErrors).toHaveLength(0)
})
