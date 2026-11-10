import { createMetadata } from '@/lib/metadata'
import { getEventSchema } from '@/lib/schema'
import { upcomingFeaturedEvents } from '@/lib/data/events'

export const metadata = createMetadata({
  title: 'Training & Events | Growth Network Education + Acme Training',
  description: 'Growth Network-powered investor education meets 80+ weekly hours of live Acme training. Monthly in-person events, Tactics Training, Wealth Mastermind, the Annual Summit 2026, and certification programs.',
  path: '/training-events',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {upcomingFeaturedEvents().map((event) => (
        <script
          key={event.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getEventSchema(event)) }}
        />
      ))}
      {children}
    </>
  )
}
