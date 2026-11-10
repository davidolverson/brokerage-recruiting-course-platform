import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virginia Real Estate Exam Day Guide | Acme Realty',
  description:
    'Everything you need to know for the Virginia real estate exam. PSI testing center info, exam format, topic weights, passing scores, and post-exam next steps.',
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/course/exam-day` },
  openGraph: {
    title: 'Virginia Real Estate Exam Day Guide | Acme Realty',
    description:
      'Everything you need to know for the Virginia real estate exam. PSI testing center info, exam format, topic weights, passing scores, and post-exam next steps.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/course/exam-day`,
    siteName: 'Acme Realty',
    type: 'website',
  },
}

const BEFORE_EXAM_ITEMS = [
  'Schedule at a PSI testing center (psiexams.com)',
  'Exam fee: $60',
  'Bring two forms of valid ID (one government-issued photo ID)',
  'Arrive 30 minutes early',
  'No phones, notes, or calculators allowed in the testing room',
  'PSI provides an on-screen calculator',
]

const EXAM_FORMAT_ITEMS = [
  { label: 'National portion', detail: '80 questions, 105 minutes, 70% to pass (56/80)' },
  { label: 'Virginia portion', detail: '40 questions, 45 minutes, 75% to pass (30/40)' },
  { label: 'Total', detail: '120 questions, 2.5 hours' },
  { label: 'Format', detail: 'Multiple choice, computer-based' },
  { label: 'Results', detail: 'Given immediately after completion' },
]

const TOPIC_WEIGHTS = [
  { topic: 'Contracts', weight: 19 },
  { topic: 'Practice of Real Estate', weight: 12 },
  { topic: 'Property Ownership', weight: 10 },
  { topic: 'Financing', weight: 10 },
  { topic: 'Valuation', weight: 8 },
  { topic: 'Property Disclosures', weight: 7 },
  { topic: 'Real Estate Calculations', weight: 7 },
  { topic: 'Transfer of Title', weight: 6 },
  { topic: 'Land Use Controls', weight: 5 },
]

const AFTER_PASS_STEPS = [
  'Background check + fingerprinting ($52)',
  'Apply to DPOR for your license ($170)',
  'Must apply within 12 months of passing the exam',
  'Find a sponsoring broker',
  'Complete 30-hour post-license course within your first year',
]

export default function ExamDayPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Exam Day Prep
          </span>
          <h1
            className="mb-5 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Virginia Real Estate
            <br />
            Exam Day Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Everything you need to know to walk in confident.
          </p>
        </div>
      </section>

      {/* Before the Exam - white section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            Before the Exam
          </p>
          <h2
            className="mb-10 text-center text-3xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Your Pre-Exam Checklist
          </h2>
          <ul className="mx-auto max-w-2xl space-y-4">
            {BEFORE_EXAM_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EA580C] text-xs font-bold text-white">
                  &#10003;
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Exam Format - dark section */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            Know What to Expect
          </p>
          <h2
            className="mb-10 text-center text-3xl font-extrabold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Exam Format Breakdown
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {EXAM_FORMAT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4"
              >
                <span className="font-bold text-white">{item.label}</span>
                <span className="text-sm text-white/70">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Exam Topics - white section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            Where to Focus
          </p>
          <h2
            className="mb-10 text-center text-3xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Top Exam Topics by Weight
          </h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {TOPIC_WEIGHTS.map((item) => (
              <div key={item.topic} className="flex items-center gap-4">
                <span className="w-12 shrink-0 text-right text-lg font-extrabold text-gray-900">
                  {item.weight}%
                </span>
                <div className="flex-1">
                  <div className="mb-1 text-sm font-semibold text-gray-800">{item.topic}</div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#EA580C]"
                      style={{ width: `${(item.weight / 19) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After You Pass - dark section */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            Next Steps
          </p>
          <h2
            className="mb-10 text-center text-3xl font-extrabold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            After You Pass
          </h2>
          <ol className="mx-auto max-w-2xl space-y-4">
            {AFTER_PASS_STEPS.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EA580C] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-white/80">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="/join-a-team"
              className="inline-block rounded-lg bg-[#EA580C] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#e0740f]"
            >
              Join Acme Realty
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - white section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Not Ready Yet?
          </h2>
          <p className="mb-8 text-gray-500">
            Go back to the course and keep studying. 183 lessons, 600+ practice questions, and timed
            mock exams are waiting for you.
          </p>
          <Link
            href="/course"
            className="inline-block rounded-lg bg-[#EA580C] px-10 py-4 text-lg font-bold text-white transition hover:bg-[#e0740f]"
          >
            Back to the Course
          </Link>
        </div>
      </section>
    </div>
  )
}
