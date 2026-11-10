'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { TrackedCTA } from '@/components/ui/TrackedCTA'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { FeaturedMembers } from '@/components/teams/FeaturedMembers'
import { LeaderBioSection } from '@/components/teams/LeaderBioSection'

import type { Team } from '@/lib/data/teams'

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-black" aria-hidden="true" />
      <h2
        className="text-xl font-extrabold tracking-tight text-[#111827]"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {children}
      </h2>
    </div>
  )
}

export function TeamDetailClient({ team }: { team: Team }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        {team.heroImage && (
          <Image
            src={team.heroImage}
            alt=""
            fill
            className="object-cover opacity-45"
            priority
            sizes="100vw"
          />
        )}
        <div className="relative z-10 py-24 sm:py-32">
          <Container>
            {/* Breadcrumb */}
            <Reveal variant="up">
              <nav
                aria-label="Breadcrumb"
                className="mb-10 flex items-center gap-2 text-sm text-[#6B7280]"
              >
                <Link href="/teams" className="transition-colors hover:text-white">
                  Teams
                </Link>
                <span aria-hidden="true" className="select-none">
                  /
                </span>
                <span className="text-white">{team.name}</span>
              </nav>
            </Reveal>

            <div className="max-w-3xl">
              <Reveal variant="up" delay={60}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#6B7280]">
                  Acme Realty Partner
                </p>
              </Reveal>
              <Reveal variant="clip" delay={100}>
                <h1
                  className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {team.name}
                </h1>
              </Reveal>
              <Reveal variant="up" delay={180}>
                <p className="mt-4 text-base font-semibold text-[#D1D5DB]">
                  {team.leader}
                  {team.leaderTitle && (
                    <span className="font-normal text-[#9CA3AF]">
                      {' '}
                      &mdash; {team.leaderTitle}
                    </span>
                  )}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#9CA3AF]">{team.specialty}</p>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">

            {/* Main content */}
            <div className="space-y-14 lg:col-span-2">

              {/* About */}
              <Reveal variant="up">
                <div>
                  <SectionHeading>About {team.name}</SectionHeading>
                  <p className="mt-5 text-base leading-relaxed text-[#374151]">
                    {team.description}
                  </p>
                </div>
              </Reveal>

              {/* Leader quote */}
              {team.leaderQuote && (
                <Reveal variant="up">
                  <blockquote className="relative rounded-xl border-l-4 border-black bg-[#F9FAFB] px-8 py-7">
                    <p className="text-base italic leading-relaxed text-[#374151]">
                      &ldquo;{team.leaderQuote}&rdquo;
                    </p>
                    <footer className="mt-4 text-sm font-semibold text-[#111827]">
                      — {team.leader}, {team.leaderTitle}
                    </footer>
                  </blockquote>
                </Reveal>
              )}

              {/* Who this is for */}
              <Reveal variant="up">
                <div>
                  <SectionHeading>Who This Team Is For</SectionHeading>
                  <div className="mt-5 rounded-xl border border-[#E5E7EB] p-6 sm:p-8">
                    <p className="text-base leading-relaxed text-[#374151]">
                      {team.idealAgentType}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Support model */}
              <Reveal variant="up">
                <div>
                  <SectionHeading>How We Support You</SectionHeading>
                  <p className="mt-5 text-base leading-relaxed text-[#374151]">
                    {team.supportModel}
                  </p>
                </div>
              </Reveal>

              {/* First 90 days */}
              <Reveal variant="up">
                <div>
                  <SectionHeading>Your First 90 Days</SectionHeading>
                  <div className="mt-5 rounded-xl bg-black px-8 py-8">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]">
                      From day one
                    </p>
                    <p className="text-base leading-relaxed text-[#D1D5DB]">
                      {team.first90DayAdvantage}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Track record */}
              {team.proofPoints.length > 0 && (
                <div>
                  <Reveal variant="up">
                    <SectionHeading>Track Record</SectionHeading>
                  </Reveal>
                  <ul className="mt-5 space-y-3">
                    <RevealStagger variant="up" stagger={60} baseDelay={60}>
                      {team.proofPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-base text-[#374151]"
                        >
                          <CheckIcon />
                          <span>{point}</span>
                        </li>
                      ))}
                    </RevealStagger>
                  </ul>
                </div>
              )}

              {/* Featured team members */}
              {team.featuredMembers && team.featuredMembers.length > 0 && (
                <FeaturedMembers members={team.featuredMembers} />
              )}

              {/* Leader bio */}
              {team.leaderBio && (
                <LeaderBioSection bio={team.leaderBio} leaderName={team.leader} />
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">

              {/* Apply CTA */}
              <Reveal variant="up">
                <div className="rounded-xl bg-black px-7 py-8">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]">
                    Ready to join?
                  </p>
                  <h3
                    className="mt-2 text-xl font-extrabold tracking-tight text-white"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Apply to {team.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#9CA3AF]">
                    Apply and we&rsquo;ll connect you with {team.leader.split(' ')[0]} to see if this team is the
                    right fit.
                  </p>
                  <TrackedCTA
                    href={`/apply?team=${team.slug}`}
                    eventName="cta_click"
                    eventProperties={{
                      cta_text: 'Apply Now',
                      source_route: `/teams/${team.slug}`,
                      destination: `/apply?team=${team.slug}`,
                    }}
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-[#F9FAFB]"
                  >
                    Apply Now
                    <span aria-hidden="true">&rarr;</span>
                  </TrackedCTA>
                </div>
              </Reveal>

              {/* Quick facts */}
              <Reveal variant="up" delay={60}>
                <div className="rounded-xl border border-[#E5E7EB] px-7 py-7">
                  <h4
                    className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Quick Facts
                  </h4>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Team Leader
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-[#111827]">
                        {team.leader}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Members
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-[#111827]">
                        {team.memberCount}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Markets
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-[#111827]">
                        {team.markets.join(', ')}
                      </dd>
                    </div>
                    {team.website && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                          Website
                        </dt>
                        <dd className="mt-0.5">
                          <a
                            href={team.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-sm font-semibold text-[#111827] underline underline-offset-2 hover:text-black"
                          >
                            {team.website.replace(/^https?:\/\//, '')}
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </Reveal>

              {/* Culture keywords */}
              {team.cultureKeywords.length > 0 && (
                <Reveal variant="up" delay={80}>
                  <div className="rounded-xl border border-[#E5E7EB] px-7 py-7">
                    <h4
                      className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Culture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {team.cultureKeywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#4B5563]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Back link */}
              <Reveal variant="up" delay={100}>
                <Link
                  href="/teams"
                  className="flex items-center gap-2 text-sm font-semibold text-[#6B7280] transition-colors hover:text-black"
                >
                  <span aria-hidden="true">&larr;</span>
                  Back to All Teams
                </Link>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {/* Get in touch strip */}
      <section className="border-t border-[#E5E7EB] bg-[#F9FAFB] py-14">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <Reveal variant="up">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">
                  Interested?
                </p>
                <h2
                  className="mt-1 text-2xl font-extrabold tracking-tight text-[#111827]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Get connected to {team.name}
                </h2>
                <p className="mt-2 text-sm text-[#6B7280]">
                  All inquiries go through branch leadership. We&rsquo;ll connect you with {team.leader.split(' ')[0]} directly.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href={`/apply?team=${team.slug}`}
                  className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1F2937]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-black px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Contact Branch
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
