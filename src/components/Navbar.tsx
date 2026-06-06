'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import InquiryModal from './InquiryModal'

const TICKER = [
  { label: 'FUND III TARGET', value: '$500M' },
  { label: 'FUND III RAISED', value: '$287M' },
  { label: 'FUND II TVPI', value: '2.8×' },
  { label: 'PORTFOLIO COMPANIES', value: '34' },
  { label: 'FUND I NET IRR', value: '31.4%' },
  { label: 'FUND I DPI', value: '1.9×' },
]

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Funds', href: '/funds' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Team', href: '/team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on navigation
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body when mobile menu open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Announcement Bar ─────────────────────────────────────────── */}
      <div
        aria-label="Fund status ticker"
        className="relative overflow-hidden"
        style={{
          height: '2.25rem',
          background: 'var(--bg-void)',
          borderBottom: '1px solid var(--border-gold)',
        }}
      >
        {/* Marquee track — duplicated for seamless loop */}
        <div className="marquee-track h-full items-center">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-6 h-full whitespace-nowrap"
            >
              <span
                className="eyebrow"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {item.label}
              </span>
              <span
                className="mono text-sm font-medium"
                style={{ color: 'var(--gold-bright)' }}
              >
                {item.value}
              </span>
              <span
                aria-hidden="true"
                className="text-xs"
                style={{ color: 'var(--border-gold)' }}
              >
                ·
              </span>
            </span>
          ))}
        </div>

        {/* Right fade + CTA */}
        <div
          className="absolute right-0 top-0 bottom-0 flex items-center pr-5 pl-16"
          style={{
            background: 'linear-gradient(to right, transparent, var(--bg-void) 40%)',
          }}
        >
          <Link
            href="/frontier-fund-iii"
            className="eyebrow transition-colors duration-200"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-bright)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Fund III Open →
          </Link>
        </div>
      </div>

      {/* ── Sticky Navigation ─────────────────────────────────────────── */}
      <header
        role="banner"
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--bg-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <div
          className="max-w-site mx-auto flex items-center justify-between"
          style={{ padding: '0 2.5rem', height: '4.5rem' }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="BhavCapital — return to home"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="display"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                letterSpacing: '-0.01em',
              }}
            >
              BhavCapital
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-syne), system-ui, sans-serif',
                    fontSize: '0.8375rem',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 200ms ease',
                    paddingBottom: '2px',
                    borderBottom: active
                      ? '1px solid var(--border-accent)'
                      : '1px solid transparent',
                  }}
                  onMouseEnter={e => {
                    if (!active) e.currentTarget.style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={e => {
                    if (!active) e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-outline-accent">
              Contact
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary"
              aria-haspopup="dialog"
            >
              Request to Invest ↗
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: 'var(--text-primary)',
                transition: 'transform 300ms ease, opacity 300ms ease',
                transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: 'var(--text-primary)',
                transition: 'opacity 300ms ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: 'var(--text-primary)',
                transition: 'transform 300ms ease, opacity 300ms ease',
                transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ───────────────────────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="lg:hidden fixed inset-0 z-40 flex flex-col"
          style={{
            background: 'var(--bg-void)',
            top: '6.75rem', // announcement bar (36px) + header (72px)
          }}
        >
          <nav className="flex flex-col px-6 pt-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-syne), system-ui, sans-serif',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color:
                    pathname === link.href
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '1.125rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-6 mt-8">
            <Link
              href="/contact"
              className="btn-outline-accent"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false)
                setModalOpen(true)
              }}
              className="btn-primary"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              Request to Invest ↗
            </button>
          </div>
        </div>
      )}

      {/* ── Inquiry Modal ─────────────────────────────────────────────── */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
