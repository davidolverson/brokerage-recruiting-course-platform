'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function fmt(n: number): string {
  return currency.format(n)
}

// ---------------------------------------------------------------------------
// Calculator math (pure functions)
// ---------------------------------------------------------------------------

interface CalcInputs {
  gci: number
  transactions: number
  sponsoredAgents: number
  sponsoredGci: number
}

interface CalcResults {
  gci: number
  capContribution: number
  afterCapIncome: number
  techFee: number
  netCommission: number
  sponsoredCompanyDollar: number
  revenueShare: number
  stockFirst: number
  stockCap: number
  stockSponsors: number
  totalStock: number
  total: number
  traditionalNet: number
  advantage: number
}

function calculate(inputs: CalcInputs): CalcResults {
  const { gci, sponsoredAgents, sponsoredGci } = inputs

  const capContribution = Math.min(gci * 0.2, 15000)
  const techFee = 1020
  const netCommission = gci - capContribution - techFee

  // After-cap: GCI above $80K is kept at 100% (represented by the remainder
  // after cap contribution is reached at the $80K GCI threshold)
  const afterCapIncome = gci > 80000 ? gci - 80000 : 0

  const sponsoredCompanyDollar =
    Math.min(sponsoredGci * 0.2, 15000) * sponsoredAgents
  const revenueShare = sponsoredCompanyDollar * 0.03

  const stockFirst = 200
  const stockCap = gci >= 80000 ? 400 : 0
  const stockSponsors = sponsoredAgents * 400
  const totalStock = stockFirst + stockCap + stockSponsors

  const total = netCommission + revenueShare + totalStock

  // Traditional comparison: 70/30 split, $30K team cap, ~$6K in fees
  const traditionalNet = gci * 0.7 - Math.min(gci * 0.3, 30000) - 6000

  const advantage = total - traditionalNet

  return {
    gci,
    capContribution,
    afterCapIncome,
    techFee,
    netCommission,
    sponsoredCompanyDollar,
    revenueShare,
    stockFirst,
    stockCap,
    stockSponsors,
    totalStock,
    total,
    traditionalNet,
    advantage,
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface ResultRowProps {
  label: string
  value: string
  bold?: boolean
  muted?: boolean
  indent?: boolean
}

function ResultRow({ label, value, bold, muted, indent }: ResultRowProps) {
  return (
    <div
      className={`flex items-baseline justify-between py-2 ${
        indent ? 'pl-3' : ''
      }`}
    >
      <span
        className={`text-sm ${
          muted ? 'text-[#9CA3AF]' : bold ? 'text-black font-semibold' : 'text-[#6B7280]'
        }`}
      >
        {label}
      </span>
      <span
        className={`tabular-nums ${
          bold ? 'text-black font-bold text-base' : 'text-[#374151] text-sm'
        } ${muted ? 'text-[#9CA3AF]' : ''}`}
      >
        {value}
      </span>
    </div>
  )
}

interface SectionCardProps {
  title: string
  children: React.ReactNode
}

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6">
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4">
        {title}
      </h3>
      <div className="divide-y divide-[#E5E7EB]">{children}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Slider + number input combo
// ---------------------------------------------------------------------------

interface SliderInputProps {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  formatDisplay?: (v: number) => string
}

function SliderInput({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
  formatDisplay,
}: SliderInputProps) {
  function handleSlider(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(Number(e.target.value))
  }

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = Number(e.target.value)
    if (!isNaN(raw)) {
      const clamped = Math.max(min, Math.min(max, raw))
      onChange(clamped)
    }
  }

  const display = formatDisplay ? formatDisplay(value) : String(value)

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-sm font-medium text-[#6B7280]"
        >
          {label}
        </label>
        <span className="text-black font-bold text-lg tabular-nums">
          {display}
        </span>
      </div>
      {/* Slider */}
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSlider}
        aria-label={label}
        className={[
          'w-full h-1.5 rounded-full appearance-none cursor-pointer',
          'bg-[#E5E7EB]',
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:w-5',
          '[&::-webkit-slider-thumb]:h-5',
          '[&::-webkit-slider-thumb]:rounded-full',
          '[&::-webkit-slider-thumb]:bg-black',
          '[&::-webkit-slider-thumb]:cursor-pointer',
          '[&::-webkit-slider-thumb]:transition-transform',
          '[&::-webkit-slider-thumb]:hover:scale-110',
          '[&::-moz-range-thumb]:w-5',
          '[&::-moz-range-thumb]:h-5',
          '[&::-moz-range-thumb]:rounded-full',
          '[&::-moz-range-thumb]:bg-black',
          '[&::-moz-range-thumb]:border-0',
          '[&::-moz-range-thumb]:cursor-pointer',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
        ].join(' ')}
      />
      {/* Number fallback input */}
      <input
        type="number"
        aria-label={`${label} (numeric)`}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleNumber}
        className={[
          'w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-black',
          'focus:outline-none focus:border-black focus:ring-1 focus:ring-black',
          'hover:border-[#D1D5DB]',
          'transition-colors',
          '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
        ].join(' ')}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Plain number input (no slider)
// ---------------------------------------------------------------------------

interface NumberInputProps {
  id: string
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (v: number) => void
}

function NumberInput({ id, label, value, min, max, step = 1, onChange }: NumberInputProps) {
  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = Number(e.target.value)
    if (!isNaN(raw)) {
      const clamped = Math.max(min, Math.min(max, raw))
      onChange(clamped)
    }
  }

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-[#6B7280]">
        {label}
      </label>
      <input
        type="number"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handle}
        className={[
          'w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-black',
          'focus:outline-none focus:border-black focus:ring-1 focus:ring-black',
          'hover:border-[#D1D5DB]',
          'transition-colors',
          '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
        ].join(' ')}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function CalculatorPage() {
  const [gci, setGci] = useState(150000)
  const [transactions, setTransactions] = useState(15)
  const [sponsoredAgents, setSponsoredAgents] = useState(2)
  const [sponsoredGci, setSponsoredGci] = useState(80000)

  const results = calculate({ gci, transactions, sponsoredAgents, sponsoredGci })

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/hero-agents-v2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none select-none"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="up" delay={0}>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Agent Income Calculator
              </h1>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Model your income at Acme based on your production level. Input your GCI, transactions,
                and sponsored agents to see a full breakdown. This is an estimation tool only.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Disclaimer                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-8 border-b border-[#E5E7EB]">
        <Container>
          <Reveal variant="up">
            <div className="rounded-xl border-2 border-[#E5E7EB] bg-[#F9FAFB] px-6 py-5 max-w-4xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">
                Important Disclaimer
              </p>
              <p className="text-sm text-[#374151] leading-relaxed">
                This calculator provides estimates only. Actual earnings depend on
                individual performance, market conditions, and the terms of your
                Independent Contractor Agreement with Acme Realty. Commission
                structures, caps, and programs are subject to change. This is not
                a guarantee of income.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Calculator + Results                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal variant="up" delay={80}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left: Inputs */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-black mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Your Production Profile
                  </h2>
                  <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Adjust the inputs to reflect your expected production.
                  </p>
                </div>

                <div className="space-y-6">
                  <SliderInput
                    id="gci"
                    label="Annual GCI"
                    value={gci}
                    min={50000}
                    max={500000}
                    step={5000}
                    onChange={setGci}
                    formatDisplay={(v) => fmt(v)}
                  />

                  <NumberInput
                    id="transactions"
                    label="Transactions per year"
                    value={transactions}
                    min={1}
                    max={200}
                    onChange={setTransactions}
                  />

                  <div className="border-t border-[#E5E7EB] pt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5">
                      Revenue Share Inputs
                    </p>
                    <div className="space-y-6">
                      <NumberInput
                        id="sponsored-agents"
                        label="Agents you sponsor"
                        value={sponsoredAgents}
                        min={0}
                        max={100}
                        onChange={setSponsoredAgents}
                      />
                      <SliderInput
                        id="sponsored-gci"
                        label="Sponsored agent avg GCI"
                        value={sponsoredGci}
                        min={50000}
                        max={300000}
                        step={5000}
                        onChange={setSponsoredGci}
                        formatDisplay={(v) => fmt(v)}
                      />
                    </div>
                  </div>
                </div>

                {/* Sticky mobile CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/apply"
                    className={[
                      'inline-flex items-center justify-center rounded-lg px-6 py-3',
                      'bg-black text-white text-sm font-bold tracking-wide',
                      'hover:bg-[#1F2937] active:bg-[#111827]',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
                      'transition-colors',
                    ].join(' ')}
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/compare"
                    className={[
                      'inline-flex items-center justify-center rounded-lg px-6 py-3',
                      'border border-[#E5E7EB] bg-white text-black text-sm font-bold tracking-wide',
                      'hover:border-black hover:bg-[#F9FAFB]',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
                      'transition-colors',
                    ].join(' ')}
                  >
                    Compare Acme
                  </Link>
                </div>
              </div>

              {/* Right: Results */}
              <div className="space-y-4" aria-live="polite" aria-label="Calculation results">

                {/* Commission Income */}
                <SectionCard title="Commission Income">
                  <ResultRow label="Your GCI" value={fmt(results.gci)} />
                  <ResultRow
                    label="Acme split to cap (20%, max $15K)"
                    value={`- ${fmt(results.capContribution)}`}
                    indent
                  />
                  {results.afterCapIncome > 0 && (
                    <ResultRow
                      label="After-cap income (100% kept)"
                      value={fmt(results.afterCapIncome)}
                      indent
                      muted
                    />
                  )}
                  <ResultRow
                    label="Tech fee (annual)"
                    value={`- ${fmt(results.techFee)}`}
                    indent
                  />
                  <ResultRow
                    label="Net Commission"
                    value={fmt(results.netCommission)}
                    bold
                  />
                </SectionCard>

                {/* Revenue Share */}
                <SectionCard title="Revenue Share (Tier 1)">
                  <ResultRow
                    label={`Sponsored agents company dollar (${sponsoredAgents} agent${sponsoredAgents !== 1 ? 's' : ''})`}
                    value={fmt(results.sponsoredCompanyDollar)}
                  />
                  <ResultRow
                    label="Your 3% share"
                    value={fmt(results.revenueShare)}
                    indent
                  />
                  <ResultRow
                    label="Annual Revenue Share Estimate"
                    value={fmt(results.revenueShare)}
                    bold
                  />
                </SectionCard>

                {/* Stock Benefits */}
                <SectionCard title="Stock Benefits">
                  <ResultRow
                    label="First transaction award"
                    value={fmt(results.stockFirst)}
                  />
                  <ResultRow
                    label={`At-cap award${results.gci < 80000 ? ' (requires $80K+ GCI)' : ''}`}
                    value={results.stockCap > 0 ? fmt(results.stockCap) : 'Not reached'}
                    muted={results.stockCap === 0}
                  />
                  <ResultRow
                    label={`Per sponsor first close (${sponsoredAgents} sponsored)`}
                    value={fmt(results.stockSponsors)}
                  />
                  <ResultRow
                    label="Estimated Stock Value"
                    value={fmt(results.totalStock)}
                    bold
                  />
                </SectionCard>

                {/* Total */}
                <div className="bg-black text-white p-8 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-6">
                    Total Estimated Annual Value
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-[#9CA3AF]">Net Commission</span>
                      <span className="tabular-nums text-white text-sm">{fmt(results.netCommission)}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-[#9CA3AF]">Revenue Share</span>
                      <span className="tabular-nums text-white text-sm">{fmt(results.revenueShare)}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-[#9CA3AF]">Stock Benefits</span>
                      <span className="tabular-nums text-white text-sm">{fmt(results.totalStock)}</span>
                    </div>
                  </div>

                  <div className="border-t border-[#374151] pt-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-base font-bold text-white">Total</span>
                      <span className="text-3xl font-extrabold tabular-nums text-white">
                        {fmt(results.total)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#374151] pt-6 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-[#9CA3AF]">
                        70/30 traditional ($30K cap): estimated
                      </span>
                      <span className="tabular-nums text-[#9CA3AF] text-sm">
                        {fmt(results.traditionalNet)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-bold text-white">
                        Estimated difference
                      </span>
                      <span
                        className={`tabular-nums text-sm font-bold ${
                          results.advantage >= 0 ? 'text-white' : 'text-[#9CA3AF]'
                        }`}
                      >
                        {results.advantage >= 0 ? '+' : ''}{fmt(results.advantage)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Traditional comparison callout                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#F9FAFB] border-t border-[#E5E7EB] py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal variant="clip">
              <h2 className="text-2xl font-extrabold tracking-tight text-black mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                How does Acme compare to a traditional brokerage?
              </h2>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <p className="text-[#6B7280] text-sm mb-10 max-w-2xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
                The calculator models a 70/30 traditional split with a $30K team
                cap and approximately $6K in desk and E&O fees. At your current
                GCI input, here is how the two models compare.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <RevealStagger variant="up" baseDelay={120} stagger={100}>
                {/* Traditional */}
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Traditional Model
                  </p>
                  <div className="divide-y divide-[#E5E7EB]">
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Split</span>
                      <span className="text-sm text-black font-medium">70/30</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Cap</span>
                      <span className="text-sm text-black font-medium">$30K</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Revenue share</span>
                      <span className="text-sm text-[#9CA3AF]">None</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Stock program</span>
                      <span className="text-sm text-[#9CA3AF]">None</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-sm font-bold text-black">Estimated net</span>
                      <span className="text-sm font-bold text-black tabular-nums">
                        {fmt(results.traditionalNet)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Acme */}
                <div className="bg-white border-2 border-black rounded-xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-black mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Acme Realty Model
                  </p>
                  <div className="divide-y divide-[#E5E7EB]">
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Split</span>
                      <span className="text-sm text-black font-medium">80/20 to cap</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Cap</span>
                      <span className="text-sm text-black font-medium">$15K</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Revenue share</span>
                      <span className="text-sm text-black font-medium">Up to 3% (Tier 1)</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-[#6B7280]">Stock program</span>
                      <span className="text-sm text-black font-medium">Yes</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-sm font-bold text-black">Estimated net</span>
                      <span className="text-sm font-bold text-black tabular-nums">
                        {fmt(results.total)}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealStagger>
            </div>

            <Reveal variant="up" delay={260}>
              <p className="mt-6 text-xs text-[#9CA3AF] max-w-2xl">
                Traditional model estimate uses a 70/30 split with a $30K annual
                cap and $6,000 in estimated annual fees. All figures are
                illustrative. Not a guarantee of income.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA Strip                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-black py-16 md:py-20">
        <Image src="/images/cta-calculator-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal variant="clip">
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4 md:text-4xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Ready to see what this looks like for you?
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="text-[#9CA3AF] text-base mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Talk to our team. We will walk through your numbers, your goals,
                and the right path inside Acme Realty.
              </p>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply"
                  className={[
                    'inline-flex items-center justify-center rounded-lg px-8 py-4',
                    'bg-white text-black text-sm font-bold tracking-wide',
                    'hover:bg-[#F3F4F6] active:bg-[#E5E7EB]',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                    'transition-colors',
                  ].join(' ')}
                >
                  Apply Now
                </Link>
                <Link
                  href="/compare"
                  className={[
                    'inline-flex items-center justify-center rounded-lg px-8 py-4',
                    'border border-[#374151] text-white text-sm font-bold tracking-wide',
                    'hover:border-white hover:bg-[#111827]',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                    'transition-colors',
                  ].join(' ')}
                >
                  Compare Acme
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
