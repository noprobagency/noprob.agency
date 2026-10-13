import type { ArticleSection } from '@/data/articles'

import { cumini } from './cumini'
import { nazzi } from './nazzi'

export type UseCase = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt?: string
  caseType: string
  date: string
  content?: ArticleSection[]
  titleEn?: string
  excerptEn?: string
  contentEn?: ArticleSection[]
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


export const useCases: UseCase[] = [nazzi, cumini]
