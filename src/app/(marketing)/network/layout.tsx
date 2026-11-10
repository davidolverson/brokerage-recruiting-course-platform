import { createMetadata } from '@/lib/metadata'
import { getFAQSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Growth Network | Flip Your Income Into Ownership',
  description:
    'Growth Network is the independent agent path at Acme Realty. Build wealth — not just sell homes. Wealth Roadmap framework, Growth Network Pro membership, 50K+ investor network, the Annual Summit, and the tools to flip your income into ownership.',
  path: '/network',
})

const networkFAQs = [
  { question: 'What is Growth Network?', answer: 'Growth Network (Growth, Relationships, Integrity, Development) is an investor-agent certification and community with 50,000+ members. It gives real estate agents the framework, credential, and national network to serve investor clients and build personal wealth through real estate ownership.' },
  { question: 'Is Growth Network free for Acme Realty agents?', answer: 'Yes. All Acme Realty agents receive a complimentary Growth Network Pro membership, which includes 35+ hours of investor education, the Agent Investor Certification, weekly Wealth Mastermind sessions, and access to the full Growth Network national network.' },
  { question: 'What is the Wealth Roadmap framework?', answer: 'The Wealth Roadmap is the core Growth Network framework for transitioning from active income (commissions) to passive income (investment returns). It guides agents through building a cash machine, acquiring assets, and achieving financial independence through real estate ownership.' },
  { question: 'What is the Annual Summit?', answer: 'Annual Summit is the annual Growth Network investor conference featuring national speakers, live deal rooms, and Mid-Atlantic networking. The 2026 event is June 1-2 in Anytown.' },
  { question: 'Can I do Growth Network and be on a team at the same time?', answer: 'Yes. Growth Network is not mutually exclusive with team membership. Many agents join a team for leads and mentorship while also pursuing Growth Network certification and investor education. The two paths complement each other.' },
]

const networkSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Growth Network Anytown',
  description: 'Investor-agent certification and education program at Acme Realty. Part of the national Growth Network network with 50,000+ members.',
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/network`,
  parentOrganization: {
    '@type': 'Organization',
    name: 'Growth Network Investor Network',
    url: 'https://example.com',
  },
}

export default function NetworkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(networkFAQs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(networkSchema) }}
      />
      {children}
    </>
  )
}
