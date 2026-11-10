import { describe, it, expect } from 'vitest'
import { formatBytes } from './format-bytes'

// One formatter, because the size an agent reads under a link and the size the
// media library reports for the same file must not disagree.
describe('formatBytes', () => {
  it('uses bytes, KB and MB at the right thresholds', () => {
    expect(formatBytes(512)).toBe('512 B')
    expect(formatBytes(2048)).toBe('2 KB')
    expect(formatBytes(6 * 1024 * 1024)).toBe('6.0 MB')
  })

  it('does not print a negative or NaN size', () => {
    expect(formatBytes(-1)).toBe('0 B')
    expect(formatBytes(NaN)).toBe('0 B')
  })
})
