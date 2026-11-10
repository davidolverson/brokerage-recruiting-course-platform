'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'

interface FAQItem {
  question: string
  answer: string
}

const BRANCH_FAQS: FAQItem[] = [
  {
    question: 'What is a real estate branch?',
    answer:
      'A real estate branch is a local operating division within a larger brokerage. Acme Realty is a branch of Acme Realty. The branch provides local leadership, events, mentorship, and community — while agents benefit from the tools, commission structure, and global reach of Acme Realty as the brokerage.',
  },
  {
    question: 'What is the purpose of Acme Realty?',
    answer:
      'Acme Realty was built to serve Anytown-area agents who want more than a license and an MLS login. The branch focuses on investor-agent training, team building, and career development. We develop agents into investor-minded professionals who serve more clients, earn more income, and build real wealth.',
  },
  {
    question: 'Why does branch membership matter to an agent?',
    answer:
      'The brokerage provides the license. The branch provides mentorship, accountability, community, and education. At Acme Realty, you get local leadership that knows the Anytown market, monthly Growth Network investor events, deal mentorship from agents who have completed 100+ transactions, and a culture built around agent growth — not just transaction volume.',
  },
  {
    question: 'What is an Agent-Investor?',
    answer:
      'An agent-investor is a licensed real estate professional who also operates as a real estate investor. They represent investor clients, analyze deals with confidence, and often own investment properties themselves. Growth Network certification is the framework we use to train agent-investors at Acme Realty — covering deal analysis, investor financing, renovation management, and portfolio strategy.',
  },
  {
    question: 'How is Acme Realty different from a traditional brokerage?',
    answer:
      'Traditional brokerages focus primarily on residential transactions. Acme Realty is built around investor-agent education, team development, and the Growth Network certification program. We operate inside Acme Realty, which means agents get an industry-leading commission structure, revenue share, stock awards, and access to 40+ hours of weekly live training — layered on top of our local branch resources.',
  },
]

