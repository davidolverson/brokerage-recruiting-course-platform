'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import TopicMasteryCard from './TopicMasteryCard'
import {
  type TopicMasteryData,
  type PassPrediction,
  PSI_TOPICS,
  probabilityToCategory,
  categoryToColor,
} from '@/lib/pass-predictor'

// ─── Types ────────────────────────────────────────────────────────────────────

interface MasteryDashboardData {
  topicMastery: TopicMasteryData[]
  prediction: PassPrediction
  currentStreakDays: number
  longestStreakDays: number
  enrollmentId: number
}

// ─── Radar Chart ─────────────────────────────────────────────────────────────

interface RadarChartProps {
  topics: TopicMasteryData[]
  size?: number
}

function getTopicColor(score: number): string {
  if (score >= 90) return '#FBBF24'  // gold
  if (score >= 70) return '#4ADE80'  // green
  if (score >= 40) return '#EA580C'  // orange
  if (score > 0)   return '#F87171'  // red
  return '#3f3f3f'                   // not started gray
}

function RadarChart({ topics, size = 300 }: RadarChartProps) {
  const center = size / 2
  const maxRadius = size * 0.38
  const labelRadius = size * 0.48

  const N = topics.length
  const angleStep = (2 * Math.PI) / N
  const startAngle = -Math.PI / 2 // Start at top

  function getPoint(index: number, radius: number) {
    const angle = startAngle + index * angleStep
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  // Grid rings at 25%, 50%, 75%, 100%
  const rings = [0.25, 0.5, 0.75, 1.0]

  // Build radar polygon points from topic scores
  const polygonPoints = topics.map((topic, i) => {
    const normalizedScore = topic.masteryScore / 100
    const r = normalizedScore * maxRadius
    return getPoint(i, r)
  })

  const polygonPath = polygonPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(' ') + ' Z'

  // Axis lines from center to each vertex
  const axisLines = topics.map((_, i) => {
    const outer = getPoint(i, maxRadius)
    return { x1: center, y1: center, x2: outer.x, y2: outer.y }
  })

  // Label positions
  const labels = topics.map((topic, i) => {
    const pt = getPoint(i, labelRadius)
    const angle = startAngle + i * angleStep
    const deg = (angle * 180) / Math.PI

    // Determine text anchor based on position
    let anchor: 'start' | 'middle' | 'end' = 'middle'
    if (deg > -160 && deg < -20) anchor = 'middle' // top
    else if (deg >= -20 && deg <= 20) anchor = 'start'  // right
    else if (deg > 20 && deg < 160) anchor = 'middle'   // bottom
    else anchor = 'end'                                  // left

    return { ...pt, anchor, topic }
  })

  // Dominant color for polygon fill (based on average score)
  const avgScore = topics.reduce((s, t) => s + t.masteryScore, 0) / topics.length
  const fillColor = getTopicColor(avgScore)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-label="Topic mastery radar chart"
      role="img"
    >
      {/* Grid rings */}
      {rings.map((pct) => {
        const ringRadius = pct * maxRadius
        const ringPoints = topics.map((_, i) => getPoint(i, ringRadius))
        const ringPath = ringPoints
          .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
          .join(' ') + ' Z'
        return (
          <path
            key={pct}
            d={ringPath}
            fill="none"
            stroke="#ffffff12"
            strokeWidth={pct === 1.0 ? 1.5 : 1}
          />
        )
      })}

      {/* Ring percentage labels at top vertex */}
      {rings.slice(0, 3).map((pct) => {
        const pt = getPoint(0, pct * maxRadius)
        return (
          <text
            key={`ring-label-${pct}`}
            x={pt.x + 4}
            y={pt.y}
            fill="#ffffff28"
            fontSize="8"
            fontFamily="Roboto, sans-serif"
          >
            {pct * 100}
          </text>
        )
      })}

      {/* Axis lines */}
      {axisLines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#ffffff18"
          strokeWidth="1"
        />
      ))}

      {/* Filled polygon */}
      <path
        d={polygonPath}
        fill={fillColor + '22'}
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Data point dots */}
      {polygonPoints.map((pt, i) => {
        const score = topics[i].masteryScore
        const dotColor = getTopicColor(score)
        return (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={score > 0 ? 4 : 2.5}
            fill={score > 0 ? dotColor : '#3f3f3f'}
            stroke={score > 0 ? dotColor + '88' : 'none'}
            strokeWidth="3"
          />
        )
      })}

      {/* Labels */}
      {labels.map(({ x, y, anchor, topic }, i) => {
        const labelColor = getTopicColor(topic.masteryScore)
        // Shorten long topic names for label
        const shortName = topic.topicName.length > 14
          ? topic.topicName.split(' ').slice(0, 2).join(' ')
          : topic.topicName
        return (
          <g key={i}>
            <text
              x={x}
              y={y - 4}
              textAnchor={anchor}
              fill="#ffffffcc"
              fontSize="8.5"
              fontFamily="Manrope, sans-serif"
              fontWeight="600"
            >
              {shortName}
            </text>
            <text
              x={x}
              y={y + 7}
              textAnchor={anchor}
              fill={labelColor}
              fontSize="8"
              fontFamily="Roboto, sans-serif"
            >
              {topic.examWeight}% · {topic.masteryScore}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ─── Pass Probability Ring ────────────────────────────────────────────────────

function PassProbabilityRing({ probability, category, color }: {
  probability: number
  category: string
  color: string
}) {
  const radius = 64
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (probability / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        className="rotate-[-90deg]"
        aria-label={`Pass probability: ${probability}%`}
      >
        {/* Track */}
        <circle cx="80" cy="80" r={radius} fill="none" stroke="#ffffff0f" strokeWidth="12" />
        {/* Glow layer */}
        <circle
          cx="80" cy="80" r={radius}
          fill="none"
          stroke={color + '33'}
          strokeWidth="18"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <circle
          cx="80" cy="80" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)' }}
        />
      </svg>
      <div className="mt-[-140px] flex h-[160px] flex-col items-center justify-center">
        <span
          className="text-4xl font-extrabold leading-none"
          style={{ color, fontFamily: 'Manrope, sans-serif' }}
        >
          {probability}%
        </span>
        <span
          className="mt-1 text-xs font-semibold"
          style={{ color: color + 'cc' }}
        >
          {category}
        </span>
      </div>
    </div>
  )
}

// ─── Trend Indicator ─────────────────────────────────────────────────────────

function TrendBadge({ direction }: { direction: 'improving' | 'declining' | 'stable' }) {
  const config = {
    improving: { label: 'Readiness improving', color: '#4ADE80', icon: '↑' },
    declining: { label: 'Readiness declining', color: '#F87171', icon: '↓' },
    stable:    { label: 'Readiness stable',    color: '#ffffff60', icon: '→' },
  }
  const c = config[direction]
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold"
      style={{ color: c.color, borderColor: c.color + '44', backgroundColor: c.color + '12' }}
    >
      <span aria-hidden="true">{c.icon}</span>
      {c.label}
    </span>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function MasteryDashboard() {
  const [data, setData] = useState<MasteryDashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  useEffect(() => {
    fetch('/api/course/mastery')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load')
        return r.json()
      })
      .then((d) => {
        if (mountedRef.current) {
          setData(d)
          setLoading(false)
          requestAnimationFrame(() => {
            if (mountedRef.current) setMounted(true)
          })
        }
      })
      .catch((err) => {
        if (mountedRef.current) {
          setError(err.message)
          setLoading(false)
        }
      })
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#EA580C]" />
          <p className="text-sm text-white/40">Loading mastery data...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-white/40">Unable to load mastery data. Please refresh.</p>
      </div>
    )
  }

  const { topicMastery, prediction, currentStreakDays, longestStreakDays } = data
  const isReady = prediction.predictedPassProbability >= 75
  const weakest = prediction.weakestTopic

  // Sort topics: weakest urgency first (exam weight * gap)
  const sortedTopics = [...topicMastery].sort(
    (a, b) =>
      b.examWeight * (100 - b.masteryScore) - a.examWeight * (100 - a.masteryScore)
  )

  return (
    <div className="space-y-6">
      {/* Top section: ring + radar side by side */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Pass Probability Card */}
        <div
          className={[
            'flex flex-col items-center justify-center gap-4 rounded-2xl border p-8',
            'bg-[#0d0d0d]',
            isReady ? 'border-[#16A34A]/40' : 'border-white/10',
          ].join(' ')}
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Pass Prediction
            </p>
            <h2
              className="text-lg font-extrabold text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              PSI Exam Readiness
            </h2>
          </div>

          <PassProbabilityRing
            probability={prediction.predictedPassProbability}
            category={prediction.category}
            color={prediction.categoryColor}
          />

          {/* Status badge */}
          <div
            className={[
              'flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold',
              isReady
                ? 'border-[#16A34A]/40 bg-[#14532D]/30 text-[#4ADE80]'
                : 'border-white/10 bg-white/5 text-white/60',
            ].join(' ')}
          >
            <span className="h-2 w-2 rounded-full" style={{
              backgroundColor: isReady ? '#4ADE80' : '#ffffff40'
            }} />
            {isReady ? 'Ready to Test' : 'Keep Studying'}
          </div>

          {/* Trend */}
          <TrendBadge direction={prediction.trendDirection} />

          {/* Streak */}
          <div className="flex items-center gap-6 text-center">
            <div>
              <p className="text-2xl font-extrabold text-[#EA580C]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {currentStreakDays}
              </p>
              <p className="text-xs text-white/40">day streak</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {longestStreakDays}
              </p>
              <p className="text-xs text-white/40">best streak</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {prediction.overallScore}
              </p>
              <p className="text-xs text-white/40">weighted avg</p>
            </div>
          </div>

          {/* Book exam CTA */}
          {isReady && (
            <a
              href="https://candidate.psiexams.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-[#16A34A] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#15803D]"
            >
              Book Your PSI Exam
            </a>
          )}
        </div>

        {/* Radar Chart Card */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Topic Mastery Radar
          </p>
          <RadarChart topics={topicMastery} size={320} />

          {/* Color legend */}
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {[
              { label: 'Mastered (90+)', color: '#FBBF24' },
              { label: 'Proficient (70+)', color: '#4ADE80' },
              { label: 'Familiar (40+)', color: '#EA580C' },
              { label: 'Low (<40)', color: '#F87171' },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5 text-white/50">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Weakest topic alert */}
      {weakest && weakest.masteryScore < 75 && (
        <div className="flex items-start gap-4 rounded-xl border border-[#EA580C]/30 bg-[#EA580C]/5 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EA580C]/15">
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M10 2l1.8 5.5H17l-4.5 3.3 1.7 5.2L10 13l-4.2 3 1.7-5.2L3 7.5h5.2L10 2z"
                fill="#EA580C"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-white">Your Weakest Topic: {weakest.topicName}</p>
            <p className="mt-0.5 text-xs text-white/50">
              Worth <span className="font-semibold text-white/80">{weakest.examWeight}%</span> of the PSI exam.
              Current score: <span className="font-semibold" style={{ color: prediction.categoryColor }}>{weakest.masteryScore}%</span>
            </p>
          </div>
          <Link
            href={`/course/quiz/topic-drill?topic=${weakest.topicSlug}`}
            className="shrink-0 rounded-lg bg-[#EA580C] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#e0740f]"
          >
            Study Now
          </Link>
        </div>
      )}

      {/* Recommendation */}
      <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/40">
          Recommended Next Step
        </p>
        <p className="text-sm text-white/80">{prediction.recommendation}</p>
      </div>

      {/* Topic cards grid */}
      <div>
        <h3
          className="mb-4 text-base font-bold text-white"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          All Topics
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedTopics.map((topic) => (
            <TopicMasteryCard
              key={topic.topicSlug}
              topic={topic}
              isWeakest={weakest?.topicSlug === topic.topicSlug && topic.masteryScore < 75}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
