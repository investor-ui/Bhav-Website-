import type { Metadata } from 'next'
import HeroReveal from '@/components/HeroReveal'
import MetricCounter from '@/components/MetricCounter'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    '34 companies across AI infrastructure, defense technology, climate solutions, and bio-convergence.',
}

const COMPANIES = [
  // Fund III (active)
  { name: 'Epoch AI', sector: 'AI Infrastructure', stage: 'Series B', fund: 'III', status: 'active', desc: 'Next-generation training infrastructure for frontier language models.' },
  { name: 'Aegis Systems', sector: 'Defense', stage: 'Series A', fund: 'III', status: 'active', desc: 'Autonomous drone systems for contested airspace operations.' },
  { name: 'Terracarbon', sector: 'Climate', stage: 'Series B', fund: 'III', status: 'active', desc: 'Modular direct air capture plants at gigaton scale.' },
  { name: 'Synapse Bio', sector: 'Bio-convergence', stage: 'Series B', fund: 'III', status: 'active', desc: 'AI-first drug discovery for oncology and rare disease.' },
  { name: 'Photon Compute', sector: 'AI Infrastructure', stage: 'Series A', fund: 'III', status: 'active', desc: 'Optical interconnects reducing data center energy consumption 10×.' },
  { name: 'FusionCore', sector: 'Climate', stage: 'Series B', fund: 'III', status: 'active', desc: 'Compact fusion reactor targeting grid-scale deployment by 2034.' },
  // Fund II (active)
  { name: 'NeuralSec', sector: 'Defense', stage: 'Series B', fund: 'II', status: 'active', desc: 'AI-powered cyber defense for critical infrastructure.' },
  { name: 'SilentArmor', sector: 'Defense', stage: 'Series A', fund: 'II', status: 'active', desc: 'Acoustic signature reduction systems for maritime platforms.' },
  { name: 'CarbonOps', sector: 'Climate', stage: 'Series B', fund: 'II', status: 'active', desc: 'Industrial decarbonization through electrification of process heat.' },
  { name: 'HelixAI', sector: 'Bio-convergence', stage: 'Series C', fund: 'II', status: 'active', desc: 'Protein structure prediction platform for therapeutic design.' },
  { name: 'Nexus Defense', sector: 'Defense', stage: 'Series A', fund: 'II', status: 'active', desc: 'Electronic warfare systems for spectrum dominance.' },
  { name: 'QuantumGrid', sector: 'Climate', stage: 'Series B', fund: 'II', status: 'active', desc: 'Quantum-enhanced optimization for grid-scale energy dispatch.' },
  { name: 'VectorBase', sector: 'AI Infrastructure', stage: 'Series B', fund: 'II', status: 'active', desc: 'Vector database infrastructure for enterprise AI applications.' },
  { name: 'Arclight Bio', sector: 'Bio-convergence', stage: 'Series A', fund: 'II', status: 'active', desc: 'Optogenetics-based therapeutics for neurological disorders.' },
  { name: 'SteelPath', sector: 'Climate', stage: 'Series B', fund: 'II', status: 'active', desc: 'Green hydrogen production for hard-to-abate industries.' },
  // Exits
  { name: 'Polaris Vision', sector: 'Defense', stage: 'Exit', fund: 'I', status: 'exited', exit: '4.2×', acquirer: 'L3Harris', desc: 'Advanced optics for targeting and reconnaissance systems.' },
  { name: 'DataArsenal', sector: 'AI Infrastructure', stage: 'Exit', fund: 'I', status: 'exited', exit: '3.8×', acquirer: 'Palantir', desc: 'Operational data infrastructure for intelligence agencies.' },
  { name: 'BioSync', sector: 'Bio-convergence', stage: 'Exit (IPO)', fund: 'I', status: 'exited', exit: '5.1×', acquirer: 'Public', desc: 'Computational genomics platform for precision oncology.' },
  { name: 'SecureEdge', sector: 'Defense', stage: 'Exit', fund: 'I', status: 'exited', exit: '2.7×', acquirer: 'Leidos', desc: 'Edge computing for tactical military environments.' },
]

