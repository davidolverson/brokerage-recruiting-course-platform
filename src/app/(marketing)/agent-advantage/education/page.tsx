'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

const EDUCATION_PILLARS = [
  {
    badge: 'Certification',
    title: 'Growth Network Certification',
    hours: '35+ Hours',
    description:
      'The Growth & Real Estate Investor Development program is our signature certification. 35+ hours of structured curriculum covering prospecting, negotiation, investment analysis, and building a scalable business. Agents who complete Growth Network close more transactions and earn at a higher rate — the data is clear.',
  },
  {
    badge: 'Platform Training',
    title: 'the Acme virtual campus Weekly',
    hours: '80+ Hours/Week',
    description:
      'Acme Realty offers 40+ hours of live training per week inside the Acme virtual campus — covering contracts, negotiation, marketing, social media, luxury, new construction, and more. As an Acme agent, every session is included at no additional cost.',
  },
  {
    badge: 'Branch Events',
    title: 'Monthly Anytown Events',
    hours: 'Monthly',
    description:
      'In-person and virtual branch-level events covering Anytown market trends, deal reviews, guest speakers, and collaborative mastermind sessions. These are where relationships form and referral networks get built.',
  },
  {
    badge: 'Mentorship',
    title: 'Structured Mentorship',
    hours: 'Ongoing',
    description:
      'New agents and career-changers get paired with experienced Anytown agents in a structured mentorship pipeline — not just "shadow me for a week," but a defined ramp with accountability, feedback loops, and clear milestones.',
  },
]

const BENEFITS = [
  {
    title: 'Free, Unlimited Access',
    body: "40+ hours of weekly training through the Acme virtual campus costs you nothing. No seminar fees. No coaching subscriptions. It's built into your Acme membership.",
  },
  {
    title: 'Anytown-Specific Intel',
    body: 'Branch events go deep on local market data — neighborhoods, pricing trends, builder pipeline, and deal case studies that national training programs cannot provide.',
  },
  {
    title: 'Certification That Opens Doors',
    body: 'Growth Network certification signals to investors and move-up buyers that you understand the numbers. It differentiates you in a crowded market without gimmicks.',
  },
  {
    title: 'Mentorship With Real Accountability',
    body: "Our mentorship program has defined milestones and structured check-ins. It's designed to compress your learning curve, not just give you someone to call.",
  },
  {
    title: 'Peer Learning at Scale',
    body: "When you're surrounded by agents who take education seriously, the whole floor level rises. Acme Realty attracts growth-minded agents — and that culture spreads.",
  },
  {
    title: 'Continuous Career Development',
    body: "Whether you're at year one or year fifteen, there's always a next level. The Acme ecosystem offers advanced designations, coaching tracks, and leadership pathways.",
  },
]

const FRICTION_REMOVED = [
  'Paying thousands for coaching that duplicates Acme training you already have',
  'Flying blind on Anytown market dynamics without local-specific education',
  'Losing deals to agents with investor certifications and designations',
  'New agent overwhelm from lack of structured onboarding and mentorship',
  "Plateau years where there's no clear path to the next income level",
  'Isolation — learning alone instead of inside a collaborative agent community',
]

const FAQS = [
  {
    q: 'Is the Growth Network certification exclusive to Acme Realty agents?',
    a: "Growth Network is a branch-level program designed specifically for agents in the Acme Realty ecosystem. You don't need to be on a specific team to participate — all branch agents are eligible to enroll.",
  },
  {
    q: 'What does the Acme virtual campus 40+ hours of training actually cover?',
    a: "The weekly catalog includes: buyer and seller consultations, scripts and objection handling, social media marketing, luxury and new construction niches, investment property analysis, contracts deep-dives, negotiation masterclasses, and career path workshops. It's a full real estate curriculum delivered live, every week, at no cost.",
  },
  {
    q: 'How does the mentorship program work for new agents?',
    a: 'New agents who join without an established book of business are matched with a mentor based on market focus, personality fit, and availability. There\'s a defined onboarding arc — typically 3-6 months — with weekly check-ins, transaction shadowing, and clear graduation milestones. Mentorship is a structured program, not just an open-door policy.',
  },
]

export default function AgentAdvantageEducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-coaching-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/agent-advantage" className="transition-colors hover:text-white">
                  Agent Advantage
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Education &amp; Certifications</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="clip">
              <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                Node 04
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Education &amp; Certifications
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Growth Network certification, 40+ hours of weekly Acme training, monthly Anytown events,
                and structured mentorship with defined milestones. Your growth has a clear path here.
              </p>
            </Reveal>
            <Reveal variant="up" delay={280}>
              <p className="mt-4 text-sm font-medium text-[#9CA3AF]">
                Who this helps:{' '}
                <span className="text-white">
                  New agents needing a fast ramp, mid-career agents chasing their next income level,
                  and experienced agents who want certification credibility with investors and buyers.
                </span>
              </p>
            </Reveal>
            <Reveal variant="up" delay={360}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/training-events?ref=education-coaching"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  See Training &amp; Events
                </Link>
                <Link
                  href="/book-a-tour?ref=education-coaching"
                  className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Book a Tour
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-[#E5E7EB] bg-[#F3F4F6] py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: '35+', label: 'Growth Network Certification Hours' },
              { value: '80+', label: 'Hours of Acme Training / Week' },
              { value: '12+', label: 'Monthly Branch Events / Year' },
              { value: '1:1', label: 'Mentorship Ratio for New Agents' },
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

      {/* Education Pillars */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Training Programs
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Four Tracks, One Ecosystem
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION_PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} variant="scale" delay={i * 80}>
                <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-semibold text-[#9CA3AF]">{pillar.hours}</span>
                  </div>
                  <div className="mb-3 h-1 w-12 rounded-full bg-black" aria-hidden="true" />
                  <h3 className="mb-3 text-xl font-extrabold text-[#000000]">{pillar.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#4B5563]">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Reveal variant="up" delay={320}>
              <Link
                href="/training-events"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#000000] transition-colors duration-150 hover:text-[#4B5563]"
              >
                See the full Training &amp; Events calendar
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
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
                The Education Advantage
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
                  Most education in real estate is either overpriced, generic, or both. This node
                  is built to close that gap for every Acme Realty agent.
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
                  The agents who invest in education out-earn those who don&rsquo;t.
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Book a branch tour and sit in on a live training session.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/book-a-tour?ref=education-coaching"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/training-events?ref=education-coaching"
                  className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Training &amp; Events
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
