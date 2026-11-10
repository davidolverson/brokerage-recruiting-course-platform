'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { ImageReveal } from '@/components/ui/ImageReveal'

const NODES = [
  {
    number: '01',
    title: 'Transactions & Operations',
    description:
      'TC support, staging resources, and standardized ops infrastructure so you spend client hours on clients — not on paperwork and deadline tracking.',
    href: '/agent-advantage/transactions-operations',
  },
  {
    number: '02',
    title: 'Financial & Legal',
    description:
      'Example Lending Partner and Example Title Partner — two partners who already have a working relationship and a combined track record of 4,000+ closings in the Anytown area.',
    href: '/agent-advantage/financial-legal',
  },
  {
    number: '03',
    title: 'Asset Management',
    description:
      'Rental strategy, property management connections, and investor frameworks to build a portfolio — yours and your clients&apos;.',
    href: '/agent-advantage/asset-management',
  },
  {
    number: '04',
    title: 'Education & Certifications',
    description:
      'Growth Network certification, 80+ hrs of weekly Acme training, monthly in-person events, and a structured mentorship pipeline with defined milestones.',
    href: '/agent-advantage/education',
  },
]

const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Join Acme Realty',
    body: 'Plug into the branch ecosystem from day one. No gatekeeping — every resource is available to every agent from the moment you transfer or join.',
  },
  {
    step: '2',
    title: 'Map Your Business Needs',
    body: 'Work with your team lead or Growth Network mentor to identify the pillars most relevant to your goals right now — volume, investors, education, or all four.',
  },
  {
    step: '3',
    title: 'Activate the Right Nodes',
    body: 'Tap TC support for volume transactions, connect clients to Example Lending Partner & Example Title Partner, or start your investor pipeline with the BRRR and rental frameworks.',
  },
  {
    step: '4',
    title: 'Build Compounding Advantage',
    body: 'Each pillar feeds the others. Closings fund investments. Education opens new client types. The systems compound as your volume grows.',
  },
]

export default function AgentAdvantagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-agent-advantage-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="clip">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Your Agent Advantage Ecosystem
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Four purpose-built pillars that remove specific friction from your business — TC ops,
                vetted financial partners, investor frameworks, and structured education. All included
                when you join.
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book-a-tour"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/agent-advantage/financial-legal"
                  className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Meet Our Partners
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4 Service Node Cards */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Four Pillars
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                The Complete Agent Stack
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#4B5563]">
                Each node is built to remove a specific category of friction from your business.
                Explore them individually or run all four in parallel.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <RevealStagger variant="scale" stagger={80}>
              {NODES.map((node) => (
                <Link
                  key={node.href}
                  href={node.href}
                  className="group flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    className="mb-4 inline-block text-3xl font-extrabold leading-none text-[#000000] opacity-10"
                    aria-hidden="true"
                  >
                    {node.number}
                  </span>
                  <h3 className="mb-3 text-lg font-bold leading-snug text-[#000000]">
                    {node.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#4B5563]">{node.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#000000] transition-all duration-150 group-hover:gap-2">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Team Collaboration Image */}
      <section className="bg-white pt-16">
        <Container>
          <ImageReveal className="rounded-2xl">
            <img
              src="/images/team-collab.jpeg"
              alt="Acme Realty agents collaborating on strategy and deal analysis"
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
              loading="lazy"
            />
          </ImageReveal>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Simple Activation
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                How It Works
              </h2>
            </Reveal>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-[2.25rem] hidden h-px bg-[#E5E7EB] md:block"
              aria-hidden="true"
            />

            {HOW_IT_WORKS_STEPS.map((s, i) => (
              <Reveal key={s.step} variant="up" delay={i * 100}>
                <div className="relative flex flex-col items-start gap-3 md:items-center md:text-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-sm font-extrabold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-[#000000]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Ready to see it in action?
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Book a branch tour and we&rsquo;ll walk you through every node live.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <Link
                href="/book-a-tour"
                className="shrink-0 inline-flex items-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
              >
                Book a Tour
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
