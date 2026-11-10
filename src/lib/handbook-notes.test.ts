import { describe, it, expect } from 'vitest'
import { isEditorNote, editorNoteBody, visibleSections } from './handbook-notes'

const REAL = 'Your first two weeks are about getting set up and meeting people.'
const NOTE = 'Still to add, the office manager: the fee schedule. Please paste the real figures.'

describe('isEditorNote', () => {
  it('recognises the marker the seeded pages actually use', () => {
    expect(isEditorNote(NOTE)).toBe(true)
    expect(isEditorNote('Still to add, Alex: the partner list.')).toBe(true)
    expect(isEditorNote('  still to add, alex: lowercase and indented')).toBe(true)
  })

  it('does not swallow ordinary prose that merely mentions adding something', () => {
    expect(isEditorNote(REAL)).toBe(false)
    expect(isEditorNote('We will still add you to the group chat in week one.')).toBe(false)
    expect(isEditorNote('')).toBe(false)
  })

  it('strips the marker for display', () => {
    expect(editorNoteBody(NOTE)).toBe('the fee schedule. Please paste the real figures.')
  })
})

describe('visibleSections', () => {
  const sections = [
    { heading: 'Welcome', paragraphs: [REAL, NOTE] },
    { heading: 'Fees', paragraphs: [NOTE] },
    { heading: 'Photos', paragraphs: [NOTE], image: { src: '/api/uploads/2' } },
    { heading: 'Real', paragraphs: [REAL] },
  ]

  it('NEVER shows an editor note to an agent', () => {
    const out = visibleSections(sections, false)
    const everything = JSON.stringify(out)
    expect(everything).not.toMatch(/Still to add/i)
    expect(out.every((s) => s.notes.length === 0)).toBe(true)
  })

  it('drops a section that would be a bare heading for an agent', () => {
    // "Fees" is nothing but a note. A heading with no body reads as broken.
    const headings = visibleSections(sections, false).map((s) => s.heading)
    expect(headings).not.toContain('Fees')
    expect(headings).toEqual(['Welcome', 'Photos', 'Real'])
  })

  it('keeps a note-only section that still carries an image', () => {
    expect(visibleSections(sections, false).map((s) => s.heading)).toContain('Photos')
  })

  it('shows the editor their notes, separated from the prose', () => {
    const out = visibleSections(sections, true)
    const welcome = out.find((s) => s.heading === 'Welcome')!
    expect(welcome.paragraphs).toEqual([REAL])
    expect(welcome.notes).toEqual([NOTE])
    // The editor must still see the note-only section, or they cannot act on it.
    expect(out.map((s) => s.heading)).toContain('Fees')
  })

  it('leaves real prose alone for both viewers', () => {
    for (const canSee of [true, false]) {
      const real = visibleSections(sections, canSee).find((s) => s.heading === 'Real')!
      expect(real.paragraphs).toEqual([REAL])
    }
  })

  it('survives sections with no paragraphs at all', () => {
    expect(visibleSections([{ heading: 'Empty' }], false)).toEqual([])
    expect(visibleSections([{ heading: 'Files', documents: [{}] }], false)).toHaveLength(1)
  })
})
