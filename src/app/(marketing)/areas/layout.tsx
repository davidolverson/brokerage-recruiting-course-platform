import { createMetadata } from '@/lib/metadata'
export const metadata = createMetadata({
  title: 'Local Markets | Anytown Real Estate Areas',
  description: 'Explore the local real estate markets we serve and find the teams active in each area.',
  path: '/areas',
})
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
