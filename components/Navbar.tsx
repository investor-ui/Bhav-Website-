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
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#111110]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span className="text-xl lg:text-2xl font-display font-extrabold tracking-widest text-gradient-gold">
                BHAV
              </span>
              <span className="text-[9px] font-medium tracking-[0.22em] text-[#A89F94] uppercase">
                Acquisition Corp
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[#A89F94] hover:text-[#F2EDE8] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4A843]/25 bg-[#D4A843]/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse-slow" />
              <span className="text-[11px] font-bold text-[#D4A843] tracking-[0.18em]">NASDAQ: BHAVU</span>
            </div>
            <a
              href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[11px] font-bold tracking-widest border border-[#D4A843]/35 text-[#D4A843] hover:bg-[#D4A843] hover:text-[#111110] transition-all duration-200 rounded"
            >
              SEC FILINGS
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#A89F94] hover:text-[#F2EDE8] transition-colors p-2"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#111110]/95 backdrop-blur-2xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base font-medium text-[#A89F94] hover:text-[#D4A843] transition-colors border-b border-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
                  <span className="text-sm font-bold text-[#D4A843] tracking-wider">NASDAQ: BHAVU</span>
                </div>
                <a
                  href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-3 text-sm font-bold tracking-widest border border-[#D4A843]/35 text-[#D4A843] rounded hover:bg-[#D4A843] hover:text-[#111110] transition-all"
                >
                  SEC FILINGS
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
