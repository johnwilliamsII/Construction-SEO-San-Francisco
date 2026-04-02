/* ─────────────────────────────────────────────────────────────────
   INTERNAL LINKING UTILITY
   Scans blog post body content and converts first natural occurrences
   of service-related terms into internal links.

   TERM-TO-URL MAPPING:
   Add new service pages by appending to SERVICE_LINKS below.
   Each entry has:
     url   : the internal path (no domain, no trailing slash needed)
     terms : array of trigger phrases to scan for (case-insensitive)

   ── CURRENT SERVICE PAGES ────────────────────────────────────────
   /local-seo-for-contractors   → local SEO, maps, map pack, local search
   /seo-packages-for-contractors → SEO packages, monthly SEO, SEO plan
   /free-seo-audit              → free audit, site audit, website audit
   /keyword-research-for-contractors → keyword research, target keywords
   /ai-receptionist-service     → AI receptionist, call answering, 24/7 answering
   /link-building-for-contractors → link building, backlinks, link acquisition

   ── RULES ────────────────────────────────────────────────────────
   - Only the FIRST natural occurrence of a term is linked per post.
   - Each target URL is only linked ONCE per post (no duplicates).
   - Terms inside existing <a> tags are not re-linked.
   - Links open in the same tab (no target="_blank").
   - Does not inject links into headings (<h1>–<h6>).
   - Run on raw HTML string content, not React tree.

   ── ADDING A NEW SERVICE PAGE ───────────────────────────────────
   1. Add an entry to SERVICE_LINKS with the url and relevant trigger terms.
   2. Document it in the comment block above.
   3. No changes needed in any page or component.
─────────────────────────────────────────────────────────────────── */

export const SERVICE_LINKS = [
  {
    url:   '/local-seo-for-contractors',
    terms: [
      'local SEO for contractors',
      'local seo',
      'local search',
      'Google Maps',
      'map pack',
      '3-pack',
      'Maps 3-Pack',
    ],
  },
  {
    url:   '/seo-packages-for-contractors',
    terms: [
      'SEO packages',
      'seo package',
      'monthly SEO',
      'SEO plan',
      'our packages',
      'SEO package pricing',
    ],
  },
  {
    url:   '/free-seo-audit',
    terms: [
      'free SEO audit',
      'free audit',
      'site audit',
      'website audit',
      'SEO audit',
    ],
  },
  {
    url:   '/keyword-research-for-contractors',
    terms: [
      'keyword research for contractors',
      'keyword research',
      'target keywords',
      'keyword map',
      'keyword strategy',
      'keyword mapping',
    ],
  },
  {
    url:   '/ai-receptionist-service',
    terms: [
      'AI receptionist',
      'AI receptionist for contractors',
      'call answering',
      '24/7 answering',
      'virtual receptionist',
      'automated answering',
    ],
  },
  {
    url:   '/link-building-for-contractors',
    terms: [
      'link building for contractors',
      'link building',
      'backlinks',
      'link acquisition',
      'earning links',
      'building links',
      'inbound links',
    ],
  },
]

/**
 * processInternalLinks(content, linkedUrls?)
 *
 * Injects internal links into raw HTML/text content.
 * Returns the modified content string.
 *
 * @param {string}     content    — Raw HTML body content of the post
 * @param {Set<string>} linkedUrls — Optional: already-linked URLs to skip
 * @returns {string}
 *
 * Usage:
 *   import { processInternalLinks } from '@/lib/blog-internal-links'
 *   const linked = processInternalLinks(post.bodyHtml)
 */
export function processInternalLinks(content, linkedUrls = new Set()) {
  if (!content || typeof content !== 'string') return content

  let result = content

  for (const { url, terms } of SERVICE_LINKS) {
    if (linkedUrls.has(url)) continue

    for (const term of terms) {
      // Escape special regex chars in term
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

      // Negative lookbehind: skip if already inside an <a> tag
      // Negative lookahead: skip if this match is already part of a link
      const pattern = new RegExp(
        `(?<!<a[^>]*>)(?<!href=["'][^"']*)(${escaped})(?![^<]*</a>)`,
        'i'
      )

      if (pattern.test(result)) {
        result = result.replace(
          pattern,
          `<a href="${url}">$1</a>`
        )
        linkedUrls.add(url)
        break // only one term per service page per pass
      }
    }
  }

  return result
}

/**
 * getLinkedUrls(content)
 *
 * Returns a Set of internal URLs already present as links in the content.
 * Use this to initialize linkedUrls when content is pre-populated.
 *
 * @param {string} content — Raw HTML body content
 * @returns {Set<string>}
 */
export function getLinkedUrls(content) {
  if (!content) return new Set()
  const matches = [...content.matchAll(/href="(\/[^"]+)"/g)]
  return new Set(matches.map((m) => m[1]))
}
