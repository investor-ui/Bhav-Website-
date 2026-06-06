'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const COMMITMENT_OPTIONS = [
  'Under $5M',
  '$5M – $25M',
  '$25M – $50M',
  '$50M – $100M',
  '$100M+',
  'To be determined',
]

const SOURCE_OPTIONS = [
  'Existing LP referral',
  'Placement agent',
  'Conference / event',
  'Press / media',
  'Direct outreach',
  'Other',
]

export default function InquiryModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ESC to close + focus first field on open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    setTimeout(() => firstFieldRef.current?.focus(), 100)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Reset form state on close
  useEffect(() => {
    if (!isOpen) setTimeout(() => setSubmitted(false), 400)
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Investment inquiry"
      className="fixed inset-0 z-[100] flex justify-end"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      style={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(5, 9, 26, 0.85)',
      }}
    >
      {/* Drawer panel */}
      <div
        className="drawer-panel relative flex flex-col w-full max-w-lg h-full overflow-y-auto"
        style={{
          background: 'var(--bg-void)',
          borderLeft: '1px solid var(--border-gold)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between px-8 pt-10 pb-6"
          style={{ borderBottom: '1px solid var(--border-subtle)' }}
        >
          <div>
            <p className="eyebrow mb-2">BhavCapital Fund III</p>
            <h2
              className="font-sans text-2xl font-800"
              style={{ color: 'var(--text-primary)', fontWeight: 800 }}
            >
              Investment Inquiry
            </h2>
            <p
              className="text-sm mt-2 leading-relaxed"
              style={{ color: 'var(--text-secondary)', maxWidth: '28rem' }}
            >
              Reserved for qualified institutional investors, family offices,
              and sovereign wealth funds. Minimum commitment $10M.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close inquiry form"
            className="flex-shrink-0 ml-4 mt-1 w-8 h-8 flex items-center justify-center transition-colors duration-200"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-tertiary)')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 px-8 py-8">
          {submitted ? (
            <div className="flex flex-col items-start justify-center h-full gap-6 py-16">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10L8 14L16 6" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3
                  className="font-sans text-xl font-700 mb-2"
                  style={{ color: 'var(--text-primary)', fontWeight: 700 }}
                >
                  Inquiry received.
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  Our investor relations team reviews all inquiries within
                  two business days. You will receive a calendar invitation
                  for an introductory call if your profile aligns with
                  Fund III&apos;s LP criteria.
                </p>
              </div>
              <button
                onClick={onClose}
                className="btn-ghost mt-4"
                style={{ height: 40, padding: '0 1.25rem', fontSize: '0.8125rem' }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
              {/* Name */}
              <div className="field-wrap">
                <input
                  ref={firstFieldRef}
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  autoComplete="name"
                />
                <label htmlFor="name">Full Name *</label>
              </div>

              {/* Organization */}
              <div className="field-wrap">
                <input
                  type="text"
                  id="org"
                  name="organization"
                  placeholder=" "
                  required
                  autoComplete="organization"
                />
                <label htmlFor="org">Organization *</label>
              </div>

              {/* Role */}
              <div className="field-wrap">
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder=" "
                  autoComplete="organization-title"
                />
                <label htmlFor="role">Role / Title</label>
              </div>

              {/* AUM */}
              <div className="field-wrap">
                <input
                  type="text"
                  id="aum"
                  name="aum"
                  placeholder=" "
                />
                <label htmlFor="aum">AUM / Capital Under Management</label>
              </div>

              {/* Commitment */}
              <div className="field-wrap">
                <select id="commitment" name="commitment" required>
                  <option value="" disabled selected></option>
                  {COMMITMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <label htmlFor="commitment">Commitment Interest *</label>
              </div>

              {/* Source */}
              <div className="field-wrap">
                <select id="source" name="source">
                  <option value="" disabled selected></option>
                  {SOURCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <label htmlFor="source">How did you hear about us?</label>
              </div>

              {/* Email */}
              <div className="field-wrap">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <label htmlFor="email">Email Address *</label>
              </div>

              {/* Message */}
              <div className="field-wrap">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  rows={3}
                />
                <label htmlFor="message">Additional Context</label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full justify-center mt-2"
                style={{ fontSize: '0.875rem', letterSpacing: '0.04em' }}
              >
                Submit Inquiry ↗
              </button>

              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--text-tertiary)' }}
              >
                By submitting this form, you confirm you are an accredited
                investor or qualified institutional buyer as defined under
                applicable securities laws. BhavCapital will not share your
                information with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
