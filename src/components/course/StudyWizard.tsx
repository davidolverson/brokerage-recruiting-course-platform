'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { StudyWizardMiniQuiz } from './StudyWizardMiniQuiz'
import {
  getChapterWizardData,
  getRandomMotivationalMessage,
  getRandomBreakMessage,
  getRandomVirginiafact,
  getNextStudyRecommendation,
  getModuleStudyTips,
  type WizardTip,
  type WizardBreakMessage,
  type WizardMotivationalMessage,
} from '@/lib/data/study-wizard-data'
import { COURSE_TERMS } from '@/lib/data/course-terms'

// ── Types ─────────────────────────────────────────────────────────────────────

type WizardView =
  | 'home'
  | 'explain'
  | 'quiz'
  | 'keyterms'
  | 'studytip'
  | 'break'
  | 'whatsnext'

interface Message {
  id: string
  role: 'wizard' | 'user'
  content: string
  timestamp: number
}

interface StudyWizardProps {
  lessonSlug: string
  chapterSlug: string
  moduleSlug: string
  lessonTitle?: string
  chapterTitle?: string
  keyTerms?: string[]
  progressPercent?: number
  currentStreak?: number
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

// ── Quick action buttons config ───────────────────────────────────────────────

interface QuickAction {
  id: WizardView
  label: string
  icon: string
  description: string
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'explain',
    label: 'Explain Simply',
    icon: '💡',
    description: 'Get a plain-language breakdown of this topic',
  },
  {
    id: 'quiz',
    label: 'Quiz Me',
    icon: '✏️',
    description: '3 quick questions from this chapter',
  },
  {
    id: 'keyterms',
    label: 'Key Terms',
    icon: '📖',
    description: 'Review the important vocabulary',
  },
  {
    id: 'studytip',
    label: 'Study Tip',
    icon: '🧠',
    description: 'Mnemonics and memory tricks for this topic',
  },
  {
    id: 'whatsnext',
    label: "What's Next?",
    icon: '🗺',
    description: 'Recommended next steps based on your progress',
  },
  {
    id: 'break',
    label: 'I Need a Break',
    icon: '☕',
    description: 'Recharge and come back stronger',
  },
]

// ── Main Component ─────────────────────────────────────────────────────────────

