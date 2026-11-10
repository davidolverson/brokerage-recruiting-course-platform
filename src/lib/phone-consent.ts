/**
 * TCPA consent, as the one place the record is decided.
 *
 * This is deliberately a pure function rather than a few lines inside the lead
 * route. The consent record is the evidence — it is the single part of a lead
 * that cannot be reconstructed after the fact — so the rule that produces it
 * has to be testable on its own, without a database or a request.
 *
 * What a valid record requires:
 *
 *  - An explicit boolean `true` from the client. Not "true", not 1, not any
 *    other truthy value. Consent is an affirmative act, so anything that merely
 *    coerces to true is a bug or a forgery, and either way it is not evidence.
 *  - A phone number to attach to. A tick with no number consents to nothing.
 *  - A timestamp this server generates. A client-supplied time is not evidence,
 *    which is why this function takes a clock and never reads one off the body.
 *
 * Consent attaches to the NUMBER, not the person, so the number it was given
 * for is stored alongside the time. If the phone on a row is later corrected,
 * it no longer matches `consentPhone` and the row correctly reads as
 * unconsented again rather than silently inheriting an agreement nobody made.
 */

/**
 * Named for the columns, not for JavaScript convention. The same object is what
 * goes into the INSERT and what comes back out of `SELECT *`, so one shape
 * means the check that decides "may we text this person" is literally the same
 * code on the way in and on the way out.
 */
export interface PhoneConsentRecord {
  /** ISO timestamp the consent was recorded, or null when there is no consent. */
  consent_at: string | Date | null
  /** The exact number the tick was given for, or null. */
  consent_phone: string | null
}

/** Whether a stored record still covers the number currently on the lead. */
export function isConsentedFor(
  record: PhoneConsentRecord,
  phone: string | null | undefined
): boolean {
  if (!record.consent_at || !record.consent_phone) return false
  if (!phone) return false
  return record.consent_phone.trim() === phone.trim()
}

/**
 * The words. Keep them stable: staff scan them at a glance, and the phrase is
 * only worth anything if it is recognised without being read.
 *
 * Two forms, and the short one is a strict prefix of the long one, so a reader
 * who sees both never sees a contradiction:
 *
 *  - `CALL_ONLY_LABEL` wherever there is room for a sentence: the alert email,
 *    the CSV export, the lead detail page.
 *  - `CALL_ONLY_BADGE` in the leads list, where the pill sits beside the number
 *    in a row that truncates. The full sentence there would squeeze the phone
 *    number itself out of view, which trades one instruction for a worse one.
 */
export const MAY_TEXT_LABEL = 'May call & text'
export const CALL_ONLY_LABEL = 'CALL ONLY - no text/autodial consent'
export const CALL_ONLY_BADGE = 'CALL ONLY'

/**
 * What to say about this number, in one place, so the four surfaces that show a
 * phone cannot drift apart. A row with no number gets no label: there is
 * nothing to permit, and "call only" on a blank reads as an instruction to dial
 * something that is not there.
 */
export function phoneConsentLabel(
  record: PhoneConsentRecord,
  phone: string | null | undefined
): string {
  if (!phone || !phone.trim()) return 'No phone'
  return isConsentedFor(record, phone) ? MAY_TEXT_LABEL : CALL_ONLY_LABEL
}

/** The number and its standing on one line, for emails and CSV cells. */
export function phoneConsentLine(
  record: PhoneConsentRecord,
  phone: string | null | undefined
): string {
  if (!phone || !phone.trim()) return 'No phone'
  return `${phone} (${phoneConsentLabel(record, phone)})`
}

export function derivePhoneConsent(
  /** Raw `phone_consent` off the request body — untrusted, any type. */
  ticked: unknown,
  /** The phone being stored on this lead. */
  phone: string | null | undefined,
  /** Injectable so the record is deterministic under test. */
  now: () => Date = () => new Date()
): { consent_at: string | null; consent_phone: string | null } {
  const NO_CONSENT = { consent_at: null, consent_phone: null }

  // Strict identity, not truthiness. See the note above.
  if (ticked !== true) return NO_CONSENT

  const trimmed = typeof phone === 'string' ? phone.trim() : ''
  if (!trimmed) return NO_CONSENT

  return {
    consent_at: now().toISOString(),
    consent_phone: trimmed,
  }
}
