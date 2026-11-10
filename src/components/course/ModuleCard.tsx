import Link from 'next/link'
import ProgressRing from './ProgressRing'

interface ModuleCardProps {
  title: string
  description: string
  chapterCount: number
  completedChapters: number
  estimatedHours: number
  href: string
  orderIndex: number
}

export default function ModuleCard({
  title,
  description,
  chapterCount,
  completedChapters,
  estimatedHours,
  href,
  orderIndex,
}: ModuleCardProps) {
  const percent =
    chapterCount > 0 ? Math.round((completedChapters / chapterCount) * 100) : 0
  const isComplete = percent === 100
  const isStarted = completedChapters > 0

  return (
    <Link
      href={href}
      className={[
        'group flex flex-col gap-5 rounded-xl border bg-white p-6 shadow-sm',
        'transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2',
        isComplete
          ? 'border-[#EA580C]/40'
          : 'border-[#E5E7EB] hover:border-[#EA580C]/30',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Top row: module number badge + progress ring */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Module number pill */}
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-extrabold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            aria-label={`Module ${orderIndex}`}
          >
            {orderIndex}
          </span>

          {/* Status badge */}
          {isComplete && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#EA580C]/10 px-2.5 py-0.5 text-xs font-semibold text-[#EA580C]">
              Complete
            </span>
          )}
          {isStarted && !isComplete && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#EA580C]/10 px-2.5 py-0.5 text-xs font-semibold text-[#EA580C]">
              In Progress
            </span>
          )}
        </div>

        <ProgressRing percent={percent} size={72} strokeWidth={6} />
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-bold leading-snug text-[#111827] group-hover:text-[#EA580C] transition-colors duration-150"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed text-[#6B7280] line-clamp-3"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {description}
        </p>
      </div>

      {/* Footer meta */}
      <div className="flex flex-wrap items-center gap-4 border-t border-[#F3F4F6] pt-4 text-xs text-[#6B7280]">
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="#9CA3AF" strokeWidth="1.25" />
            <path d="M1 5.5h12" stroke="#9CA3AF" strokeWidth="1.25" />
            <path d="M4.5 1v2M9.5 1v2" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: 'Roboto, sans-serif' }}>
            {completedChapters}/{chapterCount} chapters
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke="#9CA3AF" strokeWidth="1.25" />
            <path d="M7 4v3.5L9 9" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: 'Roboto, sans-serif' }}>
            {estimatedHours}h estimated
          </span>
        </div>

        <div className="ml-auto flex items-center gap-1 font-semibold text-[#EA580C] group-hover:gap-2 transition-all duration-150">
          {isStarted && !isComplete ? 'Continue' : isComplete ? 'Review' : 'Start'}
          <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <path d="M4 7h6M8 5l2 2-2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
