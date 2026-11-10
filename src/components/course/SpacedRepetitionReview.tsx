'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SRCard {
  id: number
  termKey: string
  term: string
  definition: string
  example: string | null
  easeFactor: number
  intervalDays: number
  repetitions: number
  status: string
  nextReviewDate: string
  lastReviewDate: string | null
  quality: number | null
}

export interface SRStats {
  dueTotal: number
  graduated: number
  reviewedToday: number
  totalCards: number
}

interface RatingButton {
  label: string
  sublabel: string
  quality: number
  color: string
  hoverColor: string
  borderColor: string
}

const RATING_BUTTONS: RatingButton[] = [
  {
    label: 'Again',
    sublabel: '< 1 day',
    quality: 1,
    color: 'bg-red-900/40',
    hoverColor: 'hover:bg-red-800/60',
    borderColor: 'border-red-700/60',
  },
  {
    label: 'Hard',
    sublabel: '~2 days',
    quality: 2,
    color: 'bg-orange-900/40',
    hoverColor: 'hover:bg-orange-800/60',
    borderColor: 'border-orange-700/60',
  },
  {
    label: 'Good',
    sublabel: '~6 days',
    quality: 3,
    color: 'bg-blue-900/40',
    hoverColor: 'hover:bg-blue-800/60',
    borderColor: 'border-[#1E40AF]/60',
  },
  {
    label: 'Easy',
    sublabel: '10+ days',
    quality: 5,
    color: 'bg-green-900/40',
    hoverColor: 'hover:bg-green-800/60',
    borderColor: 'border-green-700/60',
  },
]

// ─── Session Complete Screen ──────────────────────────────────────────────────

