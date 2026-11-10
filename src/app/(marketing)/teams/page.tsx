'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { teams } from '@/lib/data/teams'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { ImageReveal } from '@/components/ui/ImageReveal'

const stats = [
  { value: '6', label: 'Active Teams' },
  { value: '120+', label: 'Combined Members' },
  { value: '1,000+', label: 'Homes Sold' },
  { value: '6+', label: 'Markets' },
]

export default function TeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-28">
        <img
          src="/images/teams/example-residential-team-hero-v2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <Reveal variant="clip">
            <h1
              className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Our Teams
            </h1>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#9CA3AF]">
              Six specialized teams. Investment, residential production, luxury, mortgage,
              settlement, and multi-state investor sales — each with a distinct system, leader,
              and market position. Find the one that matches how you want to build your business.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#1F2937] bg-black">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-[#1F2937] sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="py-7 text-center">
                <CountUp
                  value={stat.value}
                  className="text-2xl font-extrabold text-white sm:text-3xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team cards */}
      <section className="bg-[#F9FAFB] py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="scale" stagger={80}>
              {teams.map((team) => (
                <article
                  key={team.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-colors hover:border-black"
                >
                  {/* Hero image */}
                  <ImageReveal className="relative h-48 w-full bg-[#F3F4F6]">
                    {team.heroImage ? (
                      <Image
                        src={team.heroImage}
                        alt={team.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-[#E5E7EB]" />
                    )}
                    {/* Member count badge */}
                    <div className="absolute right-3 top-3 rounded-md bg-black/80 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      {team.memberCount} members
                    </div>
                  </ImageReveal>

                  <div className="flex flex-1 flex-col p-6">
                    {/* Logo + name */}
                    <div className="mb-4 flex items-center gap-3">
                      {team.logoImage && (
                        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-[#E5E7EB] bg-white">
                          <Image
                            src={team.logoImage}
                            alt={`${team.name} logo`}
                            fill
                            className="object-contain p-1"
                            sizes="36px"
                          />
                        </div>
                      )}
                      <h2
                        className="text-lg font-extrabold leading-tight tracking-tight text-black"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {team.name}
                      </h2>
                    </div>

                    {/* Leader */}
                    <p className="mb-1 text-sm font-semibold text-[#374151]">{team.leader}</p>
                    <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
                      {team.leaderTitle}
                    </p>

                    {/* Description */}
                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[#4B5563]">
                      {team.description}
                    </p>

                    {/* Best for */}
                    <p className="mb-4 text-sm leading-snug text-[#374151]">
                      <span className="font-bold text-black">Best for: </span>
                      <span className="line-clamp-2">{team.idealAgentType}</span>
                    </p>

                    {/* Top proof points */}
                    <ul className="mb-4 space-y-1">
                      {team.proofPoints.slice(0, 3).map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs leading-snug text-[#4B5563]"
                        >
                          <span
                            className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-black"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Markets */}
                    <p className="mb-4 text-xs text-[#6B7280]">
                      <span className="font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Markets{' '}
                      </span>
                      {team.markets.join(', ')}
                    </p>

                    {/* Culture keywords */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {team.cultureKeywords.slice(0, 4).map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full bg-[#F3F4F6] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#6B7280]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        href={`/teams/${team.slug}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-white px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
                      >
                        View Team
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Compare Teams */}
      <section className="border-t border-[#E5E7EB] bg-white py-20 sm:py-24">
        <Container>
          <Reveal variant="clip">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                Side by side
              </p>
              <h2
                className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Compare Teams
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-[#6B7280]">
                Every team has a different system, market focus, and leadership style. Use this
                comparison to narrow your search before booking a call.
              </p>
            </div>
          </Reveal>

          {/* Desktop table */}
          <Reveal variant="up" delay={80}>
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[800px] border-collapse text-sm">
                <thead>
                  <tr className="bg-black text-left text-xs font-bold uppercase tracking-wider text-white">
                    <th className="px-4 py-3 font-bold"></th>
                    {teams.map((t) => (
                      <th key={t.slug} className="px-4 py-3 font-bold">
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-[#374151]">Leader</td>
                    {teams.map((t) => (
                      <td key={t.slug} className="px-4 py-3 text-[#4B5563]">
                        {t.leader}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-[#F9FAFB]">
                    <td className="px-4 py-3 font-semibold text-[#374151]">Specialty</td>
                    {teams.map((t) => (
                      <td key={t.slug} className="px-4 py-3 text-[#4B5563]">
                        {t.specialty}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-[#374151]">Members</td>
                    {teams.map((t) => (
                      <td key={t.slug} className="px-4 py-3 text-[#4B5563]">
                        {t.memberCount}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-[#F9FAFB]">
                    <td className="px-4 py-3 font-semibold text-[#374151]">Markets</td>
                    {teams.map((t) => (
                      <td key={t.slug} className="px-4 py-3 text-[#4B5563]">
                        {t.markets.join(', ')}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-[#374151]">Best For</td>
                    {teams.map((t) => (
                      <td key={t.slug} className="px-4 py-3 text-[#4B5563]">
                        <span className="line-clamp-3">{t.idealAgentType}</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Mobile card stack */}
          <div className="space-y-6 lg:hidden">
            {teams.map((t) => (
              <Reveal key={t.slug} variant="up">
                <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
                  <div className="relative overflow-hidden px-5 py-4">
                    {t.heroImage && (
                      <img
                        src={t.heroImage}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        aria-hidden="true"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
                    <div className="relative z-10 flex items-center gap-3">
                      {t.logoImage && (
                        <img
                          src={t.logoImage}
                          alt=""
                          className="h-8 w-8 shrink-0 rounded-md border border-white/20 bg-white object-contain p-1"
                        />
                      )}
                      <h3
                        className="text-base font-extrabold tracking-tight text-white"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {t.name}
                      </h3>
                    </div>
                  </div>
                  <dl className="divide-y divide-[#E5E7EB]">
                    {[
                      { label: 'Leader', value: t.leader },
                      { label: 'Specialty', value: t.specialty },
                      { label: 'Members', value: String(t.memberCount) },
                      { label: 'Markets', value: t.markets.join(', ') },
                      { label: 'Best For', value: t.idealAgentType },
                    ].map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4 ${
                          i % 2 === 1 ? 'bg-[#F9FAFB]' : 'bg-white'
                        }`}
                      >
                        <dt className="shrink-0 text-xs font-bold uppercase tracking-wider text-[#9CA3AF] sm:w-28">
                          {row.label}
                        </dt>
                        <dd className="text-sm text-[#4B5563]">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#E5E7EB] bg-white py-20 sm:py-24">
        <Container className="text-center">
          <Reveal variant="clip">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
              Not sure where to start
            </p>
            <h2
              className="mx-auto max-w-xl text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Not sure which team fits?
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="mx-auto mt-4 max-w-lg text-base text-[#6B7280]">
              Answer 7 questions about your experience, goals, and how you like to work. We will
              match you to the right team — or point you toward the Growth Network if a team is not the right
              move.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#111827]"
              >
                Take the Quiz
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/book-a-tour"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D1D5DB] bg-white px-8 py-4 text-sm font-semibold text-black transition-colors hover:border-black"
              >
                Book a 1-on-1 Call
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
