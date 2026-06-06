'use client'

import { useState } from 'react'
import HeroReveal from '@/components/HeroReveal'
import ScrollReveal from '@/components/ScrollReveal'

const INQUIRY_TYPES = [
  'LP / Investment inquiry',
  'Portfolio company introduction',
  'Co-investment opportunity',
  'Media & press',
  'Career inquiry',
  'General',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--bg-void)',
          padding: '7rem 0 5rem',
          position: 'relative',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(59,123,255,0.09) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-site mx-auto relative" style={{ padding: '0 2.5rem' }}>
          <p className="eyebrow mb-6">Contact</p>
          <h1
            className="display"
            style={{ maxWidth: '14ch', lineHeight: 0.92, marginBottom: '2.5rem' }}
          >
            <HeroReveal text="Let's talk." />
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-syne), system-ui, sans-serif',
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '38rem',
              lineHeight: 1.75,
            }}
          >
            Whether you are an institutional LP evaluating Fund III, a founder
            seeking a lead investor, or a co-investor looking to collaborate —
            the right conversation starts here.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Contact Grid ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div
          className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-16"
          style={{ padding: '0 2.5rem' }}
        >
          {/* Left — offices + IR */}
          <div className="flex flex-col gap-10">
            <ScrollReveal>
              <p className="eyebrow mb-6">Offices</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    city: 'San Francisco',
                    address: '535 Mission Street\n15th Floor\nSan Francisco, CA 94105',
                    note: 'Headquarters · Investment team',
                  },
                  {
                    city: 'New York',
                    address: '425 Lexington Avenue\n26th Floor\nNew York, NY 10017',
                    note: 'LP Relations · East Coast',
                  },
                ].map((office) => (
                  <div
                    key={office.city}
                    style={{
                      padding: '1.75rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderLeft: '2px solid var(--border-gold)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {office.city}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-line',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {office.address}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.7rem',
                        color: 'var(--text-tertiary)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {office.note}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <p className="eyebrow mb-5">Direct Contacts</p>
              <div className="flex flex-col gap-4">
                {[
                  { role: 'Investor Relations', email: 'ir@bhavcapital.com', note: 'Fund III LP inquiries, subscriptions' },
                  { role: 'Portfolio Introductions', email: 'founders@bhavcapital.com', note: 'Founders seeking Series A–B lead' },
                  { role: 'Press & Media', email: 'press@bhavcapital.com', note: 'Interview requests, background' },
                  { role: 'General', email: 'hello@bhavcapital.com', note: 'All other inquiries' },
                ].map((c) => (
                  <div
                    key={c.role}
                    className="flex items-start justify-between gap-4"
                    style={{
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-syne), system-ui, sans-serif',
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.125rem',
                        }}
                      >
                        {c.role}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-syne), system-ui, sans-serif',
                          fontSize: '0.7rem',
                          color: 'var(--text-tertiary)',
                        }}
                      >
                        {c.note}
                      </p>
                    </div>
                    <a
                      href={`mailto:${c.email}`}
                      className="mono text-sm"
                      style={{
                        color: 'var(--accent-primary)',
                        textDecoration: 'none',
                        flexShrink: 0,
                        transition: 'color 200ms ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-hover)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
                    >
                      {c.email}
                    </a>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Contact form */}
          <ScrollReveal delay={100}>
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '2.5rem',
              }}
            >
              <p className="eyebrow mb-2">Send a Message</p>
              <h2
                style={{
                  fontFamily: 'var(--font-syne), system-ui, sans-serif',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '2rem',
                }}
              >
                Get in touch directly.
              </h2>

              {submitted ? (
                <div className="flex flex-col gap-4 py-8">
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--border-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 9L7.5 13L14.5 5.5" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    Message received.
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    We respond to all inquiries within two business days.
                    For urgent LP matters, please contact ir@bhavcapital.com
                    directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
                  <div className="field-wrap">
                    <input type="text" id="c-name" name="name" placeholder=" " required autoComplete="name" />
                    <label htmlFor="c-name">Full Name *</label>
                  </div>
                  <div className="field-wrap">
                    <input type="email" id="c-email" name="email" placeholder=" " required autoComplete="email" />
                    <label htmlFor="c-email">Email Address *</label>
                  </div>
                  <div className="field-wrap">
                    <input type="text" id="c-org" name="organization" placeholder=" " autoComplete="organization" />
                    <label htmlFor="c-org">Organization</label>
                  </div>
                  <div className="field-wrap">
                    <select id="c-type" name="inquiry_type">
                      <option value="" disabled></option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <label htmlFor="c-type">Inquiry Type</label>
                  </div>
                  <div className="field-wrap">
                    <textarea id="c-message" name="message" placeholder=" " rows={4} />
                    <label htmlFor="c-message">Message *</label>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    style={{ marginTop: '0.5rem', letterSpacing: '0.04em' }}
                  >
                    Send Message ↗
                  </button>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.7rem',
                      color: 'var(--text-tertiary)',
                      lineHeight: 1.6,
                    }}
                  >
                    BhavCapital Management LP does not share contact information
                    with third parties. All communications are confidential.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
