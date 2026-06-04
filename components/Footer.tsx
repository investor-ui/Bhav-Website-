'use client'

import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'SEC EDGAR', href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288' },
  { label: 'Final Prospectus (S-1)', href: 'https://www.sec.gov/Archives/edgar/data/0002097288/000121390026027084/ea0269733-05.htm' },
  { label: 'BHAVU on NASDAQ', href: 'https://www.nasdaq.com/market-activity/stocks/bhavu' },
  { label: 'Investor Relations', href: '#contact' },
]

const navLinks = [
  { label: 'Thesis', href: '#thesis' },
  { label: 'Deal Structure', href: '#deal' },
  { label: 'Leadership', href: '#team' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'News', href: '#news' },
  { label: 'Governance', href: '#governance' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0c0b09]" style={{ borderTop: '1px solid rgba(212,168,67,0.1)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(212,168,67,0.03),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="font-display text-3xl font-extrabold tracking-widest text-gradient-gold">BHAV</div>
              <div className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase mt-0.5">Acquisition Corp</div>
            </div>
            <p className="text-xs text-[#6B6560] leading-relaxed mb-5 max-w-xs">
              The Intelligent Machines Capital Vehicle. A $100M SPAC targeting Advanced Robotics,
              Electric Vehicles, Drones & UAS, and Fintech.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse-slow" />
              <span className="text-xs font-bold tracking-[0.18em] text-[#D4A843]">NASDAQ: BHAVU</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.22em] text-[#6B6560] uppercase mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[#A89F94] hover:text-[#D4A843] transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.22em] text-[#6B6560] uppercase mb-4">Regulatory & Market</h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-[#A89F94] hover:text-[#D4A843] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl" style={{ border: '1px solid rgba(212,168,67,0.12)', background: 'rgba(212,168,67,0.03)' }}>
              <p className="text-[10px] text-[#6B6560] uppercase tracking-wider mb-1.5">SEC Identifier</p>
              <p className="text-sm font-mono font-semibold text-[#D4A843]">0002097288</p>
              <p className="text-[10px] text-[#6B6560] mt-0.5">File No. 333-293399</p>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="py-6 border-t space-y-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-[11px] text-[#6B6560] leading-relaxed">
            <span className="font-semibold text-[#A89F94]">Informational Purposes Only:</span> This website
            is for informational purposes only and does not constitute an offer to sell or solicitation to buy
            any securities. All offerings made only by means of a prospectus. This is not investment advice.
            Past performance is not indicative of future results.
          </p>
          <p className="text-[11px] text-[#6B6560]/70 leading-relaxed">
            <span className="font-semibold text-[#6B6560]">Forward-Looking Statements:</span> Certain statements
            on this website may constitute forward-looking statements within the meaning of the Private Securities
            Litigation Reform Act of 1995. These statements involve known and unknown risks, uncertainties, and
            other factors that may cause actual results to differ materially. BHAV Acquisition Corp undertakes no
            obligation to update any forward-looking statements.
          </p>
          <p className="text-[11px] text-[#6B6560]/70 leading-relaxed">
            <span className="font-semibold text-[#6B6560]">No Guarantee:</span> There can be no assurance
            that BHAV will complete an initial business combination or that any such combination will be on
            favorable terms. The company has not identified a specific acquisition target. See the Final Prospectus
            for a complete description of risk factors.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          <span className="text-xs text-[#6B6560]">© 2026 BHAV Acquisition Corp. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288" target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#6B6560] hover:text-[#D4A843] transition-colors">SEC Filings</a>
            <span className="text-[#6B6560]/30">·</span>
            <a href="#hero" className="text-xs text-[#6B6560] hover:text-[#D4A843] transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
