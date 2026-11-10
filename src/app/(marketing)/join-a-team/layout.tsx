import { createMetadata } from '@/lib/metadata'
import { getFAQSchema, getJobPostingSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Join a Team',
  description:
    'Stop figuring it out alone. Join one of 6 specialized teams at Acme Realty for leads, systems, mentorship, and accountability from day one.',
  path: '/join-a-team',
})

const teamFAQs = [
  { question: 'What are the benefits of joining a real estate team at Acme Realty?', answer: 'Teams provide built-in mentorship, proven lead generation systems, shared CRM and technology, faster ramp time for new agents, market specialization, and accountability structures. You get to close faster while learning from experienced producers.' },
  { question: 'How many teams are at Acme Realty?', answer: 'Acme Realty has 6 active teams covering investment, residential production, luxury/multi-state, mortgage lending, title/settlement, and multi-state investor sales. Each team has a different culture, specialty, and leadership style.' },
  { question: 'Do I keep my Acme revenue share if I join a team?', answer: 'Yes. Your Acme revenue share remains fully active when you join a team. The team split is separate from the Acme commission structure — you still benefit from revenue share, stock awards, and capping.' },
  { question: 'How do I know which team is right for me?', answer: 'Take the 2-minute Fit Quiz on our website to get a personalized recommendation based on your experience, goals, and working style. You can also book a tour to meet team leaders in person.' },
]

export default function JoinATeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(teamFAQs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJobPostingSchema()) }}
      />
      {children}
    </>
  )
}
