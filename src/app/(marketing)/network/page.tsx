'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { TrackedCTA } from '@/components/ui/TrackedCTA'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

/* ─── DATA ─────────────────────────────────────────── */

const heroStats = [
  { value: '50,000+', label: 'Investor Network' },
  { value: '350+', label: 'Annual Events' },
  { value: '1', label: 'Wealth Roadmap' },
  { value: 'FREE', label: 'Growth Network Pro Membership' },
]

const platformPillars = [
  {
    number: 1,
    title: 'Acme Training & Support',
    body: 'Access structured training and real-time support across every stage of your business. Learn from top producers, collaborate globally, and build on systems that compound over time.',
  },
  {
    number: 2,
    title: 'Technology & Tools',
    body: 'Operate with a full-stack platform: lead generation tools, transaction management, and built-in agent resources — all designed to reduce friction and keep you focused on production.',
  },
  {
    number: 3,
    title: 'Acme Revenue Share',
    body: 'Build income beyond your own production by helping other agents succeed. Revenue share gives you a second income stream that grows as the agents you sponsor grow.',
  },
  {
    number: 4,
    title: 'Acme Stock Options',
    body: "Participate in ownership through stock awards and purchase opportunities — connecting your production directly to equity in the company.",
  },
]

const networkExclusives = [
  {
    number: 1,
    title: 'Growth Network Virtual Support Team',
    body: 'Real-time support to stay on track, solve issues fast, and execute with clarity.',
  },
  {
    number: 2,
    title: 'Growth Network Online Community',
    body: 'A private room to connect with agents and investors, ask questions, and stay in the path of deals.',
  },
  {
    number: 3,
    title: 'Growth Network Hub for Resources & Playbacks',
    body: 'On-demand trainings, tools, and replays — so you can learn fast and implement immediately.',
  },
  {
    number: 4,
    title: 'Growth Network Rev Share Builders Mastermind',
    body: 'Weekly builder-focused coaching to grow your organization and create income through revenue share.',
  },
]

const signaturePrograms = [
  {
    title: 'Growth Network Pro Membership',
    body: 'Your private community for building ownership. Get weekly Wealth Mastermind sessions, investing conversations, real-world strategy, and accountability through the Wealth Roadmap framework.',
    badge: 'FREE for Growth Network',
    badgeColor: 'bg-black text-white',
  },
  {
    title: 'Agent-Investor Certification',
    body: 'A step-by-step path for agents who want to build their Cash Machine by working with investors. Learn how to attract investor clients, speak the language of deals, analyze opportunities, structure financing, and position yourself inside real transactions — while developing the skills to become an investor yourself.',
    badge: 'Available Now',
    badgeColor: 'bg-[#F3F4F6] text-[#4B5563]',
  },
  {
    title: 'Income Flip Masterclass',
    body: 'Discover how to convert active commission income into ownership. Learn the framework for moving from transactional income to wealth-building assets — so you stop chasing deals and start building assets, leading others, and creating impact through ownership.',
    badge: 'Coming July 2026',
    badgeColor: 'bg-[#F3F4F6] text-[#4B5563]',
  },
]

const gridProChecklist = [
  'Intro to the Wealth Roadmap framework',
  'Weekly Wealth Masterminds',
  'Access to The Growth Network Vault',
  'Access to The Growth Network Pro Community',
  'Member Directory + Networking',
  'Deal & Opportunity Conversations',
  'Member-only discounts to the Annual Summit',
]

const webinarTopics = [
  { title: 'Design Your Ideal Life First', description: 'Build a business that funds the life you actually want — not the other way around.' },
  { title: 'The Income Flip', description: 'Learn how to transition from active income to passive wealth through real estate investing.' },
  { title: 'The Wealth Roadmap', description: "Growth Network's proven framework for building financial independence step by step." },
  { title: 'Predictable Income First', description: 'Create reliable monthly cash flow before chasing big deals.' },
  { title: 'Find Your First Investment Deal', description: 'Practical walkthrough of sourcing, analyzing, and closing your first property.' },
  { title: 'The FLIP Framework', description: 'A repeatable system for identifying and executing profitable fix-and-flip deals.' },
  { title: "Why More Deals Won't Make You Wealthy", description: 'The mindset shift from volume to strategy that separates producers from investors.' },
  { title: 'Build a Business That Funds Your Life', description: 'Structure your real estate business to generate freedom — not just commissions.' },
  { title: 'The Truth About Cash Flow', description: 'Cut through the noise and learn what actually drives long-term rental profitability.' },
  { title: 'From Side Hustle to Serious Wealth', description: 'Scale from part-time investor to full portfolio owner with a proven roadmap.' },
  { title: "Building Wealth with Other People's Money", description: 'Creative financing, partnerships, and leverage strategies for faster growth.' },
]

