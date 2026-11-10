'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { ShareButtons } from '@/components/ui/ShareButtons'
import { SectionDocuments } from '@/components/SectionDocuments'
import type { ArticleSection as SharedArticleSection } from '@/lib/data/articles'

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Third copy of this shape, now retired. Adding `documents` to the editor and
// the handbook while this one kept its own definition would have compiled
// cleanly and dropped every attachment on the public article.
type ArticleSection = SharedArticleSection

interface Article {
  slug: string
  title: string
  category: string
  categoryLabel: string
  description: string
  readTime: string
  publishedDate: string
  heroImage: string
  sections: ArticleSection[]
}

interface RelatedArticle {
  slug: string
  title: string
  category: string
  categoryLabel: string
  description: string
  readTime: string
}

export function ArticleContent({
  article,
  relatedArticles,
}: {
  article: Article
  relatedArticles: RelatedArticle[]
}) {
  const [progress, setProgress] = useState(0)
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      if (!articleRef.current) return
      const el = articleRef.current
      const rect = el.getBoundingClientRect()
      const totalHeight = el.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return
      const scrolled = -rect.top
      const pct = Math.min(Math.max(scrolled / totalHeight, 0), 1) * 100
      setProgress(pct)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tocItems = article.sections.map((s) => ({
    label: s.heading,
    id: slugify(s.heading),
  }))

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-50 h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-black transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <Container>
          <div className="flex items-center gap-2 py-3 text-sm">
            <Link
              href="/education"
              className="font-medium transition-colors duration-150 hover:text-[#6B7280]"
              style={{ color: '#000000' }}
            >
              Education Hub
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 text-slate-400"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
            <Link
              href="/education"
              className="font-medium transition-colors duration-150 hover:text-[#6B7280]"
              style={{ color: '#000000' }}
            >
              {article.categoryLabel}
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 text-slate-400"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate max-w-[200px] text-slate-400 sm:max-w-none">
              {article.title}
            </span>
          </div>
        </Container>
      </div>

      {/* Hero Image */}
      <div className="relative w-full bg-black" style={{ height: 'clamp(280px, 40vw, 520px)' }}>
        {article.heroImage && (
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 flex items-end">
          <Container>
            <div className="mx-auto max-w-4xl pb-10 md:pb-14">
              <Reveal variant="up" delay={0}>
                <div className="mb-4">
                  <Badge variant="default">{article.categoryLabel}</Badge>
                </div>
              </Reveal>
              <Reveal variant="up" delay={80}>
                <h1
                  className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {article.title}
                </h1>
              </Reveal>
              <Reveal variant="up" delay={160}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                  {article.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.publishedDate}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>By Acme Realty</span>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>
      </div>

      {/* Mobile TOC — horizontal scrollable */}
      <div className="border-b border-[#E5E7EB] bg-white lg:hidden">
        <Container>
          <nav
            className="flex gap-4 overflow-x-auto py-3"
            aria-label="Table of contents"
            style={{ scrollbarWidth: 'none' }}
          >
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 text-sm font-medium text-[#6B7280] transition-colors duration-150 hover:text-black"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Article Body with Desktop TOC Sidebar */}
      <section className="bg-white pb-16 pt-10 md:pb-24 md:pt-14" ref={articleRef}>
        <Container>
          <div className="mx-auto max-w-5xl lg:flex lg:gap-12">
            {/* Desktop TOC Sidebar */}
            <aside className="hidden lg:block lg:w-56 lg:shrink-0">
              <nav className="sticky top-20" aria-label="Table of contents">
                <p
                  className="mb-3 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  In this article
                </p>
                <ul className="space-y-2 border-l border-[#E5E7EB]">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block border-l-2 border-transparent py-1 pl-4 text-sm font-medium text-[#6B7280] transition-colors duration-150 hover:border-black hover:text-black"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Article Content */}
            <div className="min-w-0 flex-1">
              {article.sections.map((section, idx) => (
                <Reveal key={idx} variant="up" delay={idx === 0 ? 0 : 60}>
                  <div>
                    {/* Section Divider */}
                    {idx > 0 && (
                      <hr
                        className="my-10 border-0 border-t border-[#E5E7EB]"
                        aria-hidden="true"
                      />
                    )}

                    <div id={slugify(section.heading)} className="scroll-mt-24">
                      <h2
                        className="mb-4 text-2xl font-bold tracking-tight"
                        style={{ color: '#000000', fontFamily: 'Manrope, sans-serif' }}
                      >
                        {section.heading}
                      </h2>

                      {/* Inline Section Image */}
                      {section.image && (
                        <div className="relative mb-6 w-full rounded-xl" style={{ aspectRatio: '4/3' }}>
                          <ImageReveal className="absolute inset-0 h-full w-full rounded-xl overflow-hidden">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 720px"
                            />
                          </ImageReveal>
                        </div>
                      )}

                      {section.paragraphs.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="mb-4 text-base leading-relaxed last:mb-0"
                          style={{ color: '#4B5563', fontFamily: 'Roboto, sans-serif' }}
                        >
                          {paragraph}
                        </p>
                      ))}

                      <SectionDocuments documents={section.documents} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Share + CTA */}
      <section className="border-t border-[#E5E7EB] bg-white py-10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 sm:flex-row">
            <ShareButtons
              title={article.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : 'https://example.com'}/education/${article.slug}`}
            />
            <div className="flex gap-3">
              <a
                href="/apply"
                className="inline-flex items-center rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1F2937]"
              >
                Apply Now
              </a>
              <Link
                href="/education"
                className="inline-flex items-center rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-sm font-medium text-[#4B5563] transition-colors hover:border-black hover:text-black"
              >
                More Articles
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Read Next — Dark themed related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-20" style={{ backgroundColor: '#18181B' }}>
          <Container>
            <div className="mx-auto max-w-5xl">
              <Reveal variant="clip">
                <h2
                  className="mb-2 text-2xl font-extrabold tracking-tight"
                  style={{ color: '#FFFFFF', fontFamily: 'Manrope, sans-serif' }}
                >
                  Read Next
                </h2>
                <p className="mb-10 text-sm" style={{ color: '#A1A1AA' }}>
                  Continue exploring our education library
                </p>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <RevealStagger variant="scale" stagger={80}>
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/education/${related.slug}`}
                      className="group flex flex-col rounded-xl border p-6 transition-all duration-200 hover:border-[#22D3EE]"
                      style={{
                        backgroundColor: '#27272A',
                        borderColor: '#3F3F46',
                      }}
                    >
                      <span
                        className="mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{ backgroundColor: '#3F3F46', color: '#22D3EE' }}
                      >
                        {related.categoryLabel}
                      </span>
                      <h3
                        className="mb-2 text-base font-bold leading-snug transition-colors duration-150 group-hover:text-[#22D3EE]"
                        style={{ color: '#FAFAFA', fontFamily: 'Manrope, sans-serif' }}
                      >
                        {related.title}
                      </h3>
                      <p
                        className="mb-4 flex-1 text-sm leading-relaxed line-clamp-2"
                        style={{ color: '#A1A1AA' }}
                      >
                        {related.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium" style={{ color: '#71717A' }}>
                          {related.readTime}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-150 group-hover:text-[#22D3EE]"
                          style={{ color: '#A1A1AA' }}
                        >
                          Read more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </RevealStagger>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-14" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <Reveal variant="up">
            <div className="mx-auto max-w-xl text-center">
              <h2
                className="mb-3 text-2xl font-extrabold"
                style={{ color: '#000000', fontFamily: 'Manrope, sans-serif' }}
              >
                Explore More
              </h2>
              <p className="mb-6 text-sm" style={{ color: '#4B5563' }}>
                Browse the full Education Hub or check out upcoming live training events at the
                branch.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/education"
                  className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1a1a1a]"
                >
                  Education Hub
                </Link>
                <Link
                  href="/training-events"
                  className="inline-flex items-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-150 hover:border-black hover:text-black"
                >
                  Training &amp; Events
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
