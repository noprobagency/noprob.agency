import type { ReactNode } from 'react'

type ArticleTableProps = {
  caption?: string
  headers: string[]
  rows: string[][]
  /** Inline markdown renderer (links and bold), passed by `renderSection` to avoid a circular import. */
  renderInline: (text: string) => ReactNode[]
}

/**
 * Semantic table for blog articles: `<caption>` when given, column headers
 * with `scope="col"`, first column as row header (`scope="row"`). The wrapper
 * scrolls horizontally on small screens and is focusable so keyboard users can
 * scroll it. Server Component, no client JS.
 */
export default function ArticleTable({ caption, headers, rows, renderInline }: ArticleTableProps) {
  const minWidth =
    headers.length >= 5 ? 'min-w-[880px]' : headers.length === 4 ? 'min-w-[640px]' : 'min-w-[520px]'
  return (
    <div
      className="my-8 w-0 min-w-full overflow-x-auto rounded-[12px] border border-black/10 bg-white"
      tabIndex={0}
      role={caption ? 'region' : undefined}
      aria-label={caption}
    >
      <table
        className={`w-full border-collapse text-left font-sans tracking-[-0.02em] text-[#1c1c1c] ${minWidth}`}
      >
        {caption ? (
          <caption className="px-4 py-3 text-left text-[13px] font-medium text-[#7c7c7c]">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="bg-[#f5f5f5]">
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className="border-b border-black/10 px-4 py-3 align-bottom text-[13px] font-semibold uppercase tracking-[0.02em] text-[#4a4a4a]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-black/10 last:border-b-0">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th
                    key={c}
                    scope="row"
                    className="px-4 py-3 align-top text-[15px] font-semibold leading-[1.55]"
                  >
                    {renderInline(cell)}
                  </th>
                ) : (
                  <td key={c} className="px-4 py-3 align-top text-[15px] font-medium leading-[1.55]">
                    {renderInline(cell)}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
