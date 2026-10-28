import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import type { ArticleSection } from '@/data/articles'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

/** Case study CTA: the main action is the Shopify Launch Sprint, the generic contact is secondary. */
const CTA_COPY: Record<Locale, { heading: string; body: string; button: string; secondary: string }> = {
  en: {
    heading: 'Want the same method on your store?',
    body: 'The Shopify Launch Sprint moves your store to Shopify in 14 days: a fixed calendar, a public price and 4 written guarantees.',
    button: 'See the Shopify Launch Sprint',
    secondary: 'Prefer to talk first? Contact us',
  },
  it: {
    heading: 'Vuoi lo stesso metodo sul tuo store?',
    body: 'Lo Shopify Launch Sprint porta il tuo store su Shopify in 14 giorni: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    button: 'Scopri lo Shopify Launch Sprint',
    secondary: 'Preferisci parlarne prima? Contattaci',
  },
}

const INLINE_LINK_CLASS =
  'font-medium text-[#1c1c1c] underline underline-offset-4 decoration-[#1c1c1c]/40 hover:decoration-[#1c1c1c] transition-colors'

/**
 * Parse a string with markdown-style inline tokens into React nodes.
 * Supports:
 *   [text](url)   -> Next Link for internal, <a target="_blank" rel="noopener noreferrer"> for http(s)
 *   **text**      -> <strong>
 * Tokens are matched in a single pass; nesting is not supported (each pattern
 * is at the same level, which is sufficient for blog body copy).
 */
export function parseInline(text: string): ReactNode[] {
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined && match[2] !== undefined) {
      const linkText = match[1]
      const url = match[2]
      const isExternal = /^https?:\/\//i.test(url)
      if (isExternal) {
        nodes.push(
          <a
            key={key++}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={INLINE_LINK_CLASS}
          >
            {linkText}
          </a>
        )
      } else {
        nodes.push(
          <Link key={key++} href={url} className={INLINE_LINK_CLASS}>
            {linkText}
          </Link>
        )
      }
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={key++}>{match[3]}</strong>)
    }
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes
}

export function renderSection(section: ArticleSection, idx: number, locale: Locale = 'en') {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={idx}
          className="mb-4 mt-[60px] font-sans font-semibold tracking-[-0.05em] leading-[1.15em] text-black"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
        >
          {section.text}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={idx}
          className="mb-3 mt-[40px] font-sans font-semibold tracking-[-0.04em] leading-[1.3em] text-black text-[22px]"
        >
          {section.text}
        </h3>
      )
    case 'paragraph':
      return (
        <p
          key={idx}
          className="article-body mb-5 font-sans font-medium tracking-[-0.02em] text-[#1c1c1c]"
        >
          {parseInline(section.text)}
        </p>
      )
    case 'image':
      return (
        <figure
          key={idx}
          className="my-8 mx-auto overflow-hidden rounded-[16px]"
          style={section.maxWidth ? { maxWidth: section.maxWidth } : undefined}
        >
          <Image
            src={section.src}
            alt={section.alt ?? ''}
            width={section.width ?? 1400}
            height={section.height ?? 900}
            className="h-auto w-full object-contain"
          />
        </figure>
      )
    case 'list':
      return (
        <ul key={idx} className="mb-5 list-disc pl-6 space-y-2">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="article-body font-sans font-medium tracking-[-0.02em] text-[#1c1c1c]"
            >
              {parseInline(item)}
            </li>
          ))}
        </ul>
      )
    case 'metrics': {
      const growthLabel = locale === 'en' ? 'eCommerce revenue growth: ' : 'Crescita fatturato eCommerce: '
      return (
        <div
          key={idx}
          className="my-8 rounded-[12px] border border-black/10 bg-white px-5 py-4"
        >
          <div className="font-sans text-[15px] tracking-[-0.02em] text-[#1c1c1c]">
            <span>MER &gt; </span>
            <span style={{ color: '#96BF47', fontWeight: 600 }}>{section.merValue}</span>
          </div>
          {section.growthValue ? (
            <div className="mt-2 border-t border-black/10 pt-2 font-sans text-[15px] tracking-[-0.02em] text-[#1c1c1c]">
              <span>{growthLabel}</span>
              <span style={{ color: '#96BF47', fontWeight: 600 }}>{section.growthValue}</span>
            </div>
          ) : null}
          {section.note ? (
            <p className="mt-2 font-sans text-[13px] tracking-[-0.02em] text-[#7c7c7c]">
              {section.note}
            </p>
          ) : null}
        </div>
      )
    }
    case 'cta': {
      const copy = CTA_COPY[locale]
      const href = ROUTE_PATHS.zeroLossMigration[locale]
      const contactHref = ROUTE_PATHS.contacts[locale]
      return (
        <aside
          key={idx}
          className="my-[60px] rounded-[12px] bg-[#1A1A1A]"
          style={{ padding: '40px 48px' }}
        >
          <h3 className="font-sans text-[24px] font-bold leading-[1.2em] tracking-[-0.03em] text-white">
            {copy.heading}
          </h3>
          <p className="mt-3 font-sans text-[16px] leading-[1.6em] text-[#AAAAAA]">
            {copy.body}
          </p>
          <Link
            href={href}
            className="mt-6 inline-block rounded-[12px] font-sans font-semibold no-underline"
            style={{
              backgroundColor: '#96BF47',
              color: '#1A1A1A',
              padding: '14px 32px',
            }}
            data-tracking="use_case_cta_sprint"
          >
            {copy.button}
          </Link>
          <Link
            href={contactHref}
            className="mt-4 block font-sans text-[15px] font-medium text-[#AAAAAA] underline underline-offset-4 decoration-[#AAAAAA]/40 transition-colors hover:text-white hover:decoration-white"
            data-tracking="use_case_cta_contact"
          >
            {copy.secondary}
          </Link>
        </aside>
      )
    }
    default:
      return null
  }
}
