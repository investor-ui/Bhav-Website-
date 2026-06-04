'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedCounter } from './AnimatedCounter'
import { wordRevealContainer, wordRevealItem, blurIn, EASE } from './animations'

const tickerItems = [
  'INTELLIGENT MACHINES', 'ADVANCED ROBOTICS', 'ELECTRIC VEHICLES',
  'DRONES & UAS', 'FINTECH', 'NASDAQ: BHAVU', '$100M TRUST',
  'S-1 EFFECTIVE', 'MARCH 2026 IPO',
]
const tickerText = tickerItems.join('  ·  ')

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-8%'])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {/* Subtle gold radial at top */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(212,168,67,0.07) 0%, transparent 65%)',
        }} />
        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }} />
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-900 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16"
      >
        {/* Badge */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold-400/25 bg-gold-400/[0.07]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
              NASDAQ Listed · BHAVU · $100M Trust · IPO March 2026
            </span>
          </div>
        </motion.div>

        {/* Large serif headline — centered editorial style */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="font-display leading-[1.06] tracking-tight" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
            <motion.div
              variants={wordRevealContainer}
              initial="hidden"
              animate="visible"
              className="block"
            >
              {['The', 'Intelligent'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                  <motion.span variants={wordRevealItem} className="inline-block text-white">{w}</motion.span>
                </span>
              ))}
            </motion.div>
            <motion.div
              variants={wordRevealContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.2 } as never}
              className="block"
            >
              <span className="inline-block overflow-hidden">
                <motion.span variants={wordRevealItem} className="inline-block text-gradient-gold">Machines</motion.span>
              </span>
            </motion.div>
            <motion.div
              variants={wordRevealContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.36 } as never}
              className="block"
            >
              {['Capital', 'Vehicle'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                  <motion.span variants={wordRevealItem} className="inline-block text-white">{w}</motion.span>
                </span>
              ))}
            </motion.div>
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.72, ease: EASE }}
          className="text-center text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-navy-300"
        >
          $100M SPAC targeting Advanced Robotics, Electric Vehicles,
          Drones &amp; UAS, and Fintech. Listed on NASDAQ under{' '}
          <span className="text-gold-400 font-semibold">BHAVU</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.88, ease: EASE }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://www.sec.gov/Archives/edgar/data/0002097288/000121390026027084/ea0269733-05.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gold-400 text-navy-900 font-bold text-sm tracking-wider rounded hover:bg-gold-300 transition-all duration-200"
          >
            Read the Prospectus
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#deal"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/[0.18] text-navy-100 text-sm tracking-wider rounded hover:border-gold-400/50 hover:text-gold-400 transition-all duration-200"
          >
            View Deal Structure
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.02, ease: EASE }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px max-w-3xl mx-auto overflow-hidden rounded-xl"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          {[
            { label: 'Trust Value', display: <AnimatedCounter to={100} prefix="$" suffix="M" /> },
            { label: 'IPO Price', display: <span className="font-mono">$10.00</span> },
            { label: 'Units Offered', display: <AnimatedCounter to={10} suffix="M" /> },
            { label: 'Exchange', display: <span>NASDAQ</span> },
          ].map((s) => (
            <div key={s.label} className="px-6 py-5 bg-navy-900">
              <div className="text-xl sm:text-2xl font-display font-bold text-gold-400 mb-1">{s.display}</div>
              <div className="text-[10px] tracking-widest uppercase text-navy-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div className="relative z-10 w-full overflow-hidden py-3 mt-auto border-t border-gold-400/10 bg-gold-400/[0.03]">
        <div className="flex whitespace-nowrap select-none">
          <div className="ticker-animate flex">
            <span className="text-[11px] font-bold tracking-[0.18em] pr-12 text-gold-400/45">
              {tickerText} &nbsp; · &nbsp; {tickerText} &nbsp; · &nbsp; {tickerText}
            </span>
            <span className="text-[11px] font-bold tracking-[0.18em] pr-12 text-gold-400/45">
              {tickerText} &nbsp; · &nbsp; {tickerText} &nbsp; · &nbsp; {tickerText}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
