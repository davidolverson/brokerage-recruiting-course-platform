import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'How Acme Realty collects, uses, and protects your personal information. Read our data practices, cookie policy, and your rights under Virginia privacy law.',
  path: '/privacy',
})

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
