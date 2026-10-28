import Link from 'next/link'

import type { BreadcrumbItem } from '@/lib/seo/breadcrumbs'

/**
 * Visible breadcrumb ("Home / Blog / short title"), mirrors the BreadcrumbList
 * JSON-LD of the same page. The last item is the current page, not a link.
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-sans text-[13px] font-medium tracking-[-0.02em] text-[#7c7c7c]">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-[#181818]">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="underline-offset-4 hover:text-black hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
