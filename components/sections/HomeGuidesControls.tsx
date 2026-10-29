'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Filter = { id: string; label: string }

/**
 * Optional controls of the home guides carousel: topic chips and prev/next
 * arrows. The track (`children`) is server-rendered and scrolls on its own
 * with CSS scroll-snap, so without JS the page still works: the controls
 * mount after hydration (their row has a fixed height, no layout shift).
 * Filtering only toggles `hidden` on the cards (`data-cat`); the closing
 * card (`data-keep`) always stays.
 */
export default function HomeGuidesControls({
  filters,
  labels,
  children,
}: {
  filters: Filter[]
  labels: { all: string; filter: string; prev: string; next: string }
  children: ReactNode
}) {
  const root = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  const track = useCallback(() => root.current?.querySelector<HTMLElement>('[data-guides-track]') ?? null, [])

  const measure = useCallback(() => {
    const el = track()
    if (!el) return
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 })
  }, [track])

  useEffect(() => {
    setReady(true)
    const el = track()
    if (!el) return
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    measure()
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [track, measure])

  function behavior(): ScrollBehavior {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  }

  function select(id: string | null) {
    setActive(id)
    const el = track()
    if (!el) return
    el.querySelectorAll<HTMLElement>('[data-cat]').forEach((card) => {
      card.hidden = id !== null && card.dataset.cat !== id
    })
    el.scrollTo({ left: 0, behavior: 'auto' })
    measure()
  }

  function step(direction: 1 | -1) {
    const el = track()
    const card = el?.querySelector<HTMLElement>('li:not([hidden])')
    if (!el || !card) return
    const gap = parseFloat(getComputedStyle(el).columnGap || '0')
    el.scrollBy({ left: direction * (card.offsetWidth + gap) * 2, behavior: behavior() })
  }

  const chip =
    'shrink-0 rounded-full border px-4 py-2 font-sans text-[14px] font-medium tracking-[-0.02em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-np-dark'
  const arrow =
    'flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-np-dark transition-colors hover:bg-np-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-np-dark disabled:pointer-events-none disabled:opacity-30'

  return (
    <div ref={root}>
      <div className="mt-8 flex h-11 items-center justify-between gap-4 min-[810px]:mt-10">
        {ready && (
          <>
            <div
              role="group"
              aria-label={labels.filter}
              className="-mx-5 flex min-w-0 flex-1 gap-2 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[810px]:mx-0 min-[810px]:px-0"
            >
              {[{ id: null, label: labels.all }, ...filters].map((f) => (
                <button
                  key={f.id ?? 'all'}
                  type="button"
                  aria-pressed={active === f.id}
                  onClick={() => select(f.id)}
                  className={cn(
                    chip,
                    active === f.id
                      ? 'border-np-dark bg-np-dark text-white'
                      : 'border-black/10 bg-white text-np-dark hover:border-black/30'
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="hidden shrink-0 gap-2 lg:flex">
              <button type="button" aria-label={labels.prev} disabled={edges.start} onClick={() => step(-1)} className={arrow}>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M16 10H4M9 5l-5 5 5 5" />
                </svg>
              </button>
              <button type="button" aria-label={labels.next} disabled={edges.end} onClick={() => step(1)} className={arrow}>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  )
}
