'use client'

import { useState, useCallback } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────────

interface QuizNote {
  questionId: number
  questionText: string
  content: string
  flaggedForReview: boolean
  savedNoteId?: number
}

export interface QuizNotepadProps {
  quizAttemptId: number | null
  pageContext?: string
  onFlagChange?: (questionId: number, flagged: boolean) => void
}

// ─── QuizNotepad ─────────────────────────────────────────────────────────────
// Embeds in the quiz page — one notepad per question with a review flag.
// After quiz, compile all flagged + noted questions into a review list.

export default function QuizNotepad({
  quizAttemptId,
  pageContext = '',
  onFlagChange,
}: QuizNotepadProps) {
  // Map of questionId -> QuizNote state
  const [noteMap, setNoteMap] = useState<Map<number, QuizNote>>(new Map())
  const [savingMap, setSavingMap] = useState<Map<number, boolean>>(new Map())
  const [savedMap, setSavedMap] = useState<Map<number, boolean>>(new Map())

  // ── Get or create a note entry for a question ─────────────────
  function getNote(questionId: number, questionText: string): QuizNote {
    return (
      noteMap.get(questionId) ?? {
        questionId,
        questionText,
        content: '',
        flaggedForReview: false,
      }
    )
  }

  // ── Update note content ────────────────────────────────────────
  function updateContent(questionId: number, questionText: string, content: string) {
    setNoteMap((prev) => {
      const next = new Map(prev)
      const existing = getNote(questionId, questionText)
      next.set(questionId, { ...existing, content })
      return next
    })
  }

  // ── Toggle flag ────────────────────────────────────────────────
  function toggleFlag(questionId: number, questionText: string) {
    setNoteMap((prev) => {
      const next = new Map(prev)
      const existing = getNote(questionId, questionText)
      const newFlagged = !existing.flaggedForReview
      next.set(questionId, { ...existing, flaggedForReview: newFlagged })
      onFlagChange?.(questionId, newFlagged)
      return next
    })
  }

  // ── Save note to API ───────────────────────────────────────────
  const saveNote = useCallback(
    async (questionId: number, questionText: string) => {
      const note = noteMap.get(questionId)
      if (!note || !note.content.trim()) return

      setSavingMap((prev) => new Map(prev).set(questionId, true))

      try {
        const content = note.content.trim()
        const tags = note.flaggedForReview ? ['review-later'] : []

        const method = note.savedNoteId ? 'PUT' : 'POST'
        const url = note.savedNoteId
          ? `/api/course/notes/${note.savedNoteId}`
          : '/api/course/notes'

        const res = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            quizAttemptId,
            noteType: 'quiz',
            content,
            highlightedText: null,
            pageContext: pageContext || null,
            tags,
            // Store question ID in content prefix for later reference
            ...(method === 'POST'
              ? { content: `[Q#${questionId}] ${content}` }
              : {}),
          }),
        })

        if (res.ok) {
          const data = await res.json() as { note: { id: number } }
          setNoteMap((prev) => {
            const next = new Map(prev)
            const existing = prev.get(questionId)!
            next.set(questionId, { ...existing, savedNoteId: data.note.id })
            return next
          })
          setSavedMap((prev) => new Map(prev).set(questionId, true))
          setTimeout(() => {
            setSavedMap((prev) => {
              const next = new Map(prev)
              next.delete(questionId)
              return next
            })
          }, 2000)
        }
      } catch { /* silent */ }

      setSavingMap((prev) => {
        const next = new Map(prev)
        next.delete(questionId)
        return next
      })
    },
    [noteMap, quizAttemptId, pageContext],
  )

  // ── Public API exposed via ref pattern ─────────────────────────
  // Returns all flagged questions for post-quiz summary
  function getFlaggedSummary(): { questionId: number; questionText: string; note: string }[] {
    return Array.from(noteMap.values())
      .filter((n) => n.flaggedForReview || n.content.trim())
      .map((n) => ({
        questionId: n.questionId,
        questionText: n.questionText,
        note: n.content,
      }))
  }

  return {
    // Returns the JSX for a given question
    renderForQuestion(questionId: number, questionText: string) {
      const note = getNote(questionId, questionText)
      const isSaving = savingMap.get(questionId) ?? false
      const isSaved = savedMap.get(questionId) ?? false

      return (
        <QuizQuestionNotepad
          key={questionId}
          note={note}
          isSaving={isSaving}
          isSaved={isSaved}
          onContentChange={(v) => updateContent(questionId, questionText, v)}
          onFlagToggle={() => toggleFlag(questionId, questionText)}
          onSave={() => saveNote(questionId, questionText)}
        />
      )
    },
    getFlaggedSummary,
    noteMap,
  }
}

// ─── QuizQuestionNotepad ─────────────────────────────────────────────────────
// The actual UI for a single question's notepad

