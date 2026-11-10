import { createMetadata } from '@/lib/metadata'
export const metadata = createMetadata({
  title: 'Success Stories | Real Agent Results',
  description: 'Results from Acme Realty agents and teams: case studies, team highlights, and branch milestones.',
  path: '/success-stories',
})
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
