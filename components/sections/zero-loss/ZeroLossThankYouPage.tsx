import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import { TidyCalEmbed } from '@/components/thank-you/TidyCalEmbed'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { getZeroLossCopy } from '@/content/zero-loss-migration'

import ZlNav from './ZlNav'
import ZlDashboardLink from './ZlDashboardLink'

const CARD = 'rounded-[16px] border-[6px] border-[#f8f8f8] bg-white'
const WHATSAPP_NUMBER = '393204063459'

/**
 * Confirmation page of the Shopify Launch Sprint application
 * (/it/sprint-migrazione-shopify/grazie, /shopify-migration-sprint/thank-you).
 * Repeats the landing promise (reply within 48 hours with tier and kickoff
 * date), links the day-1 demo dashboard and offers WhatsApp or a TidyCal slot
 * to whoever wants to bring the call forward. The Lead event was already fired
 * by the form on submit, so this page fires nothing.
 */
export default function ZeroLossThankYouPage({ locale }: { locale: Locale }) {
  const copy = getZeroLossCopy(locale)
  const t = copy.thankYou
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappText)}`

  return (
    <div className="flex min-h-dvh flex-col">
      <ZlNav locale={locale} copy={copy.nav} page="thankYou" />
      <main className="flex flex-1 items-start">
        <section className="mx-auto w-full max-w-[1360px] px-5 py-6 min-[810px]:px-9 lg:py-4">
          <div className={`flex flex-col gap-4 p-3 min-[810px]:p-4 lg:flex-row lg:gap-6 lg:p-3 ${CARD}`}>
            {/* Left: confirmation, promise, next steps */}
            <div className={`flex w-full flex-col justify-center gap-5 p-5 min-[810px]:p-8 lg:w-[46%] lg:shrink-0 ${CARD}`}>
              <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-np-bg px-3 py-[6px] font-sans text-[12px] font-semibold tracking-[-0.02em] text-np-dark">
                <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-[#1dcc5d]" />
                {t.badge}
              </span>
              <h1 className="font-sans text-[2.2rem] font-semibold leading-[1.05em] tracking-[-0.06em] text-black [text-wrap:balance] min-[810px]:text-[2.6rem] min-[1400px]:text-[3.2rem]">
                {t.h1Pre} <em className="font-serif font-normal italic">{t.h1Em}</em>
              </h1>
              <p className="font-sans text-[16px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text min-[810px]:text-[18px]">
                {t.text}
              </p>

              <div>
                <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-np-grey">{t.nextTitle}</h2>
                <ol className="mt-3 flex flex-col gap-2">
                  {t.next.map((item, i) => (
                    <li key={item} className="flex gap-3 font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-np-bg font-display text-[12px] font-bold text-np-dark">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <ZlDashboardLink label={t.dashboardCta} position="success" locale={locale} />
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tracking="zl_thank_you_whatsapp"
                  className="flex items-center gap-3 overflow-hidden rounded-pill border-2 border-[#181818] bg-[#121212] py-2 pl-2 pr-5 transition-opacity hover:opacity-90"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span className="flex flex-col text-left">
                    <span className="text-[15px] font-semibold tracking-tight text-[#f0f0f0]">{t.whatsapp}</span>
                    <span className="text-[12px] text-[#a9a9a9]">{t.whatsappNote}</span>
                  </span>
                </a>
              </div>

              <Link
                href={ROUTE_PATHS.zeroLossMigration[locale]}
                className="w-fit font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey underline underline-offset-4 hover:text-np-dark"
              >
                {t.back}
              </Link>
            </div>

            {/* Right: booking */}
            <div className={`flex w-full flex-col gap-3 p-4 min-[810px]:p-6 lg:flex-1 ${CARD}`}>
              <h2 className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-np-dark">{t.bookTitle}</h2>
              <p className="font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{t.bookText}</p>
              <TidyCalEmbed path="noprobagency/contacts" />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} bar />
    </div>
  )
}
