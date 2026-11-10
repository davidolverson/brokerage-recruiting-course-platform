'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getModuleBySlug, getChapterBySlug, getLessonBySlug, COURSE_MODULES } from '@/lib/data/course-content'
import type { CourseLesson } from '@/lib/data/course-content'
import { renderMarkdown } from '@/lib/markdown'
import { KeyTermChip } from '@/components/course/KeyTermChip'
import { FlashcardDeck } from '@/components/course/FlashcardDeck'
import { events } from '@/lib/analytics'
import InteractiveElement from '@/components/course/interactive/InteractiveElement'
import { AudioPlayer } from '@/components/course/AudioPlayer'
import { StudyWizard } from '@/components/course/StudyWizard'
import NotePanel from '@/components/course/NotePanel'

// ─── Confetti ─────────────────────────────────────────────────────
const CONFETTI_COLORS = ['#EA580C', '#000000', '#16A34A', '#D97706', '#ffffff']

function spawnConfetti() {
  const container = document.body
  const count = 80

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div')
    el.className = 'confetti-particle'

    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]
    const left = Math.random() * 100
    const fallDur = 1.8 + Math.random() * 1.4
    const driftDur = 1.2 + Math.random() * 1.2
    const delay = Math.random() * 0.6
    const size = 6 + Math.floor(Math.random() * 8)
    const isCircle = Math.random() > 0.5

    el.style.cssText = `
      left: ${left}vw;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: ${isCircle ? '50%' : '2px'};
      --fall-dur: ${fallDur}s;
      --drift-dur: ${driftDur}s;
      --fall-delay: ${delay}s;
    `

    container.appendChild(el)

    // Clean up after animation finishes
    setTimeout(() => {
      el.remove()
    }, (fallDur + delay + 0.2) * 1000)
  }
}

// ─── Scroll progress bar ──────────────────────────────────────────
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gray-100">
      <div
        className="h-full bg-[#EA580C] transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// ─── Time studied counter ─────────────────────────────────────────
function TimeStudied({ startRef }: { startRef: React.RefObject<number> }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000))
    }, 1000)
    return () => clearInterval(id)
  }, [startRef])

  const mins = Math.floor(elapsed / 60)
  const secs = elapsed % 60

  return (
    <span className="text-xs tabular-nums text-gray-400">
      {mins > 0 ? `${mins}m ` : ''}{String(secs).padStart(2, '0')}s
    </span>
  )
}

