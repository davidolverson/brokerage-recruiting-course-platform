'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { PhoneConsent } from '@/components/forms/PhoneConsent'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { teams } from '@/lib/data/teams'
import { events, getUTMParams, buildCampaignId } from '@/lib/analytics'

interface Question {
  id: number
  text: string
  subtext?: string
  options: {
    label: string
    value: string
    score: 'grid' | 'team' | 'neutral'
  }[]
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'How do you prefer to work day-to-day?',
    subtext: 'Think about what energizes you most as an agent.',
    options: [
      { label: "Fully independently — I set my own schedule, systems, and strategy", value: 'a', score: 'grid' },
      { label: "Within a structured team — I thrive with defined roles and shared resources", value: 'b', score: 'team' },
      { label: "Somewhere in between — I value flexibility but like having backup", value: 'c', score: 'neutral' },
    ],
  },
  {
    id: 2,
    text: "Where are you in your production right now?",
    subtext: "Be honest — there's no wrong answer here.",
    options: [
      { label: "New or pre-licensed — I'm just getting started", value: 'a', score: 'team' },
      { label: "1–3 years in, still building consistent volume", value: 'b', score: 'team' },
      { label: "3+ years and closing 15+ deals annually", value: 'c', score: 'grid' },
    ],
  },
  {
    id: 3,
    text: 'Are you interested in real estate investing or building wealth beyond commissions?',
    subtext: 'Growth Network is built around agents who think like investors.',
    options: [
      { label: "Yes — investing is already part of my plan or I want it to be", value: 'a', score: 'grid' },
      { label: "Maybe someday, but it's not my current focus", value: 'b', score: 'neutral' },
      { label: "No — I want to focus purely on sales production right now", value: 'c', score: 'team' },
    ],
  },
  {
    id: 4,
    text: 'How important is structured accountability to you?',
    subtext: 'Think about past work environments where you performed best.',
    options: [
      { label: "Very — I perform better with check-ins, goals, and a coach or team leader", value: 'a', score: 'team' },
      { label: "Neutral — I can work either way depending on the setup", value: 'b', score: 'neutral' },
      { label: "Not important — I'm self-directed and create my own accountability", value: 'c', score: 'grid' },
    ],
  },
  {
    id: 5,
    text: 'What best describes your primary motivation for joining Acme Realty?',
    subtext: 'Pick the one that fits most right now.',
    options: [
      { label: "Learning the business, getting leads, and growing within a team", value: 'a', score: 'team' },
      { label: "Maximizing my split, running my own brand, and scaling independently", value: 'b', score: 'grid' },
      { label: "Access to training, community, and the Acme platform — I'm open to either path", value: 'c', score: 'neutral' },
    ],
  },
  {
    id: 6,
    text: 'What type of real estate interests you most?',
    subtext: 'Your market focus helps us match you to the right path.',
    options: [
      { label: "Residential sales — helping families buy and sell homes", value: 'a', score: 'team' },
      { label: "Investment properties — flips, rentals, and wealth building", value: 'b', score: 'grid' },
      { label: "A mix of both — I want flexibility", value: 'c', score: 'neutral' },
    ],
  },
  {
    id: 7,
    text: 'How important is having a structured support system from day one?',
    subtext: 'Think about what you need to hit the ground running.',
    options: [
      { label: "Very important — I want a team around me immediately", value: 'a', score: 'team' },
      { label: "Somewhat — I like support but value independence more", value: 'b', score: 'neutral' },
      { label: "Not important — I work best when I build my own systems", value: 'c', score: 'grid' },
    ],
  },
]

type ResultType = 'Growth Network' | 'Team' | 'Toss-Up'

interface QuizResult {
  type: ResultType
  headline: string
  description: string
  cta: { label: string; href: string; primary: boolean }[]
}

