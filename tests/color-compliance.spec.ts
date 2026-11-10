import { test, expect } from '@playwright/test'

const BANNED_COLORS = [
  '#EA580C', '#E5740E', '#CC6200', '#C55F00',  // oranges
  '#1E40AF', '#0D2137', '#1a56b0', '#1a3a6b',  // blues/navys
  '#E8F0FE', '#EEF2FF', '#E0E7FF',              // light blues
  '#FEF0E6', '#FFF3E8', '#FEF3E8',              // light oranges
]

// Convert hex to rgb for comparison
function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgb(${r}, ${g}, ${b})`
}

const BANNED_RGB = BANNED_COLORS.map(hexToRgb)

const PAGES = [
  '/',
  '/join-a-team',
  '/network',
  '/teams',
  '/agent-advantage',
  '/agent-advantage/financial-legal',
  '/training-events',
  '/community',
  '/contact',
  '/apply',
  '/quiz',
  '/faq',
  '/book-a-tour',
]

for (const page of PAGES) {
  test(`${page} — no banned colors in computed styles`, async ({ page: p }) => {
    await p.goto(page, { waitUntil: 'networkidle' })

    // Check all visible elements for banned colors
    const violations = await p.evaluate((bannedRgb) => {
      const found: string[] = []
      const elements = document.querySelectorAll('*')

      for (const el of elements) {
        const style = window.getComputedStyle(el)
        const color = style.color
        const bg = style.backgroundColor
        const borderColor = style.borderColor

        for (const banned of bannedRgb) {
          if (color === banned) found.push(`color: ${banned} on <${el.tagName.toLowerCase()}> "${el.textContent?.slice(0, 30)}"`)
          if (bg === banned) found.push(`bg: ${banned} on <${el.tagName.toLowerCase()}> "${el.textContent?.slice(0, 30)}"`)
          if (borderColor === banned) found.push(`border: ${banned} on <${el.tagName.toLowerCase()}>`)
        }
      }

      return found
    }, BANNED_RGB)

    expect(violations, `Found banned colors on ${page}:\n${violations.join('\n')}`).toHaveLength(0)
  })
}

// Test that primary buttons are black/white
test('homepage — primary buttons use black bg with white text', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  // Find a visible black button
  const button = page.locator('a.bg-black, a[class*="bg-black"]').first()
  const bg = await button.evaluate(el => window.getComputedStyle(el).backgroundColor)
  const color = await button.evaluate(el => window.getComputedStyle(el).color)

  // Should be black/near-black bg with white text
  expect(bg).toMatch(/rgba?\(0, 0, 0/)
  expect(color).toBe('rgb(255, 255, 255)')
})

// Test hover state on buttons
test('homepage — button hover changes to dark grey, not blue/orange', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const cta = page.locator('a[href="/book-a-tour"]').first()
  await cta.hover()

  const bg = await cta.evaluate(el => window.getComputedStyle(el).backgroundColor)

  // Should be black or dark grey, NOT orange or blue
  const r = parseInt(bg.match(/\d+/g)?.[0] || '255')
  const g = parseInt(bg.match(/\d+/g)?.[1] || '255')
  const b = parseInt(bg.match(/\d+/g)?.[2] || '255')

  // All RGB channels should be close together (grey/black) not skewed (color)
  expect(Math.abs(r - g)).toBeLessThan(30)
  expect(Math.abs(g - b)).toBeLessThan(30)
  expect(r).toBeLessThan(100) // Should be dark
})

// Test header nav hover
test('header nav — hover uses grey, not blue', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const navLink = page.locator('nav a:has-text("Teams")').first()
  await navLink.hover()

  const color = await navLink.evaluate(el => window.getComputedStyle(el).color)
  const r = parseInt(color.match(/\d+/g)?.[0] || '0')
  const g = parseInt(color.match(/\d+/g)?.[1] || '0')
  const b = parseInt(color.match(/\d+/g)?.[2] || '0')

  // Should be grey (balanced RGB), not blue (high B)
  expect(Math.abs(r - g)).toBeLessThan(30)
  expect(Math.abs(g - b)).toBeLessThan(30)
})

// Test footer uses black bg
test('footer — uses black background', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const footer = page.locator('footer')
  const bg = await footer.evaluate(el => window.getComputedStyle(el).backgroundColor)

  expect(bg).toBe('rgb(0, 0, 0)')
})

// Test no placeholder testimonials on homepage
test('homepage — no placeholder testimonials', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const body = await page.textContent('body')
  expect(body).not.toContain('[Placeholder]')
  expect(body).not.toContain('Agent testimonial pending')
})
