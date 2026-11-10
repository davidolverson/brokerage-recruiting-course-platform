import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { TrackedLink } from '@/components/ui/TrackedLink'
import { TrackedCTA } from '@/components/ui/TrackedCTA'
import { ScrollDepthTracker } from '@/components/ui/ScrollDepthTracker'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { teams, type Team } from '@/lib/data/teams'
import { RotatingWords } from '@/components/ui/RotatingWords'

// ─── Icon primitives (inline SVG, zero external deps) ───────────────────────

function IconUsers({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function IconTool({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function IconDollar({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// ─── Shared primitives ───────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      {children}
    </p>
  )
}

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <h2
      className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]"
      style={{
        fontFamily: 'Manrope, sans-serif',
        color: light ? '#FFFFFF' : '#000000',
      }}
    >
      {children}
    </h2>
  )
}

function SectionSubtext({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className="mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg"
      style={{
        fontFamily: 'Roboto, sans-serif',
        color: light ? 'rgba(255,255,255,0.72)' : '#6B7280',
      }}
    >
      {children}
    </p>
  )
}

function BenefitItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100">
        <IconCheck className="h-3 w-3 text-gray-800" />
      </span>
      <span
        className="text-sm leading-relaxed text-gray-600"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {children}
      </span>
    </li>
  )
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-black"
      style={{ minHeight: '75vh' }}
    >
      {/* Hero background image */}
      <Image
        src="/images/hero-bg-v2.jpeg"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover opacity-45"
        aria-hidden="true"
      />


      <Container className="relative">
        <div
          className="flex flex-col items-center justify-center py-24 text-center"
          style={{ minHeight: '75vh' }}
        >
          {/* Eyebrow badge */}
          <div
            className="hero-enter hero-enter-1 mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            Anytown&rsquo;s Fastest-Growing Branch
          </div>

          {/* Main headline */}
          <h1
            className="hero-enter hero-enter-2 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.75rem] xl:text-7xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Your Real Estate
            <br />
            <span className="text-gray-300">Career Starts Here.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="hero-enter hero-enter-3 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Anytown&rsquo;s fastest-growing branch — built for{' '}
            <RotatingWords
              words={['investors', 'producers', 'team builders', 'new agents', 'entrepreneurs']}
              className="font-semibold text-white"
            />
            . Join a team or grow independently with{' '}
            <span className="font-semibold text-white">Growth Network</span>.
          </p>

          {/* CTA buttons */}
          <div className="hero-enter hero-enter-4 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <TrackedCTA
              href="/join-a-team"
              eventName="path_selected"
              eventProperties={{ selected_path: 'team', source_section: 'hero' }}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Join a Team
              <IconArrowRight className="h-4 w-4" />
            </TrackedCTA>
            <TrackedCTA
              href="/network"
              eventName="path_selected"
              eventProperties={{ selected_path: 'network', source_section: 'hero' }}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Grow with Growth Network
              <IconArrowRight className="h-4 w-4" />
            </TrackedCTA>
          </div>

          {/* Trust indicators */}
          <div className="hero-enter hero-enter-4 mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { value: '50K+', label: 'Growth Network Investors' },
              { value: '350+', label: 'Events Per Year' },
              { value: '$100M+', label: 'Revenue Network' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl font-extrabold text-white"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-medium uppercase tracking-wider text-white/50"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/25 pt-2">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}

// ─── Section 2: Path Selector ────────────────────────────────────────────────

function PathSelectorSection() {
  return (
    <section aria-label="Choose your path" className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal variant="clip" className="mb-12 text-center">
          <SectionLabel>Two Paths. One Destination.</SectionLabel>
          <SectionHeading>Choose the Path That Fits You</SectionHeading>
          <SectionSubtext>
            Every agent is different. We built two distinct pathways so your career fits your
            goals &mdash; not the other way around.
          </SectionSubtext>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Join a Team card */}
          <Reveal variant="scale" delay={0}>
          <div className="relative overflow-hidden rounded-2xl border border-black bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:p-10">
            <div
              className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl bg-black"
              aria-hidden="true"
            />
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
              <IconUsers className="h-7 w-7 text-gray-800" />
            </div>
            <h3
              className="mb-2 text-2xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Join a Team
            </h3>
            <p
              className="mb-6 text-sm leading-relaxed text-gray-500"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Get built-in structure, mentorship, and resources from day one. Teams provide
              the accountability system new and growing agents need to ramp fast.
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              <BenefitItem>Direct mentorship from experienced team leaders</BenefitItem>
              <BenefitItem>Leads, systems, and transaction support from day one</BenefitItem>
              <BenefitItem>Built-in accountability and performance coaching</BenefitItem>
              <BenefitItem>Fast ramp &mdash; skip years of trial and error</BenefitItem>
              <BenefitItem>Collaborative culture with shared goals</BenefitItem>
            </ul>
            <TrackedCTA
              href="/join-a-team"
              eventName="path_selected"
              eventProperties={{ selected_path: 'team', source_section: 'path_selector' }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Explore Teams
              <IconArrowRight className="h-4 w-4" />
            </TrackedCTA>
          </div>
          </Reveal>

          {/* Growth Network card */}
          <Reveal variant="scale" delay={120}>
          <div className="relative overflow-hidden rounded-2xl border border-black bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:p-10">
            <div
              className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl bg-gray-800"
              aria-hidden="true"
            />
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
              <IconTrendingUp className="h-7 w-7 text-gray-800" />
            </div>
            <h3
              className="mb-2 text-2xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Grow with Growth Network
            </h3>
            <p
              className="mb-6 text-sm leading-relaxed text-gray-500"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Flip your income into ownership. Growth Network is the largest investor-focused
              real estate network in the country &mdash; built to help agents achieve the
              Wealth Roadmap through investing, community, and wealth-building education.
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              <BenefitItem>FREE Growth Network Pro membership &mdash; included with your Acme Realty seat</BenefitItem>
              <BenefitItem>Wealth Roadmap framework to guide your wealth journey</BenefitItem>
              <BenefitItem>Investor education: fix-and-flip, buy-and-hold, BRRRR</BenefitItem>
              <BenefitItem>50,000+ investor community and deal network</BenefitItem>
              <BenefitItem>Wealth Mastermind sessions and live deal workshops</BenefitItem>
            </ul>
            <TrackedCTA
              href="/network"
              eventName="path_selected"
              eventProperties={{ selected_path: 'network', source_section: 'path_selector' }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Explore Growth Network
              <IconArrowRight className="h-4 w-4" />
            </TrackedCTA>
          </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

// ─── Section 3: Proof Strip ───────────────────────────────────────────────────

function ProofStripSection() {
  const stats = [
    {
      value: '50,000+',
      label: 'Growth Network Investors',
      icon: <IconUsers className="h-6 w-6" />,
    },
    {
      value: '350+',
      label: 'Events Per Year',
      icon: <IconCalendar className="h-6 w-6" />,
    },
    {
      value: '$100M+',
      label: 'Revenue Network',
      icon: <IconDollar className="h-6 w-6" />,
    },
    {
      value: '35+',
      label: 'Hours Certification',
      icon: <IconBook className="h-6 w-6" />,
    },
  ]

  return (
    <section aria-label="Key metrics" className="bg-black">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} variant="up" delay={i * 80}>
            <div
              className="flex flex-col items-center gap-3 px-6 py-10 text-center lg:py-12"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                {stat.icon}
              </span>
              <CountUp
                value={stat.value}
                className="text-3xl font-extrabold leading-none text-white lg:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              />
              <p
                className="text-xs font-medium uppercase tracking-wider text-white/55"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ─── Section 3b: Partner Trust Bar ───────────────────────────────────────────

function PartnerTrustBar() {
  const partnerTeams = teams.filter(
    (t) => !t.isPlaceholder && t.logoImage,
  )

  return (
    <section aria-label="Branch partners" className="border-y border-[#E5E7EB] bg-[#F9FAFB] py-8">
      <Container>
        <p
          className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-[#9CA3AF]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Teams &amp; Partners Operating Under Acme Realty
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partnerTeams.map((team) => (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
              aria-label={team.name}
            >
              <img
                src={team.logoImage!}
                alt={team.name}
                className="h-8 w-auto max-w-[100px] object-contain transition-all duration-200 lg:grayscale lg:group-hover:grayscale-0 sm:h-10 sm:max-w-[120px]"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ─── Section 4: Team Preview ──────────────────────────────────────────────────

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
      {team.logoImage ? (
        <img
          src={team.logoImage}
          alt={`${team.name} logo`}
          className="mb-5 h-14 w-auto max-w-[140px] object-contain"
        />
      ) : (
        <div
          className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-black text-xl font-extrabold text-white"
          aria-hidden="true"
        >
          {team.leader.charAt(0)}
        </div>
      )}
      <h3
        className="text-lg font-extrabold text-gray-900"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {team.name}
      </h3>
      <p
        className="mt-0.5 text-sm font-medium text-gray-500"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {team.leader}
      </p>
      <p
        className="mt-3 line-clamp-1 text-sm leading-relaxed text-gray-500"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {team.specialty}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <span
          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {team.memberCount} members
        </span>
      </div>
      <Link
        href={`/teams/${team.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:text-gray-600"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        View Team
        <IconArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}

function TeamPreviewSection() {
  const realTeams = teams.filter((t) => !t.isPlaceholder)

  return (
    <section aria-label="Team preview" className="bg-[#F9FAFB] py-20 lg:py-28">
      <Container>
        <Reveal variant="clip" className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Active Teams</SectionLabel>
            <SectionHeading>Find Your Team</SectionHeading>
            <SectionSubtext>
              Each team inside Acme Realty has a distinct culture, focus, and track record.
              Find the one that matches where you&rsquo;re headed.
            </SectionSubtext>
            <p
              className="mt-4 text-sm font-semibold tracking-wide text-gray-400"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              6 Teams | 120+ Members | 6+ Markets
            </p>
          </div>
          <Link
            href="/teams"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border-2 border-black px-6 py-3 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-md"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Browse All Teams
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RevealStagger variant="scale" stagger={100}>
          {realTeams.map((team) => (
            <TeamCard key={team.slug} team={team} />
          ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  )
}

// ─── Section 5: Growth Network Preview ─────────────────────────────────────────────────

function GridFeatureBox({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 hover:shadow-lg">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
        {icon}
      </span>
      <h3
        className="mb-2 text-lg font-bold text-white"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed text-white/65"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {description}
      </p>
    </div>
  )
}

function GridPreviewSection() {
  return (
    <section
      aria-label="Growth Network advantage"
      className="relative overflow-hidden bg-black py-20 lg:py-28"
    >
      <Image
        src="/images/cta-network-advantage-v2.jpeg"
        alt=""
        fill
        sizes="100vw"
        quality={75}
        className="object-cover opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <Reveal variant="clip" className="mb-12 text-center">
          <SectionLabel>Why Growth Network</SectionLabel>
          <SectionHeading light>The Growth Network Advantage</SectionHeading>
          <SectionSubtext light>
            Growth Network isn&rsquo;t just a program &mdash; it&rsquo;s your path to flipping income into
            ownership. With a FREE Growth Network Pro membership and the Wealth Roadmap framework,
            here&rsquo;s what sets it apart.
          </SectionSubtext>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <RevealStagger variant="up" stagger={90}>
          <GridFeatureBox
            icon={<IconBook className="h-6 w-6" />}
            title="Growth Network Pro (FREE)"
            description="FREE Growth Network Pro membership included. 35+ hours of certification-eligible investor education covering every major real estate investing strategy."
          />
          <GridFeatureBox
            icon={<IconCalendar className="h-6 w-6" />}
            title="Wealth Masterminds"
            description="Weekly Wealth Mastermind sessions plus monthly in-person and virtual events in Anytown and nationwide."
          />
          <GridFeatureBox
            icon={<IconTool className="h-6 w-6" />}
            title="Wealth Roadmap"
            description="A proven framework to guide your journey from active income to true financial freedom through real estate ownership."
          />
          <GridFeatureBox
            icon={<IconGlobe className="h-6 w-6" />}
            title="Community"
            description="50,000+ investor members sharing deals, strategies, and market intelligence across the country."
          />
          </RevealStagger>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/network"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-white px-8 py-4 text-base font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Explore Growth Network
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

// ─── Section 6: Agent Advantage ───────────────────────────────────────────────

function AdvantageCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-200">
        {icon}
      </span>
      <h3
        className="mb-2 text-base font-bold text-gray-900"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h3>
      <p
        className="flex-1 text-sm leading-relaxed text-gray-500"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {description}
      </p>
      <span
        className="mt-5 flex items-center gap-1 text-xs font-semibold text-gray-900 transition-colors duration-150 group-hover:text-gray-600"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        Learn More
        <IconArrowRight className="h-3 w-3" />
      </span>
    </Link>
  )
}

function AgentAdvantageSection() {
  return (
    <section aria-label="Agent advantage ecosystem" className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal variant="clip" className="mb-12 text-center">
          <SectionLabel>Full Support System</SectionLabel>
          <SectionHeading>Your Agent Advantage Ecosystem</SectionHeading>
          <SectionSubtext>
            Acme Realty agents don&rsquo;t operate in isolation. We&rsquo;ve built an integrated
            support system covering every dimension of your business &mdash; so you can focus on
            closing.
          </SectionSubtext>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <RevealStagger variant="scale" stagger={80}>
          <AdvantageCard
            icon={<IconShield className="h-6 w-6" />}
            title="Transactions & Ops"
            description="Transaction coordination, contract support, and operations systems that remove friction from every deal."
            href="/agent-advantage/transactions-operations"
          />
          <AdvantageCard
            icon={<IconDollar className="h-6 w-6" />}
            title="Financial & Legal"
            description="Revenue share, stock awards, cap structure, and access to real estate-focused legal and financial professionals."
            href="/agent-advantage/financial-legal"
          />
          <AdvantageCard
            icon={<IconBuilding className="h-6 w-6" />}
            title="Asset Management"
            description="Portfolio-level support for agents building long-term wealth through property ownership and investment."
            href="/agent-advantage/asset-management"
          />
          <AdvantageCard
            icon={<IconBook className="h-6 w-6" />}
            title="Education"
            description="the Acme virtual campus, Growth Network certification, team-led training, and continuous learning paths tailored to your career stage."
            href="/agent-advantage/education"
          />
          </RevealStagger>
        </div>
      </Container>
    </section>
  )
}

// ─── Section 7: Training & Events ─────────────────────────────────────────────

function TrainingEventsSection() {
  return (
    <section aria-label="Training and events" className="bg-[#F9FAFB] py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            <Reveal variant="clip">
            <SectionLabel>Always Growing</SectionLabel>
            <SectionHeading>Training &amp; Events</SectionHeading>
            <SectionSubtext>
              Monthly events, certifications, and deal workshops keep you current on the Anytown
              market. New agents build knowledge fast. Experienced producers sharpen their
              investor edge.
            </SectionSubtext>
            </Reveal>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                {
                  label: 'Wealth Mastermind sessions + monthly investor meetups',
                  icon: <IconCalendar className="h-5 w-5" />,
                },
                {
                  label: '35+ hours of certification-eligible content',
                  icon: <IconBook className="h-5 w-5" />,
                },
                {
                  label: 'Live deal analysis and underwriting workshops',
                  icon: <IconTarget className="h-5 w-5" />,
                },
                {
                  label: 'Annual national Growth Network summits and conferences',
                  icon: <IconGlobe className="h-5 w-5" />,
                },
              ].map((item, i) => (
                <Reveal key={item.label} variant="up" delay={i * 70}>
                <li
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                    {item.icon}
                  </span>
                  <span
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </li>
                </Reveal>
              ))}
            </ul>

            <Reveal variant="up" delay={320}>
            <Link
              href="/training-events"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-900 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              View All Events
              <IconArrowRight className="h-4 w-4" />
            </Link>
            </Reveal>
          </div>

          {/* Right: Visual card */}
          <ImageReveal className="rounded-2xl">
            <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: '380px' }}>
              <Image
                src="/images/training-room.jpeg"
                alt="Training session at Acme Realty with agents learning investor strategies"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </ImageReveal>
        </div>
      </Container>
    </section>
  )
}

// ─── Section 8: Community ─────────────────────────────────────────────────────

function CommunitySection() {
  return (
    <section aria-label="Community" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Visual */}
          <div className="order-2 lg:order-1">
            <ImageReveal direction="up" className="rounded-2xl">
            <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: '380px' }}>
              <Image
                src="/images/anytown-community.jpeg"
                alt="Anytown community gathering at Acme Realty branch"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            </ImageReveal>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <Reveal variant="clip">
            <SectionLabel>Local Market</SectionLabel>
            <SectionHeading>Anytown-Built, Acme-Backed</SectionHeading>
            <SectionSubtext>
              Our branch operates on the ground in Anytown and the surrounding region, with direct
              access to the infrastructure of Acme Realty &mdash; 10,000+ agents, a 24/7 virtual
              campus, and a national referral network.
            </SectionSubtext>
            </Reveal>

            <div className="mt-8 flex flex-col gap-4">
              {[
                {
                  icon: <IconMapPin className="h-5 w-5" />,
                  title: '123 Main Street',
                  body: 'Anytown, VA 00000 — our local hub for agents, meetings, and events',
                },
                {
                  icon: <IconGlobe className="h-5 w-5" />,
                  title: 'the Acme virtual campus Access',
                  body: 'Virtual campus with 10,000+ agents, training rooms, and support desks available 24/7',
                },
                {
                  icon: <IconUsers className="h-5 w-5" />,
                  title: 'Anytown Community Network',
                  body: 'Local investors, vendors, and professionals who actively collaborate and refer within the branch',
                },
              ].map((item, i) => (
                <Reveal key={item.title} variant="up" delay={i * 80}>
                <div
                  className="flex gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-700">
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="text-sm font-bold text-gray-900"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-0.5 text-sm text-gray-500"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" delay={280}>
            <Link
              href="/community"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-black px-7 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-md"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Explore the Community
              <IconArrowRight className="h-4 w-4" />
            </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ─── Section 8b: Why Anytown ────────────────────────────────────────────────

function WhyLocalSection() {
  const marketStats = [
    { value: '$365K', label: 'Median Home Price', sub: 'Below national avg — high growth potential' },
    { value: '1.3M+', label: 'Metro Population', sub: 'Top 45 largest U.S. metro areas' },
    { value: '3.2%', label: 'Annual Job Growth', sub: 'Healthcare, tech, and government sectors' },
    { value: '15%', label: 'Price Appreciation (3yr)', sub: 'Consistent year-over-year gains' },
  ]

  return (
    <section aria-label="Why Anytown" className="bg-[#F9FAFB] py-20 lg:py-24">
      <Container>
        <Reveal variant="clip" className="mb-12 text-center">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            The Market
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Why Anytown?
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base text-[#6B7280]"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            A market where agents can afford to invest. Strong fundamentals, growing demand,
            and a cost of living that lets you build wealth — not just collect commissions.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {marketStats.map((stat, i) => (
            <Reveal key={stat.label} variant="scale" delay={i * 80}>
              <div className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white px-5 py-8 text-center">
                <CountUp
                  value={stat.value}
                  className="text-3xl font-extrabold text-black lg:text-4xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
                <p
                  className="mt-2 text-sm font-bold text-[#111827]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {stat.label}
                </p>
                <p
                  className="mt-1 text-xs text-[#6B7280]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {stat.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-black px-7 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Explore Local Markets
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

// ─── Section 9: Conversion Strip ─────────────────────────────────────────────

function ConversionStripSection() {
  return (
    <section
      aria-label="Take the next step"
      className="relative overflow-hidden bg-black py-20 lg:py-24"
    >
      <Image
        src="/images/cta-anytown-skyline-v2.jpeg"
        alt=""
        fill
        sizes="100vw"
        quality={75}
        className="object-cover opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="clip">
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Your Next Move Starts in Anytown.
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            New agent or experienced producer &mdash; there&rsquo;s a seat for you inside Acme
            Anytown. Tour our Anytown office, find your fit with the quiz, or submit
            your application now.
          </p>
          </Reveal>

          <Reveal variant="up" delay={160}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-a-tour"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Book a Tour
            </Link>

            <Link
              href="/quiz"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-transparent px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Take the Quiz
            </Link>

            <Link
              href="/apply"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white bg-white/10 px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Apply Now
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <ScrollDepthTracker route="/" />
      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — Path Selector */}
      <PathSelectorSection />

      {/* 3 — Proof Strip */}
      <ProofStripSection />

      {/* 3b — Partner Trust Bar */}
      <PartnerTrustBar />

      {/* 4 — Team Preview */}
      <TeamPreviewSection />

      {/* 5 — Growth Network Preview */}
      <GridPreviewSection />

      {/* 6 — Agent Advantage */}
      <AgentAdvantageSection />

      {/* 7 — Training & Events */}
      <TrainingEventsSection />

      {/* 8 — Community */}
      <CommunitySection />

      {/* 8b — Why Anytown */}
      <WhyLocalSection />

      {/* 9 — Conversion Strip */}
      <ConversionStripSection />
    </main>
  )
}
