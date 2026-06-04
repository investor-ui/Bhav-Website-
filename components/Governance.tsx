'use client'

import { motion } from 'framer-motion'

const boardMembers = [
  {
    name: 'Giri Devanur',
    role: 'CEO & Chairman',
    independent: false,
    committees: ['—'],
  },
  {
    name: 'Chaitanya Kumar Setti',
    role: 'CFO & Director',
    independent: false,
    committees: ['—'],
  },
  {
    name: 'Balaji Swaminathan',
    role: 'Independent Director',
    independent: true,
    committees: ['Audit', 'Compensation'],
  },
  {
    name: 'Piyush Sadana',
    role: 'Independent Director',
    independent: true,
    committees: ['Audit', 'Nominating'],
  },
  {
    name: "John Patrick O'Connell",
    role: 'Independent Director',
    independent: true,
    committees: ['Audit (Chair)', 'Compensation (Chair)'],
  },
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
    <section id="governance" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1228] to-[#0a0e1a]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c9a84c] uppercase">Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Board &{' '}
            <span className="text-gradient-gold">Corporate Governance</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            BHAV maintains rigorous governance standards consistent with NASDAQ requirements
            and SEC regulations applicable to blank check companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Board table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 rounded-xl border border-[#c9a84c]/12 bg-white/[0.02] overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-[#c9a84c]/10">
              <h3 className="font-bold text-white text-lg">Board of Directors</h3>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-12 px-6 py-3 border-b border-[#c9a84c]/8 bg-[#c9a84c]/[0.02]">
              <span className="col-span-4 text-[10px] font-bold text-white/30 uppercase tracking-wider">Name</span>
              <span className="col-span-3 text-[10px] font-bold text-white/30 uppercase tracking-wider">Role</span>
              <span className="col-span-2 text-[10px] font-bold text-white/30 uppercase tracking-wider">Independent</span>
              <span className="col-span-3 text-[10px] font-bold text-white/30 uppercase tracking-wider">Committees</span>
            </div>

            <div className="divide-y divide-[#c9a84c]/6">
              {boardMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="grid grid-cols-12 px-6 py-4 hover:bg-[#c9a84c]/[0.02] transition-colors"
                >
                  <div className="col-span-4">
                    <div className="text-sm font-semibold text-white">{member.name}</div>
                  </div>
                  <div className="col-span-3">
                    <div className="text-xs text-white/50">{member.role}</div>
                  </div>
                  <div className="col-span-2">
                    {member.independent ? (
                      <span className="text-xs font-semibold text-emerald-400">Yes</span>
                    ) : (
                      <span className="text-xs text-white/25">No</span>
                    )}
                  </div>
                  <div className="col-span-3">
                    <div className="flex flex-wrap gap-1">
                      {member.committees.map((c) => (
                        <span key={c} className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                          c === '—' ? 'text-white/20' : 'text-[#c9a84c]/60 border border-[#c9a84c]/15'
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
          <div className="flex flex-col gap-5">
            {/* Key facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-xl border border-[#c9a84c]/12 bg-white/[0.02] overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-[#c9a84c]/10">
                <h3 className="font-bold text-white text-sm">Corporate Information</h3>
              </div>
              <div className="divide-y divide-[#c9a84c]/6">
                {keyFacts.map((fact) => (
                  <div key={fact.label} className="px-5 py-3 flex justify-between items-center">
                    <span className="text-xs text-white/35">{fact.label}</span>
                    <span className="text-xs font-semibold text-white/70">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Doc links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-3"
            >
              {govDocs.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between p-4 rounded-xl border border-[#c9a84c]/12 bg-white/[0.02] hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/[0.04] transition-all duration-200"
                >
                  <div>
                    <div className="text-sm font-semibold text-[#c9a84c] group-hover:text-[#d4af5a] transition-colors">{doc.label}</div>
                    <div className="text-[11px] text-white/35 mt-0.5 leading-snug">{doc.description}</div>
                  </div>
                  <span className="text-[#c9a84c]/40 group-hover:text-[#c9a84c] group-hover:translate-x-0.5 transition-all duration-200 ml-3 mt-0.5 flex-shrink-0">
                    →
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
