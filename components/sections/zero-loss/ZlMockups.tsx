import type { ZlMockupKind } from '@/content/zero-loss-migration'

/*
  Brand-coherent mockups of the 5 deliverables, drawn in JSX so they cost no
  image bytes and never shift layout (fixed 4:3 frame). They stand in for the
  real screenshots until Antonio provides them: each frame carries the
  "[DA CONFERMARE]" marker (see README TODO list). No real numbers are shown:
  every figure inside is a neutral sample.
*/

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: '4 / 3' }}
      className="relative w-full overflow-hidden rounded-card border-[6px] border-np-card-soft bg-[#e9e9e9] shadow-card"
    >
      <div className="absolute inset-0 p-4 min-[810px]:p-6">{children}</div>
    </div>
  )
}

function Window({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-black/[0.06] bg-np-card-soft px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="ml-2 truncate font-sans text-[9px] font-medium tracking-[-0.02em] text-np-grey">{title}</span>
      </div>
      <div className="flex-1 p-2.5">{children}</div>
    </div>
  )
}

function Bar({ w, tone = 'dark', h = 'h-[6px]' }: { w: string; tone?: 'dark' | 'light' | 'green'; h?: string }) {
  const color = tone === 'dark' ? 'bg-black/70' : tone === 'green' ? 'bg-np-green' : 'bg-black/10'
  return <span className={`block rounded-full ${h} ${w} ${color}`} />
}

function StorePreview({ accent }: { accent: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Bar w="w-8" />
        <div className="flex gap-1">
          <Bar w="w-4" tone="light" />
          <Bar w="w-4" tone="light" />
          <Bar w="w-4" tone="light" />
        </div>
      </div>
      <div className={`mt-1 h-10 rounded-[6px] ${accent ? 'bg-np-mark-green' : 'bg-black/[0.06]'}`} />
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="h-8 rounded-[4px] bg-black/[0.08]" />
            <Bar w="w-full" tone="light" h="h-[4px]" />
            <Bar w="w-1/2" tone="light" h="h-[4px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

function StagingMockup() {
  return (
    <div className="relative grid h-full grid-cols-2 gap-3">
      <Window title="store-attuale.it">
        <StorePreview accent={false} />
      </Window>
      <Window title="staging.myshopify.com">
        <StorePreview accent />
      </Window>
      <div className="absolute bottom-0 left-1/2 w-[62%] -translate-x-1/2 rounded-[8px] border border-black/10 bg-white p-2 shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="flex h-3 w-3 items-center justify-center rounded-[3px] bg-np-green text-[8px] font-bold leading-none text-white">✓</span>
              <Bar w={i % 2 ? 'w-2/3' : 'w-4/5'} tone="light" h="h-[5px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ReportMockup() {
  const rows = ['w-10', 'w-8', 'w-12', 'w-9', 'w-7', 'w-11']
  return (
    <Window title="Data Migration Report.pdf" className="h-full">
      <div className="flex flex-col gap-2">
        <Bar w="w-2/5" h="h-[8px]" />
        <div className="mt-1 grid grid-cols-[1.4fr_1fr_1fr_0.8fr] gap-2 border-b border-black/10 pb-1">
          <Bar w="w-10" tone="light" h="h-[5px]" />
          <Bar w="w-8" tone="light" h="h-[5px]" />
          <Bar w="w-8" tone="light" h="h-[5px]" />
          <Bar w="w-6" tone="light" h="h-[5px]" />
        </div>
        {rows.map((w, i) => (
          <div key={i} className="grid grid-cols-[1.4fr_1fr_1fr_0.8fr] items-center gap-2">
            <Bar w={w} h="h-[5px]" />
            <Bar w="w-6" tone="light" h="h-[5px]" />
            <Bar w="w-6" tone="light" h="h-[5px]" />
            <span className="h-[10px] w-[10px] rounded-full bg-np-green" />
          </div>
        ))}
        <div className="mt-1 flex items-center justify-between rounded-[6px] bg-np-mark-green px-2 py-1.5">
          <Bar w="w-12" h="h-[5px]" />
          <span className="font-sans text-[10px] font-bold text-np-dark">100%</span>
        </div>
      </div>
    </Window>
  )
}

function RedirectsMockup() {
  return (
    <div className="grid h-full grid-rows-[1fr_auto] gap-3">
      <Window title="redirect-map.csv">
        <div className="flex flex-col gap-1.5 font-mono text-[8px] leading-none text-np-grey">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Bar w="w-2/5" tone="light" h="h-[5px]" />
              <span className="text-black/40">→</span>
              <Bar w="w-2/5" tone="dark" h="h-[5px]" />
              <span className="ml-auto rounded-[3px] bg-np-mark-green px-1 py-[1px] font-sans text-[8px] font-bold text-np-dark">301</span>
            </div>
          ))}
        </div>
      </Window>
      <div className="rounded-[10px] bg-np-dark px-3 py-2.5 font-mono text-[9px] leading-[1.5] text-[#c9c9c9]">
        <p>$ redirect-test --before-golive</p>
        <p>
          <span className="text-np-green">●</span> 301 → 200 <span className="text-white">100%</span>
        </p>
        <p className="text-np-green">✓ 0 failures</p>
      </div>
    </div>
  )
}

