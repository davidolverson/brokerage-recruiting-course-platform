import { createMetadata } from '@/lib/metadata'
export const metadata = createMetadata({
  title: 'Teams | 6 Specialized Real Estate Teams',
  description: 'Browse 6 specialized teams at Acme Realty — investment, residential production, luxury, mortgage, settlement, and multi-state investor sales. Compare side-by-side and find your fit.',
  path: '/teams',
})
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