export default function LessonPage() {
  const params = useParams()
  const moduleSlug = params.moduleSlug as string
  const chapterSlug = params.chapterSlug as string
  const lessonSlug = params.lessonSlug as string

  const [completed, setCompleted] = useState(false)
  const [completing, setCompleting] = useState(false)
  const startTime = useRef(Date.now())
  const heartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Get content from static data
  const mod = getModuleBySlug(moduleSlug)
  const chapter = getChapterBySlug(moduleSlug, chapterSlug)
  const lesson = getLessonBySlug(moduleSlug, chapterSlug, lessonSlug)

  // Find prev/next lessons (across chapters if needed)
  let prevLesson: { slug: string; title: string; href: string } | null = null
  let nextLesson: { slug: string; title: string; href: string } | null = null

  // Determine if this is the very last lesson of the entire course
  const lastModule = COURSE_MODULES[COURSE_MODULES.length - 1]
  const lastChapter = lastModule?.chapters[lastModule.chapters.length - 1]
  const lastLessonSlug = lastChapter?.lessons[lastChapter.lessons.length - 1]?.slug
  const isLastLessonOfCourse =
    mod?.slug === lastModule?.slug &&
    chapter?.slug === lastChapter?.slug &&
    lesson?.slug === lastLessonSlug

  if (mod && chapter && lesson) {
    const lessonIndex = chapter.lessons.findIndex((l) => l.slug === lessonSlug)
    const chapterIndex = mod.chapters.findIndex((c) => c.slug === chapterSlug)

    if (lessonIndex > 0) {
      const prev = chapter.lessons[lessonIndex - 1]
      prevLesson = { slug: prev.slug, title: prev.title, href: `/course/module/${moduleSlug}/${chapterSlug}/${prev.slug}` }
    } else if (chapterIndex > 0) {
      const prevChapter = mod.chapters[chapterIndex - 1]
      const lastLesson = prevChapter.lessons[prevChapter.lessons.length - 1]
      if (lastLesson) {
        prevLesson = { slug: lastLesson.slug, title: lastLesson.title, href: `/course/module/${moduleSlug}/${prevChapter.slug}/${lastLesson.slug}` }
      }
    }

    if (lessonIndex < chapter.lessons.length - 1) {
      const next = chapter.lessons[lessonIndex + 1]
      nextLesson = { slug: next.slug, title: next.title, href: `/course/module/${moduleSlug}/${chapterSlug}/${next.slug}` }
    } else if (chapterIndex < mod.chapters.length - 1) {
      const nextChapter = mod.chapters[chapterIndex + 1]
      const firstLesson = nextChapter.lessons[0]
      if (firstLesson) {
        nextLesson = { slug: firstLesson.slug, title: firstLesson.title, href: `/course/module/${moduleSlug}/${nextChapter.slug}/${firstLesson.slug}` }
      }
    }
  }

  // API routes accept slugs and resolve to numeric IDs via resolveLessonId()
  const lessonIdentifier = lessonSlug

  // Heartbeat: track time spent every 30 seconds
  useEffect(() => {
    heartbeatRef.current = setInterval(() => {
      fetch(`/api/course/lessons/${encodeURIComponent(lessonIdentifier)}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ seconds: 30 }),
      }).catch(() => {})
    }, 30000)

    return () => {
      if (heartbeatRef.current) clearInterval(heartbeatRef.current)
    }
  }, [lessonIdentifier])

  const handleComplete = useCallback(async () => {
    setCompleting(true)
    const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
    try {
      const res = await fetch(`/api/course/lessons/${encodeURIComponent(lessonIdentifier)}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timeSpentSeconds: timeSpent }),
      })
      if (res.ok) {
        setCompleted(true)
        events.lessonCompleted(lessonSlug, moduleSlug, timeSpent)
        // Fire confetti celebration
        spawnConfetti()
      }
    } catch { /* handled by UI state */ }
    setCompleting(false)
  }, [lessonIdentifier, lessonSlug, moduleSlug])

  if (!mod || !chapter || !lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Lesson Not Found</h1>
          <Link href="/course/dashboard" className="text-[#EA580C] hover:underline">Back to Dashboard</Link>
        </div>
      </div>
    )
  }

  const chapterIndex = mod.chapters.findIndex((c) => c.slug === chapterSlug)
  const lessonIndex = chapter.lessons.findIndex((l) => l.slug === lessonSlug)

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header with scroll progress + time studied */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-6 py-3" style={{ position: 'relative' }}>
        <ScrollProgressBar />
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <Link href={`/course/module/${moduleSlug}/${chapterSlug}`} className="text-gray-500 hover:text-gray-900">
              &larr; Ch. {chapterIndex + 1}
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400">Lesson {lessonIndex + 1} of {chapter.lessons.length}</span>
            <span className="hidden text-gray-300 sm:inline">|</span>
            <span className="hidden items-center gap-1 sm:flex">
              <svg className="h-3 w-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5M12 2a10 10 0 110 20A10 10 0 0112 2z" />
              </svg>
              <TimeStudied startRef={startTime} />
            </span>
          </div>
          {!completed ? (
            <button
              onClick={handleComplete}
              disabled={completing}
              className="rounded-lg bg-[#EA580C] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#e0740f] disabled:opacity-50"
            >
              {completing ? 'Saving...' : 'Mark Complete'}
            </button>
          ) : (
            <span className="flex items-center gap-1.5 rounded-lg bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Completed
            </span>
          )}
        </div>
      </header>

      {/* Lesson content */}
      <article className="mx-auto max-w-3xl px-6 py-10">
        {/* Lesson type badge */}
        <div className="mb-4 flex items-center gap-3">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${
            lesson.lessonType === 'interactive' ? 'bg-[#EA580C]/10 text-[#EA580C]' :
            lesson.lessonType === 'scenario' ? 'bg-purple-100 text-purple-700' :
            'bg-gray-100 text-gray-600'
          }`}>
            {lesson.lessonType === 'interactive' ? 'Interactive' :
             lesson.lessonType === 'scenario' ? 'Scenario-Based' : 'Reading'}
          </span>
          <span className="text-xs text-gray-400">{lesson.estimatedMinutes} min</span>
        </div>

        <h1 className="mb-6 text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {lesson.title}
        </h1>

        {/* Audio narration */}
        <AudioPlayer lessonSlug={lessonSlug} lessonTitle={lesson.title} />

        {/* Key terms */}
        {lesson.keyTerms.length > 0 && (
          <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Key Terms — click to define</p>
            <div className="flex flex-wrap gap-2">
              {lesson.keyTerms.map((term) => (
                <KeyTermChip key={term} term={term} />
              ))}
            </div>
          </div>
        )}

        {/* Flashcards */}
        {lesson.keyTerms.length >= 3 && (
          <FlashcardDeck terms={lesson.keyTerms} />
        )}

        {/* Main content */}
        <div
          className="max-w-none"
          style={{ fontFamily: 'Roboto, sans-serif' }}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(lesson.content) }}
        />

        {/* Interactive elements */}
        {lesson.interactiveElements.length > 0 && (
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Practice Activities
              </h2>
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
                {lesson.interactiveElements.length}
              </span>
            </div>
            {lesson.interactiveElements.map((el, i) => (
              <InteractiveElement key={i} type={el.type} prompt={el.prompt} />
            ))}
          </div>
        )}
      </article>

      {/* Study Wizard floating assistant */}
      <StudyWizard
        lessonSlug={lessonSlug}
        chapterSlug={chapterSlug}
        moduleSlug={moduleSlug}
        lessonTitle={lesson.title}
        chapterTitle={chapter.title}
        keyTerms={lesson.keyTerms}
        progressPercent={0}
        currentStreak={0}
      />

      {/* Notes panel */}
      <NotePanel
        lessonId={0}
        pageContext={moduleSlug + '/' + chapterSlug + '/' + lessonSlug}
        lessonTitle={lesson.title}
      />

      {/* Navigation footer */}
      <div className="border-t border-gray-200 bg-gray-50 px-6 py-6">
        <div className="mx-auto flex max-w-3xl justify-between">
          {prevLesson ? (
            <Link href={prevLesson.href} className="text-sm text-gray-500 hover:text-[#EA580C]">
              &larr; {prevLesson.title}
            </Link>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <Link href={nextLesson.href} className="text-sm font-medium text-[#EA580C] hover:underline">
              {nextLesson.title} &rarr;
            </Link>
          ) : isLastLessonOfCourse ? (
            <Link
              href="/course/complete"
              className="rounded-lg bg-[#EA580C] px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-[#e0740f]"
            >
              Complete the Course &rarr;
            </Link>
          ) : (
            <Link
              href={`/course/quiz/chapter/${chapterSlug}`}
              className="text-sm font-medium text-[#EA580C] hover:underline"
            >
              Take Chapter Quiz &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
