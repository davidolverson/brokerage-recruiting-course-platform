'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

const BENEFITS = [
  {
    title: 'Rental Portfolio Strategy',
    body: 'Learn how to evaluate single-family and small multi-family rentals for cash flow, equity capture, and long-term appreciation — and help your clients do the same.',
  },
  {
    title: 'Property Management Connections',
    body: 'Access to trusted property management professionals who handle day-to-day operations so your investor clients — and you — stay in acquisition mode.',
  },
  {
    title: 'Investor Client Development',
    body: 'Frameworks for identifying, building relationships with, and serving repeat-buyer investor clients who transact multiple times per year.',
  },
  {
    title: 'BRRR & Value-Add Deal Flow',
    body: 'The Buy-Rehab-Rent-Refinance-Repeat model creates compounding wealth. We provide the education and network to make BRRR deals executable — not just theoretical.',
  },
  {
    title: 'Market Analysis Tools',
    body: 'Rental yield calculators, neighborhood trend data, and comp resources to evaluate assets with confidence and advise clients with authority.',
  },
  {
    title: 'Wealth-Building Roadmap',
    body: "A structured path from first investment property to portfolio holder — whether that's 2 doors or 20 — built around Anytown's specific market dynamics.",
  },
]

const FRICTION_REMOVED = [
  'Agents treating investment sales as one-off transactions instead of repeat relationships',
  'Clients buying rental properties with no management plan in place',
  'Missing the investor segment entirely because of unfamiliarity with the numbers',
  'Losing investor clients to agents who understand the cash flow math',
  'No post-close support for clients navigating landlord responsibilities',
  'Leaving personal wealth-building on the table while helping others build theirs',
]

const INVESTOR_STRATEGIES = [
  {
    label: 'BRRR',
    detail: 'Buy-Rehab-Rent-Refinance-Repeat — the compounding investor playbook',
  },
  {
    label: 'Long-Term Rentals',
    detail: 'Single-family and small multi-family buy-and-hold for steady cash flow',
  },
  {
    label: 'House Hacking',
    detail: 'Live in one unit, rent the others — a proven entry point for new investors',
  },
  {
    label: 'Value-Add',
    detail: 'Acquire distressed or underperforming assets and force appreciation',
  },
]

const FAQS = [
  {
    q: 'Do I need to already work with investors to use this pillar?',
    a: "No. This node is designed to help agents who want to start attracting investor clients, not just those who already have them. The frameworks teach you how to find them, speak their language, and serve them well.",
  },
  {
    q: 'Can this help me build my own rental portfolio as an agent?',
    a: "Absolutely. Many Acme Realty agents are active investors themselves. The asset management pillar applies to your own portfolio just as much as your clients'. You earn commissions and build equity simultaneously.",
  },
  {
    q: "What is the BRRR strategy and is it realistic in Anytown's market?",
    a: "BRRR stands for Buy-Rehab-Rent-Refinance-Repeat. It's a strategy where you recycle equity from one property into the next, building a portfolio without deploying new capital each time. Anytown's price points and rental demand make it executable here — especially in areas with strong rent-to-price ratios.",
  },
]

export default function AssetManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-assets-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/agent-advantage" className="transition-colors hover:text-white">
                  Agent Advantage
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Asset Management</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="clip">
              <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                Node 03
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Asset Management
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Rentals, property management connections, and investor frameworks to help you and
                your clients build wealth that outlasts any single transaction.
              </p>
            </Reveal>
            <Reveal variant="up" delay={280}>
              <p className="mt-4 text-sm font-medium text-[#9CA3AF]">
                Who this helps:{' '}
                <span className="text-white">
                  Agents who want to attract investor clients, agents building their own rental
                  portfolio, and anyone ready to stop leaving long-term wealth on the table.
                </span>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Investor Strategies */}
      <section className="relative overflow-hidden bg-[#000000] py-14 md:py-20">
        <Image src="/images/cta-asset-management-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-30 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <Reveal variant="clip">
            <p className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
              Investor Playbooks We Cover
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <RevealStagger variant="scale" stagger={80}>
              {INVESTOR_STRATEGIES.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="mb-2 text-lg font-extrabold text-white">{s.label}</p>
                  <p className="text-sm leading-relaxed text-[#9CA3AF]">{s.detail}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                What You Get
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Built for the Long Game
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="scale" stagger={80}>
              {BENEFITS.map((b) => (
                <div key={b.title} className="rounded-xl border border-[#E5E7EB] bg-[#F3F4F6] p-6">
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
      <section className="bg-[#F3F4F6] py-16 md:py-20">
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
                  Most agents miss the investor segment entirely — not because they lack skill, but
                  because they lack the framework. That gap closes here.
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
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal variant="clip">
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-[#000000]">
              Common Questions
            </h2>
          </Reveal>
          <div className="flex max-w-2xl flex-col gap-6">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} variant="up" delay={i * 80}>
                <div className="rounded-xl border border-[#E5E7EB] bg-[#F3F4F6] p-6">
                  <h3 className="mb-2 text-base font-bold text-[#000000]">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black py-16 md:py-20">
        <Image src="/images/cta-anytown-skyline-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Start building wealth, not just commissions.
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Book a branch tour and see the investor frameworks firsthand.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/book-a-tour?ref=asset-management"
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
