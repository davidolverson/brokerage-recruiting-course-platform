import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Transactions & Operations',
  description:
    'TC support, staging resources, vendor networks, and streamlined ops infrastructure so you can focus on clients — not paperwork. Acme Realty operations pillar.',
  path: '/agent-advantage/transactions-operations',
})

export default function TransactionsOperationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
