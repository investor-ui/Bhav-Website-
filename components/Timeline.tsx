'use client'

import { motion } from 'framer-motion'
import { fadeUp, EASE } from './animations'

const events = [
  {
    date: 'Feb 2026',
    title: 'S-1 Filed with SEC',
    description: 'Registration statement on Form S-1 filed. File No. 333-293399.',
    status: 'complete',
  },
  {
    date: 'Mar 18, 2026',
    title: 'S-1 Declared Effective',
    description: 'SEC declares registration effective. IPO priced at $10.00 per unit.',
    status: 'complete',
  },
  {
    date: 'Mar 19, 2026',
    title: 'NASDAQ Listing',
    description: 'Units begin trading on NASDAQ Global Market under ticker BHAVU.',
    status: 'complete',
  },
  {
    date: 'Mar 20, 2026',
    title: '$100M IPO Closes',
    description: '$100,000,000 deposited into trust with Continental Stock Transfer & Trust.',
    status: 'complete',
    highlight: true,
  },
  {
    date: 'TBD',
    title: 'Business Combination',
    description: '18-month window to close in Robotics, EVs, Drones & UAS, or Fintech.',
    status: 'pending',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500 uppercase mb-3">IPO Timeline</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
            From Incorporation to{' '}
            <span className="text-gradient-gold">$100M Trust</span>
          </h2>
        </motion.div>

        {/* Timeline list */}
        <div className="relative">
          {/* Vertical rule */}
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-navy-900/10 hidden sm:block" />

          <div className="space-y-0 divide-y divide-navy-900/[0.06]">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: EASE }}
                className={`relative flex items-start gap-8 py-7 ${event.status === 'pending' ? 'opacity-50' : ''}`}
              >
                {/* Date */}
                <div className="w-28 flex-shrink-0 text-right hidden sm:block">
                  <span className={`text-[11px] font-bold tracking-[0.15em] uppercase ${
                    event.highlight ? 'text-gold-500' : event.status === 'pending' ? 'text-navy-400' : 'text-navy-500'
                  }`}>
                    {event.date}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden sm:flex items-center justify-center flex-shrink-0 mt-0.5 relative z-10">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                    event.highlight
                      ? 'border-gold-400 bg-gold-400 shadow-[0_0_12px_rgba(212,168,67,0.4)]'
                      : event.status === 'pending'
                      ? 'border-navy-300 bg-white'
                      : 'border-navy-700 bg-navy-700'
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Mobile date */}
                  <span className={`sm:hidden text-[11px] font-bold tracking-[0.15em] uppercase block mb-1 ${
                    event.highlight ? 'text-gold-500' : 'text-navy-400'
                  }`}>{event.date}</span>

                  <h3 className={`font-display text-lg font-bold mb-1 ${
                    event.highlight ? 'text-navy-900' : 'text-navy-900'
                  }`}>
                    {event.title}
                    {event.highlight && (
                      <span className="ml-2.5 inline-flex items-center text-[10px] font-bold tracking-wider text-gold-500 border border-gold-400/35 rounded-full px-2 py-0.5 align-middle" style={{ fontFamily: 'var(--font-body)' }}>
                        COMPLETED
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
