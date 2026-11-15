// US batches in the runner (D-99): Damiano writes each batch to docs/cold/damiano/us/lotti,
// Ada's finding script fills the one fact per store (scripts/ada-us-finding.mjs, started by
// the morning review), then the daily run imports the finished batch into leads.json, the
// only file it owns. A batch is imported again when its file changes (a new finding pass).

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { domainOf, fromDamiano } from './leads.mjs'

export const US_LOTS = ['docs/cold/damiano/us/lotti', 'docs/cold/damiano/lotti']
export const US_IMPORTED = 'docs/cold/damiano/us/importati.json'

/** Batch files of the US line, newest last. */
export function usLotFiles(dirs = US_LOTS) {
  return dirs.flatMap((d) => (existsSync(d) ? readdirSync(d).filter((f) => /^us-.*\.json$/.test(f)).map((f) => join(d, f)) : [])).sort()
}

/** @param {string} file */
export const readLot = (file) => {
  const x = JSON.parse(readFileSync(file, 'utf8'))
  return Array.isArray(x) ? x : x.leads || []
}

/** Domains Damiano or Claudio marked out of target (docs/cold/damiano/us/fuori-target-*.json). */
export function outOfTarget(dir = 'docs/cold/damiano/us') {
  const out = new Set()
  if (!existsSync(dir)) return out
  for (const f of readdirSync(dir).filter((x) => /^fuori-target-.*\.json$/.test(x))) {
    const x = JSON.parse(readFileSync(join(dir, f), 'utf8'))
    for (const r of Array.isArray(x) ? x : x.domains || x.leads || []) out.add(domainOf(typeof r === 'string' ? r : r.domain))
  }
  return out
}

/** True when Ada's script went over every row. */
export const lotDone = (rows) => rows.length > 0 && rows.every((r) => r.findingAt || ['suppressed', 'shopify'].includes(r.findingRule))

/** @returns {Record<string, number>} file -> mtime imported */
export const readImported = (file = US_IMPORTED) => (existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {})
export const saveImported = (map, file = US_IMPORTED) => writeFileSync(file, `${JSON.stringify(map, null, 2)}\n`)
export const mtimeOf = (file) => statSync(file).mtimeMs

/**
 * Adds a finished batch to the direct channel's leads, or refreshes the fact of US leads
 * not yet written to. Opt-outs, stores already known and stores in Gojiberry stay out.
 * LCP facts wait in review until Antonio approves the sentence (config.usLcpApproved).
 * @param {{ leads: Record<string, any>[] }} db
 * @param {Record<string, any>[]} rows
 * @param {{ suppressed: string[], gojiberry: Set<string>, live: Map<string, any>, lcpApproved: boolean, clean: (s: string) => string, excluded?: Set<string> }} ctx
 */
export function importUsRows(db, rows, { suppressed, gojiberry, live, lcpApproved, clean, excluded = new Set() }) {
  const n = { added: 0, updated: 0, ready: 0, lcpWaiting: 0, noFact: 0, known: 0, blocked: 0 }
  const blocked = (d, e) => suppressed.some((s) => s === e || s === d || s === `@${d}` || s === `@${e.split('@')[1]}`)
  for (const r of rows) {
    const d = domainOf(r.domain)
    const e = (r.email || '').toLowerCase()
    if (!d || !e) continue
    if (blocked(d, e) || excluded.has(d)) { n.blocked++; continue }
    const hold = r.findingRule === 'lcp' && !lcpApproved
    const row = { ...r, market: 'US', finding: hold ? null : r.finding }
    const fact = (l) => {
      Object.assign(l, { findingRule: r.findingRule || null, findingSource: r.findingSource || null, findingAt: r.findingAt || null, findingPending: hold ? r.finding : null })
      if (hold && r.finding) Object.assign(l, { segment: 'review', reason: 'frase LCP da approvare' })
      if (l.finding) n.ready++
      else if (hold) n.lcpWaiting++
      else n.noFact++
    }
    const same = db.leads.find((l) => l.domain === d || (l.email || '').toLowerCase() === e)
    if (same) {
      // A new finding pass refreshes a US lead that has not been written to yet.
      if (same.line === 'us' && !same.sequence.sent.length && ['target', 'review'].includes(same.segment) && same.reason !== 'fuori target') {
        const fresh = fromDamiano(row, live.get(`https://${d}`))
        Object.assign(same, { finding: fresh.finding || null, segment: fresh.segment, reason: fresh.reason })
        fact(same)
        n.updated++
      } else n.known++
      continue
    }
    if (gojiberry.has(d)) { n.known++; continue }
    const lead = fromDamiano(row, live.get(`https://${d}`))
    lead.brand = clean(lead.brand)
    fact(lead)
    db.leads.push(lead)
    n.added++
  }
  return n
}