const networkDiscounts = [
  { title: 'Annual Summit 2026', detail: 'June 1–2, 2026 · Anytown', tag: 'Flagship Event' },
  { title: 'Growth Network Leadership', detail: '', tag: 'Available Now' },
  { title: 'Growth Network Coaching', detail: '', tag: 'Launching June 2026' },
  { title: 'Growth Network Investor Club', detail: '', tag: 'Launching June 2026' },
  { title: 'Growth Network Coach Certification', detail: 'Cohort 1: April 2—May 14, 2026 · Cohort 2: September—October 2026', tag: 'Enrolling Now' },
]

const gridChecklist = [
  { yes: true, text: 'You already have a production base and want to keep all your commission' },
  { yes: true, text: 'You want to work with investors and build a wealth-creation strategy' },
  { yes: true, text: "You are entrepreneurial and want to build a brand — not join someone else's" },
  { yes: true, text: 'You value coaching and training but want flexibility on when and how' },
  { yes: true, text: 'You want access to a 50,000+ investor network without giving up a team cut' },
  { yes: false, text: 'You need a daily accountability structure and pre-built lead pipeline' },
  { yes: false, text: 'You are brand new and need mentorship on every deal' },
  { yes: false, text: "You want to operate under someone else's systems for now" },
]

const agentInvestorSteps = [
  {
    number: '01',
    title: 'Get Certified',
    body: 'Complete the Growth Network certification program. 35+ hours of education that gives you the language, strategy, and credibility to serve investor clients.',
  },
  {
    number: '02',
    title: 'Tap the Network',
    body: 'Access the 50K+ investor community. Connect with active buyers, wholesalers, flippers, and buy-and-hold investors who are looking for agent partners.',
  },
  {
    number: '03',
    title: 'List Investment Properties',
    body: 'With the right certifications and network, you become the preferred agent for investment transactions — not a generalist competing on Zillow.',
  },
  {
    number: '04',
    title: 'Build Your Own Portfolio',
    body: "Growth Network is not just about serving investors — it's about becoming one. The education and network you access through Growth Network applies to your own deals too.",
  },
]

const comparisonRows = [
  { category: 'Commission', grid: 'Full Acme split — no team cut', team: 'Team split applies' },
  { category: 'Independence', grid: 'Full autonomy over brand + business', team: 'Operate under team structure' },
  { category: 'Lead Gen', grid: 'Self-generated + investor network access', team: 'Team leads provided' },
  { category: 'Mentorship', grid: 'Growth Network coaches + Acme training ecosystem', team: 'Direct 1-on-1 from team leader' },
  { category: 'Training', grid: '350+ events + the Annual Summit + certifications', team: 'Team-specific training + Acme library' },
  { category: 'Investor Network', grid: '50K+ Growth Network investor community', team: 'Team-specific investor relationships' },
  { category: 'Revenue Share', grid: 'Full Acme revenue share active', team: 'Full Acme revenue share active' },
  { category: 'Best For', grid: 'Experienced or entrepreneurial agents', team: 'Agents who want structure + speed' },
]

const uplinePartners = [
  'Demo Speaker',
  'Game Changers',
  'One Big Fire CABO',
  'Agent Freedom Collective',
]

/* ─── COMPONENTS ───────────────────────────────────── */

function WebinarCard() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? webinarTopics : webinarTopics.slice(0, 4)

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
        Monthly Webinar Series
      </span>
      <h3
        className="text-2xl font-extrabold text-white"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        Growth Network Webinars
      </h3>
      <p className="mt-2 text-sm font-semibold text-[#9CA3AF]">
        3rd Wednesdays &middot; 3:00–4:00 PM ET
      </p>
      <div className="mt-5 space-y-3">
        {visible.map((w) => (
          <div key={w.title} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-sm font-bold text-white">{w.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-[#9CA3AF]">{w.description}</p>
          </div>
        ))}
      </div>
      {webinarTopics.length > 4 && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-sm font-semibold text-white underline underline-offset-2 hover:text-[#9CA3AF] transition-colors"
        >
          {showAll ? 'Show fewer' : `Show all ${webinarTopics.length} topics`}
        </button>
      )}
    </div>
  )
}

