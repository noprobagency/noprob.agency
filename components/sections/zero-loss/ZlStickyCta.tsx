'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlCta from './ZlCta'

export const ZL_FINAL_ID = 'zl-final'

/**
 * Mobile-only sticky CTA bar (same pattern as the AI Accelerator page): appears
 * after the hero, hides while the final CTA section is in the viewport.
 */
export default function ZlStickyCta({ copy, priceFrom }: { copy: ZlCopy['sticky']; priceFrom: string }) {
  const [pastHero, setPastHero] = useState(false)
  const [finalVisible, setFinalVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const target = document.getElementById(ZL_FINAL_ID)
    let observer: IntersectionObserver | undefined
    if (target) {
      observer = new IntersectionObserver((entries) => entries.forEach((e) => setFinalVisible(e.isIntersecting)), { threshold: 0.05 })
      observer.observe(target)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  const visible = pastHero && !finalVisible

  // Portal to <body>: ancestors with transforms would break position: fixed.
  if (!mounted) return null

  return createPortal(
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/[0.06] bg-white/95 px-5 pb-[calc(10px+env(safe-area-inset-bottom))] pt-[10px] backdrop-blur-[10px] transition-transform duration-300 min-[810px]:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col leading-none">
          <span className="font-sans text-[11px] font-medium tracking-[-0.02em] text-np-grey">{copy.prefix}</span>
          <span className="mt-[3px] font-display text-[19px] font-semibold tracking-[-0.05em] text-np-dark">{priceFrom}</span>
          <span className="mt-[3px] font-sans text-[11px] font-medium tracking-[-0.02em] text-np-grey">{copy.note}</span>
        </div>
        <ZlCta label={copy.cta} position="sticky" className="shrink-0 !px-5 !py-[10px] !text-[15px]" />
      </div>
    </div>,
    document.body
  )
}
