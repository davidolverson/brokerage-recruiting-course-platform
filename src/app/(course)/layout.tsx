import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Virginia Real Estate License Prep | Acme Realty',
    template: '%s | VA License Prep | Acme Realty',
  },
  description: 'Free Virginia real estate pre-licensing course. Study for your VA salesperson exam with interactive lessons, practice quizzes, and mock exams.',
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
}
