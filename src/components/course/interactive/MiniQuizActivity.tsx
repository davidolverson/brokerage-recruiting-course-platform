'use client'

import { useState } from 'react'
import { getQuizContent } from '@/lib/data/interactive-content'

interface Props {
  prompt: string
}

type AnswerState = 'unanswered' | 'correct' | 'wrong'

export default function MiniQuizActivity({ prompt }: Props) {
  const content = getQuizContent(prompt)

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered')
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  if (!content || content.questions.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <p className="text-sm text-gray-500">Quiz content for this topic is coming soon.</p>
      </div>
    )
  }

  const questions = content.questions
  const question = questions[currentQ]
  const total = questions.length

  function handleSelect(idx: number) {
    if (answerState !== 'unanswered') return
    setSelected(idx)
    const isCorrect = idx === question.correctIndex
    setAnswerState(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setScore((s) => s + 1)
  }

  function handleNext() {
    if (currentQ + 1 >= total) {
      setFinished(true)
    } else {
      setCurrentQ((q) => q + 1)
      setSelected(null)
      setAnswerState('unanswered')
    }
  }

  function restart() {
    setCurrentQ(0)
    setSelected(null)
    setAnswerState('unanswered')
    setScore(0)
    setFinished(false)
  }

  const pct = Math.round((score / total) * 100)

  if (finished) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
        <div className="mb-4 text-4xl" aria-hidden="true">
          {pct === 100 ? '🏆' : pct >= 70 ? '✅' : '📖'}
        </div>
        <h3 className="mb-1 text-xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {pct === 100 ? 'Perfect!' : pct >= 70 ? 'Well done!' : 'Keep studying!'}
        </h3>
        <p className="mb-6 text-sm text-gray-500">
          You scored <span className="font-bold text-gray-900">{score}/{total}</span> ({pct}%)
        </p>

        {/* Score bar */}
        <div className="mb-6 h-3 overflow-hidden rounded-full bg-gray-100">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              pct === 100 ? 'bg-green-500' : pct >= 70 ? 'bg-[#EA580C]' : 'bg-red-400'
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>

        <button
          onClick={restart}
          className="rounded-lg bg-[#EA580C] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#e0740f] active:scale-95"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-400">
          Question {currentQ + 1} of {total}
        </span>
        <span className="text-xs font-semibold text-gray-400">
          Score: {score}/{currentQ}
        </span>
      </div>

      {/* Progress dots */}
      <div className="mb-4 flex gap-1.5" aria-hidden="true">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < currentQ ? 'bg-[#EA580C]' : i === currentQ ? 'bg-gray-300' : 'bg-gray-100'
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <p className="mb-5 text-base font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {question.question}
      </p>

      {/* Choices */}
      <div className="space-y-2" role="radiogroup" aria-label="Answer choices">
        {question.choices.map((choice, idx) => {
          let classes =
            'w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all duration-150 '
          if (answerState === 'unanswered') {
            classes +=
              'border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 cursor-pointer'
          } else if (idx === question.correctIndex) {
            classes += 'border-green-400 bg-green-50 text-green-800 cursor-default'
          } else if (idx === selected && answerState === 'wrong') {
            classes += 'border-red-400 bg-red-50 text-red-800 cursor-default'
          } else {
            classes += 'border-gray-100 bg-gray-50 text-gray-400 cursor-default'
          }

          return (
            <button
              key={idx}
              role="radio"
              aria-checked={selected === idx}
              onClick={() => handleSelect(idx)}
              disabled={answerState !== 'unanswered'}
              className={classes}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                    answerState !== 'unanswered'
                      ? idx === question.correctIndex
                        ? 'border-green-500 bg-green-500 text-white'
                        : idx === selected && answerState === 'wrong'
                        ? 'border-red-400 bg-red-400 text-white'
                        : 'border-gray-300 text-gray-300'
                      : 'border-gray-300 text-gray-500'
                  }`}
                >
                  {answerState !== 'unanswered' && idx === question.correctIndex
                    ? '✓'
                    : answerState !== 'unanswered' && idx === selected && answerState === 'wrong'
                    ? '✗'
                    : String.fromCharCode(65 + idx)}
                </span>
                <span>{choice}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {answerState !== 'unanswered' && (
        <div
          className={`mt-4 rounded-lg border px-4 py-3 text-sm leading-relaxed transition-all ${
            answerState === 'correct'
              ? 'border-green-200 bg-green-50 text-green-800'
              : 'border-red-200 bg-red-50 text-red-800'
          }`}
          role="alert"
          aria-live="polite"
        >
          <span className="mr-2 font-bold">{answerState === 'correct' ? 'Correct!' : 'Not quite.'}</span>
          {question.explanation}
        </div>
      )}

      {/* Next button */}
      {answerState !== 'unanswered' && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleNext}
            className="rounded-lg bg-[#EA580C] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#e0740f] active:scale-95"
          >
            {currentQ + 1 < total ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  )
}
