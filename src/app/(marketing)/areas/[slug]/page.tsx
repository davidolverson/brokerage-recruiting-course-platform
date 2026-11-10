import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { areas, getAreaBySlug } from '@/lib/data/areas'
import { teams } from '@/lib/data/teams'
import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) {
    return { title: 'Area Not Found | Acme Realty' }
  }
  return createMetadata({
    title: `${area.name} Real Estate`,
    description: area.description.slice(0, 155),
    path: `/areas/${slug}`,
  })
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params
  const area = getAreaBySlug(slug)

  if (!area) {
    notFound()
  }

  const activeTeams = teams.filter(
    (t) => !t.isPlaceholder && area.teamSlugs.includes(t.slug),
  )

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Areas', url: `${BASE_URL}/areas` },
    { name: area.name, url: `${BASE_URL}/areas/${slug}` },
  ])

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Acme Realty Anytown Branch - ${area.name}`,
    description: area.description,
    url: `${BASE_URL}/areas/${slug}`,
    telephone: '+15550100100',
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.name,
      addressRegion: 'VA',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Acme Realty LLC',
      url: 'https://example.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <img
          src="/images/hero-community-v2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 py-20 sm:py-28">
          <Container>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex items-center gap-2 text-sm text-[#6B7280]"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden="true" className="select-none">/</span>
              <Link href="/areas" className="transition-colors hover:text-white">
                Areas
              </Link>
              <span aria-hidden="true" className="select-none">/</span>
              <span className="text-white">{area.name}</span>
            </nav>

            <div className="max-w-3xl">
              <Reveal variant="clip">
                <h1
                  className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {area.name}
                </h1>
              </Reveal>
              {area.county && (
                <Reveal variant="up" delay={80}>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-[#6B7280]">
                    {area.county}
                  </p>
                </Reveal>
              )}
              <Reveal variant="up" delay={160}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF]">
                  {area.description}
                </p>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* Overview + Highlights */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Reveal variant="up">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-black" aria-hidden="true" />
                <h2
                  className="text-xl font-extrabold text-[#111827]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Market Overview
                </h2>
              </div>
              <p className="mt-5 text-base leading-relaxed text-[#374151]">
                {area.description}
              </p>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <div className="mt-10 flex items-center gap-3">
                <div className="h-px w-8 bg-black" aria-hidden="true" />
                <h2
                  className="text-xl font-extrabold text-[#111827]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Market Highlights
                </h2>
              </div>
            </Reveal>

            <ul className="mt-5 space-y-3">
              <RevealStagger variant="up" baseDelay={140} stagger={60}>
                {area.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-base text-[#374151]"
                  >
                    <span
                      className="mt-2.5 block h-px w-4 shrink-0 bg-[#9CA3AF]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </RevealStagger>
            </ul>
          </div>
        </Container>
      </section>

      {/* Teams Active in Area */}
      <section className="bg-[#F3F4F6] py-16 sm:py-20">
        <Container>
          <Reveal variant="up">
            <div className="mb-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Local Expertise
              </p>
              <h2
                className="text-3xl font-extrabold tracking-tight text-[#000000] md:text-4xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Teams Active in {area.name}
              </h2>
            </div>
          </Reveal>

          {activeTeams.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <RevealStagger variant="scale" stagger={80}>
                {activeTeams.map((team) => (
                  <Link
                    key={team.slug}
                    href={`/teams/${team.slug}`}
                    className="group flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-7 transition-colors hover:border-[#9CA3AF]"
                  >
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">
                      Team
                    </p>
                    <h3
                      className="text-lg font-extrabold text-[#111827] group-hover:text-black"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {team.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#4B5563]">
                      {team.leader} &mdash; {team.leaderTitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                      {team.specialty}
                    </p>
                    <span className="mt-auto pt-5 text-sm font-semibold text-[#111827] group-hover:text-black">
                      View Team &rarr;
                    </span>
                  </Link>
                ))}
              </RevealStagger>
            </div>
          ) : (
            <Reveal variant="up">
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 text-center">
                <p className="text-base text-[#4B5563]">
                  Contact us to learn about agents active in this area.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          )}
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
                  Explore {area.name} with us.
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Visit the branch at 123 Main Street, meet our teams, and learn
                  the {area.name} market from agents who work it daily.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-tour"
                  className="shrink-0 inline-flex items-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  Visit the Branch
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
