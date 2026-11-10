import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { getHandbookPages } from '@/lib/db/articles'
import { canReadHandbook } from '@/lib/permissions'
import { Container } from '@/components/layout/Container'
import { SectionDocuments } from '@/components/SectionDocuments'
import { isAdminSurfaceRole } from '@/lib/roles'
import { visibleSections, editorNoteBody } from '@/lib/handbook-notes'
import { redirect } from 'next/navigation'
import { getHandbookAccess, handbookLoginUrl } from '@/lib/handbook-access'
import { NoHandbookAccess } from '@/components/handbook/NoHandbookAccess'

// Members-only. The middleware's session check is a first pass, NOT the gate —
// entitlement is checked server-side below. Dynamic for the same reason the
// education pages are: content is CMS-managed and must not be baked at build
// time, where there is no DATABASE_URL.
export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  // Even the title is withheld from someone who may not read the page.
  if (!(await canReadHandbook())) return {}
  const { slug } = await params
  const page = (await getHandbookPages()).find((p) => p.slug === slug)
  // Same soft-404 reasoning as /education/[slug]: decide before the shell streams.
  if (!page) notFound()
  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/handbook/${page.slug}`,
    noIndex: true,
  })
}

export default async function HandbookArticlePage({ params }: Props) {
  // Checked here too, not only on the index: a deep link is the obvious way to
  // reach a page without passing through the list.
  const { slug: slugForAuth } = await params
  const access = await getHandbookAccess()
  // An expired session used to fall through to notFound(), telling a member
  // the page does not exist when in fact they were signed out.
  if (access.state === 'signed-out') redirect(handbookLoginUrl(`/handbook/${slugForAuth}`))
  if (access.state === 'not-entitled') return <NoHandbookAccess />
  const viewer = access.viewer
  // An agent is signed in and is exactly who must not read the editor notes,
  // so this is the admin surface, not merely "has a session".
  const canSeeEditorNotes = isAdminSurfaceRole(viewer.role)

  const { slug } = await params
  const pages = await getHandbookPages()
  const page = pages.find((p) => p.slug === slug)

  // A slug that exists only as a public education article must 404 here rather
  // than render, so the two areas never bleed into one another.
  if (!page) notFound()

  const siblings = pages.filter(
    (p) => p.handbookSection === page.handbookSection && p.slug !== page.slug,
  )

  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-[46rem] py-12 md:py-16">
          <Link
            href="/handbook"
            className="text-xs font-bold uppercase tracking-widest text-[#6B7280] hover:text-black"
          >
            &larr; Agent Handbook
          </Link>

          <header className="mt-6 border-b border-[#E5E7EB] pb-6">
            {page.handbookSection && (
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                {page.handbookSection}
              </p>
            )}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl">
              {page.title}
            </h1>
            {page.description && (
              <p className="mt-3 text-lg leading-relaxed text-[#4B5563]">{page.description}</p>
            )}
            {page.readTime && (
              <p className="mt-3 text-sm text-[#6B7280]">{page.readTime}</p>
            )}
          </header>

          <article className="mt-8 flex flex-col gap-8">
            {visibleSections(page.sections, canSeeEditorNotes).map((s, i) => (
              <section key={i}>
                <h2 className="mb-3 text-xl font-bold leading-snug text-black">{s.heading}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4 text-[16.5px] leading-relaxed text-[#374151]">
                    {p}
                  </p>
                ))}
                {/* Editors only. These are notes to whoever maintains the page,
                    and they used to render to agents in the same grey as the
                    real prose. */}
                {s.notes.map((n, j) => (
                  <div key={`note-${j}`} className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-amber-700">
                      Still to add · only you can see this
                    </p>
                    <p className="text-[15px] leading-relaxed text-amber-900">{editorNoteBody(n)}</p>
                  </div>
                ))}
                {s.image?.src && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    className="mt-2 w-full rounded-xl border border-[#E5E7EB]"
                  />
                )}
                <SectionDocuments documents={s.documents} />
              </section>
            ))}
          </article>

          {siblings.length > 0 && (
            <nav className="mt-14 border-t border-[#E5E7EB] pt-6">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                More in {page.handbookSection}
              </h2>
              <ul className="flex flex-col gap-2">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/handbook/${s.slug}`}
                      className="font-semibold text-black underline-offset-4 hover:underline"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </div>
  )
}
