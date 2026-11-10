'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { ImageReveal } from '@/components/ui/ImageReveal'

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/hero-success-v2.jpeg"
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
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Success Stories
              </h1>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Real agents. Real deals. Real careers built from the ground up at Acme Realty.
              </p>
            </Reveal>
            <Reveal variant="up" delay={220}>
              <div className="mt-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Start Your Story
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Featured Case Study */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Featured Case Study
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                A Real Deal, A Real Win
              </h2>
            </Reveal>
          </div>

          <Reveal variant="up" delay={80}>
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#000000] bg-[#F3F4F6] p-8 md:p-12">
              <ImageReveal className="mb-8 rounded-xl">
                <img
                  src="/images/investment-property.jpeg"
                  alt="Placeholder image of a renovated investment property"
                  className="h-56 w-full object-cover sm:h-72"
                  loading="lazy"
                />
              </ImageReveal>

              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <Reveal variant="up" delay={60}>
                  <div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#F3F4F6] border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                        Fix &amp; Flip
                      </span>
                      <span className="inline-flex items-center rounded-full bg-[#F3F4F6] border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                        Verified
                      </span>
                    </div>
                    <h3 className="mb-1 text-2xl font-extrabold text-[#000000]">
                      Demo Investor
                    </h3>
                    <p className="mb-4 text-base font-semibold text-[#4B5563]">
                      123 Example Street, Anytown, VA
                    </p>
                    <p className="mb-5 text-base leading-relaxed text-[#4B5563]">
                      Demo case study. Describe a deal an agent completed with branch mentorship:
                      the property, the strategy, and the outcome. Replace this with a real story
                      you have permission to publish.
                    </p>
                    <p className="text-base leading-relaxed text-[#4B5563]">
                      This deal is what the branch mentorship model is built to produce: an
                      agent-investor who can evaluate a deal, execute a renovation, and close with
                      confidence — with an experienced mentor in their corner.
                    </p>
                  </div>
                </Reveal>

                <div className="flex flex-col gap-4">
                  <RevealStagger variant="up" baseDelay={80} stagger={80}>
                    {[
                      {
                        label: 'Property',
                        value: '123 Example Street',
                        sub: 'Anytown, Virginia',
                      },
                      {
                        label: 'Strategy',
                        value: 'Fix & Flip',
                        sub: 'Acquisition → Rehab → Sale',
                      },
                      {
                        label: 'Mentor',
                        value: 'Jane Agent',
                        sub: 'Branch mentor',
                      },
                    ].map((card) => (
                      <div key={card.label} className="rounded-xl border border-[#E5E7EB] bg-white p-6">
                        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                          {card.label}
                        </p>
                        <p className="text-xl font-extrabold text-[#000000]">{card.value}</p>
                        <p className="text-sm text-[#4B5563]">{card.sub}</p>
                      </div>
                    ))}
                  </RevealStagger>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Branch Highlights */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <Reveal variant="clip">
            <div className="mb-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Verified Results
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Branch Highlights
              </h2>
              <p className="mt-3 max-w-xl text-base text-[#4B5563]">
                Demo highlights. Replace with verified numbers from your own teams.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="scale" stagger={80}>
              {[
                {
                  team: 'Example Residential Team',
                  headline: 'Demo Headline',
                  body: 'Placeholder highlight for a production team. Replace with a verified result.',
                  tags: ['Production'],
                },
                {
                  team: 'Example Investor Team',
                  headline: 'Demo Headline',
                  body: 'Placeholder highlight for an investor-focused team. Replace with a verified result.',
                  tags: ['Fix & Flip', 'Mentorship'],
                },
                {
                  team: 'Example Lending Partner',
                  headline: 'Demo Headline',
                  body: 'Placeholder highlight for a lending partner. Replace with a verified result.',
                  tags: ['Lending'],
                },
                {
                  team: 'Example Title Partner',
                  headline: 'Demo Headline',
                  body: 'Placeholder highlight for a title partner. Replace with a verified result.',
                  tags: ['Settlement'],
                },
              ].map((highlight) => (
                <div
                  key={highlight.team}
                  className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">
                    {highlight.team}
                  </p>
                  <h3 className="mb-3 text-xl font-extrabold text-[#000000]">
                    {highlight.headline}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#4B5563]">
                    {highlight.body}
                  </p>
                  <div className="flex flex-wrap gap-2 border-t border-[#E5E7EB] pt-4">
                    {highlight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#4B5563]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>

          <Reveal variant="up" delay={120}>
            <div className="mt-10 text-center">
              <Link
                href="/teams"
                className="inline-flex items-center gap-2 rounded-md bg-black px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1F2937]"
              >
                Meet All Teams
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Your Story CTA */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal variant="clip">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Your Turn
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl">
                Ready to Write Your Own Success Story?
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4B5563]">
                Every agent featured here started exactly where you are now. The mentorship,
                the network, and the deals are waiting &mdash; you just have to show up.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center rounded-md bg-[#000000] px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1F2937]"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-[#000000] px-7 py-3 text-sm font-semibold text-[#000000] transition-colors duration-150 hover:bg-[#000000] hover:text-white"
                >
                  Share Your Win
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-[#E5E7EB] bg-white py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-10 text-center">
            <RevealStagger variant="scale" stagger={80}>
              {[
                { value: '100+', label: 'Demo stat: investment transactions', isCount: true },
                { value: 'Growth Network', label: 'Certified chapter in Anytown', isCount: false },
                { value: '1,000+', label: 'Demo stat: agent network', isCount: true },
                { value: '#1', label: 'Demo stat: top producing team', isCount: false },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  {item.isCount ? (
                    <CountUp
                      value={item.value}
                      className="text-3xl font-extrabold text-[#000000]"
                    />
                  ) : (
                    <span className="text-3xl font-extrabold text-[#000000]">{item.value}</span>
                  )}
                  <p className="max-w-[180px] text-xs text-[#4B5563]">{item.label}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-black py-16 md:py-20">
        <Image src="/images/cta-success-stories-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Ready to write your story?
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Apply to Acme Realty and get the framework, mentorship, and network to build a career worth talking about.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Apply Now
                </Link>
                <Link
                  href="/book-a-tour"
                  className="inline-flex items-center rounded-md border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Book a Tour First
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
