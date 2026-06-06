import type { Metadata } from 'next'
import Link from 'next/link'
import HeroReveal from '@/components/HeroReveal'
import MetricCounter from '@/components/MetricCounter'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'BhavCapital — Deep-Tech Venture',
  description:
    'A $1.2B deep-tech venture fund backing the enabling infrastructure of the next industrial era.',
}

const HERO_STATS = [
  { label: 'FUND III TARGET', value: '$500M' },
  { label: 'FUND III RAISED', value: '$287M' },
  { label: 'FUND II TVPI', value: '2.8×' },
  { label: 'FUND I NET IRR', value: '31.4%' },
  { label: 'PORTFOLIO COS', value: '34' },
  { label: 'AVG. HOLD', value: '7.2 YRS' },
]

const THESIS_CARDS = [
  {
    n: '01',
    title: 'AI Infrastructure',
    body:
      'Training compute, inference hardware, synthetic data pipelines, and the tooling that makes frontier AI possible at scale.',
  },
  {
    n: '02',
    title: 'Defense & Dual-Use',
    body:
      'Autonomous systems, electronic warfare, sensing, and the sovereign technology stack that operates independent of adversarial supply chains.',
  },
  {
    n: '03',
    title: 'Climate & Energy',
    body:
      'Next-generation nuclear, direct air capture, industrial decarbonization, and grid-scale energy systems built for a 2°C pathway.',
  },
  {
    n: '04',
    title: 'Bio-convergence',
    body:
      'The union of computational biology, AI-driven drug discovery, synthetic biology, and the infrastructure supporting precision medicine.',
  },
]

