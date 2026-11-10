import { neon } from '@neondatabase/serverless'
import {
  ARTICLES as STATIC_ARTICLES,
  CATEGORIES,
  type Article,
  type ArticleSection,
} from '@/lib/data/articles'

// Reads for the public /education pages.
//
// These pages used to import the hardcoded ARTICLES array directly. They now
// read the `articles` table so the office manager can edit them from /articles, but every
// read falls back to the static array. That fallback is deliberate and
// load-bearing: /education is indexed and linked from the sitemap, so a
// missing DATABASE_URL, an unapplied migration, or an empty table must not be
// able to serve a blank section. Worst case the site shows what it showed
// before the CMS existed.

export type { Article, ArticleSection }

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.value, c.label]),
)

interface ArticleRow {
  slug: string
  title: string
  category: string
  description: string
  read_time: string | null
  published_date: string | null
  hero_image: string | null
  sections: unknown
}

/**
 * categoryLabel is derived, never stored — a stored copy would drift from the
 * filter list on /education the first time a label is reworded.
 */
function rowToArticle(r: ArticleRow): Article {
  return {
    slug: r.slug,
    title: r.title,
    category: r.category as Article['category'],
    categoryLabel: CATEGORY_LABEL[r.category] ?? r.category,
    description: r.description ?? '',
    readTime: r.read_time ?? '',
    publishedDate: r.published_date ?? '',
    heroImage: r.hero_image ?? '',
    sections: Array.isArray(r.sections) ? (r.sections as ArticleSection[]) : [],
  }
}

/**
 * Articles for the PUBLIC education hub.
 *
 * `visibility = 'public'` is not optional here. Handbook pages live in the same
 * table and hold the fee schedule, LLC information and affiliated business
 * disclosures; omitting this predicate publishes them to an indexed page and
 * the sitemap. articles-visibility.test.ts pins it.
 */
export async function getPublishedArticles(): Promise<Article[]> {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) return STATIC_ARTICLES

  try {
    const sql = neon(databaseUrl)
    const rows = (await sql`
      SELECT slug, title, category, description, read_time, published_date, hero_image, sections
      FROM articles
      WHERE status = 'published' AND visibility = 'public'
      ORDER BY sort_order ASC, id ASC
    `) as unknown as ArticleRow[]

    // An empty result means the migration has not been backfilled yet, not that
    // the branch genuinely has zero articles. Fall back rather than serve nothing.
    if (rows.length === 0) return STATIC_ARTICLES
    return rows.map(rowToArticle)
  } catch (err) {
    console.error('[ARTICLES] falling back to static list:', err)
    return STATIC_ARTICLES
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getPublishedArticles()
  return articles.find((a) => a.slug === slug) ?? null
}

export interface HandbookPage extends Article {
  handbookSection: string | null
}

/**
 * Pages for the members-only onboarding handbook.
 *
 * ⛔ This deliberately does NOT fall back to the static article list the way the
 * public reader does. A fallback here would silently render the public
 * education articles inside the members area on any DB hiccup — wrong content,
 * presented as if it were the handbook. An empty handbook must read as empty.
 */
export async function getHandbookPages(): Promise<HandbookPage[]> {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) return []

  try {
    const sql = neon(databaseUrl)
    const rows = (await sql`
      SELECT slug, title, category, description, read_time, published_date,
             hero_image, sections, handbook_section
      FROM articles
      WHERE status = 'published' AND visibility = 'members'
      ORDER BY sort_order ASC, id ASC
    `) as unknown as (ArticleRow & { handbook_section: string | null })[]

    return rows.map((r) => ({
      ...rowToArticle(r),
      handbookSection: r.handbook_section ?? null,
    }))
  } catch (err) {
    console.error('[HANDBOOK] read failed:', err)
    return []
  }
}

export async function getHandbookPageBySlug(slug: string): Promise<HandbookPage | null> {
  const pages = await getHandbookPages()
  return pages.find((p) => p.slug === slug) ?? null
}
