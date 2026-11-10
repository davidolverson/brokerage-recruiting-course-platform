'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

const BENEFITS = [
  {
    title: 'Pre-Qualified Clients Close Faster',
    body: 'Example Lending Partner pre-approvals carry weight. Listing agents and sellers recognize the name, which gives your buyers a concrete edge in multiple-offer situations.',
  },
  {
    title: 'Title You Can Trust',
    body: "Example Title Partner's ALTA Best Practices certification and national title underwriting means every closing is backed by institutional-grade due diligence.",
  },
  {
    title: 'Programs for Every Buyer',
    body: 'Conventional, FHA, VA, USDA, Non-QM, Construction, Jumbo, and Hard Money — Example Lending Partner covers scenarios most lenders turn away.',
  },
  {
    title: 'Multi-State Coverage',
    body: 'Example Lending Partner is licensed in VA, MD, DC, NC, and FL so you can serve relocating clients without losing the relationship at the state line.',
  },
  {
    title: 'Investor-Friendly Financing',
    body: 'Hard money and construction loan access means you can support clients pursuing fix-and-flip and new build strategies — not just conventional purchases.',
  },
  {
    title: 'Coordinated Closings',
    body: 'Example Lending Partner and Example Title Partner have an established working relationship. When your lender and title company already know each other, last-minute closing surprises drop dramatically.',
  },
]

const FRICTION_REMOVED = [
  "Buyers falling out of contract due to lender delays",
  "Loan programs that don't fit investor or non-traditional buyers",
  'Title issues discovered too late to fix before closing',
  "Losing deals because your preferred partners aren't in the seller's market",
  "Coordinating between lenders and title companies who've never worked together",
  'Out-of-state clients needing a new lender at the worst possible moment',
]

const LENDER_PROGRAMS = [
  'Conventional',
  'FHA',
  'VA',
  'USDA',
  'Non-QM',
  'Construction Loans',
  'Jumbo',
  'Hard Money',
  'Down Payment Assistance',
  'Refinance',
  'Investor Portfolio',
]

const FAQS = [
  {
    q: 'Are agents required to refer clients to Example Lending Partner or Example Title Partner?',
    a: "Never. These are preferred partners we recommend because they perform — not mandated referrals. Your clients' best interest always comes first, and you refer whoever fits the deal.",
  },
  {
    q: 'What makes Example Title Partner different from other title companies in Anytown?',
    a: 'Example Title Partner brings 4,000+ closings of experience, ALTA Best Practices certification, and national title underwriting to every transaction. Managing Attorney Pat Closer leads a team that understands both the legal and human weight of a real estate closing.',
  },
  {
    q: 'Does Example Lending Partner work with first-time buyers as well as investors?',
    a: "Yes. With 11+ loan programs including FHA (low down payment), USDA (rural), and VA (veteran benefits), Example Lending Partner handles first-time buyer scenarios daily. And with Hard Money and Construction loan options, they're equally comfortable with investors doing BRRR deals.",
  },
]

