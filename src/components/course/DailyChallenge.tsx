'use client'

import { useEffect, useMemo, useState } from 'react'
import { getTodaysChallenge, type DailyChallenge as DailyChallengeType } from '@/lib/data/gamification-config'

interface DailyChallengeProps {
  // Progress values coming from external state
  questionsAnsweredToday?: number
  flashcardsReviewedToday?: number
  lessonsCompletedToday?: number
  quizzesPassedToday?: number
  streakDays?: number
  // Callback fired once challenge completes (to award XP on the server)
  onChallengeComplete?: (challenge: DailyChallengeType) => void
  className?: string
}

function getProgress(
  challenge: DailyChallengeType,
  props: DailyChallengeProps,
): number {
  switch (challenge.type) {
    case 'questions':
      return props.questionsAnsweredToday ?? 0
    case 'flashcards':
      return props.flashcardsReviewedToday ?? 0
    case 'lessons':
      return props.lessonsCompletedToday ?? 0
    case 'quiz':
      return props.quizzesPassedToday ?? 0
    default:
      return 0
  }
}

function getStreakMultiplierLabel(streakDays: number): string {
  if (streakDays >= 30) return '2.0x'
  if (streakDays >= 14) return '1.5x'
  if (streakDays >= 7) return '1.25x'
  if (streakDays >= 3) return '1.1x'
  return '1.0x'
}

function getStreakMultiplierValue(streakDays: number): number {
  if (streakDays >= 30) return 2.0
  if (streakDays >= 14) return 1.5
  if (streakDays >= 7) return 1.25
  if (streakDays >= 3) return 1.1
  return 1.0
}

function getDayOfWeek(): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[new Date().getDay()]
}

export default function DailyChallenge({
  questionsAnsweredToday = 0,
  flashcardsReviewedToday = 0,
  lessonsCompletedToday = 0,
  quizzesPassedToday = 0,
  streakDays = 0,
  onChallengeComplete,
  className = '',
}: DailyChallengeProps) {
  const challenge = useMemo(() => getTodaysChallenge(), [])

  const currentProgress = getProgress(challenge, {
    questionsAnsweredToday,
    flashcardsReviewedToday,
    lessonsCompletedToday,
    quizzesPassedToday,
  })

  const clamped = Math.min(currentProgress, challenge.targetCount)
  const completed = clamped >= challenge.targetCount
  const percent = Math.round((clamped / challenge.targetCount) * 100)

  const multiplier = getStreakMultiplierValue(streakDays)
  const multiplierLabel = getStreakMultiplierLabel(streakDays)
  const bonusXP = Math.round(challenge.xpReward * multiplier)

  // Fire completion callback once
  const firedRef = { current: false }
  useEffect(() => {
    if (completed && !firedRef.current) {
      firedRef.current = true
      onChallengeComplete?.(challenge)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed])

  const dayLabel = getDayOfWeek()

  return (
    <div
      className={[
        'rounded-xl border px-5 py-4 transition-all duration-300',
        completed
          ? 'border-green-500/30 bg-green-500/8'
          : 'border-[#EA580C]/20 bg-white/5',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={`Daily challenge: ${challenge.title}`}
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {dayLabel}'s Challenge
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden="true">{challenge.icon}</span>
            <h3 className="text-base font-bold text-white leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {challenge.title}
            </h3>
          </div>
        </div>

        {/* Completion badge */}
        {completed ? (
          <div
            className="flex shrink-0 items-center gap-1 rounded-full border border-green-500/40 bg-green-500/15 px-2.5 py-1 text-xs font-bold text-green-400"
            role="status"
            aria-label="Challenge complete"
          >
            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
              <circle cx="6" cy="6" r="5.5" fill="#22c55e" />
              <path d="M3 6.5l2 2L9 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Done!
          </div>
        ) : (
          <div className="shrink-0 rounded-full border border-[#EA580C]/30 bg-[#EA580C]/10 px-2.5 py-1 text-xs font-bold text-[#EA580C]">
            {percent}%
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mb-3 text-sm text-white/60" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {challenge.description}
      </p>

      {/* Progress bar */}
      <div className="mb-3">
        <div
          className="h-2.5 w-full overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={challenge.targetCount}
          aria-label={`${clamped} of ${challenge.targetCount} ${challenge.type}`}
        >
          <div
            className={[
              'h-full rounded-full transition-all duration-700',
              completed
                ? 'bg-green-500'
                : 'bg-gradient-to-r from-[#EA580C] to-[#ea580c]',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-1.5 flex items-center justify-between gap-1">
          <span className="text-xs text-white/40" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {clamped} / {challenge.targetCount}
          </span>
          <span className="text-xs text-white/40" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {challenge.targetCount - clamped > 0
              ? `${challenge.targetCount - clamped} to go`
              : 'Complete!'}
          </span>
        </div>
      </div>

      {/* Reward row */}
      <div className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
        {/* XP reward */}
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5 rounded-full bg-[#1E40AF]/20 text-center text-xs font-black leading-5 text-[#1E40AF]" aria-hidden="true">
            XP
          </div>
          <span className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {completed ? (
              <span className="text-green-400">+{bonusXP} earned</span>
            ) : (
              <span>+{bonusXP} reward</span>
            )}
          </span>
          {multiplier > 1 && (
            <span
              className="rounded-full border border-[#EA580C]/30 bg-[#EA580C]/10 px-1.5 py-0.5 text-xs font-bold text-[#EA580C]"
              title={`${streakDays}-day streak multiplier`}
            >
              {multiplierLabel}
            </span>
          )}
        </div>

        {/* Streak indicator */}
        {streakDays > 0 && (
          <div className="flex items-center gap-1 text-xs text-white/40">
            <span aria-hidden="true">🔥</span>
            <span style={{ fontFamily: 'Roboto, sans-serif' }}>
              {streakDays} day streak
            </span>
          </div>
        )}
      </div>

      {/* Base vs bonus breakdown if streak active */}
      {multiplier > 1 && (
        <p className="mt-2 text-center text-xs text-white/30" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Base {challenge.xpReward} XP &times; {multiplierLabel} streak bonus = {bonusXP} XP
        </p>
      )}
    </div>
  )
}
