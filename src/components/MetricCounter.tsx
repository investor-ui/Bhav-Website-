'use client'

import { useEffect, useRef, useState } from 'react'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

interface Props {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function MetricCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1800,
  className = '',
  style,
}: Props) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const [glowing, setGlowing] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || triggered) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [triggered])

  useEffect(() => {
    if (!triggered) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = easeOutExpo(progress)
      setCount(parseFloat((eased * value).toFixed(decimals)))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(value)
        setGlowing(true)
        setTimeout(() => setGlowing(false), 900)
      }
    }
    requestAnimationFrame(step)
  }, [triggered, value, duration, decimals])

  return (
    <span
      ref={ref}
      className={`mono ${className}`}
      style={{
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--gold-bright)',
        textShadow: glowing ? '0 0 28px rgba(242,194,78,0.65)' : 'none',
        transition: 'text-shadow 400ms ease',
        ...style,
      }}
    >
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}
