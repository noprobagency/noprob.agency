'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { ZapIcon } from '@/components/sections/ai/PowerLayer'
import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export default function AiTimeline({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).timeline
  const listRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  // The connecting "cable" charges progressively as the timeline scrolls
  // through the viewport (transform-only: scaleY on the accent overlay).
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 0.75', 'end 0.6'],
  })
  const charge = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 })

  return (
    <section className="pb-[32px] pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.headingPart1}
            <em className="font-serif italic">{d.headingEm}</em>
            {d.headingEnd}
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.intro}</p>
        </div>

        {/* Goal of the month - highlighted with the electric accent */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="ai-form-card mx-auto mt-8 flex max-w-[800px] flex-col gap-3 rounded-[16px] p-6 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-6 min-[810px]:p-8"
        >
          <span
            aria-hidden
            className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[rgba(47,107,255,0.14)] text-[color:var(--ai-accent)]"
          >
            <ZapIcon size={22} />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-np-h3 text-noprob-text">{d.goalBox.title}</h3>
            <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
              {d.goalBox.text}
            </p>
          </div>
        </motion.div>

        {/* Phase cards connected by the charging cable */}
        <div ref={listRef} className="relative mx-auto mt-8 flex max-w-[800px] flex-col gap-4 pl-7 min-[810px]:pl-10">
          {/* Cable: static track + accent charge linked to scroll */}
          <div aria-hidden="true" className="pointer-events-none absolute bottom-6 left-[9px] top-6 w-[2px] rounded bg-[#dcdcdc] min-[810px]:left-[13px]">
            <motion.div
              className="absolute inset-x-0 top-0 origin-top rounded bg-[color:var(--ai-accent)]"
              style={{
                height: '100%',
                scaleY: reducedMotion ? 1 : charge,
                boxShadow: '0 0 10px var(--ai-accent-glow)',
              }}
            />
          </div>

          {d.phases.map((phase, i) => (
            <motion.article
              key={phase.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-card-thick shadow-card relative flex flex-col gap-3 overflow-visible rounded-card bg-noprob-card p-6 min-[810px]:p-8"
            >
              {/* Node on the cable: lights up when the phase enters the viewport */}
              <motion.span
                aria-hidden="true"
                initial={{ backgroundColor: '#dcdcdc', boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                whileInView={{
                  backgroundColor: 'var(--ai-accent)',
                  boxShadow: '0 0 12px var(--ai-accent-glow)',
                }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                className="absolute -left-[24px] top-8 h-[12px] w-[12px] rounded-full min-[810px]:-left-[33px]"
              />

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex shrink-0 rounded-[8px] bg-[rgba(47,107,255,0.12)] px-3 py-[5px] font-sans text-[12px] font-bold tracking-[0.04em] text-[color:var(--ai-accent-text)]">
                  {d.phaseLabel} {phase.number}
                </span>
                <h3 className="font-serif text-[24px] font-medium leading-[1.2em] tracking-[-0.05em] text-noprob-text">
                  {phase.title}
                </h3>
                <span className="font-serif text-[13px] font-medium italic tracking-[-0.02em] text-noprob-grey min-[520px]:ml-auto">
                  {phase.week}
                </span>
              </div>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {phase.description}
              </p>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                <span className="font-semibold text-[color:var(--ai-accent-text)]">{phase.outputLabel}:</span>{' '}
                {phase.output}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Why a month - note card (same treatment as the migration "Why 4 months?") */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="shadow-card mx-auto mt-4 flex max-w-[800px] flex-col gap-4 overflow-visible rounded-card border-[6px] border-[rgba(47,107,255,0.22)] bg-noprob-card p-6 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-6 min-[810px]:p-8"
        >
          <span
            aria-hidden
            className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[rgba(47,107,255,0.12)] text-[color:var(--ai-accent)]"
          >
            <ZapIcon size={22} />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-np-h3 text-noprob-text">{d.note.title}</h3>
            <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">{d.note.text}</p>
          </div>
        </motion.article>

        {/* Tagline */}
        <p className="mx-auto mt-8 max-w-[640px] text-center font-sans text-body-lg font-medium text-noprob-text">
          {d.tagline}
        </p>
      </div>
    </section>
  )
}
