import type { Metadata } from 'next'
import Link from 'next/link'
import HeroReveal from '@/components/HeroReveal'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Frontier Fund III',
  description:
    'A $500M deep-tech venture fund targeting 20–25 investments in AI infrastructure, defense technology, climate solutions, and bio-convergence.',
}

const TERMS = [
  { label: 'Fund Target', value: '$500M' },
  { label: 'Amount Raised', value: '$287M' },
  { label: 'Final Close', value: 'Q4 2026' },
  { label: 'Vintage Year', value: '2025' },
  { label: 'Min. Commitment', value: '$10M' },
  { label: 'Target Net IRR', value: '28%+' },
  { label: 'Target Net MOIC', value: '3.5×' },
  { label: 'Management Fee', value: '2.0% / 1.5%' },
  { label: 'Carried Interest', value: '20%' },
  { label: 'Preferred Return', value: '8%' },
  { label: 'Investment Period', value: '5 years' },
  { label: 'Fund Life', value: '12 years (+2)' },
  { label: 'Portfolio Size', value: '20–25 cos.' },
  { label: 'Initial Check', value: '$10M – $40M' },
  { label: 'Reserve Ratio', value: '2:1' },
  { label: 'Board Seats', value: '100%' },
]

const FOCUS_AREAS = [
  {
    n: '01',
    title: 'AI Infrastructure',
    allocation: '35%',
    body: 'Training compute, inference optimization, synthetic data pipelines, and the tooling that enables frontier AI at scale. We back the picks-and-shovels before the application winners are known.',
    sub: ['Training infrastructure', 'Inference hardware', 'Data pipelines', 'Model evaluation'],
  },
  {
    n: '02',
    title: 'Defense & Dual-Use',
    allocation: '25%',
    body: 'Autonomous systems, electronic warfare, space-based sensing, and the sovereign technology stack that operates independent of adversarial supply chains. Non-ITAR where possible.',
    sub: ['Autonomous systems', 'Electronic warfare', 'Space sensing', 'Cyber'],
  },
  {
    n: '03',
    title: 'Climate & Energy Transition',
    allocation: '25%',
    body: 'Next-generation nuclear, direct air capture, industrial decarbonization, and grid-scale energy infrastructure. We focus on hard-tech solutions, not software overlays on legacy energy.',
    sub: ['Advanced nuclear', 'Direct air capture', 'Industrial decarbonization', 'Grid AI'],
  },
  {
    n: '04',
    title: 'Bio-convergence',
    allocation: '15%',
    body: 'The union of computational biology, AI-driven drug discovery, synthetic biology, and precision medicine infrastructure. We look for companies where the biology IS the computation.',
    sub: ['AI drug discovery', 'Synthetic biology', 'Precision diagnostics', 'Bio-manufacturing'],
  },
]

