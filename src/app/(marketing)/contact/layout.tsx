import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Acme Realty. Whether you have a quick question or are ready to start a conversation about your real estate career, we respond within one business day.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