const FUNDS = [
  {
    name: 'Fund I',
    vintage: '2019',
    size: '$125M',
    status: 'Fully Realized',
    metrics: [
      { label: 'NET IRR', value: '31.4%' },
      { label: 'DPI', value: '1.9×' },
      { label: 'TVPI', value: '3.1×' },
    ],
    barWidth: '78%',
    muted: true,
  },
  {
    name: 'Fund II',
    vintage: '2022',
    size: '$280M',
    status: '65% Deployed',
    metrics: [
      { label: 'TVPI (UNRLZD)', value: '2.8×' },
      { label: 'DEPLOYED', value: '$182M' },
      { label: 'COMPANIES', value: '18' },
    ],
    barWidth: '65%',
    muted: false,
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col"
        style={{
          background: 'var(--bg-void)',
          minHeight: 'calc(100svh - 2.25rem)',
        }}
      >
        {/* Radial glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,123,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 75% 30%, rgba(242,194,78,0.07) 0%, transparent 60%)',
          }}
        />
        {/* Grid lines */}
        <div
          aria-hidden="true"
          className="hero-grid pointer-events-none absolute inset-0 opacity-100"
        />

        {/* Content */}
        <div
          className="relative flex-1 flex flex-col justify-center max-w-site mx-auto w-full"
          style={{ padding: '5rem 2.5rem 2rem' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-8 items-center">
            {/* Left — headline */}
            <div className="flex flex-col gap-8">
              <p className="eyebrow">Deep-Tech Venture · Est. 2019</p>

              <h1
                className="display"
                style={{ maxWidth: '14ch', lineHeight: 0.92 }}
              >
                <HeroReveal text="Capital at the frontier of what is possible." />
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-syne), system-ui, sans-serif',
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '38rem',
                  lineHeight: 1.75,
                }}
              >
                BhavCapital backs the enabling infrastructure of the next
                industrial era — AI systems, defense technology, climate
                solutions, and bio-convergence. Targeting institutional LPs
                building generational positions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="btn-primary">Commit Capital ↗</button>
                <Link href="/frontier-fund-iii" className="btn-ghost">
                  Fund Thesis
                </Link>
              </div>
            </div>

            {/* Right — floating metrics panel */}
            <aside
              aria-label="Fund snapshot"
              className="hidden lg:flex flex-col gap-0"
              style={{
                border: '1px solid var(--border-gold)',
                background: 'var(--bg-surface)',
              }}
            >
              <div
                style={{
                  padding: '0.875rem 1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <p
                  className="eyebrow"
                  style={{ color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}
                >
                  Fund Snapshot
                </p>
                <p
                  className="mono text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  As of Q2 2026
                </p>
              </div>
              {[
                { label: 'AUM', value: '$1.2B' },
                { label: 'Portfolio Companies', value: '34' },
                { label: 'Active Funds', value: '3' },
                { label: 'Fund I Net IRR', value: '31.4%' },
                { label: 'Fund II TVPI', value: '2.8×' },
                { label: 'Inception', value: '2019' },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    padding: '0.875rem 1.25rem',
                    borderBottom:
                      i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '1rem',
                  }}
                >
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
                    className="mono text-sm font-medium"
                    style={{ color: 'var(--gold-bright)' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </aside>
          </div>
        </div>

        {/* Metrics strip — sticky bottom */}
        <div
          aria-label="Live fund metrics"
          className="relative z-10"
          style={{
            position: 'sticky',
            bottom: 0,
            borderTop: '1px solid var(--border-gold)',
            background: 'var(--bg-void)',
            overflowX: 'auto',
          }}
        >
          <div className="flex min-w-max">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center"
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRight:
                    i < HERO_STATS.length - 1
                      ? '1px solid var(--border-gold)'
                      : 'none',
                  gap: '0.2rem',
                }}
              >
                <span
                  className="mono font-medium"
                  style={{ fontSize: '1.0625rem', color: 'var(--gold-bright)' }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Metrics ──────────────────────────────────────────────── */}
      <section
        aria-label="Fund performance metrics"
        style={{
          background: 'var(--bg-deep)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="max-w-site mx-auto"
          style={{ padding: '0 2.5rem' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: 1.2, prefix: '$', suffix: 'B', decimals: 1, label: 'Assets Under Management', primary: true },
              { value: 34, prefix: '', suffix: '', decimals: 0, label: 'Portfolio Companies', primary: false },
              { value: 31.4, prefix: '', suffix: '%', decimals: 1, label: 'Fund I Net IRR', primary: false },
              { value: 2.8, prefix: '', suffix: '×', decimals: 1, label: 'Fund II TVPI (Unrealized)', primary: false },
            ].map((metric, i) => (
              <div
                key={metric.label}
                style={{
                  padding: '3rem 2rem',
                  borderRight: i < 3 ? '1px solid var(--border-gold)' : 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <MetricCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                  style={metric.primary ? { fontSize: 'clamp(2.5rem, 5vw, 4rem)' } : {
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div className="divider-gold" />

      {/* ── Investment Thesis ─────────────────────────────────────────── */}
      <section
        aria-label="Investment thesis"
        style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}
      >
        <div
          className="max-w-site mx-auto"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal className="mb-3">
            <p className="eyebrow">Investment Thesis</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 mt-8">
            {/* Left — thesis statement */}
            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                <h2
                  style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.625rem)',
                    lineHeight: 1.2,
                    color: 'var(--text-primary)',
                  }}
                >
                  We don&apos;t invest in applications. We invest in the
                  infrastructure that makes applications possible.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                  }}
                >
                  The technologies that define the next 25 years are being
                  built today — not in consumer labs, but in research
                  facilities, defense contractors, and deep-science startups
                  most investors won&apos;t touch. That is precisely where
                  we operate.
                </p>
                <Link
                  href="/philosophy"
                  className="eyebrow"
                  style={{
                    color: 'var(--accent-primary)',
                    textDecoration: 'none',
                    marginTop: '0.5rem',
                  }}
                >
                  Our Full Philosophy →
                </Link>
              </div>
            </ScrollReveal>

            {/* Right — thesis cards */}
            <div className="flex flex-col gap-5">
              {THESIS_CARDS.map((card, i) => (
                <ScrollReveal key={card.n} delay={i * 80}>
                  <div
                    className="card"
                    style={{
                      borderLeft: '2px solid var(--accent-primary)',
                      padding: '1.75rem 1.75rem 1.75rem 1.5rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Background number */}
                    <span
                      aria-hidden="true"
                      className="mono"
                      style={{
                        position: 'absolute',
                        right: '1.25rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '5rem',
                        fontWeight: 300,
                        color: 'var(--border-subtle)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        lineHeight: 1,
                      }}
                    >
                      {card.n}
                    </span>
                    <p
                      className="eyebrow mb-3"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {card.n}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.75,
                        maxWidth: '32rem',
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div className="divider-gold" />

      {/* ── Track Record ─────────────────────────────────────────────── */}
      <section
        aria-label="Track record"
        style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}
      >
        <div
          className="max-w-site mx-auto"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-3">Track Record</p>
            <h2 className="heading" style={{ maxWidth: '24rem' }}>
              Consistent alpha across vintages.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_1fr] gap-5 mt-12">
            {/* Fund I */}
            <ScrollReveal delay={0}>
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2rem',
                  opacity: 0.8,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="eyebrow mb-1" style={{ color: 'var(--text-tertiary)' }}>
                      {FUNDS[0].vintage}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {FUNDS[0].name}
                    </h3>
                  </div>
                  <span
                    className="eyebrow"
                    style={{
                      color: 'var(--text-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.25rem 0.5rem',
                    }}
                  >
                    {FUNDS[0].status}
                  </span>
                </div>
                <p
                  className="mono"
                  style={{
                    fontSize: '2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {FUNDS[0].size}
                </p>
                <div className="flex flex-col gap-3">
                  {FUNDS[0].metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <div className="flex justify-between">
                        <span
                          style={{
                            fontFamily: 'var(--font-syne), system-ui, sans-serif',
                            fontSize: '0.7rem',
                            color: 'var(--text-tertiary)',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {m.label}
                        </span>
                        <span
                          className="mono text-sm"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {m.value}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: '0.5rem',
                      height: '3px',
                      background: 'var(--border-default)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: FUNDS[0].barWidth,
                        background: 'var(--text-secondary)',
                        borderRadius: '2px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fund II */}
            <ScrollReveal delay={100}>
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-accent)',
                  padding: '2rem',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="eyebrow mb-1">
                      {FUNDS[1].vintage}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {FUNDS[1].name}
                    </h3>
                  </div>
                  <span
                    className="eyebrow"
                    style={{
                      color: 'var(--accent-primary)',
                      border: '1px solid var(--border-accent)',
                      padding: '0.25rem 0.5rem',
                    }}
                  >
                    {FUNDS[1].status}
                  </span>
                </div>
                <p
                  className="mono"
                  style={{
                    fontSize: '2rem',
                    color: 'var(--gold-bright)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {FUNDS[1].size}
                </p>
                <div className="flex flex-col gap-3">
                  {FUNDS[1].metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <div className="flex justify-between">
                        <span
                          style={{
                            fontFamily: 'var(--font-syne), system-ui, sans-serif',
                            fontSize: '0.7rem',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {m.label}
                        </span>
                        <span
                          className="mono text-sm"
                          style={{ color: 'var(--gold-bright)' }}
                        >
                          {m.value}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: '0.5rem',
                      height: '3px',
                      background: 'var(--border-default)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: FUNDS[1].barWidth,
                        background: 'var(--accent-primary)',
                        borderRadius: '2px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fund III CTA */}
            <ScrollReveal delay={200}>
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-gold)',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p className="eyebrow mb-1">2025</p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Frontier Fund III
                  </h3>
                  <p
                    className="mono"
                    style={{ fontSize: '2rem', color: 'var(--gold-bright)' }}
                  >
                    $500M
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      marginTop: '1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Open for commitment. Final close Q4 2026.
                  </p>
                </div>
                <Link
                  href="/frontier-fund-iii"
                  className="btn-primary"
                  style={{ marginTop: '1.5rem', justifyContent: 'center' }}
                >
                  View Fund ↗
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div className="divider-accent" />

      {/* ── Closing CTA ───────────────────────────────────────────────── */}
      <section
        aria-label="Invest in Fund III"
        style={{
          background: 'var(--bg-void)',
          padding: '7rem 0',
        }}
      >
        <div
          className="max-w-site mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-4">Frontier Fund III · Open</p>
            <h2
              className="heading"
              style={{ maxWidth: '26rem', lineHeight: 1.1 }}
            >
              Reserve your allocation before final close.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '34rem',
                marginTop: '1.25rem',
              }}
            >
              Fund III is open to qualified institutional investors, family
              offices, and sovereign wealth funds. Minimum commitment $10M.
              Final close targeted Q4 2026.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/frontier-fund-iii" className="btn-primary">
                Fund III Overview ↗
              </Link>
              <Link href="/contact" className="btn-ghost">
                Schedule a Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
