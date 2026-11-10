'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ComparisonRow {
  category: string
  acme: string
  traditional: string
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    category: 'Commission Split',
    acme: '80/20 until cap, then 100%',
    traditional: 'Typically 70/30 or 60/40',
  },
  {
    category: 'Annual Cap',
    acme: '$15,000',
    traditional: 'Often $25,000\u2013$35,000 or uncapped',
  },
  {
    category: 'Monthly Fees',
    acme: '$50/month tech fee',
    traditional: '$200\u2013$1,000+ desk fees',
  },
  {
    category: 'Startup Cost',
    acme: '$99 one-time',
    traditional: '$500\u2013$5,000+ franchise fees',
  },
  {
    category: 'Physical Office',
    acme: 'Cloud-based + local branch',
    traditional: 'Required office attendance',
  },
  {
    category: 'Stock / Equity',
    acme: 'company stock on milestones',
    traditional: 'No equity participation',
  },
  {
    category: 'Revenue Share',
    acme: 'Up to 3% from sponsored agents',
    traditional: 'Typically none',
  },
  {
    category: 'Training',
    acme: '40+ hours/week live',
    traditional: 'Varies widely',
  },
  {
    category: 'Technology',
    acme: 'Cloud platform (the Acme virtual campus)',
    traditional: 'Office-dependent tools',
  },
  {
    category: 'Flexibility',
    acme: 'Work from anywhere',
    traditional: 'Office-centric',
  },
]

