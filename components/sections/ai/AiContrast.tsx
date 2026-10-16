'use client'

import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export default function AiContrast({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).contrast

  return (
    <section className="pb-0 pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto w-full max-w-[720px]">
          <div className="mx-auto mb-10 max-w-[640px] text-center">
            <SectionLabel>{d.label}</SectionLabel>
            <h2 className="mt-5 text-np-h2 text-center text-np-dark">
              {d.headingPart1}
              <span className="font-serif italic">{d.headingEm}</span>
              {d.headingEnd}
            </h2>
            <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.intro}</p>
          </div>

          <div className="grid gap-6 min-[810px]:grid-cols-2">
            {/* Without context */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="mb-[9px] flex items-center gap-[7px] text-[14px] font-semibold text-[#C0392B]">
                {d.left.tag}
              </div>
              <ul className="overflow-hidden rounded-[14px] border border-[#E4E6EB] bg-white p-5">
                {d.left.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 border-b border-[#f0f0f0] py-2 font-sans text-[14px] font-medium leading-[1.5em] text-noprob-grey last:border-b-0"
                  >
                    <span aria-hidden className="mt-[1px] shrink-0 text-noprob-grey">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* With context (accent highlighted) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="mb-[9px] flex items-center gap-[7px] text-[14px] font-semibold text-[color:var(--ai-accent-text)]">
                {d.right.tag}
              </div>
              <ul
                className="overflow-hidden rounded-[14px] border-2 border-[color:var(--ai-accent)] bg-white p-5"
                style={{ boxShadow: '0 0 18px var(--ai-accent-glow)' }}
              >
                {d.right.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 border-b border-[#f0f0f0] py-2 font-sans text-[14px] font-medium leading-[1.5em] text-noprob-text last:border-b-0"
                  >
                    <span aria-hidden className="mt-[1px] shrink-0 font-semibold text-[color:var(--ai-accent-text)]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="mt-[22px] text-center text-[14px] text-[#555]">{d.closing}</p>
        </div>
      </div>
    </section>
  )
}
