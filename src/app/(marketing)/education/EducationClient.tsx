'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { CATEGORIES, type Article } from '@/lib/data/articles'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { ImageReveal } from '@/components/ui/ImageReveal'

/**
 * Every article card read "Invalid Date" in production.
 *
 * publishedDate is written as "March 4, 2026", and appending 'T00:00:00' to
 * that produces "March 4, 2026T00:00:00", which Date cannot parse. The suffix
 * is only meaningful for a bare ISO date, where it prevents the value being
 * read as UTC and displaying a day early.
 *
 * Editors type this field by hand in the CMS, so an unparseable value is
 * expected rather than exceptional: show exactly what was typed instead of
 * "Invalid Date".
 */
function formatDate(dateStr: string) {
  const raw = (dateStr || '').trim()
  if (!raw) return ''

  const isBareIso = /^\d{4}-\d{2}-\d{2}$/.test(raw)
  const date = new Date(isBareIso ? `${raw}T00:00:00` : raw)
  if (Number.isNaN(date.getTime())) return raw

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block rounded-full border border-[#E5E7EB] bg-[#F3F4F6] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4B5563]">
      {category}
    </span>
  )
}

export function EducationClient({ articles }: { articles: Article[] }) {
  const articlesByCategory = CATEGORIES.map((cat) => ({
    category: cat,
    articles: articles.filter((a) => a.category === cat.value),
  })).filter((group) => group.articles.length > 0)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <img src="/images/hero-education-v2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="clip">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
                Acme Realty
              </p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Education Hub
              </h1>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Investor education, market insights, team growth playbooks, and partner guides.
                Written by practitioners, for Anytown agents.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Category Filter Tabs */}
      <section className="border-b border-[#E5E7EB] bg-white">
        <Container>
          <div className="flex flex-wrap gap-2 py-5">
            <a
              href="#all"
              className="inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition-colors duration-150"
            >
              All
            </a>
            {CATEGORIES.map((cat) => (
              <a
                key={cat.value}
                href={`#${cat.value}`}
                className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-5 py-2 text-sm font-semibold text-[#4B5563] transition-colors duration-150 hover:border-black hover:text-black"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Articles by Category */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="space-y-16">
            {articlesByCategory.map(({ category, articles }) => (
              <div
                key={category.value}
                id={category.value}
                className="scroll-mt-24"
              >
                <Reveal variant="clip">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="h-1 w-10 rounded-full bg-black" aria-hidden="true" />
                    <h2 className="text-2xl font-extrabold tracking-tight text-[#000000] md:text-3xl">
                      {category.label}
                    </h2>
                  </div>
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2">
                  <RevealStagger variant="scale" stagger={80}>
                    {articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/education/${article.slug}`}
                        className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-all duration-150 hover:border-black hover:shadow-md"
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl">
                          <ImageReveal className="absolute inset-0 h-full w-full">
                            <Image
                              src={article.heroImage}
                              alt={article.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                          </ImageReveal>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <CategoryBadge category={article.categoryLabel} />

                          <h3 className="mt-4 text-lg font-bold leading-snug text-[#000000] group-hover:underline">
                            {article.title}
                          </h3>

                          <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4B5563]">
                            {article.description}
                          </p>

                          <div className="mt-4 flex items-center gap-3 text-xs font-medium text-[#9CA3AF]">
                            <span>{article.readTime}</span>
                            <span aria-hidden="true">&middot;</span>
                            <span>{formatDate(article.publishedDate)}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </RevealStagger>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-16 md:py-20">
        <Container>
          <Reveal variant="up">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  Want live education instead?
                </h2>
                <p className="mt-2 text-[#9CA3AF]">
                  Tactics Trainings, Wealth Masterminds, Growth Network Webinars, and monthly in-person events at the branch.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Link
                  href="/training-events"
                  className="inline-flex items-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-[#F3F4F6]"
                >
                  See Training &amp; Events
                </Link>
                <Link
                  href="/book-a-tour"
                  className="inline-flex items-center rounded-md border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
                >
                  Book a Tour
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
