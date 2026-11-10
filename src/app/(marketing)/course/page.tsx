import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { COURSE_MODULES } from '@/lib/data/course-content'
import { CourseModulesAccordion } from './CourseModulesAccordion'
import { HeroStats } from './HeroStats'
import { FloatingCTA } from './FloatingCTA'
import { ScrollFadeSection } from './ScrollFadeSection'

const SITE_BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Virginia Real Estate License Prep Course',
  description: 'Free 60-hour interactive pre-licensing course for the Virginia real estate salesperson exam. 12 modules, 183 lessons, 600+ practice questions, timed mock exams, and completion certificate.',
  url: `${SITE_BASE}/course`,
  provider: {
    '@type': 'Organization',
    name: 'Acme Realty',
    url: SITE_BASE,
  },
  courseMode: 'online',
  isAccessibleForFree: true,
  numberOfCredits: { '@type': 'StructuredValue', value: '60', unitText: 'hours' },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'PT60H',
  },
}

export const metadata: Metadata = {
  title: 'Free Virginia Real Estate License Prep Course | Acme Realty',
  description: 'Study for your Virginia real estate salesperson exam for free. 60 hours of interactive content, practice quizzes, and mock exams. Pass rate: 90%+.',
  other: {
    'application/ld+json': JSON.stringify(courseSchema),
  },
}

const MODULE_PAGE_PATHS: Record<string, string> = {
  'virginia-real-estate-law': '/course/virginia-real-estate-law',
  'property-ownership-land-use': '/course/property-ownership',
  'contracts-agency': '/course/contracts-agency',
  'finance-valuation': '/course/finance-valuation',
  'practice-ethics': '/course/practice-ethics',
  'virginia-specific-regulations': '/course/virginia-specific',
}

