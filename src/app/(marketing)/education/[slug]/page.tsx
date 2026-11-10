import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { getPublishedArticles } from '@/lib/db/articles'
import { ArticleContent } from './ArticleContent'

// Dynamic for the same reason as the hub: articles are CMS-managed now, and a
// newly published one has to be reachable without a rebuild. generateStaticParams
// is deliberately gone — it would have run at build time, where there is no
// DATABASE_URL.
export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const articles = await getPublishedArticles()
  const article = articles.find((a) => a.slug === slug)
  // notFound() here rather than `return {}`. generateMetadata runs before the
  // page shell is streamed; there is a loading.tsx in the (marketing) group, so
  // once this route went force-dynamic a notFound() raised in the component ran
  // AFTER the 200 was already flushed, and every bogus /education/* URL became a
  // soft 404 that search engines will happily index.
  if (!article) notFound()
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/education/${article.slug}`,
    ogImage: `${BASE_URL}${article.heroImage}`,
  })
}

export default async function EducationArticlePage({ params }: Props) {
  const { slug } = await params
  const articles = await getPublishedArticles()
  const article = articles.find((a) => a.slug === slug)

  if (!article) notFound()

  // Prioritize same-category articles, then backfill from other categories
  const sameCategory = articles.filter(
    (a) => a.category === article.category && a.slug !== article.slug
  )
  const otherCategory = articles.filter(
    (a) => a.category !== article.category && a.slug !== article.slug
  )
  const relatedArticles = [...sameCategory, ...otherCategory].slice(0, 3)

  return <ArticleContent article={article} relatedArticles={relatedArticles} />
}
