'use client'

import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { useFormSubmission } from '@/lib/hooks/useFormSubmission'
import { PhoneConsent } from '@/components/forms/PhoneConsent'
import { SubmissionStatus } from '@/components/forms/SubmissionStatus'
import { SuccessConfirmation } from '@/components/forms/SuccessConfirmation'
import { ErrorRetryable } from '@/components/forms/ErrorRetryable'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const SUBJECT_OPTIONS = [
  { value: '', label: 'Select a subject...' },
  { value: 'joining', label: 'Joining Acme Realty' },
  { value: 'team', label: 'Team Inquiry' },
  { value: 'grid', label: 'Growth Network / Independent Path' },
  { value: 'training', label: 'Training & Events' },
  { value: 'partner', label: 'Partner / Vendor Inquiry' },
  { value: 'sponsorship', label: 'Sponsorship Opportunity' },
  { value: 'general', label: 'General Question' },
  { value: 'other', label: 'Other' },
]

const QUICK_LINKS = [
  { label: 'Schedule a Branch Visit', href: '/book-a-tour' },
  { label: 'Apply Now', href: '/apply' },
  { label: 'Take the Fit Quiz', href: '/quiz' },
  { label: 'Get Connected to a Partner', href: '/partners' },
  { label: 'Become a Preferred Partner', href: '/partners#partner-inquiry' },
]

const inputBase =
  'w-full rounded-lg border px-4 py-2.5 text-sm text-[#000000] placeholder-[#9CA3AF] outline-none transition focus:ring-2'
const inputNormal = 'border-[#E5E7EB] focus:border-black focus:ring-[#F3F4F6]'
const inputError = 'border-red-400 focus:ring-red-200'

function fieldClass(hasError: boolean) {
  return `${inputBase} ${hasError ? inputError : inputNormal}`
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageContent />
    </Suspense>
  )
}

const REF_TO_SUBJECT: Record<string, string> = {
  'partner-inquiry': 'partner',
  'sponsorship': 'sponsorship',
}

function ContactPageContent() {
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref')

  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [phoneConsent, setPhoneConsent] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  useEffect(() => {
    if (ref && REF_TO_SUBJECT[ref]) {
      setForm((prev) => ({ ...prev, subject: REF_TO_SUBJECT[ref] }))
    }
  }, [ref])

  const { submit, retry, isSubmitting, isSuccess, isRetryable, errorMessage } = useFormSubmission({
    formType: 'general_contact',
    sourceRoute: '/contact',
  })

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address.'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    else if (!/^[\d\s\-().+]{7,}$/.test(form.phone)) newErrors.phone = 'Enter a valid phone number.'
    if (!form.subject) newErrors.subject = 'Please select a subject.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    const nameParts = form.name.trim().split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    submit({
      first_name: firstName,
      last_name: lastName,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
      // The tick only. The server stamps the time and records the number it was
      // given for; a browser clock is not evidence.
      phone_consent: phoneConsent,
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/hero-contact-v2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="clip">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty
              </p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h1 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-5 max-w-xl font-roboto text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Have a question or want to talk through your career options? Send us a message
                and we&apos;ll respond within one business day.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Left: contact info + quick links */}
            <div className="flex flex-col gap-6 lg:col-span-2">

              {/* Contact Info Card */}
              <Reveal variant="up" delay={60}>
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-7">
                  <h2 className="font-manrope mb-6 text-xl font-bold tracking-tight text-[#000000]">
                    Contact Information
                  </h2>

                  <ul className="flex flex-col gap-5">
                    {/* Address */}
                    <li className="flex gap-3">
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6]"
                        aria-hidden="true"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                            fill="#000000"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                          Address
                        </p>
                        <p className="font-medium text-[#000000]">123 Main Street</p>
                        <p className="font-roboto text-sm text-[#4B5563]">Anytown, VA 00000</p>
                      </div>
                    </li>

                    {/* Phone */}
                    <li className="flex gap-3">
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6]"
                        aria-hidden="true"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"
                            fill="#000000"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                          Phone
                        </p>
                        <a
                          href="tel:+15550100100"
                          className="font-medium text-[#000000] transition-colors hover:text-[#4B5563]"
                        >
                          (555) 010-0100
                        </a>
                      </div>
                    </li>

                    {/* Email */}
                    <li className="flex gap-3">
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6]"
                        aria-hidden="true"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                            fill="#000000"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                          Email
                        </p>
                        <a
                          href="mailto:agent@example.com"
                          className="break-all font-medium text-[#000000] transition-colors hover:text-[#4B5563]"
                        >
                          agent@example.com
                        </a>
                      </div>
                    </li>

                    {/* Hours */}
                    <li className="flex gap-3">
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6]"
                        aria-hidden="true"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 5v6l4.5 2.7-.75 1.23L11 14V7h1.5z"
                            fill="#000000"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                          Office Hours
                        </p>
                        <p className="font-medium text-[#000000]">Mon &ndash; Fri</p>
                        <p className="font-roboto text-sm text-[#4B5563]">9:00 AM &ndash; 5:00 PM</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Quick Links */}
              <Reveal variant="up" delay={120}>
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
                  <h3 className="font-manrope mb-4 text-base font-bold tracking-tight text-[#000000]">
                    Where to go from here
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {QUICK_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between rounded-lg border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-[#000000] transition-all duration-150 hover:border-black"
                        >
                          {link.label}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                              d="M9 18l6-6-6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3">
              <Reveal variant="up" delay={100}>
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8" aria-live="polite">
                  {isSuccess ? (
                    <SuccessConfirmation
                      heading="Message Sent"
                      message="We've received your message and a team member will follow up within one business day."
                      nextStep="A team member will reach out via email or phone."
                      backLabel="Back to Home"
                      backHref="/"
                    />
                  ) : isSubmitting ? (
                    <div className="flex flex-col items-center py-10">
                      <SubmissionStatus message="Sending your message..." />
                    </div>
                  ) : isRetryable ? (
                    <div className="flex flex-col items-center py-10">
                      <ErrorRetryable message={errorMessage} onRetry={retry} />
                    </div>
                  ) : (
                    <>
                      <h2 className="font-manrope mb-2 text-2xl font-extrabold tracking-tight text-[#000000]">
                        Send Us a Message
                      </h2>
                      <p className="mb-7 font-roboto text-sm text-[#9CA3AF]">
                        Fields marked <span className="text-red-500">*</span> are required.
                      </p>

                      <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">

                        {/* Name */}
                        <div>
                          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className={fieldClass(!!errors.name)}
                          />
                          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className={fieldClass(!!errors.email)}
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(555) 010-0123"
                            className={fieldClass(!!errors.phone)}
                          />
                          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                        </div>

                        {/* Consent sits with the number it attaches to, never at the
                            foot of the form: the disclosure has to be conspicuous at
                            the point of collection. */}
                        <div className="sm:col-span-2">
                          <PhoneConsent
                            id="contact-phone-consent"
                            phone={form.phone}
                            checked={phoneConsent}
                            onChange={setPhoneConsent}
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* Subject */}
                        <div>
                          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="contact-subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={fieldClass(!!errors.subject)}
                          >
                            {SUBJECT_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us what's on your mind..."
                            className={`resize-none ${fieldClass(!!errors.message)}`}
                          />
                          {errors.message && (
                            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#1a1a1a] sm:w-auto ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                          >
                            Send Message
                          </button>
                          <p className="mt-3 font-roboto text-xs text-[#9CA3AF]">
                            Your information is kept private and never shared.
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
