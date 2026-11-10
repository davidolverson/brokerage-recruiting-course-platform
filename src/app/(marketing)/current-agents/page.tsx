'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

const RESOURCE_SECTIONS = [
  {
    title: 'Training & Live Classes',
    description: 'Access the full Acme Realty training calendar, the Acme virtual campus campus, on-demand library, and weekly Growth Network sessions.',
    links: [
      { label: 'the Acme virtual campus Training Schedule', href: 'https://example.com/', external: true, note: 'the Acme virtual campus campus — log in with your Acme credentials' },
      { label: 'Growth Network Certification Portal', href: 'https://example.com/', external: true, note: 'Growth Network member portal — certification and investor tools' },
      { label: 'Tactics Training Training', href: 'https://example.com/calendar', external: true, note: 'Weekly live Growth Network training — tactics, scripts, and deal breakdowns' },
      { label: 'Wealth Masterminds', href: 'https://example.com/calendar', external: true, note: 'Weekly mastermind for investor-agents — wealth-building strategies' },
      { label: 'Monthly Branch Events', href: '/training-events', external: false, note: 'Public training calendar' },
    ],
  },
  {
    title: 'Transactions & Operations',
    description: 'SkySlope, TC support resources, and streamlined transaction tools.',
    links: [
      { label: 'SkySlope Login', href: 'https://app.skyslope.com/', external: true, note: 'Agent login — credentials from onboarding' },
      { label: 'Virginia REALTORS Forms', href: 'https://virginiarealtors.org/legal-resources/standard-forms/', external: true, note: 'Official Virginia REALTORS forms and disclosures' },
      { label: 'Branch Operations Contact', href: 'mailto:agent@example.com', external: true, note: 'TC support and operations questions — contact Jane' },
    ],
  },
  {
    title: 'Preferred Partner Contacts',
    description: 'Vetted mortgage, title, and property management partners inside the branch ecosystem.',
    links: [
      { label: 'Example Lending Partner', href: '/teams/example-lending-partner', external: false, note: 'DSCR & conventional lending partner' },
      { label: 'Example Title Partner', href: '/teams/example-title-partner', external: false, note: 'Settlement & title partner' },
      { label: 'All Partners', href: '/partners', external: false, note: 'Full partner directory and sponsorship program' },
    ],
  },
  {
    title: 'Growth Network Member Resources',
    description: 'Exclusive programs and certifications included with your Growth Network Pro membership — free for all Growth Network agents.',
    links: [
      { label: 'Growth Network Pro Membership', href: 'https://example.com/pro', external: true, note: 'Free for Growth Network agents — full access to all Growth Network training and tools' },
      { label: 'Agent-Investor Certification', href: 'https://example.com/', external: true, note: 'Investor-agent certification — stand out to investor clients' },
      { label: 'Growth Network Full Calendar', href: 'https://example.com/calendar', external: true, note: 'All weekly and monthly Growth Network events in one view' },
      { label: 'Growth Network Anytown Meetup', href: 'https://example.com/meetup', external: true, note: 'Local in-person events and networking' },
      { label: 'National Growth Network Meetups', href: 'https://example.com/meetups', external: true, note: 'Find Growth Network chapters and events across the country' },
    ],
  },
  {
    title: 'Agent Support',
    description: 'Acme Realty agent services, compliance support, and branch leadership contact.',
    links: [
      { label: 'Acme Enterprise', href: 'https://enterprise.example.com/', external: true, note: 'Acme Realty agent services and support portal' },
      { label: 'Contact Jane (Branch Owner)', href: 'mailto:agent@example.com', external: true, note: 'agent@example.com' },
      { label: 'Branch Phone', href: 'tel:+15550100100', external: false, note: '(555) 010-0100' },
    ],
  },
]

const QUICK_LINKS = [
  { label: 'Training & Events', href: '/training-events', desc: 'Monthly Growth Network events and the full Acme training calendar' },
  { label: 'Growth Network Program', href: '/network', desc: 'Growth Network Pro membership, investor certification, and national referral network' },
  { label: 'Agent Advantage', href: '/agent-advantage', desc: 'The full ecosystem — TC support, partners, education' },
  { label: 'Education Hub', href: '/education', desc: 'Investor education articles and market insights' },
  { label: 'Community', href: '/community', desc: 'Branch story, leadership, and culture overview' },
  { label: 'FAQ', href: '/faq', desc: 'Common questions about the branch and Acme model' },
]

