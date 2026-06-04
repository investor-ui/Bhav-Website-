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
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-gold-500/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-xl lg:text-2xl font-black tracking-widest text-gradient-gold">
                BHAV
              </span>
              <span className="text-[9px] lg:text-[10px] font-medium tracking-[0.2em] text-white/50 uppercase">
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
                className="text-sm font-medium text-white/70 hover:text-[#c9a84c] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse-slow" />
              <span className="text-xs font-semibold text-[#c9a84c] tracking-widest">NASDAQ: BHAVU</span>
            </div>
            <a
              href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold tracking-wider border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-all duration-200 rounded"
            >
              SEC FILINGS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-t border-[#c9a84c]/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-white/70 hover:text-[#c9a84c] transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse-slow" />
                  <span className="text-sm font-semibold text-[#c9a84c]">NASDAQ: BHAVU</span>
                </div>
                <a
                  href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 text-sm font-semibold border border-[#c9a84c]/40 text-[#c9a84c] rounded hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-all"
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
