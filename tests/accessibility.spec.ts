import { test, expect } from '@playwright/test'

const KEY_PAGES = ['/', '/join-a-team', '/network', '/contact', '/apply', '/faq', '/quiz']

for (const path of KEY_PAGES) {
  test(`${path} — has proper heading hierarchy`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' })

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // h1 should not be empty
    const h1Text = await page.locator('h1').first().textContent()
    expect(h1Text?.trim().length).toBeGreaterThan(0)
  })

  test(`${path} — all images have alt text`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' })

    const images = page.locator('img')
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      const ariaHidden = await images.nth(i).getAttribute('aria-hidden')
      // Image must have alt text OR be aria-hidden
      expect(alt !== null || ariaHidden === 'true',
        `Image ${i} on ${path} missing alt text`).toBe(true)
    }
  })

  test(`${path} — interactive elements have focus-visible styles`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' })

    // Tab to first link/button
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // Check that the focused element has an outline
    const outline = await page.evaluate(() => {
      const el = document.activeElement
      if (!el) return 'none'
      const style = window.getComputedStyle(el)
      return style.outlineStyle
    })

    // Should have some outline (not 'none')
    expect(outline).not.toBe('none')
  })

  test(`${path} — nav has aria-label`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' })

    const nav = page.locator('nav[aria-label]')
    const count = await nav.count()
    expect(count).toBeGreaterThan(0)
  })
}

// Test form accessibility
test('contact form — inputs have labels', async ({ page }) => {
  await page.goto('/contact', { waitUntil: 'networkidle' })

  // All inputs should have associated labels
  const inputs = page.locator('input:not([type="hidden"]), select, textarea')
  const count = await inputs.count()

  for (let i = 0; i < count; i++) {
    const input = inputs.nth(i)
    const id = await input.getAttribute('id')
    const ariaLabel = await input.getAttribute('aria-label')
    const ariaLabelledBy = await input.getAttribute('aria-labelledby')

    if (id) {
      const label = page.locator(`label[for="${id}"]`)
      const labelExists = await label.count() > 0
      expect(labelExists || !!ariaLabel || !!ariaLabelledBy,
        `Input ${id} on /contact missing label`).toBe(true)
    }
  }
})

// Test color contrast (rough check)
test('homepage — text-primary CSS variable is dark', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  // Check the CSS custom property value directly
  const textPrimary = await page.evaluate(() => {
    return getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary').trim()
  })

  // Our text-primary should be #111827 (dark)
  expect(textPrimary).toBe('#111827')
})