function SessionComplete({
  reviewedCount,
  stats,
  onDone,
}: {
  reviewedCount: number
  stats: SRStats | null
  onDone: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-white">
      <div className="w-full max-w-md">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#EA580C]/40 bg-[#EA580C]/10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EA580C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <h1
          className="mb-2 text-center text-2xl font-extrabold text-white"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Session Complete
        </h1>
        <p className="mb-8 text-center text-sm text-white/50">
          Great work. Your schedule has been updated.
        </p>

        {/* Stats grid */}
        <div className="mb-8 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-extrabold text-[#EA580C]">{reviewedCount}</p>
            <p className="mt-1 text-xs text-white/50 uppercase tracking-wider">Reviewed Today</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-extrabold text-white">{stats?.graduated ?? 0}</p>
            <p className="mt-1 text-xs text-white/50 uppercase tracking-wider">Mastered</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-extrabold text-white">{stats?.totalCards ?? 0}</p>
            <p className="mt-1 text-xs text-white/50 uppercase tracking-wider">Total Cards</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-extrabold text-white">
              {stats ? Math.round((stats.graduated / Math.max(stats.totalCards, 1)) * 100) : 0}%
            </p>
            <p className="mt-1 text-xs text-white/50 uppercase tracking-wider">Mastery Rate</p>
          </div>
        </div>

        <button
          onClick={onDone}
          className="w-full rounded-xl bg-[#EA580C] py-4 text-base font-bold text-white transition hover:bg-[#e0740f] active:scale-[0.98]"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface Props {
  initialCards: SRCard[]
  initialStats: SRStats
  onSessionComplete?: (reviewedCount: number, updatedStats: SRStats | null) => void
}

export default function SpacedRepetitionReview({ initialCards, initialStats, onSessionComplete }: Props) {
  const [cards, setCards] = useState<SRCard[]>(initialCards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sessionDone, setSessionDone] = useState(false)
  const [reviewedCount, setReviewedCount] = useState(0)
  const [stats, setStats] = useState<SRStats>(initialStats)
  const [flipAnimating, setFlipAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'in' | 'out'>('in')
  const [error, setError] = useState('')

  // Touch/swipe tracking
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const currentCard = cards[currentIndex]
  const totalCards = cards.length
  const progressPercent = totalCards > 0 ? Math.round((currentIndex / totalCards) * 100) : 0

  const handleFlip = useCallback(() => {
    if (flipAnimating) return
    setFlipAnimating(true)
    setIsFlipped(true)
    setTimeout(() => setFlipAnimating(false), 350)
  }, [flipAnimating])

  const handleRate = useCallback(async (quality: number) => {
    if (!currentCard || isSubmitting) return

    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/course/spaced-repetition/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId: currentCard.id, quality }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error ?? 'Review failed')
      }

      // Animate slide out
      setSlideDirection('out')

      setTimeout(async () => {
        const nextIndex = currentIndex + 1
        setReviewedCount((prev) => prev + 1)

        if (nextIndex >= cards.length) {
          // Session done — re-fetch updated stats
          try {
            const statsRes = await fetch('/api/course/spaced-repetition/due?limit=1')
            const statsData = await statsRes.json()
            const updatedStats = statsData.stats ?? null
            if (updatedStats) setStats(updatedStats)
            setSessionDone(true)
            onSessionComplete?.(reviewedCount + 1, updatedStats)
          } catch {
            setSessionDone(true)
            onSessionComplete?.(reviewedCount + 1, null)
          }
        } else {
          setCurrentIndex(nextIndex)
          setIsFlipped(false)
          setSlideDirection('in')
          setIsSubmitting(false)
        }
      }, 300)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setIsSubmitting(false)
    }
  }, [currentCard, currentIndex, cards.length, isSubmitting, reviewedCount, onSessionComplete])

  // Handle keyboard shortcuts — defined after handleFlip/handleRate are stable
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (sessionDone || isSubmitting) return

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault()
        if (!isFlipped) {
          handleFlip()
        }
      }

      if (isFlipped && !isSubmitting) {
        if (e.key === '1') handleRate(1)
        if (e.key === '2') handleRate(2)
        if (e.key === '3') handleRate(3)
        if (e.key === '5') handleRate(5)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isFlipped, sessionDone, isSubmitting, handleFlip, handleRate])

  // Touch gesture handling
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return

    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current

    // Only trigger if horizontal swipe is dominant and long enough
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (!isFlipped) {
        handleFlip()
      }
    } else if (Math.abs(dy) < 30 && Math.abs(dx) < 30) {
      // Tap
      if (!isFlipped) {
        handleFlip()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  if (sessionDone) {
    return (
      <SessionComplete
        reviewedCount={reviewedCount}
        stats={stats}
        onDone={() => {
          window.location.href = '/course/dashboard'
        }}
      />
    )
  }

  if (!currentCard) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <p className="text-white/50">No cards to review.</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white select-none">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <a
            href="/course/dashboard"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/50 hover:border-white/20 hover:text-white transition"
            aria-label="Back to dashboard"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </a>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Flashcard Review</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-white/40">
            <span className="font-bold text-white">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            <span>{totalCards}</span>
          </span>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-20 overflow-hidden rounded-full bg-white/10 sm:w-28">
              <div
                className="h-2 rounded-full bg-[#EA580C] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Session Stats Bar */}
      <div className="flex items-center justify-center gap-6 border-b border-white/5 bg-white/[0.02] px-4 py-2 text-xs text-white/40">
        <span>
          Reviewed today:
          <span className="ml-1 font-semibold text-white/60">{stats.reviewedToday + reviewedCount}</span>
        </span>
        <span className="h-3 w-px bg-white/10" />
        <span>
          Mastered:
          <span className="ml-1 font-semibold text-[#EA580C]">{stats.graduated}</span>
        </span>
        <span className="h-3 w-px bg-white/10" />
        <span>
          Total:
          <span className="ml-1 font-semibold text-white/60">{stats.totalCards}</span>
        </span>
      </div>

      {/* Card Area */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-2xl">

          {/* Status badge */}
          <div className="mb-4 flex items-center justify-center">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                currentCard.status === 'new'
                  ? 'bg-blue-900/30 text-blue-400 border border-blue-800/40'
                  : currentCard.status === 'learning'
                  ? 'bg-orange-900/30 text-orange-400 border border-orange-800/40'
                  : currentCard.status === 'graduated'
                  ? 'bg-green-900/30 text-green-400 border border-green-800/40'
                  : 'bg-white/5 text-white/40 border border-white/10'
              }`}
            >
              {currentCard.status}
            </span>
          </div>

          {/* Flashcard */}
          <div
            ref={cardRef}
            className={`relative cursor-pointer rounded-2xl border transition-all duration-300 ${
              isFlipped
                ? 'border-[#EA580C]/30 bg-[#EA580C]/5'
                : 'border-white/10 bg-white/[0.04] hover:border-white/20'
            } ${slideDirection === 'out' ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
            style={{ transition: 'opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease' }}
            onClick={() => { if (!isFlipped) handleFlip() }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label={isFlipped ? 'Card showing definition' : 'Tap to reveal definition'}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); if (!isFlipped) handleFlip() } }}
          >
            {/* Front: Term */}
            <div className={`px-6 py-10 sm:px-10 sm:py-14 text-center ${isFlipped ? 'hidden' : 'block'}`}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
                Term
              </p>
              <h2
                className="text-2xl font-extrabold leading-tight text-white sm:text-3xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {currentCard.term}
              </h2>
              <p className="mt-8 text-xs text-white/20">
                Tap or press Space to reveal
              </p>
            </div>

            {/* Back: Definition + Example */}
            <div className={`px-6 py-8 sm:px-10 sm:py-12 ${isFlipped ? 'block' : 'hidden'}`}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#EA580C]/70">
                Definition
              </p>
              <h2
                className="mb-0 text-xl font-extrabold text-white sm:text-2xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {currentCard.term}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                {currentCard.definition}
              </p>

              {currentCard.example && (
                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Example
                  </p>
                  <p className="text-sm leading-relaxed text-white/60 italic">
                    {currentCard.example}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Rating Buttons (shown after flip) */}
          {isFlipped && (
            <div className="mt-6">
              <p className="mb-3 text-center text-xs text-white/30 uppercase tracking-wider">
                How well did you know this?
              </p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {RATING_BUTTONS.map((btn) => (
                  <button
                    key={btn.quality}
                    onClick={() => handleRate(btn.quality)}
                    disabled={isSubmitting}
                    className={`flex flex-col items-center justify-center rounded-xl border py-3 sm:py-4 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${btn.color} ${btn.hoverColor} ${btn.borderColor}`}
                  >
                    <span className="text-sm font-bold text-white sm:text-base">{btn.label}</span>
                    <span className="mt-0.5 text-[10px] text-white/40">{btn.sublabel}</span>
                  </button>
                ))}
              </div>

              {/* Keyboard hint */}
              <p className="mt-3 text-center text-[11px] text-white/20">
                Keyboard: <kbd className="rounded px-1 py-0.5 bg-white/5 font-mono text-[10px]">1</kbd> Again &nbsp;
                <kbd className="rounded px-1 py-0.5 bg-white/5 font-mono text-[10px]">2</kbd> Hard &nbsp;
                <kbd className="rounded px-1 py-0.5 bg-white/5 font-mono text-[10px]">3</kbd> Good &nbsp;
                <kbd className="rounded px-1 py-0.5 bg-white/5 font-mono text-[10px]">5</kbd> Easy
              </p>
            </div>
          )}

          {/* Hint when not flipped */}
          {!isFlipped && (
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/20">
              <span>Swipe or tap to flip</span>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-xl border border-red-800/40 bg-red-900/20 px-4 py-3 text-center text-sm text-red-400">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
