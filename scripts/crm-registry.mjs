#!/usr/bin/env node
// Builds the single store registry of the CRM (noprobagency/crm-noprobagency, private):
// one row per store domain, whatever the source, with who works it and where it stands.
// Sources (all local, gitignored): the direct channel (cold-email/data/leads.json), Dante's
// export (cold-email/data/dante.json), Damiano's pool and batches (docs/cold/damiano/),
// the shared opt-out list (docs/cold/suppressed.txt), Claudio's notes for Antonio's lead
// evaluations (cold-email/data/crm-note.json) and the Gojiberry lists (fetched with
// --gojiberry and cached in cold-email/data/gojiberry-lists.json, so a rebuild needs no API).
//
// Usage: node scripts/crm-registry.mjs <crm checkout> [--gojiberry] [--push]
// Output: <crm>/data/registry.json. Prints aggregate numbers only.

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { STEPS, addWorkingDays } from '../lib/cold-email/sequence.mjs'

const args = process.argv.slice(2)
const repo = args.find((a) => !a.startsWith('--'))
if (!repo) {
  console.error('Usage: node scripts/crm-registry.mjs <crm checkout> [--gojiberry] [--push]')
  process.exit(1)
}
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Lisbon' })
const read = (p, fallback) => (existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : fallback)

// Gojiberry lists: Ada (63200), Dante (65682), Shopify reserve (64769), overflow to the direct channel (66757)
const LISTS = { 63200: { channel: 'ada', source: 'gojiberry-40211' }, 65682: { channel: 'hello@', source: 'gojiberry-41228' }, 64769: { channel: 'riserva-shopify', source: 'gojiberry-40211' }, 66757: { channel: 'antonio@', source: 'gojiberry-41228' } }
const CACHE = 'cold-email/data/gojiberry-lists.json'
let lists = read(CACHE, null)
if (args.includes('--gojiberry') || !lists) {
  const { listContacts } = await import('../lib/cold/gojiberry.mjs')
  lists = { fetchedAt: new Date().toISOString(), lists: {} }
  for (const id of Object.keys(LISTS)) lists.lists[id] = await listContacts(Number(id))
  writeFileSync(CACHE, JSON.stringify(lists))
}

// Channel precedence when a domain shows up in several places: whoever is actually writing to it wins.
const RANK = { 'antonio@': 5, 'hello@': 4, ada: 3, nessuno: 1, 'riserva-shopify': 0 }
const domainOf = (s) => {
  if (!s) return null
  let d = String(s).trim().toLowerCase()
  try { if (d.includes('/') || d.includes(':')) d = new URL(d.startsWith('http') ? d : `https://${d}`).hostname } catch { /* keep as is */ }
  d = d.replace(/^www\./, '').replace(/\/.*$/, '')
  return /^[a-z0-9.-]+\.[a-z]{2,}$/.test(d) ? d : null
}
const stores = new Map()
const store = (domain) => {
  if (!stores.has(domain)) stores.set(domain, { domain, brand: null, platform: null, channel: 'nessuno', status: 'nuovo', sources: new Set(), contacts: new Map(), steps: null, total: null, last: null, next: null, detail: null, antonio: null })
  return stores.get(domain)
}
const addContact = (s, c) => {
  if (!c.email && !c.linkedin && !c.name) return
  const key = (c.email || c.linkedin || c.name).toLowerCase()
  const prev = s.contacts.get(key) || {}
  s.contacts.set(key, { name: c.name || prev.name || null, title: c.title || prev.title || null, email: c.email || prev.email || null, linkedin: c.linkedin || prev.linkedin || null })
}
const claim = (s, channel, status, extra = {}) => {
  if ((RANK[channel] ?? 1) < (RANK[s.channel] ?? 1) && s.channel !== 'nessuno') return
  if (s.channel === channel && (RANK[channel] ?? 1) === (RANK[s.channel] ?? 1) && s.status !== 'nuovo' && status === 'nuovo') return
  Object.assign(s, { channel, status }, extra)
}

// Sequence status shared by the direct channel and Dante's export
const seqStatus = (segment, reason, sent, stopReason, total) => {
  if (segment === 'warm') return 'caldo'
  if (segment === 'suppressed') return /opt|unsub|no\b|rifiut/i.test(reason || '') ? 'opt-out' : 'escluso'
  if (segment === 'review') return 'da-rivedere'
  if (segment === 'shopify') return 'riserva'
  if (stopReason === 'reply') return 'risposto'
  if (stopReason) return 'escluso'
  if (!sent.length) return 'nuovo'
  return sent.length >= total ? 'concluso' : 'in-sequenza'
}

