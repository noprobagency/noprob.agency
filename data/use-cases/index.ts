import type { ArticleSection } from '@/data/articles'

import { cumini } from './cumini'
import { ddglobal } from './ddglobal'
import { nazzi } from './nazzi'

export type UseCase = {
  slug: string
  title: string
  excerpt: string
  /** Short <title>/<meta description> for Google (the H1 keeps the long title). */
  seoTitle?: string
  seoTitleEn?: string
  seoDescription?: string
  seoDescriptionEn?: string
  image: string
  imageAlt?: string
  caseType: string
  date: string
  content?: ArticleSection[]
  titleEn?: string
  excerptEn?: string
  contentEn?: ArticleSection[]
  /** Last data refresh (ISO date): shown in "Sources and method" and used as dateModified. */
  updated?: string
  /** Topics for the Article JSON-LD `about`. */
  about?: string[]
  /** FAQ rendered at the end of the case and emitted as FAQPage JSON-LD. */
  faq?: { q: string; a: string }[]
  faqEn?: { q: string; a: string }[]
  /** Where every number in the case comes from. */
  sources?: string[]
  sourcesEn?: string[]
  /**
   * Optional styled-card metadata used on the use-case archive page and the
   * homepage results marquee. When present, the archive renders a marquee-style
   * overlay (image + brand logo + metric pills) instead of the plain card.
   */
  archive?: {
    image: string
    logo: string
    logoClass?: string
    metrics: { en: string[]; it: string[] }
  }
}


export const useCases: UseCase[] = [nazzi, cumini, ddglobal]
