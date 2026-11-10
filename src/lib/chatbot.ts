import { faqItems, type FAQItem } from '@/lib/data/faq'

// ─── Intent types ────────────────────────────────────────────

export type IntentType =
  | 'greeting'
  | 'team'
  | 'network'
  | 'tour'
  | 'apply'
  | 'commission'
  | 'training'
  | 'human'
  | 'faq_match'
  | 'fallback'

export interface ChatResponse {
  text: string
  quickReplies?: string[]
  links?: { label: string; href: string }[]
}

// ─── Keyword → Intent mapping ────────────────────────────────

const INTENT_KEYWORDS: Record<IntentType, string[]> = {
  greeting: ['hello', 'hey', 'hi', 'howdy', 'sup', 'good morning', 'good afternoon', 'good evening', 'whats up'],
  team: ['team', 'teams', 'join a team', 'mentorship', 'mentor', 'structure', 'leads provided', 'accountability'],
  network: ['network', 'grid', 'investor', 'investing', 'investment', 'wealth', 'freedom', 'wealth roadmap', 'growth pro', 'independent', 'flip income'],
  tour: ['tour', 'visit', 'office', 'come in', 'see the office', 'meet', 'schedule', 'book', 'appointment', 'walk through'],
  apply: ['apply', 'application', 'sign up', 'join', 'get started', 'start'],
  commission: ['commission', 'split', 'cap', 'money', 'earn', 'income', 'salary', 'pay', 'compensation', 'revenue share', 'stock'],
  training: ['training', 'events', 'tactics training', 'wealth mastermind', 'webinar', 'certification', 'education', 'learn', 'class', 'course', 'annual summit'],
  human: ['human', 'person', 'agent', 'talk to someone', 'real person', 'call', 'phone', 'email', 'contact', 'help me', 'speak'],
  faq_match: [],
  fallback: [],
}

// ─── Responses ───────────────────────────────────────────────

const RESPONSES: Record<Exclude<IntentType, 'faq_match' | 'fallback'>, ChatResponse> = {
  greeting: {
    text: "Hey! Welcome to Acme Realty. I can help you find the right path — whether that's joining a team, growing with Growth Network, or booking a tour. What are you looking for?",
    quickReplies: ['Join a Team', 'Learn about Growth Network', 'Book a Tour', 'Talk to Someone'],
  },
  team: {
    text: "Great choice! We have 6 specialized teams at Acme Realty — covering investment, residential, luxury, mortgage, and more. Each team offers mentorship, leads, and proven systems so you can ramp fast.",
    quickReplies: ['Browse Teams', 'Am I a team fit?', 'Book a Tour'],
    links: [
      { label: 'Browse All Teams', href: '/teams' },
      { label: 'Join a Team', href: '/join-a-team' },
    ],
  },
  network: {
    text: "Growth Network is an agent-led investor network — 50,000+ members, 350+ events/year, and a FREE Growth Network Pro membership when you join Acme Realty. Learn how to flip your income into ownership through the Wealth Roadmap framework.",
    quickReplies: ['What is Growth Network Pro?', 'Commission structure', 'Book a Tour'],
    links: [
      { label: 'Explore Growth Network', href: '/network' },
      { label: 'Take the Quiz', href: '/quiz' },
    ],
  },
  tour: {
    text: "We'd love to show you the office! Book a 30-minute branch tour at our Anytown location. You'll meet the leadership team and walk away with a clear picture of which path fits you.",
    quickReplies: ['Apply Now', 'Learn about Teams', 'Learn about Growth Network'],
    links: [
      { label: 'Book a Tour', href: '/book-a-tour' },
    ],
  },
  apply: {
    text: "Ready to take the next step? Our application takes about 5 minutes. You'll choose your path — join a team for mentorship and leads, or go independent with Growth Network for maximum splits and autonomy.",
    quickReplies: ['Not sure? Take the Quiz', 'Book a Tour First'],
    links: [
      { label: 'Apply Now', href: '/apply' },
      { label: 'Take the Path Quiz', href: '/quiz' },
    ],
  },
  commission: {
    text: "Acme Realty offers an 80/20 split that caps at $15,000 gross commission paid. After cap, you keep 100% (minus transaction fees). Plus you get stock awards, revenue share up to 7 tiers deep, and production awards.",
    quickReplies: ['Revenue share explained', 'Apply Now', 'Book a Tour'],
    links: [
      { label: 'Income Calculator', href: '/calculator' },
    ],
  },
  training: {
    text: "Acme Realty runs 40+ hours of live training weekly through the Acme virtual campus, plus local events: Tactics Training (Tues 8:30 AM), Wealth Mastermind (Wed 8:30 AM), monthly in-person meetups, and the Annual Summit 2026 in June. All free for Growth Network agents.",
    quickReplies: ['What is Growth Network?', 'Commission structure', 'Apply Now'],
    links: [
      { label: 'View All Events', href: '/training-events' },
    ],
  },
  human: {
    text: "Absolutely! Reach out to Jane Agent, our branch owner:\n\n📧 agent@example.com\n📞 (555) 010-0100\n\nOr book a 1-on-1 tour and ask your questions in person.",
    quickReplies: ['Book a Tour', 'Apply Now'],
    links: [
      { label: 'Book a Tour', href: '/book-a-tour' },
      { label: 'Contact Page', href: '/contact' },
    ],
  },
}

