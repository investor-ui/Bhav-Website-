'use client'

import { motion } from 'framer-motion'
import { fadeUp, EASE } from './animations'

const events = [
  {
    date: '2025',
    title: 'Incorporation',
    description: 'BHAV Acquisition Corp incorporated in the Cayman Islands as a blank check company.',
    status: 'complete',
  },
  {
    date: 'Feb 2026',
    title: 'S-1 Filed with SEC',
    description: 'Registration statement on Form S-1 filed with the U.S. Securities and Exchange Commission. File No. 333-293399.',
    status: 'complete',
  },
  {
    date: 'Mar 18, 2026',
    title: 'S-1 Effective & IPO Priced',
    description: 'SEC declares the S-1 registration statement effective. IPO priced at $10.00 per unit with 10,000,000 units offered.',
    status: 'complete',
  },
  {
    date: 'Mar 19, 2026',
    title: 'NASDAQ Trading Begins',
    description: 'BHAV units begin trading on the NASDAQ Global Market under ticker symbol BHAVU.',
    status: 'complete',
  },
  {
    date: 'Mar 20, 2026',
    title: 'IPO Closed · $100M in Trust',
    description: 'Offering closes successfully. $100,000,000 deposited into trust account held by Continental Stock Transfer & Trust Company.',
    status: 'complete',
    highlight: true,
  },
  {
    date: 'TBD',
    title: 'Initial Business Combination',
    description: 'BHAV identifies and completes a business combination with a target in Advanced Robotics, EVs, Drones & UAS, or Fintech. Window: 18 months (extendable to 21).',
    status: 'pending',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 lg:py-32 relative overflow-hidden bg-sand-200 scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy-900/15 bg-navy-900/[0.04] mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-navy-700 uppercase">IPO Timeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            From Incorporation to{' '}
            <span className="text-gradient-gold">$100M Trust</span>
          </h2>
          <p className="text-navy-500 max-w-xl mx-auto">
            A rapid path from formation to NASDAQ listing, demonstrating disciplined execution
            and regulatory readiness.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px">
            <div className="h-full bg-gradient-to-b from-navy-900/30 via-navy-900/12 to-navy-900/5" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
                className={`relative flex items-start ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                  <motion.div
                    whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE } }}
                    className={`inline-block p-5 rounded-2xl max-w-sm ${
                      event.highlight
                        ? 'bg-navy-900 text-white'
                        : 'card-light'
                    } ${event.status === 'pending' ? 'opacity-55' : ''}`}
                  >
                    <p className={`text-[10px] font-bold tracking-widest uppercase mb-1.5 ${
                      event.status === 'pending' ? 'text-navy-400' : event.highlight ? 'text-gold-400' : 'text-gold-500'
                    }`}>
                      {event.date}
                    </p>
                    <h3 className={`font-display text-base font-bold mb-2 ${
                      event.highlight ? 'text-white' : 'text-navy-900'
                    }`}>{event.title}</h3>
                    <p className={`text-sm leading-relaxed ${
                      event.highlight ? 'text-navy-300' : 'text-navy-500'
                    }`}>{event.description}</p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-x-4 sm:translate-x-0 flex items-center justify-center z-10 mt-5">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    event.status === 'pending'
                      ? 'border-navy-400/30 bg-sand-200'
                      : event.highlight
                      ? 'border-gold-400 bg-gold-400 shadow-[0_0_16px_rgba(212,168,67,0.4)]'
                      : 'border-navy-700 bg-navy-700'
                  }`}>
                    {event.status === 'complete' && !event.highlight && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                </div>

                {/* Empty side */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
