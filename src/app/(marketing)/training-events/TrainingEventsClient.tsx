'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import {
  events,
  monthlyEvents,
  upcomingFeaturedEvents,
  googleCalendarUrl,
} from '@/lib/data/events'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { TrainingCalendar } from './TrainingCalendar'

const NETWORK_PILLARS = [
  {
    num: '01',
    title: 'Investor Identification',
    body: 'Spot investor-minded clients, qualify motivated sellers, and build a deal pipeline that never runs dry.',
  },
  {
    num: '02',
    title: 'Market Analysis',
    body: 'Underwrite deals with confidence using ARV, cap rate, cash-on-cash return, and Anytown-specific comps.',
  },
  {
    num: '03',
    title: 'Investor Financing',
    body: 'Navigate the full lending landscape — conventional, portfolio, DSCR, hard money, and private capital.',
  },
  {
    num: '04',
    title: 'Renovation Management',
    body: 'Scope rehabs, build contractor relationships, manage timelines, and protect your margin from start to close.',
  },
  {
    num: '05',
    title: 'Disposition Strategies',
    body: 'Wholesale, fix-and-flip, BRRR, and turnkey rentals. Match the right exit to the right asset.',
  },
  {
    num: '06',
    title: 'Building a Team',
    body: 'Scale from solo investor-agent to team leader with systems, referral networks, and a repeatable model.',
  },
]

const EXP_STATS = [
  { stat: '80+', label: 'Live training hours per week' },
  { stat: '20+', label: 'the Acme virtual campus classrooms' },
  { stat: '365', label: 'Days per year, on demand' },
  { stat: '10000+', label: 'Global agent community', display: '10K+' },
]

/** "June 1–2" / "June 1 – July 2" / "June 1", derived from the event's own dates. */
function formatFeaturedRange(ev: { datetimeStart: string; datetimeEnd?: string }): string {
  const start = new Date(ev.datetimeStart)
  if (Number.isNaN(start.getTime())) return ev.datetimeStart
  const month = (d: Date) => d.toLocaleDateString('en-US', { month: 'long' })
  const end = ev.datetimeEnd ? new Date(ev.datetimeEnd) : null

  if (!end || Number.isNaN(end.getTime())) return `${month(start)} ${start.getDate()}`
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return start.getDate() === end.getDate()
      ? `${month(start)} ${start.getDate()}`
      : `${month(start)} ${start.getDate()}–${end.getDate()}`
  }
  return `${month(start)} ${start.getDate()} – ${month(end)} ${end.getDate()}`
}

