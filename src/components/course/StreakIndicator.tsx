interface StreakIndicatorProps {
  currentStreak: number
  longestStreak: number
}

function getFireSize(streak: number): string {
  if (streak >= 30) return 'text-5xl'
  if (streak >= 14) return 'text-4xl'
  if (streak >= 7) return 'text-3xl'
  if (streak >= 3) return 'text-2xl'
  return 'text-xl'
}

function getStreakLabel(streak: number): string {
  if (streak === 0) return 'No active streak'
  if (streak === 1) return '1 day streak'
  return `${streak} day streak`
}

function getMotivationalText(streak: number): string {
  if (streak === 0) return 'Study today to start a streak!'
  if (streak >= 30) return 'Legendary consistency!'
  if (streak >= 14) return "You're on fire! Keep it going."
  if (streak >= 7) return 'A full week. Impressive!'
  if (streak >= 3) return "Building momentum!"
  return "Great start, keep it up!"
}

export default function StreakIndicator({
  currentStreak,
  longestStreak,
}: StreakIndicatorProps) {
  const fireSize = getFireSize(currentStreak)
  const isActive = currentStreak > 0

  return (
    <div
      className={[
        'flex flex-col items-center gap-3 rounded-xl border px-5 py-5 shadow-sm',
        isActive
          ? 'border-[#EA580C]/30 bg-gradient-to-b from-[#FFF7F0] to-white'
          : 'border-[#E5E7EB] bg-[#F9FAFB]',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={getStreakLabel(currentStreak)}
    >
      {/* Fire icon */}
      <div
        className={[
          'leading-none transition-all duration-300 select-none',
          fireSize,
          isActive ? '' : 'grayscale opacity-40',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-hidden="true"
      >
        {currentStreak >= 30 ? '🔥🔥🔥' : currentStreak >= 14 ? '🔥🔥' : '🔥'}
      </div>

      {/* Streak count */}
      <div className="flex flex-col items-center gap-0.5">
        <span
          className={[
            'text-3xl font-extrabold leading-none',
            isActive ? 'text-[#EA580C]' : 'text-[#9CA3AF]',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {currentStreak}
        </span>
        <span
          className="text-sm font-medium text-[#6B7280]"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {currentStreak === 1 ? 'day streak' : 'day streak'}
        </span>
      </div>

      {/* Motivational line */}
      <p
        className={[
          'text-center text-xs leading-snug',
          isActive ? 'text-[#374151]' : 'text-[#9CA3AF]',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {getMotivationalText(currentStreak)}
      </p>

      {/* Longest streak */}
      {longestStreak > 0 && (
        <div className="flex items-center gap-1.5 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs text-[#6B7280]">
          <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 shrink-0" aria-hidden="true">
            <path
              d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8l-2.78 1.55.53-3.09L1.5 4.27l3.11-.45L6 1z"
              fill="#EA580C"
            />
          </svg>
          <span style={{ fontFamily: 'Roboto, sans-serif' }}>
            Best: {longestStreak} {longestStreak === 1 ? 'day' : 'days'}
          </span>
        </div>
      )}
    </div>
  )
}