// 1. Direct channel, antonio@ (the old CRM 2026 and Dante's overflow)
const direct = read('cold-email/data/leads.json', { leads: [] }).leads
for (const l of direct) {
  const d = domainOf(l.domain) || domainOf(l.email?.split('@')[1])
  if (!d) continue
  const s = store(d)
  s.brand ||= l.brand; s.platform ||= l.platform
  s.sources.add(l.source === 'gojiberry-dante' ? 'gojiberry-41228' : 'crm-v2')
  addContact(s, { name: l.contact, email: l.email })
  const sent = l.sequence?.sent || []
  const st = seqStatus(l.segment, l.reason, sent, l.sequence?.stopReason, STEPS.length)
  const next = l.segment === 'target' && !l.sequence?.stopReason && sent.length && STEPS[sent.length] ? addWorkingDays(sent[0].date, STEPS[sent.length].day) : null
  claim(s, st === 'riserva' ? 'riserva-shopify' : 'antonio@', st === 'riserva' ? 'nuovo' : st, { steps: sent.length, total: STEPS.length, last: sent.at(-1)?.date || null, next, detail: l.segment === 'warm' ? l.note || l.crm?.reply || null : l.reason || l.sequence?.stopReason || null })
}

// 2. Dante, hello@ (export of the 8:30 review, same shape as the CRM email page)
for (const l of read('cold-email/data/dante.json', { leads: [] }).leads) {
  const d = domainOf(l.domain) || domainOf(l.email?.split('@')[1])
  if (!d) continue
  const s = store(d)
  s.brand ||= l.brand; s.platform ||= l.platform; s.sources.add('gojiberry-41228')
  addContact(s, { name: l.contact, email: l.email })
  const sent = l.sent || []
  const st = seqStatus(l.segment, l.reason, sent, l.stopReason, l.total || 3)
  claim(s, st === 'riserva' ? 'riserva-shopify' : 'hello@', st === 'riserva' ? 'nuovo' : st, { steps: sent.length, total: l.total || 3, last: sent.at(-1)?.date || null, next: l.nextDate || null, detail: l.segment === 'warm' ? l.note || l.reply || null : l.reason || l.stopReason || null })
}

// 3. Gojiberry lists (Ada's LinkedIn flow, Dante's list, Shopify reserve, overflow)
const stepsOf = (c) => (Array.isArray(c.campaignStatus) ? c.campaignStatus : c.campaignStatus ? [c.campaignStatus] : [])
const gjbStatus = (c) => {
  if (c.unsubscribed || c.redListed) return 'opt-out'
  if (c.rejectedAt || c.blocked) return 'escluso'
  if (c.bounced) return 'escluso'
  if (stepsOf(c).some((x) => x.state === 'answered' || x.state === 'accepted' && x.type === 'message')) return 'risposto'
  if (c.hasStartedCampaign) return 'in-sequenza'
  if (c.readyForCampaign) return 'approvato'
  return 'da-rivedere'
}
for (const [id, cs] of Object.entries(lists.lists)) {
  const { channel, source } = LISTS[id]
  for (const c of cs) {
    const d = domainOf(c.website) || domainOf(c.companyUrl) || domainOf(c.email?.split('@')[1])
    if (!d) continue
    const s = store(d)
    s.brand ||= c.company; s.sources.add(source)
    addContact(s, { name: c.fullName || [c.firstName, c.lastName].filter(Boolean).join(' '), title: c.jobTitle, email: c.email, linkedin: c.profileUrl })
    const st = channel === 'riserva-shopify' ? 'nuovo' : gjbStatus(c)
    const steps = Array.isArray(c.campaignStatus) ? c.campaignStatus.length : c.campaignStatus ? 1 : 0
    if (channel === 'riserva-shopify') { s.platform ||= 'shopify'; claim(s, channel, st); continue }
    // 66757 only marks the handoff to the direct channel: the direct channel itself is the source of truth
    if (channel === 'antonio@' && s.channel === 'antonio@') continue
    claim(s, channel, st, { steps: steps || null, total: channel === 'ada' ? 8 : 3, last: c.updatedAt?.slice(0, 10) || null, detail: c.rejectionReason || c.rejectionReasonText || null })
  }
}

// 4. Damiano: the pool (nobody works it yet), the batches handed to Dante, the Shopify stores set aside
const dam = (c) => ({ name: c.name, title: c.title, email: c.email, linkedin: c.linkedin })
const batches = existsSync('docs/cold/damiano/lotti') ? readdirSync('docs/cold/damiano/lotti').filter((f) => /^\d{4}-\d{2}-\d{2}-(diretto|hello)\.json$/.test(f)) : []
const batched = new Map()
for (const f of batches) {
  const rows = read(join('docs/cold/damiano/lotti', f), [])
  const channel = f.endsWith('-diretto.json') ? 'antonio@' : 'hello@'
  for (const r of Array.isArray(rows) ? rows : rows.leads || []) { const d = domainOf(r.domain); if (d) batched.set(d, { channel, date: f.slice(0, 10) }) }
}
for (const l of read('docs/cold/damiano/leads.json', [])) {
  const d = domainOf(l.domain); if (!d) continue
  const s = store(d)
  s.brand ||= l.brand; s.platform ||= l.platform; s.sources.add('damiano')
  addContact(s, dam(l)); if (l.second) addContact(s, dam(l.second)); for (const o of l.others || []) addContact(s, dam(o))
  const b = batched.get(d)
  if (b && s.channel === 'nessuno') claim(s, b.channel, 'nuovo', { detail: `lotto ${b.date}, in attesa di import` })
  else if (s.channel === 'nessuno') claim(s, 'nessuno', 'nuovo', { detail: 'pool Damiano' })
}
for (const l of read('docs/cold/damiano/shopify.json', [])) {
  const d = domainOf(l.domain); if (!d) continue
  const s = store(d)
  s.brand ||= l.brand; s.platform ||= 'shopify'; s.sources.add('damiano')
  if (l.name || l.email) addContact(s, dam(l))
  claim(s, 'riserva-shopify', 'nuovo')
}

