'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { useFormSubmission } from '@/lib/hooks/useFormSubmission'
import { PhoneConsent } from '@/components/forms/PhoneConsent'
import { SubmissionStatus } from '@/components/forms/SubmissionStatus'
import { SuccessConfirmation } from '@/components/forms/SuccessConfirmation'
import { ErrorRetryable } from '@/components/forms/ErrorRetryable'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { ImageReveal } from '@/components/ui/ImageReveal'

interface TourFormData {
  name: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  pathInterest: string
  notes: string
}

const initialForm: TourFormData = {
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  pathInterest: '',
  notes: '',
}

const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
]

const PATH_OPTIONS = [
  { value: '', label: 'Select a path...' },
  { value: 'team', label: 'Join a Team' },
  { value: 'grid', label: 'Growth Network (Independent)' },
  { value: 'undecided', label: "I'm not sure yet" },
]

const WHAT_TO_EXPECT = [
  {
    step: '01',
    title: 'Meet Leadership',
    desc: 'Sit down with branch leadership and get straight answers about culture, splits, and growth.',
  },
  {
    step: '02',
    title: 'See the Space',
    desc: 'Walk through the workspace and training facilities you would be operating in daily.',
  },
  {
    step: '03',
    title: 'Map Out Your Path',
    desc: "Whether you're joining a team or going independent with Growth Network, we'll put a concrete plan on paper.",
  },
]

const inputBase =
  'w-full rounded-lg border px-4 py-2.5 text-sm text-[#000000] placeholder-[#9CA3AF] outline-none transition focus:ring-2'
const inputNormal = 'border-[#E5E7EB] focus:border-black focus:ring-[#F3F4F6]'
const inputError = 'border-red-400 focus:ring-red-200'

function fieldClass(hasError: boolean) {
  return `${inputBase} ${hasError ? inputError : inputNormal}`
}

