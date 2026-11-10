'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

interface AdjacentLesson {
  slug: string
  title: string
  href: string
}

interface LessonReaderProps {
  content: string
  lessonId: number
  enrollmentId: number
  onComplete?: () => void
  nextLesson?: AdjacentLesson
  prevLesson?: AdjacentLesson
  backHref?: string
}

const WORDS_PER_MINUTE = 200

function estimateReadingTime(html: string): number {
  // Strip tags, count words
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  const wordCount = text.split(' ').filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
}

export default function LessonReader({
  content,
  lessonId,
  enrollmentId,
  onComplete,
  nextLesson,
  prevLesson,
}: LessonReaderProps) {
  const startRef = useRef<number>(Date.now())
  const heartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [completing, setCompleting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const readingMinutes = estimateReadingTime(content)

  // Heartbeat: POST progress every 30 seconds
  const sendHeartbeat = useCallback(async () => {
    try {
      await fetch(`/api/course/lessons/${lessonId}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId,
          seconds: 30,
        }),
      })
    } catch {
      // Non-fatal — heartbeat failures are silent
    }
  }, [lessonId, enrollmentId])

  useEffect(() => {
    startRef.current = Date.now()
    heartbeatRef.current = setInterval(sendHeartbeat, 30_000)

    return () => {
      if (heartbeatRef.current !== null) {
        clearInterval(heartbeatRef.current)
      }
    }
  }, [lessonId, sendHeartbeat])

  async function handleMarkComplete() {
    setCompleting(true)
    setError(null)

    const timeSpentSeconds = Math.round((Date.now() - startRef.current) / 1000)

    try {
      const res = await fetch(`/api/course/lessons/${lessonId}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enrollmentId, timeSpentSeconds }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { message?: string }
        throw new Error(data.message ?? 'Failed to mark lesson complete.')
      }

      setCompleted(true)
      onComplete?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setCompleting(false)
    }
  }

  return (
    <article className="flex flex-col gap-8">
      {/* Reading time estimate */}
      <div className="flex items-center gap-2 text-sm text-[#6B7280]" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="7" stroke="#9CA3AF" strokeWidth="1.25" />
          <path
            d="M8 4.5V8.5L10.5 10"
            stroke="#9CA3AF"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>
          {readingMinutes} min read
        </span>
      </div>

      {/* Prose content */}
      <div
        className={[
          'prose prose-gray max-w-none',
          'prose-headings:font-extrabold prose-headings:text-[#111827]',
          'prose-a:text-[#EA580C] prose-a:underline hover:prose-a:text-[#e0740f]',
          'prose-strong:text-[#111827]',
          'prose-code:rounded prose-code:bg-[#F3F4F6] prose-code:px-1 prose-code:py-0.5 prose-code:text-[#374151]',
          'prose-blockquote:border-l-[#EA580C] prose-blockquote:text-[#6B7280]',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ fontFamily: 'Roboto, sans-serif' }}
        // Content is server-controlled markdown rendered to HTML
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Mark as Complete */}
      <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-6 py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              className="font-semibold text-[#111827]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {completed ? 'Lesson complete!' : 'Ready to move on?'}
            </p>
            <p
              className="text-sm text-[#6B7280]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {completed
                ? 'Your progress has been saved.'
                : 'Mark this lesson as done when you feel confident.'}
            </p>
          </div>

          {!completed && (
            <button
              type="button"
              onClick={handleMarkComplete}
              disabled={completing}
              className={[
                'inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-6 py-2.5',
                'text-sm font-semibold text-white transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2',
                completing
                  ? 'cursor-not-allowed bg-[#EA580C]/60'
                  : 'bg-[#EA580C] hover:bg-[#E0720E]',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {completing ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Mark as Complete
                </>
              )}
            </button>
          )}

          {completed && (
            <div className="flex items-center gap-2 text-sm font-semibold text-[#16A34A]">
              <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="#16A34A" />
                <path
                  d="M4.5 8.5L6.5 10.5L11.5 5.5"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Done
            </div>
          )}
        </div>

        {error !== null && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>

      {/* Prev / Next navigation */}
      <nav
        className="flex items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6"
        aria-label="Lesson navigation"
      >
        {prevLesson !== undefined ? (
          <Link
            href={prevLesson.href}
            className={[
              'group flex items-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-2.5',
              'text-sm font-medium text-[#374151] transition-colors duration-150',
              'hover:border-[#EA580C] hover:text-[#EA580C]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:-translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="line-clamp-1">{prevLesson.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson !== undefined ? (
          <Link
            href={nextLesson.href}
            className={[
              'group flex items-center gap-2 rounded-lg px-4 py-2.5',
              'text-sm font-semibold text-white transition-colors duration-150',
              'bg-[#EA580C] hover:bg-[#e0740f]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="line-clamp-1">{nextLesson.title}</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  )
}
