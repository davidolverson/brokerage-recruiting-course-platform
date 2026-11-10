'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { getActiveTeams, type Team } from '@/lib/data/teams'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { ImageReveal } from '@/components/ui/ImageReveal'

const benefitIcons: Record<string, React.ReactNode> = {
  'Built-in Mentorship': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  'Proven Systems': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  ),
  'Shared Lead Flow': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
  ),
  'Faster Ramp Time': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
  ),
  'Market Specialization': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  'Accountability Structure': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
}

const benefits = [
  {
    title: 'Built-in Mentorship',
    body: 'Work directly alongside a team leader who has already solved the problems you are about to face. Skip years of trial and error.',
  },
  {
    title: 'Proven Systems',
    body: 'CRMs, scripts, follow-up sequences, and listing processes are already built. Plug in and produce from day one.',
  },
  {
    title: 'Shared Lead Flow',
    body: 'Top teams distribute leads to productive members. Stop cold-starting every month and start working warm opportunities.',
  },
  {
    title: 'Faster Ramp Time',
    body: 'New agents on structured teams close their first deal significantly faster than solo agents. The math is undeniable.',
  },
  {
    title: 'Market Specialization',
    body: 'Each team is deep in specific niches — investing, luxury, new construction, relocation. Your niche becomes your competitive edge.',
  },
  {
    title: 'Accountability Structure',
    body: 'Teams hold you to a standard. Accountability is the single biggest difference between agents who plateau and agents who scale.',
  },
]

const comparisonRows = [
  { category: 'Lead Generation', team: 'Shared team leads provided', grid: 'Self-generated, full ownership' },
  { category: 'Mentorship', team: 'Direct from team leader', grid: 'Growth Network coaches + Wealth Mastermind sessions' },
  { category: 'Commission Split', team: 'Team split applies', grid: 'Full Acme split, no team cut' },
  { category: 'Systems & CRM', team: 'Pre-built by team', grid: 'FREE Growth Network Pro membership + build your own stack' },
  { category: 'Niche Focus', team: 'Team specialty (investing, luxury, etc.)', grid: 'Any niche — Agent-Investor Certification available' },
  { category: 'Independence', team: 'Collaborative structure', grid: 'Wealth Roadmap framework' },
  { category: 'Best For', team: 'Agents who want structure + speed', grid: 'Experienced or entrepreneurial agents' },
  { category: 'Revenue Share', team: 'Acme revenue share still active', grid: 'Acme revenue share fully active' },
]

