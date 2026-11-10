interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats: Stat[]
  /** Divide stats with a vertical separator */
  divided?: boolean
  /** Background variant — frost maps to #F9FAFB, navy maps to black inverse */
  background?: 'frost' | 'white' | 'navy' | 'transparent'
  className?: string
}

const bgMap: Record<NonNullable<StatsBarProps['background']>, string> = {
  frost:       'bg-[#F9FAFB]',
  white:       'bg-white',
  navy:        'bg-black',
  transparent: 'bg-transparent',
}

export function StatsBar({
  stats,
  divided = true,
  background = 'frost',
  className = '',
}: StatsBarProps) {
  const isInverse = background === 'navy'

  return (
    <div
      className={[
        'w-full rounded-xl',
        bgMap[background],
        background !== 'transparent' ? 'px-6 py-6 sm:px-10' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <dl
        className={[
          'flex flex-wrap items-center justify-center gap-y-6',
          divided ? 'divide-y sm:divide-y-0 sm:divide-x' : '',
          isInverse ? 'divide-white/10' : 'divide-[#E5E7EB]',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 px-6 text-center first:pl-0 last:pr-0 sm:flex-1"
          >
            <dt
              className="order-2 text-sm font-medium"
              style={{ color: isInverse ? '#9CA3AF' : '#6B7280' }}
            >
              {stat.label}
            </dt>
            <dd
              className="order-1 text-3xl font-extrabold leading-none"
              style={{
                fontFamily: 'Manrope, sans-serif',
                color: isInverse ? '#FFFFFF' : '#000000',
              }}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
