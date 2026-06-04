'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from './AnimatedCounter'
import { fadeUp, slideInLeft, slideInRight, itemVariants, containerVariants, EASE } from './animations'

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
  { label: 'Trust Account', value: 'U.S. Govt. securities / money market' },
]

const keyMetrics = [
  { label: 'Trust Value', to: 100, prefix: '$', suffix: 'M' },
  { label: 'Units Offered', to: 10, suffix: 'M' },
  { label: 'IPO Price', to: 10, prefix: '$', suffix: '.00', static: true },
  { label: 'Over-Allotment', to: 1.5, suffix: 'M units', decimals: 1 },
]

export default function Deal() {
  return (
    <section id="deal" className="py-24 lg:py-32 relative overflow-hidden bg-[#141311]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(212,168,67,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4A843]/20 bg-[#D4A843]/[0.06] mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D4A843] uppercase">Deal Structure</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2EDE8] mb-4">
            IPO Summary &amp;{' '}
            <span className="text-gradient-gold">Offering Terms</span>
          </h2>
          <p className="text-[#A89F94] max-w-xl mx-auto">
            BHAV Acquisition Corp completed its initial public offering on March 20, 2026,
            raising $100,000,000 in trust on the NASDAQ Global Market.
          </p>
        </motion.div>

        {/* Animated metric strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden mb-8"
        >
          {keyMetrics.map((m) => (
            <motion.div
              key={m.label}
              variants={itemVariants}
              className="bg-[#141311] px-7 py-8"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6B6560] mb-2">{m.label}</p>
              <p className="font-display text-3xl font-bold text-[#F2EDE8]">
                {m.static
                  ? <span className="tabular-nums">{m.prefix}{m.to}{m.suffix}</span>
                  : <AnimatedCounter to={m.to} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                }
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Offering table */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl overflow-hidden"
            style={{ background: '#1C1B19', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Top rim */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="px-6 py-5 border-b border-white/[0.06]">
              <h3 className="font-display font-bold text-[#F2EDE8] text-lg">Offering Terms</h3>
              <p className="text-xs text-[#6B6560] mt-0.5">As filed with the SEC · CIK 0002097288</p>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {offeringTerms.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                  className="flex items-center justify-between px-6 py-3.5 hover:bg-white/[0.025] transition-colors group"
                >
                  <span className="text-sm text-[#A89F94]">{item.label}</span>
                  <span className={`text-sm font-semibold font-mono text-right ${item.highlight ? 'text-[#D4A843]' : 'text-[#F2EDE8]'}`}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Unit economics */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-6 card-gold"
            >
              <h3 className="font-display font-bold text-[#D4A843] mb-5 text-sm tracking-widest uppercase">Unit Economics</h3>
              <div className="space-y-4">
                <p className="text-[10px] text-[#6B6560] uppercase tracking-wider">Each BHAVU Unit Contains</p>
                <div className="flex gap-3 mt-2">
                  {[{ n: '1', l: 'COMMON SHARE' }, { n: '1', l: 'RIGHT (BHAVR)' }].map((item, i) => (
                    <div key={i} className="flex-1 p-3 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,67,0.12)' }}>
                      <div className="font-display text-2xl font-bold text-[#F2EDE8]">{item.n}</div>
                      <div className="text-[9px] text-[#6B6560] tracking-widest mt-1">{item.l}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-[#D4A843]/12">
                  <p className="text-sm text-[#A89F94] leading-relaxed">
                    Each right converts into{' '}
                    <span className="text-[#D4A843] font-bold">¼ of one share</span> upon
                    completion of the initial business combination.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Governance */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.12 } as never}
              className="rounded-2xl overflow-hidden flex-1"
              style={{ background: '#1C1B19', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="px-5 py-4 border-b border-white/[0.06]">
                <h3 className="font-display font-bold text-[#F2EDE8] text-sm">Governance & Structure</h3>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {govHighlights.map((item) => (
                  <div key={item.label} className="px-5 py-3">
                    <p className="text-[10px] text-[#6B6560] uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-xs font-semibold text-[#F2EDE8]">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prospectus link */}
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              href="https://www.sec.gov/Archives/edgar/data/0002097288/000121390026027084/ea0269733-05.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-2xl border border-[#D4A843]/20 bg-[#D4A843]/[0.05] hover:bg-[#D4A843]/[0.09] transition-all duration-200"
            >
              <div>
                <p className="text-sm font-bold text-[#D4A843]">Final Prospectus (S-1)</p>
                <p className="text-[11px] text-[#6B6560] mt-0.5">SEC EDGAR · CIK 0002097288</p>
              </div>
              <span className="text-[#D4A843]/60 group-hover:text-[#D4A843] group-hover:translate-x-1 transition-all duration-200">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
