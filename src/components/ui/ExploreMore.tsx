'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Reveal, RevealStagger } from './Reveal'
import { Container } from '../layout/Container'

const ALL_LINKS = [
  { href: '/teams', label: 'Browse Teams', desc: '6 specialized teams to join' },
  { href: '/network', label: 'Growth Network Program', desc: 'Grow independently with investor education' },
  { href: '/quiz', label: 'Take the Fit Quiz', desc: 'Find your recommended path in 2 minutes' },
  { href: '/compare', label: 'Compare Acme', desc: 'Acme vs traditional brokerages' },
  { href: '/calculator', label: 'Income Calculator', desc: 'Model your potential earnings' },
  { href: '/training-events', label: 'Training & Events', desc: 'Monthly events and certifications' },
  { href: '/education', label: 'Education Hub', desc: 'Investor articles and market insights' },
  { href: '/success-stories', label: 'Success Stories', desc: 'Real agent outcomes' },
  { href: '/areas', label: 'Local Markets', desc: 'Anytown area market insights' },
  { href: '/community', label: 'Community', desc: 'Branch culture and leadership' },
]

export function ExploreMore({ maxItems = 4 }: { maxItems?: number }) {
  const pathname = usePathname()

  const links = ALL_LINKS.filter((l) => !pathname.startsWith(l.href)).slice(0, maxItems)

  return (
    <section className="border-t border-[#E5E7EB] bg-[#F9FAFB] py-14">
      <Container>
        <Reveal variant="clip">
          <p
            className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-[#9CA3AF]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Explore More
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <RevealStagger variant="up" stagger={60}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md"
              >
                <h3
                  className="text-sm font-bold text-[#000000] group-hover:text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {link.label}
                </h3>
                <p className="mt-1 text-xs text-[#6B7280]">{link.desc}</p>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  )
}
