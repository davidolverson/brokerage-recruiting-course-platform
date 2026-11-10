import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service governing your use of the Acme Realty website, lead forms, agent applications, and branch resources. Updated for 2026.',
  path: '/terms',
})

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
