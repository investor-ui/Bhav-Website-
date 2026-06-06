import type { Metadata } from 'next'
import Link from 'next/link'
import HeroReveal from '@/components/HeroReveal'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'The BhavCapital investment team — operators, scientists, and capital allocators who have built and backed frontier technology companies.',
}

const PARTNERS = [
  {
    name: 'Bhav Sharma',
    title: 'Founding Partner',
    focus: 'AI Infrastructure · Defense',
    bio: 'Bhav founded BhavCapital in 2019 after a decade at the intersection of defense technology and venture capital. Previously a program director at In-Q-Tel, where he oversaw $340M in commitments to national security technology companies. Prior to that, Bhav was VP of Business Development at Palantir during its government growth phase. He holds a BSE in Electrical Engineering from Princeton and an MBA from Wharton.',
    boards: ['Epoch AI', 'Aegis Systems', 'NeuralSec', 'Nexus Defense'],
  },
  {
    name: 'Sarah Chen',
    title: 'General Partner',
    focus: 'Defense · Bio-convergence',
    bio: 'Sarah joined BhavCapital as General Partner in 2020, bringing 12 years as a DARPA program manager where she oversaw the Biological Technologies Office. She has managed $680M in government research contracts and has shepherded 14 technologies from laboratory to production. Sarah holds a PhD in Molecular Biology from MIT and is a member of the National Academies of Sciences Engineering Committee.',
    boards: ['Synapse Bio', 'HelixAI', 'Arclight Bio', 'SilentArmor'],
  },
  {
    name: 'Marcus Webb',
    title: 'General Partner',
    focus: 'Climate · Energy Infrastructure',
    bio: 'Marcus leads BhavCapital\'s climate and energy portfolio. He was VP of Advanced Projects at SpaceX from 2014–2021, overseeing Starship manufacturing and Starlink ground systems. He subsequently co-founded and served as CEO of a grid-scale battery startup before joining BhavCapital. He holds an MS in Aerospace Engineering from Stanford and a BS in Physics from Caltech.',
    boards: ['Terracarbon', 'FusionCore', 'CarbonOps', 'SteelPath', 'QuantumGrid'],
  },
]

const PRINCIPALS = [
  {
    name: 'Leila Nouri',
    title: 'Principal',
    focus: 'AI Infrastructure · Market Analysis',
    bio: 'Leila leads sourcing and diligence for AI infrastructure investments. Former McKinsey Global Institute research lead covering semiconductor policy and AI governance.',
  },
  {
    name: 'James Okafor',
    title: 'CFO & COO',
    focus: 'Fund Operations · LP Relations',
    bio: 'James manages fund operations, LP reporting, and the BhavCapital compliance infrastructure. Former CFO at two venture-backed deep-tech companies and audit partner at KPMG.',
  },
  {
    name: 'Priya Anand',
    title: 'Principal',
    focus: 'Bio-convergence · Defense',
    bio: 'Priya covers bio-convergence and defense opportunities. PhD in Computational Biology from Stanford. Previously at the NIH NCATS translational research office.',
  },
  {
    name: 'Tomas Riedel',
    title: 'VP, Investor Relations',
    focus: 'LP Relations · Capital Formation',
    bio: 'Tomas manages the fund\'s LP relationships and leads capital formation. 14 years in institutional fund placement, previously at Rede Partners and UBS Alternative Investments.',
  },
]

const ADVISORS = [
  { name: 'Dr. Ashton Park', credential: 'Former CTO, DARPA · MIT Media Lab' },
  { name: 'Admiral (ret.) Louise Ward', credential: 'Former Commander, US Cyber Command' },
  { name: 'Dr. Yuki Tanaka', credential: 'Nobel Prize, Chemistry 2019 · Caltech' },
  { name: 'Hon. Robert Manders', credential: 'Former Deputy Secretary of Energy' },
  { name: 'Prof. Elena Sorokina', credential: 'Princeton School of Engineering · ARPA-E' },
  { name: 'Sergio Montoya', credential: 'Former CEO, GE Vernova · WEF Energy Council' },
]

