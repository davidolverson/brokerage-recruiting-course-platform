import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { COURSE_MODULES, getModuleBySlug } from '@/lib/data/course-content'
import { ModuleVideoIntro } from '@/components/course/ModuleVideoIntro'

export function generateStaticParams() {
  return COURSE_MODULES.map((m) => ({ moduleSlug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ moduleSlug: string }> }): Promise<Metadata> {
  const { moduleSlug } = await params
  const mod = getModuleBySlug(moduleSlug)
  if (!mod) return {}
  return { title: mod.title }
}

export default async function ModulePage({ params }: { params: Promise<{ moduleSlug: string }> }) {
  const { moduleSlug } = await params
  const mod = getModuleBySlug(moduleSlug)
  if (!mod) notFound()

  const moduleIndex = COURSE_MODULES.findIndex((m) => m.slug === moduleSlug)
  const totalMinutes = mod.chapters.reduce(
    (t, ch) => t + ch.lessons.reduce((lt, l) => lt + l.estimatedMinutes, 0), 0
  )
  const estimatedHours = Math.round(totalMinutes / 60)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center gap-4">
          <Link href="/course/dashboard" className="text-sm text-gray-500 hover:text-gray-900">&larr; Dashboard</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-medium text-gray-900">Module {moduleIndex + 1}</span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
              {moduleIndex + 1}
            </span>
            <span className="text-sm text-gray-500">~{estimatedHours} hours</span>
            <span className="text-sm text-gray-400">{mod.examWeight}</span>
          </div>
          <h1 className="mb-2 text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {mod.title}
          </h1>
          <p className="text-gray-600">{mod.subtitle}</p>
        </div>

        {/* Module intro video (Higgsfield-generated) */}
        <ModuleVideoIntro moduleSlug={moduleSlug} moduleTitle={mod.title} />

        <div className="space-y-4">
          {mod.chapters.map((chapter, ci) => {
            const chapterMinutes = chapter.lessons.reduce((t, l) => t + l.estimatedMinutes, 0)
            return (
              <div key={chapter.slug} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">Chapter {ci + 1}</p>
                      <h2 className="mb-1 text-lg font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {chapter.title}
                      </h2>
                    </div>
                    <Link
                      href={`/course/module/${moduleSlug}/${chapter.slug}`}
                      className="shrink-0 rounded-lg bg-[#EA580C] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#e0740f]"
                    >
                      Start
                    </Link>
                  </div>
                </div>
                <div className="border-t border-gray-100 bg-gray-50 px-6 py-3">
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span>{chapter.lessons.length} lessons</span>
                    <span>{chapterMinutes} min</span>
                    <span>{chapter.lessons.filter(l => l.lessonType === 'interactive' || l.lessonType === 'scenario').length} interactive</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
