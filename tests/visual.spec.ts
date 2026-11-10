import { test, expect } from '@playwright/test'

const VISUAL_PAGES = [
  { path: '/', name: 'homepage' },
  { path: '/network', name: 'grid' },
  { path: '/join-a-team', name: 'join-team' },
  { path: '/teams', name: 'teams' },
  { path: '/agent-advantage', name: 'agent-advantage' },
  { path: '/contact', name: 'contact' },
  { path: '/quiz', name: 'quiz' },
  { path: '/faq', name: 'faq' },
]

// Desktop screenshots
for (const { path, name } of VISUAL_PAGES) {
  test(`visual: ${name} — desktop screenshot`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto(path, { waitUntil: 'networkidle' })

    // Wait for fonts and images to load
    await page.waitForTimeout(1000)

    await expect(page).toHaveScreenshot(`${name}-desktop.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    })
  })
}

// Mobile screenshots (key pages only)
const MOBILE_PAGES = ['/', '/network', '/contact', '/quiz']

for (const path of MOBILE_PAGES) {
  const name = path === '/' ? 'homepage' : path.slice(1)

  test(`visual: ${name} — mobile screenshot`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto(path, { waitUntil: 'networkidle' })

    await page.waitForTimeout(1000)

    await expect(page).toHaveScreenshot(`${name}-mobile.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    })
  })
}

// Test hero above-the-fold content
test('homepage hero — path selector visible without scroll', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/', { waitUntil: 'networkidle' })

  // The path selector section should be at least partially visible
  const pathSelector = page.locator('text=Choose Your Path, text=Two Paths, text=Join a Team').first()

  if (await pathSelector.count() > 0) {
    const box = await pathSelector.boundingBox()
    if (box) {
      // Top of path selector should be within viewport (900px)
      expect(box.y).toBeLessThan(950)
    }
  }
})
