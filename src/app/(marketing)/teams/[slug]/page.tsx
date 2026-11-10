import { notFound } from 'next/navigation'
import { getActiveTeams, getTeamBySlug } from '@/lib/data/teams'
import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema } from '@/lib/schema'
import { TeamDetailClient } from './TeamDetailClient'
import { TeamStructuredData } from '@/components/teams/TeamStructuredData'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getActiveTeams().map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const team = getTeamBySlug(slug)
  if (!team || team.isPlaceholder) {
    return { title: 'Team Not Found | Acme Realty' }
  }
  return createMetadata({
    title: `${team.name} | Teams`,
    description: team.description.slice(0, 155),
    path: `/teams/${slug}`,
    ...(team.heroImage ? { ogImage: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}${team.heroImage}` } : {}),
  })
}

export default async function TeamDetailPage({ params }: Props) {
  const { slug } = await params
  const team = getTeamBySlug(slug)

  if (!team || team.isPlaceholder) {
    notFound()
  }

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Teams', url: `${BASE_URL}/teams` },
    { name: team.name, url: `${BASE_URL}/teams/${slug}` },
  ])

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: team.name,
    description: team.description.slice(0, 300),
    url: team.website ?? `${BASE_URL}/teams/${slug}`,
    ...(team.phone ? { telephone: team.phone } : {}),
    ...(team.email ? { email: team.email } : {}),
    ...(team.address
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: team.address,
            addressRegion: 'VA',
            addressCountry: 'US',
          },
        }
      : {}),
    ...(team.heroImage
      ? { image: `${BASE_URL}${team.heroImage}` }
      : {}),
    parentOrganization: {
      '@type': 'Organization',
      name: 'Acme Realty LLC',
      url: 'https://example.com',
    },
    member: {
      '@type': 'Person',
      name: team.leader,
      jobTitle: team.leaderTitle,
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: team.memberCount,
    },
    areaServed: team.markets.map((market) => ({
      '@type': 'Place',
      name: market,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, organizationSchema]),
        }}
      />
      <TeamStructuredData
        teamName={team.name}
        leader={team.leader}
        leaderTitle={team.leaderTitle}
        description={team.description}
        website={team.website}
        markets={team.markets}
        leaderBio={team.leaderBio}
        featuredMembers={team.featuredMembers}
      />
      <TeamDetailClient team={team} />
    </>
  )
}
