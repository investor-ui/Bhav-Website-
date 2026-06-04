'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Props {
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({ to, prefix = '', suffix = '', decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const raw = useMotionValue(0)
  // Spring feels more organic than linear easeOut
  const spring = useSpring(raw, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
  )
  const inView = useInView(ref, { once: true, margin: '-30px' })

  useEffect(() => {
    if (inView) raw.set(to)
  }, [inView, raw, to])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}<motion.span>{display}</motion.span>{suffix}
    </span>
  )
}
