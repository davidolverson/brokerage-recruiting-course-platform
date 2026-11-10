export interface BranchMetric {
  label: string
  value: string
  contextNote: string
}

export const branchMetrics: BranchMetric[] = [
  { label: 'Growth Network Investors', value: '50,000+', contextNote: 'Global Growth Network network members' },
  { label: 'Events Annually', value: '350+', contextNote: 'Hyperlocal networking events across the country' },
  { label: 'Combined Revenue', value: '$100M+', contextNote: 'Growth Network member combined annual revenue' },
  { label: 'Certification Hours', value: '35+', contextNote: 'Growth Network Agent-Investor Certification program' },
  { label: 'Acme Training', value: '80+', contextNote: 'Hours of live training per week across Acme network' },
  { label: 'Commission Cap', value: '$15K', contextNote: 'After cap, agents earn 100% commission' },
  { label: 'Freedom Framework', value: '7 Levels', contextNote: 'Growth Network Wealth Roadmap wealth-building roadmap' },
  { label: 'Growth Network Pro', value: 'FREE', contextNote: 'Growth Network Pro membership included for all Growth Network agents' },
]
