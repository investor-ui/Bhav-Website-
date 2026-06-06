import type { Metadata } from 'next'
import Link from 'next/link'
import HeroReveal from '@/components/HeroReveal'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Funds',
  description:
    'Three funds. Seven years. A consistent record of backing deep-tech infrastructure before consensus forms.',
}

const FUND_I_EXITS = [
  { company: 'Polaris Vision', sector: 'Defense Optics', acquirer: 'L3Harris', multiple: '4.2×', year: '2021' },
  { company: 'DataArsenal', sector: 'AI Data Infra', acquirer: 'Palantir', multiple: '3.8×', year: '2023' },
  { company: 'BioSync', sector: 'Computational Bio', acquirer: 'Public (IPO)', multiple: '5.1×', year: '2023' },
  { company: 'QuantumGrid', sector: 'Grid AI', acquirer: 'Acquired (undisclosed)', multiple: '2.7×', year: '2024' },
]

const FUND_II_PORTFOLIO = [
  { company: 'Epoch AI', sector: 'AI Infrastructure', stage: 'Series B', check: '$35M' },
  { company: 'Aegis Systems', sector: 'Defense Autonomy', stage: 'Series A', check: '$22M' },
  { company: 'Terracarbon', sector: 'Direct Air Capture', stage: 'Series B', check: '$40M' },
  { company: 'Synapse Bio', sector: 'AI Drug Discovery', stage: 'Series B', check: '$30M' },
  { company: 'Photon Compute', sector: 'Optical Computing', stage: 'Series A', check: '$18M' },
  { company: 'NeuralSec', sector: 'AI Cybersecurity', stage: 'Series B', check: '$28M' },
]

