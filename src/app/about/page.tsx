import type { Metadata } from 'next'
import Link from 'next/link'
import HeroReveal from '@/components/HeroReveal'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'BhavCapital was founded on a single conviction: the most consequential technologies of the next era will emerge from deep science, not consumer software.',
}

const VALUES = [
  {
    n: '01',
    title: 'Conviction over consensus',
    body: 'Consensus pricing produces consensus returns. We build positions in technologies the market has not yet priced correctly — accepting binary risk for asymmetric upside.',
  },
  {
    n: '02',
    title: 'Infrastructure over application',
    body: 'Applications are competed away. Infrastructure compounds. We back the picks-and-shovels of each technological wave, before the market knows which application will win.',
  },
  {
    n: '03',
    title: 'Decades over quarters',
    body: 'Deep-tech ventures require patient capital. Our fund structure is designed for 10–15 year maturities. We don\'t mark-to-market our conviction.',
  },
  {
    n: '04',
    title: 'Precision over volume',
    body: 'We make 6–8 investments per year. Each position is the result of 18 months of diligence minimum. We have no mandate to deploy — only to generate returns.',
  },
]

const MILESTONES = [
  { year: '2019', event: 'Fund I closes at $125M. First investments in AI compute and defense autonomy.' },
  { year: '2021', event: 'Polaris Vision acquired by L3Harris at 4.2× return. First realization.' },
  { year: '2022', event: 'Fund II closes at $280M. Thesis expands to include climate and bio-convergence.' },
  { year: '2023', event: 'DataArsenal acquired by Palantir at 3.8×. BioSync IPO at 5.1×.' },
  { year: '2025', event: 'Frontier Fund III opens. $287M raised toward $500M target.' },
  { year: '2026', event: 'Fund III final close targeted Q4. 10 initial portfolio companies.' },
]

export default function AboutPage() {
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
              'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(59,123,255,0.09) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-site mx-auto relative" style={{ padding: '0 2.5rem' }}>
          <p className="eyebrow mb-6">About BhavCapital</p>
          <h1
            className="display"
            style={{ maxWidth: '18ch', lineHeight: 0.92, marginBottom: '2.5rem' }}
          >
            <HeroReveal text="We invest at the boundary of scientific possibility." />
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-syne), system-ui, sans-serif',
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '42rem',
              lineHeight: 1.75,
            }}
          >
            BhavCapital was founded on a single conviction: the most consequential
            technologies of the next era will emerge from deep science, not consumer
            software. Founded in 2019, we manage $1.2B across three funds targeting
            institutional LPs who think in generations.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div
          className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-4">Mission</p>
            <h2
              style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              To identify and fund the enabling technologies that will define
              the next 25 years of human civilization.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}
            >
              That mission requires a different kind of capital — patient, opinionated,
              and willing to sit in uncomfortable uncertainty for years. It requires
              partners who have operated at the frontier of technology and understand
              the distance between a published paper and a scalable business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="eyebrow mb-4">Approach</p>
            <div className="flex flex-col gap-5">
              {[
                { label: 'Initial check size', value: '$10M – $40M' },
                { label: 'Portfolio concentration', value: '20–25 companies / fund' },
                { label: 'Reserve ratio', value: '2:1' },
                { label: 'Target hold period', value: '7 – 12 years' },
                { label: 'Investment stages', value: 'Series A & B' },
                { label: 'Board representation', value: '100% of investments' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between"
                  style={{
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="mono text-sm"
                    style={{ color: 'var(--gold-bright)' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-3">Operating Principles</p>
            <h2 className="heading mb-12" style={{ maxWidth: '22rem' }}>
              How we think and act.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.n} delay={i * 80}>
                <div
                  className="card"
                  style={{
                    padding: '2rem',
                    borderLeft: '2px solid var(--accent-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="mono"
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      bottom: '0.5rem',
                      fontSize: '4.5rem',
                      fontWeight: 300,
                      color: 'var(--border-subtle)',
                      lineHeight: 1,
                      userSelect: 'none',
                    }}
                  >
                    {v.n}
                  </span>
                  <p className="eyebrow mb-3" style={{ color: 'var(--accent-primary)' }}>
                    {v.n}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                    }}
                  >
                    {v.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-3">History</p>
            <h2 className="heading mb-12" style={{ maxWidth: '20rem' }}>
              Seven years at the frontier.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col">
            {MILESTONES.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 60}>
                <div
                  className="flex gap-8 lg:gap-16"
                  style={{
                    paddingBottom: '2.5rem',
                    borderLeft: '1px solid var(--border-gold)',
                    paddingLeft: '2rem',
                    position: 'relative',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-4px',
                      top: '4px',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--gold-bright)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="mono flex-shrink-0"
                    style={{ fontSize: '0.875rem', color: 'var(--gold-muted)', minWidth: '3rem' }}
                  >
                    {m.year}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {m.event}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-accent" />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-void)', padding: '6rem 0' }}>
        <div
          className="max-w-site mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-3">Meet the Team</p>
            <h2 className="heading" style={{ maxWidth: '22rem' }}>
              The people behind the capital.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link href="/team" className="btn-primary">
              View Team ↗
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
