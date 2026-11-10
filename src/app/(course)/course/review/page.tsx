'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import SpacedRepetitionReview, { type SRCard, type SRStats } from '@/components/course/SpacedRepetitionReview'

// ─── Types ────────────────────────────────────────────────────────────────────

type Phase = 'loading' | 'not_enrolled' | 'no_cards' | 'needs_init' | 'ready' | 'reviewing' | 'error'

interface DueData {
  cards: SRCard[]
  stats: SRStats
  nextReviewDate: string | null
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatNextReview(isoDate: string | null): string {
  if (!isoDate) return 'No upcoming reviews scheduled'

  const next = new Date(isoDate)
  const now = new Date()
  const diffMs = next.getTime() - now.getTime()
  const diffHours = Math.round(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.round(diffMs / (1000 * 60))

  if (diffMinutes < 60) return `Next review in ${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`
  if (diffHours < 24) return `Next review in ${diffHours} hour${diffHours !== 1 ? 's' : ''}`

  const diffDays = Math.round(diffHours / 24)
  return `Next review in ${diffDays} day${diffDays !== 1 ? 's' : ''}`
}

// ─── No Cards Due Screen ──────────────────────────────────────────────────────

function NoCardsDue({
  nextReviewDate,
  stats,
  onRefresh,
}: {
  nextReviewDate: string | null
  stats: SRStats
  onRefresh: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-white">
      <div className="w-full max-w-md text-center">
        {/* Brain icon placeholder */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#1E40AF]/40 bg-[#1E40AF]/10">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1E40AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
              <path d="M10 17v3" />
              <path d="M14 17v3" />
              <path d="M9 21h6" />
            </svg>
          </div>
        </div>

        <h1
          className="mb-2 text-2xl font-extrabold text-white"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          All caught up!
        </h1>
        <p className="mb-2 text-sm text-white/50">
          No cards are due for review right now.
        </p>
        <p className="mb-8 text-xs font-medium text-[#EA580C]">
          {formatNextReview(nextReviewDate)}
        </p>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-3xl font-extrabold text-white">{stats.reviewedToday}</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Reviewed Today</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-3xl font-extrabold text-[#EA580C]">{stats.graduated}</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Mastered</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-3xl font-extrabold text-white">{stats.dueTotal}</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Due Now</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-3xl font-extrabold text-white">{stats.totalCards}</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Total Cards</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onRefresh}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
          >
            Check again
          </button>
          <Link
            href="/course/dashboard"
            className="block w-full rounded-xl bg-[#EA580C] py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#e0740f] active:scale-[0.98]"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Start Screen ─────────────────────────────────────────────────────────────

function StartScreen({
  data,
  onStart,
  isIniting,
}: {
  data: DueData
  onStart: () => void
  isIniting: boolean
}) {
  const masteryPct =
    data.stats.totalCards > 0
      ? Math.round((data.stats.graduated / data.stats.totalCards) * 100)
      : 0

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
        <Link
          href="/course/dashboard"
          className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Dashboard
        </Link>
        <p className="text-sm font-semibold text-white/60">Daily Flashcard Review</p>
        <div className="w-20" />
      </header>

      <div className="mx-auto w-full max-w-lg px-6 py-10">

        {/* Title */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#EA580C]/30 bg-[#EA580C]/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
          </div>
          <h1
            className="mb-2 text-2xl font-extrabold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Spaced Repetition
          </h1>
          <p className="text-sm text-white/50">
            Review cards timed by the SM-2 algorithm for maximum retention
          </p>
        </div>

        {/* Stats grid */}
        <div className="mb-8 grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-xl border border-[#EA580C]/30 bg-[#EA580C]/5 p-4 text-center">
            <p className="text-4xl font-extrabold text-[#EA580C]">{data.stats.dueTotal}</p>
            <p className="mt-1 text-sm font-medium text-white/60">Cards due for review today</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-2xl font-extrabold text-white">{data.stats.reviewedToday}</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Reviewed Today</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-2xl font-extrabold text-white">{masteryPct}%</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Mastery Rate</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-2xl font-extrabold text-[#EA580C]">{data.stats.graduated}</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Mastered</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <p className="text-2xl font-extrabold text-white">{data.stats.totalCards}</p>
            <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Total Cards</p>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-8 rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">How it works</p>
          <div className="space-y-2 text-sm text-white/50">
            <div className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/30">1</span>
              <span>Read the term, then tap to reveal the definition</span>
            </div>
            <div className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/30">2</span>
              <span>Rate how well you knew it: Again, Hard, Good, or Easy</span>
            </div>
            <div className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/30">3</span>
              <span>The SM-2 algorithm schedules your next review automatically</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          disabled={isIniting || data.cards.length === 0}
          className="w-full rounded-xl bg-[#EA580C] py-4 text-base font-bold text-white shadow-lg shadow-[#EA580C]/20 transition hover:bg-[#e0740f] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isIniting ? 'Preparing...' : `Start Review (${Math.min(data.cards.length, 20)} cards)`}
        </button>
      </div>
    </div>
  )
}

// ─── Needs Init Screen ────────────────────────────────────────────────────────

function NeedsInitScreen({
  onInit,
  isIniting,
}: {
  onInit: () => void
  isIniting: boolean
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-white">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/10 bg-white/5">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
        </div>
        <h1
          className="mb-2 text-2xl font-extrabold text-white"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Set up flashcards
        </h1>
        <p className="mb-8 text-sm text-white/50">
          Create your personal deck from all 840 glossary terms. This only takes a second.
        </p>
        <button
          onClick={onInit}
          disabled={isIniting}
          className="w-full rounded-xl bg-[#EA580C] py-4 text-base font-bold text-white transition hover:bg-[#e0740f] active:scale-[0.98] disabled:opacity-50"
        >
          {isIniting ? 'Creating your deck...' : 'Create my flashcard deck'}
        </button>
        <Link
          href="/course/dashboard"
          className="mt-4 block text-sm text-white/30 hover:text-white/60 transition"
        >
          Not now
        </Link>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CourseReviewPage() {
  const [phase, setPhase] = useState<Phase>('loading')
  const [dueData, setDueData] = useState<DueData | null>(null)
  const [isIniting, setIsIniting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const fetchDue = useCallback(async () => {
    setPhase('loading')
    try {
      const res = await fetch('/api/course/spaced-repetition/due?limit=20')
      if (res.status === 401) {
        window.location.href = '/course/signup'
        return
      }
      if (res.status === 400) {
        setPhase('not_enrolled')
        return
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Failed to load cards')
      }

      const data = await res.json() as DueData

      if (data.stats.totalCards === 0) {
        // No cards initialized yet
        setPhase('needs_init')
        return
      }

      setDueData(data)

      if (data.cards.length === 0) {
        setPhase('no_cards')
      } else {
        setPhase('ready')
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setPhase('error')
    }
  }, [])

  useEffect(() => {
    fetchDue()
  }, [fetchDue])

  const handleInit = async () => {
    setIsIniting(true)
    try {
      const res = await fetch('/api/course/spaced-repetition/init', { method: 'POST' })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Initialization failed')
      }
      // Re-fetch after init
      await fetchDue()
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Initialization failed')
      setPhase('error')
    } finally {
      setIsIniting(false)
    }
  }

  if (phase === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#EA580C]" />
          <p className="text-sm text-white/40">Loading your review session...</p>
        </div>
      </div>
    )
  }

  if (phase === 'not_enrolled') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-white">
        <div className="w-full max-w-md text-center">
          <h1 className="mb-3 text-2xl font-extrabold" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Not enrolled
          </h1>
          <p className="mb-6 text-sm text-white/50">
            You need to be enrolled in a course to use flashcard review.
          </p>
          <Link
            href="/course/dashboard"
            className="block rounded-xl bg-[#EA580C] py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#e0740f]"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  if (phase === 'error') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-white">
        <div className="w-full max-w-md text-center">
          <h1 className="mb-3 text-xl font-bold text-red-400">Something went wrong</h1>
          <p className="mb-6 text-sm text-white/50">{errorMsg}</p>
          <button
            onClick={fetchDue}
            className="rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'needs_init') {
    return <NeedsInitScreen onInit={handleInit} isIniting={isIniting} />
  }

  if (phase === 'no_cards' && dueData) {
    return (
      <NoCardsDue
        nextReviewDate={dueData.nextReviewDate}
        stats={dueData.stats}
        onRefresh={fetchDue}
      />
    )
  }

  if (phase === 'ready' && dueData) {
    return (
      <StartScreen
        data={dueData}
        onStart={() => setPhase('reviewing')}
        isIniting={isIniting}
      />
    )
  }

  if (phase === 'reviewing' && dueData) {
    return (
      <SpacedRepetitionReview
        initialCards={dueData.cards}
        initialStats={dueData.stats}
        onSessionComplete={(count, updatedStats) => {
          if (updatedStats) setDueData((prev) => prev ? { ...prev, stats: updatedStats } : prev)
        }}
      />
    )
  }

  return null
}
