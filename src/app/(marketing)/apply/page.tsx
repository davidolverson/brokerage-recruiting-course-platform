'use client'

import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getTeamBySlug } from '@/lib/data/teams'
import { Container } from '@/components/layout/Container'
import { useFormSubmission } from '@/lib/hooks/useFormSubmission'
import { PhoneConsent } from '@/components/forms/PhoneConsent'
import { SubmissionStatus } from '@/components/forms/SubmissionStatus'
import { SuccessConfirmation } from '@/components/forms/SuccessConfirmation'
import { ErrorRetryable } from '@/components/forms/ErrorRetryable'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

type PathType = 'team' | 'grid'

interface TeamFormData {
  name: string
  email: string
  phone: string
  licenseStatus: string
  yearsExperience: string
  currentBrokerage: string
  teamInterest: string
  whyTeam: string
}

interface GridFormData {
  name: string
  email: string
  phone: string
  licenseStatus: string
  yearsExperience: string
  currentBrokerage: string
  annualTransactions: string
  investorInterest: string
  whyGrid: string
}

const initialTeamForm: TeamFormData = {
  name: '',
  email: '',
  phone: '',
  licenseStatus: '',
  yearsExperience: '',
  currentBrokerage: '',
  teamInterest: '',
  whyTeam: '',
}

const initialGridForm: GridFormData = {
  name: '',
  email: '',
  phone: '',
  licenseStatus: '',
  yearsExperience: '',
  currentBrokerage: '',
  annualTransactions: '',
  investorInterest: '',
  whyGrid: '',
}

const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Application Received',
    desc: 'We review every application within one business day.',
  },
  {
    step: '02',
    title: 'Intro Call',
    desc: '15-minute call to learn about your goals and answer your questions.',
  },
  {
    step: '03',
    title: 'Branch Visit',
    desc: 'Tour the office, meet the team, and see the culture first-hand.',
  },
  {
    step: '04',
    title: 'Welcome to Acme Realty',
    desc: 'Onboarding, training schedule, and your first 30-day plan.',
  },
]

const LICENSE_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'active_va', label: 'Active — Virginia' },
  { value: 'active_other', label: 'Active — Another State' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'in_progress', label: 'In Progress (Pre-License)' },
  { value: 'none', label: 'No License Yet' },
]

const EXPERIENCE_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: '0-1', label: 'Less than 1 year' },
  { value: '1-3', label: '1 – 3 years' },
  { value: '3-5', label: '3 – 5 years' },
  { value: '5-10', label: '5 – 10 years' },
  { value: '10+', label: '10+ years' },
]

const TRANSACTION_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: '0-5', label: '0 – 5 per year' },
  { value: '6-15', label: '6 – 15 per year' },
  { value: '16-30', label: '16 – 30 per year' },
  { value: '31-50', label: '31 – 50 per year' },
  { value: '50+', label: '50+ per year' },
]

const TEAM_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'buyer_specialist', label: 'Buyer Specialist' },
  { value: 'listing_agent', label: 'Listing Agent' },
  { value: 'open_to_both', label: 'Open to Either' },
  { value: 'not_sure', label: 'Not Sure Yet' },
]

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplyPageContent />
    </Suspense>
  )
}

