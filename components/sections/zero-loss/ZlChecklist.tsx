'use client'

import { useId, useState } from 'react'

import type { ZlCopy } from '@/content/zero-loss-migration'
import { zlTrack } from '@/lib/zero-loss/tracking'
import ZlCta from './ZlCta'

type Mood = 0 | 1 | 2 | 3 | 4 | 5

/** Mouth, brows and extras per pain level: 0 = calm, 5 = panic. */
const FACES: Record<Mood, { mouth: string; brows?: string; tightEyes?: boolean; sweat?: boolean; fill: string }> = {
  0: { mouth: 'M20 38 Q32 50 44 38', fill: '#8fd694' },
  1: { mouth: 'M21 42 L43 42', fill: '#ffc04a' },
  2: { mouth: 'M21 45 Q32 38 43 45', brows: 'M17 21 L27 24 M47 21 L37 24', fill: '#ffa13d' },
  3: { mouth: 'M20 47 Q32 35 44 47', brows: 'M17 19 L27 25 M47 19 L37 25', sweat: true, fill: '#ff7a59' },
  4: { mouth: 'M20 47 Q32 35 44 47', brows: 'M16 18 L27 25 M48 18 L37 25', sweat: true, fill: '#ff6352' },
  5: { mouth: 'M22 48 Q32 30 42 48 Z', brows: 'M16 18 L27 25 M48 18 L37 25', tightEyes: true, sweat: true, fill: '#f04a42' },
}

/** Face that goes from green and calm to red and panicked with every pain ticked. */
function MoodFace({ mood }: { mood: Mood }) {
  const f = FACES[mood]
  return (
    <svg key={mood} width="72" height="72" viewBox="0 0 64 64" aria-hidden className="zl-face-pop shrink-0">
      <circle cx="32" cy="32" r="28" fill={f.fill} stroke="#121212" strokeWidth="2.5" />
      {f.tightEyes ? (
        <path d="M19 30 L27 27 M45 30 L37 27" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
      ) : (
        <>
          <circle cx="23" cy="29" r="3" fill="#121212" />
          <circle cx="41" cy="29" r="3" fill="#121212" />
        </>
      )}
      {f.brows && <path d={f.brows} stroke="#121212" strokeWidth="2.5" strokeLinecap="round" fill="none" />}
      <path d={f.mouth} stroke="#121212" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill={mood === 5 ? '#121212' : 'none'} />
      {f.sweat && <path d="M52 14 C49 19 49 23 52 24 C55 23 55 19 52 14 Z" fill="#5aa9ff" stroke="#121212" strokeWidth="1.5" />}
    </svg>
  )
}

/**
 * Section 4, Fletch interactive checklist: tick the true ones, the reaction
 * changes with the count and a face gets more stressed with every pain ticked.
 * Every item already costs money, so the panel goes green (0) → orange (1-2)
 * → red (3+) and the CTA shows from the first tick.
 */
export default function ZlChecklist({ copy }: { copy: ZlCopy['checklist'] }) {
  const [checked, setChecked] = useState<boolean[]>(() => copy.items.map(() => false))
  const baseId = useId()

  const count = checked.filter(Boolean).length
  const mood = Math.min(5, count) as Mood
  const state: 'none' | 'mid' | 'high' = count === 0 ? 'none' : count < 3 ? 'mid' : 'high'

  function toggle(index: number) {
    const next = checked.map((v, i) => (i === index ? !v : v))
    setChecked(next)
    zlTrack({ event: 'checklist_change', checked_count: next.filter(Boolean).length })
  }

  return (
    <section className="pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
        <p className="mt-2 font-sans text-[15px] font-medium tracking-[-0.02em] text-np-grey">({copy.sub})</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <ul className="flex flex-col gap-3">
            {copy.items.map((item, i) => {
              const id = `${baseId}-${i}`
              return (
                <li key={item}>
                  <label
                    htmlFor={id}
                    className={`flex cursor-pointer items-start gap-3 rounded-[12px] border bg-white px-4 py-3 transition-colors ${
                      checked[i] ? 'border-np-dark' : 'border-np-border hover:border-np-grey'
                    }`}
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => toggle(i)}
                      className="mt-[3px] h-5 w-5 shrink-0 cursor-pointer accent-[#121212]"
                    />
                    <span className="font-sans text-[15px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-dark min-[810px]:text-[16px]">
                      {item}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>

          <div
            aria-live="polite"
            className={`flex flex-col items-start justify-center gap-4 rounded-card p-6 transition-colors min-[810px]:p-8 ${
              state === 'high' ? 'bg-[#f9d2cd]' : state === 'mid' ? 'bg-[#fde3c3]' : 'bg-np-mark-green'
            }`}
          >
            <div className="flex items-center gap-4">
              <MoodFace mood={mood} />
              <span className="inline-flex items-center rounded-pill border border-np-dark bg-white px-3 py-[6px] font-serif text-[14px] italic tracking-[-0.02em] text-np-dark">
                {count}/{copy.items.length} {copy.countLabel}
              </span>
            </div>
            <p className="font-display text-[1.5rem] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark min-[810px]:text-[1.9rem]">
              {state === 'high' ? copy.reactionHigh : state === 'mid' ? copy.reactionMid : copy.reactionNone}
            </p>
            {state !== 'none' && <ZlCta label={copy.reactionHighCta} position="checklist" />}
          </div>
        </div>
      </div>
    </section>
  )
}
