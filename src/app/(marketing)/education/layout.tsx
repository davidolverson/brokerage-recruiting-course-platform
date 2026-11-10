import { createMetadata } from '@/lib/metadata'
export const metadata = createMetadata({
  title: 'Education Hub | Investor Articles & Market Insights',
  description: 'Real estate investor education for Anytown agents. Articles covering BRRR strategy, creative financing, top neighborhoods, rental demand, Growth Network certification, team building, and working with lenders.',
  path: '/education',
})
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
