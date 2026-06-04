'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const tickerItems = [
  'INTELLIGENT MACHINES',
  'ADVANCED ROBOTICS',
  'ELECTRIC VEHICLES',
  'DRONES & UAS',
  'FINTECH',
  'NASDAQ: BHAVU',
  '$100M TRUST',
  'S-1 EFFECTIVE',
  'MARCH 2026 IPO',
  'CONTINENTAL STOCK TRANSFER',
  'MAXIM GROUP LLC',
]

const tickerText = tickerItems.join('  •  ')

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrameId: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; r: number; alpha: number
    }> = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.4 + 0.05,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha})`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.06 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animFrameId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0e1a]"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#1a1f35] via-[#0a0e1a] to-[#05070f]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl" />
        <ParticleCanvas />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* SPAC badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#c9a84c] uppercase">
              NASDAQ Listed · BHAVU · $100M Trust
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-white">The Intelligent</span>
            <br />
            <span className="text-gradient-gold">Machines</span>
            <br />
            <span className="text-white">Capital Vehicle</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed mb-10"
        >
          $100M SPAC targeting Advanced Robotics, Electric Vehicles, Drones & UAS,
          and Fintech. Listed on NASDAQ under{' '}
          <span className="text-[#c9a84c] font-semibold">BHAVU</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="https://www.sec.gov/Archives/edgar/data/0002097288/000121390026027084/ea0269733-05.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#c9a84c] text-[#0a0e1a] font-bold text-sm tracking-wider rounded hover:bg-[#d4af5a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
          >
            Read the Prospectus
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#deal"
            className="inline-flex items-center gap-3 px-7 py-4 border border-[#c9a84c]/30 text-[#c9a84c] font-semibold text-sm tracking-wider rounded hover:bg-[#c9a84c]/8 hover:border-[#c9a84c]/50 transition-all duration-200"
          >
            View Deal Structure
          </a>
        </motion.div>

        {/* Key metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            { label: 'Trust Value', value: '$100M' },
            { label: 'Exchange', value: 'NASDAQ' },
            { label: 'IPO Price', value: '$10.00' },
            { label: 'Units Offered', value: '10M' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-lg bg-card border-gold-subtle">
              <div className="text-xl sm:text-2xl font-black text-[#c9a84c]">{stat.value}</div>
              <div className="text-xs text-white/40 tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ticker bar */}
      <div className="relative z-10 w-full border-t border-b border-[#c9a84c]/15 bg-[#c9a84c]/5 overflow-hidden py-3">
        <div className="flex whitespace-nowrap">
          <div className="ticker-animate flex gap-0">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#c9a84c]/70 pr-8">
              {tickerText} &nbsp;•&nbsp; {tickerText} &nbsp;•&nbsp; {tickerText} &nbsp;•&nbsp;
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] text-[#c9a84c]/70 pr-8">
              {tickerText} &nbsp;•&nbsp; {tickerText} &nbsp;•&nbsp; {tickerText} &nbsp;•&nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
