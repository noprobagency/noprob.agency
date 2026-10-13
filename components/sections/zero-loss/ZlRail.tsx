'use client'

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * Mobile swipe rail (< 810px): the list scrolls sideways with snap, the next
 * card peeks in and dots show where you are, like an app. From 810px up the
 * list keeps its own desktop grid (`className`), the rail styles live in the
 * `.zl-rail` media query in globals.css.
 */
export default function ZlRail({
  children,
  className,
  as: Tag = 'ul',
  wide = false,
  inset = false,
  tone = 'dark',
  label,
}: {
  children: ReactNode
  className?: string
  as?: 'ul' | 'ol'
  /** Cards at 92% instead of 84% (charts, long cards). */
  wide?: boolean
  /** Rail inside a card: no bleed to the screen edge, dots inside the card. */
  inset?: boolean
  tone?: 'dark' | 'light'
  label?: string
}) {
  const ref = useRef<HTMLUListElement & HTMLOListElement>(null)
  const count = Children.count(children)
  const [active, setActive] = useState(0)

  const onScroll = useCallback(() => {
    const el = ref.current
    const first = el?.firstElementChild as HTMLElement | null
    if (!el || !first) return
    const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0')
    setActive(Math.min(count - 1, Math.max(0, Math.round(el.scrollLeft / step))))
  }, [count])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [onScroll])

  function go(i: number) {
    const el = ref.current
    const first = el?.firstElementChild as HTMLElement | null
    if (!el || !first) return
    const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0')
    el.scrollTo({ left: i * step, behavior: 'smooth' })
  }

  return (
    <>
      <Tag ref={ref} aria-label={label} className={cn('zl-rail', wide && 'zl-rail-wide', inset && 'zl-rail-inset', className)}>
        {children}
      </Tag>
      {count > 1 && (
        <div aria-hidden className={cn('flex justify-center gap-[6px] min-[810px]:hidden', inset ? 'w-full pb-4' : 'mt-4')}>
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              onClick={() => go(i)}
              className={cn(
                'h-[6px] rounded-full transition-all duration-300',
                i === active ? 'w-5' : 'w-[6px]',
                tone === 'dark'
                  ? i === active ? 'bg-np-dark' : 'bg-black/15'
                  : i === active ? 'bg-white' : 'bg-white/25'
              )}
            />
          ))}
        </div>
      )}
    </>
  )
}
