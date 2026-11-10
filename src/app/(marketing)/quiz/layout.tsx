import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Team or Growth Network? Take the Quiz',
  description:
    '5 questions. Under 2 minutes. Get a personalized recommendation on whether to join a team or grow independently with Growth Network at Acme Realty.',
  path: '/quiz',
})

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children
}
