import { createMetadata } from '@/lib/metadata'
export const metadata = createMetadata({
  title: 'Partners | Vendor Program & Sponsorships',
  description: 'Partner with Acme Realty to reach the most active investor-agents in the Anytown market. Vendor program, event sponsorships, and preferred partner opportunities.',
  path: '/partners',
})
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
