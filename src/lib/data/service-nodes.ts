// ─── Partner interface ────────────────────────────────────────────────────────

export interface ServicePartner {
  name: string
  description: string
  /** URL to partner website or info page */
  url?: string
  /** Tag shown on the partner card (e.g. "Preferred Lender") */
  tag?: string
}

// ─── ServiceNode interface ───────────────────────────────────────────────────

export interface ServiceNode {
  id: string
  title: string
  /** Short sentence summary shown in cards / overviews */
  summary: string
  /** Longer description for detail sections */
  description: string
  /** Icon name / identifier — map in consuming component */
  icon: string
  /** Hex color used for accents on this node's card */
  accentColor: string
  /** Bullet-point capabilities / offerings */
  capabilities: string[]
  /** Optional external or internal partners tied to this node */
  partners?: ServicePartner[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const serviceNodes: ServiceNode[] = [
  {
    id: 'transactions-ops',
    title: 'Transactions & Ops',
    summary:
      'End-to-end transaction coordination so agents close faster with fewer mistakes.',
    description:
      'Our transaction coordination layer handles everything from contract to close — deadline tracking, compliance review, earnest money management, and status updates pushed directly to agents and clients. Agents get their time back while every deal moves forward on a predictable timeline.',
    icon: 'file-check',
    accentColor: '#000000',
    capabilities: [
      'TC services from ratified contract to close',
      'Compliance checklist review and document collection',
      'Deadline and contingency tracking',
      'Client communication templates and status updates',
      'NOVA transaction management system integration',
      'E-sign and digital document workflows',
    ],
  },
  {
    id: 'financial-legal',
    title: 'Financial & Legal',
    summary:
      'In-house preferred lending and trusted title partners to keep every deal on track.',
    description:
      'Access to vetted financial and legal professionals who understand the Anytown market and Acme agent ecosystem. From pre-approval to closing table, these partners are wired into our branch workflow for fast communication and smooth coordination.',
    icon: 'briefcase',
    accentColor: '#000000',
    capabilities: [
      'Preferred mortgage lending — competitive rates, fast pre-approvals',
      'Full-service title and settlement — search to disbursement',
      'Refinance and purchase transaction support',
      'Lender-agent communication protocols',
      'Simultaneous closing coordination',
      'Legal review on complex transactions (referral network)',
    ],
    partners: [
      {
        name: 'Example Lending Partner',
        description:
          'Preferred lending partner. Local mortgage professionals embedded in the Anytown agent ecosystem — known for fast pre-approvals, clear communication, and competitive rate structures.',
        tag: 'Preferred Lender',
      },
      {
        name: 'Example Title Partner',
        description:
          'Virginia-based title and settlement company handling search, examination, closing, and disbursement. Deep experience with Anytown-area transactions and a proven track record closing on time.',
        url: 'https://example.com/title',
        tag: 'Preferred Title & Settlement',
      },
    ],
  },
  {
    id: 'asset-management',
    title: 'Asset Management',
    summary:
      'Investment education and deal-flow infrastructure for agents building real estate wealth.',
    description:
      'Beyond residential transactions, Acme Realty provides agents the education, network, and deal access to build their own investment portfolios. Whether you are interested in fix-and-flip, buy-and-hold, or managing properties for investor clients, this node gives you the infrastructure to do it professionally.',
    icon: 'trending-up',
    accentColor: '#000000',
    capabilities: [
      'Investor client pipeline and lead sharing',
      'Fix-and-flip project analysis frameworks',
      'Buy-and-hold rental property education',
      'Deal review sessions with active investor agents',
      'Access to off-market investment inventory',
      'Property management partner referrals',
      'Acme revenue share as a passive income layer',
    ],
  },
  {
    id: 'education-coaching',
    title: 'Education & Coaching',
    summary:
      'Structured training, live coaching, and peer accountability from day one.',
    description:
      "New and growing agents at Acme Realty get access to a layered education system — from Acme's global platform down to local live sessions, team-specific coaching, and one-on-one accountability structures. No guesswork about what to do next; there is always a clear path forward.",
    icon: 'graduation-cap',
    accentColor: '#000000',
    capabilities: [
      'the Acme virtual campus — unlimited on-demand training (global platform)',
      'Local branch training events and live workshops',
      'New agent onboarding programs (90-day launch plan)',
      'Scripts, objection handling, and negotiation coaching',
      'Marketing and social media strategy sessions',
      'One-on-one coaching from team leaders',
      'Peer accountability groups and mastermind circles',
      'Investor education track (via Example Investor Team)',
    ],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getServiceNodeById(id: string): ServiceNode | undefined {
  return serviceNodes.find((n) => n.id === id)
}

export function getServiceNodePartners(id: string): ServicePartner[] {
  return getServiceNodeById(id)?.partners ?? []
}