const RESULTS: Record<ResultType, QuizResult> = {
  'Growth Network': {
    type: 'Growth Network',
    headline: "You're a Growth Network Agent — Flip Income Into Ownership",
    description:
      "You're experienced, self-directed, and thinking beyond commissions. Growth Network is built for agents who want to convert their income into ownership. Through the Wealth Roadmap framework, you'll build a Cash Machine and put it to work as lasting wealth. You'll get free Growth Network Pro membership, weekly Wealth Mastermind sessions, a 50K+ investor network, and the tools to build a business that compounds — all inside Acme Realty.",
    cta: [
      { label: 'Apply to Growth Network', href: '/apply', primary: true },
      { label: 'Learn About Growth Network', href: '/network', primary: false },
    ],
  },
  Team: {
    type: 'Team',
    headline: "You're a Team Fit",
    description:
      "You're in growth mode — and that's a strong place to be. Joining a team inside Acme Realty gives you leads, mentorship, accountability, and a built-in system so you can close deals while you build skills. You don't have to figure everything out alone.",
    cta: [
      { label: 'Apply to Join a Team', href: '/apply', primary: true },
      { label: 'Browse Teams', href: '/teams', primary: false },
    ],
  },
  'Toss-Up': {
    type: 'Toss-Up',
    headline: "It Could Go Either Way",
    description:
      "You show traits of both paths — which means the best next step is a real conversation. Book a quick tour and we'll help you map out the right fit based on where you are and where you want to go.",
    cta: [
      { label: 'Book a Branch Tour', href: '/book-a-tour', primary: true },
      { label: 'Contact Us', href: '/contact', primary: false },
    ],
  },
}

function scoreQuiz(answers: Record<number, string>): ResultType {
  let gridScore = 0
  let teamScore = 0

  QUESTIONS.forEach((q) => {
    const selectedValue = answers[q.id]
    const option = q.options.find((o) => o.value === selectedValue)
    if (option) {
      if (option.score === 'grid') gridScore++
      else if (option.score === 'team') teamScore++
    }
  })

  if (gridScore >= 4) return 'Growth Network'
  if (teamScore >= 4) return 'Team'
  return 'Toss-Up'
}

function getRecommendedTeam(resultType: ResultType, answers: Record<number, string>): { slug: string; name: string } | null {
  if (resultType !== 'Team') return null
  const q6Answer = answers[6]
  if (q6Answer === 'b') {
    const t = teams.find((team) => team.slug === 'example-investor-team')
    return t ? { slug: t.slug, name: t.name } : null
  }
  if (q6Answer === 'a') {
    const t = teams.find((team) => team.slug === 'example-residential-team')
    return t ? { slug: t.slug, name: t.name } : null
  }
  return null
}

const QUIZ_STORAGE_KEY = 'acme-realty-quiz-progress'

interface ContactInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface QuizProgress {
  question: number
  answers: Record<number, string>
  gatePassed?: boolean
  contact?: ContactInfo
  leadId?: number | null
}

function loadQuizProgress(): QuizProgress | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(QUIZ_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch { return null }
}

function saveQuizProgress(progress: QuizProgress) {
  try { sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(progress)) } catch {}
}

