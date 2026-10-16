import {
  ZL_TIERS,
  getZlTier,
  type ZlLanguageBand,
  type ZlProductBand,
  type ZlRevenueBand,
  type ZlTier,
  type ZlTierId,
} from '@/content/zero-loss-migration'

/**
 * Tier logic for the Zero-Loss Migration Sprint qualification form.
 * Shared by the client (step 4 summary) and the server (payload check).
 *
 *   €300k-2M  -> Tier 1, €5.800, 4 x €1.450
 *   €2M-20M   -> Tier 2, €8.800, 4 x €2.200
 *   over €20M -> Tier 3, €12.800, 4 x €3.200
 *   under €300k -> Tier 1 with a soft warning (the form no longer stops)
 */
export function tierForRevenue(band: ZlRevenueBand | ''): ZlTierId | null {
  switch (band) {
    case 'under300k':
    case '300k-2m':
      return 1
    case '2m-20m':
      return 2
    case 'over20m':
      return 3
    default:
      return null
  }
}

const PRODUCT_BAND_MAX: Record<ZlProductBand, number> = {
  under2000: 2000,
  '2000-10000': 10000,
  over10000: Infinity,
}

const LANGUAGE_BAND_MAX: Record<ZlLanguageBand, number> = {
  '1': 1,
  '2-3': 3,
  '4plus': Infinity,
}

/**
 * True when products, languages or ERP go past the caps of the tier, so the
 * summary shows the fixed-price add-on line. A custom ERP is always an add-on
 * on Tier 3 (no other cap there).
 */
export function exceedsTierCaps(
  tier: ZlTier,
  answers: { products: ZlProductBand | ''; languages: ZlLanguageBand | ''; erp: 'yes' | 'no' | '' }
): boolean {
  const products = answers.products ? PRODUCT_BAND_MAX[answers.products] : 0
  const languages = answers.languages ? LANGUAGE_BAND_MAX[answers.languages] : 0
  const erpCount = answers.erp === 'yes' ? 1 : 0

  if (tier.id === 3) return erpCount > 0
  return products > tier.caps.maxProducts || languages > tier.caps.maxLanguages || erpCount > tier.caps.erpIncluded
}

export function estimateTier(
  answers: { revenue: ZlRevenueBand | ''; products: ZlProductBand | ''; languages: ZlLanguageBand | ''; erp: 'yes' | 'no' | '' }
): { tier: ZlTier; addon: boolean } | null {
  const id = tierForRevenue(answers.revenue)
  if (!id) return null
  const tier = getZlTier(id)
  return { tier, addon: exceedsTierCaps(tier, answers) }
}

export { ZL_TIERS }
