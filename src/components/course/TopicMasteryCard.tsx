'use client'

import Link from 'next/link'
import type { TopicMasteryData, MasteryLevel } from '@/lib/pass-predictor'

interface TopicMasteryCardProps {
  topic: TopicMasteryData
  isWeakest?: boolean
}

const MASTERY_TIERS: { level: MasteryLevel; label: string }[] = [
  { level: 'not_started', label: 'Not Started' },
  { level: 'attempted',   label: 'Attempted'   },
  { level: 'familiar',    label: 'Familiar'     },
  { level: 'proficient',  label: 'Proficient'   },
  { level: 'mastered',    label: 'Mastered'     },
]

const TIER_ORDER: Record<MasteryLevel, number> = {
  not_started: 0,
  attempted:   1,
  familiar:    2,
  proficient:  3,
  mastered:    4,
}

function getMasteryColor(score: number): { bg: string; text: string; ring: string } {
  if (score >= 90) return { bg: '#92400E', text: '#FBBF24', ring: '#FBBF24' }  // gold
  if (score >= 70) return { bg: '#14532D', text: '#4ADE80', ring: '#16A34A' }  // green
  if (score >= 40) return { bg: '#7C2D12', text: '#EA580C', ring: '#EA580C' }  // orange
  return            { bg: '#450A0A', text: '#F87171', ring: '#DC2626' }         // red
}

function getScoreColor(score: number): string {
  if (score >= 90) return '#FBBF24'
  if (score >= 70) return '#4ADE80'
  if (score >= 40) return '#EA580C'
  return '#F87171'
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'Never'
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  } catch {
    return 'Never'
  }
}

function getTopicQuizSlug(topicSlug: string): string {
  // Map topic slug to the most relevant quiz/chapter path
  const slugMap: Record<string, string> = {
    'contracts':           'contracts-agency',
    'practice':            'practice-ethics',
    'property-ownership':  'property-ownership-land-use',
    'financing':           'finance-valuation',
    'valuation':           'finance-valuation',
    'disclosures':         'virginia-specific-regulations',
    'calculations':        'finance-valuation',
    'transfer-of-title':   'contracts-agency',
    'land-use':            'property-ownership-land-use',
    'property-management': 'practice-ethics',
  }
  return slugMap[topicSlug] ?? topicSlug
}

export default function TopicMasteryCard({ topic, isWeakest = false }: TopicMasteryCardProps) {
  const tierIndex = TIER_ORDER[topic.masteryLevel]
  const colors = getMasteryColor(topic.masteryScore)
  const scoreColor = getScoreColor(topic.masteryScore)
  const moduleSlug = getTopicQuizSlug(topic.topicSlug)
  const accuracy = topic.questionsAttempted > 0
    ? Math.round((topic.questionsCorrect / topic.questionsAttempted) * 100)
    : null

  return (
    <div
      className={[
        'relative flex flex-col gap-4 rounded-xl border p-5 transition-all duration-200',
        isWeakest
          ? 'border-[#EA580C] bg-[#0f0a04]'
          : 'border-white/10 bg-[#111111] hover:border-white/20',
      ].join(' ')}
    >
      {/* Weakest topic badge */}
      {isWeakest && (
        <span className="absolute -top-3 left-4 rounded-full bg-[#EA580C] px-3 py-0.5 text-xs font-bold text-white">
          Priority Topic
        </span>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            className="truncate text-sm font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {topic.topicName}
          </h3>
          <p className="mt-0.5 text-xs text-white/40">
            PSI Weight: <span className="font-semibold text-white/70">{topic.examWeight}%</span>
          </p>
        </div>

        {/* Score badge */}
        <div
          className="flex shrink-0 flex-col items-center justify-center rounded-lg px-3 py-1.5"
          style={{ backgroundColor: colors.bg + '66', border: `1px solid ${colors.ring}33` }}
        >
          <span
            className="text-xl font-extrabold leading-none"
            style={{ color: scoreColor, fontFamily: 'Manrope, sans-serif' }}
          >
            {topic.masteryScore}
          </span>
          <span className="text-[10px] text-white/40">score</span>
        </div>
      </div>

      {/* 5-tier mastery indicator */}
      <div>
        <div className="mb-2 flex items-center gap-1.5">
          {MASTERY_TIERS.map((tier, i) => {
            const filled = i <= tierIndex && topic.masteryLevel !== 'not_started'
            const isActive = i === tierIndex && topic.masteryLevel !== 'not_started'

            return (
              <div
                key={tier.level}
                className="relative flex-1"
                title={tier.label}
              >
                <div
                  className={[
                    'h-1.5 rounded-full transition-all duration-300',
                    isActive ? 'scale-y-150' : '',
                  ].join(' ')}
                  style={{
                    backgroundColor: filled
                      ? isActive
                        ? scoreColor
                        : scoreColor + '66'
                      : '#ffffff14',
                  }}
                />
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-semibold"
            style={{ color: scoreColor }}
          >
            {topic.masteryLevel === 'not_started'
              ? 'Not Started'
              : topic.masteryLevel.charAt(0).toUpperCase() + topic.masteryLevel.slice(1)}
          </span>
          <span className="text-xs text-white/30">
            Last: {formatDate(topic.lastAssessedAt)}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-1.5 rounded-full transition-all duration-700"
            style={{
              width: `${topic.masteryScore}%`,
              backgroundColor: scoreColor,
            }}
          />
        </div>
      </div>

      {/* Stats row */}
      {topic.questionsAttempted > 0 && (
        <div className="flex items-center gap-4 text-xs text-white/40">
          <span>
            <span className="font-semibold text-white/70">{topic.questionsCorrect}</span>
            /{topic.questionsAttempted} correct
          </span>
          {accuracy !== null && (
            <span>
              <span className="font-semibold text-white/70">{accuracy}%</span> accuracy
            </span>
          )}
        </div>
      )}

      {/* CTA */}
      <Link
        href={`/course/quiz/topic-drill?topic=${topic.topicSlug}&module=${moduleSlug}`}
        className={[
          'mt-auto flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-all duration-150',
          isWeakest
            ? 'bg-[#EA580C] text-white hover:bg-[#e0740f]'
            : 'border border-white/15 text-white/70 hover:border-[#EA580C]/50 hover:text-[#EA580C]',
        ].join(' ')}
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
          <path
            d="M2 8h12M8 2l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Drill This Topic
      </Link>
    </div>
  )
}
