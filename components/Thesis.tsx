'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    icon: '🤖',
    title: 'Advanced & Industrial Robotics',
    subtitle: 'AI-Powered Automation',
    description:
      'Targeting AI-powered humanoid and industrial robots redefining manufacturing, logistics, and human augmentation. The robotics market is projected to exceed $200B by 2035, driven by labor shortages, AI breakthroughs, and enterprise automation demand.',
    tags: ['Humanoid Robots', 'Industrial Automation', 'AI Integration', 'Manufacturing'],
    stat: '$200B+',
    statLabel: 'Market by 2035',
  },
  {
    icon: '⚡',
    title: 'Electric Vehicles (EVs)',
    subtitle: 'Next-Gen Mobility',
    description:
      'Next-generation EV platforms integrating autonomous driving and AI-native architectures. We focus on companies that go beyond electrification — building intelligent transportation ecosystems with software-defined vehicles.',
    tags: ['Autonomous Driving', 'AI Platforms', 'Battery Tech', 'Fleet Solutions'],
    stat: '45%',
    statLabel: 'EV CAGR Forecast',
  },
  {
    icon: '🚁',
    title: 'Drones & Unmanned Aerial Systems',
    subtitle: 'AI-Driven UAS',
    description:
      'AI-driven unmanned aerial systems transforming defense, logistics, infrastructure inspection, and emergency response. With the U.S. ban on Chinese-made drones, domestic UAS manufacturers have unprecedented market access.',
    tags: ['Defense UAS', 'Logistics Drones', 'Infrastructure', 'Urban Air Mobility'],
    stat: '$50B+',
    statLabel: 'Global Drone Market',
  },
  {
    icon: '💳',
    title: 'Financial Technology',
    subtitle: 'AI-Native Finance',
    description:
      'AI-native fintech companies, embedded finance platforms, and blockchain-based settlement infrastructure redefining how capital moves globally. Targeting high-growth companies at the intersection of finance and intelligent automation.',
    tags: ['Embedded Finance', 'Blockchain Settlement', 'AI Banking', 'B2B Fintech'],
    stat: '$700B+',
    statLabel: 'Fintech Market Cap',
  },
]

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-7 rounded-xl border border-[#c9a84c]/12 bg-white/[0.02] hover:bg-[#c9a84c]/[0.04] hover:border-[#c9a84c]/25 transition-all duration-300 cursor-default"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 40px rgba(201,168,76,0.04)' }}
      />

      {/* Icon */}
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
        {pillar.icon}
      </div>

      {/* Stat */}
      <div className="absolute top-7 right-7 text-right">
        <div className="text-xl font-black text-[#c9a84c] opacity-60 group-hover:opacity-100 transition-opacity">{pillar.stat}</div>
        <div className="text-[10px] text-white/30 tracking-wider uppercase">{pillar.statLabel}</div>
      </div>

      {/* Title */}
      <div className="mb-1">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c9a84c]/60 uppercase">{pillar.subtitle}</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-3 leading-tight">{pillar.title}</h3>

      {/* Description */}
      <p className="text-sm text-white/50 leading-relaxed mb-5">{pillar.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {pillar.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[10px] font-semibold tracking-wider border border-[#c9a84c]/15 text-[#c9a84c]/50 rounded-full group-hover:border-[#c9a84c]/30 group-hover:text-[#c9a84c]/70 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Thesis() {
  return (
    <section id="thesis" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c9a84c] uppercase">Investment Thesis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Four Pillars of{' '}
            <span className="text-gradient-gold">Intelligent Innovation</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            BHAV targets transformative companies at the convergence of artificial intelligence
            and physical-world disruption — industries we believe represent the next decade's
            most significant value creation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-white/25 max-w-2xl mx-auto leading-relaxed">
            Market projections based on publicly available research reports. BHAV has not yet identified a specific acquisition target.
            All investments involve risk. See the prospectus for full risk factors.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
