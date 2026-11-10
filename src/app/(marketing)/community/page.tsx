import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
const MISSION_POINTS = [
  {
    title: 'Growth-First Culture',
    body: 'This branch was built to grow agent careers. Every event, every resource, and every mentorship conversation is designed to help you recruit, retain, and produce — not just close the next deal.',
  },
  {
    title: 'Investor-Agent Framework',
    body: 'Most Anytown agents leave investor business on the table. We train every agent to understand deal structures, speak the language with investors, and earn that referral before a national team does.',
  },
  {
    title: 'Community Over Competition',
    body: "Deal breakdowns, agent wins, market moves — everything goes into the group. We share what works because a stronger branch makes every agent here more competitive outside of it.",
  },
]

const LEADERSHIP = [
  {
    name: 'Jane Agent',
    title: 'Community & Leadership — Acme Realty',
    background:
      "Placeholder leader bio. Describe your branch leader's background and why they built the branch. Replace this with real copy you have permission to publish.",
    highlights: [
      'Demo highlight one',
      'Demo highlight two',
      'Branch founder — 123 Main Street',
    ],
    initial: 'J',
  },
]

const CULTURE_ITEMS = [
  {
    title: 'Accountability Culture',
    body: 'Weekly check-ins, deal reviews, and production tracking. We celebrate wins loud and address challenges fast — no one gets left behind quietly.',
  },
  {
    title: 'Open Knowledge Sharing',
    body: 'Deal structures, market analysis, lead sources, vendor relationships — everything is on the table. Knowledge hoarding is not welcome here.',
  },
  {
    title: 'Anytown-First Mindset',
    body: 'We study the Anytown market obsessively — neighborhood by neighborhood, price band by price band. Local depth is our edge against out-of-market teams.',
  },
  {
    title: 'Mentorship Pipeline',
    body: 'New agents are paired with experienced producers. The learning curve collapses when someone who has already made the mistakes walks you through the minefields.',
  },
]

