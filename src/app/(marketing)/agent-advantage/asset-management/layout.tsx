import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Asset Management',
  description:
    'Rental strategy, property management connections, and investor frameworks to help you and your clients build wealth that outlasts any single transaction.',
  path: '/agent-advantage/asset-management',
})

export default function AssetManagementLayout({ children }: { children: React.ReactNode }) {
  return children
}
