import { renderSection } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

/**
 * Body of the complete Shopify migration guide (/it/migrazione-shopify,
 * /shopify-migration). Same container and typography as a blog article body
 * (see app/(en)/blog/[slug]/page.tsx); the only H1 of the page is the hero's,
 * the H2/H3 come from the copy sections.
 */
export default function MigrazioneGuide({ locale = 'it' }: { locale?: Locale }) {
  const { sections } = getMigrazioneCopy(locale).guide

  return (
    <section className="flex w-full justify-center bg-[#f0f0f0] px-5 py-16 min-[810px]:px-9">
      <article className="w-full max-w-[720px]">
        {sections.map((section, idx) => renderSection(section, idx, locale))}
      </article>
    </section>
  )
}
