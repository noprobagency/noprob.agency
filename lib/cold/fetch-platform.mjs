// Fetches a store homepage once and detects its platform. Shared by
// scripts/detect-platform.mjs and scripts/cold-daily.mjs.

import { detectPlatform, phpVersion } from './detect-platform.mjs'

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128 Safari/537.36'

/** @returns {Promise<{ platform: string, evidence: string | null, php: string | null, status: number | null, error: string | null }>} */
export async function fetchPlatform(url, { timeout = 10000 } = {}) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeout)
  try {
    const res = await fetch(url, { redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': UA } })
    const html = (await res.text()).slice(0, 500_000)
    const headers = Object.fromEntries(res.headers)
    return { ...detectPlatform(html, headers), php: phpVersion(headers), status: res.status, error: null }
  } catch (err) {
    return { platform: 'unreachable', evidence: null, php: null, status: null, error: err.name === 'AbortError' ? 'timeout' : err.message }
  } finally {
    clearTimeout(timer)
  }
}

/** Runs fn over items with a fixed concurrency. */
export async function pool(items, concurrency, fn) {
  const queue = [...items]
  const out = new Map()
  await Promise.all(
    Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
      while (queue.length) {
        const item = queue.shift()
        out.set(item, await fn(item))
      }
    }),
  )
  return out
}
