import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Membership | What You Get at Acme Realty',
  description:
    'What an Acme Realty branch membership costs and what is included — conference rooms, training and event space, weekly training and lead gen, transaction coordination at a group rate, vendor list, and broker support.',
  path: '/membership',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
