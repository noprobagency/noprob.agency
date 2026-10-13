import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlRail from './ZlRail'

/**
 * Section 7 (not in Fletch): same card pattern as the 4 result cards, on a
 * black background to stand apart. Keyword in bold, then the guarantee.
 */
export default function ZlGuarantees({ copy }: { copy: ZlCopy['guarantees'] }) {
  return (
    <section data-header-theme="dark" className="mt-14 bg-black py-12 min-[810px]:mt-28 min-[810px]:py-20">
      <div className="container-noprob">
        <h2 className="text-np-h2 text-[#f9f9f9]">{copy.h2}</h2>
        <p className="mt-3 max-w-[640px] font-sans text-[16px] font-medium leading-[1.5em] tracking-[-0.02em] text-[#c9c9c9]">{copy.sub}</p>

        <ZlRail tone="light" className="mt-6 grid gap-4 min-[810px]:mt-10 min-[600px]:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map((card) => (
            <li key={card.key} className="flex flex-col rounded-card border border-[rgb(54,54,54)] bg-[rgb(24,24,24)] p-5 min-[810px]:p-6">
              <span className="font-display text-[1.6rem] font-semibold leading-[1em] tracking-[-0.05em] text-np-green">{card.key}</span>
              <p className="mt-4 font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-[#f0f0f0]">{card.text}</p>
            </li>
          ))}
        </ZlRail>

        <p className="mt-6 font-sans text-[14px] min-[810px]:mt-8 font-medium leading-[1.5em] tracking-[-0.02em] text-[#a9a9a9]">{copy.line}</p>
      </div>
    </section>
  )
}