// 5. Opt-outs win over everything
if (existsSync('docs/cold/suppressed.txt')) {
  for (const line of readFileSync('docs/cold/suppressed.txt', 'utf8').split('\n')) {
    const v = line.trim().toLowerCase(); if (!v || v.startsWith('#')) continue
    const d = domainOf(v.includes('@') ? v.split('@')[1] : v)
    if (d && stores.has(d) && v.includes('@') === false) Object.assign(stores.get(d), { status: 'opt-out' })
    if (d && stores.has(d) && v.includes('@')) { const s = stores.get(d); if ([...s.contacts.keys()].includes(v) || s.contacts.size <= 1) s.status = 'opt-out' }
  }
}

// 6. Antonio's evaluations, written by Claudio: { "<domain>": { "valutazione", "esito", "data" } }
for (const [d, note] of Object.entries(read('cold-email/data/crm-note.json', {}))) if (stores.has(d)) stores.get(d).antonio = note

const rows = [...stores.values()].map((s) => ({ ...s, sources: [...s.sources].sort(), contacts: [...s.contacts.values()] }))
const count = (f) => rows.reduce((m, r) => { const k = f(r); m[k] = (m[k] || 0) + 1; return m }, {})
// Emails of hello@ come from the Gojiberry steps themselves (type email, state sent or answered),
// so the count is live and not the 8:30 export; Ada's LinkedIn actions the same way.
const lisbonDay = (iso) => new Date(iso).toLocaleDateString('en-CA', { timeZone: 'Europe/Lisbon' })
const gjbSteps = (listId, type) => (lists.lists[listId] || []).flatMap(stepsOf).filter((x) => x.type === type && ['sent', 'answered'].includes(x.state)).map((x) => lisbonDay(x.createdAt))
const helloSteps = gjbSteps('65682', 'email')
const adaSteps = (lists.lists['63200'] || []).flatMap(stepsOf).filter((x) => ['invitation', 'message'].includes(x.type) && x.state === 'sent').map((x) => lisbonDay(x.createdAt))
const sentOn = (day, channel) => {
  if (channel === 'antonio@') return direct.filter((l) => (l.sequence?.sent || []).some((x) => x.date === day)).length
  return helloSteps.filter((d) => d === day).length
}
// Emails sent per working day, last 15 days: the one trend Antonio looks at
const days = []
for (const d = new Date(`${today}T12:00:00`); days.length < 15; d.setDate(d.getDate() - 1)) if (d.getDay() % 6) days.unshift(d.toISOString().slice(0, 10))
const sentByDay = Object.fromEntries(days.map((day) => [day, { 'antonio@': sentOn(day, 'antonio@'), 'hello@': sentOn(day, 'hello@'), linkedin: adaSteps.filter((d) => d === day).length }]))
const counts = { stores: rows.length, byChannel: count((r) => r.channel), byStatus: count((r) => r.status), bySource: rows.flatMap((r) => r.sources).reduce((m, k) => ((m[k] = (m[k] || 0) + 1), m), {}), byPlatform: count((r) => r.platform || 'sconosciuta'), sentToday: sentByDay[today], sentByDay, limit: 50 }
const out = { updatedAt: new Date().toISOString(), today, gojiberryFetchedAt: lists.fetchedAt, counts, stores: rows }
writeFileSync(join(repo, 'data/registry.json'), JSON.stringify(out))

// History: one line per day with the aggregate numbers, so the trend survives every rebuild
const histPath = join(repo, 'data/storia.json')
const hist = read(histPath, {})
hist[today] = { stores: rows.length, byChannel: counts.byChannel, byStatus: counts.byStatus, sent: sentByDay[today] }
writeFileSync(histPath, JSON.stringify(hist, null, 1))
console.log(`${rows.length} stores -> ${join(repo, 'data/registry.json')}`)
console.log('by channel', JSON.stringify(out.counts.byChannel))
console.log('by status ', JSON.stringify(out.counts.byStatus))
console.log('by source ', JSON.stringify(out.counts.bySource))

if (args.includes('--push')) {
  const git = (...a) => execFileSync('git', ['-C', repo, '-c', 'user.name=noprobagency', '-c', 'user.email=hello@noprob.agency', ...a], { encoding: 'utf8' })
  git('add', 'data/registry.json', 'data/storia.json', 'manager')
  if (git('status', '--porcelain', 'data/registry.json', 'data/storia.json', 'manager').trim()) {
    git('commit', '-q', '-m', `chore(crm): registry update ${today}`)
    git('push', '-q')
    console.log('pushed')
  } else console.log('registry unchanged')
}
