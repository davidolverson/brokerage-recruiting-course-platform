export interface SegmentFilter {
  sources?: string[]
  teamSlug?: string
  tags?: string[]
  createdAfter?: string  // 'YYYY-MM-DD'
  createdBefore?: string // 'YYYY-MM-DD'
}

export interface SegmentQuery {
  whereSql: string
  params: unknown[]
}

// unsubscribed = false is always the first condition and is never
// user-configurable — suppression is enforced here, not at the caller.
export function buildSegmentQuery(filter: SegmentFilter): SegmentQuery {
  const conditions: string[] = ['unsubscribed = false']
  const params: unknown[] = []

  if (filter.teamSlug) {
    params.push(filter.teamSlug)
    conditions.push(`team_slug = $${params.length}`)
  }
  if (filter.sources && filter.sources.length > 0) {
    params.push(filter.sources)
    conditions.push(`sources ?| $${params.length}::text[]`)
  }
  if (filter.tags && filter.tags.length > 0) {
    params.push(filter.tags)
    conditions.push(`tags ?| $${params.length}::text[]`)
  }
  if (filter.createdAfter) {
    params.push(filter.createdAfter)
    conditions.push(`created_at >= $${params.length}::date`)
  }
  if (filter.createdBefore) {
    params.push(filter.createdBefore)
    conditions.push(`created_at <= $${params.length}::date`)
  }

  return { whereSql: conditions.join(' AND '), params }
}