/* ─── PAGE ─────────────────────────────────────────── */

export default function NetworkPage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────── */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">
        <img src="/images/hero-network-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="up" delay={0}>
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                  Acme Realty
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Independent Path
                </span>
              </div>
            </Reveal>

            <Reveal variant="clip" delay={80}>
              <h1
                className="text-5xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Flip Your Income Into{' '}
                <span className="text-white underline decoration-[#E5E7EB] underline-offset-4">
                  Ownership
                </span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={160}>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#9CA3AF]">
                For real estate agents who want to build wealth — not just sell homes. Through the 7
                Wealth Roadmap, we teach you how to build a Cash Machine and flip it into businesses
                and assets that work harder than you do.
              </p>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <TrackedCTA
                  href="/apply?path=grid"
                  eventName="cta_click"
                  eventProperties={{ cta_text: 'Join Growth Network Today', source_route: '/network', destination: '/apply?path=grid' }}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-black shadow-xl hover:bg-[#F3F4F6] transition-colors"
                >
                  Join Growth Network Today
                  <span aria-hidden="true">&rarr;</span>
                </TrackedCTA>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Am I a Growth Network Fit?
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <RevealStagger variant="scale" baseDelay={300} stagger={80}>
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <CountUp
                    value={stat.value}
                    className="text-3xl font-extrabold text-white sm:text-4xl"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  />
                  <div className="mt-2 text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ── Section 2: Mission ──────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-24">
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="clip">
              <h2
                className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                We help agents build wealth — not just sell homes.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-[#9CA3AF]">
                Through the Wealth Roadmap, we teach you how to build a Cash Machine and flip it
                into businesses and assets that work harder than you do.
              </p>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-4 text-lg leading-relaxed text-[#9CA3AF]">
                When you join Growth Network, you&apos;re joining a group of agents who refuse to stay
                transactional and are committed to leadership, investing, ownership, and creating impact
                that extends beyond their own production.
              </p>
            </Reveal>
            <Reveal variant="up" delay={260}>
              <p
                className="mt-8 text-2xl font-extrabold text-white sm:text-3xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Together, we&apos;re building businesses, wealth, and legacy that lasts.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Section 3: Acme Platform Pillars ─────────── */}
      <section className="py-20 sm:py-24 bg-[#F3F4F6]">
        <Container>
          <div className="text-center">
            <Reveal variant="up">
              <span className="mb-4 inline-block rounded-full bg-white border border-[#E5E7EB] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4B5563]">
                The Platform
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2
                className="text-3xl font-extrabold text-[#000000] sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Plug into the Acme platform
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <RevealStagger variant="up" baseDelay={100} stagger={80}>
              {platformPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group flex flex-col rounded-2xl bg-white p-8 border border-[#E5E7EB] hover:border-black transition-colors"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F3F4F6] text-lg font-bold text-black">
                      {pillar.number}
                    </div>
                    <h3
                      className="text-lg font-extrabold text-[#000000]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-[#4B5563]">{pillar.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ── Section 4: Growth Network Exclusives ─────────────── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-24">
        <Container className="relative z-10">
          <div className="text-center">
            <Reveal variant="up">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                Members Only
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2
                className="text-3xl font-extrabold text-white sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Growth Network Exclusives
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#9CA3AF]">
                What you get when you join Growth Network at Acme Realty
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <RevealStagger variant="up" baseDelay={100} stagger={80}>
              {networkExclusives.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-lg font-bold text-white">
                      {item.number}
                    </div>
                    <h3
                      className="text-lg font-extrabold text-white"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#9CA3AF]">{item.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ── Section 5: Signature Growth Network Programs ──────── */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="text-center">
            <Reveal variant="up">
              <span className="mb-4 inline-block rounded-full bg-[#F3F4F6] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4B5563]">
                Programs
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2
                className="text-3xl font-extrabold text-[#000000] sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Signature Growth Network Programs
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#4B5563]">
                Growth Network agents gain instant access to signature Growth Network Programs including:
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <RevealStagger variant="up" baseDelay={100} stagger={100}>
              {signaturePrograms.map((program) => (
                <div
                  key={program.title}
                  className="group flex flex-col rounded-2xl bg-white p-8 border border-[#E5E7EB] hover:border-black transition-colors"
                >
                  <div className="mb-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${program.badgeColor}`}>
                      {program.badge}
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-xl font-extrabold text-[#000000]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {program.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#4B5563]">{program.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ── Section 6: Growth Network Pro Deep Dive ───────────── */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24">
        <Image src="/images/cta-network-advantage-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-30 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal variant="up" delay={0}>
                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                  Included Free
                </span>
              </Reveal>
              <Reveal variant="clip" delay={80}>
                <h2
                  className="text-3xl font-extrabold leading-tight text-white sm:text-4xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Growth Network Pro
                </h2>
              </Reveal>
              <Reveal variant="up" delay={140}>
                <p className="mt-1 text-lg font-semibold text-[#9CA3AF]">
                  Flip your income into ownership.
                </p>
              </Reveal>

              <Reveal variant="up" delay={200}>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-sm font-bold uppercase tracking-wider text-white">
                    *FREE FOR Growth Network AGENTS
                  </span>
                  <span className="text-sm text-[#9CA3AF] line-through">$9/MONTH</span>
                </div>
              </Reveal>

              <Reveal variant="up" delay={260}>
                <p className="mt-6 text-base leading-relaxed text-[#9CA3AF]">
                  Growth Network Pro is your private community for building ownership. Inside, you get access to
                  weekly masterminds, investing conversations, real-world strategy sessions, and
                  accountability through the Wealth Roadmap framework. This is where agents stop
                  thinking like salespeople and start thinking like owners.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#9CA3AF]">
                  Whether you&apos;re exploring your first investment deal or actively building a
                  portfolio, Growth Network Pro gives you the room, the people, and the framework to make it
                  happen.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center">
              <Reveal variant="scale" delay={200}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3
                    className="mb-6 text-lg font-extrabold text-white"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    What&apos;s Inside Growth Network Pro
                  </h3>
                  <div className="space-y-4">
                    {gridProChecklist.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                          ✓
                        </span>
                        <span className="text-sm leading-relaxed text-[#9CA3AF]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 7: Wealth Mastermind ─────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Reveal variant="up">
                <span className="mb-4 inline-block rounded-full bg-[#F3F4F6] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4B5563]">
                  *Included in Growth Network Pro
                </span>
              </Reveal>
              <Reveal variant="clip" delay={80}>
                <h2
                  className="text-3xl font-extrabold text-[#000000] sm:text-4xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Wealth Mastermind
                </h2>
              </Reveal>
              <Reveal variant="up" delay={140}>
                <p className="mt-2 text-base font-semibold text-[#4B5563]">
                  Weekly &middot; 8:30–9:15 AM
                </p>
              </Reveal>
            </div>

            <Reveal variant="up" delay={200}>
              <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] p-8">
                <p className="text-base leading-relaxed text-[#4B5563]">
                  An exclusive private weekly mastermind for real estate agents and investors focused
                  on building real, long-term wealth. Each week covers investing strategies, fix &amp;
                  flips, rentals, financing, deal structures, partnerships, and wealth-building
                  opportunities.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  This is a private room for higher-level thinking, real conversations, and real
                  numbers — designed to help you move beyond transactions and into ownership.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Section 8: Training Calendar ────────────── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-24">
        <Container className="relative z-10">
          <div className="mb-14 text-center">
            <Reveal variant="up">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                Training Calendar
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2
                className="text-3xl font-extrabold text-white sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Still exploring? Experience our world.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#9CA3AF]">
                Several opportunities every month:
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Tactics Training */}
            <Reveal variant="up" delay={80}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  For Real Estate Agents
                </span>
                <h3
                  className="text-2xl font-extrabold text-white"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Tactics Training
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#9CA3AF]">
                  Weekly &middot; Tuesdays &middot; 8:30–9:15 AM
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">
                  Join us every Tuesday morning for a weekly training focused on improving your agent
                  production. Learn from experienced agents as they share tactical strategies you can
                  put to work in your business right away. 100% focused on growing your business and
                  building your Cash Machine.
                </p>
                <p className="mt-4 text-xs font-semibold text-white">
                  Register:{' '}
                  <a
                    href="https://example.com/calendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#9CA3AF] transition-colors"
                  >
                    example.com/calendar
                  </a>
                </p>
              </div>
            </Reveal>

            {/* Growth Network Webinars */}
            <Reveal variant="up" delay={160}>
              <WebinarCard />
            </Reveal>
          </div>

          <Reveal variant="up" delay={200}>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-[#9CA3AF]">
                Also check for free local Growth Network events near you!{' '}
                <a
                  href="https://example.com/meetups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline hover:text-[#9CA3AF] transition-colors"
                >
                  example.com/meetups
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Section 9: Growth Network Discounts ──────────────── */}
      <section className="py-20 sm:py-24 bg-[#F3F4F6]">
        <Container>
          <div className="text-center">
            <Reveal variant="up">
              <span className="mb-4 inline-block rounded-full bg-white border border-[#E5E7EB] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4B5563]">
                Member Perks
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2
                className="text-3xl font-extrabold text-[#000000] sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Exclusive Growth Network Discounts
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#4B5563]">
                on Growth Network Events, Certifications &amp; Advanced Programs
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="up" baseDelay={100} stagger={80}>
              {networkDiscounts.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-8 border border-[#E5E7EB] hover:border-black transition-colors"
                >
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold text-[#4B5563]">
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-extrabold text-[#000000]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  {item.detail && (
                    <p className="mt-2 text-sm text-[#4B5563]">{item.detail}</p>
                  )}
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ── Section 10: Is Growth Network Right For You? ─────── */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal variant="clip">
                <h2
                  className="text-3xl font-extrabold leading-tight text-[#000000] sm:text-4xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Is Growth Network Right For You?
                </h2>
              </Reveal>
              <Reveal variant="up" delay={100}>
                <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  Growth Network is designed for a specific kind of agent. Check yourself against this list
                  before you apply.
                </p>
              </Reveal>

              <div className="mt-8 space-y-3">
                <RevealStagger variant="up" baseDelay={140} stagger={60}>
                  {gridChecklist.map((item) => (
                    <div
                      key={item.text}
                      className={`flex items-start gap-3 rounded-xl px-4 py-3.5 ${
                        item.yes ? 'bg-[#F3F4F6] border border-[#E5E7EB]' : 'bg-[#F9FAFB] opacity-60'
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                          item.yes ? 'bg-black' : 'bg-[#D1D5DB]'
                        }`}
                      >
                        {item.yes ? '✓' : '✕'}
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          item.yes ? 'font-medium text-[#000000]' : 'text-[#9CA3AF]'
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </RevealStagger>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Reveal variant="scale" delay={200}>
                <div className="relative overflow-hidden rounded-2xl bg-black p-10">
                  <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Growth Network in Numbers
                  </span>
                  <div className="mt-4 space-y-6">
                    {[
                      { num: '50,000+', label: 'active investors in the Growth Network network' },
                      { num: '350+', label: 'training events run annually' },
                      { num: '1', label: 'Wealth Roadmap framework' },
                      { num: 'FREE', label: 'Growth Network Pro membership for Growth Network agents' },
                      { num: 'Monthly', label: 'free events open to all Acme agents' },
                      { num: '1 Annual', label: 'Annual Summit conference — the flagship event' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <div
                          className="w-24 shrink-0 text-xl font-extrabold text-white"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {item.num}
                        </div>
                        <div className="text-sm text-[#9CA3AF]">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="mt-6 text-center">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 text-sm font-bold text-black underline hover:text-[#4B5563] transition-colors"
                >
                  Take the 2-minute path quiz to confirm your fit &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 11: Agent-Investor Model ────────── */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24">
        <Image src="/images/cta-apply-now-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-30 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="mb-14 max-w-2xl">
            <Reveal variant="up">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                The Agent-Investor Model
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2
                className="text-3xl font-extrabold leading-tight text-white sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Stop Being Just an Agent. Start Investing.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p className="mt-5 text-base leading-relaxed text-[#9CA3AF]">
                Growth Network trains agents to operate as investor-agents — the most valuable real estate
                professional in any market. You serve investor clients AND build your own portfolio
                at the same time. Experienced team leaders model this every day
                while running their teams. That is the Growth Network model in practice.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <RevealStagger variant="up" baseDelay={100} stagger={80}>
              {agentInvestorSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl bg-white/5 border border-white/10 p-8"
                >
                  <div
                    className="mb-4 text-4xl font-extrabold text-white opacity-40"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="mb-3 text-lg font-extrabold text-white"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9CA3AF]">{step.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>

          {/* Jane proof callout */}
          <Reveal variant="up" delay={200}>
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-extrabold text-black">
                  JA
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">Real Proof</p>
                  <p
                    className="mt-1 text-xl font-extrabold text-white"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Jane Agent — Example Investor Team
                  </p>
                  <p className="mt-2 text-base text-[#9CA3AF]">
                    Demo proof callout. Describe a team leader who is an active investor and
                    team leader operating inside the Acme Realty ecosystem. This is the
                    agent-investor model working in the real world.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Section 12: Growth Network vs Team Comparison ───── */}
      <section className="py-20 sm:py-24 bg-[#F3F4F6]">
        <Container>
          <div className="mb-12 text-center">
            <Reveal variant="clip">
              <h2
                className="text-3xl font-extrabold text-[#000000] sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Growth Network vs. Joining a Team
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#4B5563]">
                Both paths live inside Acme Realty. Neither is better — they serve different agents
                at different stages. Here is the honest comparison.
              </p>
            </Reveal>
          </div>

          <Reveal variant="up" delay={140}>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
              <table className="min-w-full divide-y divide-[#E5E7EB]">
                <thead>
                  <tr>
                    <th className="bg-white px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Category
                    </th>
                    <th className="bg-black px-6 py-5 text-left text-sm font-bold text-white">
                      Growth Network (Independent)
                    </th>
                    <th className="bg-[#000000] px-6 py-5 text-left text-sm font-bold text-[#9CA3AF]">
                      Join a Team
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] bg-white">
                  {comparisonRows.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}>
                      <td className="px-6 py-4 text-sm font-semibold text-[#000000]">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#4B5563]">{row.grid}</td>
                      <td className="px-6 py-4 text-sm text-[#4B5563]">{row.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-black px-7 py-3.5 text-sm font-bold text-black hover:bg-black hover:text-white transition-colors"
              >
                Not sure? Take the 2-minute quiz &rarr;
              </Link>
              <Link
                href="/join-a-team"
                className="text-sm font-semibold underline text-[#4B5563] hover:text-black transition-colors"
              >
                Learn more about teams
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Section 13: Upline Partners ─────────────── */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-24">
        <Container className="relative z-10">
          <div className="text-center">
            <Reveal variant="up">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                Our Network
              </span>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h2
                className="text-3xl font-extrabold text-white sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Our Upline Partners
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            <RevealStagger variant="scale" baseDelay={100} stagger={80}>
              {uplinePartners.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <span
                    className="text-center text-xl font-extrabold text-white sm:text-2xl"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ── Section 14: CTA Strip ───────────────────── */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-28">
        <Image src="/images/cta-anytown-skyline-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <Reveal variant="up">
            <span className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              Ready to Growth Network?
            </span>
          </Reveal>
          <Reveal variant="clip" delay={80}>
            <h2
              className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Build Your Business on Your Terms
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#9CA3AF]">
              Join Growth Network at Acme Realty. Flip your income into ownership. Access the 7 Levels of
              Freedom framework. Get Growth Network Pro for free. Attend 350+ events a year. Build a business
              that compounds.
            </p>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedCTA
                href="/apply?path=grid"
                eventName="cta_click"
                eventProperties={{ cta_text: 'Join Growth Network Now', source_route: '/network', destination: '/apply?path=grid' }}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-black shadow-xl hover:bg-[#F3F4F6] transition-colors"
              >
                Join Growth Network Now
                <span aria-hidden="true">&rarr;</span>
              </TrackedCTA>
              <Link
                href="/book-a-tour"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Book a 1-on-1 Call
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9CA3AF] underline hover:text-white transition-colors"
              >
                Take the path quiz first
              </Link>
            </div>
          </Reveal>

          {/* Alex Agent proof line */}
          <Reveal variant="up" delay={320}>
            <p className="mt-12 text-sm text-[#9CA3AF]">
              <span className="font-bold text-white">Alex Agent</span> — demo team leader,
              built a production team inside the same ecosystem.
              <span className="ml-1 font-semibold text-white">Your turn.</span>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
