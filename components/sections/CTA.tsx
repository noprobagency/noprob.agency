'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

import { getDictionary, type Locale } from '@/lib/i18n'

// Flat list of 24 images - Shuffled to avoid side-by-side duplicates
const FLAT_AVATARS = [
  '/images/originals/D4OlAav8RISd0opp4Z1aT4ypRXw.png', // Man glasses
  '/images/originals/QbjA7E37T5SDQiAS2aDV1zMrG4.png', // Woman short hair
  '/images/originals/w5X4QRiIXVeXf71DL6mW0nV6Awk.png', // Woman orange
  '/images/originals/UT4fxQBnxf542T5Cf7zZOvBxy0.png', // Woman black
  '/images/originals/4UX9uXT3N0WRExPOcc1r8bpVQAk.png', // Woman white
  '/images/originals/GSFkssTRojMMfTCPqH1HENDnw.png', // Woman beanie
  '/images/originals/pSEmRq7TZ5niunpklVk0dvh1mDA.png', // Woman white 2
  '/images/originals/WdMlO6P4eyTomKkSRBDtGLAio4.png', // Man curly
  '/images/originals/AcrDBNPoA5kazwDFtUC2IeoPoo.png', // Woman pink
  '/images/originals/d8p3LHFKtLnBbQ65oGYA48cZwYI.png', // Man crossed
  '/images/originals/505rrWNYkeLbF8KyvL2Owkhh7I.png', // Woman smile
  '/images/originals/AOAg5gzJT8elHJjF4ot4zv58UAE.png', // Woman side
  '/images/originals/npXLqR8zSrRQ361syHkuwTjdeds.png', // Woman orange 2
  '/images/originals/lEVDQNWDkdXcIlfM1j2Kfmp8at8.png', // Woman white 3
  '/images/originals/zRjU5BQHkKDyauYKM2E6MQnLpo.png', // Man looking up
  '/images/originals/38I07rfLJ4DXJRQZ7YXCanY6ko.png', // Woman smile 2
  '/images/originals/y3RHLfHQboDd91CD2B0QwpU4pno.png', // Woman chin
  '/images/originals/7jMr2bJ1E0BHUjGZvEWpbOHZ0.png', // Man office
  '/images/originals/D4OlAav8RISd0opp4Z1aT4ypRXw.png', // Man glasses (repeat 1)
  '/images/originals/w5X4QRiIXVeXf71DL6mW0nV6Awk.png', // Woman orange (repeat 2)
  '/images/originals/4UX9uXT3N0WRExPOcc1r8bpVQAk.png', // Woman white (repeat 3)
  '/images/originals/pSEmRq7TZ5niunpklVk0dvh1mDA.png', // Woman white 2 (repeat 4)
  '/images/originals/AcrDBNPoA5kazwDFtUC2IeoPoo.png', // Woman pink (repeat 5)
  '/images/originals/WdMlO6P4eyTomKkSRBDtGLAio4.png', // Man curly (repeat 6)
]

