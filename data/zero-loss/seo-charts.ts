/**
 * Series for the results charts of the Shopify Launch Sprint landing.
 * Sources and method in docs/dati-verificati.md.
 *
 * - Supplement DTC Nazzi: daily clicks and impressions from Google Search Console as an
 *   index (100 = daily average of the 28 days before go-live, 21 Jun → 18 Jul 2026), read
 *   from data/use-cases/nazzi-gsc-daily.json (7-day moving average computed at render).
 *   Index only: the raw volumes never ship to the browser.
 * - cuminiMonthly: [month, sales index, orders index], net sales and orders from the
 *   Shopify backend of cumini.com, 3-month moving average, 100 = monthly average of the
 *   12 months before Shopify (June 2024 → May 2025). Index only: no revenue figures.
 */
export const NAZZI_MIGRATION: [string, string] = ['2026-05-01', '2026-07-19']
export const CUMINI_MIGRATION: [string, string] = ['2025-03-01', '2025-05-19']

export const cuminiMonthly: [string, number, number][] = [
  ["2023-07", 74.0, 131.6],
  ["2023-08", 79.5, 133.6],
  ["2023-09", 74.0, 114.8],
  ["2023-10", 69.8, 104.3],
  ["2023-11", 66.0, 85.6],
  ["2023-12", 78.5, 89.9],
  ["2024-01", 162.3, 148.0],
  ["2024-02", 161.6, 150.0],
  ["2024-03", 140.3, 133.9],
  ["2024-04", 50.1, 49.2],
  ["2024-05", 60.0, 56.1],
  ["2024-06", 67.9, 64.3],
  ["2024-07", 104.8, 122.7],
  ["2024-08", 133.9, 154.6],
  ["2024-09", 128.0, 141.4],
  ["2024-10", 86.1, 73.2],
  ["2024-11", 71.6, 48.9],
  ["2024-12", 86.6, 68.9],
  ["2025-01", 156.0, 145.0],
  ["2025-02", 144.8, 140.1],
  ["2025-03", 131.2, 125.7],
  ["2025-04", 59.4, 54.5],
  ["2025-05", 49.7, 56.4],
  ["2025-06", 55.5, 68.9],
  ["2025-07", 96.0, 116.2],
  ["2025-08", 108.0, 121.7],
  ["2025-09", 117.6, 119.1],
  ["2025-10", 102.5, 89.9],
  ["2025-11", 159.2, 134.2],
  ["2025-12", 230.0, 192.9],
  ["2026-01", 310.7, 279.2],
  ["2026-02", 248.7, 232.3],
  ["2026-03", 186.3, 179.2],
  ["2026-04", 110.8, 96.1],
  ["2026-05", 154.8, 109.3],
  ["2026-06", 201.2, 159.8],
  ["2026-07", 286.5, 247.4],
  ["2026-08", 273.7, 247.1],
  ["2026-09", 215.0, 192.6],
]
