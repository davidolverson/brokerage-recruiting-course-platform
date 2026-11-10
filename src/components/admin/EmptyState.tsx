import Link from 'next/link'

interface EmptyStateProps {
  title: string
  description?: string
  action?: { label: string; href: string }
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-[#222] bg-[#111] p-8 text-center">
      <h3
        className="text-base font-semibold text-[#6B7280]"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-[#4B5563]">{description}</p>
      )}
      {action && (
        <Link
          href={action.href}
          className="mt-4 inline-block rounded-lg border border-[#333] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white"
        >
          {action.label}
        </Link>
      )}
    </div>
  )
}