export default function TeamPage() {
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
              'radial-gradient(ellipse 60% 70% at 75% 40%, rgba(59,123,255,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-site mx-auto relative" style={{ padding: '0 2.5rem' }}>
          <p className="eyebrow mb-6">Investment Team</p>
          <h1
            className="display"
            style={{ maxWidth: '16ch', lineHeight: 0.92, marginBottom: '2.5rem' }}
          >
            <HeroReveal text="Operators, scientists, and capital allocators." />
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
            The BhavCapital team has collectively built, operated, and backed
            frontier technology companies across defense, energy, AI, and life
            sciences. We invest in what we understand from the inside.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Partners ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-10">Partners</p>
          </ScrollReveal>
          <div className="flex flex-col gap-0" style={{ border: '1px solid var(--border-subtle)' }}>
            {PARTNERS.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 60}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[280px_1fr]"
                  style={{
                    borderBottom:
                      i < PARTNERS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  {/* Left — identity */}
                  <div
                    style={{
                      padding: '2.5rem 2rem',
                      borderRight: '1px solid var(--border-subtle)',
                      background: 'var(--bg-surface)',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                      }}
                      aria-hidden="true"
                    >
                      <span
                        className="mono"
                        style={{
                          fontSize: '1.25rem',
                          color: 'var(--accent-primary)',
                          fontWeight: 500,
                        }}
                      >
                        {p.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {p.name}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {p.title}
                    </p>
                    <p className="eyebrow" style={{ color: 'var(--text-tertiary)' }}>
                      {p.focus}
                    </p>
                  </div>

                  {/* Right — bio + boards */}
                  <div style={{ padding: '2.5rem 2rem' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.75,
                        marginBottom: '2rem',
                      }}
                    >
                      {p.bio}
                    </p>
                    <div>
                      <p
                        className="eyebrow mb-3"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        Board Seats
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.boards.map((b) => (
                          <span
                            key={b}
                            style={{
                              fontFamily: 'var(--font-syne), system-ui, sans-serif',
                              fontSize: '0.75rem',
                              color: 'var(--text-secondary)',
                              border: '1px solid var(--border-subtle)',
                              padding: '0.25rem 0.625rem',
                            }}
                          >
                            {b}
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

      <div className="divider-gold" />

      {/* ── Principals & Operations ───────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-10">Investment & Operations</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRINCIPALS.map((p, i) => (
              <ScrollReveal key={p.name} delay={(i % 2) * 80}>
                <div
                  className="card"
                  style={{ padding: '1.75rem', borderLeft: '2px solid var(--border-gold)' }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                    aria-hidden="true"
                  >
                    <span
                      className="mono"
                      style={{ fontSize: '0.875rem', color: 'var(--gold-muted)' }}
                    >
                      {p.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.125rem',
                    }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="eyebrow mb-3"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {p.focus}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {p.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Advisors ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-10">Scientific & Strategic Advisors</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'var(--border-subtle)' }}>
            {ADVISORS.map((a, i) => (
              <ScrollReveal key={a.name} delay={(i % 3) * 50}>
                <div
                  style={{
                    background: 'var(--bg-deep)',
                    padding: '1.75rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {a.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {a.credential}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-accent" />

      {/* ── Join ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-void)', padding: '6rem 0' }}>
        <div
          className="max-w-site mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-3">Work With Us</p>
            <h2 className="heading" style={{ maxWidth: '24rem' }}>
              We are always looking for exceptional people.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '36rem',
                marginTop: '1rem',
              }}
            >
              We recruit investors with deep domain expertise in at least one
              of our four focus sectors. Background in science, engineering,
              or operations required. Send your background to{' '}
              <a
                href="mailto:talent@bhavcapital.com"
                style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}
              >
                talent@bhavcapital.com
              </a>
              .
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link href="/contact" className="btn-primary">
              Contact Us ↗
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
