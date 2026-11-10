'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
}

const btnCls = 'rounded px-2 py-1 text-xs font-semibold text-[#9CA3AF] hover:bg-[#1A1A1A] hover:text-white'
const btnActiveCls = 'rounded bg-[#1A1A1A] px-2 py-1 text-xs font-semibold text-white'

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Link.configure({ openOnClick: false }), Image],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'min-h-[240px] rounded-b-lg border border-t-0 border-[#222] bg-[#111] px-4 py-3 text-sm text-white outline-none [&_a]:text-blue-400 [&_a]:underline',
      },
    },
  })

  if (!editor) return null

  return (
    <div>
      <div className="flex flex-wrap gap-1 rounded-t-lg border border-[#222] bg-[#0A0A0A] p-2">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? btnActiveCls : btnCls}>Bold</button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? btnActiveCls : btnCls}>Italic</button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Link URL')
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
          className={editor.isActive('link') ? btnActiveCls : btnCls}
        >
          Link
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Image URL')
            if (url) editor.chain().focus().setImage({ src: url }).run()
          }}
          className={btnCls}
        >
          Image
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}
