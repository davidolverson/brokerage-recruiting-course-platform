'use client'

import { lazy, Suspense } from 'react'

const FlashcardActivity = lazy(() => import('./FlashcardActivity'))
const MiniQuizActivity = lazy(() => import('./MiniQuizActivity'))
const DragDropActivity = lazy(() => import('./DragDropActivity'))
const ScenarioActivity = lazy(() => import('./ScenarioActivity'))
const CalculatorActivity = lazy(() => import('./CalculatorActivity'))

type ElementType = 'flashcard' | 'mini_quiz' | 'drag_drop' | 'scenario' | 'calculator'

interface Props {
  type: ElementType
  prompt: string
}

const TYPE_LABELS: Record<ElementType, string> = {
  flashcard: 'Flashcards',
  mini_quiz: 'Quick Quiz',
  drag_drop: 'Drag & Drop',
  scenario: 'Scenario',
  calculator: 'Calculator',
}

const TYPE_COLORS: Record<ElementType, string> = {
  flashcard: 'bg-yellow-100 text-yellow-800',
  mini_quiz: 'bg-green-100 text-green-800',
  drag_drop: 'bg-purple-100 text-purple-700',
  scenario: 'bg-orange-100 text-orange-700',
  calculator: 'bg-gray-100 text-gray-700',
}

function LoadingCard() {
  return (
    <div className="min-h-[120px] animate-pulse rounded-xl border border-gray-100 bg-gray-50 p-5" aria-busy="true" aria-label="Loading activity" />
  )
}

export default function InteractiveElement({ type, prompt }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-start gap-3">
        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${TYPE_COLORS[type]}`}>
          {TYPE_LABELS[type]}
        </span>
        <p className="text-xs text-gray-500 leading-relaxed pt-0.5" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {prompt}
        </p>
      </div>

      {/* Activity */}
      <Suspense fallback={<LoadingCard />}>
        {type === 'flashcard' && <FlashcardActivity prompt={prompt} />}
        {type === 'mini_quiz' && <MiniQuizActivity prompt={prompt} />}
        {type === 'drag_drop' && <DragDropActivity prompt={prompt} />}
        {type === 'scenario' && <ScenarioActivity prompt={prompt} />}
        {type === 'calculator' && <CalculatorActivity prompt={prompt} />}
      </Suspense>
    </div>
  )
}
