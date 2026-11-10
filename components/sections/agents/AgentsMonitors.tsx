import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getAgentsCopy } from '@/lib/i18n/agentsEcommerce'
import { AGENTS_MONITOR_LABELS } from '@/lib/i18n/agentsLabels'

/** Areas agents can watch: what they watch, what they flag, what stays with the team. */
export default function AgentsMonitors({ locale }: { locale: Locale }) {
  const d = getAgentsCopy(locale).monitors
  const labels = AGENTS_MONITOR_LABELS[locale]

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-np-h2 max-w-[760px] text-np-dark">{d.heading}</h2>
        <p className="mt-4 max-w-[760px] font-sans text-body-lg font-medium text-noprob-text">
          {parseInline(d.intro)}
        </p>
        <div className="mt-8 flex flex-col gap-3">
          {d.items.map((item) => (
            <div
              key={item.area}
              className="grid gap-3 rounded-card border-2 border-[#d6d6d6] bg-white p-5 min-[810px]:grid-cols-[150px_1fr_1fr_0.7fr] min-[810px]:gap-6 min-[810px]:p-6"
            >
              <h3 className="font-display text-[20px] font-semibold tracking-[-0.04em] text-np-dark">{item.area}</h3>
              {(
                [
                  ['watches', item.watches],
                  ['flags', item.flags],
                  ['yourCall', item.yourCall],
                ] as const
              ).map(([key, text]) => (
                <div key={key}>
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-noprob-grey">
                    {labels[key]}
                  </p>
                  <p className="mt-1 font-sans text-[15px] font-medium leading-[1.5em] text-np-dark">{parseInline(text)}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
