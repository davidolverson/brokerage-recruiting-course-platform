import { describe, it, expect } from 'vitest'
import { renderMergeTags, htmlToText, appendUnsubscribeFooter } from './campaign-mergetags'

describe('renderMergeTags', () => {
  it('substitutes {{first_name}} with the contact first name', () => {
    expect(renderMergeTags('Hi {{first_name}}, welcome!', { firstName: 'Jane' })).toBe('Hi Jane, welcome!')
  })

  it('falls back to "there" when first name is missing', () => {
    expect(renderMergeTags('Hi {{first_name}},', { firstName: null })).toBe('Hi there,')
    expect(renderMergeTags('Hi {{first_name}},', {})).toBe('Hi there,')
  })

  it('is case-insensitive and handles extra whitespace inside braces', () => {
    expect(renderMergeTags('Hi {{ First_Name }},', { firstName: 'Jane' })).toBe('Hi Jane,')
  })

  it('replaces every occurrence', () => {
    expect(renderMergeTags('{{first_name}}! {{first_name}}!', { firstName: 'Jane' })).toBe('Jane! Jane!')
  })
})

describe('htmlToText', () => {
  it('strips tags and converts <br>/<p> to newlines', () => {
    expect(htmlToText('<p>Hi {{first_name}},</p><p>Come by Friday.<br>See you there.</p>'))
      .toBe('Hi {{first_name}},\n\nCome by Friday.\nSee you there.')
  })

  it('decodes common HTML entities', () => {
    expect(htmlToText('<p>Bacon &amp; eggs &lt;3</p>')).toBe('Bacon & eggs <3')
  })

  it('does not double-unescape nested entities', () => {
    expect(htmlToText('&amp;lt;script&amp;gt;')).toBe('&lt;script&gt;')
  })

  it('drops style/script blocks entirely', () => {
    expect(htmlToText('<style>.x{color:red}</style><p>Hello</p><script>alert(1)</script>')).toBe('Hello')
  })
})

describe('appendUnsubscribeFooter', () => {
  it('appends an unsubscribe link to both html and text', () => {
    const result = appendUnsubscribeFooter('<p>Hi</p>', 'Hi', 'https://example.com/unsubscribe?token=abc')
    expect(result.html).toContain('https://example.com/unsubscribe?token=abc')
    expect(result.html).toContain('<p>Hi</p>')
    expect(result.text).toContain('https://example.com/unsubscribe?token=abc')
    expect(result.text).toContain('Hi')
  })
})
