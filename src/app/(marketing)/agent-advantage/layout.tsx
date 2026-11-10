import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Agent Advantage Ecosystem',
  description:
    'Everything you need to close more deals and build wealth — transactions, financial partners, asset management, and education all under one roof at Acme Realty.',
  path: '/agent-advantage',
})

export default function AgentAdvantageLayout({ children }: { children: React.ReactNode }) {
  return children
}
