'use client'

import { Reveal, RevealStagger } from '@/components/ui/Reveal'
import type { FeaturedMember } from '@/lib/data/teams'

// ---------------------------------------------------------------------------
// Internal primitives -- intentionally match TeamDetailClient's local patterns
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-[#111827]"
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

/** Left-bar section heading -- mirrors the inline SectionHeading in TeamDetailClient. */
function BarHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-black" aria-hidden="true" />
      <h2
        className="text-xl font-extrabold tracking-tight text-[#111827]"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {children}
      </h2>
    </div>
  )
}

/** Sub-section label inside a member card. */
function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      {children}
    </p>
  )
}

// ---------------------------------------------------------------------------
// Member card
// ---------------------------------------------------------------------------

function MemberCard({ member, index }: { member: FeaturedMember; index: number }) {
  const isEven = index % 2 === 0

  return (
    <Reveal variant="up" delay={index * 80}>
      <article
        className="rounded-xl border border-[#E5E7EB] bg-white"
        aria-label={`Featured member: ${member.name}`}
      >
        {/* Card header */}
        <div
          className={`rounded-t-xl px-8 py-7 ${isEven ? 'bg-black' : 'bg-[#F9FAFB]'}`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-[0.15em] ${
              isEven ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
            }`}
          >
            Team Member
          </p>
          <h3
            className={`mt-1 text-2xl font-extrabold tracking-tight ${
              isEven ? 'text-white' : 'text-[#111827]'
            }`}
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {member.name}
          </h3>
          <p
            className={`mt-0.5 text-sm font-semibold ${
              isEven ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
            }`}
          >
            {member.title}
          </p>
        </div>

        {/* Card body */}
        <div className="space-y-8 px-8 py-8">
          {/* Bio */}
          <p className="text-base leading-relaxed text-[#374151]">{member.bio}</p>

          {/* Areas of Expertise */}
          {member.expertise.length > 0 && (
            <div>
              <CardLabel>Areas of Expertise</CardLabel>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#4B5563]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {member.highlights.length > 0 && (
            <div>
              <CardLabel>Highlights</CardLabel>
              <ul className="space-y-3" aria-label={`${member.name} highlights`}>
                <RevealStagger variant="up" stagger={50} baseDelay={index * 80 + 100}>
                  {member.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-[#374151]"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </RevealStagger>
              </ul>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}

// ---------------------------------------------------------------------------
// Public export
// ---------------------------------------------------------------------------

interface FeaturedMembersProps {
  members: FeaturedMember[]
}

export function FeaturedMembers({ members }: FeaturedMembersProps) {
  if (members.length === 0) return null

  return (
    <section aria-labelledby="featured-members-heading">
      {/* Section heading */}
      <Reveal variant="up">
        <BarHeading>
          <span id="featured-members-heading">Featured Team Members</span>
        </BarHeading>
      </Reveal>

      {/* Member cards */}
      <div className="mt-8 space-y-8">
        {members.map((member, i) => (
          <MemberCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  )
}