const SECTORS = [
  { label: 'AI Infrastructure', pct: 28, count: 8 },
  { label: 'Defense & Dual-Use', pct: 32, count: 10 },
  { label: 'Climate & Energy', pct: 26, count: 9 },
  { label: 'Bio-convergence', pct: 14, count: 7 },
]

export default function PortfolioPage() {
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
              'radial-gradient(ellipse 70% 60% at 20% 60%, rgba(59,123,255,0.10) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-site mx-auto relative" style={{ padding: '0 2.5rem' }}>
          <p className="eyebrow mb-6">Portfolio</p>
          <h1
            className="display"
            style={{ maxWidth: '16ch', lineHeight: 0.92, marginBottom: '2.5rem' }}
          >
            <HeroReveal text="34 companies building at the edge of possible." />
          </h1>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-8"
            style={{ background: 'var(--border-gold)' }}>
            {[
              { value: 34, prefix: '', suffix: '', dec: 0, label: 'Total Companies' },
              { value: 4, prefix: '', suffix: '', dec: 0, label: 'Sector Focus Areas' },
              { value: 3, prefix: '', suffix: '', dec: 0, label: 'Active Funds' },
              { value: 312, prefix: '$', suffix: 'M', dec: 0, label: 'Distributed to LPs' },
            ].map((s) => (
              <div
                key={s.label}
                style={{ background: 'var(--bg-void)', padding: '1.75rem 1.5rem' }}
              >
                <MetricCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.dec}
                  className="text-2xl"
                />
                <p
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    marginTop: '0.375rem',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Sector Breakdown ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '4rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-6">Sector Allocation</p>
            <div className="flex flex-col gap-4" style={{ maxWidth: '48rem' }}>
              {SECTORS.map((s, i) => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-baseline">
                    <span
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {s.label}
                    </span>
                    <div className="flex gap-4 items-baseline">
                      <span
                        className="mono text-sm"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        {s.count} cos.
                      </span>
                      <span
                        className="mono text-sm"
                        style={{ color: 'var(--gold-bright)' }}
                      >
                        {s.pct}%
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      height: '3px',
                      background: 'var(--border-default)',
                      borderRadius: '2px',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${s.pct}%`,
                        background:
                          i === 1 ? 'var(--accent-primary)' : 'var(--gold-muted)',
                        borderRadius: '2px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Active Portfolio ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '5rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-6">Active Portfolio</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANIES.filter((c) => c.status === 'active').map((co, i) => (
              <ScrollReveal key={co.name} delay={(i % 3) * 60}>
                <div
                  className="card"
                  style={{
                    padding: '1.5rem',
                    borderLeft: '2px solid var(--accent-primary)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {co.name}
                    </h3>
                    <span
                      className="mono text-sm flex-shrink-0"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      F{co.fund}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {co.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="eyebrow"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {co.sector}
                    </span>
                    <span
                      className="eyebrow"
                      style={{
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--border-accent)',
                        padding: '0.2rem 0.4rem',
                      }}
                    >
                      {co.stage}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Exits ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '5rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-6">Exits & Realizations</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPANIES.filter((c) => c.status === 'exited').map((co, i) => (
              <ScrollReveal key={co.name} delay={(i % 2) * 80}>
                <div
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.5rem',
                    opacity: 0.75,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {co.name}
                    </h3>
                    <span
                      className="mono"
                      style={{ fontSize: '1.25rem', color: 'var(--gold-bright)', flexShrink: 0 }}
                    >
                      {co.exit}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {co.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="eyebrow" style={{ color: 'var(--text-tertiary)' }}>
                      {co.sector}
                    </span>
                    <span style={{ color: 'var(--border-subtle)' }}>·</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.7rem',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {co.acquirer !== 'Public' ? `Acquired by ${co.acquirer}` : 'Public offering'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
