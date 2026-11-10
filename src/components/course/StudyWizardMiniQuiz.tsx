'use client'

import { useState, useCallback } from 'react'
import { getRandomQuestions } from '@/lib/data/course-questions'

interface StudyWizardMiniQuizProps {
  chapterSlug: string
  onClose: () => void
}

type AnswerState = 'unanswered' | 'correct' | 'wrong'

interface QuizState {
  currentIndex: number
  selected: string | null
  answerState: AnswerState
  score: number
  finished: boolean
}

export function StudyWizardMiniQuiz({ chapterSlug, onClose }: StudyWizardMiniQuizProps) {
  const questions = getRandomQuestions(3, chapterSlug)

  const [state, setState] = useState<QuizState>({
    currentIndex: 0,
    selected: null,
    answerState: 'unanswered',
    score: 0,
    finished: false,
  })

  const question = questions[state.currentIndex]
  const total = questions.length

  const handleSelect = useCallback(
    (optionId: string) => {
      if (state.answerState !== 'unanswered' || !question) return
      const isCorrect = question.options.find((o) => o.id === optionId)?.isCorrect ?? false
      setState((prev) => ({
        ...prev,
        selected: optionId,
        answerState: isCorrect ? 'correct' : 'wrong',
        score: isCorrect ? prev.score + 1 : prev.score,
      }))
    },
    [state.answerState, question],
  )

  const handleNext = useCallback(() => {
    if (state.currentIndex + 1 >= total) {
      setState((prev) => ({ ...prev, finished: true }))
    } else {
      setState((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        selected: null,
        answerState: 'unanswered',
      }))
    }
  }, [state.currentIndex, total])

  const handleRestart = useCallback(() => {
    setState({
      currentIndex: 0,
      selected: null,
      answerState: 'unanswered',
      score: 0,
      finished: false,
    })
  }, [])

  if (questions.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
        <p className="text-sm text-white/60">
          No questions available for this chapter yet. Check back soon.
        </p>
        <button
          onClick={onClose}
          className="mt-3 text-xs font-medium text-[#EA580C] hover:text-[#e0740f] transition-colors"
        >
          Back to Wizard
        </button>
      </div>
    )
  }

  const pct = Math.round((state.score / total) * 100)

  if (state.finished) {
    const passed = pct >= 67
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
        {/* Score visual */}
        <div
          className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2"
          style={{ borderColor: passed ? '#22c55e' : '#EA580C' }}
        >
          <span
            className="text-lg font-extrabold"
            style={{ color: passed ? '#22c55e' : '#EA580C', fontFamily: 'Manrope, sans-serif' }}
          >
            {pct}%
          </span>
        </div>

        <p
          className="mb-1 text-base font-bold text-white"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {pct === 100 ? 'Perfect score!' : passed ? 'Solid work!' : 'Keep reviewing'}
        </p>

        <p className="mb-4 text-xs text-white/50">
          {state.score} of {total} correct
        </p>

        {/* Score bar */}
        <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${pct}%`,
              backgroundColor: passed ? '#22c55e' : '#EA580C',
            }}
          />
        </div>

        {/* Recommendation */}
        <p className="mb-5 text-xs leading-relaxed text-white/60">
          {pct === 100
            ? 'You have this chapter locked in. Move forward with confidence.'
            : passed
            ? 'You are tracking well. A quick flashcard review of the terms will solidify this chapter.'
            : 'Spend a few more minutes on the Key Terms for this chapter before moving on. The explanations above each answer are the fastest way to close the gaps.'}
        </p>

        <div className="flex gap-2">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-lg border border-white/20 py-2 text-xs font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
          >
            Try Again
          </button>
          <button
            onClick={onClose}
            className="flex-1 rounded-lg bg-[#EA580C] py-2 text-xs font-semibold text-white transition hover:bg-[#e0740f] active:scale-95"
          >
            {passed ? 'Keep Going' : 'Review Topic'}
          </button>
        </div>
      </div>
    )
  }

  if (!question) return null

  const correctOption = question.options.find((o) => o.isCorrect)

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-1" aria-label={`Question ${state.currentIndex + 1} of ${total}`}>
          {questions.map((_, i) => (
            <div
              key={i}
              className="h-1 w-6 rounded-full transition-colors"
              style={{
                backgroundColor:
                  i < state.currentIndex
                    ? '#EA580C'
                    : i === state.currentIndex
                    ? 'rgba(255,255,255,0.4)'
                    : 'rgba(255,255,255,0.1)',
              }}
            />
          ))}
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
          Quick Quiz
        </span>
      </div>

      {/* Question */}
      <p
        className="mb-4 text-sm font-semibold leading-snug text-white"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {question.questionText}
      </p>

      {/* Options */}
      <div className="space-y-2" role="radiogroup" aria-label="Answer choices">
        {question.options.map((option) => {
          const isSelected = state.selected === option.id
          const isCorrect = option.isCorrect
          const answered = state.answerState !== 'unanswered'

          let borderColor = 'rgba(255,255,255,0.1)'
          let bgColor = 'transparent'
          let textColor = 'rgba(255,255,255,0.7)'
          let labelBg = 'rgba(255,255,255,0.08)'
          let labelColor = 'rgba(255,255,255,0.4)'

          if (answered) {
            if (isCorrect) {
              borderColor = '#22c55e'
              bgColor = 'rgba(34,197,94,0.08)'
              textColor = '#86efac'
              labelBg = 'rgba(34,197,94,0.2)'
              labelColor = '#86efac'
            } else if (isSelected && !isCorrect) {
              borderColor = '#ef4444'
              bgColor = 'rgba(239,68,68,0.08)'
              textColor = '#fca5a5'
              labelBg = 'rgba(239,68,68,0.2)'
              labelColor = '#fca5a5'
            } else {
              textColor = 'rgba(255,255,255,0.25)'
              labelColor = 'rgba(255,255,255,0.15)'
            }
          } else if (isSelected) {
            borderColor = '#EA580C'
            bgColor = 'rgba(234,88,12,0.1)'
            textColor = 'white'
            labelBg = 'rgba(234,88,12,0.3)'
            labelColor = '#EA580C'
          }

          return (
            <button
              key={option.id}
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(option.id)}
              disabled={answered}
              className="w-full rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-all duration-150"
              style={{
                borderColor,
                backgroundColor: bgColor,
                color: textColor,
                cursor: answered ? 'default' : 'pointer',
              }}
            >
              <span className="flex items-start gap-2.5">
                <span
                  className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold"
                  style={{ backgroundColor: labelBg, color: labelColor }}
                >
                  {answered && isCorrect
                    ? '✓'
                    : answered && isSelected && !isCorrect
                    ? '✗'
                    : option.id.toUpperCase()}
                </span>
                <span className="leading-snug">{option.text}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {state.answerState !== 'unanswered' && (
        <div
          className="mt-3 rounded-lg border px-3 py-2.5 text-xs leading-relaxed"
          style={{
            borderColor: state.answerState === 'correct' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)',
            backgroundColor:
              state.answerState === 'correct' ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
            color: state.answerState === 'correct' ? '#86efac' : '#fca5a5',
          }}
          role="alert"
          aria-live="polite"
        >
          <span className="font-bold">
            {state.answerState === 'correct' ? 'Correct. ' : `Not quite. The answer is "${correctOption?.text}". `}
          </span>
          {question.explanation}
        </div>
      )}

      {/* Next */}
      {state.answerState !== 'unanswered' && (
        <div className="mt-3 flex justify-end">
          <button
            onClick={handleNext}
            className="rounded-lg bg-[#EA580C] px-4 py-1.5 text-xs font-bold text-white transition hover:bg-[#e0740f] active:scale-95"
          >
            {state.currentIndex + 1 < total ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  )
}
