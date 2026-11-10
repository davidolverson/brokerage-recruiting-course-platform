import { createMetadata } from '@/lib/metadata'
import { getFAQSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Acme vs Traditional Brokerage',
  description:
    'An honest side-by-side look at how the Acme model compares to a traditional brokerage — commission structure, fees, equity, training, and flexibility.',
  path: '/compare',
})

const compareFAQs = [
  { question: 'How does Acme commission structure compare to a traditional brokerage?', answer: 'Acme Realty offers an 80/20 split with a $15,000 annual cap. Once you cap, you keep 100% of your commission for the rest of the year. Traditional brokerages often have higher splits with desk fees and franchise fees that never go away.' },
  { question: 'Does Acme Realty offer stock or equity options?', answer: 'Yes. Acme agents can earn company stock through production milestones, revenue share, and the agent equity program. Traditional brokerages typically offer no equity participation.' },
  { question: 'What training does Acme provide compared to traditional brokerages?', answer: 'Acme provides 40+ hours of live training per week through the Acme virtual campus, plus on-demand courses, mentorship programs, and the Growth Network investor certification. Most traditional brokerages offer limited weekly meetings and occasional workshops.' },
  { question: 'Can I work remotely with Acme Realty?', answer: 'Yes. Acme is a cloud-based brokerage with no physical office overhead. Agents work from anywhere with full access to tools, training, and support via the Acme virtual campus. Traditional brokerages require desk time and office presence.' },
]

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(compareFAQs)) }}
      />
      {children}
    </>
  )
}
