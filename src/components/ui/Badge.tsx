type BadgeVariant = 'default' | 'accent' | 'success' | 'navy' | 'muted'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  // accent maps to default — no accent color in monochrome system
  accent:  'bg-[#F3F4F6] text-[#4B5563]',
  default: 'bg-[#F3F4F6] text-[#4B5563]',
  success: 'bg-[#F0FDF4] text-[#16A34A]',
  // navy maps to black/white inverse
  navy:    'bg-[#000000] text-white',
  muted:   'bg-[#F9FAFB] text-[#9CA3AF]',
}

export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-0.5',
        'text-xs font-semibold leading-none tracking-wide',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
