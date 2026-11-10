'use client'

import { useState } from 'react'
import { getScenarioContent } from '@/lib/data/interactive-content'

interface Props {
  prompt: string
}

export default function ScenarioActivity({ prompt }: Props) {
  const content = getScenarioContent(prompt)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  if (!content) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <div className="mb-3 rounded-lg bg-gray-50 border border-gray-200 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Scenario</p>
          <p className="text-sm text-gray-700 leading-relaxed">{prompt}</p>
        </div>
        <p className="text-xs text-gray-400">Full scenario content for this topic is coming soon.</p>
      </div>
    )
  }

  const correctIndex = content.choices.findIndex((c) => c.isCorrect)
  const answered = selected !== null

  function handleSelect(idx: number) {
    if (answered) return
    setSelected(idx)
    setRevealed(true)
  }

  function reset() {
    setSelected(null)
    setRevealed(false)
  }

  const isCorrect = selected !== null && selected === correctIndex

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      {/* Scenario description */}
      <div className="mb-5 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Scenario</p>
        <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {content.situation}
        </p>
      </div>

      {/* Question */}
      <p className="mb-4 text-base font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {content.question}
      </p>

      {/* Choices */}
      <div className="space-y-2" role="radiogroup" aria-label="Scenario choices">
        {content.choices.map((choice, idx) => {
          let borderClass = 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          if (revealed) {
            if (idx === correctIndex) {
              borderClass = 'border-green-400 bg-green-50 text-green-800'
            } else if (idx === selected) {
              borderClass = 'border-red-400 bg-red-50 text-red-800'
            } else {
              borderClass = 'border-gray-100 bg-gray-50 text-gray-400'
            }
          }

          return (
            <button
              key={idx}
              role="radio"
              aria-checked={selected === idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className={`w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all duration-150 ${borderClass} ${answered ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                    revealed
                      ? idx === correctIndex
                        ? 'border-green-500 bg-green-500 text-white'
                        : idx === selected
                        ? 'border-red-400 bg-red-400 text-white'
                        : 'border-gray-200 text-gray-300'
                      : 'border-gray-300 text-gray-500'
                  }`}
                >
                  {revealed && idx === correctIndex
                    ? '✓'
                    : revealed && idx === selected && !isCorrect
                    ? '✗'
                    : String.fromCharCode(65 + idx)}
                </span>
                <span>{choice.label}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Explanation for selected choice */}
      {revealed && selected !== null && (
        <div
          className={`mt-4 rounded-lg border px-4 py-3 text-sm leading-relaxed transition-all ${
            isCorrect ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'
          }`}
          role="alert"
          aria-live="polite"
        >
          <span className="mr-2 font-bold">{isCorrect ? 'Correct!' : 'Not the best answer.'}</span>
          {content.choices[selected].explanation}
        </div>
      )}

      {/* Full analysis */}
      {revealed && (
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">Full Analysis</p>
          <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {content.summary}
          </p>
        </div>
      )}

      {/* Try again */}
      {revealed && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={reset}
            className="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}
