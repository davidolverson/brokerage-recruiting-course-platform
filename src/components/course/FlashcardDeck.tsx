'use client'

import { useState, useCallback } from 'react'
import { COURSE_TERMS } from '@/lib/data/course-terms'

interface FlashcardDeckProps {
  terms: string[]
}

export function FlashcardDeck({ terms }: FlashcardDeckProps) {
  // Only include terms that have definitions
  const validTerms = terms.filter((t) => COURSE_TERMS[t])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<number>>(new Set())

  const total = validTerms.length
  const term = validTerms[currentIndex]
  const termData = term ? COURSE_TERMS[term] : null

  const flip = useCallback(() => setFlipped((f) => !f), [])

  const next = useCallback(
    (markKnown: boolean) => {
      if (markKnown) {
        setKnown((prev) => new Set(prev).add(currentIndex))
      }
      setFlipped(false)
      setCurrentIndex((prev) => (prev + 1) % total)
    },
    [currentIndex, total],
  )

  const prev = useCallback(() => {
    setFlipped(false)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  if (total === 0) return null

  const knownCount = known.size
  const remaining = total - knownCount

  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Flashcards
          </h3>
          <p className="text-xs text-gray-400">
            {currentIndex + 1} of {total} &middot; {knownCount} known &middot; {remaining} remaining
          </p>
        </div>
        {knownCount > 0 && (
          <button
            onClick={() => { setKnown(new Set()); setCurrentIndex(0); setFlipped(false) }}
            className="text-xs text-gray-400 hover:text-gray-700"
          >
            Reset
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-1.5 rounded-full bg-[#EA580C] transition-all duration-300"
          style={{ width: `${total > 0 ? (knownCount / total) * 100 : 0}%` }}
        />
      </div>

      {/* Card */}
      <button
        type="button"
        onClick={flip}
        className="group relative w-full cursor-pointer"
        style={{ perspective: '1000px' }}
        aria-label={flipped ? 'Show term' : 'Show definition'}
      >
        <div
          className="relative min-h-[160px] w-full rounded-xl border border-gray-200 transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front - Term */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gray-50 p-6"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Term</p>
            <p className="text-center text-xl font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {term}
            </p>
            <p className="mt-3 text-xs text-gray-300">Click to flip</p>
          </div>

          {/* Back - Definition */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-black p-6 text-white"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">Definition</p>
            <p className="text-center text-sm leading-relaxed text-white/90">
              {termData?.definition}
            </p>
            {termData?.example && (
              <p className="mt-3 text-center text-xs leading-relaxed text-white/50">
                Example: {termData.example}
              </p>
            )}
          </div>
        </div>
      </button>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          onClick={prev}
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
        >
          &larr; Prev
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => next(false)}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
          >
            Still Learning
          </button>
          <button
            onClick={() => next(true)}
            className="rounded-lg bg-[#EA580C] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#e0740f]"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  )
}