export default function CourseLandingPage() {
  return (
    <div>
      {/* Floating CTA - appears after scroll */}
      <FloatingCTA />

      {/* Hero - dark with image, matching main site hero pattern */}
      <section className="relative overflow-hidden bg-black px-6 py-20 lg:py-28">
        <Image
          src="/images/course/course-hero.jpeg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="hero-enter hero-enter-1 mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Free Pre-Licensing Course
          </span>
          <h1 className="hero-enter hero-enter-2 mb-5 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Get Your Virginia<br />Real Estate License.
          </h1>
          <p className="hero-enter hero-enter-3 mx-auto mb-8 max-w-2xl text-lg text-white/70">
            34% of first-timers pass the Virginia exam. Our students pass at 90%+. Interactive lessons, practice quizzes, timed mock exams, and a completion certificate. Completely free.
          </p>
          <div className="hero-enter hero-enter-3 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/course/signup"
              className="rounded-lg bg-[#EA580C] px-8 py-4 text-base font-bold text-white transition hover:bg-[#e0740f]"
            >
              Start Level 1 Free
            </Link>
            <Link href="/course/signup" className="text-sm text-white/50 hover:text-white">
              Already enrolled? Log in
            </Link>
          </div>
          {/* Animated stat counters */}
          <div className="hero-enter hero-enter-4">
            <HeroStats />
          </div>
        </div>
      </section>

      {/* How it works - white section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <ScrollFadeSection>
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#EA580C]">How It Works</p>
            <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Learn. Quiz. Level Up. Get Licensed.
            </h2>
          </ScrollFadeSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Learn', desc: 'Interactive lessons with scenarios, flashcards, and drag-and-drop exercises.' },
              { step: '02', title: 'Quiz', desc: 'Chapter quizzes after each section. Review wrong answers with full explanations.' },
              { step: '03', title: 'Level Up', desc: 'Earn badges, build study streaks, watch your exam readiness score climb.' },
              { step: '04', title: 'Certify', desc: 'Pass the mock exam, get your certificate, book the real PSI test.' },
            ].map((item, i) => (
              <ScrollFadeSection key={item.step} delay={i * 80}>
                <div className="text-center">
                  <p className="mb-3 text-3xl font-extrabold text-gray-200">{item.step}</p>
                  <h3 className="mb-2 text-lg font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </ScrollFadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement preview - dark section */}
      <section className="bg-black px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <ScrollFadeSection>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#EA580C]">Gamified Learning</p>
                <h2 className="mb-4 text-2xl font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Earn Badges. Track Streaks. See Your Score Climb.
                </h2>
                <p className="mb-6 text-sm text-white/60">
                  10 badges to unlock as you progress. Study streaks that keep you accountable. An exam readiness score that tells you exactly when you're ready to sit for the test.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['First Steps', 'Quiz Ace', 'Week Warrior', 'Exam Ready', 'Graduate'].map((badge) => (
                    <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src="/images/course/course-achievement-hero.jpeg"
                  alt="Achievement system with badges, XP, and progress tracking"
                  width={600}
                  height={338}
                  className="rounded-xl"
                />
              </div>
            </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* Features - white section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollFadeSection>
            <Image
              src="/images/course/course-game-cards.jpeg"
              alt="Chapter quizzes, timed mock exams, and completion certificate"
              width={900}
              height={506}
              className="mx-auto mb-10 rounded-xl shadow-sm"
            />
          </ScrollFadeSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Chapter Quizzes', desc: 'Test yourself after each chapter. See your score, review every answer with a full explanation.' },
              { title: 'Timed Mock Exam', desc: '120 questions in 150 minutes. Same format as the real PSI exam. Know exactly where you stand.' },
              { title: 'Completion Certificate', desc: 'Finish the course and get a certificate with your name, stats, and Acme Realty branding.' },
            ].map((f, i) => (
              <ScrollFadeSection key={f.title} delay={i * 80}>
                <div>
                  <h3 className="mb-2 font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </ScrollFadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - dark section matching site pattern */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollFadeSection>
            <h2 className="mb-2 text-center text-2xl font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Why Pay $300-$600 Elsewhere?
            </h2>
            <p className="mb-8 text-center text-sm text-white/40">Kaplan, RealEstateU, and AceableAgent charge for what we give you free.</p>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left font-medium text-white/40">Feature</th>
                    <th className="px-4 py-3 text-center font-bold text-[#EA580C]">Acme Realty</th>
                    <th className="px-4 py-3 text-center font-medium text-white/30">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Price', 'Free', '$239-$599'],
                    ['Lessons', '87 interactive', 'Text walls'],
                    ['Practice Questions', '600+ unlimited', 'Limited'],
                    ['Mock Exams', 'Timed PSI format', 'Basic'],
                    ['Progress Tracking', 'Dashboard + badges', 'Basic %'],
                    ['Post-License', 'Team placement', 'None'],
                    ['Virginia Focus', '100%', 'National + VA add-on'],
                  ].map(([feature, us, them]) => (
                    <tr key={feature}>
                      <td className="px-4 py-3 font-medium text-white/70">{feature}</td>
                      <td className="px-4 py-3 text-center font-semibold text-white">{us}</td>
                      <td className="px-4 py-3 text-center text-white/30">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeSection>
        </div>
      </section>

      {/* Modules - white section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <ScrollFadeSection>
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#EA580C]">Full Curriculum</p>
            <h2 className="mb-2 text-center text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              12 Modules. 183 Lessons.
            </h2>
            <p className="mb-8 text-center text-sm text-gray-500">
              Click any module to see chapters and lessons.
            </p>
          </ScrollFadeSection>
          <ScrollFadeSection delay={100}>
            <CourseModulesAccordion
              modules={COURSE_MODULES}
              modulePagePaths={MODULE_PAGE_PATHS}
            />
          </ScrollFadeSection>
        </div>
      </section>

      {/* Module illustrations */}
      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <ScrollFadeSection>
            <Image
              src="/images/course/module-detail-hero.jpeg"
              alt="Twelve module topics: Virginia law, property, contracts, finance, practice and ethics, Virginia regulations, real property concepts, liens and title, advanced finance, residential transaction, commercial and investment, risk management"
              width={1200}
              height={800}
              className="mx-auto rounded-xl"
            />
          </ScrollFadeSection>
        </div>
      </section>

      {/* Final CTA - dark */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollFadeSection>
            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Your License Starts Here.
            </h2>
            <p className="mb-8 text-white/50">
              183 lessons. Practice quizzes. Timed mock exam. Badges and a certificate. A team waiting for you when you pass.
            </p>
            <Link
              href="/course/signup"
              className="inline-block rounded-lg bg-[#EA580C] px-10 py-4 text-lg font-bold text-white transition hover:bg-[#e0740f]"
            >
              Start Level 1 Free
            </Link>
          </ScrollFadeSection>
        </div>
      </section>
    </div>
  )
}
