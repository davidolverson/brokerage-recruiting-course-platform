interface BadgeCardProps {
  name: string
  icon: string
  description: string
  earned: boolean
  earnedAt: string | null
}

function formatEarnedDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default function BadgeCard({
  name,
  icon,
  description,
  earned,
  earnedAt,
}: BadgeCardProps) {
  return (
    <div
      className={[
        'flex flex-col items-center gap-3 rounded-xl border p-4 text-center shadow-sm transition-all duration-200',
        earned
          ? 'border-[#EA580C]/40 bg-white hover:-translate-y-0.5 hover:shadow-md'
          : 'border-[#E5E7EB] bg-[#F9FAFB]',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={earned ? `${name} badge earned` : `${name} badge - not yet earned`}
    >
      {/* Icon */}
      <div
        className={[
          'flex h-14 w-14 items-center justify-center rounded-full text-2xl',
          'transition-all duration-200',
          earned
            ? 'bg-[#EA580C]/10 ring-2 ring-[#EA580C]/30'
            : 'bg-[#E5E7EB] grayscale opacity-40',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Name */}
      <h4
        className={[
          'text-sm font-bold leading-tight',
          earned ? 'text-[#111827]' : 'text-[#9CA3AF]',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {name}
      </h4>

      {/* Description */}
      <p
        className={[
          'text-xs leading-relaxed',
          earned ? 'text-[#6B7280]' : 'text-[#9CA3AF]',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {description}
      </p>

      {/* Earned status */}
      {earned && earnedAt !== null ? (
        <span
          className="inline-flex items-center gap-1 rounded-full bg-[#EA580C]/10 px-2.5 py-0.5 text-xs font-semibold text-[#EA580C]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
            <path
              d="M1.5 5.5l2 2L8.5 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Earned {formatEarnedDate(earnedAt)}
        </span>
      ) : !earned ? (
        <span
          className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-2.5 py-0.5 text-xs font-medium text-[#9CA3AF]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
            <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.25" />
            <path d="M5 3v2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            <circle cx="5" cy="7" r="0.5" fill="currentColor" />
          </svg>
          Locked
        </span>
      ) : null}
    </div>
  )
}
