import Link from 'next/link'
import ProgressBar from './ProgressBar'

interface ChapterCardProps {
  title: string
  description: string
  lessonCount: number
  completedCount: number
  quizAvailable: boolean
  quizScore: number | null
  href: string
}

export default function ChapterCard({
  title,
  description,
  lessonCount,
  completedCount,
  quizAvailable,
  quizScore,
  href,
}: ChapterCardProps) {
  const percent =
    lessonCount > 0 ? Math.round((completedCount / lessonCount) * 100) : 0
  const isComplete = percent === 100

  return (
    <Link
      href={href}
      className={[
        'group flex flex-col gap-4 rounded-xl border bg-white p-5 shadow-sm',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2',
        isComplete
          ? 'border-[#EA580C]/40'
          : 'border-[#E5E7EB] hover:border-[#EA580C]/30',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-base font-bold leading-snug text-[#111827] group-hover:text-[#EA580C] transition-colors duration-150"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {title}
        </h3>

        {isComplete && (
          <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full bg-[#EA580C]/10 px-2 py-0.5 text-xs font-semibold text-[#EA580C]">
            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
              <path
                d="M2 6.5l2.5 2.5L10 4"
                stroke="#EA580C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Done
          </span>
        )}
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed text-[#6B7280] line-clamp-2"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {description}
      </p>

      {/* Progress bar */}
      <ProgressBar percent={percent} showPercent />

      {/* Footer meta */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#F3F4F6] pt-3">
        <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
          <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <path
              d="M1 7h12M7 1v12"
              stroke="#9CA3AF"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <span style={{ fontFamily: 'Roboto, sans-serif' }}>
            {completedCount}/{lessonCount} lessons
          </span>
        </div>

        {quizAvailable && (
          <div
            className={[
              'flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold',
              quizScore !== null
                ? 'bg-[#F0FDF4] text-[#16A34A]'
                : 'bg-[#F3F4F6] text-[#6B7280]',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="12"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <path
                d="M4 7h6M4 4.5h6M4 9.5h3"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
            {quizScore !== null ? `Quiz: ${quizScore}%` : 'Quiz available'}
          </div>
        )}
      </div>
    </Link>
  )
}