function clearQuizProgress() {
  try { sessionStorage.removeItem(QUIZ_STORAGE_KEY) } catch {}
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function isValidPhone(v: string): boolean {
  if (!/^[\d\s\-().+]{7,}$/.test(v)) return false
  return (v.match(/\d/g) ?? []).length >= 7
}

export default function QuizPage() {
  const saved = useRef(loadQuizProgress())
  const [currentQuestion, setCurrentQuestion] = useState(saved.current?.question ?? 0)
  const [answers, setAnswers] = useState<Record<number, string>>(saved.current?.answers ?? {})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)
  const [started, setStarted] = useState(saved.current ? true : false)
  const [recommendedTeam, setRecommendedTeam] = useState<{ slug: string; name: string } | null>(null)

  // Contact gate — collected before the quiz starts so no lead is anonymous
  const [gatePassed, setGatePassed] = useState(saved.current?.gatePassed ?? false)
  const [contact, setContact] = useState<ContactInfo>(
    saved.current?.contact ?? { firstName: '', lastName: '', email: '', phone: '' }
  )
  const [contactErrors, setContactErrors] = useState<Partial<Record<keyof ContactInfo, string>>>({})
  // Deliberately NOT restored from saved progress. Everything else here survives a
  // reload because losing it costs the visitor work; a consent tick restored from
  // localStorage is not evidence that anyone agreed to anything on this visit, so
  // it starts unticked and this path fails closed.
  const [phoneConsent, setPhoneConsent] = useState(false)
  const [gateStatus, setGateStatus] = useState<'idle' | 'submitting'>('idle')
  const leadIdRef = useRef<number | null>(saved.current?.leadId ?? null)

  const hasPersisted = useRef(false)

  // Save progress on question/answer changes
  useEffect(() => {
    if (started && !showResult) {
      saveQuizProgress({ question: currentQuestion, answers, gatePassed, contact, leadId: leadIdRef.current })
    }
    if (showResult) {
      clearQuizProgress()
    }
  }, [currentQuestion, answers, started, showResult, gatePassed, contact])

  // Fire-and-forget: enrich the gate-created lead with the quiz result.
  // Falls back to a fresh insert if the gate POST never returned an id.
  useEffect(() => {
    if (!showResult || !result || hasPersisted.current) return
    hasPersisted.current = true

    let gridScore = 0
    let teamScore = 0
    let neutralScore = 0
    QUESTIONS.forEach((q) => {
      const opt = q.options.find((o) => o.value === answers[q.id])
      if (opt?.score === 'grid') gridScore++
      else if (opt?.score === 'team') teamScore++
      else if (opt?.score === 'neutral') neutralScore++
    })

    const selectedPath = result.type === 'Growth Network' ? 'network' : result.type === 'Team' ? 'team' : 'toss_up'
    const recTeam = getRecommendedTeam(result.type, answers)
    setRecommendedTeam(recTeam)

    events.quizCompleted(selectedPath, recTeam?.slug)

    // Nested under `metadata` to match the admin analytics queries, which read
    // the team name from metadata->'metadata'->>'recommended_team'.
    const quizMeta = {
      answers: Object.entries(answers).map(([qId, value]) => {
        const q = QUESTIONS.find((qq) => qq.id === Number(qId))
        const opt = q?.options.find((o) => o.value === value)
        return { question_id: Number(qId), value, label: opt?.label ?? null, score: opt?.score ?? null }
      }),
      recommended_path: result.type,
      recommended_team: recTeam?.name ?? null,
      score_breakdown: { grid: gridScore, team: teamScore, neutral: neutralScore },
    }

    const enrich = leadIdRef.current != null
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        enrich
          ? {
              lead_id: leadIdRef.current,
              form_type: 'fit_quiz',
              source_route: '/quiz',
              selected_path: selectedPath,
              selected_team: recTeam?.slug ?? null,
              quiz_stage: 'completed',
              metadata: quizMeta,
            }
          : {
              // Fallback: gate POST failed, so create the lead now with contact info
              form_type: 'fit_quiz',
              source_route: '/quiz',
              first_name: contact.firstName.trim(),
              last_name: contact.lastName.trim(),
              email: contact.email.trim(),
              phone: contact.phone.trim(),
              selected_path: selectedPath,
              selected_team: recTeam?.slug ?? null,
              quiz_stage: 'completed',
              metadata: quizMeta,
              // This branch is the row's only insert, so it carries the tick
              // given at the gate for this same number. The enrich branch above
              // deliberately does not: that row already holds its own record,
              // and re-sending would let a later request restate consent.
              phone_consent: phoneConsent,
            }
      ),
    }).catch(() => {
      // Silent failure — quiz result display is not affected
    })
  }, [showResult, result, answers, contact, phoneConsent])

  const question = QUESTIONS[currentQuestion]
  const totalQuestions = QUESTIONS.length
  const progressPercent = ((currentQuestion + (selectedOption ? 0.5 : 0)) / totalQuestions) * 100
  const isLast = currentQuestion === totalQuestions - 1

  function handleSelect(value: string) {
    setSelectedOption(value)
  }

  // Keyboard shortcuts: 1/2/3 or A/B/C to select, Enter to continue
  useEffect(() => {
    if (!started || !gatePassed || showResult) return
    function onKeyDown(e: KeyboardEvent) {
      const options = question.options
      if (e.key === '1' || e.key.toLowerCase() === 'a') {
        if (options[0]) handleSelect(options[0].value)
      } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
        if (options[1]) handleSelect(options[1].value)
      } else if (e.key === '3' || e.key.toLowerCase() === 'c') {
        if (options[2]) handleSelect(options[2].value)
      } else if (e.key === 'Enter' && selectedOption) {
        handleNext()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  function handleNext() {
    if (!selectedOption) return

    const newAnswers = { ...answers, [question.id]: selectedOption }
    setAnswers(newAnswers)

    if (isLast) {
      const resultType = scoreQuiz(newAnswers)
      setResult(RESULTS[resultType])
      setShowResult(true)
    } else {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedOption(null)
    }
  }

  function handleBack() {
    if (currentQuestion === 0) {
      setStarted(false)
      setSelectedOption(null)
      return
    }
    const prevQ = currentQuestion - 1
    setCurrentQuestion(prevQ)
    setSelectedOption(answers[QUESTIONS[prevQ].id] ?? null)
  }

  function handleReset() {
    setCurrentQuestion(0)
    setAnswers({})
    setSelectedOption(null)
    setShowResult(false)
    setResult(null)
    setStarted(false)
    setGatePassed(false)
    setContact({ firstName: '', lastName: '', email: '', phone: '' })
    setContactErrors({})
    setPhoneConsent(false)
    setGateStatus('idle')
    leadIdRef.current = null
    setRecommendedTeam(null)
    hasPersisted.current = false
    clearQuizProgress()
  }

  function setContactField(key: keyof ContactInfo, value: string) {
    setContact((prev) => ({ ...prev, [key]: value }))
    if (contactErrors[key]) {
      setContactErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  async function handleGateSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const errs: Partial<Record<keyof ContactInfo, string>> = {}
    if (!contact.firstName.trim()) errs.firstName = 'First name is required.'
    if (!contact.lastName.trim()) errs.lastName = 'Last name is required.'
    if (!contact.email.trim()) errs.email = 'Email is required.'
    else if (!isValidEmail(contact.email)) errs.email = 'Please enter a valid email address.'
    if (!contact.phone.trim()) errs.phone = 'Phone number is required.'
    else if (!isValidPhone(contact.phone)) errs.phone = 'Please enter a valid phone number.'

    if (Object.keys(errs).length > 0) {
      setContactErrors(errs)
      return
    }

    setGateStatus('submitting')

    // Create the lead up-front so the team is alerted and abandoners are still
    // captured. The result step later enriches this same row by id.
    const utmParams = getUTMParams()
    const partnerRef =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('ref') ?? undefined
        : undefined

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'fit_quiz',
          source_route: '/quiz',
          first_name: contact.firstName.trim(),
          last_name: contact.lastName.trim(),
          email: contact.email.trim(),
          phone: contact.phone.trim(),
          campaign_id: buildCampaignId(utmParams),
          partner_ref: partnerRef,
          quiz_stage: 'started',
          // The tick only. The server stamps the time and records the number it
          // was given for; a browser clock is not evidence.
          phone_consent: phoneConsent,
          ...(utmParams.utm_source
            ? {
                utm_source: utmParams.utm_source,
                utm_medium: utmParams.utm_medium,
                utm_campaign: utmParams.utm_campaign,
                utm_content: utmParams.utm_content,
                utm_term: utmParams.utm_term,
              }
            : {}),
        }),
      })
      if (res.ok) {
        const data = await res.json().catch(() => null)
        if (data?.id != null) leadIdRef.current = Number(data.id)
      }
    } catch {
      // Network failure — proceed anyway; result step falls back to a fresh insert
    }

    setGateStatus('idle')
    setGatePassed(true)
    events.quizStarted('/quiz')
  }

  // Intro screen
  if (!started) {
    return (
      <>
        <section className="relative overflow-hidden bg-black py-20 md:py-28">
          <img src="/images/hero-quiz-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Reveal variant="clip">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Acme Realty
                </p>
              </Reveal>
              <Reveal variant="clip" delay={80}>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                  Team or Growth Network? Take the Quiz
                </h1>
              </Reveal>
              <Reveal variant="up" delay={200}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                  7 questions. Under 2 minutes. Get a clear recommendation based on your
                  experience, goals, and working style.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-[#F3F4F6] py-16">
          <Container>
            <div className="mx-auto max-w-2xl">
              <Reveal variant="up">
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-10">

                  <h2 className="mb-6 text-xl font-bold text-[#000000]">
                    What We&apos;ll Cover
                  </h2>

                  <ul className="mb-8 flex flex-col gap-3">
                    <RevealStagger variant="up" baseDelay={60} stagger={60}>
                      {[
                        'How you prefer to work',
                        'Where you are in your production right now',
                        'Your investing and wealth-building goals',
                        'How you respond to accountability',
                        'What you want most from a brokerage',
                        'Your market focus and interests',
                        'How much support structure you need',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[#4B5563]">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </RevealStagger>
                  </ul>

                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => setStarted(true)}
                      className="rounded-lg bg-black px-8 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#1a1a1a]"
                    >
                      Start the Quiz
                    </button>
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-[#000000] underline underline-offset-2 hover:text-[#4B5563]"
                    >
                      Prefer to talk to someone?
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </>
    )
  }

  // Contact gate — collect basic info before the quiz so no lead is anonymous
  if (started && !gatePassed && !showResult) {
    const gateInputClass = (err?: string) =>
      [
        'w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#000000]',
        'placeholder:text-[#9CA3AF] outline-none transition-colors duration-150',
        'focus:border-black focus:ring-2 focus:ring-black/10',
        err ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB] bg-white',
      ].join(' ')

    return (
      <>
        <section className="border-b border-[#E5E7EB] bg-white py-10">
          <Container>
            <div className="max-w-2xl">
              <Reveal variant="clip">
                <p className="mb-1 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Fit Quiz
                </p>
              </Reveal>
              <Reveal variant="clip" delay={60}>
                <h1 className="text-2xl font-extrabold text-[#000000]">Team or Growth Network?</h1>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-[#F3F4F6] py-16">
          <Container>
            <div className="mx-auto max-w-2xl">
              <Reveal variant="up">
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 md:p-10">
                  <h2 className="mb-2 text-xl font-extrabold text-[#000000]">
                    First, where should we send your result?
                  </h2>
                  <p className="mb-7 text-sm text-[#4B5563]">
                    Enter your details and we&apos;ll match you to the right path — then a local
                    team lead can follow up with next steps. Takes under 2 minutes.
                  </p>

                  <form onSubmit={handleGateSubmit} noValidate className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="gate-first-name" className="text-sm font-medium text-[#000000]">
                          First name<span className="ml-0.5 text-[#DC2626]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="gate-first-name"
                          type="text"
                          autoComplete="given-name"
                          placeholder="Jane"
                          value={contact.firstName}
                          onChange={(e) => setContactField('firstName', e.target.value)}
                          className={gateInputClass(contactErrors.firstName)}
                          aria-invalid={!!contactErrors.firstName}
                          aria-describedby={contactErrors.firstName ? 'gate-first-name-error' : undefined}
                          disabled={gateStatus === 'submitting'}
                        />
                        {contactErrors.firstName && (
                          <p id="gate-first-name-error" role="alert" className="text-xs text-[#DC2626]">
                            {contactErrors.firstName}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="gate-last-name" className="text-sm font-medium text-[#000000]">
                          Last name<span className="ml-0.5 text-[#DC2626]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="gate-last-name"
                          type="text"
                          autoComplete="family-name"
                          placeholder="Smith"
                          value={contact.lastName}
                          onChange={(e) => setContactField('lastName', e.target.value)}
                          className={gateInputClass(contactErrors.lastName)}
                          aria-invalid={!!contactErrors.lastName}
                          aria-describedby={contactErrors.lastName ? 'gate-last-name-error' : undefined}
                          disabled={gateStatus === 'submitting'}
                        />
                        {contactErrors.lastName && (
                          <p id="gate-last-name-error" role="alert" className="text-xs text-[#DC2626]">
                            {contactErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="gate-email" className="text-sm font-medium text-[#000000]">
                        Email address<span className="ml-0.5 text-[#DC2626]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="gate-email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@example.com"
                        value={contact.email}
                        onChange={(e) => setContactField('email', e.target.value)}
                        className={gateInputClass(contactErrors.email)}
                        aria-invalid={!!contactErrors.email}
                        aria-describedby={contactErrors.email ? 'gate-email-error' : undefined}
                        disabled={gateStatus === 'submitting'}
                      />
                      {contactErrors.email && (
                        <p id="gate-email-error" role="alert" className="text-xs text-[#DC2626]">
                          {contactErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="gate-phone" className="text-sm font-medium text-[#000000]">
                        Phone number<span className="ml-0.5 text-[#DC2626]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="gate-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(555) 010-0100"
                        value={contact.phone}
                        onChange={(e) => setContactField('phone', e.target.value)}
                        className={gateInputClass(contactErrors.phone)}
                        aria-invalid={!!contactErrors.phone}
                        aria-describedby={contactErrors.phone ? 'gate-phone-error' : undefined}
                        disabled={gateStatus === 'submitting'}
                      />
                      {contactErrors.phone && (
                        <p id="gate-phone-error" role="alert" className="text-xs text-[#DC2626]">
                          {contactErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Consent sits with the number it attaches to, never at the foot
                        of the form: the disclosure has to be conspicuous at the point
                        of collection. This gate is where the quiz lead is created, so
                        it is the only place the tick can be captured. */}
                    <PhoneConsent
                      id="gate-phone-consent"
                      phone={contact.phone}
                      checked={phoneConsent}
                      onChange={setPhoneConsent}
                      disabled={gateStatus === 'submitting'}
                    />

                    <div className="mt-1 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setStarted(false)
                          setContactErrors({})
                        }}
                        className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-semibold text-[#4B5563] transition-colors duration-150 hover:border-black hover:text-[#000000]"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={gateStatus === 'submitting'}
                        className="flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-bold text-white transition-all duration-150 hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {gateStatus === 'submitting' ? 'Starting…' : 'Start the Quiz'}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-xs text-[#9CA3AF]">
                      No spam. We only use your info to share your result and follow up about
                      joining Acme Realty.
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </>
    )
  }

  // Result screen
  if (showResult && result) {
    return (
      <section className="min-h-[60vh] bg-[#F3F4F6] py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal variant="up">
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-10">

                {/* Result badge */}
                <Reveal variant="clip">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F3F4F6] px-4 py-1.5 text-sm font-bold text-[#000000]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="#000000"
                      />
                    </svg>
                    Your Result: {result.type}
                  </div>
                </Reveal>

                <Reveal variant="up" delay={80}>
                  <h2 className="mb-4 text-3xl font-extrabold text-[#000000]">
                    {result.headline}
                  </h2>
                </Reveal>

                <Reveal variant="up" delay={140}>
                  <p className="mb-8 text-base leading-relaxed text-[#4B5563]">{result.description}</p>
                </Reveal>

                {/* Recommended team */}
                {recommendedTeam && (
                  <Reveal variant="up" delay={180}>
                    <div className="mb-8 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                        Recommended Team
                      </p>
                      <p className="mb-3 text-base font-bold text-[#000000]">{recommendedTeam.name}</p>
                      <Link
                        href={`/teams/${recommendedTeam.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-black px-4 py-2 text-sm font-semibold text-[#000000] transition-colors hover:bg-black hover:text-white"
                      >
                        View Team
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </Reveal>
                )}

                {!recommendedTeam && result.type !== 'Team' && (
                  <Reveal variant="up" delay={180}>
                    <div className="mb-8 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                        Explore Your Options
                      </p>
                      <p className="text-sm text-[#4B5563]">
                        Your results point to exploring both paths.{' '}
                        <Link href="/teams" className="font-semibold text-black underline underline-offset-2 hover:text-[#4B5563]">
                          Browse all teams
                        </Link>{' '}
                        or{' '}
                        <Link href="/network" className="font-semibold text-black underline underline-offset-2 hover:text-[#4B5563]">
                          learn about Growth Network
                        </Link>.
                      </p>
                    </div>
                  </Reveal>
                )}

                {/* Score breakdown */}
                <Reveal variant="up" delay={220}>
                  <div className="mb-8 rounded-xl border border-[#E5E7EB] bg-[#F3F4F6] p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                      Your Answers
                    </p>
                    <ul className="flex flex-col gap-2">
                      {QUESTIONS.map((q, i) => {
                        const ans = answers[q.id]
                        const opt = q.options.find((o) => o.value === ans)
                        return (
                          <li key={q.id} className="flex gap-2 text-sm">
                            <span className="shrink-0 font-semibold text-[#000000]">Q{i + 1}.</span>
                            <span className="text-[#4B5563]">{opt?.label ?? '—'}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Reveal>

                {/* Follow-up confirmation — contact already captured at the gate */}
                <Reveal variant="up" delay={260}>
                  <div className="mb-8 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0D9488]" aria-hidden="true">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#000000]">
                          Your result is saved{contact.firstName ? `, ${contact.firstName}` : ''}.
                        </p>
                        <p className="mt-1 text-sm text-[#4B5563]">
                          A local team lead will reach out{contact.email ? ` at ${contact.email}` : ''} with
                          details about your recommended path. Want to move faster? Apply or book a tour below.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Apply Now CTA */}
                <Reveal variant="up" delay={280}>
                  <div className="mb-8">
                    <Link
                      href="/apply"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0D9488] px-8 py-4 text-base font-bold text-white transition-colors duration-150 hover:bg-[#0F766E] sm:w-auto"
                    >
                      Ready to Join? Apply Now
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </Reveal>

                {/* CTA buttons */}
                <Reveal variant="up" delay={300}>
                  <div className="flex flex-wrap gap-3">
                    {result.cta.map((btn) => (
                      <Link
                        key={btn.href}
                        href={btn.href}
                        className={`rounded-lg px-6 py-3 text-sm font-bold transition-colors duration-150 ${
                          btn.primary
                            ? 'bg-black text-white hover:bg-[#1a1a1a]'
                            : 'border-2 border-black bg-transparent text-[#000000] hover:bg-[#F3F4F6]'
                        }`}
                      >
                        {btn.label}
                      </Link>
                    ))}
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-lg border border-[#E5E7EB] px-6 py-3 text-sm font-semibold text-[#4B5563] transition-colors duration-150 hover:border-black hover:text-[#000000]"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    )
  }

  // Question screen
  return (
    <>
      <section className="border-b border-[#E5E7EB] bg-white py-10">
        <Container>
          <div className="max-w-2xl">
            <Reveal variant="clip">
              <p className="mb-1 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Fit Quiz
              </p>
            </Reveal>
            <Reveal variant="clip" delay={60}>
              <h1 className="text-2xl font-extrabold text-[#000000]">
                Team or Growth Network?
              </h1>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <Container>
          <div className="mx-auto max-w-2xl">

            {/* Progress bar */}
            <Reveal variant="up">
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#4B5563]">
                    Question {currentQuestion + 1} of {totalQuestions}
                  </span>
                  <span className="text-xs font-semibold text-[#000000]">
                    {Math.round(progressPercent)}% complete
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                  <div
                    className="h-2 rounded-full bg-black transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                    role="progressbar"
                    aria-valuenow={Math.round(progressPercent)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Quiz progress: question ${currentQuestion + 1} of ${totalQuestions}`}
                  />
                </div>
              </div>
            </Reveal>

            {/* Question card */}
            <Reveal variant="up" delay={80}>
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-8">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Question {currentQuestion + 1}
                </p>
                <h2 className="mb-2 text-xl font-extrabold leading-snug text-[#000000]">
                  {question.text}
                </h2>
                {question.subtext && (
                  <p className="mb-6 text-sm text-[#4B5563]">{question.subtext}</p>
                )}

                <fieldset>
                  <legend className="sr-only">{question.text}</legend>
                  <ul className="flex flex-col gap-3" role="radiogroup">
                    <RevealStagger variant="up" baseDelay={100} stagger={70}>
                      {question.options.map((option) => {
                        const isSelected = selectedOption === option.value
                        return (
                          <li key={option.value}>
                            <button
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => handleSelect(option.value)}
                              className={`w-full rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all duration-150 ${
                                isSelected
                                  ? 'border-black bg-[#F3F4F6] text-[#000000]'
                                  : 'border-[#E5E7EB] bg-white text-[#374151] hover:border-[#9CA3AF]'
                              }`}
                            >
                              <span className="flex items-start gap-3">
                                <span
                                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                                    isSelected
                                      ? 'border-black bg-black'
                                      : 'border-[#D1D5DB] bg-transparent'
                                  }`}
                                  aria-hidden="true"
                                >
                                  {isSelected && (
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                      <circle cx="5" cy="5" r="3" fill="white" />
                                    </svg>
                                  )}
                                </span>
                                {option.label}
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </RevealStagger>
                  </ul>
                </fieldset>

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-semibold text-[#4B5563] transition-colors duration-150 hover:border-black hover:text-[#000000]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M15 18l-6-6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {currentQuestion === 0 ? 'Start Over' : 'Back'}
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!selectedOption}
                    className="flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-bold text-white transition-all duration-150 hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isLast ? 'See My Result' : 'Next Question'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
