'use client'

/**
 * TCPA consent for a phone number, as one reusable control.
 *
 * Rules this encodes, so no individual form has to remember them:
 *
 *  - Unticked by default. A pre-ticked box is not consent.
 *  - Never `required`. Consent may not be a condition of service, and four of
 *    this site's form types make the phone itself mandatory, so gating submit
 *    on the tick would both break the funnel and be the wrong posture.
 *  - Consent attaches to the NUMBER, not the person. If the visitor edits the
 *    phone after ticking, the tick clears itself and the disclosure is shown
 *    again, because the stored record would otherwise name a number nobody
 *    agreed to.
 *  - The whole label is the hit area, so the box is never the target on its
 *    own and the row clears the 44px minimum.
 *
 * The server generates the timestamp and stores the number the tick was given
 * for. A browser clock is not evidence, so nothing here sends one.
 */

import { useEffect, useRef } from 'react'

export interface PhoneConsentProps {
  /** The current value of the phone field this consent belongs to. */
  phone: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  /** Who is asking. Named explicitly because the disclosure must identify them. */
  entity?: string
  id?: string
}

export function PhoneConsent({
  phone,
  checked,
  onChange,
  disabled = false,
  entity = 'Acme Realty and Acme Realty, LLC',
  id = 'phone-consent',
}: PhoneConsentProps) {
  // The number that was on screen when the box was ticked.
  const consentedFor = useRef<string | null>(null)

  useEffect(() => {
    if (!checked) {
      consentedFor.current = null
      return
    }
    if (consentedFor.current === null) {
      consentedFor.current = phone.trim()
      return
    }
    if (phone.trim() !== consentedFor.current) {
      consentedFor.current = null
      onChange(false)
    }
  }, [phone, checked, onChange])

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3 py-3 text-sm leading-relaxed text-neutral-600"
      style={{ minHeight: 44 }}
    >
      <input
        id={id}
        name="phone_consent"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        autoComplete="off"
        className="mt-0.5 h-5 w-5 flex-none cursor-pointer"
      />
      <span>
        Yes, {entity} may call and text me at this number, including by
        automated dialling system or prerecorded message. Consent is not a
        condition of any purchase or service. Message and data rates may apply.
        Message frequency varies. Reply STOP to stop.
      </span>
    </label>
  )
}
