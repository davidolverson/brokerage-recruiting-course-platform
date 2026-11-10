import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
const SITE_NAME = 'Acme Realty'
const DEFAULT_DESCRIPTION =
  "Join Anytown's fastest-growing real estate branch. Choose your path: join a team or grow independently with Growth Network. Training, community, and a vertically integrated support ecosystem."

export function createMetadata(options: {
  title: string
  description?: string
  path?: string
  ogImage?: string
  /**
   * Keep the page out of search results. Used by the members-only handbook:
   * the middleware already requires a session, but a crawler that follows a
   * shared link should not index the title and description of a page about the
   * fee schedule either.
   */
  noIndex?: boolean
}): Metadata {
  const title = `${options.title} | ${SITE_NAME}`
  const description = options.description ?? DEFAULT_DESCRIPTION
  const canonicalUrl = `${BASE_URL}${options.path ?? ''}`
  const ogImageUrl = options.ogImage ?? `${BASE_URL}/images/og-image.jpeg`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
    ...(options.noIndex
      ? { robots: { index: false, follow: false, nocache: true } }
      : {}),
    alternates: {
      canonical: canonicalUrl,
    },
  }
}