export default function FrontierFundIIIPage() {
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
              'radial-gradient(ellipse 80% 60% at 15% 50%, rgba(59,123,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 25%, rgba(242,194,78,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-100" aria-hidden="true" />

        <div className="max-w-site mx-auto relative" style={{ padding: '0 2.5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="eyebrow mb-6">Now Raising · Final Close Q4 2026</p>
              <h1
                className="display"
                style={{ maxWidth: '14ch', lineHeight: 0.92, marginBottom: '2rem' }}
              >
                <HeroReveal text="Frontier Fund III." />
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-syne), system-ui, sans-serif',
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '38rem',
                  lineHeight: 1.75,
                  marginBottom: '2.5rem',
                }}
              >
                A $500M fund targeting 20–25 investments in the enabling
                infrastructure of the next industrial era. AI systems, defense
                technology, climate solutions, and bio-convergence — the
                four sectors where deep science becomes sovereign capital.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">Request Allocation ↗</button>
                <Link href="/contact" className="btn-ghost">
                  Schedule a Call
                </Link>
              </div>
            </div>

            {/* Fundraise progress panel */}
            <aside
              aria-label="Fundraising progress"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-gold)',
                padding: '1.75rem',
              }}
            >
              <p className="eyebrow mb-4">Fundraising Progress</p>
              <div className="flex flex-col gap-1 mb-4">
                <div className="flex justify-between items-baseline">
                  <span
                    className="mono"
                    style={{ fontSize: '1.75rem', color: 'var(--gold-bright)' }}
                  >
                    $287M
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    of $500M
                  </span>
                </div>
                <div
                  style={{
                    height: '4px',
                    background: 'var(--border-default)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginTop: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '57.4%',
                      background: 'var(--accent-primary)',
                      borderRadius: '2px',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.7rem',
                    color: 'var(--text-tertiary)',
                    marginTop: '0.375rem',
                  }}
                >
                  57% toward target · 43% remaining
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {[
                  { label: 'LP Count', value: '22' },
                  { label: 'Avg. Commitment', value: '$13M' },
                  { label: 'Largest Commitment', value: '$50M' },
                  { label: 'Initial Close', value: 'Q1 2025' },
                  { label: 'Final Close', value: 'Q4 2026' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-baseline">
                    <span
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.75rem',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="mono text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Fund Terms Grid ───────────────────────────────────────────── */}
      <section
        id="terms"
        aria-label="Fund terms"
        style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}
      >
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-3">Fund Economics</p>
            <h2 className="heading mb-10" style={{ maxWidth: '22rem' }}>
              Terms structured for patient capital.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              {TERMS.map((term, i) => (
                <div
                  key={term.label}
                  style={{
                    padding: '1.75rem 1.5rem',
                    borderRight:
                      (i + 1) % 4 !== 0 ? '1px solid var(--border-subtle)' : 'none',
                    borderBottom:
                      i < TERMS.length - 4 ? '1px solid var(--border-subtle)' : 'none',
                    background:
                      i % 2 === 1 ? 'var(--gold-subtle)' : 'transparent',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.625rem',
                    }}
                  >
                    {term.label}
                  </p>
                  <p
                    className="mono"
                    style={{ fontSize: '1.375rem', color: 'var(--gold-bright)' }}
                  >
                    {term.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Focus Areas ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-3">Investment Focus</p>
            <h2 className="heading mb-10" style={{ maxWidth: '22rem' }}>
              Four sectors. One structural thesis.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-5">
            {FOCUS_AREAS.map((area, i) => (
              <ScrollReveal key={area.n} delay={i * 70}>
                <div
                  className="card"
                  style={{
                    padding: '2rem 2rem 2rem 1.75rem',
                    borderLeft: '2px solid var(--accent-primary)',
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <p className="eyebrow" style={{ color: 'var(--accent-primary)' }}>
                          {area.n}
                        </p>
                        <h3
                          style={{
                            fontFamily: 'var(--font-syne), system-ui, sans-serif',
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                          }}
                        >
                          {area.title}
                        </h3>
                        <span
                          className="mono text-sm"
                          style={{
                            color: 'var(--gold-bright)',
                            marginLeft: 'auto',
                          }}
                        >
                          {area.allocation}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-syne), system-ui, sans-serif',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.75,
                          maxWidth: '42rem',
                          marginBottom: '1.25rem',
                        }}
                      >
                        {area.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.sub.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: 'var(--font-syne), system-ui, sans-serif',
                              fontSize: '0.65rem',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: 'var(--text-tertiary)',
                              border: '1px solid var(--border-subtle)',
                              padding: '0.25rem 0.625rem',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-accent" />

      {/* ── LP Requirements & CTA ─────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-void)', padding: '6rem 0' }}>
        <div
          className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-4">LP Requirements</p>
            <h2 className="heading mb-6" style={{ maxWidth: '22rem' }}>
              Reserved for qualified investors.
            </h2>
            <div className="flex flex-col gap-4">
              {[
                'Institutional investors (endowments, pension funds, insurance cos.)',
                'Family offices with $500M+ AUM',
                'Sovereign wealth funds',
                'Fund-of-funds with deep-tech allocation mandate',
                'Qualified purchaser status required under US securities law',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                      flexShrink: 0,
                      marginTop: '0.6rem',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="eyebrow mb-4">How to Invest</p>
            <div className="flex flex-col gap-6">
              {[
                { step: '01', title: 'Submit inquiry', body: 'Complete the investment inquiry form. Our IR team reviews all submissions within two business days.' },
                { step: '02', title: 'Introductory call', body: 'A 45-minute call with a senior member of the investment team. We\'ll share the full pitchbook under NDA.' },
                { step: '03', title: 'Due diligence', body: 'Access to the data room, reference calls with existing LPs, and a visit to our San Francisco office.' },
                { step: '04', title: 'Subscription', body: 'Execute the subscription documents. First close is on admission; pro-rata catch-up on subsequent closes.' },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-4">
                  <span
                    className="mono flex-shrink-0"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-tertiary)',
                      paddingTop: '0.125rem',
                    }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {s.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
              <button className="btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                Submit Investment Inquiry ↗
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