export function StudyWizard({
  lessonSlug,
  chapterSlug,
  moduleSlug,
  lessonTitle,
  chapterTitle,
  keyTerms = [],
  progressPercent = 0,
  currentStreak = 0,
}: StudyWizardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentView, setCurrentView] = useState<WizardView>('home')
  const [motivationalMsg] = useState<WizardMotivationalMessage>(() => getRandomMotivationalMessage())
  const [breakMsg] = useState<WizardBreakMessage>(() => getRandomBreakMessage())
  const [virginiaFact] = useState<string>(() => getRandomVirginiafact())
  const [keyTermIndex, setKeyTermIndex] = useState(0)
  const [tipIndex, setTipIndex] = useState(0)
  const [hasBeenOpened, setHasBeenOpened] = useState(false)

  const panelRef = useRef<HTMLDivElement>(null)

  const chapterData = getChapterWizardData(chapterSlug)
  const tips: WizardTip[] = chapterData?.tipsAndMnemonics ?? []
  const moduleTips = getModuleStudyTips(moduleSlug)
  const nextRecommendation = getNextStudyRecommendation(chapterSlug)

  // Persist open/closed state in localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('study-wizard-open')
      if (stored === 'true') {
        setIsOpen(true)
        setHasBeenOpened(true)
      }
    } catch {
      // localStorage unavailable
    }
  }, [])

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev
      if (next && !hasBeenOpened) setHasBeenOpened(true)
      try {
        localStorage.setItem('study-wizard-open', String(next))
      } catch {
        // silently ignore
      }
      return next
    })
    if (!isOpen) setCurrentView('home')
  }, [isOpen, hasBeenOpened])

  const navigateTo = useCallback((view: WizardView) => {
    setCurrentView(view)
  }, [])

  const goHome = useCallback(() => {
    setCurrentView('home')
  }, [])

  // Close on outside click (mobile UX)
  useEffect(() => {
    if (!isOpen) return
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        const target = e.target as HTMLElement
        if (target.closest('[data-wizard-toggle]')) return
        setIsOpen(false)
        try {
          localStorage.setItem('study-wizard-open', 'false')
        } catch {
          // silently ignore
        }
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false)
        try {
          localStorage.setItem('study-wizard-open', 'false')
        } catch {
          // silently ignore
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen])

  // Valid key terms that exist in COURSE_TERMS
  const validKeyTerms = keyTerms.filter((t) => !!COURSE_TERMS[t])
  const currentTerm = validKeyTerms[keyTermIndex]
  const currentTermData = currentTerm ? COURSE_TERMS[currentTerm] : null

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Floating Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          className="flex w-[340px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl shadow-2xl"
          style={{
            backgroundColor: '#111111',
            border: '1px solid rgba(255,255,255,0.1)',
            maxHeight: 'min(580px, calc(100vh - 120px))',
          }}
          role="dialog"
          aria-label="Study Wizard"
          aria-modal="false"
        >
          {/* Header */}
          <div
            className="flex shrink-0 items-center justify-between px-4 py-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center gap-2">
              {currentView !== 'home' && (
                <button
                  onClick={goHome}
                  className="mr-0.5 flex h-6 w-6 items-center justify-center rounded-full text-white/40 transition hover:text-white/80"
                  aria-label="Back to main menu"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
              )}
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(234,88,12,0.15)' }}
              >
                <GraduationCapIcon className="h-4 w-4 text-[#EA580C]" />
              </div>
              <div>
                <p
                  className="text-[13px] font-bold text-white"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Study Wizard
                </p>
                {chapterTitle && (
                  <p className="text-[10px] text-white/30 leading-none mt-0.5 truncate max-w-[180px]">
                    {chapterTitle}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Streak pill */}
              {currentStreak > 0 && (
                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgba(234,88,12,0.15)', color: '#EA580C' }}
                >
                  <span aria-hidden="true">🔥</span>
                  <span>{currentStreak}d</span>
                </div>
              )}
              {/* Progress pill */}
              {progressPercent > 0 && (
                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                >
                  <span>{progressPercent}%</span>
                </div>
              )}
              <button
                onClick={toggleOpen}
                className="flex h-6 w-6 items-center justify-center rounded-full text-white/40 transition hover:text-white/80"
                aria-label="Close Study Wizard"
              >
                <XIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-3 scrollbar-thin">
            {currentView === 'home' && (
              <HomeView
                lessonTitle={lessonTitle}
                motivationalMsg={motivationalMsg}
                virginiaFact={virginiaFact}
                progressPercent={progressPercent}
                onNavigate={navigateTo}
              />
            )}

            {currentView === 'explain' && (
              <ExplainView chapterData={chapterData} chapterTitle={chapterTitle} />
            )}

            {currentView === 'quiz' && (
              <StudyWizardMiniQuiz chapterSlug={chapterSlug} onClose={goHome} />
            )}

            {currentView === 'keyterms' && (
              <KeyTermsView
                validKeyTerms={validKeyTerms}
                currentTerm={currentTerm}
                currentTermData={currentTermData}
                keyTermIndex={keyTermIndex}
                setKeyTermIndex={setKeyTermIndex}
              />
            )}

            {currentView === 'studytip' && (
              <StudyTipView
                tips={tips}
                moduleTips={moduleTips}
                tipIndex={tipIndex}
                setTipIndex={setTipIndex}
                chapterSlug={chapterSlug}
              />
            )}

            {currentView === 'whatsnext' && (
              <WhatNextView nextRecommendation={nextRecommendation} chapterTitle={chapterTitle} />
            )}

            {currentView === 'break' && (
              <BreakView breakMsg={breakMsg} onBack={goHome} />
            )}
          </div>

          {/* Footer: quick actions strip (only on home) */}
          {currentView === 'home' && (
            <div
              className="shrink-0 px-4 pb-4 pt-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/30">
                Quick actions
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => navigateTo(action.id)}
                    className="flex flex-col items-center gap-1 rounded-xl py-2.5 px-1 text-center transition-all hover:scale-[1.03] active:scale-95"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    title={action.description}
                  >
                    <span className="text-base leading-none" aria-hidden="true">
                      {action.icon}
                    </span>
                    <span
                      className="text-[10px] font-semibold leading-tight text-white/70"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        data-wizard-toggle
        onClick={toggleOpen}
        className="relative flex h-13 w-13 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        style={{
          backgroundColor: isOpen ? '#e0740f' : '#EA580C',
          height: '52px',
          width: '52px',
        }}
        aria-label={isOpen ? 'Close Study Wizard' : 'Open Study Wizard'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <XIcon className="h-5 w-5 text-white" />
        ) : (
          <GraduationCapIcon className="h-6 w-6 text-white" />
        )}

        {/* Notification dot (first time / not yet opened) */}
        {!hasBeenOpened && (
          <span
            className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold text-white"
            style={{ backgroundColor: '#1E40AF' }}
            aria-hidden="true"
          >
            !
          </span>
        )}
      </button>
    </div>
  )
}

