'use client'

import { useState } from 'react'
import { getFlashcardContent } from '@/lib/data/interactive-content'

interface Props {
  prompt: string
}

export default function FlashcardActivity({ prompt }: Props) {
  const content = getFlashcardContent(prompt)
  const cards = content?.cards ?? [{ front: prompt, back: 'Think through the key concepts related to this topic.' }]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewed, setReviewed] = useState<Set<number>>(new Set())
  const [known, setKnown] = useState<Set<number>>(new Set())
  const [finished, setFinished] = useState(false)

  const card = cards[currentIndex]
  const total = cards.length
  const progress = Math.round(((reviewed.size) / total) * 100)

  function flip() {
    setFlipped((f) => !f)
  }

  function handleGotIt() {
    const newKnown = new Set(known).add(currentIndex)
    const newReviewed = new Set(reviewed).add(currentIndex)
    setKnown(newKnown)
    setReviewed(newReviewed)
    advance(newReviewed)
  }

  function handleReviewAgain() {
    const newReviewed = new Set(reviewed).add(currentIndex)
    setReviewed(newReviewed)
    advance(newReviewed)
  }

  function advance(reviewedSet: Set<number>) {
    setFlipped(false)
    if (reviewedSet.size >= total) {
      setFinished(true)
      return
    }
    // Find next unreviewed card, or any card not in known
    const unreviewedCards = Array.from({ length: total }, (_, i) => i).filter(
      (i) => !reviewedSet.has(i)
    )
    if (unreviewedCards.length > 0) {
      setCurrentIndex(unreviewedCards[0])
    }
  }

  function restart() {
    setCurrentIndex(0)
    setFlipped(false)
    setReviewed(new Set())
    setKnown(new Set())
    setFinished(false)
  }

  if (finished) {
    const knownCount = known.size
    const missedCount = total - knownCount
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
        <div className="mb-4 text-4xl" aria-hidden="true">
          {knownCount === total ? '🎉' : knownCount >= total * 0.7 ? '👍' : '📚'}
        </div>
        <h3 className="mb-2 text-xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {knownCount === total ? 'Perfect score!' : 'Deck complete!'}
        </h3>
        <p className="mb-1 text-sm text-gray-600">
          Got it: <span className="font-bold text-green-700">{knownCount}</span> &nbsp;|&nbsp; Review again: <span className="font-bold text-orange-600">{missedCount}</span>
        </p>
        <p className="mb-6 text-xs text-gray-400">{total} cards total</p>
        <button
          onClick={restart}
          className="rounded-lg bg-[#EA580C] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#e0740f] active:scale-95"
        >
          Study Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#EA580C] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-medium text-gray-400">
          {reviewed.size}/{total}
        </span>
      </div>

      {/* Card */}
      <button
        onClick={flip}
        aria-pressed={flipped}
        aria-label={flipped ? 'Card is showing the answer. Click to flip back.' : 'Card is showing the term. Click to reveal answer.'}
        className="group relative w-full cursor-pointer rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
        style={{ minHeight: '200px', perspective: '1000px' }}
      >
        <div
          className="relative h-full w-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            minHeight: '200px',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl p-8"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Term
            </p>
            <p className="text-center text-lg font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {card.front}
            </p>
            <p className="mt-6 text-xs text-gray-400">Click to reveal answer</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gray-50 p-8"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
              Answer
            </p>
            <p className="text-center text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
              {card.back}
            </p>
          </div>
        </div>
      </button>

      {/* Action buttons — only visible when flipped */}
      <div
        className="flex gap-3 transition-all duration-300"
        style={{ opacity: flipped ? 1 : 0, pointerEvents: flipped ? 'auto' : 'none' }}
        aria-hidden={!flipped}
      >
        <button
          onClick={handleReviewAgain}
          className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300 active:scale-95"
        >
          Review Again
        </button>
        <button
          onClick={handleGotIt}
          className="flex-1 rounded-lg bg-[#EA580C] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#e0740f] active:scale-95"
        >
          Got It
        </button>
      </div>

      {/* Card counter dots */}
      <div className="flex justify-center gap-1.5" aria-label={`Card ${currentIndex + 1} of ${total}`}>
        {cards.map((_, i) => (
          <span
            key={i}
            className={`block h-1.5 w-1.5 rounded-full transition-colors ${
              i === currentIndex
                ? 'bg-[#EA580C]'
                : known.has(i)
                ? 'bg-green-500'
                : reviewed.has(i)
                ? 'bg-gray-300'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