const RECRUITING_FAQS: FAQItem[] = [
  {
    question: 'How do I join Acme Realty?',
    answer:
      "You can apply directly at example.com/apply or book a branch tour at example.com/book-a-tour to meet the team before making a decision. If you're already licensed in Virginia, the process to join Acme Realty is straightforward — we walk you through every step during the tour.",
  },
  {
    question: 'What is the commission structure at Acme Realty?',
    answer:
      'Acme agents start at an 80/20 split and cap out at $15,000 per year. After you cap, you keep 100% of your commissions for the rest of the anniversary year (minus a small transaction fee). There is also a revenue share program where you earn passive income when agents you recruit produce. This is one of the most competitive models in the industry.',
  },
  {
    question: 'What is Growth Network and do I have to participate?',
    answer:
      "Growth Network stands for Growth, Relationships, Integrity, Development — it's an investor-agent certification and national network. At Acme Realty, Growth Network is central to our branch culture and events, but formal certification is not mandatory. That said, agents who complete Growth Network certification consistently outperform peers in deal volume and investor client representation. We strongly encourage it.",
  },
  {
    question: 'What Growth Network membership packages are available?',
    answer:
      'Growth Network offers tiered membership options including a standard agent membership that provides access to the certification curriculum, national referral network, and Growth Network deal analysis tools. Pricing and tiers are updated periodically — we review current options with every agent during onboarding. Ask us at the branch tour for the latest details.',
  },
  {
    question: 'Do I need prior investment experience to join Acme Realty?',
    answer:
      "No. Many of our best agents started with zero investment experience. The branch trains agents from the ground up using Growth Network certification and our monthly education events. What we look for is coachability, commitment, and a willingness to serve a higher level of client. Experience can be built — the right mindset is harder to teach.",
  },
  {
    question: 'Is there a mentorship program for new agents?',
    answer:
      'Yes. New agents are connected to experienced producers in the branch. Jane Agent, branch owner and 100+ transaction veteran, is directly involved in mentoring agents working their first investment deals. Alex Agent leads the #1 producing team and runs a structured coaching program for agents focused on production growth.',
  },
  {
    question: 'Can I keep my current team if I join Acme Realty?',
    answer:
      "Yes. Joining Acme Realty does not require you to dissolve your existing team. You bring your team with you. Acme Realty's model is specifically designed to accommodate and reward team-building — revenue share creates the incentive to build a team at Acme rather than a traditional split model.",
  },
  {
    question: 'What technology does Acme Realty provide?',
    answer:
      'Acme agents receive access to kvCORE (CRM and IDX website), the Acme virtual campus, Skyslope (transaction management), SkySlope Forms, and various productivity tools. The platform is cloud-based, which means you can work from anywhere in Virginia — or any other state where Acme operates.',
  },
]

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold leading-snug text-[#000000]">
          {item.question}
        </span>
        <span
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-150 ${
            isOpen ? 'bg-black text-white' : 'bg-[#F3F4F6] text-[#4B5563]'
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pb-5 text-sm leading-relaxed text-[#4B5563]">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openBranch, setOpenBranch] = useState<number | null>(null)
  const [openRecruiting, setOpenRecruiting] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-faq-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="clip">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty
              </p>
            </Reveal>
            <Reveal variant="clip" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Common Questions
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Straight answers about the branch, Growth Network, joining Acme, and building
                a career as an investor-agent in Anytown.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Branch FAQs */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <Reveal variant="clip">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  About the Branch
                </p>
              </Reveal>
              <Reveal variant="clip" delay={60}>
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#000000] md:text-3xl">
                  Branch &amp; Model
                </h2>
              </Reveal>
              <Reveal variant="up" delay={120}>
                <p className="text-sm leading-relaxed text-[#4B5563]">
                  What Acme Realty is, why we built it, and how the branch model differs
                  from a traditional brokerage.
                </p>
              </Reveal>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white px-8">
              <RevealStagger variant="up" baseDelay={0} stagger={60}>
                {BRANCH_FAQS.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    item={item}
                    isOpen={openBranch === idx}
                    onToggle={() => setOpenBranch(openBranch === idx ? null : idx)}
                  />
                ))}
              </RevealStagger>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="border-y border-[#E5E7EB] bg-[#F3F4F6]">
        <Container>
          <div className="py-10" />
        </Container>
      </div>

      {/* Recruiting FAQs */}
      <section className="bg-[#F3F4F6] py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <Reveal variant="clip">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                  Joining Acme Realty
                </p>
              </Reveal>
              <Reveal variant="clip" delay={60}>
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#000000] md:text-3xl">
                  Recruiting &amp; Membership
                </h2>
              </Reveal>
              <Reveal variant="up" delay={120}>
                <p className="text-sm leading-relaxed text-[#4B5563]">
                  How to join, what Growth Network membership looks like, commission structure,
                  and what to expect in your first 90 days.
                </p>
              </Reveal>
              <Reveal variant="up" delay={180}>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1a1a1a]"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/book-a-tour"
                    className="inline-flex items-center justify-center rounded-md border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-semibold text-[#000000] transition-colors duration-150 hover:border-black"
                  >
                    Book a Tour
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white px-8">
              <RevealStagger variant="up" baseDelay={0} stagger={50}>
                {RECRUITING_FAQS.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    item={item}
                    isOpen={openRecruiting === idx}
                    onToggle={() => setOpenRecruiting(openRecruiting === idx ? null : idx)}
                  />
                ))}
              </RevealStagger>
            </div>
          </div>
        </Container>
      </section>

      {/* Still have questions */}
      <section className="bg-black py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Still have questions?
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Book a 30-minute branch tour and ask the branch leadership directly. No pressure, no pitch.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Link
                  href="/book-a-tour"
                  className="inline-flex items-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
