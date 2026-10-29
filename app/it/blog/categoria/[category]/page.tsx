import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CategoryPage from '@/components/blog/CategoryPage'
import Footer from '@/components/layout/Footer'
import { CATEGORIES, categoryPath, getCategoryBySlug } from '@/data/articles/categories'
import { getCategoriesCopy } from '@/lib/i18n/categorie'
import { buildMetadata } from '@/lib/site'

const locale = 'it'

type Props = { params: Promise<{ category: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug[locale] }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug, locale)
  if (!category) return {}
  const page = getCategoriesCopy(locale).pages[category.id]
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: categoryPath(category.id, locale),
    locale,
  })
}

export default async function ItalianBlogCategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug, locale)
  if (!category) notFound()

  return (
    <>
      <CategoryPage id={category.id} locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