export default function JoinATeamPage() {
  const allTeams = getActiveTeams()
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-28 lg:py-36">
        <img
          src="/images/hero-join-team-v2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <Container className="relative z-10 text-center">
          <Reveal variant="up">
            <span className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              Acme Realty — Team Recruiting
            </span>
          </Reveal>
          <Reveal variant="clip" delay={80}>
            <h1
              className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Join a Team That Has Your Back
            </h1>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#9CA3AF] sm:text-xl">
              Stop figuring it out alone. The right team gives you leads, systems, mentorship, and
              accountability from day one — so you close faster and build a real book of business.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/teams"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-black shadow-lg hover:bg-[#F3F4F6] transition-colors"
              >
                Browse All Teams
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Take the Path Quiz
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Benefits grid */}
      <section className="py-20 sm:py-24 bg-[#F3F4F6]">
        <Container>
          <Reveal variant="clip">
            <div className="text-center">
              <h2
                className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                What a Great Team Actually Gives You
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#6B7280] sm:text-lg">
                Beyond the brand — a real infrastructure designed to get you to your first close
                faster and keep volume consistent.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="scale" stagger={70}>
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl bg-white p-8 border border-[#E5E7EB] hover:border-black transition-colors"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F4F6] text-black">
                    {benefitIcons[b.title]}
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold tracking-tight text-black"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280]">{b.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Team vs Growth Network comparison */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <Reveal variant="clip">
            <div className="text-center">
              <h2
                className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Team vs. Growth Network — Which Path Fits?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#6B7280] sm:text-lg">
                Both paths live inside Acme Realty. Your choice depends on where you are in your
                career and how you prefer to operate.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-[#E5E7EB]">
              <table className="min-w-full divide-y divide-[#E5E7EB]">
                <thead>
                  <tr>
                    <th className="bg-white px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Category
                    </th>
                    <th className="bg-black px-6 py-5 text-left text-sm font-bold text-white">
                      Join a Team
                    </th>
                    <th className="bg-black px-6 py-5 text-left text-sm font-bold text-[#9CA3AF]">
                      Growth Network (Solo Path)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] bg-white">
                  {comparisonRows.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}>
                      <td className="px-6 py-4 text-sm font-semibold text-black">{row.category}</td>
                      <td className="px-6 py-4 text-sm text-[#6B7280]">{row.team}</td>
                      <td className="px-6 py-4 text-sm text-[#6B7280]">{row.grid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <p className="mt-6 text-center text-sm text-[#9CA3AF]">
            Not sure which fits you?{' '}
            <Link
              href="/quiz"
              className="font-semibold underline text-black hover:text-[#4B5563] transition-colors"
            >
              Take the 2-minute quiz →
            </Link>
          </p>
        </Container>
      </section>

      {/* Team card previews */}
      <section className="py-20 sm:py-24 bg-[#F3F4F6]">
        <Container>
          <Reveal variant="clip">
            <div className="text-center">
              <h2
                className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Meet Our Teams
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#6B7280] sm:text-lg">
                Every team runs a different playbook. Find the one that fits your goals.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="scale" stagger={80}>
              {allTeams.map((team: Team) => (
                <div
                  key={team.slug}
                  className="group relative flex flex-col rounded-2xl bg-white border border-[#E5E7EB] hover:border-black transition-colors"
                >
                  {team.heroImage && (
                    <ImageReveal className="h-40 w-full rounded-t-2xl">
                      <Image
                        src={team.heroImage}
                        alt={team.name}
                        fill
                        className="object-cover rounded-t-2xl"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </ImageReveal>
                  )}
                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-4 flex items-center gap-4">
                      {team.logoImage ? (
                        <Image
                          src={team.logoImage}
                          alt={`${team.name} logo`}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-xl object-contain bg-[#F3F4F6] p-1"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F4F6] text-lg font-bold text-black">
                          {team.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h3
                          className="text-xl font-extrabold tracking-tight text-black"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {team.name}
                        </h3>
                        <p className="text-sm font-semibold text-[#6B7280]">
                          Led by {team.leader}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-[#6B7280]">{team.specialty}</p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-[#9CA3AF]">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                        {team.memberCount}
                      </span>
                      members
                    </div>

                    <div className="mt-auto pt-6">
                      <Link
                        href={`/teams/${team.slug}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white hover:bg-[#1a1a1a] transition-colors"
                      >
                        View Team Profile
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>

          <Reveal variant="up" delay={60}>
            <div className="mt-10 text-center">
              <Link
                href="/teams"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-black px-8 py-4 text-sm font-bold text-black hover:bg-black hover:text-white transition-colors"
              >
                See All Teams
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Dual CTA */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24">
        <Image src="/images/cta-apply-now-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="up">
              <div className="flex flex-col justify-center">
                <h2
                  className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Ready to Find Your Team?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#9CA3AF]">
                  Browse all active teams, compare specialties, and reach out directly to the team
                  leader who fits your goals.
                </p>
                <div className="mt-8">
                  <Link
                    href="/teams"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-black shadow-lg hover:bg-[#F3F4F6] transition-colors"
                  >
                    Browse All Teams
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3
                  className="text-2xl font-extrabold tracking-tight text-white"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Not Sure Which Path?
                </h3>
                <p className="mt-3 text-base text-[#9CA3AF]">
                  Answer 7 quick questions and we will match you to the right path — Team or Growth Network —
                  based on your experience, goals, and working style.
                </p>
                <div className="mt-6">
                  <Link
                    href="/quiz"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    Take the 2-Minute Quiz
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
