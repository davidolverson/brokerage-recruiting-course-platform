import { describe, it, expect } from 'vitest'
import { linkify, linkLabel } from './linkify'

const hrefs = (s: string) => linkify(s).filter((r) => r.href).map((r) => r.href)
const rendered = (s: string) => linkify(s).map((r) => r.text).join('')

describe('linkify — a URL an editor pasted into a description', () => {
  it('handles the real one, query string and all', () => {
    // the office manager's builder link, verbatim from her 2026-08-14 email.
    const url = 'https://www.example.com/new-homes/virginia/anytown-area/southside/demo-community?utm_source=gmb&utm_medium=social-organic&utm_campaign=demo_campaign-1893'
    expect(hrefs(`See you there!\n\n${url}`)).toEqual([url])
  })

  it('never changes the text a reader sees', () => {
    // The regression to fear: linkifying that quietly rewrites or drops copy.
    for (const s of [
      'Plain copy with no link at all.',
      'Visit https://example.com today.',
      'Two: https://a.example.com and www.b.example.com.',
      '',
    ]) expect(rendered(s), s).toBe(s)
  })

  it('leaves the sentence punctuation out of the address', () => {
    expect(hrefs('Details at https://example.com/tour.')).toEqual(['https://example.com/tour'])
    expect(hrefs('Details (see https://example.com/tour) below')).toEqual(['https://example.com/tour'])
    expect(hrefs('Try https://en.wikipedia.org/wiki/Foo_(bar) now')).toEqual(['https://en.wikipedia.org/wiki/Foo_(bar)'])
  })

  it('resolves a bare www. to https, because that is how people paste', () => {
    expect(hrefs('www.example.com/demo-community')).toEqual(['https://www.example.com/demo-community'])
  })

  it('refuses a scheme that is not a web link, and keeps it as text', () => {
    // The editor is the client's own team_leader account, so "only admins can
    // reach this box" is not a defence. These ARE scanned as candidates — the
    // allow-list is what turns them down, so removing it fails this test.
    for (const s of ['javascript:alert(1)', 'data:text/html,x', 'vbscript:msgbox(1)', 'file:///etc/passwd']) {
      expect(hrefs(s), s).toEqual([])
      expect(rendered(s), s).toBe(s)
    }
  })

  it('refuses a protocol-relative host that looks like a site path', () => {
    expect(hrefs('see //evil.example.com/x')).toEqual([])
  })

  it('does not mistake ordinary prose or a clock time for a link', () => {
    for (const s of ['We meet at 11:00 sharp.', 'Note: bring a laptop.', 'Ratio 3:1 or better.']) {
      expect(hrefs(s), s).toEqual([])
      expect(rendered(s), s).toBe(s)
    }
  })

  it('finds every link, not just the first', () => {
    expect(hrefs('a https://one.example.com b https://two.example.com c'))
      .toEqual(['https://one.example.com', 'https://two.example.com'])
  })
})

describe('linkLabel — what the reader actually sees', () => {
  const listing = 'https://www.example.com/new-homes/virginia/anytown-area/southside/demo-community?utm_source=gmb&utm_medium=social-organic&utm_campaign=demo_campaign-1893'

  it('shortens the real one to something readable', () => {
    expect(linkLabel(listing)).toBe('example.com/new-homes/…/demo-community')
  })

  it('still says where the link goes', () => {
    // The label IS the link's accessible name. Truncating to a bare host, or to
    // "click here", would make two different links sound identical.
    const label = linkLabel(listing)
    expect(label).toContain('example.com')
    expect(label).toContain('demo-community')
  })

  it('drops tracking parameters, which tell a reader nothing', () => {
    expect(linkLabel(listing)).not.toMatch(/utm_/)
  })

  it('leaves a short address exactly as it is', () => {
    expect(linkLabel('https://example.com/tour')).toBe('example.com/tour')
    expect(linkLabel('https://example.com')).toBe('example.com')
    expect(linkLabel('https://www.example.com/')).toBe('example.com')
  })

  it('never exceeds the budget, however long the segments are', () => {
    const long = 'https://example.com/' + Array.from({ length: 12 }, (_, i) => `segment-number-${i}`).join('/')
    expect(linkLabel(long).length).toBeLessThanOrEqual(48)
    expect(linkLabel('https://example.com/' + 'x'.repeat(300)).length).toBeLessThanOrEqual(48)
  })

  it('falls back to the raw string rather than throwing', () => {
    expect(linkLabel('not a url at all')).toBe('not a url at all')
  })

  it('the href is untouched — only the display shortens', () => {
    const [run] = linkify(listing).filter((r) => r.href)
    expect(run.href).toBe(listing)
    expect(run.label).toBe('example.com/new-homes/…/demo-community')
  })
})
