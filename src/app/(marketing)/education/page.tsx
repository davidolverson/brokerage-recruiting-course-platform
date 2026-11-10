import { createMetadata } from '@/lib/metadata'
import { getPublishedArticles } from '@/lib/db/articles'
import { EducationClient } from './EducationClient'

// Articles are editable from /articles, so this page reads them per request
// rather than being baked at build time. It must stay dynamic: prerendering
// would freeze the hub at whatever was in the table when the image was built,
// and `next build` runs without DATABASE_URL.
export const dynamic = 'force-dynamic'

export const metadata = createMetadata({
  title: 'Education Hub',
  description:
    'Investor education, market insights, team growth playbooks, and partner guides. Built by practitioners, for Anytown agents at Acme Realty.',
  path: '/education',
})

export default async function EducationPage() {
  const articles = await getPublishedArticles()
  return <EducationClient articles={articles} />
}
