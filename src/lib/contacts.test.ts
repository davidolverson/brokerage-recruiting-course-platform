import { describe, it, expect } from 'vitest'
import { normalizeContactInput } from './contacts'

describe('normalizeContactInput', () => {
  it('lowercases and trims the email', () => {
    const result = normalizeContactInput({ email: '  agent@example.com  ', source: 'lead:general_contact' })
    expect(result.email).toBe('agent@example.com')
  })

  it('trims names/phone and nulls out empty strings', () => {
    const result = normalizeContactInput({
      email: 'a@example.com', firstName: '  Jane  ', lastName: '  ', phone: '  ', source: 'lead:general_contact',
    })
    expect(result.firstName).toBe('Jane')
    expect(result.lastName).toBeNull()
    expect(result.phone).toBeNull()
  })

  it('dedupes and trims tags', () => {
    const result = normalizeContactInput({
      email: 'a@example.com', source: 'csv_import', tags: [' vip ', 'vip', 'buyer', ''],
    })
    expect(result.tags).toEqual(['vip', 'buyer'])
  })

  it('defaults teamSlug and tags when omitted', () => {
    const result = normalizeContactInput({ email: 'a@example.com', source: 'training_subscriber' })
    expect(result.teamSlug).toBeNull()
    expect(result.tags).toEqual([])
  })
})

describe('normalizeContactInput — TCPA consent carried from the lead', () => {
  const AT = '2026-08-02T21:30:00.000Z'

  it('carries the pair when it names the phone being stored', () => {
    const result = normalizeContactInput({
      email: 'a@example.com',
      phone: '(555) 010-0123',
      source: 'lead:general_contact',
      consentAt: AT,
      consentPhone: '(555) 010-0123',
    })
    expect(result.consentAt).toBe(AT)
    expect(result.consentPhone).toBe('(555) 010-0123')
  })

  it('drops a pair that names a DIFFERENT number than the one being stored', () => {
    // Consent attaches to the number. Writing this pair would assert consent for
    // whatever phone the row ends up holding — the exact failure the pair exists
    // to prevent.
    const result = normalizeContactInput({
      email: 'a@example.com',
      phone: '(555) 010-0199',
      source: 'lead:general_contact',
      consentAt: AT,
      consentPhone: '(555) 010-0123',
    })
    expect(result.consentAt).toBeNull()
    expect(result.consentPhone).toBeNull()
  })

  it('drops a consent that names no number', () => {
    const result = normalizeContactInput({
      email: 'a@example.com',
      phone: '(555) 010-0123',
      source: 'lead:general_contact',
      consentAt: AT,
      consentPhone: null,
    })
    expect(result.consentAt).toBeNull()
  })

  it('drops a consent when no phone is being stored at all', () => {
    const result = normalizeContactInput({
      email: 'a@example.com',
      source: 'lead:general_contact',
      consentAt: AT,
      consentPhone: '(555) 010-0123',
    })
    expect(result.consentAt).toBeNull()
    expect(result.consentPhone).toBeNull()
  })

  it('records no consent for a CSV import, which is not consent', () => {
    const result = normalizeContactInput({
      email: 'a@example.com',
      phone: '(555) 010-0123',
      source: 'csv_import',
    })
    expect(result.consentAt).toBeNull()
    expect(result.consentPhone).toBeNull()
  })

  it('matches on the trimmed number, so whitespace alone does not void consent', () => {
    const result = normalizeContactInput({
      email: 'a@example.com',
      phone: '  (555) 010-0123  ',
      source: 'lead:general_contact',
      consentAt: AT,
      consentPhone: '(555) 010-0123 ',
    })
    expect(result.consentAt).toBe(AT)
  })
})
