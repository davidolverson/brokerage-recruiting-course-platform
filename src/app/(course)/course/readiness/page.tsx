'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MasteryDashboard from '@/components/course/MasteryDashboard'
import {
  type TopicMasteryData,
  type PassPrediction,
  categoryToColor,
} from '@/lib/pass-predictor'

// ─── Types ────────────────────────────────────────────────────────────────────

interface MockExamEntry {
  score: number
  completedAt: string
}

interface TrendPoint {
  date: string
  probability: number
  overallScore: number
}

interface PredictData {
  prediction: PassPrediction
  topicMastery: TopicMasteryData[]
  mockExamHistory: MockExamEntry[]
  trendData: TrendPoint[]
  currentStreakDays: number
  longestStreakDays: number
}

// ─── Mock Exam History Table ──────────────────────────────────────────────────

function MockExamHistory({ exams }: { exams: MockExamEntry[] }) {
  if (exams.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-6 text-center">
        <p className="text-sm text-white/40">No mock exams completed yet.</p>
        <Link
          href="/course/quiz/mock-exam"
          className="mt-3 inline-block rounded-lg bg-[#EA580C] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#e0740f]"
        >
          Take Mock Exam
        </Link>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden">
      <div className="border-b border-white/10 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Mock Exam History
        </p>
      </div>
      <div className="divide-y divide-white/5">
        {exams.slice().reverse().map((exam, i) => {
          const passed = exam.score >= 70
          const date = new Date(exam.completedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
          return (
            <div key={i} className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-3">
                <span
                  className={[
                    'flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold',
                    passed ? 'bg-[#14532D]/60 text-[#4ADE80]' : 'bg-[#450A0A]/60 text-[#F87171]',
                  ].join(' ')}
                >
                  {exams.length - i}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{exam.score}%</p>
                  <p className="text-xs text-white/40">{date}</p>
                </div>
              </div>
              <span
                className={[
                  'rounded-full px-2.5 py-0.5 text-xs font-bold',
                  passed
                    ? 'bg-[#14532D]/50 text-[#4ADE80]'
                    : 'bg-[#450A0A]/50 text-[#F87171]',
                ].join(' ')}
              >
                {passed ? 'Pass' : 'Fail'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Study Plan ───────────────────────────────────────────────────────────────

interface StudyPlanItem {
  topicSlug: string
  topicName: string
  examWeight: number
  masteryScore: number
  urgency: number
  reason: string
}

function StudyPlan({ items }: { items: StudyPlanItem[] }) {
  if (items.length === 0) return null

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const scoreColor =
          item.masteryScore >= 70 ? '#4ADE80' :
          item.masteryScore >= 40 ? '#EA580C' :
          '#F87171'

        return (
          <div
            key={item.topicSlug}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white/60"
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-white">{item.topicName}</p>
              <p className="mt-0.5 text-xs text-white/40">{item.reason}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold" style={{ color: scoreColor }}>
                  {item.masteryScore}%
                </p>
                <p className="text-xs text-white/30">{item.examWeight}% of exam</p>
              </div>
              <Link
                href={`/course/quiz/topic-drill?topic=${item.topicSlug}`}
                className="rounded-lg border border-[#EA580C]/40 px-3 py-1.5 text-xs font-bold text-[#EA580C] transition hover:bg-[#EA580C]/10"
              >
                Study
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ReadinessPage() {
  const [predictData, setPredictData] = useState<PredictData | null>(null)
  const [studyPlan, setStudyPlan] = useState<StudyPlanItem[]>([])
  const [loadingPredict, setLoadingPredict] = useState(true)

  useEffect(() => {
    document.title = 'Exam Readiness | VA License Prep | Acme Realty'
  }, [])

  useEffect(() => {
    Promise.all([
      fetch('/api/course/mastery/predict').then((r) => r.json()),
      fetch('/api/course/mastery/recommend').then((r) => r.json()),
    ])
      .then(([pred, rec]) => {
        setPredictData(pred)
        setStudyPlan(rec.studyPlan ?? [])
        setLoadingPredict(false)
      })
      .catch(() => setLoadingPredict(false))
  }, [])

  const probability = predictData?.prediction.predictedPassProbability ?? 0
  const category = predictData?.prediction.category ?? 'Not Ready'
  const color = categoryToColor(category)
  const isReady = probability >= 75

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0a] px-6 py-4 sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/course/dashboard"
            className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Dashboard
          </Link>
          <h1
            className="text-base font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Exam Readiness
          </h1>
          <Link
            href="/course/quiz/mock-exam"
            className="rounded-lg border border-[#EA580C]/50 px-3 py-1.5 text-xs font-bold text-[#EA580C] transition hover:bg-[#EA580C]/10"
          >
            Mock Exam
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8 space-y-10">

        {/* Pass probability hero banner */}
        {!loadingPredict && predictData && (
          <div
            className="relative overflow-hidden rounded-2xl border p-8"
            style={{
              borderColor: color + '44',
              background: `linear-gradient(135deg, ${color}08 0%, #0a0a0a 100%)`,
            }}
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/40">
                  Predicted Pass Probability
                </p>
                <p
                  className="text-6xl font-extrabold leading-none"
                  style={{ color, fontFamily: 'Manrope, sans-serif' }}
                >
                  {probability}%
                </p>
                <p className="mt-2 text-lg font-bold text-white/80">{category}</p>
                <p className="mt-1 text-sm text-white/40">
                  PSI Virginia Salesperson Exam · 70% required to pass
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                {isReady ? (
                  <>
                    <div className="flex items-center gap-2 rounded-full bg-[#14532D]/40 px-5 py-2.5 text-sm font-bold text-[#4ADE80]">
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Ready to Book
                    </div>
                    <a
                      href="https://candidate.psiexams.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-[#16A34A] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#15803D]"
                    >
                      Book PSI Exam
                    </a>
                  </>
                ) : (
                  <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center">
                    <p className="text-xs text-white/40">Need to reach</p>
                    <p className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      75%
                    </p>
                    <p className="text-xs text-white/40">to be Ready</p>
                    <p className="mt-1 text-xs font-semibold" style={{ color }}>
                      {75 - probability} points to go
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main mastery dashboard (radar + ring + topic cards) */}
        <section>
          <h2
            className="mb-5 text-xl font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Mastery Overview
          </h2>
          <MasteryDashboard />
        </section>

        {/* Study plan */}
        {studyPlan.length > 0 && (
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Recommended Study Plan
              </h2>
              <span className="text-xs text-white/30">Sorted by exam impact</span>
            </div>
            <StudyPlan items={studyPlan} />
          </section>
        )}

        {/* Mock exam history */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2
              className="text-xl font-bold text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Mock Exam History
            </h2>
            <Link
              href="/course/quiz/mock-exam"
              className="text-xs font-semibold text-[#EA580C] transition hover:underline"
            >
              Take New Mock
            </Link>
          </div>
          {loadingPredict ? (
            <div className="h-24 animate-pulse rounded-xl bg-white/5" />
          ) : (
            <MockExamHistory exams={predictData?.mockExamHistory ?? []} />
          )}
        </section>

        {/* Footer note */}
        <div className="rounded-xl border border-white/5 bg-[#0d0d0d] p-5 text-center">
          <p className="text-xs text-white/30">
            Pass probability is calculated using weighted topic mastery (60%), mock exam scores (30%),
            and study consistency (10%). The Virginia PSI Salesperson exam requires a score of 70% or higher.
          </p>
        </div>
      </div>
    </div>
  )
}
