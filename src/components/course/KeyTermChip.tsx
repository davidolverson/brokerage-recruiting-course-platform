'use client'

import { useState, useRef, useEffect } from 'react'
import { COURSE_TERMS } from '@/lib/data/course-terms'

interface KeyTermChipProps {
  term: string
}

export function KeyTermChip({ term }: KeyTermChipProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const termData = COURSE_TERMS[term]

  // Close when clicking outside
  useEffect(() => {
    if (!open) return

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [open])

  if (!termData) {
    // No definition available — render plain chip
    return (
      <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
        {term}
      </span>
    )
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-1 ${
          open
            ? 'border-gray-900 bg-gray-900 text-white'
            : 'border-gray-200 bg-white text-gray-800 shadow-sm hover:border-gray-400 hover:bg-gray-50'
        }`}
      >
        {term}
        <span
          className={`ml-1.5 inline-block text-[10px] leading-none transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          &#9660;
        </span>
      </button>

      {open && (
        <div
          role="tooltip"
          className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-xl"
        >
          {/* Arrow */}
          <div className="absolute -top-1.5 left-4 h-3 w-3 rotate-45 rounded-sm border-l border-t border-gray-200 bg-white" />

          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-400">{term}</p>
          <p className="text-sm leading-relaxed text-gray-800">{termData.definition}</p>

          {termData.example && (
            <div className="mt-3 rounded-lg bg-gray-50 px-3 py-2">
              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Example</p>
              <p className="text-xs leading-relaxed text-gray-600">{termData.example}</p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 text-[11px] font-medium text-gray-400 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}
