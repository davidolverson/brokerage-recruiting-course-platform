'use client'

const RANGES = [
  { label: '7d', value: 7 },
  { label: '30d', value: 30 },
  { label: '90d', value: 90 },
  { label: 'All', value: 0 },
]

export function DateFilter({ days, onChange }: { days: number; onChange: (d: number) => void }) {
  return (
    <div className="flex gap-1">
      {RANGES.map((r) => (
        <button
          key={r.value}
          onClick={() => onChange(r.value)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            days === r.value
              ? 'bg-white text-black'
              : 'border border-[#333] text-[#9CA3AF] hover:border-white hover:text-white'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}
