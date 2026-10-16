'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy, type MigrazioneCopy } from '@/lib/i18n/migrazione'

// Per-phase label colors (green / purple / blue), dark text.
const BADGE_COLORS = [
  'bg-[rgb(206,232,204)] text-[rgb(24,24,24)]',
  'bg-[rgb(219,204,232)] text-[rgb(24,24,24)]',
  'bg-[rgb(204,225,232)] text-[rgb(24,24,24)]',
]

export default function MigrazioneProcess({
  locale = 'it',
  copy,
}: {
  locale?: Locale
  copy?: MigrazioneCopy['process']
}) {
  const d = copy ?? getMigrazioneCopy(locale).process

  return (
    <section className="pb-[32px] pt-[40px]">
      <div className="container-noprob">
        {/* Header */}
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark text-center">
            {d.headingPart1}
            <em className="font-serif italic">{d.headingEm}</em>
          </h2>
          <p className="mt-5 whitespace-pre-line font-sans text-body-lg font-medium text-noprob-text">
            {d.description}
          </p>
        </div>

        {/* Phase cards - single column, label + title on one line, full-width description */}
        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4">
          {d.phases.map((phase, i) => (
            <motion.article
              key={phase.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-card-thick shadow-card flex flex-col gap-3 overflow-visible rounded-card bg-noprob-card p-6 min-[810px]:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex shrink-0 rounded-[8px] px-3 py-[5px] font-sans text-[12px] font-bold tracking-[0.04em] ${BADGE_COLORS[i % BADGE_COLORS.length]}`}
                >
                  {locale === 'it' ? 'Fase' : 'Phase'} {phase.number}
                </span>
                <h3 className="font-serif text-[24px] font-medium leading-[1.2em] tracking-[-0.05em] text-noprob-text">
                  {phase.title}
                </h3>
                <span className="font-serif text-[13px] font-medium italic tracking-[-0.02em] text-noprob-grey min-[520px]:ml-auto">
                  {phase.duration}
                </span>
              </div>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {phase.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Why 14 days - full-width horizontal card (yellow border) */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="shadow-card mx-auto mt-4 flex max-w-[800px] flex-col gap-4 overflow-visible rounded-card border-[6px] border-[rgb(255_222_0_/_30%)] bg-noprob-card p-6 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-6 min-[810px]:p-8"
        >
          <Image
            src="/images/originals/BwTYAhLAepLBYZo2TxC9P40G5aU.png"
            alt=""
            width={55}
            height={55}
            className="h-[55px] w-[55px] shrink-0 object-cover"
            aria-hidden
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-np-h3 text-noprob-text">{d.fourMonths.title}</h3>
            <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
              {d.fourMonths.description}
            </p>
          </div>
        </motion.article>

        {/* Closing line */}
        <p className="mx-auto mt-8 max-w-[640px] whitespace-pre-line text-center font-sans text-body-lg font-medium text-noprob-text">
          {d.closingLine}
        </p>
      </div>
    </section>
  )
}
