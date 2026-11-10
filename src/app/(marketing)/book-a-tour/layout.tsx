import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Book a Branch Tour',
  description:
    'Tour the Acme Realty office in Anytown, meet the leadership team, and walk away with a clear picture of which path is right for you.',
  path: '/book-a-tour',
})

export default function BookATourLayout({ children }: { children: React.ReactNode }) {
  return children
}
