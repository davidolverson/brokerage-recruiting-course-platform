import { describe, it, expect } from 'vitest'
import { buildSegmentQuery } from './segment-filter'

describe('buildSegmentQuery', () => {
  it('always excludes unsubscribed contacts, even with no filter', () => {
    expect(buildSegmentQuery({})).toEqual({ whereSql: 'unsubscribed = false', params: [] })
  })

  it('adds a teamSlug condition', () => {
    expect(buildSegmentQuery({ teamSlug: 'example-investor-team' })).toEqual({
      whereSql: 'unsubscribed = false AND team_slug = $1',
      params: ['example-investor-team'],
    })
  })

  it('adds a sources condition using jsonb ?| for any-match', () => {
    expect(buildSegmentQuery({ sources: ['lead:fit_quiz', 'training_subscriber'] })).toEqual({
      whereSql: 'unsubscribed = false AND sources ?| $1::text[]',
      params: [['lead:fit_quiz', 'training_subscriber']],
    })
  })

  it('adds a tags condition', () => {
    expect(buildSegmentQuery({ tags: ['csv:spring-list'] })).toEqual({
      whereSql: 'unsubscribed = false AND tags ?| $1::text[]',
      params: [['csv:spring-list']],
    })
  })

  it('adds createdAfter/createdBefore date conditions', () => {
    expect(buildSegmentQuery({ createdAfter: '2026-01-01', createdBefore: '2026-06-30' })).toEqual({
      whereSql: 'unsubscribed = false AND created_at >= $1::date AND created_at <= $2::date',
      params: ['2026-01-01', '2026-06-30'],
    })
  })

  it('combines every filter field in a fixed, deterministic order', () => {
    const result = buildSegmentQuery({
      teamSlug: 'example-investor-team',
      sources: ['lead:fit_quiz'],
      tags: ['vip'],
      createdAfter: '2026-01-01',
      createdBefore: '2026-06-30',
    })
    expect(result.whereSql).toBe(
      'unsubscribed = false AND team_slug = $1 AND sources ?| $2::text[] AND tags ?| $3::text[] AND created_at >= $4::date AND created_at <= $5::date'
    )
    expect(result.params).toEqual(['example-investor-team', ['lead:fit_quiz'], ['vip'], '2026-01-01', '2026-06-30'])
  })

  it('ignores empty arrays', () => {
    expect(buildSegmentQuery({ sources: [], tags: [] })).toEqual({ whereSql: 'unsubscribed = false', params: [] })
  })
})
