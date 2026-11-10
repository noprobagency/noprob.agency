import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getAgentsCopy } from '@/lib/i18n/agentsEcommerce'

/** Human approval on irreversible actions: dark block. */
export default function AgentsControl({ locale }: { locale: Locale }) {
  const d = getAgentsCopy(locale).control

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div
        data-header-theme="dark"
        className="mx-auto max-w-[1000px] rounded-card-lg bg-black px-6 py-10 text-[#f0f0f0] min-[810px]:px-12 min-[810px]:py-14"
      >
        <h2 className="text-np-h2 max-w-[760px] text-[#f9f9f9]">{d.heading}</h2>
        <p className="mt-4 max-w-[760px] font-sans text-body-lg font-medium text-[#c9c9c9] [&_a]:text-[#f9f9f9] [&_a]:decoration-white/50 [&_a:hover]:decoration-white">
          {parseInline(d.body)}
        </p>
        <ul className="mt-8 grid gap-3 min-[810px]:grid-cols-2">
          {d.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-card border border-white/15 bg-white/5 p-4 font-sans text-[15px] font-medium leading-[1.5em] text-[#f0f0f0]"
            >
              <span aria-hidden="true" className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#f0f0f0]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
