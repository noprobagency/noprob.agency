import type { ZlCopy } from '@/content/zero-loss-migration'
import { renderCopy } from './Placeholder'
import ZlMockup from './ZlMockups'
import ZlRail from './ZlRail'

/**
 * Section 5, Fletch "Our solution... this is what you get": one block per
 * deliverable, text and image alternating sides, then the two "after the
 * sprint" cards.
 */
export default function ZlDeliverables({ copy }: { copy: ZlCopy['deliverables'] }) {
  return (
    <section className="pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <div className="max-w-[760px]">
          <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
          <p className="mt-2 font-sans text-[15px] font-medium tracking-[-0.02em] text-np-grey">({copy.sub})</p>
        </div>

        <ZlRail as="ol" className="mt-6 flex flex-col gap-12 min-[810px]:mt-14 min-[810px]:gap-16">
          {copy.items.map((item, i) => {
            const imageRight = i % 2 === 0
            return (
              <li
                key={item.title}
                id={`deliverable-${i + 1}`}
                className={`scroll-mt-28 flex flex-col gap-4 rounded-card border border-black/[0.06] bg-white p-3 min-[810px]:grid min-[810px]:grid-cols-2 min-[810px]:items-center min-[810px]:gap-12 min-[810px]:border-0 min-[810px]:bg-transparent min-[810px]:p-0 ${
                  imageRight ? '' : 'min-[810px]:[&>*:first-child]:order-2'
                }`}
              >
                <div className="px-2 pb-2 min-[810px]:p-0">
                  <span className="inline-flex rounded-[8px] bg-np-mark-purple px-3 py-[5px] font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-np-dark">
                    {copy.labelPrefix} {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[1.35rem] font-semibold leading-[1.15em] tracking-[-0.05em] text-np-dark min-[810px]:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text min-[810px]:mt-4 min-[810px]:text-[16px] min-[810px]:leading-[1.55em]">
                    {renderCopy(item.paragraph)}
                  </p>
                </div>
                <div className="-order-1 min-[810px]:order-none">
                  <ZlMockup kind={item.mockup} label={item.imageAlt} />
                </div>
              </li>
            )
          })}
        </ZlRail>
      </div>
    </section>
  )
}
