'use client'

import { motion } from 'framer-motion'

const offeringTerms = [
  { label: 'Offering Size', value: '$100,000,000', highlight: true },
  { label: 'Price Per Unit', value: '$10.00', highlight: true },
  { label: 'Units Offered', value: '10,000,000' },
  { label: 'Over-Allotment Option', value: '1,500,000 units' },
  { label: 'Unit Composition', value: '1 Share + 1 Right' },
  { label: 'Right Conversion', value: '¼ Share per Right' },
  { label: 'Exchange', value: 'NASDAQ Global Market' },
  { label: 'Tickers', value: 'BHAVU · BHAV · BHAVR', highlight: true },
  { label: 'Trustee', value: 'Continental Stock Transfer & Trust' },
  { label: 'Underwriter', value: 'Maxim Group LLC' },
  { label: 'IPO Closing Date', value: 'March 20, 2026', highlight: true },
  { label: 'CIK', value: '0002097288' },
]

const govHighlights = [
  { label: 'Business Combination Window', value: '18 months (extendable to 21 mo.)' },
  { label: 'Minimum Target Size', value: '80% of Trust Assets' },
  { label: 'Redemption Rights', value: 'Public shareholders at closing' },
  { label: 'Founder Shares', value: '20% of post-IPO shares' },
  { label: 'Private Placement Warrants', value: 'Sponsor at $1.50/warrant' },
  { label: 'Trust Account', value: 'U.S. Govt. securities or money market' },
]

export default function Deal() {
  return (
    <section id="deal" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section bg tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1228] to-[#0a0e1a]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c9a84c] uppercase">Deal Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            IPO Summary &{' '}
            <span className="text-gradient-gold">Offering Terms</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            BHAV Acquisition Corp completed its initial public offering on March 20, 2026,
            raising $100,000,000 in trust on the NASDAQ Global Market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main offering table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-xl border border-[#c9a84c]/12 bg-white/[0.02] overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-[#c9a84c]/10">
              <h3 className="font-bold text-white text-lg">Offering Terms</h3>
              <p className="text-xs text-white/40 mt-0.5">As filed with the SEC</p>
            </div>
            <div className="divide-y divide-[#c9a84c]/6">
              {offeringTerms.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center justify-between px-6 py-3.5 hover:bg-[#c9a84c]/[0.03] transition-colors"
                >
                  <span className="text-sm text-white/50">{item.label}</span>
                  <span className={`text-sm font-semibold text-right ${item.highlight ? 'text-[#c9a84c]' : 'text-white/80'}`}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Unit economics card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.04] p-6"
            >
              <h3 className="font-bold text-[#c9a84c] mb-5 text-sm tracking-wider uppercase">Unit Economics</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/40 uppercase tracking-wider">Each BHAVU Unit Contains</span>
                  <div className="flex gap-3 mt-2">
                    <div className="flex-1 p-3 rounded-lg bg-white/[0.03] border border-[#c9a84c]/10 text-center">
                      <div className="text-xl font-black text-white">1</div>
                      <div className="text-[10px] text-white/40 tracking-wider mt-1">COMMON SHARE</div>
                    </div>
                    <div className="flex items-center text-[#c9a84c]/30 font-bold">+</div>
                    <div className="flex-1 p-3 rounded-lg bg-white/[0.03] border border-[#c9a84c]/10 text-center">
                      <div className="text-xl font-black text-white">1</div>
                      <div className="text-[10px] text-white/40 tracking-wider mt-1">RIGHT (BHAVR)</div>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#c9a84c]/10">
                  <span className="text-xs text-white/40">Right Conversion:</span>
                  <p className="text-sm text-white/70 mt-1">
                    Each right converts into <span className="text-[#c9a84c] font-bold">¼ of one share</span> upon
                    completion of the initial business combination.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Governance terms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-xl border border-[#c9a84c]/12 bg-white/[0.02] overflow-hidden flex-1"
            >
              <div className="px-5 py-4 border-b border-[#c9a84c]/10">
                <h3 className="font-bold text-white text-sm">Governance & Structure</h3>
              </div>
              <div className="divide-y divide-[#c9a84c]/6">
                {govHighlights.map((item) => (
                  <div key={item.label} className="px-5 py-3 flex flex-col gap-0.5">
                    <span className="text-[10px] text-white/35 uppercase tracking-wider">{item.label}</span>
                    <span className="text-xs font-semibold text-white/75">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EDGAR link */}
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://www.sec.gov/Archives/edgar/data/0002097288/000121390026027084/ea0269733-05.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/5 hover:bg-[#c9a84c]/10 transition-all duration-200 group"
            >
              <div>
                <div className="text-sm font-bold text-[#c9a84c]">Final Prospectus (S-1)</div>
                <div className="text-xs text-white/40 mt-0.5">SEC EDGAR · CIK 0002097288</div>
              </div>
              <span className="text-[#c9a84c] group-hover:translate-x-1 transition-transform duration-200">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
