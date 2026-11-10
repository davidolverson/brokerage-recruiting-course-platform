'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProgressBar from './ProgressBar'

interface Chapter {
  slug: string
  title: string
  lessonCount: number
  completedCount: number
}

interface CourseModule {
  slug: string
  title: string
  chapters: Chapter[]
}

interface CourseNavProps {
  modules: CourseModule[]
  currentPath: string
  progressPercent: number
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#EA580C" />
      <path
        d="M4.5 8.5L6.5 10.5L11.5 5.5"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PartialIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" stroke="#EA580C" strokeWidth="1" />
      <circle cx="8" cy="8" r="3" fill="#EA580C" />
    </svg>
  )
}

function EmptyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" stroke="#D1D5DB" strokeWidth="1" />
    </svg>
  )
}

export default function CourseNav({
  modules,
  currentPath,
  progressPercent,
}: CourseNavProps) {
  // Start with current module expanded, rest collapsed
  const activeModuleSlug = modules.find(m =>
    m.chapters.some(ch => currentPath.includes(ch.slug)),
  )?.slug

  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(
    new Set(activeModuleSlug ? [activeModuleSlug] : []),
  )

  function toggleModule(slug: string) {
    setExpandedSlugs(prev => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }

  return (
    <nav
      className="flex w-full flex-col gap-0 rounded-xl border border-[#E5E7EB] bg-white shadow-sm"
      aria-label="Course navigation"
    >
      {/* Overall progress header */}
      <div className="border-b border-[#E5E7EB] px-4 py-4">
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Overall Progress
        </p>
        <ProgressBar percent={progressPercent} showPercent />
      </div>

      {/* Module list */}
      <ul className="divide-y divide-[#F3F4F6]" role="list">
        {modules.map(mod => {
          const isExpanded = expandedSlugs.has(mod.slug)
          const totalLessons = mod.chapters.reduce((s, c) => s + c.lessonCount, 0)
          const completedLessons = mod.chapters.reduce(
            (s, c) => s + c.completedCount,
            0,
          )
          const allDone = totalLessons > 0 && completedLessons === totalLessons

          return (
            <li key={mod.slug}>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-[#F9FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#EA580C]"
                onClick={() => toggleModule(mod.slug)}
                aria-expanded={isExpanded}
              >
                {allDone ? (
                  <CheckIcon className="h-4 w-4 shrink-0" />
                ) : completedLessons > 0 ? (
                  <PartialIcon className="h-4 w-4 shrink-0" />
                ) : (
                  <EmptyIcon className="h-4 w-4 shrink-0" />
                )}

                <span
                  className="flex-1 text-sm font-semibold text-[#111827]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {mod.title}
                </span>

                <span className="text-xs text-[#9CA3AF]">
                  {completedLessons}/{totalLessons}
                </span>

                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className={[
                    'h-4 w-4 shrink-0 text-[#9CA3AF] transition-transform duration-200',
                    isExpanded ? 'rotate-180' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden="true"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isExpanded && (
                <ul className="border-t border-[#F3F4F6] bg-[#FAFAFA]" role="list">
                  {mod.chapters.map(chapter => {
                    const isActive = currentPath.includes(chapter.slug)
                    const chapterDone = chapter.completedCount === chapter.lessonCount && chapter.lessonCount > 0

                    return (
                      <li key={chapter.slug}>
                        <Link
                          href={`/course/module/${mod.slug}/${chapter.slug}`}
                          className={[
                            'flex items-center gap-3 px-5 py-2.5 text-sm transition-colors duration-150',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#EA580C]',
                            isActive
                              ? 'bg-[#EA580C]/8 font-semibold text-[#EA580C]'
                              : 'text-[#374151] hover:bg-[#F3F4F6]',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {chapterDone ? (
                            <CheckIcon className="h-3.5 w-3.5 shrink-0" />
                          ) : chapter.completedCount > 0 ? (
                            <PartialIcon className="h-3.5 w-3.5 shrink-0" />
                          ) : (
                            <EmptyIcon className="h-3.5 w-3.5 shrink-0" />
                          )}

                          <span
                            className="flex-1 leading-snug"
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                          >
                            {chapter.title}
                          </span>

                          <span className="text-xs text-[#9CA3AF]">
                            {chapter.lessonCount}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
