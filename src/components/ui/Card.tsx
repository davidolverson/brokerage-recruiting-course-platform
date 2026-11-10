interface CardProps {
  children: React.ReactNode
  /** Enable lift-on-hover effect */
  hoverable?: boolean
  /** Inner padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Visible border */
  bordered?: boolean
  /** Shadow level */
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
  /** Optional click handler — adds cursor-pointer */
  onClick?: () => void
}

const paddingMap: Record<NonNullable<CardProps['padding']>, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const shadowMap: Record<NonNullable<CardProps['shadow']>, string> = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
}

export function Card({
  children,
  hoverable = false,
  padding = 'md',
  bordered = true,
  shadow = 'sm',
  className = '',
  onClick,
}: CardProps) {
  const classes = [
    'rounded-xl bg-white',
    paddingMap[padding],
    shadowMap[shadow],
    bordered ? 'border border-[#E5E7EB]' : '',
    hoverable
      ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#000000]'
      : '',
    onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}
