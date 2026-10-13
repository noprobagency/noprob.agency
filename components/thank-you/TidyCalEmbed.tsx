'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function TidyCalEmbed({ path = 'noprobagency/contacts' }: { path?: string }) {
  useEffect(() => {
    // If TidyCal script is already in the document (e.g. client-side router navigation),
    // manually initialize any uninitialized embed container.
    const win = window as unknown as { TidyCal?: { init: (el: HTMLElement) => void } }
    const el = document.querySelector<HTMLElement>(`div.tidycal-embed[data-path="${path}"]`)
    if (el && win.TidyCal?.init) {
      try {
        win.TidyCal.init(el)
      } catch (err) {
        console.error('[TidyCal] init error:', err)
      }
    }
  }, [path])

  return (
    <div className="w-full max-w-[800px]">
      <div className="tidycal-embed" data-path={path} />
      <Script
        src="https://asset-tidycal.b-cdn.net/js/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          const win = window as unknown as { TidyCal?: { init: (el: HTMLElement) => void } }
          const el = document.querySelector<HTMLElement>(`div.tidycal-embed[data-path="${path}"]`)
          if (el && win.TidyCal?.init) {
            try {
              win.TidyCal.init(el)
            } catch (err) {
              console.error('[TidyCal] onLoad init error:', err)
            }
          }
        }}
      />
    </div>
  )
}