const FALLBACK: ChatResponse = {
  text: "I'm not sure I understood that. Here are some things I can help with:",
  quickReplies: ['Join a Team', 'Learn about Growth Network', 'Commission Info', 'Book a Tour', 'Talk to Someone'],
}

// ─── FAQ matching ────────────────────────────────────────────

function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2)
}

function scoreFAQ(query: string, faq: FAQItem): number {
  const queryTokens = tokenize(query)
  const faqTokens = tokenize(faq.question + ' ' + faq.answer)
  let score = 0
  for (const qt of queryTokens) {
    for (const ft of faqTokens) {
      if (ft === qt) score += 3
      else if (ft.startsWith(qt) || qt.startsWith(ft)) score += 1
    }
  }
  // Boost if query words appear in the question (more relevant than answer)
  const questionTokens = tokenize(faq.question)
  for (const qt of queryTokens) {
    if (questionTokens.includes(qt)) score += 5
  }
  return score
}

function findBestFAQ(query: string): FAQItem | null {
  let best: FAQItem | null = null
  let bestScore = 0
  for (const faq of faqItems) {
    const score = scoreFAQ(query, faq)
    if (score > bestScore) {
      bestScore = score
      best = faq
    }
  }
  // Minimum threshold to avoid weak matches
  return bestScore >= 8 ? best : null
}

// ─── Main resolver ───────────────────────────────────────────

export function resolveIntent(userMessage: string): ChatResponse {
  const lower = userMessage.toLowerCase().trim()

  // Check intents by keyword match
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS) as [IntentType, string[]][]) {
    if (intent === 'faq_match' || intent === 'fallback') continue
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        const resp = RESPONSES[intent as keyof typeof RESPONSES]
        if (resp) return resp
      }
    }
  }

  // Try FAQ matching
  const faqMatch = findBestFAQ(userMessage)
  if (faqMatch) {
    return {
      text: faqMatch.answer,
      quickReplies: ['Ask another question', 'Book a Tour', 'Talk to Someone'],
    }
  }

  return FALLBACK
}

// Quick reply → intent mapping (for when user clicks a suggested button)
export function resolveQuickReply(label: string): ChatResponse {
  const map: Record<string, IntentType> = {
    'Join a Team': 'team',
    'Browse Teams': 'team',
    'Learn about Teams': 'team',
    'Am I a team fit?': 'team',
    'Learn about Growth Network': 'network',
    'What is Growth Network?': 'network',
    'What is Growth Network Pro?': 'network',
    'Book a Tour': 'tour',
    'Book a Tour First': 'tour',
    'Apply Now': 'apply',
    'Commission Info': 'commission',
    'Commission structure': 'commission',
    'Revenue share explained': 'commission',
    'Training & Events': 'training',
    'Talk to Someone': 'human',
    'Not sure? Take the Quiz': 'apply',
  }
  const intent = map[label]
  if (intent) {
    const resp = RESPONSES[intent as keyof typeof RESPONSES]
    if (resp) return resp
  }
  return resolveIntent(label)
}
