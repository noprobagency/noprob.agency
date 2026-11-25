// US batches in the runner (D-99): Damiano writes each batch to docs/cold/damiano/us/lotti,
// Ada's finding script fills the one fact per store (scripts/ada-us-finding.mjs, started by
// the morning review), then the daily run imports the finished batch into leads.json, the
// only file it owns. A batch is imported again when its file changes (a new finding pass).

import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, realpathSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative } from 'node:path'
import { domainOf, fromDamiano } from './leads.mjs'

export const US_LOTS = ['docs/cold/damiano/us/lotti', 'docs/cold/damiano/lotti']
export const US_IMPORTED = 'docs/cold/damiano/us/importati.json'

/** Batch files of the US line, newest last. */
export function usLotFiles(dirs = US_LOTS) {
  // Damiano's US folder holds only US batches (<day>-<n>.json); the old shared folder uses the us- prefix.
  return dirs.flatMap((d) => (existsSync(d) ? readdirSync(d).filter((f) => (d.includes('/us/') ? /\.json$/ : /^us-.*\.json$/).test(f)).map((f) => join(d, f)) : [])).sort()
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

/**
 * True when Ada's script went over every row. With us2 (D-107, no finding needed) a batch is
 * ready as soon as it exists; a later finding pass changes the file and refreshes the leads.
 * @param {Record<string, any>[]} rows
 * @param {{ hookRequired?: boolean }} [opts]
 */
export const lotDone = (rows, { hookRequired = true } = {}) => rows.length > 0 && (!hookRequired || rows.every((r) => r.findingAt || ['suppressed', 'shopify'].includes(r.findingRule)))

/**
 * With us2 (D-107) US leads held only for a missing finding go back to the queue; dueStep
 * still waits for the day us2 starts. Returns how many.
 * @param {{ leads: Record<string, any>[] }} db
 */
export function releaseNoHook(db) {
  let n = 0
  for (const l of db.leads) {
    if (l.line !== 'us' || l.segment !== 'review' || l.reason !== 'senza aggancio' || l.sequence.sent.length) continue
    Object.assign(l, { segment: 'target', reason: null })
    n++
  }
  return n
}

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
 * @param {{ suppressed: string[], gojiberry: Set<string>, live: Map<string, any>, lcpApproved: boolean, clean: (s: string) => string, excluded?: Set<string>, hookRequired?: boolean }} ctx
 */
export function importUsRows(db, rows, { suppressed, gojiberry, live, lcpApproved, clean, excluded = new Set(), hookRequired = true }) {
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
        const fresh = fromDamiano(row, live.get(`https://${d}`), { hookRequired })
        Object.assign(same, { finding: fresh.finding || null, segment: fresh.segment, reason: fresh.reason })
        fact(same)
        n.updated++
      } else n.known++
      continue
    }
    if (gojiberry.has(d)) { n.known++; continue }
    const lead = fromDamiano(row, live.get(`https://${d}`), { hookRequired })
    lead.brand = clean(lead.brand)
    fact(lead)
    db.leads.push(lead)
    n.added++
  }
  return n
}

/**
 * Commits one batch file in the git repo that holds it (the runner's CRM clone, through the
 * docs/cold/damiano symlink) and pushes it, retrying when another job pushed first.
 * Other files changed in the clone are left alone (autostash).
 * @param {string} file
 * @param {{ tries?: number, pauseMs?: number }} [opts]
 * @returns {string} what happened, for the log
 */
export function saveLot(file, { tries = 5, pauseMs = 10_000 } = {}) {
  const real = realpathSync(file)
  const run = (/** @type {string} */ cwd, /** @type {string[]} */ ...args) => execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
  const root = realpathSync(run(dirname(real), 'rev-parse', '--show-toplevel'))
  const git = (/** @type {string[]} */ ...args) => run(root, ...args)
  const rel = relative(root, real)
  git('add', '--', rel)
  if (!git('diff', '--cached', '--name-only', '--', rel)) return `${rel}: nothing to save`
  git('commit', '-q', '-m', `chore(state): US batch ${basename(rel)} with findings`, '--', rel)
  for (let t = 1; t <= tries; t++) {
    try {
      git('pull', '--rebase', '--autostash', '-q')
      git('push', '-q')
      return `${rel}: saved`
    } catch (err) {
      if (t === tries) throw err
      execFileSync('sleep', [String((pauseMs * t) / 1000)])
    }
  }
  return `${rel}: not saved`
}
