'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { resolveIntent, resolveQuickReply, type ChatResponse } from '@/lib/chatbot'

interface Message {
  id: string
  role: 'bot' | 'user'
  text: string
  quickReplies?: string[]
  links?: { label: string; href: string }[]
}

const WELCOME: Message = {
  id: 'welcome',
  role: 'bot',
  text: "Hey! I'm the Acme Realty assistant. Ask me anything about joining, teams, Growth Network, or booking a tour.",
  quickReplies: ['Join a Team', 'Learn about Growth Network', 'Book a Tour', 'Commission Info', 'Talk to Someone'],
}

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [hasOpened, setHasOpened] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  function addBotResponse(response: ChatResponse) {
    const msg: Message = {
      id: `bot-${Date.now()}`,
      role: 'bot',
      text: response.text,
      quickReplies: response.quickReplies,
      links: response.links,
    }
    // Small delay to feel natural
    setTimeout(() => {
      setMessages(prev => [...prev, msg])
    }, 400)
  }

  function handleSend() {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    const response = resolveIntent(trimmed)
    addBotResponse(response)
  }

  function handleQuickReply(label: string) {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: label,
    }
    setMessages(prev => [...prev, userMsg])

    const response = resolveQuickReply(label)
    addBotResponse(response)
  }

  function handleToggle() {
    setOpen(!open)
    if (!hasOpened) setHasOpened(true)
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-[88px] right-4 z-[55] flex w-[340px] flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl sm:w-[380px] lg:bottom-20">
          {/* Header */}
          <div className="flex items-center justify-between bg-black px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-extrabold text-black">
                AR
              </div>
              <div>
                <p className="text-sm font-bold text-white">Acme Realty</p>
                <p className="text-[10px] text-white/60">Usually replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded p-1 text-white/50 transition-colors hover:text-white"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" style={{ maxHeight: '380px', minHeight: '280px' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.role === 'user' ? 'rounded-2xl rounded-br-md bg-black px-4 py-2.5 text-sm text-white' : ''}`}>
                  {msg.role === 'bot' && (
                    <div className="rounded-2xl rounded-bl-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2.5 text-sm leading-relaxed text-[#1F2937]">
                      {msg.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < msg.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  )}
                  {msg.role === 'user' && (
                    <span className="text-sm leading-relaxed">{msg.text}</span>
                  )}

                  {/* Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-1 rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#333]"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Quick replies */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          type="button"
                          onClick={() => handleQuickReply(qr)}
                          className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-medium text-[#4B5563] transition-colors hover:border-black hover:text-black"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend() }}
            className="flex items-center gap-2 border-t border-[#E5E7EB] px-3 py-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-white transition-colors hover:bg-[#333] disabled:opacity-30"
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={handleToggle}
        className="fixed bottom-[88px] right-4 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl lg:bottom-6"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}

        {/* Notification dot on first visit */}
        {!hasOpened && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
          </span>
        )}
      </button>
    </>
  )
}