const wordVariants = {
  hidden: { opacity: 0, y: 8, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

const h2Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
}

function RevealWords({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').filter(Boolean).map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </>
  )
}

export default function CTA({
  locale = 'en',
  buttonLabel,
  buttonHref,
}: {
  locale?: Locale
  buttonLabel?: string
  buttonHref?: string
}) {
  const t = getDictionary(locale)
  const resolvedButtonLabel = buttonLabel ?? t.cta.buttonLabel
  const resolvedButtonHref = buttonHref ?? t.hero.ctaPrimaryHref
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Smooth rotation linked to scroll
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-40, 20])
  const rotate = useSpring(rawRotate, { stiffness: 45, damping: 15 })

  const radius = 540 // Reduced from 600 to keep avatars within the visible area

  return (
    <section
      ref={containerRef}
      className="w-full flex justify-center bg-[#f0f0f0]"
    >
      <div
        className="framer-1uqbre7 w-full max-w-[1300px] relative overflow-hidden"
        style={{
          display: 'flex',
          flexFlow: 'row',
          placeContent: 'center',
          alignItems: 'center',
          gap: '10px',
          height: '600px',
          padding: '120px 36px 0px',
        }}
      >
        {/* Images Layer */}
        <div
          className="framer-87k6nu"
          style={{
            pointerEvents: 'none',
            flexFlow: 'column',
            flex: '1 0 0',
            placeContent: 'flex-start center',
            alignItems: 'center',
            gap: '10px',
            width: '1px',
            height: '750px',
            padding: '0px',
            display: 'flex',
            position: 'relative',
            overflow: 'visible',
            zIndex: 0
          }}
        >
          {/* Circle Wrap with perspective - Exactly 15 degrees per avatar flat */}
          <div className="framer-1e3ai7j relative top-[300px]" style={{ transform: 'perspective(1200px)' }}>

            <motion.div
              className="w-[1200px] h-[1200px] relative"
              style={{ rotate, willChange: 'transform' }}
            >
              {FLAT_AVATARS.map((src, idx) => {
                const angle = idx * 15 // Perfect 15-degree increment for 24 avatars
                const radian = (angle * Math.PI) / 180
                // Integer offsets with an explicit sign: the browser serializes `calc()`
                // the same way, so server and client markup match at hydration.
                const dx = Math.round(radius * Math.sin(radian))
                const dy = Math.round(radius * Math.cos(radian))
                const offset = (v: number) => `${v < 0 ? '-' : '+'} ${Math.abs(v)}px`

                return (
                  <div
                    key={`avatar-${idx}`}
                    className="absolute flex items-center justify-center"
                    style={{
                      width: 110,
                      height: 110,
                      left: `calc(50% ${offset(dx)})`,
                      top: `calc(50% ${offset(-dy)})`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-full h-full rounded-[100px] border-[6px] border-[#f8f8f8] bg-[#f8f8f8] shadow-[0_4px_24px_rgb(108,113,128,0.12)]">
                      <div className="relative w-full h-full overflow-hidden rounded-[100px]">
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="110px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Content Layer - High z-index to stay above the blur mask */}
        <div
          className="relative z-30 flex flex-col items-center text-center w-full max-w-3xl"
          style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={h2Variants}
            className="mb-8 text-center text-np-dark text-[46px] min-[810px]:text-[56px] max-[809px]:max-w-[330px]"
            style={{ fontFamily: '"Inter Display", Inter, sans-serif', fontWeight: 600, lineHeight: '1.1em', letterSpacing: '-0.05em' }}
          >
            <RevealWords text={t.cta.heading} />
            <br className={locale === 'it' ? 'block' : 'hidden sm:block'} />
            {t.cta.headingSub && <RevealWords text={t.cta.headingSub} />}
            <motion.span variants={wordVariants} className="inline-block font-serif italic font-normal mr-[0.25em]">{t.cta.headingEm}</motion.span>
            {t.cta.headingPost && <RevealWords text={t.cta.headingPost!} />}
          </motion.h2>

          <Link
            href={resolvedButtonHref}
            className="flex items-center gap-3 overflow-hidden rounded-[50px] border-2 border-[#181818] bg-[#121212] py-2 pl-2 pr-6 hover:opacity-90"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[50px]">
              <Image
                src="/images/originals/7jMr2bJ1E0BHUjGZvEWpbOHZ0.png"
                alt="Avatar"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[16px] font-semibold tracking-tight text-[#f0f0f0]">
                {resolvedButtonLabel}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#1dcc5d]"></span>
                <span className="text-[13px] text-[#a9a9a9]">
                  {t.cta.availability}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Framer Mask / Blur Layer - Smaller height and lower z-index than content */}
        <div
          className="absolute bottom-0 left-0 z-20 h-[180px] w-full pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #f0f0f0 90%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 50%)',
            maskImage: 'linear-gradient(to bottom, transparent, black 50%)',
          }}
        />
      </div>
    </section>
  )
}
