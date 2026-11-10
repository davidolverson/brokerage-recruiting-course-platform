import { createMetadata } from '@/lib/metadata'
import { getFAQSchema } from '@/lib/schema'
import { faqItems } from '@/lib/data/faq'

export const metadata = createMetadata({
  title: 'FAQ',
  description:
    'Everything you want to know about Acme Realty — the branch model, Growth Network certification, commission structure, joining process, and building a career as an investor-agent.',
  path: '/faq',
})

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = getFAQSchema(
    faqItems.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
