/**
 * Notes the editor left for themselves, which agents must never read.
 *
 * The seeded handbook pages carry lines like "Still to add, the office manager: the fee
 * schedule..." wherever a brokerage-specific fact was deliberately not
 * invented. They were written as notes to the client, but they render as
 * ORDINARY BODY PARAGRAPHS in the same grey as real prose. Walking the hub as
 * a real agent on 2026-08-13 showed a brand-new hire reading, on day one:
 *
 *   "Still to add, the office manager: the fee schedule. Please paste the real figures..."
 *
 * That was invisible until then only because zero agent accounts existed — and
 * they existed only because the invite path was broken. One bug was hiding the
 * other.
 *
 * The note still has to reach the person who can act on it, so this hides it
 * from readers and surfaces it to editors rather than deleting anything.
 */

/**
 * Matches "Still to add, <name>:" at the start of a paragraph.
 *
 * Deliberately not pinned to one first name: the same convention will be used
 * for the next client, and a rule that only works for the office manager would silently
 * leak theirs.
 */
const EDITOR_NOTE = /^\s*still to add\b[^:]{0,40}:/i

export function isEditorNote(paragraph: string): boolean {
  return EDITOR_NOTE.test(paragraph ?? '')
}

/** The note without its marker, for rendering in an editor-only callout. */
export function editorNoteBody(paragraph: string): string {
  return (paragraph ?? '').replace(EDITOR_NOTE, '').trim()
}

export interface HandbookSectionLike {
  heading?: string | null
  paragraphs?: string[] | null
  image?: { src?: string | null } | null
  documents?: unknown[] | null
}

/**
 * What a given viewer should actually see.
 *
 * `canSeeNotes` is the admin surface (owner / team_leader / staff), not merely
 * "signed in": an agent is signed in and is exactly who must not see these.
 *
 * A section whose every paragraph is a note would otherwise render for an
 * agent as a heading with nothing underneath, which reads as broken. Such a
 * section is dropped entirely unless it still carries an image or a document.
 */
export function visibleSections<T extends HandbookSectionLike>(
  sections: T[],
  canSeeNotes: boolean,
): Array<T & { paragraphs: string[]; notes: string[] }> {
  return (sections ?? [])
    .map((s) => {
      const all = s.paragraphs ?? []
      const notes = all.filter(isEditorNote)
      return {
        ...s,
        paragraphs: canSeeNotes ? all.filter((p) => !isEditorNote(p)) : all.filter((p) => !isEditorNote(p)),
        notes: canSeeNotes ? notes : [],
      }
    })
    .filter((s) => s.paragraphs.length > 0 || s.notes.length > 0 || !!s.image?.src || (s.documents?.length ?? 0) > 0)
}
