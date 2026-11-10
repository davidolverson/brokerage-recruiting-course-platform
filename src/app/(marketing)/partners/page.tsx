'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { ImageReveal } from '@/components/ui/ImageReveal'

const VENDOR_CATEGORIES = [
  {
    title: 'Mortgage & Lending',
    description: 'Hard money lenders, DSCR loan originators, conventional lenders, and portfolio lending partners who close investor transactions on investor timelines — not retail ones.',
    examples: ['Hard money lenders', 'DSCR specialists', 'Bridge loan providers', 'Portfolio lenders'],
  },
  {
    title: 'Title & Settlement',
    description: 'Title companies that handle 1031 exchanges, multi-property closings, and entity-vested deeds in the Anytown metro without slowing down the deal.',
    examples: ['Title & settlement companies', '1031 exchange facilitators', 'Real estate attorneys', 'Closing coordinators'],
  },
  {
    title: 'Construction & Renovation',
    description: 'Contractors and project managers who know what investor budgets look like, hit scopes, and communicate proactively when timelines shift.',
    examples: ['General contractors', 'Project managers', 'Specialty trades', 'Staging & design'],
  },
  {
    title: 'Property Management',
    description: 'Property managers who serve agents building rental portfolios across Anytown and the surrounding counties — not just individual homeowners.',
    examples: ['Residential PM companies', 'Short-term rental managers', 'HOA specialists', 'Leasing coordinators'],
  },
  {
    title: 'Insurance & Legal',
    description: 'Insurance agents and real estate attorneys who cover landlord policies, investment property portfolios, and entity formation for active investors.',
    examples: ['Landlord insurance', 'Investment property coverage', 'LLC formation', 'Real estate attorneys'],
  },
  {
    title: 'Accounting & Finance',
    description: 'CPAs and financial advisors who focus on real estate tax strategy — cost segregation, depreciation, and portfolio-level planning for investor clients.',
    examples: ['Real estate CPAs', 'Cost segregation analysts', 'Bookkeeping', 'Wealth advisors'],
  },
]

const SPONSOR_TIERS = [
  {
    tier: 'Bronze',
    tagline: 'Event Presence',
    price: 'Pricing available upon inquiry',
    features: [
      'Logo placement at 1 branch event',
      'Verbal mention during event intro',
      'Business card display at venue',
      'Acme Realty agent contact list (opt-in only)',
    ],
    highlight: false,
  },
  {
    tier: 'Silver',
    tagline: 'Preferred Vendor',
    price: 'Pricing available upon inquiry',
    features: [
      'Everything in Bronze',
      'Preferred vendor listing on Acme Realty site',
      'Logo on email communications',
      '5-minute speaking slot at monthly event',
      'Quarterly branch newsletter feature',
    ],
    highlight: false,
  },
  {
    tier: 'Gold',
    tagline: 'Strategic Partner',
    price: 'Pricing available upon inquiry',
    features: [
      'Everything in Silver',
      'Presenting sponsor at 1 Growth Network event annually',
      'Joint content collaboration',
      'Intro to all new agents joining branch',
      'Featured case study or deal breakdown',
      'Annual Summit 2026 presence (Anytown)',
    ],
    highlight: true,
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/hero-partners-v2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="clip">
              <div className="mb-3">
                <p className="text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Acme Realty
                </p>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Partner With Us
              </h1>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Reach Anytown&rsquo;s most active investor-agents through a curated vendor
                program built on referrals, relationships, and real results.
              </p>
            </Reveal>
            <Reveal variant="up" delay={220}>
              <div className="mt-8">
                <a
                  href="#partner-inquiry"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Submit Partner Inquiry
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why Partner */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Why It Works
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Access Anytown&rsquo;s Investor-Agent Network
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#4B5563]">
                Acme Realty agents actively serve investment clients — flips, rentals, BRRRs, and
                commercial deals. They need vetted partners who understand investor timelines and
                can perform consistently. That&rsquo;s where you come in.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <RevealStagger variant="scale" stagger={90}>
              {[
                { stat: '100+', label: 'Investment transactions by branch leadership', isCount: true },
                { stat: 'Growth Network', label: 'Certified chapter — investor-focused agents only', isCount: false },
                { stat: 'Monthly', label: 'Live events with investor-agent audiences', isCount: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-xl border border-[#E5E7EB] bg-white px-6 py-10 text-center"
                >
                  {item.isCount ? (
                    <CountUp
                      value={item.stat}
                      className="mb-3 text-4xl font-extrabold text-[#000000]"
                    />
                  ) : (
                    <span className="mb-3 text-4xl font-extrabold text-[#000000]">{item.stat}</span>
                  )}
                  <p className="text-sm text-[#4B5563]">{item.label}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Vendor Categories */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Vendor Program
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Who We&rsquo;re Looking For
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mt-3 max-w-xl text-base text-[#4B5563]">
                We partner with service providers who specialize in real estate investment.
                Generalist vendors are not a fit — we need practitioners who serve investors day-in and day-out.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="up" stagger={70}>
              {VENDOR_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-7"
                >
                  <span className="mb-3 inline-flex items-center self-start rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                    {cat.title}
                  </span>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#4B5563]">
                    {cat.description}
                  </p>
                  <div className="border-t border-[#E5E7EB] pt-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#000000]">
                      We work with:
                    </p>
                    <ul className="flex flex-col gap-1">
                      {cat.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden="true" />
                          <span className="text-xs text-[#4B5563]">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Sponsor Tiers */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10 text-center">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Sponsorship
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Sponsor Tiers
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#4B5563]">
                Event sponsorship and preferred vendor placement for businesses that want consistent exposure to the Anytown investor-agent community.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <RevealStagger variant="scale" stagger={100}>
              {SPONSOR_TIERS.map((tier) => (
                <div
                  key={tier.tier}
                  className={`flex flex-col rounded-xl p-8 ${
                    tier.highlight
                      ? 'border-2 border-black bg-white'
                      : 'border border-[#E5E7EB] bg-white'
                  }`}
                >
                  {tier.highlight && (
                    <div className="mb-4 self-start">
                      <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                    {tier.tier}
                  </p>
                  <h3 className="mb-1 text-2xl font-extrabold text-[#000000]">{tier.tagline}</h3>
                  <p className="mb-6 text-xs italic text-[#9CA3AF]">{tier.price}</p>
                  <ul className="mb-8 flex flex-1 flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#000000]"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-[#4B5563]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#partner-inquiry"
                    className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-150 ${
                      tier.highlight
                        ? 'bg-black text-white hover:bg-[#1F2937]'
                        : 'bg-[#F3F4F6] text-[#000000] hover:bg-[#E5E7EB]'
                    }`}
                  >
                    Inquire About {tier.tier}
                  </a>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Partner Inquiry CTA */}
      <section id="partner-inquiry" className="relative overflow-hidden bg-black py-16 md:py-24">
        <Image src="/images/cta-partners-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal variant="clip">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Get Started
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                Submit a Partner Inquiry
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mb-8 text-base leading-relaxed text-[#9CA3AF]">
                Reach out through the contact form and mention that you&rsquo;re interested in
                the vendor or sponsorship program. Jane will respond within 2 business days.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact?ref=partner-inquiry"
                  className="inline-flex items-center rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Submit Inquiry
                </Link>
                <a
                  href="mailto:agent@example.com"
                  className="inline-flex items-center rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  agent@example.com
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
