'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeUp, EASE } from './animations'

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
      "AI-driven unmanned aerial systems transforming defense, logistics, infrastructure inspection, and emergency response. With the U.S. ban on Chinese-made drones, domestic UAS manufacturers have unprecedented market access.",
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

function PillarCard({ pillar }: { pillar: typeof pillars[0] }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      className="group relative overflow-hidden rounded-2xl p-7 cursor-default card-light"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(320px circle at ${cursor.x}px ${cursor.y}px, rgba(212,168,67,0.05), transparent 60%)`,
        }}
      />

      {/* Gold top edge on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Stat — top right */}
      <div className="absolute top-6 right-6 text-right">
        <div className="text-xl font-display font-bold text-gold-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
          {pillar.stat}
        </div>
        <div className="text-[10px] text-navy-400 tracking-widest uppercase mt-0.5">{pillar.statLabel}</div>
      </div>

      <div className="text-3xl mb-5 group-hover:scale-105 transition-transform duration-300 inline-block origin-left">
        {pillar.icon}
      </div>

      <p className="text-[10px] font-bold tracking-[0.2em] text-gold-500/80 uppercase mb-1.5">{pillar.subtitle}</p>
      <h3 className="font-display text-xl font-bold text-navy-900 mb-3 leading-snug">{pillar.title}</h3>
      <p className="text-sm text-navy-500 leading-relaxed mb-5">{pillar.description}</p>

      <div className="flex flex-wrap gap-2">
        {pillar.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[10px] font-semibold tracking-wider border border-navy-900/10 text-navy-500 rounded-full group-hover:border-gold-400/35 group-hover:text-gold-600 transition-all duration-300"
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
    <section id="thesis" className="py-24 lg:py-32 relative overflow-hidden bg-sand-100 scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy-900/15 bg-navy-900/[0.04] mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-navy-700 uppercase">Investment Thesis</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Four Pillars of{' '}
            <span className="text-gradient-gold">Intelligent Innovation</span>
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            BHAV targets transformative companies at the convergence of artificial intelligence
            and physical-world disruption — industries we believe represent the next decade&apos;s
            most significant value creation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center text-xs text-navy-400 max-w-2xl mx-auto leading-relaxed"
        >
          Market projections based on publicly available research reports. BHAV has not yet identified a specific acquisition target.
          All investments involve risk. See the prospectus for full risk factors.
        </motion.p>
      </div>
    </section>
  )
}
