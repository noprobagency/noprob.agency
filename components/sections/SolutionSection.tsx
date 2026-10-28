'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

const solutionImages = [
  '/images/originals/mLxRO32RYdrkA8A3LeYtI1YsShQ.png',
  '/images/originals/VsUV6XwKbarU0lTCxeyHOgrVaCU.png',
  '/images/originals/Vcll2J5RvsXWeyROzs7IjM4yiY.png',
]

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function SolutionSection({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)

  return (
    <section className="pb-0 pt-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{t.solution.label}</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-[660px] text-np-h2 text-np-dark text-center">
            {t.solution.headingPre.split('\n')[0]}<br />
            <span>{t.solution.headingPre.split('\n')[1]}<br /></span>
            <mark className="bg-[rgb(206,232,204)] px-2 font-serif italic text-noprob-text">
              {t.solution.headingMark}
            </mark>
            .
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 lg:grid-cols-3">
          {t.solution.items.map((solution, i) => (
            <motion.article
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className={`section-card${i === 2 ? ' !px-[18px]' : ''}`}
            >
              <Image
                src={solutionImages[i]}
                alt=""
                width={55}
                height={55}
                className="h-[55px] w-[55px] object-cover"
                aria-hidden
              />
              <h3 className="text-np-h3 text-noprob-text">
                {solution.title.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < solution.title.split('\n').length - 1 && <>{' '}<br /></>}</span>
                ))}
              </h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {solution.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
