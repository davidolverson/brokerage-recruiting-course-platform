'use client'

import { useState, useEffect, useRef, type FormEvent } from 'react'
import { PhoneConsent } from './PhoneConsent'
import { SubmissionStatus } from '../ui/SubmissionStatus'
import { SuccessConfirmation } from '../ui/SuccessConfirmation'
import { ErrorRetryable } from './ErrorRetryable'
import { events, getUTMParams, buildCampaignId } from '@/lib/analytics'

// ─── Types ──────────────────────────────────────────────────────────────────

export type FormType =
  | 'join_team_inquiry'
  | 'network_inquiry'
  | 'branch_tour_booking'
  | 'general_contact'

export interface LeadFormProps {
  formType: FormType
  sourceRoute: string
  sourceSection?: string
  selectedPath?: string
  selectedTeam?: string
  /** Optional campaign / UTM tag forwarded to CRM */
  campaignId?: string
  /** Partner or service page attribution tag */
  partnerRef?: string
  /** Override the default submit button label */
  submitLabel?: string
  /** Called after successful submission (client-side) */
  onSuccess?: () => void
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FieldError {
  [key: string]: string
}

// ─── Field configs per form type ─────────────────────────────────────────────

const FORM_TITLES: Record<FormType, string> = {
  join_team_inquiry:      'Join a Team — Inquiry',
  network_inquiry:          'Growth Network Program — Inquiry',
  branch_tour_booking:    'Book a Branch Tour',
  general_contact:        'Get in Touch',
}

const FORM_DESCRIPTIONS: Record<FormType, string> = {
  join_team_inquiry:
    "Tell us a little about yourself and we'll connect you with the right team leader.",
  network_inquiry:
    'Flip your income into ownership with Growth Network. Explore the Wealth Roadmap framework and unlock your FREE Growth Network Pro membership.',
  branch_tour_booking:
    'Pick a time to see the office and meet the team — no pressure, just real answers.',
  general_contact:
    'Questions, partnerships, or just want to learn more — we read every message.',
}

const SUCCESS_MESSAGING: Record<FormType, { heading: string; message: string; nextStep: string }> = {
  join_team_inquiry: {
    heading: 'Team Inquiry Received',
    message: 'A recruiter will review and reach out within one business day.',
    nextStep: 'Intro call with a team lead.',
  },
  network_inquiry: {
    heading: 'Growth Network Inquiry Received',
    message: "We'll follow up to discuss the Wealth Roadmap framework and your FREE Growth Network Pro membership.",
    nextStep: 'Strategy call to plan your Growth Network onboarding and ownership path.',
  },
  branch_tour_booking: {
    heading: 'Tour Request Submitted',
    message: "We'll confirm your visit time.",
    nextStep: 'Confirmation email with details.',
  },
  general_contact: {
    heading: 'Message Received',
    message: 'A team member will follow up within one business day.',
    nextStep: 'Email or phone response from our team.',
  },
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function isPhone(v: string) {
  return /^[\d\s\-().+]{7,}$/.test(v)
}

function validate(
  formType: FormType,
  data: Record<string, string>,
): FieldError {
  const errors: FieldError = {}

  if (!data.first_name?.trim()) errors.first_name = 'First name is required.'
  if (!data.last_name?.trim()) errors.last_name = 'Last name is required.'

  if (!data.email?.trim()) {
    errors.email = 'Email is required.'
  } else if (!isEmail(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (
    formType === 'join_team_inquiry' ||
    formType === 'branch_tour_booking'
  ) {
    if (!data.phone?.trim()) {
      errors.phone = 'Phone number is required.'
    } else if (!isPhone(data.phone)) {
      errors.phone = 'Please enter a valid phone number.'
    }
  } else if (data.phone && !isPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (
    formType === 'join_team_inquiry' &&
    !data.license_status
  ) {
    errors.license_status = 'Please select your license status.'
  }

  if (
    formType === 'branch_tour_booking' &&
    !data.preferred_date?.trim()
  ) {
    errors.preferred_date = 'Please select a preferred date.'
  }

  return errors
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function FieldWrapper({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string
  id: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[#000000]"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-[#DC2626]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-[#DC2626]"
        >
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (error?: string) =>
  [
    'w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#000000]',
    'placeholder:text-[#9CA3AF] outline-none',
    'transition-colors duration-150',
    'focus:border-black focus:ring-2 focus:ring-black/10',
    error ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB] bg-white',
  ]
    .filter(Boolean)
    .join(' ')

// ─── Main component ───────────────────────────────────────────────────────────

export function LeadForm({
  formType,
  sourceRoute,
  sourceSection,
  selectedPath,
  selectedTeam,
  campaignId,
  partnerRef,
  submitLabel,
  onSuccess,
}: LeadFormProps) {
  // Auto-detect partner reference and UTM params from URL
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const autoPartnerRef = searchParams?.get('ref') || partnerRef || ''
  const utmParams = getUTMParams()
  const autoCampaignId = campaignId || buildCampaignId(utmParams)

  const [formState, setFormState] = useState<FormState>('idle')
  const [phoneConsent, setPhoneConsent] = useState(false)
  const [errors, setErrors] = useState<FieldError>({})
  const [fields, setFields] = useState<Record<string, string>>({})

  // Track form started event (once per mount)
  const hasTrackedStart = useRef(false)
  useEffect(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true
      events.leadFormStarted(formType, sourceRoute)
    }
  }, [formType, sourceRoute])

  function set(key: string, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
    // Clear error on change
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  function getField(key: string) {
    return fields[key] ?? ''
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validationErrors = validate(formType, fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Scroll to first error
      const firstKey = Object.keys(validationErrors)[0]
      document.getElementById(firstKey)?.focus()
      return
    }

    setFormState('submitting')

    const payload = {
      ...fields,
      // Hidden metadata
      form_type: formType,
      source_route: sourceRoute,
      source_section: sourceSection ?? '',
      selected_path: selectedPath ?? '',
      selected_team: selectedTeam ?? '',
      campaign_id: autoCampaignId,
      partner_ref: autoPartnerRef,
      timestamp: new Date().toISOString(),
      // UTM fields in metadata for granular attribution
      ...(utmParams.utm_source ? {
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_content: utmParams.utm_content,
        utm_term: utmParams.utm_term,
      } : {}),
      // The tick only. The server stamps the time and records the number it was
      // given for; a browser clock is not evidence.
      phone_consent: phoneConsent,
    }

    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 15000)
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      clearTimeout(timeout)
      if (!res.ok) { setFormState('error'); return }

      // Track form submitted event
      events.leadFormSubmitted(formType, selectedPath, selectedTeam)

      setFormState('success')
      onSuccess?.()
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    const successInfo = SUCCESS_MESSAGING[formType]
    return (
      <div aria-live="polite">
        <SuccessConfirmation
          heading={successInfo.heading}
          message={successInfo.message}
          nextStep={successInfo.nextStep}
          backHref="/"
          backLabel="Return home"
        />
      </div>
    )
  }

  const title = FORM_TITLES[formType]
  const description = FORM_DESCRIPTIONS[formType]
  const isSubmitting = formState === 'submitting'
  const defaultSubmitLabel = isSubmitting ? 'Submitting…' : (submitLabel ?? 'Submit')

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label={title}
      aria-live="polite"
      className="flex flex-col gap-5"
    >
      {/* Heading */}
      <div className="flex flex-col gap-1">
        <h2
          className="text-xl font-extrabold text-[#000000]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {title}
        </h2>
        <p className="text-sm text-[#6B7280]">{description}</p>
      </div>

      {/* ── Common fields ── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FieldWrapper label="First name" id="first_name" required error={errors.first_name}>
          <input
            id="first_name"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            value={getField('first_name')}
            onChange={(e) => set('first_name', e.target.value)}
            className={inputClass(errors.first_name)}
            aria-describedby={errors.first_name ? 'first_name-error' : undefined}
            aria-invalid={!!errors.first_name}
            disabled={isSubmitting}
          />
        </FieldWrapper>

        <FieldWrapper label="Last name" id="last_name" required error={errors.last_name}>
          <input
            id="last_name"
            type="text"
            autoComplete="family-name"
            placeholder="Smith"
            value={getField('last_name')}
            onChange={(e) => set('last_name', e.target.value)}
            className={inputClass(errors.last_name)}
            aria-describedby={errors.last_name ? 'last_name-error' : undefined}
            aria-invalid={!!errors.last_name}
            disabled={isSubmitting}
          />
        </FieldWrapper>
      </div>

      <FieldWrapper label="Email address" id="email" required error={errors.email}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={getField('email')}
          onChange={(e) => set('email', e.target.value)}
          className={inputClass(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
        />
      </FieldWrapper>

      <FieldWrapper label="Phone number" id="phone" required={formType === 'join_team_inquiry' || formType === 'branch_tour_booking'} error={errors.phone}>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 010-0100"
          value={getField('phone')}
          onChange={(e) => set('phone', e.target.value)}
          className={inputClass(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          aria-invalid={!!errors.phone}
          disabled={isSubmitting}
        />
      </FieldWrapper>

      {/* Consent sits with the number it attaches to, never at the foot of the
          form: the disclosure has to be conspicuous at the point of collection. */}
      <PhoneConsent
        phone={getField('phone')}
        checked={phoneConsent}
        onChange={setPhoneConsent}
        disabled={isSubmitting}
      />

      {/* ── join_team_inquiry ── */}
      {formType === 'join_team_inquiry' && (
        <>
          <FieldWrapper
            label="License status"
            id="license_status"
            required
            error={errors.license_status}
          >
            <select
              id="license_status"
              value={getField('license_status')}
              onChange={(e) => set('license_status', e.target.value)}
              className={inputClass(errors.license_status)}
              aria-describedby={errors.license_status ? 'license_status-error' : undefined}
              aria-invalid={!!errors.license_status}
              disabled={isSubmitting}
            >
              <option value="">Select…</option>
              <option value="licensed_active">Licensed &amp; active</option>
              <option value="licensed_inactive">Licensed but inactive</option>
              <option value="pre_license">Pre-license / studying</option>
              <option value="no_license">Not yet licensed</option>
            </select>
          </FieldWrapper>

          <FieldWrapper label="Years in real estate" id="years_experience">
            <select
              id="years_experience"
              value={getField('years_experience')}
              onChange={(e) => set('years_experience', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            >
              <option value="">Select…</option>
              <option value="0">Less than 1 year</option>
              <option value="1">1–2 years</option>
              <option value="3">3–5 years</option>
              <option value="6">6–10 years</option>
              <option value="11">10+ years</option>
            </select>
          </FieldWrapper>

          <FieldWrapper
            label="Which team are you interested in?"
            id="team_interest"
          >
            <input
              id="team_interest"
              type="text"
              placeholder="Example Investor Team, Example Residential Team, not sure yet…"
              value={selectedTeam ?? getField('team_interest')}
              onChange={(e) => set('team_interest', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            />
          </FieldWrapper>

          <FieldWrapper label="What are you looking for in a team?" id="team_goals">
            <textarea
              id="team_goals"
              rows={3}
              placeholder="Mentorship, leads, culture, specific markets…"
              value={getField('team_goals')}
              onChange={(e) => set('team_goals', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            />
          </FieldWrapper>
        </>
      )}

      {/* ── network_inquiry ── */}
      {formType === 'network_inquiry' && (
        <>
          <FieldWrapper label="License status" id="license_status" error={errors.license_status}>
            <select
              id="license_status"
              value={getField('license_status')}
              onChange={(e) => set('license_status', e.target.value)}
              className={inputClass(errors.license_status)}
              disabled={isSubmitting}
            >
              <option value="">Select…</option>
              <option value="licensed_active">Licensed &amp; active</option>
              <option value="licensed_inactive">Licensed but inactive</option>
              <option value="pre_license">Pre-license / studying</option>
            </select>
          </FieldWrapper>

          <FieldWrapper
            label="Current brokerage (if applicable)"
            id="current_brokerage"
          >
            <input
              id="current_brokerage"
              type="text"
              placeholder="Traditional Brokerage, Compass, independent…"
              value={getField('current_brokerage')}
              onChange={(e) => set('current_brokerage', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            />
          </FieldWrapper>

          <FieldWrapper label="What appeals to you about Growth Network?" id="grid_interest">
            <textarea
              id="grid_interest"
              rows={3}
              placeholder="Wealth Roadmap, Growth Network Pro membership, revenue share, ownership…"
              value={getField('grid_interest')}
              onChange={(e) => set('grid_interest', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            />
          </FieldWrapper>
        </>
      )}

      {/* ── branch_tour_booking ── */}
      {formType === 'branch_tour_booking' && (
        <>
          <FieldWrapper
            label="Preferred tour date"
            id="preferred_date"
            required
            error={errors.preferred_date}
          >
            <input
              id="preferred_date"
              type="date"
              value={getField('preferred_date')}
              onChange={(e) => set('preferred_date', e.target.value)}
              className={inputClass(errors.preferred_date)}
              aria-describedby={errors.preferred_date ? 'preferred_date-error' : undefined}
              aria-invalid={!!errors.preferred_date}
              disabled={isSubmitting}
              min={new Date().toISOString().split('T')[0]}
            />
          </FieldWrapper>

          <FieldWrapper label="Preferred time" id="preferred_time">
            <select
              id="preferred_time"
              value={getField('preferred_time')}
              onChange={(e) => set('preferred_time', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            >
              <option value="">No preference</option>
              <option value="morning">Morning (9 am – 12 pm)</option>
              <option value="afternoon">Afternoon (12 pm – 4 pm)</option>
              <option value="evening">Evening (4 pm – 6 pm)</option>
            </select>
          </FieldWrapper>

          <FieldWrapper label="What would you like to see or discuss?" id="tour_notes">
            <textarea
              id="tour_notes"
              rows={3}
              placeholder="Teams, Growth Network program, training facilities…"
              value={getField('tour_notes')}
              onChange={(e) => set('tour_notes', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            />
          </FieldWrapper>
        </>
      )}

      {/* ── general_contact ── */}
      {formType === 'general_contact' && (
        <>
          <FieldWrapper label="Subject" id="subject">
            <input
              id="subject"
              type="text"
              placeholder="Partnership, question, feedback…"
              value={getField('subject')}
              onChange={(e) => set('subject', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            />
          </FieldWrapper>

          <FieldWrapper label="Message" id="message">
            <textarea
              id="message"
              rows={4}
              placeholder="How can we help?"
              value={getField('message')}
              onChange={(e) => set('message', e.target.value)}
              className={inputClass()}
              disabled={isSubmitting}
            />
          </FieldWrapper>
        </>
      )}

      {/* Global error */}
      {formState === 'error' && (
        <ErrorRetryable message="Something went wrong. Please try again or contact us directly." onRetry={() => setFormState('idle')} />
      )}

      {/* Submitting status */}
      {isSubmitting && (
        <SubmissionStatus message="Submitting your request..." />
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {defaultSubmitLabel}
      </button>

      <p className="text-center text-xs text-[#9CA3AF]">
        No spam. We only use your info to follow up on this inquiry.
      </p>
    </form>
  )
}
