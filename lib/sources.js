/**
 * Asset Source Registry
 *
 * Track every third-party image, icon, illustration, or media asset used
 * on the site. This data powers the /sources page and ensures proper
 * attribution for licensed assets.
 *
 * Usage:
 *   import { sources, getSourceById } from '@/lib/sources'
 *
 * Fields:
 *   id           — unique slug for this asset
 *   file         — local path relative to /public (e.g., /images/hero/banner.jpg)
 *   title        — human-readable description of the asset
 *   type         — 'photo' | 'illustration' | 'icon' | 'video' | 'font' | 'other'
 *   provider     — name of the stock/icon provider
 *   providerUrl  — homepage of the provider
 *   sourceUrl    — direct URL to the original asset page
 *   author       — creator name (if known)
 *   authorUrl    — creator profile URL (if known)
 *   license      — license name (e.g., 'Unsplash License', 'CC BY 4.0', 'Commercial')
 *   licenseUrl   — URL to the full license text
 *   usedOn       — array of page paths where the asset appears
 *   notes        — any special attribution requirements or usage notes
 *   addedAt      — ISO date string when the asset was registered
 */

export const sources = [
  // ── Fonts ────────────────────────────────────────────────────
  {
    id:          'font-inter',
    file:        null,
    title:       'Inter Typeface',
    type:        'font',
    provider:    'Google Fonts',
    providerUrl: 'https://fonts.google.com',
    sourceUrl:   'https://fonts.google.com/specimen/Inter',
    author:      'Rasmus Andersson',
    authorUrl:   'https://rsms.me',
    license:     'SIL Open Font License 1.1',
    licenseUrl:  'https://scripts.sil.org/OFL',
    usedOn:      ['*'],
    notes:       'Body font. Self-hosted via Next.js Google Fonts optimization.',
    addedAt:     '2026-03-31',
  },
  {
    id:          'font-manrope',
    file:        null,
    title:       'Manrope Typeface',
    type:        'font',
    provider:    'Google Fonts',
    providerUrl: 'https://fonts.google.com',
    sourceUrl:   'https://fonts.google.com/specimen/Manrope',
    author:      'Mikhail Sharanda',
    authorUrl:   null,
    license:     'SIL Open Font License 1.1',
    licenseUrl:  'https://scripts.sil.org/OFL',
    usedOn:      ['*'],
    notes:       'Display/heading font. Self-hosted via Next.js Google Fonts optimization.',
    addedAt:     '2026-03-31',
  },
]

/**
 * Get a single source entry by its id.
 * Returns undefined if not found.
 */
export function getSourceById(id) {
  return sources.find(s => s.id === id)
}

/**
 * Get all sources used on a given page path.
 * Pass '*' to get global assets.
 * Pass a path like '/services/local-seo/' to get page-specific assets.
 */
export function getSourcesForPage(pagePath) {
  return sources.filter(
    s => s.usedOn.includes('*') || s.usedOn.includes(pagePath)
  )
}

/**
 * Get sources grouped by type, for building the /sources page.
 */
export function getSourcesByType() {
  return sources.reduce((acc, source) => {
    const key = source.type
    if (!acc[key]) acc[key] = []
    acc[key].push(source)
    return acc
  }, {})
}

/**
 * Register a new asset source.
 * In development, call this utility to generate the object you need to add above.
 */
export function buildSourceEntry({
  id, file, title, type, provider, providerUrl, sourceUrl,
  author = null, authorUrl = null,
  license, licenseUrl, usedOn = [], notes = '',
}) {
  return {
    id, file, title, type, provider, providerUrl, sourceUrl,
    author, authorUrl, license, licenseUrl, usedOn, notes,
    addedAt: new Date().toISOString().split('T')[0],
  }
}

export default sources
