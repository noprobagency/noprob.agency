import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlRail from './ZlRail'

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-[2px] shrink-0">
      <circle cx="12" cy="12" r="10" fill={muted ? '#d6d6d6' : '#121212'} />
      <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Section 10: two equal-height columns, included vs partner services. No CTA.
 */
export default function ZlScope({ copy }: { copy: ZlCopy['scope'] }) {
  return (
    <section className="pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>

        <ZlRail className="mt-6 grid gap-4 min-[810px]:mt-8 min-[810px]:grid-cols-2 min-[810px]:items-stretch">
          <li className="section-card h-full list-none !gap-4">
            <h3 className="font-sans text-[18px] font-bold tracking-[-0.03em] text-np-dark">{copy.includedTitle}</h3>
            <ul className="flex flex-col gap-3">
              {copy.included.map((item) => (
                <li key={item} className="flex gap-3 font-sans text-[15px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-text">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </li>
          <li className="flex h-full list-none flex-col gap-4 rounded-card border-2 border-np-border p-6">
            <h3 className="font-sans text-[18px] font-bold tracking-[-0.03em] text-np-dark">{copy.partnersTitle}</h3>
            <ul className="flex flex-col gap-3">
              {copy.partners.map((item) => (
                <li key={item} className="flex gap-3 font-sans text-[15px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-text">
                  <CheckIcon muted />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ZlRail>

        <p className="mt-6 font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-grey">{copy.line}</p>
      </div>
    </section>
  )
}