const QUESTIONS: string[] = [
  'What is the commission split, and what are all the fees I will pay each month?',
  'Is there an annual cap, and what happens to my splits after I reach it?',
  'Do agents participate in any equity, stock, or ownership in the company?',
  'Is there a revenue share or passive income component for agents I sponsor?',
  'What does the training program look like in terms of hours, format, and topics covered?',
  'Am I required to work from a physical office, or do I have flexibility in where I operate?',
]

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      aria-label="Page hero"
      className="relative overflow-hidden bg-black"
      style={{ minHeight: '52vh' }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg-v2.jpeg"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover opacity-40"
        aria-hidden="true"
      />


      <Container className="relative">
        <div
          className="flex flex-col items-center justify-center py-24 text-center"
          style={{ minHeight: '52vh' }}
        >
          {/* Eyebrow */}
          <Reveal variant="up" delay={0}>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
              Side-by-Side Breakdown
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal variant="clip" delay={80}>
            <h1
              className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              How Acme Compares
            </h1>
          </Reveal>

          {/* Sub-headline */}
          <Reveal variant="up" delay={160}>
            <p
              className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              An honest look at how the Acme model stacks up against traditional brokerages. No
              hype&nbsp;&mdash; just the structure.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

// ─── Disclaimer Section ───────────────────────────────────────────────────────

function DisclaimerSection() {
  return (
    <section aria-label="Disclosure" className="bg-white py-8">
      <Container>
        <Reveal variant="up">
          <div className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-6 py-5">
            <p
              className="text-sm leading-relaxed text-[#6B7280]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <strong
                className="font-semibold text-[#374151]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Disclosure:
              </strong>{' '}
              This comparison reflects general industry structures as of 2026. Specific terms vary
              by brokerage, office, and agreement. Always review the full Independent Contractor
              Agreement before making a decision.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

// ─── Comparison Table (desktop) ───────────────────────────────────────────────

function ComparisonTable() {
  return (
    <div className="hidden sm:block">
      <table
        className="w-full border-collapse text-sm"
        aria-label="Acme Realty vs Traditional Brokerage comparison"
      >
        <caption className="sr-only">
          Side-by-side comparison of Acme Realty and a traditional brokerage across ten categories
          including commission splits, fees, equity, training, and flexibility.
        </caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="border border-[#E5E7EB] bg-black px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: 'Manrope, sans-serif', width: '30%' }}
            >
              Category
            </th>
            <th
              scope="col"
              className="border border-[#E5E7EB] bg-black px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: 'Manrope, sans-serif', width: '35%' }}
            >
              Acme Realty
            </th>
            <th
              scope="col"
              className="border border-[#E5E7EB] bg-black px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: 'Manrope, sans-serif', width: '35%' }}
            >
              Traditional Brokerage
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row, index) => {
            const isEven = index % 2 === 0
            const bg = isEven ? '#FFFFFF' : '#F9FAFB'
            return (
              <tr key={row.category} style={{ backgroundColor: bg }}>
                <th
                  scope="row"
                  className="border border-[#E5E7EB] px-5 py-4 text-left text-sm font-semibold text-[#111827]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {row.category}
                </th>
                <td
                  className="border border-[#E5E7EB] px-5 py-4 text-sm text-[#374151]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {row.acme}
                </td>
                <td
                  className="border border-[#E5E7EB] px-5 py-4 text-sm text-[#374151]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {row.traditional}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// ─── Comparison Card Stack (mobile) ──────────────────────────────────────────

function ComparisonCardStack() {
  return (
    <div className="flex flex-col gap-4 sm:hidden">
      {COMPARISON_ROWS.map((row) => (
        <div
          key={row.category}
          className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white"
        >
          {/* Card header — category label */}
          <div className="border-b border-[#E5E7EB] bg-black px-4 py-3">
            <p
              className="text-xs font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {row.category}
            </p>
          </div>

          {/* Acme row */}
          <div className="flex items-start gap-3 border-b border-[#E5E7EB] bg-[#FFFFFF] px-4 py-3.5">
            <span
              className="mt-0.5 shrink-0 text-xs font-semibold uppercase tracking-wider text-[#6B7280]"
              style={{ fontFamily: 'Manrope, sans-serif', minWidth: '7rem' }}
            >
              Acme Realty
            </span>
            <p
              className="text-sm text-[#374151]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {row.acme}
            </p>
          </div>

          {/* Traditional row */}
          <div className="flex items-start gap-3 bg-[#F9FAFB] px-4 py-3.5">
            <span
              className="mt-0.5 shrink-0 text-xs font-semibold uppercase tracking-wider text-[#6B7280]"
              style={{ fontFamily: 'Manrope, sans-serif', minWidth: '7rem' }}
            >
              Traditional
            </span>
            <p
              className="text-sm text-[#374151]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {row.traditional}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Comparison Section ───────────────────────────────────────────────────────

function ComparisonSection() {
  return (
    <section aria-label="Comparison table" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="mb-10">
          <Reveal variant="up">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Structure Breakdown
            </p>
          </Reveal>
          <Reveal variant="clip" delay={80}>
            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#000000] sm:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Acme Realty vs. Traditional Brokerage
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p
              className="mt-3 max-w-2xl text-base leading-relaxed text-[#6B7280]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Ten categories. Both models, side by side. Figures reflect general industry
              structures&nbsp;&mdash; individual agreements may vary.
            </p>
          </Reveal>
        </div>

        {/* Desktop table */}
        <Reveal variant="up" delay={220}>
          <ComparisonTable />
        </Reveal>

        {/* Mobile card stack */}
        <div className="sm:hidden">
          <RevealStagger variant="up" baseDelay={100} stagger={60}>
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.category}
                className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white"
              >
                <div className="border-b border-[#E5E7EB] bg-black px-4 py-3">
                  <p
                    className="text-xs font-bold uppercase tracking-wider text-white"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {row.category}
                  </p>
                </div>
                <div className="flex items-start gap-3 border-b border-[#E5E7EB] bg-[#FFFFFF] px-4 py-3.5">
                  <span
                    className="mt-0.5 shrink-0 text-xs font-semibold uppercase tracking-wider text-[#6B7280]"
                    style={{ fontFamily: 'Manrope, sans-serif', minWidth: '7rem' }}
                  >
                    Acme Realty
                  </span>
                  <p className="text-sm text-[#374151]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {row.acme}
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-[#F9FAFB] px-4 py-3.5">
                  <span
                    className="mt-0.5 shrink-0 text-xs font-semibold uppercase tracking-wider text-[#6B7280]"
                    style={{ fontFamily: 'Manrope, sans-serif', minWidth: '7rem' }}
                  >
                    Traditional
                  </span>
                  <p className="text-sm text-[#374151]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {row.traditional}
                  </p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  )
}

// ─── Questions Section ────────────────────────────────────────────────────────

function QuestionsSection() {
  return (
    <section aria-label="Questions to ask any brokerage" className="bg-[#F9FAFB] py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal variant="up">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Do Your Due Diligence
            </p>
          </Reveal>
          <Reveal variant="clip" delay={80}>
            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-[#000000] sm:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Questions to Ask Any Brokerage
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p
              className="mt-3 text-base leading-relaxed text-[#6B7280]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Before signing anything, make sure you have clear answers to each of these. The
              right brokerage will answer them without hesitation.
            </p>
          </Reveal>

          <ol
            className="mt-8 flex flex-col gap-4"
            aria-label="Six questions to ask any brokerage"
          >
            <RevealStagger variant="up" baseDelay={200} stagger={70}>
              {QUESTIONS.map((question, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-xl border border-[#E5E7EB] bg-white px-5 py-4"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white"
                    aria-hidden="true"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {index + 1}
                  </span>
                  <p
                    className="text-sm leading-relaxed text-[#374151]"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {question}
                  </p>
                </li>
              ))}
            </RevealStagger>
          </ol>
        </div>
      </Container>
    </section>
  )
}

// ─── CTA Strip ────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden bg-black py-20 lg:py-24">
      <Image src="/images/cta-anytown-skyline-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="clip">
            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Ready to See the Numbers?
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p
              className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/70"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Run your own scenarios in the commission calculator, or book a tour to walk through
              the structure in person with our branch leadership.
            </p>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/calculator"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                See the Numbers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link
                href="/book-a-tour"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-transparent px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Book a Tour
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function ComparePage() {
  return (
    <main>
      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — Disclaimer */}
      <DisclaimerSection />

      {/* 3 — Comparison (table on desktop, card stack on mobile) */}
      <ComparisonSection />

      {/* 4 — Questions to ask */}
      <QuestionsSection />

      {/* 5 — CTA strip */}
      <CTASection />
    </main>
  )
}