export default function CurrentAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/hero-agents-v2.jpeg"
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
                Agent Resources
              </h1>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Everything active Acme Realty agents need in one place — training access, tools,
                partner contacts, and direct support links.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Login notice */}
      <div className="border-b border-[#E5E7EB] bg-[#F3F4F6]">
        <Container>
          <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 h-5 w-5 shrink-0 text-[#000000]"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-[#4B5563]">
                <strong className="text-[#000000]">Heads up:</strong> The dedicated agent login portal is in development.
                Use the resource links below and contact Jane for anything not yet listed.
              </p>
            </div>
            <a
              href="mailto:agent@example.com"
              className="shrink-0 text-sm font-semibold text-[#000000] underline transition-colors hover:text-[#4B5563]"
            >
              Email Jane
            </a>
          </div>
        </Container>
      </div>

      {/* Quick Links Grid */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mb-8">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Navigate
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#000000] md:text-3xl">
                Quick Links
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="up" stagger={60}>
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-4 rounded-xl border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-md"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-[#000000]"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-0.5 text-sm font-bold text-[#000000] transition-colors duration-150 group-hover:text-black">
                      {item.label}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#4B5563]">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Resource Sections */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Tools &amp; Access
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Resource Directory
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mt-2 max-w-xl text-base text-[#4B5563]">
                Links and contacts organized by function. Bookmark this page for day-to-day access.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <RevealStagger variant="up" stagger={80}>
              {RESOURCE_SECTIONS.map((section) => (
                <div key={section.title} className="rounded-xl border border-[#E5E7EB] bg-white p-7">
                  <span className="mb-3 inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                    {section.title}
                  </span>
                  <p className="mb-5 text-sm leading-relaxed text-[#4B5563]">{section.description}</p>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => {
                      const Comp = link.external ? 'a' : Link
                      const extraProps = link.external
                        ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                        : {}
                      return (
                        <li key={link.label}>
                          <Comp
                            href={link.href}
                            {...extraProps}
                            className="group flex items-start gap-3"
                          >
                            <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden="true" />
                            <div>
                              <span className="text-sm font-semibold text-[#000000] transition-colors duration-150 group-hover:underline">
                                {link.label}
                              </span>
                              {link.note && (
                                <p className="mt-0.5 text-xs text-[#9CA3AF]">{link.note}</p>
                              )}
                            </div>
                          </Comp>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Contact / Support */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Direct contact */}
            <Reveal variant="up">
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-8">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Branch Leadership
                </p>
                <h3 className="mb-4 text-xl font-extrabold text-[#000000]">Direct Support</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-extrabold text-white">
                      D
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#000000]">Jane Agent</p>
                      <p className="text-xs text-[#4B5563]">Branch Owner &middot; Mentor</p>
                      <a
                        href="mailto:agent@example.com"
                        className="text-xs text-[#000000] underline transition-colors hover:text-[#4B5563]"
                      >
                        agent@example.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="tel:+15550100100"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#000000] transition-colors hover:text-[#4B5563]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                    (555) 010-0100
                  </a>
                  <address className="not-italic text-sm text-[#4B5563]">
                    123 Main Street<br />
                    Anytown, VA 00000
                  </address>
                </div>
              </div>
            </Reveal>

            {/* Phase 2 notice */}
            <Reveal variant="up" delay={120}>
              <div className="flex h-full flex-col justify-between rounded-xl border-2 border-dashed border-[#E5E7EB] bg-[#F3F4F6] p-8">
                <div>
                  <span className="inline-block rounded-full bg-[#F3F4F6] border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                    Coming in Phase 2
                  </span>
                  <h3 className="mb-3 mt-4 text-xl font-extrabold text-[#000000]">
                    Agent Login Portal
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#4B5563]">
                    A dedicated secure portal is being built for Acme Realty agents, including:
                  </p>
                  <ul className="mb-6 flex flex-col gap-2">
                    {[
                      'Single sign-on with Acme credentials',
                      'Branch deal tracker and submission',
                      'Private Growth Network study materials',
                      'Mentor session booking',
                      'Internal announcements and updates',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden="true" />
                        <span className="text-sm text-[#4B5563]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-semibold text-[#000000] transition-colors duration-150 hover:border-black"
                >
                  Request Early Access
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
