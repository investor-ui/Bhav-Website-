'use client'

import { motion } from 'framer-motion'

const executives = [
  {
    name: 'Giri Devanur',
    title: 'Chief Executive Officer & Director',
    role: 'Sponsor Managing Member',
    bio: 'Accomplished entrepreneur and technology executive with deep experience in enterprise software, AI, and capital markets. Founder and former CEO of multiple technology companies, Giri brings a track record of scaling businesses from early-stage to public markets. As Managing Member of the Sponsor, he leads BHAV\'s strategic direction and acquisition mandate.',
    initials: 'GD',
  },
  {
    name: 'Chaitanya Kumar Setti',
    title: 'Chief Financial Officer & Director',
    role: 'IT & Digital Services',
    bio: 'Seasoned finance and technology executive with expertise in digital transformation, IT services, and financial operations. Chaitanya oversees BHAV\'s financial reporting, SEC compliance, trust management, and operational infrastructure as the company pursues its initial business combination.',
    initials: 'CS',
  },
]

const directors = [
  {
    name: 'Balaji Swaminathan',
    title: 'Independent Director',
    committees: ['Audit', 'Compensation'],
    initials: 'BS',
  },
  {
    name: 'Piyush Sadana',
    title: 'Independent Director',
    committees: ['Audit', 'Nominating'],
    initials: 'PS',
  },
  {
    name: 'John Patrick O\'Connell',
    title: 'Independent Director',
    committees: ['Audit (Chair)', 'Compensation (Chair)'],
    initials: 'JO',
  },
]

const advisors = [
  {
    name: 'Rajan Singhal',
    title: 'Board Advisor',
    initials: 'RS',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-[#c9a84c]/[0.03] rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c9a84c] uppercase">Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Executive{' '}
            <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Experienced operators, technologists, and capital markets professionals
            united by a shared vision for the intelligent machines era.
          </p>
        </motion.div>

        {/* Executive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {executives.map((exec, i) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-7 rounded-xl border border-[#c9a84c]/15 bg-white/[0.02] hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/[0.03] transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                {/* Avatar */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#c9a84c]/30 bg-[#c9a84c]/10 flex items-center justify-center group-hover:border-[#c9a84c]/60 transition-colors duration-300">
                  <span className="text-xl font-black text-[#c9a84c]">{exec.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-0.5">{exec.name}</h3>
                  <p className="text-sm text-[#c9a84c] font-medium mb-0.5">{exec.title}</p>
                  <span className="inline-block text-[10px] font-semibold tracking-[0.15em] text-white/35 uppercase border border-white/10 px-2 py-0.5 rounded">
                    {exec.role}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm text-white/50 leading-relaxed">{exec.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Independent Directors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#c9a84c]/15" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#c9a84c]/60 uppercase">Independent Directors</span>
            <div className="h-px flex-1 bg-[#c9a84c]/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {directors.map((dir, i) => (
              <motion.div
                key={dir.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-[#c9a84c]/10 bg-white/[0.015] hover:border-[#c9a84c]/25 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/8 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#c9a84c]">{dir.initials}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">{dir.name}</div>
                    <div className="text-[10px] text-white/35 mt-0.5">{dir.title}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {dir.committees.map((c) => (
                    <span key={c} className="text-[9px] font-semibold tracking-wider text-[#c9a84c]/50 border border-[#c9a84c]/15 px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#c9a84c]/15" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#c9a84c]/60 uppercase">Board Advisor</span>
            <div className="h-px flex-1 bg-[#c9a84c]/15" />
          </div>

          <div className="flex justify-center">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="p-5 rounded-xl border border-[#c9a84c]/10 bg-white/[0.015] flex items-center gap-4 min-w-[280px]"
              >
                <div className="w-10 h-10 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/8 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#c9a84c]">{advisor.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{advisor.name}</div>
                  <div className="text-xs text-[#c9a84c]/50 mt-0.5">{advisor.title}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
