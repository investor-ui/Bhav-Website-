'use client'

import { motion } from 'framer-motion'
import { fadeUp, slideInLeft, slideInRight, EASE } from './animations'

const boardMembers = [
  { name: 'Giri Devanur', role: 'CEO & Chairman', independent: false, committees: ['—'] },
  { name: 'Chaitanya Kumar Setti', role: 'CFO & Director', independent: false, committees: ['—'] },
  { name: 'Balaji Swaminathan', role: 'Independent Director', independent: true, committees: ['Audit', 'Compensation'] },
  { name: 'Piyush Sadana', role: 'Independent Director', independent: true, committees: ['Audit', 'Nominating'] },
  { name: "John Patrick O'Connell", role: 'Independent Director', independent: true, committees: ['Audit (Chair)', 'Compensation (Chair)'] },
]

const govDocs = [
  {
    label: 'Final Prospectus (Form S-1)',
    description: 'Complete offering document including risk factors, business overview, and financial statements.',
    href: 'https://www.sec.gov/Archives/edgar/data/0002097288/000121390026027084/ea0269733-05.htm',
  },
  {
    label: 'SEC EDGAR Filings',
    description: 'All filings with the U.S. Securities and Exchange Commission. CIK: 0002097288.',
    href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288',
  },
  {
    label: 'NASDAQ: BHAVU',
    description: 'Real-time market data, trading information, and corporate profile on NASDAQ.',
    href: 'https://www.nasdaq.com/market-activity/stocks/bhavu',
  },
]

const keyFacts = [
  { label: 'CIK Number', value: '0002097288' },
  { label: 'File Number', value: '333-293399' },
  { label: 'Incorporated', value: 'Cayman Islands' },
  { label: 'Principal Office', value: 'Piscataway, NJ' },
  { label: 'Fiscal Year End', value: 'December 31' },
  { label: 'Auditor', value: 'Independent Registered CPA' },
]

export default function Governance() {
  return (
    <section id="governance" className="py-24 lg:py-32 relative overflow-hidden bg-navy-900 scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,168,67,0.04), transparent)',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-gold-400 uppercase mb-4">Governance</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Board &amp;{' '}
            <span className="text-gradient-gold">Corporate Governance</span>
          </h2>
          <p className="text-navy-300 max-w-xl mx-auto">
            BHAV maintains rigorous governance standards consistent with NASDAQ requirements
            and SEC regulations applicable to blank check companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Board table */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
          >
            <div className="px-6 py-5 border-b border-white/[0.07]">
              <h3 className="font-display font-bold text-white text-lg">Board of Directors</h3>
            </div>

            <div className="grid grid-cols-12 px-6 py-3 border-b border-white/[0.05] bg-white/[0.02]">
              <span className="col-span-4 text-[10px] font-bold text-navy-400 uppercase tracking-wider">Name</span>
              <span className="col-span-3 text-[10px] font-bold text-navy-400 uppercase tracking-wider">Role</span>
              <span className="col-span-2 text-[10px] font-bold text-navy-400 uppercase tracking-wider">Indep.</span>
              <span className="col-span-3 text-[10px] font-bold text-navy-400 uppercase tracking-wider">Committees</span>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {boardMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                  className="grid grid-cols-12 px-6 py-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-4">
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-xs text-navy-300">{member.role}</p>
                  </div>
                  <div className="col-span-2">
                    {member.independent
                      ? <span className="text-xs font-semibold text-emerald-400">Yes</span>
                      : <span className="text-xs text-navy-500">No</span>
                    }
                  </div>
                  <div className="col-span-3">
                    <div className="flex flex-wrap gap-1">
                      {member.committees.map((c) => (
                        <span key={c} className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                          c === '—' ? 'text-navy-500' : 'text-gold-400/70 border border-gold-400/18'
                        }`}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Corporate info */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
            >
              <div className="px-5 py-4 border-b border-white/[0.07]">
                <h3 className="font-display font-bold text-white text-sm">Corporate Information</h3>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {keyFacts.map((fact) => (
                  <div key={fact.label} className="px-5 py-3 flex justify-between items-center">
                    <span className="text-xs text-navy-400">{fact.label}</span>
                    <span className="text-xs font-semibold font-mono text-white">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Doc links */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.12 } as never}
              className="flex flex-col gap-3"
            >
              {govDocs.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-gold-400/28 hover:bg-gold-400/[0.04] transition-all duration-200"
                >
                  <div>
                    <p className="text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">{doc.label}</p>
                    <p className="text-[11px] text-navy-400 mt-0.5 leading-snug">{doc.description}</p>
                  </div>
                  <span className="text-gold-400/40 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all duration-200 ml-3 mt-0.5 flex-shrink-0">→</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
