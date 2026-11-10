import { test, expect } from '@playwright/test'

const ALL_PAGES = [
  { path: '/', title: 'Acme Realty' },
  { path: '/join-a-team', title: 'Join' },
  { path: '/network', title: 'Growth Network' },
  { path: '/teams', title: 'Teams' },
  { path: '/teams/example-investor-team', title: 'Example Investor Team' },
  { path: '/teams/example-residential-team', title: 'Example Residential Team' },
  { path: '/agent-advantage', title: 'Agent Advantage' },
  { path: '/agent-advantage/financial-legal', title: 'Financial' },
  { path: '/agent-advantage/transactions-operations', title: 'Transaction' },
  { path: '/agent-advantage/asset-management', title: 'Asset' },
  { path: '/agent-advantage/education', title: 'Education' },
  { path: '/training-events', title: 'Training' },
  { path: '/community', title: 'Community' },
  { path: '/success-stories', title: 'Success' },
  { path: '/book-a-tour', title: 'Tour' },
  { path: '/contact', title: 'Contact' },
  { path: '/apply', title: 'Apply' },
  { path: '/quiz', title: 'Quiz' },
  { path: '/education', title: 'Education' },
  { path: '/faq', title: 'FAQ' },
  { path: '/partners', title: 'Partner' },
  { path: '/current-agents', title: 'Agent' },
]

for (const { path, title } of ALL_PAGES) {
  test(`${path} — loads with 200 and has content`, async ({ page }) => {
    const response = await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(response?.status()).toBe(200)

    // Page should have real content (not empty)
    const bodyText = await page.textContent('body')
    expect(bodyText?.length).toBeGreaterThan(100)

    // Should have header
    await expect(page.locator('header')).toBeVisible()

    // Should have footer
    await expect(page.locator('footer')).toBeVisible()

    // Footer should have "Brokered by Acme Realty"
    const footerText = await page.textContent('footer')
    expect(footerText).toContain('Brokered by Acme Realty')
  })
}

// Test redirects
const REDIRECTS = [
  { from: '/join', to: '/join-a-team' },
  { from: '/tour', to: '/book-a-tour' },
  { from: '/services', to: '/agent-advantage' },
]

for (const { from, to } of REDIRECTS) {
  test(`redirect: ${from} → ${to}`, async ({ page }) => {
    await page.goto(from, { waitUntil: 'domcontentloaded' })
    expect(page.url()).toContain(to)
  })
}

// Test 404 page
test('404 — shows custom not found page', async ({ page }) => {
  const response = await page.goto('/nonexistent-page-xyz', { waitUntil: 'domcontentloaded' })
  expect(response?.status()).toBe(404)
  const body = await page.textContent('body')
  expect(body).toContain('Page Not Found')
})

// Test sitemap
test('sitemap.xml — valid and has URLs', async ({ page }) => {
  const response = await page.goto('/sitemap.xml')
  expect(response?.status()).toBe(200)
  const body = await page.textContent('body')
  expect(body).toContain('example.com')
})

// Test robots.txt
test('robots.txt — allows crawling', async ({ page }) => {
  const response = await page.goto('/robots.txt')
  expect(response?.status()).toBe(200)
  const body = await page.textContent('body')
  expect(body).toContain('Allow: /')
})

// Test the program name renders on the homepage
test('homepage — mentions the Growth Network program', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  const body = await page.textContent('body')
  expect(body).toContain('Growth Network')
})

// Test API endpoint exists
test('POST /api/leads — returns success or validation error', async ({ request }) => {
  const response = await request.post('/api/leads', {
    data: {
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      form_type: 'general_contact',
      source_route: '/test',
    },
  })
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body.success).toBe(true)
})

test('POST /api/leads — rejects missing email', async ({ request }) => {
  const response = await request.post('/api/leads', {
    data: {
      first_name: 'Test',
      last_name: 'User',
      form_type: 'general_contact',
    },
  })
  expect(response.status()).toBe(400)
  const body = await response.json()
  expect(body.success).toBe(false)
  expect(body.errors.email).toBeDefined()
})
