import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Education & Certifications',
  description:
    'Growth Network certification, 40+ hours of weekly Acme training, monthly Anytown events, and structured mentorship. The most comprehensive agent education ecosystem in Anytown.',
  path: '/agent-advantage/education',
})

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children
}
