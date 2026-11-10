import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getShopifySeoCopy } from '@/lib/i18n/shopifySeo'

/** The five areas of the work (target of the hero secondary CTA). */
export default function ShopifySeoScope({ locale }: { locale: Locale }) {
  const d = getShopifySeoCopy(locale).scope

  return (
    <section id="scope" className="scroll-mt-24 px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-np-h2 text-np-dark">{d.heading}</h2>
        <p className="mt-4 max-w-[760px] font-sans text-body-lg font-medium text-noprob-text">
          {parseInline(d.intro)}
        </p>
        <div className="mt-8 grid gap-4 min-[810px]:grid-cols-2">
          {d.items.map((item, i) => (
            <article key={item.title} className="flex flex-col gap-4 rounded-card border-2 border-[#d6d6d6] bg-white p-6 min-[810px]:p-8">
              <span className="font-sans text-[13px] font-semibold tracking-[0.12em] text-noprob-grey">0{i + 1}</span>
              <h3 className="font-display text-[24px] font-semibold leading-[1.15em] tracking-[-0.04em] text-np-dark">
                {item.title}
              </h3>
              <p className="font-sans text-[16px] font-medium leading-[1.5em] text-np-dark">{parseInline(item.body)}</p>
              <ul className="mt-1 flex flex-col gap-2 border-t border-[#d6d6d6] pt-4">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 font-sans text-[15px] font-medium leading-[1.5em] text-noprob-text">
                    <span aria-hidden="true" className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#121212]" />
                    <span>{parseInline(b)}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