interface QuizQuestionNotepadProps {
  note: {
    content: string
    flaggedForReview: boolean
  }
  isSaving: boolean
  isSaved: boolean
  onContentChange: (v: string) => void
  onFlagToggle: () => void
  onSave: () => void
}

export function QuizQuestionNotepad({
  note,
  isSaving,
  isSaved,
  onContentChange,
  onFlagToggle,
  onSave,
}: QuizQuestionNotepadProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={[
        'mt-4 rounded-lg border transition-all duration-200',
        note.flaggedForReview
          ? 'border-[#1E40AF]/50 bg-[#1E40AF]/5'
          : 'border-[#1f1f1f] bg-[#0d0d0d]',
      ].join(' ')}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-3 py-2">
        <button
          type="button"
          onClick={() => setExpanded((p) => !p)}
          className="flex items-center gap-2 text-xs text-[#9CA3AF] hover:text-white"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-90' : ''}`}
            aria-hidden="true"
          >
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-medium">
            {expanded ? 'Hide notepad' : 'Jot a note'}
            {note.content.trim() && !expanded && (
              <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
            )}
          </span>
        </button>

        {/* Flag for review */}
        <button
          type="button"
          onClick={onFlagToggle}
          title={note.flaggedForReview ? 'Remove review flag' : 'Flag for review'}
          className={[
            'flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-all',
            note.flaggedForReview
              ? 'bg-[#1E40AF] text-white'
              : 'border border-[#2a2a2a] text-[#6B7280] hover:border-[#1E40AF]/50 hover:text-[#1E40AF]',
          ].join(' ')}
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
            <path
              d="M3 2v12M3 2l9 4-9 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {note.flaggedForReview ? 'Flagged' : 'Flag to review'}
        </button>
      </div>

      {/* Expandable notepad */}
      {expanded && (
        <div className="border-t border-[#1f1f1f] px-3 pb-3 pt-2">
          <textarea
            value={note.content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="What's tripping you up? What do you want to remember?"
            rows={3}
            className={[
              'w-full resize-none rounded-lg border border-[#2a2a2a] bg-[#111111]',
              'px-3 py-2 text-sm text-white placeholder-[#374151]',
              'focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]',
            ].join(' ')}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          />

          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px] text-[#4B5563]">
              {isSaved && <span className="text-[#16A34A]">Saved to your notes</span>}
            </span>
            <button
              type="button"
              onClick={onSave}
              disabled={isSaving || !note.content.trim()}
              className={[
                'rounded-lg px-3 py-1 text-xs font-semibold text-white transition-colors',
                isSaving || !note.content.trim()
                  ? 'cursor-not-allowed bg-[#EA580C]/30'
                  : 'bg-[#EA580C] hover:bg-[#e0740f]',
              ].join(' ')}
            >
              {isSaving ? 'Saving...' : 'Save Note'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── QuizReviewSummary ───────────────────────────────────────────────────────
// Shown after quiz completion — lists all flagged/noted questions

export interface ReviewItem {
  questionId: number
  questionText: string
  note: string
  isCorrect?: boolean
}

interface QuizReviewSummaryProps {
  items: ReviewItem[]
  onClose?: () => void
}

export function QuizReviewSummary({ items, onClose }: QuizReviewSummaryProps) {
  if (items.length === 0) return null

  return (
    <div className="rounded-xl border border-[#1E40AF]/30 bg-[#1E40AF]/5 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-[#1E40AF]" aria-hidden="true">
            <path
              d="M3 2v12M3 2l9 4-9 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Flagged for Review ({items.length})
          </h3>
        </div>
        {onClose && (
          <button type="button" onClick={onClose} className="text-xs text-[#6B7280] hover:text-white">
            Dismiss
          </button>
        )}
      </div>

      <p className="mb-3 text-xs text-[#9CA3AF]">
        These questions were flagged during the quiz. Head to{' '}
        <a href="/course/notes" className="text-[#EA580C] underline hover:text-[#e0740f]">
          My Notes
        </a>{' '}
        to review them later.
      </p>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.questionId}
            className={[
              'rounded-lg border px-3 py-2.5',
              item.isCorrect === false
                ? 'border-red-500/20 bg-red-500/5'
                : 'border-[#2a2a2a] bg-[#111111]',
            ].join(' ')}
          >
            <div className="flex items-start gap-2">
              {item.isCorrect !== undefined && (
                <span className={`mt-0.5 shrink-0 text-xs font-bold ${item.isCorrect ? 'text-[#16A34A]' : 'text-red-400'}`}>
                  {item.isCorrect ? 'Correct' : 'Incorrect'}
                </span>
              )}
              <p className="text-xs text-[#D1D5DB]">{item.questionText}</p>
            </div>
            {item.note && (
              <p className="mt-1.5 rounded bg-[#0d0d0d] px-2 py-1.5 text-xs italic text-[#9CA3AF]">
                Your note: {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
