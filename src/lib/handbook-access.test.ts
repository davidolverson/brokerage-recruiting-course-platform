import { describe, it, expect } from 'vitest'
import { handbookLoginUrl } from './handbook-access'

describe('handbookLoginUrl', () => {
  it('carries the page they were trying to read', () => {
    expect(handbookLoginUrl('/handbook/tools-accounts-and-access'))
      .toBe('/login?redirect=%2Fhandbook%2Ftools-accounts-and-access')
  })

  it('refuses a protocol-relative path, which looks like a site path and is not one', () => {
    expect(handbookLoginUrl('//evil.com')).toBe('/login?redirect=%2Fhandbook')
  })

  it('refuses an absolute url', () => {
    expect(handbookLoginUrl('https://evil.com/x')).toBe('/login?redirect=%2Fhandbook')
  })
})