export default function BookATourPage() {
  const [form, setForm] = useState<TourFormData>(initialForm)
  const [phoneConsent, setPhoneConsent] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof TourFormData, string>>>({})
  const { errorMessage, submit, retry, isSubmitting, isSuccess, isRetryable } = useFormSubmission({
    formType: 'branch_tour_booking',
    sourceRoute: '/book-a-tour',
  })

  function validate(): boolean {
    const newErrors: Partial<Record<keyof TourFormData, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address.'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!form.preferredDate) newErrors.preferredDate = 'Please choose a preferred date.'
    if (!form.preferredTime) newErrors.preferredTime = 'Please choose a preferred time.'
    if (!form.pathInterest) newErrors.pathInterest = 'Please select a path interest.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof TourFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    submit({
      first_name: form.name.split(' ')[0] ?? '',
      last_name: form.name.split(' ').slice(1).join(' ') ?? '',
      email: form.email,
      phone: form.phone,
      preferred_date: form.preferredDate,
      preferred_time: form.preferredTime,
      path_interest: form.pathInterest,
      notes: form.notes,
      // The tick only. The server stamps the time and records the number it was
      // given for; a browser clock is not evidence.
      phone_consent: phoneConsent,
    })
  }

  // Minimum selectable date = today
  const today = new Date().toISOString().split('T')[0]

  if (isSuccess) {
    return (
      <section className="min-h-[60vh] bg-[#F3F4F6] py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            <SuccessConfirmation
              heading="Tour Request Submitted"
              message="We've received your request to visit the branch. We'll confirm your tour time within one business day."
              nextStep="Confirmation email with visit details and directions."
              backLabel="Back to Home"
              backHref="/"
            />
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/hero-tour-v2.jpeg"
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
                Come See What We&apos;re Building
              </h1>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-5 max-w-xl font-roboto text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Visit our Anytown office, meet the leadership team, and leave with a
                clear picture of which path fits your business.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left column: address + what to expect */}
            <div className="flex flex-col gap-8 lg:col-span-1">

              {/* Address Card */}
              <Reveal variant="up" delay={60}>
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
                  <h2 className="font-manrope mb-4 text-lg font-bold tracking-tight text-[#000000]">
                    Branch Location
                  </h2>

                  <div className="mb-4 flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill="#000000"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#000000]">123 Main Street</p>
                      <p className="font-roboto text-sm text-[#4B5563]">Anytown, VA 00000</p>
                    </div>
                  </div>

                  <div className="mb-4 flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 5v6l4.5 2.7-.75 1.23L11 14V7h1.5z"
                          fill="#000000"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#000000]">Office Hours</p>
                      <p className="font-roboto text-sm text-[#4B5563]">Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM</p>
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <ImageReveal className="mt-4 rounded-xl" direction="up">
                    <iframe
                      src="https://www.google.com/maps?q=123+Main+Street&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Acme Realty office — 123 Main Street, Anytown, VA 00000"
                    />
                  </ImageReveal>
                </div>
              </Reveal>

              {/* What to Expect */}
              <Reveal variant="up" delay={120}>
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
                  <h2 className="font-manrope mb-5 text-lg font-bold tracking-tight text-[#000000]">
                    What to Expect
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {WHAT_TO_EXPECT.map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-manrope font-semibold text-[#000000]">{item.title}</p>
                          <p className="font-roboto text-sm text-[#4B5563]">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right column: booking form */}
            <div className="lg:col-span-2">
              <Reveal variant="up" delay={100}>
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8">
                  <h2 className="font-manrope mb-2 text-2xl font-extrabold tracking-tight text-[#000000]">
                    Schedule a Visit
                  </h2>
                  <p className="mb-7 font-roboto text-sm text-[#9CA3AF]">
                    All fields marked with <span className="text-red-500">*</span> are required.
                  </p>

                  <div aria-live="polite" aria-atomic="true">
                    {isSubmitting && (
                      <SubmissionStatus message="Submitting your tour request..." className="mb-5" />
                    )}
                    {isRetryable && (
                      <ErrorRetryable
                        message={errorMessage}
                        onRetry={retry}
                        className="mb-5"
                      />
                    )}
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label htmlFor="tour-name" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="tour-name"
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
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label htmlFor="tour-email" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="tour-email"
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
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label htmlFor="tour-phone" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="tour-phone"
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

                    {/* Consent sits with the number it attaches to, never at the foot
                        of the form: the disclosure has to be conspicuous at the point
                        of collection. */}
                    <div className="sm:col-span-2">
                      <PhoneConsent
                        id="tour-phone-consent"
                        phone={form.phone}
                        checked={phoneConsent}
                        onChange={setPhoneConsent}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Path Interest */}
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label htmlFor="tour-pathInterest" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                        Path Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="tour-pathInterest"
                        name="pathInterest"
                        value={form.pathInterest}
                        onChange={handleChange}
                        className={fieldClass(!!errors.pathInterest)}
                      >
                        {PATH_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.pathInterest && (
                        <p className="mt-1 text-xs text-red-500">{errors.pathInterest}</p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="tour-preferredDate" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="tour-preferredDate"
                        name="preferredDate"
                        type="date"
                        min={today}
                        value={form.preferredDate}
                        onChange={handleChange}
                        className={fieldClass(!!errors.preferredDate)}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label htmlFor="tour-preferredTime" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="tour-preferredTime"
                        name="preferredTime"
                        value={form.preferredTime}
                        onChange={handleChange}
                        className={fieldClass(!!errors.preferredTime)}
                      >
                        <option value="" disabled>Select a time...</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p className="mt-1 text-xs text-red-500">{errors.preferredTime}</p>
                      )}
                    </div>

                    {/* Notes */}
                    <div className="sm:col-span-2">
                      <label htmlFor="tour-notes" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                        Additional Notes <span className="font-normal text-[#9CA3AF]">(optional)</span>
                      </label>
                      <textarea
                        id="tour-notes"
                        name="notes"
                        rows={4}
                        value={form.notes}
                        onChange={handleChange}
                        placeholder="Anything else you'd like us to know before your visit..."
                        className="w-full resize-none rounded-lg border border-[#E5E7EB] px-4 py-2.5 font-roboto text-sm text-[#000000] placeholder-[#9CA3AF] outline-none transition focus:border-black focus:ring-2 focus:ring-[#F3F4F6]"
                      />
                    </div>

                    {/* Submit */}
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                      >
                        {isSubmitting ? 'Submitting...' : 'Request a Visit'}
                      </button>
                      <p className="mt-3 font-roboto text-xs text-[#9CA3AF]">
                        We respect your privacy. Your information is never sold or shared.
                      </p>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
