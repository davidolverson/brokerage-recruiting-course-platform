'use client'

interface ProgressRingProps {
  percent: number
  size?: number
  strokeWidth?: number
  label?: string
}

export default function ProgressRing({
  percent,
  size = 120,
  strokeWidth = 8,
  label,
}: ProgressRingProps) {
  const clampedPercent = Math.min(100, Math.max(0, percent))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (clampedPercent / 100) * circumference
  const center = size / 2

  return (
    <div
      className="relative inline-flex flex-col items-center gap-2"
      role="progressbar"
      aria-valuenow={clampedPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ?? `${clampedPercent}% complete`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        style={{ display: 'block' }}
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          opacity={0.25}
        />
        {/* Progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#EA580C"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: 'stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </svg>

      {/* Center label */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="font-extrabold leading-none text-[#111827]"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: size * 0.18,
          }}
        >
          {clampedPercent}%
        </span>
      </div>

      {label !== undefined && (
        <span
          className="text-center text-xs font-medium text-[#6B7280]"
          style={{ fontFamily: 'Roboto, sans-serif', maxWidth: size }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
