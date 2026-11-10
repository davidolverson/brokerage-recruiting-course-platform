interface SectionHeadingProps {
  /** Main heading text */
  title: string
  /** Optional subtitle / supporting copy */
  subtitle?: string
  /** Center-align the heading block */
  centered?: boolean
  /** Render the title as an h1 (default h2) */
  as?: 'h1' | 'h2' | 'h3'
  /** Optional accent line above the title */
  eyebrow?: string
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  as: Tag = 'h2',
  eyebrow,
  className = '',
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {eyebrow}
        </span>
      )}

      <Tag
        className="text-[#000000] leading-tight"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 800,
          fontSize:
            Tag === 'h1'
              ? 'clamp(2rem, 4vw, 3rem)'
              : Tag === 'h2'
              ? 'clamp(1.6rem, 3vw, 2.25rem)'
              : 'clamp(1.25rem, 2.5vw, 1.75rem)',
        }}
      >
        {title}
      </Tag>

      {subtitle && (
        <p
          className="max-w-2xl text-[#6B7280] leading-relaxed"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: Tag === 'h1' ? '1.125rem' : '1rem',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
