/**
 * TeamStructuredData
 *
 * Server-compatible component (no 'use client' directive).
 * Outputs a single <script type="application/ld+json"> tag containing an
 * @graph array of schema.org nodes so AI crawlers (ChatGPT, Perplexity,
 * Google AI) can discover and index the team leader and featured members.
 *
 * Schema nodes produced:
 *   - Organization  (the team itself)
 *   - Person        (leader)
 *   - Person[]      (each featured member, if provided)
 */

import type { LeaderBio, FeaturedMember } from '@/lib/data/teams'

interface Props {
  teamName: string
  leader: string
  leaderTitle: string
  description: string
  website?: string
  markets: string[]
  leaderBio?: LeaderBio
  featuredMembers?: FeaturedMember[]
}

// ---- helpers ----------------------------------------------------------------

/**
 * Derives a full-text description for the leader from their bio sections.
 * Falls back to the top-level description prop when no bio is present.
 */
function buildLeaderDescription(description: string, leaderBio?: LeaderBio): string {
  if (!leaderBio) return description

  const parts: string[] = [leaderBio.headline]

  for (const section of leaderBio.sections) {
    parts.push(section.content)
    if (section.bullets && section.bullets.length > 0) {
      parts.push(section.bullets.join('. '))
    }
  }

  if (leaderBio.quote) {
    parts.push(leaderBio.quote)
  }

  return parts.filter(Boolean).join(' ')
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

// ---- schema node types ------------------------------------------------------

interface SchemaOrganization {
  '@type': 'Organization'
  '@id': string
  name: string
  description: string
  url?: string
  areaServed: string[]
  employee: {
    '@type': 'Person'
    name: string
    jobTitle: string
  }
}

interface SchemaPerson {
  '@type': 'Person'
  '@id': string
  name: string
  jobTitle: string
  description: string
  worksFor?: { '@id': string }
  knowsAbout: string[]
  url?: string
}

type GraphNode = SchemaOrganization | SchemaPerson

// ---- schema builders --------------------------------------------------------

function buildOrganizationNode(props: Props, orgId: string): SchemaOrganization {
  const node: SchemaOrganization = {
    '@type': 'Organization',
    '@id': orgId,
    name: props.teamName,
    description: props.description,
    areaServed: props.markets,
    employee: {
      '@type': 'Person',
      name: props.leader,
      jobTitle: props.leaderTitle,
    },
  }

  if (props.website !== undefined) {
    node.url = props.website
  }

  return node
}

function buildLeaderNode(props: Props, orgId: string): SchemaPerson {
  const leaderId = `#person-${slugify(props.leader)}`

  const node: SchemaPerson = {
    '@type': 'Person',
    '@id': leaderId,
    name: props.leader,
    jobTitle: props.leaderTitle,
    description: buildLeaderDescription(props.description, props.leaderBio),
    worksFor: { '@id': orgId },
    knowsAbout: props.markets,
  }

  if (props.website !== undefined) {
    node.url = props.website
  }

  return node
}

function buildMemberNode(member: FeaturedMember, orgId: string): SchemaPerson {
  return {
    '@type': 'Person',
    '@id': `#person-${slugify(member.name)}`,
    name: member.name,
    jobTitle: member.title,
    description: member.bio,
    worksFor: { '@id': orgId },
    knowsAbout: member.expertise,
  }
}

// ---- component --------------------------------------------------------------

export function TeamStructuredData(props: Props) {
  const orgId = `#team-${slugify(props.teamName)}`

  const graph: GraphNode[] = [
    buildOrganizationNode(props, orgId),
    buildLeaderNode(props, orgId),
  ]

  if (props.featuredMembers !== undefined && props.featuredMembers.length > 0) {
    for (const member of props.featuredMembers) {
      graph.push(buildMemberNode(member, orgId))
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
