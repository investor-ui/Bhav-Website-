import type { Variants } from 'framer-motion'

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(6px)', scale: 0.98 },
  visible: { opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 0.7, ease: EASE } },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
}

export const wordRevealContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

export const wordRevealItem: Variants = {
  hidden: { opacity: 0, y: '110%', rotate: -1.5 },
  visible: {
    opacity: 1,
    y: '0%',
    rotate: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}
