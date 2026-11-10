import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Financial & Legal Partners',
  description:
    'Vetted mortgage and title partners who close on time, every time. Example Lending Partner and Example Title Partner — preferred lending and settlement partners at Acme Realty.',
  path: '/agent-advantage/financial-legal',
})

export default function FinancialLegalLayout({ children }: { children: React.ReactNode }) {
  return children
}
