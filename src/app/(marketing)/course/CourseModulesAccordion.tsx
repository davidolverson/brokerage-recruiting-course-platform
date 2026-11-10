'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { CourseModule } from '@/lib/data/course-content'

interface Props {
  modules: CourseModule[]
  modulePagePaths: Record<string, string>
}

export function CourseModulesAccordion({ modules, modulePagePaths }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      {modules.map((mod, i) => {
        const isOpen = openSlug === mod.slug
        const totalLessons = mod.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)
        const pagePath = modulePagePaths[mod.slug]

        return (
          <div key={mod.slug} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header row - toggle button */}
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : mod.slug)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-gray-50"
              aria-expanded={isOpen}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900">{mod.title}</p>
                <p className="text-sm text-gray-500">
                  {mod.chapters.length} chapters &middot; {totalLessons} lessons &middot;{' '}
                  <span className="text-[#EA580C] font-medium">{mod.examWeight}</span>
                </p>
              </div>
              <span
                className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            {/* Expandable chapter list */}
            {isOpen && (
              <div className="border-t border-gray-100 px-5 py-4">
                <div className="space-y-3">
                  {mod.chapters.map((chapter, ci) => (
                    <div key={chapter.slug}>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Chapter {ci + 1}
                      </p>
                      <p className="mb-1.5 font-medium text-gray-800">{chapter.title}</p>
                      <ul className="space-y-1 pl-2">
                        {chapter.lessons.map((lesson) => (
                          <li key={lesson.slug} className="flex items-center gap-2 text-sm text-gray-600">
                            <span
                              className={`inline-block rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                                lesson.lessonType === 'interactive'
                                  ? 'bg-gray-900 text-white'
                                  : lesson.lessonType === 'scenario'
                                    ? 'bg-orange-50 text-orange-700'
                                    : 'bg-gray-100 text-gray-500'
                              }`}
                            >
                              {lesson.lessonType}
                            </span>
                            {lesson.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {pagePath && (
                  <div className="mt-4 flex items-center gap-4">
                    <Link
                      href={pagePath}
                      className="text-sm font-medium text-gray-900 hover:underline"
                    >
                      View full module details &rarr;
                    </Link>
                    <Link
                      href="/course/signup"
                      className="rounded-lg bg-[#EA580C] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#e0740f]"
                    >
                      Start Free
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
