import Link from 'next/link'

const FUND_LINKS = [
  { label: 'Fund I (Realized)', href: '/funds' },
  { label: 'Fund II (Deploying)', href: '/funds' },
  { label: 'Frontier Fund III', href: '/frontier-fund-iii' },
  { label: 'Fund Economics', href: '/frontier-fund-iii#terms' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Disclosures', href: '#' },
  { label: 'ADV Part 2', href: '#' },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--bg-void)',
        borderTop: '1px solid var(--border-gold)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div
        className="max-w-site mx-auto"
        style={{ padding: '0 2.5rem' }}
      >
        {/* Top section — logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-16 pb-12"
          style={{ borderBottom: '1px solid var(--border-subtle)' }}
        >
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label="BhavCapital home"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '1.5rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                BhavCapital
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '22rem',
              }}
            >
              Backing the defining infrastructure of the next
              industrial era. Deep-tech venture capital for
              the institutions that think in decades.
            </p>
            <div
              style={{
                marginTop: '0.5rem',
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.6,
              }}
            >
              <p>San Francisco · New York</p>
              <p style={{ marginTop: '0.25rem' }}>
                <a
                  href="mailto:ir@bhavcapital.com"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-bright)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  ir@bhavcapital.com
                </a>
              </p>
            </div>
          </div>

          {/* Funds */}
          <FooterColumn title="Funds" links={FUND_LINKS} />

          {/* Company */}
          <FooterColumn title="Company" links={COMPANY_LINKS} />

          {/* Legal */}
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6">
          <p
            style={{
              fontFamily: 'var(--font-syne), system-ui, sans-serif',
              fontSize: '0.7rem',
              color: 'var(--text-tertiary)',
              lineHeight: 1.6,
            }}
          >
            © 2026 BhavCapital Management LP. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-syne), system-ui, sans-serif',
              fontSize: '0.65rem',
              color: 'var(--text-tertiary)',
              lineHeight: 1.7,
              maxWidth: '52rem',
              textAlign: 'right',
            }}
          >
            This website is for informational purposes only and does not constitute
            an offer to sell or a solicitation of an offer to buy any securities.
            Past performance is not indicative of future results. BhavCapital
            Management LP is registered as an investment adviser with the SEC.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <p
        style={{
          fontFamily: 'var(--font-syne), system-ui, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--gold-muted)',
          marginBottom: '0.25rem',
        }}
      >
        {title}
      </p>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          style={{
            fontFamily: 'var(--font-syne), system-ui, sans-serif',
            fontSize: '0.8375rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            transition: 'color 200ms ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