export function TrainingEventsClient() {
  // the Annual Summit 2026 ran June 1-2 and this banner still read "Save the Date" in
  // August, because the date was hardcoded in the copy with nothing checking
  // it. isUpcoming is shared with both JSON-LD emitters so the three cannot
  // disagree again; next year's date is a one-line change in lib/data/events.
  const summit = upcomingFeaturedEvents()[0]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-training-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="clip">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty
              </p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Training &amp; Events
              </h1>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Growth Network-powered investor education meets 80+ weekly hours of live Acme training.
                Master the Anytown market — and build a career beyond it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book-a-tour"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <a
                  href="#upcoming-events"
                  className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  See Upcoming Events
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Example Investor Team interactive training & events calendar (DB-backed, RSVP + subscribe) */}
      <TrainingCalendar />

      {/* the Annual Summit Banner — featured event */}
      {summit && (() => {
        const calUrl = googleCalendarUrl(summit)
        return (
          <div className="bg-[#000000]">
            <Container>
              <Reveal variant="up">
                <div className="flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                      Save the Date
                    </p>
                    <p className="text-lg font-extrabold text-white">
                      {summit.title} &mdash; {formatFeaturedRange(summit)} &middot; {summit.location}
                    </p>
                    <p className="text-sm text-[#9CA3AF]">
                      {summit.summary}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    {calUrl && (
                      <a
                        href={calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                        </svg>
                        Add to Calendar
                      </a>
                    )}
                    <a
                      href={summit.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center rounded-md border-2 border-white px-6 py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-white hover:text-black"
                    >
                      {summit.registrationCta}
                    </a>
                  </div>
                </div>
              </Reveal>
            </Container>
          </div>
        )
      })()}

      {/* Upcoming Events */}
      <section id="upcoming-events" className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <Reveal variant="clip">
            <div className="mb-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Growth Network Anytown
              </p>
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Recurring Growth Network Training
              </h2>
              <p className="mb-3 max-w-xl text-base text-[#4B5563]">
                Ongoing investor education through the Growth Network national calendar, open to every
                Acme Realty agent. Dated branch and Example Investor Team events are on the calendar above.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <RevealStagger variant="scale" stagger={80}>
              {monthlyEvents.map((event) => {
                const calUrl = googleCalendarUrl(event)
                const displayDate = event.datetimeStart
                return (
                  <div
                    key={event.slug}
                    className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                        {event.tag}
                      </span>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#000000]">{displayDate}</p>
                        {event.time && (
                          <p className="text-xs text-[#9CA3AF]">{event.time}</p>
                        )}
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-extrabold leading-snug text-[#000000]">
                      {event.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-[#4B5563]">
                      {event.summary}
                    </p>
                    <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 shrink-0 text-[#9CA3AF]"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-xs text-[#9CA3AF]">{event.location}</p>
                      </div>
                      {calUrl && (
                        <a
                          href={calUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#4B5563] hover:text-black transition-colors"
                        >
                          Add to Calendar
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </RevealStagger>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://example.com/meetup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-black px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#000000]"
            >
              Register on Meetup
            </a>
          </div>
        </Container>
      </section>

      {/* Recurring Weekly Events */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal variant="clip">
            <div className="mb-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Growth Network Calendar
              </p>
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Recurring Weekly Events
              </h2>
              <p className="max-w-xl text-base text-[#4B5563]">
                Consistent education every week through the Growth Network national training calendar. Open to all Acme Realty agents.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            <RevealStagger variant="scale" stagger={80}>
              {[
                {
                  title: 'Tactics Training',
                  schedule: 'Every Tuesday',
                  time: '8:30 – 9:15 AM ET',
                  description:
                    'Free weekly training open to all Growth Network agents. Tactical, hands-on sessions covering deal analysis, negotiation, and investor strategies.',
                  badge: 'Free',
                },
                {
                  title: 'Wealth Mastermind',
                  schedule: 'Every Wednesday',
                  time: '8:30 – 9:15 AM ET',
                  description:
                    'Exclusive to Growth Network Pro members. Deep-dive sessions on wealth building, advanced investment strategies, and portfolio scaling.',
                  badge: 'Growth Network Pro',
                },
                {
                  title: 'Growth Network Webinars',
                  schedule: '3rd Wednesday of Every Month',
                  time: '3:00 – 4:00 PM ET',
                  description:
                    'Monthly live webinars featuring expert speakers, market updates, and advanced investor-agent education from the national Growth Network network.',
                  badge: 'Monthly',
                },
              ].map((event) => (
                <div
                  key={event.title}
                  className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                      {event.badge}
                    </span>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#000000]">{event.schedule}</p>
                      <p className="text-xs text-[#9CA3AF]">{event.time}</p>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold leading-snug text-[#000000]">
                    {event.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#4B5563]">
                    {event.description}
                  </p>
                </div>
              ))}
            </RevealStagger>
          </div>

          <Reveal variant="up" delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://example.com/calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-black px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#000000]"
              >
                View Full Growth Network Calendar
              </a>
              <a
                href="https://example.com/meetups"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-black/30 px-7 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:border-black hover:bg-black/5"
              >
                Find Local Growth Network Meetups
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Growth Network Certification */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal variant="clip">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Certification Program
                </p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                  Become Growth Network Certified
                </h2>
              </Reveal>
              <Reveal variant="up" delay={80}>
                <p className="mb-5 text-base leading-relaxed text-[#4B5563]">
                  Growth Network (Growth, Relationships, Integrity, Development) is the investor-agent
                  certification that gives you a framework, a credential, and a national network.
                  Acme Realty is a designated Growth Network chapter — certification is available to every agent in the branch.
                </p>
                <p className="mb-8 text-base leading-relaxed text-[#4B5563]">
                  Certified agents represent investors with confidence, underwrite deals accurately,
                  and connect clients to vetted financing partners — while earning referrals from
                  the broader Growth Network national network.
                </p>
                <Link
                  href="/network"
                  className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#000000]"
                >
                  Learn About Growth Network
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <RevealStagger variant="scale" stagger={60}>
                {NETWORK_PILLARS.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="rounded-xl border border-[#E5E7EB] bg-white p-5"
                  >
                    <span
                      className="mb-3 block text-2xl font-extrabold leading-none text-[#000000] opacity-20"
                      aria-hidden="true"
                    >
                      {pillar.num}
                    </span>
                    <h3 className="mb-1.5 text-sm font-bold text-[#000000]">{pillar.title}</h3>
                    <p className="text-xs leading-relaxed text-[#4B5563]">{pillar.body}</p>
                  </div>
                ))}
              </RevealStagger>
            </div>
          </div>
        </Container>
      </section>

      {/* Acme Training Platform */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <Reveal variant="clip">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty Platform
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Live Training Every Day of the Year
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#4B5563]">
                As an Acme agent you get the most comprehensive live training platform in real estate —
                running 40+ hours per week, 365 days a year.
              </p>
            </div>
          </Reveal>

          <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {EXP_STATS.map((item) => (
              <Reveal key={item.stat} variant="scale">
                <div className="flex flex-col items-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-8 text-center">
                  <CountUp
                    value={item.display ?? item.stat}
                    className="mb-2 text-4xl font-extrabold text-[#000000]"
                  />
                  <p className="text-sm text-[#4B5563]">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={80}>
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: 'Live Daily Classes',
                    body: 'Buyer consultations, listing presentations, contract-to-close, objection handling, and advanced investment strategies — live every weekday.',
                  },
                  {
                    title: 'On-Demand Library',
                    body: "Thousands of recorded sessions covering every stage of an agent's career. Watch on your schedule, rewatch at your pace.",
                  },
                  {
                    title: 'the Acme virtual campus Campus',
                    body: 'A virtual 3D campus with 20+ dedicated classrooms, agent services, collaboration rooms, and direct access to leadership.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="mb-2 text-base font-bold text-[#000000]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#4B5563]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-black py-16 md:py-20">
        <Image src="/images/cta-training-events-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <Reveal variant="up">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Tour the branch and get on the events list.
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Meet the mentors, walk through what Growth Network certification covers, and see the training calendar firsthand.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Link
                  href="/book-a-tour"
                  className="inline-flex items-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/apply"
                  className="inline-flex items-center rounded-md border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
