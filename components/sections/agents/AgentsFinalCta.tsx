import Link from 'next/link'

import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getAgentsCopy } from '@/lib/i18n/agentsEcommerce'
import { routeCrumb } from '@/lib/seo/breadcrumbs'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { AGENTS_BOOKING_URL } from './constants'

/** Closing CTA: call on TidyCal, contacts page as secondary, background reading link. */
export default function AgentsFinalCta({ locale }: { locale: Locale }) {
  const d = getAgentsCopy(locale).finalCta
  const contactsLabel = routeCrumb('contacts', locale).name

  return (
    <section className="px-5 pb-[64px] pt-10 min-[810px]:px-9">
      <div
        data-header-theme="dark"
        className="mx-auto flex max-w-[800px] flex-col items-center gap-4 rounded-card-lg bg-black px-6 py-12 text-center min-[810px]:px-12"
      >
        <h2 className="text-np-h2-sm font-display text-[#f9f9f9] min-[810px]:text-[2.4rem] min-[810px]:leading-[1.15em] min-[810px]:tracking-[-0.05em]">
          {d.heading}
        </h2>
        <p className="max-w-[560px] font-sans text-body-lg font-medium text-[#c9c9c9]">{d.body}</p>
        <div className="mt-2 flex flex-col items-center gap-4 min-[810px]:flex-row min-[810px]:gap-6">
          <a
            href={AGENTS_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-tracking="agents_final_cta"
            className="button-principal !bg-[#f0f0f0] !text-[#121212]"
          >
            {d.button}
          </a>
          <Link
            href={ROUTE_PATHS.contacts[locale]}
            data-tracking="agents_contact_cta"
            className="font-sans text-[16px] font-medium text-[#f0f0f0] underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
          >
            {contactsLabel}
          </Link>
        </div>
        <p className="max-w-[560px] font-sans text-[15px] font-medium text-[#c9c9c9] [&_a]:text-[#f9f9f9] [&_a]:decoration-white/50 [&_a:hover]:decoration-white">
          {parseInline(d.secondary)}
        </p>
      </div>
    </section>
  )
}