export default function FinancialLegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-financial-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/agent-advantage" className="transition-colors hover:text-white">
                  Agent Advantage
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Financial &amp; Legal</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="clip">
              <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                Node 02
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Financial &amp; Legal
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Example Lending Partner and Example Title Partner — two partners with an established working relationship,
                11+ loan programs, and 4,000+ Anytown-area closings between them.
              </p>
            </Reveal>
            <Reveal variant="up" delay={280}>
              <p className="mt-4 text-sm font-medium text-[#9CA3AF]">
                Who this helps:{' '}
                <span className="text-white">
                  Agents who lose deals to lender delays, need programs for non-traditional buyers,
                  or want a title partner who communicates proactively.
                </span>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Partner Stats Bar */}
      <section className="border-b border-[#E5E7EB] bg-[#F3F4F6] py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: '20+', label: 'Years Example Lending Partner Experience' },
              { value: '11+', label: 'Example Lending Partner Loan Programs' },
              { value: '4000+', label: 'Example Title Partner Closings' },
              { value: '5', label: 'States Example Lending Partner Is Licensed In' },
            ].map((stat, i) => (
              <Reveal key={stat.label} variant="scale" delay={i * 80}>
                <div className="text-center">
                  <CountUp
                    value={stat.value}
                    className="text-3xl font-extrabold text-[#000000] md:text-4xl"
                  />
                  <p className="mt-1 text-xs text-[#4B5563]">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner Cards */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Preferred Partners
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Best-in-Class. Verified.
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Example Lending Partner */}
            <Reveal variant="scale" delay={0}>
              <article
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white"
                aria-label="Example Lending Partner LLC partner profile"
              >
                <div className="h-1.5 w-full bg-black" aria-hidden="true" />

                <div className="p-8">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#000000]">Example Lending Partner LLC</h3>
                      <p className="mt-0.5 text-sm text-[#4B5563]">Preferred Lending Partner</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold text-[#4B5563]">
                        A+ BBB Rating
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold text-[#4B5563]">
                        20+ Years Experience
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 grid gap-3 rounded-xl bg-[#F3F4F6] p-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Contact</p>
                      <p className="mt-1 text-sm font-medium text-[#000000]">Sam Lender</p>
                      <a
                        href="tel:+15550100102"
                        className="mt-0.5 block text-sm text-[#000000] underline transition-colors hover:text-[#4B5563]"
                      >
                        
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Office</p>
                      <address className="mt-1 not-italic text-sm leading-relaxed text-[#4B5563]">
                        456 Example Avenue<br />
                        Anytown, VA 00000
                      </address>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Licensed In</p>
                      <p className="mt-1 text-sm font-medium text-[#000000]">VA · MD · DC · NC · FL</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Experience</p>
                      <p className="mt-1 text-sm font-medium text-[#000000]">20+ Years</p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#000000]">
                      11+ Loan Programs
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {LENDER_PROGRAMS.map((prog) => (
                        <span
                          key={prog}
                          className="rounded-md bg-[#F3F4F6] px-2.5 py-1 text-xs font-semibold text-[#4B5563]"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#E5E7EB] pt-5">
                    <a
                      href="tel:+15550100102"
                      className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1a1a1a]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                      </svg>
                      Call the lender
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Example Title Partner */}
            <Reveal variant="scale" delay={80}>
              <article
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white"
                aria-label="Example Title Partner partner profile"
              >
                <div className="h-1.5 w-full bg-black" aria-hidden="true" />

                <div className="p-8">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#000000]">
                        Example Title Partner &amp; Escrow
                      </h3>
                      <p className="mt-0.5 text-sm text-[#4B5563]">Preferred Title &amp; Closing Partner</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold text-[#4B5563]">
                        5.0 Stars
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold text-[#4B5563]">
                        4,000+ Closings
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 grid gap-3 rounded-xl bg-[#F3F4F6] p-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Managing Attorney</p>
                      <p className="mt-1 text-sm font-medium text-[#000000]">Pat Closer</p>
                      <a
                        href="tel:+15550100103"
                        className="mt-0.5 block text-sm text-[#000000] underline transition-colors hover:text-[#4B5563]"
                      >
                        
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Office</p>
                      <address className="mt-1 not-italic text-sm leading-relaxed text-[#4B5563]">
                        123 Main Street<br />
                        Anytown, VA 00000
                      </address>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Underwriter</p>
                      <p className="mt-1 text-sm font-medium text-[#000000]">National title underwriter</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Certification</p>
                      <p className="mt-1 text-sm font-medium text-[#000000]">ALTA Best Practices</p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#000000]">
                      Why Agents Trust Example Title Partner
                    </p>
                    <ul className="flex flex-col gap-2">
                      {[
                        'Attorney-led closings — not just a title processor',
                        'ALTA Best Practices: standardized, audited processes',
                        'National underwriter — institutional-grade protection',
                        '4,000+ closings of Anytown-area market experience',
                        'Located steps from the Acme Realty branch office',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                          <span
                            className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6]"
                            aria-hidden="true"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-2.5 w-2.5 text-[#000000]">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-[#E5E7EB] pt-5">
                    <a
                      href="tel:+15550100103"
                      className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1a1a1a]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                      </svg>
                      Call Example Title Partner
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                What You Get
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                The Competitive Edge
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="scale" stagger={80}>
              {BENEFITS.map((b) => (
                <div key={b.title} className="rounded-xl border border-[#E5E7EB] bg-white p-6">
                  <div className="mb-3 h-1 w-10 rounded-full bg-black" aria-hidden="true" />
                  <h3 className="mb-2 text-base font-bold text-[#000000]">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{b.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Friction Removed */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Reveal variant="clip">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Friction Removed
                </p>
              </Reveal>
              <Reveal variant="clip" delay={80}>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                  Problems We Eliminate
                </h2>
              </Reveal>
              <Reveal variant="up" delay={180}>
                <p className="text-[#4B5563]">
                  The biggest threats to a clean closing are almost always lender- or title-related.
                  Having vetted partners changes the math entirely.
                </p>
              </Reveal>
            </div>
            <ul className="flex flex-col gap-3">
              {FRICTION_REMOVED.map((item, i) => (
                <Reveal key={item} variant="up" delay={i * 60}>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white"
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-[#4B5563]">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#F3F4F6] py-16 md:py-20">
        <Container>
          <Reveal variant="clip">
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-[#000000]">
              Common Questions
            </h2>
          </Reveal>
          <div className="flex max-w-2xl flex-col gap-6">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} variant="up" delay={i * 80}>
                <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
                  <h3 className="mb-2 text-base font-bold text-[#000000]">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Meet your new closing team.
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Book a branch tour and we&rsquo;ll introduce you to Example Lending Partner and Example Title Partner in person.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/book-a-tour?ref=financial-legal"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/agent-advantage"
                  className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  All Pillars
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
