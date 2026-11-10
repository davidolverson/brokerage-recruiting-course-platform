export interface FeaturedMember {
  name: string
  title: string
  bio: string
  expertise: string[]
  highlights: string[]
}

export interface BioSection {
  heading: string
  content: string
  bullets?: string[]
}

export interface LeaderBio {
  /** Large headline rendered at the top of the bio block */
  headline: string
  /** jobTitle used for structured data and display */
  jobTitle: string
  /** One-sentence description used in the schema.org description meta */
  description: string
  /** Name of the organisation the leader works for (schema.org worksFor) */
  worksFor: string
  /** Ordered list of content sections */
  sections: BioSection[]
  /** Pull-quote displayed in the styled blockquote */
  quote: string
  /** Attribution line rendered below the blockquote text */
  quoteAttribution: string
  /** Closing paragraph inside the dark CTA card */
  contactCTA: string
}

export interface Team {
  slug: string
  name: string
  leader: string
  leaderTitle: string
  specialty: string
  description: string
  idealAgentType: string
  cultureKeywords: string[]
  supportModel: string
  first90DayAdvantage: string
  proofPoints: string[]
  memberCount: number
  markets: string[]
  recruitingContact?: string
  phone?: string
  email?: string
  website?: string
  address?: string
  heroImage?: string
  logoImage?: string
  leaderQuote?: string
  isPlaceholder?: boolean
  featuredMembers?: FeaturedMember[]
  leaderBio?: LeaderBio
}

// Demo data. Every team, person, and contact below is a fictional placeholder.
// Replace this array with your own teams and partners.
export const teams: Team[] = [
  {
    slug: 'example-investor-team',
    name: 'Example Investor Team',
    leader: 'Jane Agent',
    leaderTitle: 'Team Leader',
    specialty: 'Real estate investing, fix-and-flip, wealth building',
    description:
      'An investment-focused team for agents who want to do more than sell homes. Agents learn deal analysis, renovation management, and buy-and-hold strategy while serving buyers and sellers across the metro area.',
    idealAgentType:
      'Agents who think like investors and want hands-on mentorship from someone who has done the work.',
    cultureKeywords: ['Investing', 'Wealth Building', 'Fix-and-Flip', 'Mentorship', 'Buy-and-Hold'],
    supportModel:
      'Weekly deal reviews, shared renovation contacts, access to the Growth Program investor network, and transaction coordination support.',
    first90DayAdvantage:
      'Shadow a live rehab project, complete the Growth Program investor certification, and close your first transaction with full team support.',
    proofPoints: ['Demo proof point one', 'Demo proof point two', 'Demo proof point three'],
    memberCount: 12,
    markets: ['Downtown', 'Riverside', 'Northside'],
    website: 'https://example.com',
    email: 'team@example.com',
    phone: '(555) 010-0101',
    leaderQuote: 'Placeholder quote from the team leader. Replace with your own.',
    featuredMembers: [
      {
        name: 'John Agent',
        title: 'Senior Agent | Example Investor Team',
        bio: 'Placeholder bio for a featured team member. Replace with a real bio once you have permission to publish it.',
        expertise: ['Listing Strategy', 'New Construction', 'First-Time Buyers'],
        highlights: ['Demo highlight one', 'Demo highlight two'],
      },
    ],
    leaderBio: {
      headline: 'Jane Agent | Real Estate Strategy & Business Growth',
      jobTitle: 'Team Leader',
      description: 'Investor and team leader building a vertically integrated real estate operation.',
      worksFor: 'Example Investor Team at Acme Realty',
      sections: [
        {
          heading: 'Background',
          content:
            'Placeholder background section. Describe the leader, the team, and the market it serves.',
        },
        {
          heading: 'The Vision: Vertical Integration',
          content:
            'A unified real estate experience integrates the essential pillars of the industry into one streamlined ecosystem.',
          bullets: ['Title & Settlement', 'Mortgage', 'Insurance', 'Property Management'],
        },
      ],
      quote: 'Real estate is about more than property; it is about the systems that empower people.',
      quoteAttribution: 'Jane Agent, Example Investor Team',
      contactCTA:
        'Whether you are an agent looking to scale your business or a homeowner planning a sale, reach out to start a conversation.',
    },
  },
  {
    slug: 'example-residential-team',
    name: 'Example Residential Team',
    leader: 'Alex Agent',
    leaderTitle: 'Team Leader',
    specialty: 'Residential production, buyer and listing representation',
    description:
      'A production-focused residential team with lead distribution, weekly accountability, and a shared transaction coordinator.',
    idealAgentType: 'Agents who want structure, leads, and accountability from day one.',
    cultureKeywords: ['Production', 'Accountability', 'Lead Generation', 'Systems'],
    supportModel: 'Lead distribution, weekly accountability meetings, scripts, and a shared transaction coordinator.',
    first90DayAdvantage: 'Receive your first warm leads, complete onboarding, and close your first deal with team support.',
    proofPoints: ['Demo proof point one', 'Demo proof point two'],
    memberCount: 8,
    markets: ['Downtown', 'Lakeside'],
    website: 'https://example.com',
  },
  {
    slug: 'example-lending-partner',
    name: 'Example Lending Partner',
    leader: 'Sam Lender',
    leaderTitle: 'Loan Officer',
    specialty: 'Conventional, FHA, and DSCR investor lending',
    description: 'A placeholder mortgage partner. Replace with your preferred lender details.',
    idealAgentType: 'Agents whose clients need fast pre-approvals and investor loan options.',
    cultureKeywords: ['Mortgage', 'DSCR', 'Pre-Approval'],
    supportModel: 'Fast pre-approvals and loan options for buyers and investors.',
    first90DayAdvantage: 'Send a buyer for a pre-approval and get a same-week answer.',
    proofPoints: ['Demo proof point one', 'Demo proof point two'],
    memberCount: 3,
    markets: ['Statewide'],
    website: 'https://example.com',
  },
  {
    slug: 'example-title-partner',
    name: 'Example Title Partner',
    leader: 'Pat Closer',
    leaderTitle: 'Settlement Agent',
    specialty: 'Title, escrow, and settlement services',
    description: 'A placeholder title and settlement partner. Replace with your preferred title company details.',
    idealAgentType: 'Agents who want predictable, on-time closings.',
    cultureKeywords: ['Title', 'Escrow', 'Settlement'],
    supportModel: 'Title search, escrow, and settlement coordination.',
    first90DayAdvantage: 'Open your first file and get a dedicated closing contact.',
    proofPoints: ['Demo proof point one', 'Demo proof point two'],
    memberCount: 4,
    markets: ['Statewide'],
    website: 'https://example.com',
  },
]

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug)
}

export function getActiveTeams(): Team[] {
  return teams.filter((t) => !t.isPlaceholder)
}

/** @deprecated use getActiveTeams */
export const getRealTeams = getActiveTeams
