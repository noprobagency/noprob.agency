import type { ZlCopy } from '@/content/zero-loss-migration'
import { renderCopy } from './Placeholder'
import ZlMockup from './ZlMockups'

/**
 * Section 5, Fletch "Our solution... this is what you get": one block per
 * deliverable, text and image alternating sides, then the two "after the
 * sprint" cards.
 */
export default function ZlDeliverables({ copy }: { copy: ZlCopy['deliverables'] }) {
  return (
    <section className="pt-20 min-[810px]:pt-28">
      <div className="container-noprob">
        <div className="max-w-[760px]">
          <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
          <p className="mt-2 font-sans text-[15px] font-medium tracking-[-0.02em] text-np-grey">({copy.sub})</p>
        </div>

        <ol className="mt-10 flex flex-col gap-12 min-[810px]:mt-14 min-[810px]:gap-16">
          {copy.items.map((item, i) => {
            const imageRight = i % 2 === 0
            return (
              <li
                key={item.title}
                className={`grid items-center gap-6 min-[810px]:grid-cols-2 min-[810px]:gap-12 ${
                  imageRight ? '' : 'min-[810px]:[&>*:first-child]:order-2'
                }`}
              >
                <div>
                  <span className="font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-np-grey">
                    {copy.labelPrefix} {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-[1.6rem] font-semibold leading-[1.15em] tracking-[-0.05em] text-np-dark min-[810px]:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-sans text-[16px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">
                    {renderCopy(item.paragraph)}
                  </p>
                </div>
                <ZlMockup kind={item.mockup} label={item.imageAlt} />
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
