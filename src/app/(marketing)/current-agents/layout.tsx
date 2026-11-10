import { createMetadata } from '@/lib/metadata'
export const metadata = createMetadata({
  title: 'Agent Resources | Tools & Training Access',
  description: 'Resource hub for active Acme Realty agents. Quick access to SkySlope, Growth Network certification, training calendar, partner contacts, and branch support.',
  path: '/current-agents',
})
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
