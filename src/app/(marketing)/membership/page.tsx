import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { MembershipCta } from '@/components/billing/MembershipCta'
import { membershipView } from '@/lib/billing/view'

/**
 * Demo membership offer. Replace every figure and line item below with your
 * own. Pricing lives here: if it changes, change it here; nothing else reads it.
 */
const COST = [
  { label: 'Monthly', value: '$99', unit: 'per month' },
  { label: 'Transaction fee', value: '$500', unit: 'per transaction' },
]

const SPACE = [
  'Conference rooms',
  'Common workspaces',
  'Training room / event space',
  'Kitchen',
  'Printing',
  'Wifi',
]

const EVENTS = [
  { title: 'Weekly training', body: 'A standing session every week.' },
  { title: 'Weekly lead gen', body: 'A dedicated lead generation session each week.' },
  { title: 'Pop-up training calendar', body: 'Extra sessions added as topics and guests come up.' },
  { title: 'Monthly large-scale rally', body: 'The whole branch together, once a month.' },
  { title: 'LAUNCH new agent training', body: 'The structured onboarding track for new agents.' },
  { title: 'Social events', body: 'Branch socials through the year.' },
  { title: 'AI', body: 'Sessions on using AI in day-to-day real estate work.' },
]

const SUPPORT = [
  {
    title: 'Transaction coordination',
    body: 'Affordable transaction coordination through a group rate, included with membership.',
  },
  {
    title: 'Vendor list',
    body: 'The lenders, title, and service partners the branch works with.',
  },
  {
    title: 'Broker and branch leadership support',
    body: 'Direct access to broker support and branch leadership.',
  },
  {
    title: 'Branch communication',
    body: 'The branch Facebook group and the WhatsApp text thread.',
  },
]

export default async function MembershipPage() {
  const billing = await membershipView()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src="/images/office-interior.jpeg"
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
                What You Get
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                The space, the training, and the support that come with a branch
                membership &mdash; and exactly what it costs. Office space is available.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Cost */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal variant="clip">
            <h2
              className="text-3xl font-extrabold tracking-tight text-black md:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Cost
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-3xl">
            <RevealStagger variant="up" stagger={80}>
              {COST.map((c) => (
                <div key={c.label} className="rounded-lg border border-[#E5E7EB] bg-white p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                    {c.label}
                  </p>
                  <p
                    className="mt-3 text-5xl font-extrabold leading-none text-black"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {c.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-[#6B7280]">{c.unit}</p>
                </div>
              ))}
            </RevealStagger>
          </div>

          <Reveal variant="up" delay={120}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#6B7280]">
              Office space is available at the branch. No income claims or production
              projections are made or implied on this page.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The space */}
      <section className="bg-[#F3F4F6] py-14 md:py-20">
        <Container>
          <Reveal variant="clip">
            <h2
              className="text-3xl font-extrabold tracking-tight text-black md:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              The Space
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="up" stagger={40}>
              {SPACE.map((s) => (
                <div key={s} className="flex items-start gap-3 border-t border-[#D1D5DB] pt-4">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <p className="text-base leading-relaxed text-black">{s}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal variant="clip">
            <h2
              className="text-3xl font-extrabold tracking-tight text-black md:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Events &amp; Training
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="up" stagger={50}>
              {EVENTS.map((e) => (
                <div key={e.title} className="border-t border-[#E5E7EB] pt-5">
                  <h3
                    className="text-lg font-bold text-black"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{e.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* Support */}
      <section className="bg-[#F3F4F6] py-14 md:py-20">
        <Container>
          <Reveal variant="clip">
            <h2
              className="text-3xl font-extrabold tracking-tight text-black md:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Support
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            <RevealStagger variant="up" stagger={60}>
              {SUPPORT.map((s) => (
                <div key={s.title} className="border-t border-[#D1D5DB] pt-5">
                  <h3
                    className="text-lg font-bold text-black"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{s.body}</p>
                </div>
              ))}
            </RevealStagger>
          </div>

          <Reveal variant="up" delay={120}>
            <MembershipCta view={billing} />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
