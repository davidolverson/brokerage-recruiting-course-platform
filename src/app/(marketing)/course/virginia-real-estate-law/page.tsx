import Link from 'next/link'
import type { Metadata } from 'next'
import { getModuleBySlug } from '@/lib/data/course-content'

const MODULE_SLUG = 'virginia-real-estate-law'
const PAGE_PATH = '/course/virginia-real-estate-law'

export async function generateMetadata(): Promise<Metadata> {
  const mod = getModuleBySlug(MODULE_SLUG)
  if (!mod) return {}

  const title = `${mod.title} | Free VA Real Estate Course | Acme Realty`
  const description = `Study ${mod.title} for your Virginia real estate exam. ${mod.subtitle}. ${mod.examWeight}. Free interactive course from Acme Realty.`
  const SITE_BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  const url = `${SITE_BASE}${PAGE_PATH}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: mod.title,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Acme Realty',
      url: SITE_BASE,
    },
    courseMode: 'online',
    isAccessibleForFree: true,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
    },
  }

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Acme Realty',
      type: 'website',
    },
    other: {
      'application/ld+json': JSON.stringify(schema),
    },
  }
}

export default function VARealEstateLawPage() {
  const mod = getModuleBySlug(MODULE_SLUG)
  if (!mod) return null

  const totalLessons = mod.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <Link href="/course" className="mb-4 inline-block text-sm text-white/60 hover:text-white">
            &larr; Back to Course Overview
          </Link>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#EA580C]">
            {mod.examWeight}
          </p>
          <h1
            className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {mod.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/80">{mod.subtitle}</p>
          <div className="mb-8 flex flex-wrap gap-4">
            <div className="rounded-lg bg-white/10 px-4 py-3 text-center">
              <p className="text-2xl font-extrabold">{mod.chapters.length}</p>
              <p className="text-sm text-white/70">Chapters</p>
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-3 text-center">
              <p className="text-2xl font-extrabold">{totalLessons}</p>
              <p className="text-sm text-white/70">Lessons</p>
            </div>
            <div className="rounded-lg bg-[#EA580C] px-4 py-3 text-center">
              <p className="text-2xl font-extrabold">Free</p>
              <p className="text-sm text-white/80">No cost</p>
            </div>
          </div>
          <Link
            href="/course/signup"
            className="inline-block rounded-lg bg-[#EA580C] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#e0740f]"
          >
            Start This Module Free
          </Link>
        </div>
      </section>

      {/* Chapters */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-8 text-2xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            What You Will Learn
          </h2>
          <div className="space-y-6">
            {mod.chapters.map((chapter, ci) => (
              <div key={chapter.slug} className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-4 bg-gray-50 px-6 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {ci + 1}
                  </span>
                  <div>
                    <h3
                      className="font-bold text-gray-900"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-gray-500">{chapter.lessons.length} lessons</p>
                  </div>
                </div>
                <ul className="divide-y divide-gray-100">
                  {chapter.lessons.map((lesson) => (
                    <li key={lesson.slug} className="flex items-center justify-between px-6 py-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                            lesson.lessonType === 'interactive'
                              ? 'bg-orange-50 text-orange-700'
                              : lesson.lessonType === 'scenario'
                                ? 'bg-orange-50 text-orange-700'
                                : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {lesson.lessonType}
                        </span>
                        <span className="text-sm text-gray-800">{lesson.title}</span>
                      </div>
                      <span className="shrink-0 text-xs text-gray-400">
                        {lesson.estimatedMinutes} min
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#EA580C]">
            No cost. No catch.
          </p>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready to Start?
          </h2>
          <p className="mb-8 text-gray-600">
            Create your free account and begin studying {mod.title} today. All{' '}
            {totalLessons} lessons included.
          </p>
          <Link
            href="/course/signup"
            className="inline-block rounded-lg bg-[#EA580C] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#e0740f]"
          >
            Create Your Free Account
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/course/signup" className="text-[#EA580C] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