const LOCAL_PROOF = [
  { label: 'Investment transactions completed', value: '100+', numeric: true },
  { label: 'Years in Anytown market', value: '15+', numeric: true },
  { label: 'Global Acme agent network', value: '10,000+', numeric: true },
  { label: 'Brokered by', value: 'Acme Realty', numeric: false },
]

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/hero-community-v2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="clip">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty
              </p>
            </Reveal>
            <Reveal variant="clip" delay={60}>
              <h1
                className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Anytown Roots, Global Reach
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                A branch built by investors, for agents who want more than a split and a
                desk. Deep Anytown roots. The reach of Acme&rsquo;s 10,000-agent global network.
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book-a-tour"
                  className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/apply"
                  className="inline-flex items-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Apply Now
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission / Branch Story */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal variant="up">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Our Mission
                </p>
                <h2
                  className="mb-5 text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Why We Built This Branch
                </h2>
                <p className="mb-5 text-base leading-relaxed text-[#4B5563]">
                  Most real estate offices focus on transactions. We focus on agent
                  development. Acme Realty was built as a growth-first branch - a
                  place where agents come to grow careers, not just collect checks.
                </p>
                <p className="mb-5 text-base leading-relaxed text-[#4B5563]">
                  We identified a clear gap in the Anytown market: agents who wanted to
                  serve investors had no structured path. No training, no mentor, no
                  framework. Growth Network closed that gap. We became a certified Growth Network chapter
                  and built every event, every mentorship conversation, and every resource
                  around it.
                </p>
                <p className="text-base leading-relaxed text-[#4B5563]">
                  The deal is simple: if you commit to learning, we commit to your growth.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-5">
              <RevealStagger variant="up" baseDelay={80} stagger={100}>
                {MISSION_POINTS.map((point) => (
                  <div
                    key={point.title}
                    className="flex gap-4 rounded-xl border border-[#E5E7EB] bg-white p-6"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6]">
                      <div className="h-2 w-2 rounded-full bg-black" />
                    </div>
                    <div>
                      <h3
                        className="mb-1 text-base font-bold text-[#000000]"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {point.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#4B5563]">{point.body}</p>
                    </div>
                  </div>
                ))}
              </RevealStagger>
            </div>
          </div>
        </Container>
      </section>

      {/* Anytown Local Proof */}
      <section className="bg-[#F3F4F6] py-14 md:py-20">
        <Container>
          <Reveal variant="up">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Local Presence
              </p>
              <h2
                className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Built in Anytown. For Anytown.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            <RevealStagger variant="scale" stagger={80}>
              {LOCAL_PROOF.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-8 text-center"
                >
                  {item.numeric ? (
                    <CountUp
                      value={item.value}
                      className="mb-2 text-2xl font-extrabold leading-tight text-[#000000]"
                    />
                  ) : (
                    <span className="mb-2 text-2xl font-extrabold leading-tight text-[#000000]">
                      {item.value}
                    </span>
                  )}
                  <p className="text-sm text-[#4B5563]">{item.label}</p>
                </div>
              ))}
            </RevealStagger>
          </div>

          <div className="mt-8">
            <ImageReveal className="overflow-hidden rounded-xl">
              <img
                src="/images/office-interior.jpeg"
                alt="Interior of the Acme Realty branch office at 123 Main Street, Anytown"
                className="h-64 w-full object-cover sm:h-80"
                loading="lazy"
              />
            </ImageReveal>
          </div>

          <Reveal variant="up" delay={80}>
            <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                    Branch Location
                  </p>
                  <h3
                    className="mb-3 text-xl font-extrabold text-[#000000]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Acme Realty &mdash; Anytown
                  </h3>
                  <address className="not-italic text-[#4B5563]">
                    <p className="text-base leading-relaxed">
                      123 Main Street<br />
                      Anytown, VA 00000
                    </p>
                    <p className="mt-2 text-sm">
                      <a
                        href="tel:+15550100100"
                        className="text-[#000000] underline transition-colors hover:text-[#4B5563]"
                      >
                        (555) 010-0100
                      </a>
                    </p>
                    <p className="mt-1 text-sm">
                      <a
                        href="mailto:agent@example.com"
                        className="text-[#000000] underline transition-colors hover:text-[#4B5563]"
                      >
                        agent@example.com
                      </a>
                    </p>
                    <p className="mt-2 text-sm text-[#9CA3AF]">Mon–Fri &nbsp;9AM – 5PM</p>
                  </address>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <p className="text-sm text-[#4B5563] md:text-right">
                    Brokered by Acme Realty &mdash; an Equal Housing Opportunity Brokerage
                  </p>
                  <Link
                    href="/book-a-tour"
                    className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1F2937]"
                  >
                    Book a Tour
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Leadership Spotlight */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal variant="up">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Leadership
              </p>
              <h2
                className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                The Person Behind the Branch
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto max-w-xl">
            <RevealStagger variant="scale" stagger={120}>
              {LEADERSHIP.map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-xl font-extrabold text-white">
                      {leader.initial}
                    </div>
                    <div>
                      <h3
                        className="text-xl font-extrabold leading-snug text-[#000000]"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {leader.name}
                      </h3>
                      <p className="text-sm font-medium text-[#4B5563]">{leader.title}</p>
                    </div>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-[#4B5563]">
                    {leader.background}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {leader.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2">
                        <div
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[#4B5563]">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Culture */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <Reveal variant="up">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                How We Operate
              </p>
              <h2
                className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                The Culture We&rsquo;ve Built
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#4B5563]">
                Culture isn&rsquo;t what you say on a website. It&rsquo;s what happens in Monday
                meetings and on the hard deal calls at 9PM.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <RevealStagger variant="scale" stagger={70}>
              {CULTURE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F3F4F6]">
                    <div className="h-3 w-3 rounded-full bg-black" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-base font-bold text-[#000000]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{item.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>

          {/* Growth Network Online Communities */}
          <Reveal variant="up" delay={100}>
            <div className="mt-10 rounded-xl border border-[#E5E7EB] bg-white p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                    Beyond the Branch
                  </p>
                  <h3
                    className="mb-3 text-xl font-extrabold text-[#000000]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Growth Network Online Community
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">
                    As an Acme Realty agent, you get access to the Growth Network Online Community
                    — a national network of investor-focused agents sharing deals,
                    strategies, and market analysis. Growth Network Pro members unlock a second tier:
                    exclusive mastermind access, advanced training content, and direct
                    mentorship from top-producing investor-agents across the country.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <p className="text-sm text-[#4B5563] md:text-right">
                    Local culture backed by a national investor-agent network.
                  </p>
                  <Link
                    href="/network"
                    className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1F2937]"
                  >
                    Learn About Growth Network
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-black py-16 md:py-20">
        <Image src="/images/cta-community-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2
                  className="text-2xl font-extrabold text-white md:text-3xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Come see the culture firsthand.
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Tour the branch at 123 Main Street, meet Jane, and
                  see if this is your next home.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <Link
                href="/book-a-tour"
                className="shrink-0 inline-flex items-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
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
