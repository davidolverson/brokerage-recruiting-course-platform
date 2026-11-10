import { describe, it, expect } from 'vitest'
import {
  CALL_ONLY_BADGE,
  CALL_ONLY_LABEL,
  MAY_TEXT_LABEL,
  derivePhoneConsent,
  isConsentedFor,
  phoneConsentLabel,
  phoneConsentLine,
} from './phone-consent'

const FIXED = new Date('2026-08-02T21:30:00.000Z')
const clock = () => FIXED

describe('derivePhoneConsent', () => {
  it('records the time and the number when the box is ticked', () => {
    expect(derivePhoneConsent(true, '(555) 010-0123', clock)).toEqual({
      consent_at: '2026-08-02T21:30:00.000Z',
      consent_phone: '(555) 010-0123',
    })
  })

  it('stamps the SERVER clock, never a time supplied by the client', () => {
    // The body cannot influence the timestamp: this function is not given the
    // body at all, only the tick. A browser clock is not evidence.
    const record = derivePhoneConsent(true, '5550100123', clock)
    expect(record.consent_at).toBe(FIXED.toISOString())
  })

  it('stores no consent when the box is unticked', () => {
    expect(derivePhoneConsent(false, '5550100123', clock)).toEqual({
      consent_at: null,
      consent_phone: null,
    })
  })

  it('stores no consent when the field is absent', () => {
    expect(derivePhoneConsent(undefined, '5550100123', clock).consent_at).toBeNull()
  })

  it('rejects truthy values that are not an explicit boolean true', () => {
    // Consent is an affirmative act. A value that merely coerces to true is a
    // bug or a forgery; either way it must not become a consent record.
    for (const forged of ['true', 'on', 1, {}, [], 'yes']) {
      expect(derivePhoneConsent(forged, '5550100123', clock)).toEqual({
        consent_at: null,
        consent_phone: null,
      })
    }
  })

  it('stores no consent when there is no number to attach it to', () => {
    // A tick with no phone consents to nothing, and a record naming no number
    // is not evidence of anything.
    expect(derivePhoneConsent(true, null, clock).consent_at).toBeNull()
    expect(derivePhoneConsent(true, '', clock).consent_at).toBeNull()
    expect(derivePhoneConsent(true, '   ', clock).consent_at).toBeNull()
  })

  it('normalises surrounding whitespace on the number it records', () => {
    expect(derivePhoneConsent(true, '  5550100123 ', clock).consent_phone).toBe('5550100123')
  })
})

describe('isConsentedFor', () => {
  const consented = derivePhoneConsent(true, '5550100123', clock)

  it('holds for the number the tick was given for', () => {
    expect(isConsentedFor(consented, '5550100123')).toBe(true)
    expect(isConsentedFor(consented, ' 5550100123 ')).toBe(true)
  })

  it('does NOT carry over to a number that was changed afterwards', () => {
    // Consent attaches to the number, not the person. A row whose phone is
    // later corrected reads as unconsented again rather than inheriting an
    // agreement nobody made for that number.
    expect(isConsentedFor(consented, '5550100199')).toBe(false)
  })

  it('is false for a row that never had consent', () => {
    const none = derivePhoneConsent(false, '5550100123', clock)
    expect(isConsentedFor(none, '5550100123')).toBe(false)
  })

  it('is false when the lead has no phone at all', () => {
    expect(isConsentedFor(consented, null)).toBe(false)
    expect(isConsentedFor(consented, '')).toBe(false)
  })
})

describe('the wording every surface uses', () => {
  const consented = derivePhoneConsent(true, '5550100123', clock)
  const none = derivePhoneConsent(false, '5550100123', clock)

  it('labels the two standings, and says nothing about a row with no number', () => {
    expect(phoneConsentLabel(consented, '5550100123')).toBe(MAY_TEXT_LABEL)
    expect(phoneConsentLabel(none, '5550100123')).toBe(CALL_ONLY_LABEL)
    // Consent follows the number, so a corrected phone is call-only again.
    expect(phoneConsentLabel(consented, '5550100199')).toBe(CALL_ONLY_LABEL)
    // 'Call only' on a blank would read as an instruction to dial something.
    expect(phoneConsentLabel(consented, '')).toBe('No phone')
    expect(phoneConsentLabel(consented, null)).toBe('No phone')
  })

  it('pairs the number with its standing on one line for emails and cells', () => {
    expect(phoneConsentLine(consented, '5550100123')).toBe(`5550100123 (${MAY_TEXT_LABEL})`)
    expect(phoneConsentLine(none, '5550100123')).toBe(`5550100123 (${CALL_ONLY_LABEL})`)
    expect(phoneConsentLine(none, null)).toBe('No phone')
  })

  // Pins the literal wording so it cannot drift silently.
  it('uses the agreed wording', () => {
    expect(MAY_TEXT_LABEL).toBe('May call & text')
    expect(CALL_ONLY_LABEL).toBe('CALL ONLY - no text/autodial consent')
  })

  it('keeps the compact badge a strict prefix of the full sentence', () => {
    // The leads list has room for a pill, not a sentence. A reader who sees
    // both surfaces must never see two different claims, so the short form is
    // the opening of the long one rather than a second phrasing of it.
    expect(CALL_ONLY_LABEL.startsWith(CALL_ONLY_BADGE)).toBe(true)
  })
})
