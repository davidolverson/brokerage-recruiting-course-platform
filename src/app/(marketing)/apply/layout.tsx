import { createMetadata } from '@/lib/metadata'
import { getJobPostingSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Apply to Join Acme Realty',
  description:
    'Apply to join Acme Realty. Choose your path — join a team for mentorship and leads, or go independent with Growth Network for maximum splits and autonomy.',
  path: '/apply',
})

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJobPostingSchema()) }}
      />
      {children}
    </>
  )
}
