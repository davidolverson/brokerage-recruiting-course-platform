import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { getHandbookPages } from '@/lib/db/articles'
import { compareSections, handbookGridClass } from '@/lib/handbook-sections'
import { Container } from '@/components/layout/Container'
import { NoHandbookAccess } from '@/components/handbook/NoHandbookAccess'
import { redirect } from 'next/navigation'
import { getHandbookAccess, handbookLoginUrl } from '@/lib/handbook-access'

// Members-only.
//
// The middleware's session check is a first pass only and is NOT the gate:
// /course/signup is a public self-service registration, so any visitor can mint
// a session. Entitlement is decided here, server-side, before a single page is
// read. This content includes the fee schedule and affiliated business
// disclosures.
export const dynamic = 'force-dynamic'

export const metadata = createMetadata({
  title: 'Agent Handbook',
  description: 'Everything a new Example Investor Team agent needs, in one place.',
  path: '/handbook',
  noIndex: true,
})

// Shelf order lives in lib/handbook-sections so the admin field that suggests
// section names and the page that orders them cannot drift apart.

export default async function HandbookPage() {
  // Three different answers, not two. The old code lumped "signed out" in with
  // "not entitled" and showed both the same explainer; the article page lumped
  // both into notFound(). A course-only visitor IS signed in and must NOT be
  // bounced to a login form they have already completed, which is why the
  // redirect fires only when there is genuinely no session.
  const access = await getHandbookAccess()
  if (access.state === 'signed-out') redirect(handbookLoginUrl('/handbook'))
  if (access.state === 'not-entitled') return <NoHandbookAccess />

  const pages = await getHandbookPages()

  const grouped = new Map<string, typeof pages>()
  for (const p of pages) {
    const key = p.handbookSection?.trim() || 'Everything else'
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key)!.push(p)
  }

  const sections = [...grouped.entries()].sort((a, b) => compareSections(a[0], b[0]))

  return (
    <div className="bg-white">
      <section className="bg-black py-16 md:py-20">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
            Example Investor Team · Members only
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Agent Handbook
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#9CA3AF]">
            Everything you were sent in your first week, kept in one place so you never
            have to hunt through email for it again.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          {pages.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8 text-center">
              <h2 className="text-lg font-bold text-black">Nothing here yet</h2>
              <p className="mt-2 text-[#4B5563]">
                The handbook is being written. Once pages are published they will appear
                here, grouped by topic.
              </p>
              <p className="mt-4 text-sm text-[#6B7280]">
                If you were expecting something specific, ask the office manager.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {sections.map(([section, items]) => (
                <div key={section}>
                  <h2 className="mb-1 text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                    {section}
                  </h2>
                  <div className={handbookGridClass(items.length)}>
                    {items.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/handbook/${p.slug}`}
                        className="group flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-5 transition hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <h3 className="text-base font-bold leading-snug text-black">
                          {p.title}
                        </h3>
                        {p.description && (
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#4B5563]">
                            {p.description}
                          </p>
                        )}
                        <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#6B7280] group-hover:text-black">
                          {p.readTime || 'Read'} &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}