function TrackingMockup() {
  return (
    <div className="grid h-full grid-cols-[1.2fr_1fr] gap-3">
      <Window title="Tracking Spec">
        <div className="flex flex-col gap-2">
          <Bar w="w-3/5" h="h-[8px]" />
          {['purchase', 'add_to_cart', 'begin_checkout', 'view_item'].map((ev) => (
            <div key={ev} className="flex items-center justify-between rounded-[6px] border border-black/[0.08] px-2 py-1.5">
              <span className="font-mono text-[9px] text-np-dark">{ev}</span>
              <span className="h-[8px] w-[8px] rounded-full bg-np-green" />
            </div>
          ))}
        </div>
      </Window>
      <div className="flex flex-col gap-3">
        <div className="flex flex-1 flex-col justify-between rounded-[10px] border border-black/10 bg-white p-3">
          <Bar w="w-full" tone="light" h="h-[5px]" />
          <div className="flex items-end gap-1">
            <span className="font-display text-[26px] font-semibold leading-none tracking-[-0.05em] text-np-dark">8+</span>
            <span className="mb-[2px] font-sans text-[8px] font-medium text-np-grey">EMQ</span>
          </div>
          <div className="h-[6px] w-full overflow-hidden rounded-full bg-black/10">
            <span className="block h-full w-[85%] rounded-full bg-np-green" />
          </div>
        </div>
        <div className="rounded-[10px] border border-black/10 bg-white p-3">
          <Bar w="w-3/4" tone="light" h="h-[5px]" />
          <p className="mt-2 font-sans text-[9px] font-semibold text-np-dark">Shopify ≈ GA4</p>
          <p className="font-sans text-[8px] font-medium text-np-grey">Δ &lt; 3%</p>
        </div>
      </div>
    </div>
  )
}

function ChecklistMockup() {
  const items = ['DNS', 'TTL', 'Sitemap', 'Search Console', 'Uptime', 'Rollback']
  return (
    <Window title="Go-live Checklist" className="h-full">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <Bar w="w-1/3" h="h-[8px]" />
          <span className="rounded-[6px] border-2 border-np-dark px-2 py-1 font-display text-[12px] font-semibold tracking-[-0.04em] text-np-dark">
            DD / MM
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
          {items.map((it) => (
            <div key={it} className="flex items-center gap-1.5">
              <span className="flex h-3 w-3 items-center justify-center rounded-[3px] border border-np-dark text-[8px] font-bold leading-none text-np-dark">✓</span>
              <span className="font-sans text-[9px] font-medium text-np-dark">{it}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between border-t border-black/10 pt-2">
          <Bar w="w-1/4" tone="light" h="h-[5px]" />
          <span className="font-serif text-[16px] italic text-np-dark">firma</span>
        </div>
      </div>
    </Window>
  )
}

export default function ZlMockup({ kind, label }: { kind: ZlMockupKind; label: string }) {
  return (
    <Frame label={label}>
      {kind === 'staging' && <StagingMockup />}
      {kind === 'report' && <ReportMockup />}
      {kind === 'redirects' && <RedirectsMockup />}
      {kind === 'tracking' && <TrackingMockup />}
      {kind === 'checklist' && <ChecklistMockup />}
    </Frame>
  )
}
