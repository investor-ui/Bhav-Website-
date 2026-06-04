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
    <footer className="relative border-t border-[#c9a84c]/10 bg-[#05070f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-3xl font-black tracking-widest text-gradient-gold">BHAV</div>
              <div className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">Acquisition Corp</div>
            </div>
            <p className="text-xs text-white/30 leading-relaxed mb-4 max-w-xs">
              The Intelligent Machines Capital Vehicle. A $100M SPAC targeting Advanced Robotics,
              Electric Vehicles, Drones & UAS, and Fintech.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.15em] text-[#c9a84c]">NASDAQ: BHAVU</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#c9a84c] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">Regulatory & Market</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-white/40 hover:text-[#c9a84c] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-lg border border-[#c9a84c]/12 bg-[#c9a84c]/[0.03]">
              <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1.5">CIK</div>
              <div className="text-sm font-mono font-semibold text-[#c9a84c]">0002097288</div>
              <div className="text-[10px] text-white/20 mt-0.5">File No. 333-293399</div>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="py-6 border-t border-[#c9a84c]/8 space-y-3">
          <p className="text-[11px] text-white/25 leading-relaxed">
            <span className="font-semibold text-white/35">Informational Purposes Only:</span> This website
            is for informational purposes only and does not constitute an offer to sell or solicitation to buy
            any securities. All offerings made only by means of a prospectus. This is not investment advice.
            Past performance is not indicative of future results.
          </p>
          <p className="text-[11px] text-white/20 leading-relaxed">
            <span className="font-semibold text-white/25">Forward-Looking Statements:</span> Certain statements
            on this website may constitute forward-looking statements within the meaning of the Private Securities
            Litigation Reform Act of 1995. These statements involve known and unknown risks, uncertainties, and
            other factors that may cause actual results to differ materially from any results implied or anticipated
            in the forward-looking statements. BHAV Acquisition Corp undertakes no obligation to update any
            forward-looking statements. Readers are cautioned not to place undue reliance on forward-looking statements.
          </p>
          <p className="text-[11px] text-white/20 leading-relaxed">
            <span className="font-semibold text-white/25">No Guarantee:</span> There can be no assurance
            that BHAV Acquisition Corp will complete an initial business combination or that any such combination
            will be on favorable terms. The company has not identified a specific acquisition target.
            See the Final Prospectus for a complete description of risk factors.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-[#c9a84c]/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/25">
            © 2026 BHAV Acquisition Corp. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/25 hover:text-[#c9a84c]/60 transition-colors"
            >
              SEC Filings
            </a>
            <span className="text-white/10">·</span>
            <a href="#hero" className="text-xs text-white/25 hover:text-[#c9a84c]/60 transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
