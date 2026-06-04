import type { Variants } from 'framer-motion'

// Premium expo-out easing — confirmed across all top VC/finance repos
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: EASE } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
}

// Word-by-word reveal with subtle 3D tilt on entry
export const wordRevealContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
}

export const wordRevealItem: Variants = {
  hidden: { opacity: 0, y: '110%', rotate: -2 },
  visible: {
    opacity: 1,
    y: '0%',
    rotate: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}
