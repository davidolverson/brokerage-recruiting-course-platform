import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getModuleBySlug, getChapterBySlug } from '@/lib/data/course-content'

export async function generateMetadata({ params }: { params: Promise<{ moduleSlug: string; chapterSlug: string }> }): Promise<Metadata> {
  const { moduleSlug, chapterSlug } = await params
  const chapter = getChapterBySlug(moduleSlug, chapterSlug)
  if (!chapter) return {}
  return { title: chapter.title }
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ moduleSlug: string; chapterSlug: string }>
}) {
  const { moduleSlug, chapterSlug } = await params
  const mod = getModuleBySlug(moduleSlug)
  const chapter = getChapterBySlug(moduleSlug, chapterSlug)
  if (!mod || !chapter) notFound()

  const chapterIndex = mod.chapters.findIndex((c) => c.slug === chapterSlug)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center gap-4 text-sm">
          <Link href="/course/dashboard" className="text-gray-500 hover:text-gray-900">&larr; Dashboard</Link>
          <span className="text-gray-300">/</span>
          <Link href={`/course/module/${moduleSlug}`} className="text-gray-500 hover:text-gray-900">{mod.title}</Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Ch. {chapterIndex + 1}</span>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
          Chapter {chapterIndex + 1}
        </p>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {chapter.title}
        </h1>
        <p className="mb-8 text-sm text-gray-500">
          {chapter.lessons.length} lessons &middot; {chapter.lessons.reduce((t, l) => t + l.estimatedMinutes, 0)} min total
        </p>

        <div className="space-y-3">
          {chapter.lessons.map((lesson, li) => (
            <Link
              key={lesson.slug}
              href={`/course/module/${moduleSlug}/${chapterSlug}/${lesson.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-[#EA580C] hover:shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500 group-hover:bg-[#EA580C]/10 group-hover:text-[#EA580C]">
                {li + 1}
              </span>
              <div className="flex-1">
                <p className="font-medium text-gray-900 group-hover:text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {lesson.title}
                </p>
                <div className="mt-1 flex gap-3 text-xs text-gray-400">
                  <span>{lesson.estimatedMinutes} min</span>
                  <span className={
                    lesson.lessonType === 'interactive' ? 'text-[#EA580C]' :
                    lesson.lessonType === 'scenario' ? 'text-purple-500' :
                    'text-gray-400'
                  }>
                    {lesson.lessonType === 'interactive' ? 'Interactive' :
                     lesson.lessonType === 'scenario' ? 'Scenario' : 'Reading'}
                  </span>
                  {lesson.keyTerms.length > 0 && (
                    <span>{lesson.keyTerms.length} key terms</span>
                  )}
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-[#EA580C]">&rarr;</span>
            </Link>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="mt-8 rounded-xl border border-[#EA580C]/30 bg-[#EA580C]/5 p-6 text-center">
          <p className="mb-2 font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Ready to test your knowledge?
          </p>
          <p className="mb-4 text-sm text-gray-600">
            Take the chapter quiz after completing all lessons.
          </p>
          <Link
            href={`/course/quiz/chapter/${chapterSlug}`}
            className="inline-block rounded-lg bg-[#EA580C] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e0740f]"
          >
            Take Chapter Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
