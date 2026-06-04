'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Thesis', href: '#thesis' },
  { label: 'Deal', href: '#deal' },
  { label: 'Team', href: '#team' },
  { label: 'News', href: '#news' },
  { label: 'Governance', href: '#governance' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-8 flex items-center justify-center bg-navy-900">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-slow flex-shrink-0" />
          <span className="text-[11px] font-semibold tracking-[0.18em] text-gold-400 uppercase">
            NASDAQ: BHAVU · $100M Trust Closed · IPO March 20, 2026
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-xl shadow-[0_1px_0_rgba(10,22,40,0.08),0_4px_24px_rgba(10,22,40,0.07)]'
            : 'bg-white/90 backdrop-blur-md border-b border-navy-900/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-display font-bold tracking-[0.12em] text-navy-900">
                  BHAV
                </span>
                <span className="text-[9px] font-medium tracking-[0.24em] text-navy-400 uppercase -mt-0.5">
                  Acquisition Corp
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-navy-600 hover:text-navy-900 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-[12px] font-semibold tracking-wider border border-navy-900/20 text-navy-700 hover:bg-navy-900/5 transition-all duration-200 rounded"
              >
                SEC Filings
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-[12px] font-bold tracking-wider bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 rounded"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-navy-700 hover:text-navy-900 transition-colors p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-[14px] flex flex-col justify-between">
                <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-white border-t border-navy-900/[0.07] overflow-hidden"
            >
              <div className="px-4 py-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-base font-medium text-navy-700 hover:text-gold-500 transition-colors border-b border-navy-900/[0.05]"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center py-3 text-sm font-semibold border border-navy-900/20 text-navy-700 rounded"
                  >
                    SEC Filings
                  </a>
                  <a
                    href="#contact"
                    className="text-center py-3 text-sm font-bold bg-navy-900 text-white rounded"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