function ApplyPageContent() {
  const searchParams = useSearchParams()
  const teamSlug = searchParams.get('team')
  const preselectedTeam = teamSlug ? getTeamBySlug(teamSlug) : null

  const [activePath, setActivePath] = useState<PathType>('team')
  const [teamForm, setTeamForm] = useState<TeamFormData>(initialTeamForm)
  const [gridForm, setGridForm] = useState<GridFormData>(initialGridForm)
  const [teamErrors, setTeamErrors] = useState<Partial<Record<keyof TeamFormData, string>>>({})
  const [gridErrors, setGridErrors] = useState<Partial<Record<keyof GridFormData, string>>>({})
  // One consent per path, not one shared flag. The two paths hold separate phone
  // fields, and consent given for one number must never be submitted against the
  // other when the visitor switches tabs.
  const [teamPhoneConsent, setTeamPhoneConsent] = useState(false)
  const [gridPhoneConsent, setGridPhoneConsent] = useState(false)
  const [submittedPath, setSubmittedPath] = useState<PathType>('team')

  useEffect(() => {
    if (preselectedTeam) {
      setActivePath('team')
    }
  }, [preselectedTeam])

  const formType = activePath === 'team' ? 'join_team_inquiry' : 'network_inquiry'
  const { errorMessage, submit, retry, isSubmitting, isSuccess, isRetryable } = useFormSubmission({
    formType,
    sourceRoute: '/apply',
    selectedPath: activePath,
  })

  function validateTeam(): boolean {
    const e: Partial<Record<keyof TeamFormData, string>> = {}
    if (!teamForm.name.trim()) e.name = 'Name is required.'
    if (!teamForm.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(teamForm.email)) e.email = 'Enter a valid email.'
    if (!teamForm.phone.trim()) e.phone = 'Phone is required.'
    if (!teamForm.licenseStatus) e.licenseStatus = 'Select your license status.'
    if (!teamForm.yearsExperience) e.yearsExperience = 'Select your experience level.'
    if (!teamForm.whyTeam.trim()) e.whyTeam = 'Please share a bit about your goals.'
    setTeamErrors(e)
    return Object.keys(e).length === 0
  }

  function validateGrid(): boolean {
    const e: Partial<Record<keyof GridFormData, string>> = {}
    if (!gridForm.name.trim()) e.name = 'Name is required.'
    if (!gridForm.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gridForm.email)) e.email = 'Enter a valid email.'
    if (!gridForm.phone.trim()) e.phone = 'Phone is required.'
    if (!gridForm.licenseStatus) e.licenseStatus = 'Select your license status.'
    if (!gridForm.yearsExperience) e.yearsExperience = 'Select your experience level.'
    if (!gridForm.whyGrid.trim()) e.whyGrid = 'Please share a bit about your goals.'
    setGridErrors(e)
    return Object.keys(e).length === 0
  }

  function handleTeamChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setTeamForm((prev) => ({ ...prev, [name]: value }))
    if (teamErrors[name as keyof TeamFormData]) {
      setTeamErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleGridChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setGridForm((prev) => ({ ...prev, [name]: value }))
    if (gridErrors[name as keyof GridFormData]) {
      setGridErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const valid = activePath === 'team' ? validateTeam() : validateGrid()
    if (!valid) return

    setSubmittedPath(activePath)
    const formData = activePath === 'team' ? { ...teamForm } : { ...gridForm }
    const nameParts = formData.name.trim().split(/\s+/)
    const { name: _name, ...rest } = formData
    const payload = {
      path: activePath,
      first_name: nameParts[0] || '',
      last_name: nameParts.slice(1).join(' ') || '',
      ...rest,
      ...(preselectedTeam ? { preselectedTeam: preselectedTeam.name } : {}),
      // The tick only, and the tick belonging to the path being submitted. The
      // server stamps the time and records the number it was given for; a
      // browser clock is not evidence.
      phone_consent: activePath === 'team' ? teamPhoneConsent : gridPhoneConsent,
    }
    await submit(payload)
  }

  const inputBase =
    'w-full rounded-lg border px-4 py-2.5 text-sm text-[#000000] placeholder-[#9CA3AF] outline-none transition focus:ring-2'
  const inputNormal = 'border-[#E5E7EB] focus:border-black focus:ring-[#F3F4F6]'
  const inputError = 'border-red-400 focus:ring-red-200'

  function fieldClass(hasError: boolean) {
    return `${inputBase} ${hasError ? inputError : inputNormal}`
  }

  if (isSuccess) {
    return (
      <section className="min-h-[60vh] bg-[#F3F4F6] py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            {submittedPath === 'team' ? (
              <SuccessConfirmation
                heading="Application Received"
                message="We've received your team application. A recruiter will review it and reach out within one business day."
                nextStep="Intro call to discuss which team is the best fit."
              />
            ) : (
              <SuccessConfirmation
                heading="Application Received"
                message="We've received your Growth Network application. A team member will follow up to discuss the Wealth Roadmap framework and your FREE Growth Network Pro membership."
                nextStep="Strategy call to outline your Growth Network onboarding and ownership path."
              />
            )}
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
          src="/images/hero-agents-v2.jpeg"
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
                Apply to Join Acme Realty
              </h1>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-5 max-w-xl font-roboto text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Choose your path below and complete the short application. We review every
                submission personally — a real conversation, not a black-box algorithm.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left: timeline + quiz link */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              <Reveal variant="up" delay={60}>
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-7">
                  <h2 className="font-manrope mb-6 text-lg font-bold tracking-tight text-[#000000]">
                    What Happens Next
                  </h2>
                  <ol className="flex flex-col gap-6">
                    {TIMELINE_STEPS.map((item, idx) => (
                      <li key={item.step} className="relative flex gap-4">
                        {idx < TIMELINE_STEPS.length - 1 && (
                          <span
                            className="absolute left-[14px] top-7 h-full w-[2px] bg-[#E5E7EB]"
                            aria-hidden="true"
                          />
                        )}
                        <span className="relative z-10 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-manrope font-semibold text-[#000000]">{item.title}</p>
                          <p className="font-roboto text-sm text-[#4B5563]">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              {/* Quiz Nudge */}
              <Reveal variant="up" delay={120}>
                <div className="rounded-xl bg-[#000000] p-6">
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                    Not Sure Which Path?
                  </p>
                  <p className="mb-4 font-roboto text-sm leading-relaxed text-[#9CA3AF]">
                    Answer 5 questions and get a straight recommendation in under two minutes.
                  </p>
                  <Link
                    href="/quiz"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#000000] transition-colors duration-150 hover:bg-[#F3F4F6]"
                  >
                    Take the Fit Quiz
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: path toggle + form */}
            <div className="lg:col-span-2">
              <Reveal variant="up" delay={100}>
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8">

                  {/* Pre-selected team banner */}
                  {preselectedTeam && (
                    <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4">
                      {preselectedTeam.logoImage && (
                        <img
                          src={preselectedTeam.logoImage}
                          alt={`${preselectedTeam.name} logo`}
                          className="h-10 w-10 rounded-lg object-contain bg-white p-0.5"
                        />
                      )}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                          Applying to
                        </p>
                        <p className="text-sm font-bold text-[#000000]">
                          {preselectedTeam.name}
                          <span className="ml-2 font-normal text-[#6B7280]">
                            — Led by {preselectedTeam.leader}
                          </span>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Path Toggle */}
                  <div className="mb-8">
                    <p className="mb-3 font-manrope text-sm font-semibold text-[#000000]">
                      Select Your Path
                    </p>
                    <div className="flex overflow-hidden rounded-xl border border-[#E5E7EB]">
                      <button
                        type="button"
                        onClick={() => setActivePath('team')}
                        className={`flex-1 px-4 py-3 text-sm font-bold transition-all duration-150 ${
                          activePath === 'team'
                            ? 'bg-black text-white'
                            : 'bg-transparent text-[#9CA3AF] hover:text-[#000000]'
                        }`}
                      >
                        Join a Team
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePath('grid')}
                        className={`flex-1 border-l border-[#E5E7EB] px-4 py-3 text-sm font-bold transition-all duration-150 ${
                          activePath === 'grid'
                            ? 'bg-black text-white'
                            : 'bg-transparent text-[#9CA3AF] hover:text-[#000000]'
                        }`}
                      >
                        Growth Network (Independent)
                      </button>
                    </div>
                    <p className="mt-2 font-roboto text-xs text-[#9CA3AF]">
                      {activePath === 'team'
                        ? 'Best for agents who want structure, mentorship, and collaborative growth.'
                        : 'Flip your income into ownership. Follow the Wealth Roadmap framework with full autonomy, maximum splits, and a FREE Growth Network Pro membership included.'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate aria-live="polite">
                    {activePath === 'team' ? (
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Name */}
                        <div>
                          <label htmlFor="apply-team-name" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="apply-team-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={teamForm.name}
                            onChange={handleTeamChange}
                            placeholder="Jane Smith"
                            className={fieldClass(!!teamErrors.name)}
                          />
                          {teamErrors.name && <p className="mt-1 text-xs text-red-500">{teamErrors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="apply-team-email" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="apply-team-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={teamForm.email}
                            onChange={handleTeamChange}
                            placeholder="jane@example.com"
                            className={fieldClass(!!teamErrors.email)}
                          />
                          {teamErrors.email && <p className="mt-1 text-xs text-red-500">{teamErrors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="apply-team-phone" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="apply-team-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={teamForm.phone}
                            onChange={handleTeamChange}
                            placeholder="(555) 010-0123"
                            className={fieldClass(!!teamErrors.phone)}
                          />
                          {teamErrors.phone && <p className="mt-1 text-xs text-red-500">{teamErrors.phone}</p>}
                        </div>

                        {/* Consent sits with the number it attaches to, never at the
                            foot of the form: the disclosure has to be conspicuous at
                            the point of collection. */}
                        <div className="sm:col-span-2">
                          <PhoneConsent
                            id="apply-team-phone-consent"
                            phone={teamForm.phone}
                            checked={teamPhoneConsent}
                            onChange={setTeamPhoneConsent}
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* License Status */}
                        <div>
                          <label htmlFor="apply-team-license" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            License Status <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="apply-team-license"
                            name="licenseStatus"
                            value={teamForm.licenseStatus}
                            onChange={handleTeamChange}
                            className={fieldClass(!!teamErrors.licenseStatus)}
                          >
                            {LICENSE_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                            ))}
                          </select>
                          {teamErrors.licenseStatus && <p className="mt-1 text-xs text-red-500">{teamErrors.licenseStatus}</p>}
                        </div>

                        {/* Years Experience */}
                        <div>
                          <label htmlFor="apply-team-experience" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Years of Experience <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="apply-team-experience"
                            name="yearsExperience"
                            value={teamForm.yearsExperience}
                            onChange={handleTeamChange}
                            className={fieldClass(!!teamErrors.yearsExperience)}
                          >
                            {EXPERIENCE_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                            ))}
                          </select>
                          {teamErrors.yearsExperience && <p className="mt-1 text-xs text-red-500">{teamErrors.yearsExperience}</p>}
                        </div>

                        {/* Current Brokerage */}
                        <div>
                          <label htmlFor="apply-team-brokerage" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Current Brokerage <span className="font-normal text-[#9CA3AF]">(optional)</span>
                          </label>
                          <input
                            id="apply-team-brokerage"
                            name="currentBrokerage"
                            type="text"
                            value={teamForm.currentBrokerage}
                            onChange={handleTeamChange}
                            placeholder="e.g. Traditional Brokerage"
                            className={fieldClass(false)}
                          />
                        </div>

                        {/* Team Role Interest */}
                        <div>
                          <label htmlFor="apply-team-interest" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Team Role Interest <span className="font-normal text-[#9CA3AF]">(optional)</span>
                          </label>
                          <select
                            id="apply-team-interest"
                            name="teamInterest"
                            value={teamForm.teamInterest}
                            onChange={handleTeamChange}
                            className={fieldClass(false)}
                          >
                            {TEAM_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Why Team */}
                        <div className="sm:col-span-2">
                          <label htmlFor="apply-team-why" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            What are your goals for the next 12 months? <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="apply-team-why"
                            name="whyTeam"
                            rows={4}
                            value={teamForm.whyTeam}
                            onChange={handleTeamChange}
                            placeholder="Share what you're looking to achieve and what drew you to a team environment..."
                            className={`resize-none ${fieldClass(!!teamErrors.whyTeam)}`}
                          />
                          {teamErrors.whyTeam && <p className="mt-1 text-xs text-red-500">{teamErrors.whyTeam}</p>}
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Name */}
                        <div>
                          <label htmlFor="apply-grid-name" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="apply-grid-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={gridForm.name}
                            onChange={handleGridChange}
                            placeholder="Jane Smith"
                            className={fieldClass(!!gridErrors.name)}
                          />
                          {gridErrors.name && <p className="mt-1 text-xs text-red-500">{gridErrors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="apply-grid-email" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="apply-grid-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={gridForm.email}
                            onChange={handleGridChange}
                            placeholder="jane@example.com"
                            className={fieldClass(!!gridErrors.email)}
                          />
                          {gridErrors.email && <p className="mt-1 text-xs text-red-500">{gridErrors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="apply-grid-phone" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="apply-grid-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={gridForm.phone}
                            onChange={handleGridChange}
                            placeholder="(555) 010-0123"
                            className={fieldClass(!!gridErrors.phone)}
                          />
                          {gridErrors.phone && <p className="mt-1 text-xs text-red-500">{gridErrors.phone}</p>}
                        </div>

                        {/* Consent sits with the number it attaches to, never at the
                            foot of the form: the disclosure has to be conspicuous at
                            the point of collection. */}
                        <div className="sm:col-span-2">
                          <PhoneConsent
                            id="apply-grid-phone-consent"
                            phone={gridForm.phone}
                            checked={gridPhoneConsent}
                            onChange={setGridPhoneConsent}
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* License Status */}
                        <div>
                          <label htmlFor="apply-grid-license" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            License Status <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="apply-grid-license"
                            name="licenseStatus"
                            value={gridForm.licenseStatus}
                            onChange={handleGridChange}
                            className={fieldClass(!!gridErrors.licenseStatus)}
                          >
                            {LICENSE_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                            ))}
                          </select>
                          {gridErrors.licenseStatus && <p className="mt-1 text-xs text-red-500">{gridErrors.licenseStatus}</p>}
                        </div>

                        {/* Years Experience */}
                        <div>
                          <label htmlFor="apply-grid-experience" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Years of Experience <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="apply-grid-experience"
                            name="yearsExperience"
                            value={gridForm.yearsExperience}
                            onChange={handleGridChange}
                            className={fieldClass(!!gridErrors.yearsExperience)}
                          >
                            {EXPERIENCE_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                            ))}
                          </select>
                          {gridErrors.yearsExperience && <p className="mt-1 text-xs text-red-500">{gridErrors.yearsExperience}</p>}
                        </div>

                        {/* Annual Transactions */}
                        <div>
                          <label htmlFor="apply-grid-transactions" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Annual Transactions <span className="font-normal text-[#9CA3AF]">(optional)</span>
                          </label>
                          <select
                            id="apply-grid-transactions"
                            name="annualTransactions"
                            value={gridForm.annualTransactions}
                            onChange={handleGridChange}
                            className={fieldClass(false)}
                          >
                            {TRANSACTION_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Current Brokerage */}
                        <div>
                          <label htmlFor="apply-grid-brokerage" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Current Brokerage <span className="font-normal text-[#9CA3AF]">(optional)</span>
                          </label>
                          <input
                            id="apply-grid-brokerage"
                            name="currentBrokerage"
                            type="text"
                            value={gridForm.currentBrokerage}
                            onChange={handleGridChange}
                            placeholder="e.g. RE/MAX"
                            className={fieldClass(false)}
                          />
                        </div>

                        {/* Investor Interest */}
                        <div>
                          <label htmlFor="apply-grid-investor" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            Interested in Real Estate Investing?
                          </label>
                          <select
                            id="apply-grid-investor"
                            name="investorInterest"
                            value={gridForm.investorInterest}
                            onChange={handleGridChange}
                            className={fieldClass(false)}
                          >
                            <option value="">Select...</option>
                            <option value="yes_active">Yes — already investing</option>
                            <option value="yes_learning">Yes — still learning</option>
                            <option value="maybe">Maybe — open to it</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {/* Why Grid */}
                        <div className="sm:col-span-2">
                          <label htmlFor="apply-grid-why" className="mb-1.5 block text-sm font-semibold text-[#000000]">
                            What does independence mean to you in real estate? <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="apply-grid-why"
                            name="whyGrid"
                            rows={4}
                            value={gridForm.whyGrid}
                            onChange={handleGridChange}
                            placeholder="Tell us about your vision, your current business, and what you're looking for in a brokerage..."
                            className={`resize-none ${fieldClass(!!gridErrors.whyGrid)}`}
                          />
                          {gridErrors.whyGrid && <p className="mt-1 text-xs text-red-500">{gridErrors.whyGrid}</p>}
                        </div>
                      </div>
                    )}

                    {isSubmitting && (
                      <SubmissionStatus message="Submitting your application..." className="mt-4" />
                    )}

                    {isRetryable && (
                      <ErrorRetryable
                        message={errorMessage}
                        onRetry={retry}
                        className="mt-4"
                      />
                    )}

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                      >
                        {isSubmitting ? 'Submitting...' : `Submit ${activePath === 'team' ? 'Team' : 'Growth Network'} Application`}
                      </button>
                      <p className="mt-3 font-roboto text-xs text-[#9CA3AF]">
                        Fields marked <span className="text-red-500">*</span> are required. Your
                        information is kept private.
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
