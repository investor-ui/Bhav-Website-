'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedCounter } from './AnimatedCounter'
import { wordRevealContainer, wordRevealItem, blurIn } from './animations'

const tickerItems = [
  'INTELLIGENT MACHINES', 'ADVANCED ROBOTICS', 'ELECTRIC VEHICLES',
  'DRONES & UAS', 'FINTECH', 'NASDAQ: BHAVU', '$100M TRUST',
  'S-1 EFFECTIVE', 'MARCH 2026 IPO', 'CONTINENTAL STOCK TRANSFER',
]
const tickerText = tickerItems.join('  ·  ')

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf: number
    const pts: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = []

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.35 + 0.05,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,168,67,${p.a})`
        ctx.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(212,168,67,${0.07 * (1 - d / 110)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5 }} />
}

const stats = [
  { label: 'Trust Value', to: 100, prefix: '$', suffix: 'M', duration: 2.2 },
  { label: 'IPO Price', to: 10, prefix: '$', suffix: '.00', duration: 1.5, isStatic: true },
  { label: 'Units Offered', to: 10, suffix: 'M', duration: 2 },
  { label: 'Exchange', to: 0, isLabel: true, label2: 'NASDAQ' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-12%'])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0f0e0d]">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {/* Warm radial gradient — gives the "lit from within" feel */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,168,67,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(30,25,20,0.8),transparent)]" />
        <ParticleCanvas />
      </motion.div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(212,168,67,1) 1px,transparent 1px),linear-gradient(90deg,rgba(212,168,67,1) 1px,transparent 1px)',
        backgroundSize: '90px 90px',
      }} />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12"
      >
        {/* Badge */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D4A843]/25 bg-[#D4A843]/[0.07]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#D4A843] uppercase">
              NASDAQ Listed · BHAVU · $100M Trust · IPO March 2026
            </span>
          </div>
        </motion.div>

        {/* Word-by-word headline */}
        <div className="max-w-5xl mb-6">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] tracking-tight">
            {/* Line 1 */}
            <motion.div
              variants={wordRevealContainer}
              initial="hidden"
              animate="visible"
              className="block mb-1"
            >
              {['The', 'Intelligent'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                  <motion.span variants={wordRevealItem} className="inline-block text-[#F2EDE8]">{w}</motion.span>
                </span>
              ))}
            </motion.div>

            {/* Line 2 — gold */}
            <motion.div
              variants={wordRevealContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.25 } as never}
              className="block mb-1"
            >
              {['Machines'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                  <motion.span variants={wordRevealItem} className="inline-block text-gradient-gold">{w}</motion.span>
                </span>
              ))}
            </motion.div>

            {/* Line 3 */}
            <motion.div
              variants={wordRevealContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.42 } as never}
              className="block"
            >
              {['Capital', 'Vehicle'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                  <motion.span variants={wordRevealItem} className="inline-block text-[#F2EDE8]">{w}</motion.span>
                </span>
              ))}
            </motion.div>
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="text-base sm:text-lg lg:text-xl text-[#A89F94] max-w-2xl leading-relaxed mb-10"
        >
          $100M SPAC targeting Advanced Robotics, Electric Vehicles, Drones & UAS,
          and Fintech. Listed on NASDAQ under{' '}
          <span className="text-[#D4A843] font-semibold">BHAVU</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="https://www.sec.gov/Archives/edgar/data/0002097288/000121390026027084/ea0269733-05.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#D4A843] text-[#111110] font-display font-bold text-sm tracking-wider rounded-lg hover:bg-[#E0B84E] transition-all duration-200 shadow-lg shadow-[#D4A843]/20"
          >
            Read the Prospectus
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#deal"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D4A843]/30 text-[#D4A843] font-semibold text-sm tracking-wider rounded-lg hover:border-[#D4A843]/55 hover:bg-[#D4A843]/[0.07] transition-all duration-200"
          >
            View Deal Structure
          </a>
        </motion.div>

        {/* Animated stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl"
        >
          {[
            { label: 'Trust Value', display: <AnimatedCounter to={100} prefix="$" suffix="M" /> },
            { label: 'IPO Price', display: <span className="font-mono">$10.00</span> },
            { label: 'Units Offered', display: <AnimatedCounter to={10} suffix="M" /> },
            { label: 'Exchange', display: <span>NASDAQ</span> },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-xl card">
              <div className="text-xl sm:text-2xl font-display font-bold text-[#D4A843] mb-1">{s.display}</div>
              <div className="text-[10px] text-[#6B6560] tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div className="relative z-10 w-full border-t border-b border-[#D4A843]/12 bg-[#D4A843]/[0.04] overflow-hidden py-3 mt-auto">
        <div className="flex whitespace-nowrap select-none">
          <div className="ticker-animate flex">
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#D4A843]/55 pr-12">
              {tickerText} &nbsp; · &nbsp; {tickerText} &nbsp; · &nbsp; {tickerText}
            </span>
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#D4A843]/55 pr-12">
              {tickerText} &nbsp; · &nbsp; {tickerText} &nbsp; · &nbsp; {tickerText}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
