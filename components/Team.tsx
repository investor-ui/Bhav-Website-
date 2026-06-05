'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeUp, EASE } from './animations'

const executives = [
  {
    name: 'Giri Devanur',
    title: 'Chief Executive Officer & Director',
    role: 'Sponsor Managing Member',
    bio: "Accomplished entrepreneur and technology executive with deep experience in enterprise software, AI, and capital markets. Founder and former CEO of multiple technology companies, Giri brings a track record of scaling businesses from early-stage to public markets. As Managing Member of the Sponsor, he leads BHAV's strategic direction and acquisition mandate.",
    initials: 'GD',
  },
  {
    name: 'Chaitanya Kumar Setti',
    title: 'Chief Financial Officer & Director',
    role: 'IT & Digital Services',
    bio: "Seasoned finance and technology executive with expertise in digital transformation, IT services, and financial operations. Chaitanya oversees BHAV's financial reporting, SEC compliance, trust management, and operational infrastructure as the company pursues its initial business combination.",
    initials: 'CS',
  },
]

const directors = [
  { name: 'Balaji Swaminathan', title: 'Independent Director', committees: ['Audit', 'Compensation'], initials: 'BS' },
  { name: 'Piyush Sadana', title: 'Independent Director', committees: ['Audit', 'Nominating'], initials: 'PS' },
  { name: "John Patrick O'Connell", title: 'Independent Director', committees: ['Audit (Chair)', 'Compensation (Chair)'], initials: 'JO' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden bg-white scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500 uppercase mb-4">Leadership</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Executive{' '}
            <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-navy-500 max-w-xl mx-auto">
            Experienced operators, technologists, and capital markets professionals
            united by a shared vision for the intelligent machines era.
          </p>
        </motion.div>

        {/* Executive cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
        >
          {executives.map((exec) => (
            <motion.div
              key={exec.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: EASE } }}
              className="group relative p-7 rounded-2xl overflow-hidden card-light"
            >
              {/* Gold top edge on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div className="flex items-start gap-5">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-navy-900/[0.06] border-2 border-navy-900/15 group-hover:border-gold-400/50 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-navy-700">{exec.initials}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-0.5">{exec.name}</h3>
                  <p className="text-sm text-gold-500 font-semibold mb-1.5">{exec.title}</p>
                  <span className="inline-block text-[10px] font-semibold tracking-[0.15em] text-navy-500 uppercase border border-navy-900/12 px-2.5 py-0.5 rounded-full">
                    {exec.role}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm text-navy-500 leading-relaxed">{exec.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Independent Directors */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-navy-900/12" />
            <span className="text-[10px] font-bold tracking-[0.22em] text-navy-400 uppercase">Independent Directors</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-navy-900/12" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {directors.map((dir) => (
              <motion.div
                key={dir.name}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE } }}
                className="p-5 rounded-xl card-light"
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-full border border-navy-900/15 bg-navy-900/[0.04] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-navy-700">{dir.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900 leading-tight">{dir.name}</p>
                    <p className="text-[10px] text-navy-400 mt-0.5">{dir.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {dir.committees.map((c) => (
                    <span key={c} className="text-[9px] font-bold tracking-wider text-gold-600 border border-gold-400/25 px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Board Advisor */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-navy-900/12" />
            <span className="text-[10px] font-bold tracking-[0.22em] text-navy-400 uppercase">Board Advisor</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-navy-900/12" />
          </div>
          <div className="flex justify-center">
            <div className="p-5 rounded-xl flex items-center gap-4 min-w-[260px] card-light">
              <div className="w-10 h-10 rounded-full border border-navy-900/15 bg-navy-900/[0.04] flex items-center justify-center">
                <span className="text-sm font-bold text-navy-700">RS</span>
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">Rajan Singhal</p>
                <p className="text-xs text-gold-500/80 mt-0.5">Board Advisor</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
