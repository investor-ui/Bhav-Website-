'use client'

import { motion } from 'framer-motion'

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
    <section id="timeline" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0c1020] to-[#0a0e1a]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c9a84c] uppercase">IPO Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            From Incorporation to{' '}
            <span className="text-gradient-gold">$100M Trust</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A rapid path from formation to NASDAQ listing, demonstrating disciplined execution
            and regulatory readiness.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c]/30 via-[#c9a84c]/15 to-transparent sm:-translate-x-px" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Left/right content */}
                <div className={`flex-1 sm:px-10 pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div
                    className={`inline-block p-5 rounded-xl border transition-all duration-300 ${
                      event.highlight
                        ? 'border-[#c9a84c]/35 bg-[#c9a84c]/[0.06] glow-gold-sm'
                        : event.status === 'pending'
                        ? 'border-white/8 bg-white/[0.015]'
                        : 'border-[#c9a84c]/12 bg-white/[0.02]'
                    }`}
                  >
                    <div className={`text-xs font-bold tracking-widest uppercase mb-1.5 ${
                      event.status === 'pending' ? 'text-white/30' : 'text-[#c9a84c]'
                    }`}>
                      {event.date}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed max-w-sm">{event.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center w-8 h-8 -translate-x-4 sm:translate-x-0">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    event.status === 'pending'
                      ? 'border-white/20 bg-[#0a0e1a]'
                      : event.highlight
                      ? 'border-[#c9a84c] bg-[#c9a84c] shadow-lg shadow-[#c9a84c]/30'
                      : 'border-[#c9a84c] bg-[#c9a84c]/30'
                  }`}>
                    {event.status === 'complete' && !event.highlight && (
                      <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                    )}
                  </div>
                </div>

                {/* Empty side for zigzag */}
                <div className="hidden sm:block flex-1 sm:px-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
