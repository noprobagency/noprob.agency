'use client'

import { motion } from 'framer-motion'

import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export default function AiScope({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).scope

  return (
    <section className="pb-0 pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-np-h2 text-center text-np-dark">
            {d.headingPart1}
            <em className="font-serif italic">{d.headingEm}</em>
            {d.headingEnd}
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 min-[810px]:grid-cols-2">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-card-thick shadow-card rounded-card bg-noprob-card p-6 min-[810px]:p-8"
          >
            <h3 className="text-np-h3 text-noprob-text">
              <span aria-hidden className="mr-2 font-semibold text-[color:var(--ai-accent-text)]">
                ✓
              </span>
              {d.includedTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {d.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text"
                >
                  <span aria-hidden className="mt-[1px] shrink-0 font-semibold text-[color:var(--ai-accent-text)]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not included */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-card-thick shadow-card rounded-card bg-noprob-card p-6 min-[810px]:p-8"
          >
            <h3 className="text-np-h3 text-noprob-grey">
              <span aria-hidden className="mr-2 font-semibold text-noprob-grey">
                ✕
              </span>
              {d.excludedTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {d.excluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-grey"
                >
                  <span aria-hidden className="mt-[1px] shrink-0 font-semibold text-noprob-grey">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="mx-auto mt-6 max-w-[720px] text-center font-sans text-body-sm font-medium leading-[1.6em] text-noprob-grey">
          {d.note}
        </p>
      </div>
    </section>
  )
}