// ── Sub-views ─────────────────────────────────────────────────────────────────

function HomeView({
  lessonTitle,
  motivationalMsg,
  virginiaFact,
  progressPercent,
  onNavigate,
}: {
  lessonTitle?: string
  motivationalMsg: WizardMotivationalMessage
  virginiaFact: string
  progressPercent: number
  onNavigate: (view: WizardView) => void
}) {
  return (
    <div className="space-y-3">
      {/* Greeting */}
      <div
        className="rounded-xl p-3.5"
        style={{ backgroundColor: 'rgba(234,88,12,0.08)', border: '1px solid rgba(234,88,12,0.15)' }}
      >
        <p className="text-xs font-semibold text-[#EA580C] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {lessonTitle ? `Studying: ${lessonTitle}` : 'Ready to Study'}
        </p>
        <p className="text-[11px] leading-relaxed text-white/60">
          {motivationalMsg.text}
        </p>
      </div>

      {/* Progress bar (if available) */}
      {progressPercent > 0 && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[10px] font-medium text-white/40">Course Progress</span>
            <span className="text-[10px] font-bold text-[#EA580C]">{progressPercent}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%`, backgroundColor: '#EA580C' }}
            />
          </div>
        </div>
      )}

      {/* Virginia fact */}
      <div
        className="rounded-xl p-3"
        style={{ backgroundColor: 'rgba(30,64,175,0.12)', border: '1px solid rgba(30,64,175,0.2)' }}
      >
        <p className="mb-1 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#4d7fdb' }}>
          Virginia Market
        </p>
        <p className="text-[11px] leading-relaxed text-white/50">{virginiaFact}</p>
      </div>

      {/* Stuck prompt */}
      <p className="text-center text-[11px] text-white/30">
        Choose an action below to get help
      </p>
    </div>
  )
}

function ExplainView({
  chapterData,
  chapterTitle,
}: {
  chapterData: ReturnType<typeof getChapterWizardData>
  chapterTitle?: string
}) {
  if (!chapterData) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
        <p className="text-sm text-white/50">
          Simplified explanations for this chapter are coming soon.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div>
        <p
          className="text-sm font-bold text-white mb-1"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Plain-Language Summary
        </p>
        {chapterTitle && (
          <p className="text-[10px] text-white/30 mb-2">{chapterTitle}</p>
        )}
      </div>

      {/* Summary card */}
      <div
        className="rounded-xl p-3.5"
        style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <p className="text-xs leading-relaxed text-white/70">
          {chapterData.simplifiedSummary}
        </p>
      </div>

      {/* Common confusion points */}
      {chapterData.commonConfusionPoints.length > 0 && (
        <div>
          <p
            className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/30"
          >
            Common Confusion Points
          </p>
          <div className="space-y-1.5">
            {chapterData.commonConfusionPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-2.5 rounded-lg p-2.5"
                style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.12)' }}
              >
                <span className="mt-0.5 shrink-0 text-[10px] text-red-400" aria-hidden="true">!</span>
                <p className="text-[11px] leading-snug text-white/60">{point}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Study technique */}
      {chapterData.studyTechnique && (
        <div
          className="rounded-xl p-3"
          style={{ backgroundColor: 'rgba(30,64,175,0.1)', border: '1px solid rgba(30,64,175,0.2)' }}
        >
          <p className="mb-1 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#4d7fdb' }}>
            Recommended Technique
          </p>
          <p className="text-[11px] leading-relaxed text-white/60">
            {chapterData.studyTechnique}
          </p>
        </div>
      )}
    </div>
  )
}

function KeyTermsView({
  validKeyTerms,
  currentTerm,
  currentTermData,
  keyTermIndex,
  setKeyTermIndex,
}: {
  validKeyTerms: string[]
  currentTerm: string | undefined
  currentTermData: { definition: string; example?: string } | null
  keyTermIndex: number
  setKeyTermIndex: (idx: number) => void
}) {
  if (validKeyTerms.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
        <p className="text-sm text-white/50">
          No key terms have been loaded for this lesson yet.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Key Terms
        </p>
        <span className="text-[10px] text-white/30">
          {keyTermIndex + 1} / {validKeyTerms.length}
        </span>
      </div>

      {/* Term pills */}
      <div className="flex flex-wrap gap-1.5">
        {validKeyTerms.map((term, i) => (
          <button
            key={term}
            onClick={() => setKeyTermIndex(i)}
            className="rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all"
            style={
              i === keyTermIndex
                ? { backgroundColor: '#EA580C', color: 'white' }
                : { backgroundColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }
            }
          >
            {term}
          </button>
        ))}
      </div>

      {/* Definition card */}
      {currentTerm && currentTermData && (
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            className="mb-2 text-sm font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {currentTerm}
          </p>
          <p className="text-xs leading-relaxed text-white/65">
            {currentTermData.definition}
          </p>
          {currentTermData.example && (
            <div
              className="mt-3 rounded-lg p-2.5"
              style={{ backgroundColor: 'rgba(234,88,12,0.07)', border: '1px solid rgba(234,88,12,0.12)' }}
            >
              <p className="mb-0.5 text-[9px] font-bold uppercase tracking-wider text-[#EA580C]/60">
                Example
              </p>
              <p className="text-[11px] leading-relaxed text-white/50">
                {currentTermData.example}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Prev/Next */}
      {validKeyTerms.length > 1 && (
        <div className="flex gap-2">
          <button
            onClick={() => setKeyTermIndex((keyTermIndex - 1 + validKeyTerms.length) % validKeyTerms.length)}
            className="flex-1 rounded-lg border py-1.5 text-xs font-semibold text-white/50 transition hover:text-white/80"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            Previous
          </button>
          <button
            onClick={() => setKeyTermIndex((keyTermIndex + 1) % validKeyTerms.length)}
            className="flex-1 rounded-lg bg-[#EA580C] py-1.5 text-xs font-semibold text-white transition hover:bg-[#e0740f]"
          >
            Next Term
          </button>
        </div>
      )}
    </div>
  )
}

function StudyTipView({
  tips,
  moduleTips,
  tipIndex,
  setTipIndex,
  chapterSlug,
}: {
  tips: WizardTip[]
  moduleTips: string[]
  tipIndex: number
  setTipIndex: (i: number) => void
  chapterSlug: string
}) {
  const hasTips = tips.length > 0

  if (!hasTips && moduleTips.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
        <p className="text-sm text-white/50">
          Study tips for this chapter are being added. Check back soon.
        </p>
      </div>
    )
  }

  const currentTip = tips[tipIndex]

  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
        Memory Tricks & Tips
      </p>

      {hasTips && currentTip && (
        <div className="space-y-2">
          {/* Mnemonic */}
          {currentTip.mnemonic && (
            <div
              className="rounded-xl p-3.5"
              style={{ backgroundColor: 'rgba(234,88,12,0.08)', border: '1px solid rgba(234,88,12,0.2)' }}
            >
              <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-[#EA580C]/70">
                Mnemonic
              </p>
              <p
                className="text-xs font-semibold leading-snug text-white"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {currentTip.mnemonic}
              </p>
            </div>
          )}

          {/* Quick tip */}
          <div
            className="rounded-xl p-3"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-white/30">
              Quick Tip
            </p>
            <p className="text-[11px] leading-relaxed text-white/65">
              {currentTip.tip}
            </p>
          </div>

          {/* Common confusion */}
          <div
            className="rounded-xl p-3"
            style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.12)' }}
          >
            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-red-400/60">
              Watch Out For
            </p>
            <p className="text-[11px] leading-relaxed text-white/55">
              {currentTip.commonConfusion}
            </p>
          </div>

          {/* Navigate between tips */}
          {tips.length > 1 && (
            <div className="flex gap-2">
              <button
                onClick={() => setTipIndex((tipIndex - 1 + tips.length) % tips.length)}
                className="flex-1 rounded-lg border py-1.5 text-xs font-semibold text-white/50 transition hover:text-white/80"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                Previous
              </button>
              <button
                onClick={() => setTipIndex((tipIndex + 1) % tips.length)}
                className="flex-1 rounded-lg bg-[#EA580C] py-1.5 text-xs font-semibold text-white transition hover:bg-[#e0740f]"
              >
                Next Tip
              </button>
            </div>
          )}
        </div>
      )}

      {/* Module-level tips */}
      {moduleTips.length > 0 && (
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/30">
            Module Study Tips
          </p>
          <div className="space-y-1.5">
            {moduleTips.map((tip, i) => (
              <div
                key={i}
                className="flex gap-2.5 rounded-lg p-2.5"
                style={{ backgroundColor: 'rgba(30,64,175,0.08)', border: '1px solid rgba(30,64,175,0.15)' }}
              >
                <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: '#4d7fdb' }} aria-hidden="true">
                  {i + 1}
                </span>
                <p className="text-[11px] leading-snug text-white/60">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function WhatNextView({
  nextRecommendation,
  chapterTitle,
}: {
  nextRecommendation: string
  chapterTitle?: string
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
        What to Study Next
      </p>

      {chapterTitle && (
        <div
          className="rounded-xl p-3"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-[10px] font-medium text-white/30 mb-0.5">Currently on</p>
          <p className="text-xs font-semibold text-white/70">{chapterTitle}</p>
        </div>
      )}

      {/* Recommendation */}
      <div
        className="rounded-xl p-4"
        style={{ backgroundColor: 'rgba(234,88,12,0.08)', border: '1px solid rgba(234,88,12,0.2)' }}
      >
        <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wider text-[#EA580C]/70">
          Recommended Next Step
        </p>
        <p className="text-xs leading-relaxed text-white/70">
          {nextRecommendation}
        </p>
      </div>

      {/* General advice */}
      <div
        className="rounded-xl p-3"
        style={{ backgroundColor: 'rgba(30,64,175,0.08)', border: '1px solid rgba(30,64,175,0.15)' }}
      >
        <p className="mb-1 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#4d7fdb' }}>
          Spaced Repetition Tip
        </p>
        <p className="text-[11px] leading-relaxed text-white/55">
          Before moving to the next chapter, spend 5 minutes quizzing yourself on this one. Coming back 24 hours later to review is proven to increase retention by over 50%.
        </p>
      </div>

      <div
        className="rounded-xl p-3"
        style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-white/25">
          Exam Insight
        </p>
        <p className="text-[11px] leading-relaxed text-white/45">
          The Virginia Real Estate Exam draws questions from every module. Consistent daily review of completed chapters, even briefly, is what separates first-time passers from repeat test-takers.
        </p>
      </div>
    </div>
  )
}

function BreakView({
  breakMsg,
  onBack,
}: {
  breakMsg: WizardBreakMessage
  onBack: () => void
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
        Take a Breather
      </p>

      {/* Main message */}
      <div
        className="rounded-xl p-4"
        style={{ backgroundColor: 'rgba(30,64,175,0.1)', border: '1px solid rgba(30,64,175,0.2)' }}
      >
        <p className="text-xs leading-relaxed text-white/70">
          {breakMsg.message}
        </p>
      </div>

      {/* Technique */}
      <div
        className="rounded-xl p-3.5"
        style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-white/25">
          When You Return
        </p>
        <p className="text-[11px] leading-relaxed text-white/55">
          {breakMsg.technique}
        </p>
      </div>

      {/* Timer reminder */}
      <div
        className="flex items-center gap-3 rounded-xl p-3"
        style={{ backgroundColor: 'rgba(234,88,12,0.07)', border: '1px solid rgba(234,88,12,0.15)' }}
      >
        <span className="text-2xl" aria-hidden="true">⏱</span>
        <div>
          <p className="text-[10px] font-bold text-[#EA580C]/80 mb-0.5">5 Minute Guideline</p>
          <p className="text-[10px] leading-relaxed text-white/45">
            Set a 5-minute timer before you step away. Short breaks are restorative. Long breaks break momentum.
          </p>
        </div>
      </div>

      <button
        onClick={onBack}
        className="w-full rounded-xl bg-[#EA580C] py-2.5 text-sm font-bold text-white transition hover:bg-[#e0740f] active:scale-95"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        I am back, let us keep going
      </button>
    </div>
  )
}
