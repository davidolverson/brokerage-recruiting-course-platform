import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsLink extends BaseProps {
  href: string
  /** Pass true to open in a new tab */
  external?: boolean
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  disabled?: never
  type?: never
}

interface ButtonAsButton extends BaseProps {
  href?: never
  external?: never
  disabled?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const variantStyles: Record<ButtonVariant, string> = {
  // accent maps to primary — no accent color in monochrome system
  accent:
    'bg-black text-white hover:bg-[#000000] focus-visible:ring-black',
  primary:
    'bg-black text-white hover:bg-[#000000] focus-visible:ring-black',
  secondary:
    'bg-white text-black border border-black hover:bg-[#F9FAFB] focus-visible:ring-black',
  outline:
    'bg-transparent text-black border border-[#E5E7EB] hover:border-black focus-visible:ring-black',
  ghost:
    'bg-transparent text-black hover:bg-[#F3F4F6] focus-visible:ring-black',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

function buildClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  extra = '',
  disabled = false,
): string {
  return [
    'inline-flex items-center justify-center gap-2',
    'rounded-lg font-medium transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    extra,
  ]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props

  if ('href' in props && props.href !== undefined) {
    const { href, external } = props
    const cls = buildClassName(variant, size, className)

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          onClick={props.onClick}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={cls} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  const { disabled = false, type = 'button', onClick } = props as ButtonAsButton
  const cls = buildClassName(variant, size, className, disabled)

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
