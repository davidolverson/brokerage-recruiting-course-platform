import { createMetadata } from '@/lib/metadata'
import { events, isUpcoming } from '@/lib/data/events'
import { getEventSchema } from '@/lib/schema'
import { TrainingEventsClient } from './TrainingEventsClient'

export const metadata = createMetadata({
  title: 'Training & Events',
  description:
    'Growth Network-powered investor education meets 80+ weekly hours of live Acme training. Monthly in-person events, the Annual Summit conference, and certification programs at Acme Realty.',
  path: '/training-events',
})

export default function TrainingEventsPage() {
  // isUpcoming lives in lib/data/events so the banner, this page's JSON-LD and
  // the layout's JSON-LD cannot drift apart again.
  const realEvents = events.filter((e) => isUpcoming(e))
  const eventSchemas = realEvents.map((e) => getEventSchema(e))

  return (
    <>
      {eventSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TrainingEventsClient />
    </>
  )
}
