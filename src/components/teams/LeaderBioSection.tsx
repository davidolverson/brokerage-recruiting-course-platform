'use client'

import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import type { LeaderBio } from '@/lib/data/teams'

// ---------------------------------------------------------------------------
// Local sub-components
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-[3px] shrink-0 text-[#111827]"
    >
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Left-bar heading used throughout the detail pages. */
function BarHeading({
  children,
  as: Tag = 'h2',
}: {
  children: React.ReactNode
  as?: 'h2' | 'h3'
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 shrink-0 bg-black" aria-hidden="true" />
      <Tag
        className="text-xl font-extrabold tracking-tight text-[#111827]"
        style={{ fontFamily: 'Manrope, var(--font-manrope), sans-serif' }}
      >
        {children}
      </Tag>
    </div>
  )
}

/** Medium-weight section sub-heading inside each bio section. */
function SectionSubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-base font-bold tracking-tight text-[#111827]"
      style={{ fontFamily: 'Manrope, var(--font-manrope), sans-serif' }}
    >
      {children}
    </h3>
  )
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface LeaderBioSectionProps {
  bio: LeaderBio
  leaderName: string
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * LeaderBioSection
 *
 * Renders an expanded leader biography with structured-data markup for AI
 * and search-engine pickup. Designed to drop into any team detail page below
 * the primary TeamDetailClient content block.
 *
 * Structured data: schema.org/Person via article[itemscope].
 */
export function LeaderBioSection({ bio, leaderName }: LeaderBioSectionProps) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Person"
      className="space-y-12 py-2"
    >
      {/* Hidden structured-data meta nodes */}
      <meta itemProp="name" content={leaderName} />
      <meta itemProp="jobTitle" content={bio.jobTitle} />
      <meta itemProp="description" content={bio.description} />
      <meta itemProp="worksFor" content={bio.worksFor} />

      {/* Top-level headline */}
      <Reveal variant="up">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 shrink-0 bg-black" aria-hidden="true" />
          <h2
            className="leading-tight text-[#111827]"
            style={{
              fontFamily: 'Manrope, var(--font-manrope), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
            }}
          >
            {bio.headline}
          </h2>
        </div>
      </Reveal>

      {/* Bio sections */}
      {bio.sections.map((section, index) => (
        <Reveal key={section.heading} variant="up" delay={index * 60}>
          <div className="space-y-4">
            <SectionSubHeading>{section.heading}</SectionSubHeading>

            <p className="text-base leading-relaxed text-[#374151]">
              {section.content}
            </p>

            {section.bullets != null && section.bullets.length > 0 && (
              <ul className="mt-2 space-y-2.5" role="list">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-base text-[#374151]"
                  >
                    <CheckIcon />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}

      {/* Pull-quote */}
      <Reveal variant="up">
        <blockquote
          className="relative rounded-xl border-l-4 border-black bg-[#F9FAFB] px-8 py-7"
          itemProp="description"
        >
          <p className="text-base italic leading-relaxed text-[#374151]">
            &ldquo;{bio.quote}&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold text-[#111827]">
            {bio.quoteAttribution}
          </footer>
        </blockquote>
      </Reveal>

      {/* CTA card */}
      <Reveal variant="up">
        <div className="rounded-xl bg-black px-8 py-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]"
            style={{ fontFamily: 'Manrope, var(--font-manrope), sans-serif' }}
          >
            Work with {leaderName.split(' ')[0]}
          </p>

          <p className="mt-3 text-base leading-relaxed text-[#D1D5DB]">
            {bio.contactCTA}
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[#F9FAFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ fontFamily: 'Manrope, var(--font-manrope), sans-serif' }}
          >
            Connect Now
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Reveal>
    </article>
  )
}
