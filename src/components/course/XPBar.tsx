'use client'

import { useEffect, useRef, useState } from 'react'
import { getXPProgress, type Level } from '@/lib/data/gamification-config'

interface XPBarProps {
  totalXP: number
  // When provided, triggers an animated XP gain visual
  pendingXPGain?: number
  compact?: boolean
  onLevelUp?: (newLevel: Level) => void
}

function useAnimatedXP(
  targetXP: number,
  pendingGain: number,
  duration = 1200,
): { displayXP: number; isAnimating: boolean } {
  const [displayXP, setDisplayXP] = useState(targetXP)
  const [isAnimating, setIsAnimating] = useState(false)
  const prevXP = useRef(targetXP)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (targetXP === prevXP.current && pendingGain === 0) return

    const startXP = prevXP.current
    const endXP = targetXP + pendingGain
    prevXP.current = endXP
    setIsAnimating(true)

    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayXP(Math.round(startXP + (endXP - startXP) * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setIsAnimating(false)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [targetXP, pendingGain, duration])

  return { displayXP, isAnimating }
}

export default function XPBar({
  totalXP,
  pendingXPGain = 0,
  compact = false,
  onLevelUp,
}: XPBarProps) {
  const { displayXP, isAnimating } = useAnimatedXP(totalXP, pendingXPGain)
  const prevLevelRef = useRef<number | null>(null)
  const [levelUpFlash, setLevelUpFlash] = useState(false)

  const progress = getXPProgress(displayXP)
  const { currentLevel, nextLevel, xpIntoLevel, xpNeededForNext, progressPercent } = progress

  // Detect level-up and fire callback
  useEffect(() => {
    if (prevLevelRef.current === null) {
      prevLevelRef.current = currentLevel.level
      return
    }
    if (currentLevel.level > prevLevelRef.current) {
      setLevelUpFlash(true)
      onLevelUp?.(currentLevel)
      const t = setTimeout(() => setLevelUpFlash(false), 2000)
      prevLevelRef.current = currentLevel.level
      return () => clearTimeout(t)
    }
    prevLevelRef.current = currentLevel.level
  }, [currentLevel.level, onLevelUp])

  if (compact) {
    return (
      <div className="flex items-center gap-2.5 min-w-0">
        {/* Level badge */}
        <div
          className={[
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-black',
            'transition-all duration-500',
            levelUpFlash
              ? 'scale-125 bg-[#EA580C] text-white ring-2 ring-[#EA580C]/50 ring-offset-1 ring-offset-[#0a0a0a]'
              : 'bg-[#EA580C]/15 text-[#EA580C]',
          ]
            .filter(Boolean)
            .join(' ')}
          title={`Level ${currentLevel.level}: ${currentLevel.title}`}
          aria-label={`Level ${currentLevel.level}`}
        >
          {currentLevel.level}
        </div>

        {/* Progress track */}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <div className="flex items-center justify-between gap-1">
            <span
              className="truncate text-xs font-semibold text-white/80"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {currentLevel.icon} {currentLevel.title}
            </span>
            <span
              className={[
                'shrink-0 text-xs font-bold tabular-nums',
                isAnimating ? 'text-[#EA580C]' : 'text-white/50',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {displayXP.toLocaleString()} XP
            </span>
          </div>

          <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${progressPercent}% to next level`}
          >
            <div
              className={[
                'h-full rounded-full transition-all duration-700',
                levelUpFlash ? 'bg-white' : 'bg-[#EA580C]',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    )
  }

  // ─── Full XP Bar ──────────────────────────────────────────────────────────
  return (
    <div
      className={[
        'rounded-xl border px-5 py-4 transition-all duration-500',
        levelUpFlash
          ? 'border-[#EA580C]/60 bg-[#EA580C]/10 shadow-lg shadow-[#EA580C]/10'
          : 'border-white/10 bg-white/5',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Level header */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          {/* Level number pill */}
          <div
            className={[
              'flex h-9 w-9 items-center justify-center rounded-full text-sm font-black transition-all duration-500',
              levelUpFlash
                ? 'scale-110 bg-[#EA580C] text-white ring-4 ring-[#EA580C]/40'
                : 'bg-[#EA580C]/15 text-[#EA580C]',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-label={`Level ${currentLevel.level}`}
          >
            {currentLevel.level}
          </div>

          <div className="flex flex-col gap-0">
            <span
              className="text-sm font-bold text-white leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {currentLevel.icon} {currentLevel.title}
            </span>
            <span className="text-xs text-white/40" style={{ fontFamily: 'Roboto, sans-serif' }}>
              {currentLevel.description}
            </span>
          </div>
        </div>

        {/* XP counter */}
        <div className="flex flex-col items-end gap-0">
          <span
            className={[
              'text-lg font-black tabular-nums leading-none transition-colors duration-300',
              isAnimating ? 'text-[#EA580C]' : 'text-white',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {displayXP.toLocaleString()}
          </span>
          <span className="text-xs text-white/40">Total XP</span>
        </div>
      </div>

      {/* Progress track */}
      <div
        className="h-3 w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={nextLevel ? `${progressPercent}% to ${nextLevel.title}` : 'Max level reached'}
      >
        <div
          className={[
            'h-full rounded-full transition-all duration-700',
            levelUpFlash
              ? 'bg-white'
              : 'bg-gradient-to-r from-[#EA580C] to-[#ea580c]',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* XP foot labels */}
      {nextLevel ? (
        <div className="mt-2 flex items-center justify-between gap-1">
          <span className="text-xs text-white/40" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {xpIntoLevel.toLocaleString()} / {xpNeededForNext.toLocaleString()} XP
          </span>
          <span className="text-xs text-white/40" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Next: {nextLevel.icon} {nextLevel.title}
          </span>
        </div>
      ) : (
        <p className="mt-2 text-center text-xs font-semibold text-[#EA580C]">
          Max level — Real Estate Mogul
        </p>
      )}

      {/* Level-up flash overlay text */}
      {levelUpFlash && (
        <div
          className="mt-3 rounded-lg border border-[#EA580C]/30 bg-[#EA580C]/10 px-3 py-2 text-center text-sm font-bold text-[#EA580C]"
          role="status"
          aria-live="polite"
        >
          Level Up! You reached {currentLevel.title} {currentLevel.icon}
        </div>
      )}
    </div>
  )
}