export default function FundsPage() {
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
              'radial-gradient(ellipse 70% 60% at 80% 40%, rgba(242,194,78,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-site mx-auto relative" style={{ padding: '0 2.5rem' }}>
          <p className="eyebrow mb-6">Fund Overview</p>
          <h1
            className="display"
            style={{ maxWidth: '16ch', lineHeight: 0.92, marginBottom: '2.5rem' }}
          >
            <HeroReveal text="Three funds. One conviction. Consistent alpha." />
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8" style={{ maxWidth: '44rem' }}>
            {[
              { label: 'Total AUM', value: '$1.2B', sub: 'Across 3 funds' },
              { label: 'Total Realized', value: '$312M', sub: 'Distributions to LPs' },
              { label: 'Avg. Net IRR', value: '28.7%', sub: 'Across realized funds' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-gold)',
                }}
              >
                <p
                  className="mono"
                  style={{ fontSize: '1.75rem', color: 'var(--gold-bright)', marginBottom: '0.25rem' }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.7rem',
                    color: 'var(--text-tertiary)',
                    marginTop: '0.125rem',
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Fund I ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <div className="flex flex-wrap items-baseline gap-4 mb-2">
              <p className="eyebrow">2019 Vintage</p>
              <span
                className="eyebrow"
                style={{
                  color: 'var(--text-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.2rem 0.5rem',
                }}
              >
                Fully Realized
              </span>
            </div>
            <h2 className="heading mb-2">Fund I — $125M</h2>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                maxWidth: '42rem',
                lineHeight: 1.75,
                marginBottom: '3rem',
              }}
            >
              Fund I deployed $125M across 14 companies between 2019 and 2022,
              focusing on AI infrastructure, defense technology, and computational
              biology. The fund is fully realized with all positions distributed
              or liquidated.
            </p>
          </ScrollReveal>

          {/* Performance grid */}
          <ScrollReveal delay={80}>
            <div
              className="grid grid-cols-2 lg:grid-cols-4 mb-10"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              {[
                { label: 'FUND SIZE', value: '$125M', gold: false },
                { label: 'NET IRR', value: '31.4%', gold: true },
                { label: 'DPI', value: '1.9×', gold: true },
                { label: 'TVPI', value: '3.1×', gold: true },
              ].map((m, i, arr) => (
                <div
                  key={m.label}
                  style={{
                    padding: '2rem 1.75rem',
                    borderRight: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    background: i % 2 === 1 ? 'var(--gold-subtle)' : 'transparent',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.625rem',
                    }}
                  >
                    {m.label}
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      color: m.gold ? 'var(--gold-bright)' : 'var(--text-secondary)',
                    }}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Exit table */}
          <ScrollReveal delay={120}>
            <p className="eyebrow mb-4" style={{ color: 'var(--text-secondary)' }}>
              Notable Exits
            </p>
            <div style={{ border: '1px solid var(--border-subtle)' }}>
              <div
                className="grid grid-cols-4 gap-4"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  background: 'var(--bg-surface)',
                }}
              >
                {['Company', 'Sector', 'Exit', 'Multiple'].map((h) => (
                  <span
                    key={h}
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    {h.toUpperCase()}
                  </span>
                ))}
              </div>
              {FUND_I_EXITS.map((exit, i) => (
                <div
                  key={exit.company}
                  className="grid grid-cols-4 gap-4 items-center"
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderBottom:
                      i < FUND_I_EXITS.length - 1
                        ? '1px solid var(--border-subtle)'
                        : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {exit.company}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {exit.sector}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {exit.acquirer} · {exit.year}
                  </span>
                  <span
                    className="mono"
                    style={{ fontSize: '1rem', color: 'var(--gold-bright)' }}
                  >
                    {exit.multiple}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Fund II ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <div className="flex flex-wrap items-baseline gap-4 mb-2">
              <p className="eyebrow">2022 Vintage</p>
              <span
                className="eyebrow"
                style={{
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--border-accent)',
                  padding: '0.2rem 0.5rem',
                }}
              >
                65% Deployed
              </span>
            </div>
            <h2 className="heading mb-2">Fund II — $280M</h2>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                maxWidth: '42rem',
                lineHeight: 1.75,
                marginBottom: '3rem',
              }}
            >
              Fund II raised $280M and has deployed $182M across 18 portfolio companies.
              Expansion into climate technology and bio-convergence broadened the thesis
              while maintaining focus on infrastructure-layer opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div
              className="grid grid-cols-2 lg:grid-cols-4 mb-10"
              style={{ border: '1px solid var(--border-accent)' }}
            >
              {[
                { label: 'FUND SIZE', value: '$280M', gold: false },
                { label: 'TVPI (UNRLZD)', value: '2.8×', gold: true },
                { label: 'DEPLOYED', value: '$182M', gold: false },
                { label: 'COMPANIES', value: '18', gold: false },
              ].map((m, i, arr) => (
                <div
                  key={m.label}
                  style={{
                    padding: '2rem 1.75rem',
                    borderRight: i < arr.length - 1 ? '1px solid var(--border-accent)' : 'none',
                    background: i % 2 === 1 ? 'var(--gold-subtle)' : 'transparent',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.625rem',
                    }}
                  >
                    {m.label}
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      color: m.gold ? 'var(--gold-bright)' : 'var(--text-primary)',
                    }}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="eyebrow mb-4" style={{ color: 'var(--text-secondary)' }}>
              Select Portfolio
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {FUND_II_PORTFOLIO.map((co, i) => (
                <div
                  key={co.company}
                  className="card"
                  style={{ padding: '1.5rem', borderLeft: '2px solid var(--accent-primary)' }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {co.company}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '1rem',
                    }}
                  >
                    {co.sector}
                  </p>
                  <div className="flex justify-between">
                    <span
                      className="eyebrow"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {co.stage}
                    </span>
                    <span
                      className="mono text-sm"
                      style={{ color: 'var(--gold-bright)' }}
                    >
                      {co.check}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-accent" />

      {/* ── Fund III CTA ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-void)', padding: '6rem 0' }}>
        <div
          className="max-w-site mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-3">Now Raising</p>
            <h2 className="heading" style={{ maxWidth: '24rem' }}>
              Frontier Fund III is open.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '38rem',
                marginTop: '1rem',
              }}
            >
              $500M target. $287M raised. Final close Q4 2026. Open to
              qualified institutional investors with a $10M minimum commitment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link href="/frontier-fund-iii" className="btn-primary">
              Fund III Overview ↗
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
