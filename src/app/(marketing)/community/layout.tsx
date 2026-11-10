import { createMetadata } from '@/lib/metadata'
export const metadata = createMetadata({
  title: 'Community | Branch Culture & Leadership',
  description: 'Meet Jane Agent, branch founder of Acme Realty. A growth-first culture centered on mentorship, investor education, and agent development.',
  path: '/community',
})
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
