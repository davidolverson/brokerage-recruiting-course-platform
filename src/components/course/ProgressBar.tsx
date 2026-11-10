interface ProgressBarProps {
  percent: number
  label?: string
  showPercent?: boolean
}

export default function ProgressBar({
  percent,
  label,
  showPercent = false,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent))

  return (
    <div className="w-full">
      {(label !== undefined || showPercent) && (
        <div className="mb-1.5 flex items-center justify-between gap-2">
          {label !== undefined && (
            <span
              className="text-sm font-medium text-[#374151]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {label}
            </span>
          )}
          {showPercent && (
            <span
              className="ml-auto text-xs font-semibold text-[#EA580C]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {clamped}%
            </span>
          )}
        </div>
      )}

      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `${clamped}% complete`}
      >
        <div
          className="h-full rounded-full bg-[#EA580C]"
          style={{
            width: `${clamped}%`,
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}
