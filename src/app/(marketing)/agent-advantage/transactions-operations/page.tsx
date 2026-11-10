'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

const BENEFITS = [
  {
    title: 'Transaction Coordination',
    body: 'Dedicated TC professionals manage your contract-to-close pipeline — deadlines, disclosures, communication threads, and compliance checks.',
  },
  {
    title: 'Staging Resources',
    body: 'Access to staging partners and consultation resources that help your listings move faster and photograph better.',
  },
  {
    title: 'Document & Compliance Support',
    body: 'Standardized templates, checklist systems, and audit-ready file organization built for Acme compliance requirements.',
  },
  {
    title: 'Vendor Network',
    body: 'Pre-vetted photographers, inspectors, handymen, and service providers you can confidently send to clients.',
  },
  {
    title: 'Showing & Feedback Tools',
    body: 'Automated showing requests, buyer feedback loops, and activity reporting so you always know where listings stand.',
  },
  {
    title: 'Post-Close Systems',
    body: 'Review request workflows, referral tracking, and CRM touchpoints that turn one transaction into a lifelong client relationship.',
  },
]

const FRICTION_REMOVED = [
  'Missed contract deadlines from calendar overload',
  'Compliance errors that delay or kill closings',
  'Wasted hours chasing signatures and document uploads',
  'Inconsistent client communication during escrow',
  'No-show vendors creating last-minute listing emergencies',
  'Losing referral opportunities post-close',
]

const FAQS = [
  {
    q: 'Do I have to use the TC support or is it optional?',
    a: 'Entirely optional. The resources are available to you, but you run your business your way. Many agents start using TC support once volume picks up and they want their time back.',
  },
  {
    q: 'Is there an additional cost for TC services?',
    a: 'TC fees are transaction-based — you only pay when you use the service. Rates are disclosed upfront so there are no surprises at closing.',
  },
  {
    q: 'What if I already have a preferred TC?',
    a: 'Bring them. The goal is to give you access to proven infrastructure, not to force a switch. Our TC network is a resource, not a requirement.',
  },
]

export default function TransactionsOperationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-transactions-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/agent-advantage" className="transition-colors hover:text-white">
                  Agent Advantage
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Transactions &amp; Operations</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="clip">
              <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                Node 01
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Transactions &amp; Operations
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                TC support, staging resources, a vetted vendor network, and post-close systems so
                you spend client hours on clients — not on deadlines and document uploads.
              </p>
            </Reveal>
            <Reveal variant="up" delay={280}>
              <p className="mt-4 text-sm font-medium text-[#9CA3AF]">
                Who this helps:{' '}
                <span className="text-white">
                  Solo agents scaling past 20 transactions/yr, team leads standardizing ops, and new
                  agents building professional habits from day one.
                </span>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
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
                Built to Scale With You
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
                  Most agent inefficiency doesn&rsquo;t come from bad selling — it comes from
                  operational drag. These are the specific problems this node is built to remove.
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

      {/* Operations Partners */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal variant="clip">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
              Operations Partners
            </p>
          </Reveal>
          <Reveal variant="clip" delay={80}>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-[#000000]">
              Preferred Service Providers
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mb-8 max-w-xl text-sm text-[#4B5563]">
              Our vetted vendor network includes TC services, professional photography studios, and
              home prep specialists across the Greater Anytown area. Contact the branch to get
              connected with the right partner for your next transaction.
            </p>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?ref=transactions-ops"
                className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1a1a1a]"
              >
                Get Connected to a Partner
              </Link>
              <Link
                href="/contact?ref=vendor-inquiry"
                className="inline-flex items-center rounded-md border border-[#E5E7EB] px-6 py-3 text-sm font-semibold text-[#000000] transition-colors duration-150 hover:border-black"
              >
                Become a Preferred Partner
              </Link>
            </div>
          </Reveal>
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
      <section className="relative overflow-hidden bg-black py-16 md:py-20">
        <Image src="/images/cta-anytown-skyline-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Get your operations running like a team of five.
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Book a branch tour and see the full ops stack in action.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/book-a-tour?ref=transactions-ops"
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
