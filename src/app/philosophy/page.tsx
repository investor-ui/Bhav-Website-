import type { Metadata } from 'next'
import Link from 'next/link'
import HeroReveal from '@/components/HeroReveal'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Philosophy',
  description:
    'Our investment philosophy: infrastructure over applications, decades over quarters, conviction over consensus.',
}

const PRINCIPLES = [
  {
    title: 'The Infrastructure Premium',
    body: 'Application-layer companies compete on distribution, marketing, and marginal UX improvements. Infrastructure-layer companies compete on physics, chemistry, and fundamental science. The latter is harder to build and harder to displace. We pay a premium for that durability.',
    stat: '7.2×',
    statLabel: 'avg. MOIC on infra vs. app investments (internal data)',
  },
  {
    title: 'Technology Risk vs. Market Risk',
    body: 'Most venture investors take market risk — betting that a large market exists and that this team can capture it. We take technology risk — betting that a scientific breakthrough can become a business. Technology risk is often mispriced. Market risk rarely is.',
    stat: '18 mo.',
    statLabel: 'avg. diligence period before first investment',
  },
  {
    title: 'Sovereign-Scale Thinking',
    body: 'We ask one question before every investment: is this company building something that nation-states will need? If the answer is yes, the TAM is effectively infinite and the pricing power is structural. Defense, energy, compute, and biology all pass this test.',
    stat: '100%',
    statLabel: 'of portfolio companies operate in sectors with government contracts',
  },
  {
    title: 'Long Duration Capital',
    body: 'Deep-tech ventures take 10–12 years to mature. They require patient capital that won\'t demand a premature exit when a strategic acquirer appears in year 4. Our fund structure is designed for duration. We are the right LP for the right kind of GP.',
    stat: '12 yr',
    statLabel: 'base fund life before any extension',
  },
]

const SECTORS = [
  {
    title: 'AI Infrastructure',
    why: 'The training and inference stack for frontier AI is being re-architected from the physics layer up. Most of this infrastructure does not exist yet. The companies that build it will capture the margin that application companies compete away.',
    where: 'Series A–B, initial checks $15–35M. Seeking: novel compute architectures, inference optimization, synthetic data quality, evaluation infrastructure.',
  },
  {
    title: 'Defense & Dual-Use Technology',
    why: 'Western defense budgets are being re-deployed toward autonomous systems, directed energy, and electronic warfare. A generation of defense startups is building capability that the primes cannot. This is a $900B annual market with a structural buyer.',
    where: 'Series A–B. Seeking: autonomous platforms, electronic warfare, space situational awareness, cyber-physical systems. ITAR-compliant fund structure.',
  },
  {
    title: 'Climate & Energy Transition',
    why: 'The energy transition is not a software problem. It requires new materials, new chemistry, new physics. We focus on the hard-tech solutions — advanced nuclear, carbon capture, industrial heat — that cannot be built by a team of 10 engineers with a laptop.',
    where: 'Series B preferred. Initial checks $20–40M. Seeking: proven pilot, clear path to gigawatt-scale or gigaton-scale impact, defensible IP.',
  },
  {
    title: 'Bio-convergence',
    why: 'Biology is becoming programmable. The intersection of computational biology, AI, and synthetic biology is producing companies that can design drugs, materials, and organisms de novo. We are at the beginning of a 30-year platform shift.',
    where: 'Series A–B. Seeking: AI-first drug discovery, programmable biology platforms, bio-manufacturing infrastructure. Avoid: me-too biotech with standard-of-care endpoints.',
  },
]

export default function PhilosophyPage() {
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
              'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(59,123,255,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-site mx-auto relative" style={{ padding: '0 2.5rem' }}>
          <p className="eyebrow mb-6">Investment Philosophy</p>
          <h1
            className="display"
            style={{ maxWidth: '16ch', lineHeight: 0.92, marginBottom: '2.5rem' }}
          >
            <HeroReveal text="We don't bet on markets. We bet on physics." />
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
            Every investment thesis is a bet on what the world will look like
            in 15 years. Ours is simple: the most durable businesses of the
            next era will be built on scientific breakthroughs, not distribution
            advantages. We position accordingly.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Core Principles ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-3">Core Principles</p>
            <h2 className="heading mb-12" style={{ maxWidth: '22rem' }}>
              The four beliefs that drive every decision.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-0" style={{ border: '1px solid var(--border-subtle)' }}>
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[1fr_200px]"
                  style={{
                    borderBottom:
                      i < PRINCIPLES.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  <div
                    style={{
                      padding: '2.5rem 2rem',
                      borderRight: '1px solid var(--border-subtle)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1.1875rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.75,
                        maxWidth: '44rem',
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                  <div
                    className="hidden lg:flex flex-col justify-center"
                    style={{
                      padding: '2.5rem 2rem',
                      background: 'var(--gold-subtle)',
                    }}
                  >
                    <p
                      className="mono"
                      style={{
                        fontSize: '2rem',
                        color: 'var(--gold-bright)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {p.stat}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '0.7rem',
                        color: 'var(--text-tertiary)',
                        lineHeight: 1.6,
                      }}
                    >
                      {p.statLabel}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ── Sector Theses ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-deep)', padding: '6rem 0' }}>
        <div className="max-w-site mx-auto" style={{ padding: '0 2.5rem' }}>
          <ScrollReveal>
            <p className="eyebrow mb-3">Sector Theses</p>
            <h2 className="heading mb-12" style={{ maxWidth: '26rem' }}>
              Why we invest where we invest.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {SECTORS.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 70}>
                <div
                  style={{
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                  }}
                >
                  <div
                    style={{
                      padding: '1.5rem 2rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <span
                      className="mono text-sm"
                      style={{ color: 'var(--text-tertiary)', minWidth: '2rem' }}
                    >
                      0{i + 1}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne), system-ui, sans-serif',
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                      style={{
                        padding: '1.75rem 2rem',
                        borderRight: '1px solid var(--border-subtle)',
                      }}
                    >
                      <p
                        className="eyebrow mb-3"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        Why
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-syne), system-ui, sans-serif',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.75,
                        }}
                      >
                        {s.why}
                      </p>
                    </div>
                    <div style={{ padding: '1.75rem 2rem' }}>
                      <p
                        className="eyebrow mb-3"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        Where we look
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-syne), system-ui, sans-serif',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.75,
                        }}
                      >
                        {s.where}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-accent" />

      {/* ── Decision Framework ───────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-void)', padding: '6rem 0' }}>
        <div
          className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          style={{ padding: '0 2.5rem' }}
        >
          <ScrollReveal>
            <p className="eyebrow mb-4">Decision Framework</p>
            <h2
              style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Three questions we ask before every investment.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}
            >
              These are not a checklist. They are a forcing function for
              the kind of honest disagreement that separates a good investment
              from a consensus one.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-6">
              {[
                {
                  q: 'Does the physics work?',
                  a: 'We engage scientific advisors before engaging the company. If the fundamental science is not sound, nothing else matters.',
                },
                {
                  q: 'Is this the right team?',
                  a: 'Deep-tech ventures require founders who understand both the science and the path to commercialization. PhD credentials alone are insufficient. We look for founders who have shipped.',
                },
                {
                  q: 'Would nation-states pay for this?',
                  a: 'If the technology is critical enough that governments must acquire it — for energy security, national defense, or public health — the business model is structurally sound regardless of consumer market dynamics.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.75rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderLeft: '2px solid var(--accent-primary)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.625rem',
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), system-ui, sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
