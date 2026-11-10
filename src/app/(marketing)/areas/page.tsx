import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { areas } from '@/lib/data/areas'
import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Local Markets',
  description:
    'Explore the Anytown metro markets served by Acme Realty. Area-specific real estate expertise across Anytown, Southside, Northside, Hillcrest, Lakeside, and Westside.',
  path: '/areas',
})

export default function AreasIndexPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Areas', url: `${BASE_URL}/areas` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
                Local Markets
              </h1>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Real estate is local. We cover the Anytown metro market by market,
                neighborhood by neighborhood — from Old Town to Westside
                and Lakeside horse country. Find the area where you want to build.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Areas Grid */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RevealStagger variant="scale" stagger={70}>
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-8 transition-colors hover:border-[#9CA3AF]"
                >
                  <h2
                    className="text-xl font-extrabold tracking-tight text-[#111827] group-hover:text-black"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {area.name}
                  </h2>
                  {area.county && (
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">
                      {area.county}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                    {area.description.length > 120
                      ? area.description.slice(0, 120) + '...'
                      : area.description}
                  </p>
                  <p className="mt-2 text-xs text-[#9CA3AF]">
                    {area.teamSlugs.length}{' '}
                    {area.teamSlugs.length === 1 ? 'team' : 'teams'} active
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-[#111827] group-hover:text-black">
                    Explore Market &rarr;
                  </span>
                </Link>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* CTA Strip */}
      <section className="relative overflow-hidden bg-black py-14 md:py-18">
        <Image src="/images/cta-areas-v2.jpeg" alt="" fill sizes="100vw" quality={75} className="object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Reveal variant="up">
              <div>
                <h2
                  className="text-2xl font-extrabold text-white md:text-3xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Ready to work a local market?
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Tour the branch at 123 Main Street, meet our teams, and find where you fit.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-tour"
                  className="shrink-0 inline-flex items-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/teams"
                  className="shrink-0 inline-flex items-center rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Browse All Teams
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
