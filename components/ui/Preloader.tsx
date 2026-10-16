'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LOGO_TEXT = 'noprob'

/** Hard stop: whatever happens to the animation, the overlay is gone after this. */
const MAX_VISIBLE_MS = 2200

const charVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

/**
 * Intro overlay with the "noprob" wordmark. Rendered only by the two homepages
 * (app/(en)/page.tsx, app/it/page.tsx), never by a layout: a layout-level
 * check on the pathname breaks hydration on not-found renders, where the
 * server-side pathname is not the requested URL.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<'in' | 'exit' | 'done'>('in')

  useEffect(() => {
    // Visitors who asked for less motion never see the intro.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done')
      return
    }
    // Safety net: never leave the page covered if an animation callback is lost.
    const timer = window.setTimeout(() => setPhase('done'), MAX_VISIBLE_MS)
    return () => window.clearTimeout(timer)
  }, [])

  if (phase === 'done') return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-noprob-bg"
      initial={{ y: 0 }}
      animate={{ y: phase === 'exit' ? '-100%' : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === 'exit') setPhase('done')
      }}
    >
      <motion.div
        className="flex"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
        }}
        onAnimationComplete={() => {
          setTimeout(() => setPhase('exit'), 400)
        }}
      >
        {LOGO_TEXT.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            className="font-serif italic text-[64px] font-normal leading-none tracking-[-0.05em] text-[#121212]"
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          variants={charVariants}
          className="font-serif text-[28px] font-normal leading-none text-[#121212] self-start mt-[6px]"
        >
          ®
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
