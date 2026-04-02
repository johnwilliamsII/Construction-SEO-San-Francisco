import { POSTS } from '../lib/blog-posts'

const BASE = 'https://www.contractorseobayarea.com'
const NOW  = new Date().toISOString()

/**
 * Next.js App Router sitemap — auto-served at /sitemap.xml
 * Priority tiers:
 *   1.00  Homepage
 *   0.95  Primary conversion page
 *   0.90  Core money pages (main service hubs)
 *   0.80  Secondary service + authority pages
 *   0.75  Blog index + contact
 *   0.70  Blog articles (published only)
 *   0.60  Supporting service sub-pages
 */
export default function sitemap() {
  /* ── 1. Static pages ──────────────────────────────────────── */
  const staticPages = [

    // Tier 1 — Homepage
    { url: `${BASE}/`,                                priority: 1.00, changeFrequency: 'weekly'  },

    // Tier 2 — Primary conversion
    { url: `${BASE}/free-seo-audit/`,                 priority: 0.95, changeFrequency: 'monthly' },

    // Tier 3 — Core money pages
    { url: `${BASE}/seo-packages-for-contractors/`,   priority: 0.90, changeFrequency: 'monthly' },
    { url: `${BASE}/local-seo-for-contractors/`,      priority: 0.90, changeFrequency: 'monthly' },
    { url: `${BASE}/link-building-for-contractors/`,  priority: 0.90, changeFrequency: 'monthly' },
    { url: `${BASE}/keyword-research-for-contractors/`, priority: 0.88, changeFrequency: 'monthly' },
    { url: `${BASE}/ai-receptionist-service/`,        priority: 0.88, changeFrequency: 'monthly' },

    // Tier 4 — Authority & trust pages
    { url: `${BASE}/bay-area-seo-company/`,           priority: 0.82, changeFrequency: 'monthly' },
    { url: `${BASE}/case-studies/`,                   priority: 0.80, changeFrequency: 'monthly' },

    // Tier 5 — Blog index + contact
    { url: `${BASE}/blog/`,                           priority: 0.75, changeFrequency: 'weekly'  },
    { url: `${BASE}/contact/`,                        priority: 0.75, changeFrequency: 'yearly'  },

    // Tier 6 — Supporting service sub-pages
    { url: `${BASE}/services/`,                       priority: 0.65, changeFrequency: 'monthly' },
    { url: `${BASE}/services/local-seo/`,             priority: 0.62, changeFrequency: 'monthly' },
    { url: `${BASE}/services/gbp/`,                   priority: 0.62, changeFrequency: 'monthly' },
    { url: `${BASE}/services/seo-packages/`,          priority: 0.62, changeFrequency: 'monthly' },
    { url: `${BASE}/services/keyword-research/`,      priority: 0.62, changeFrequency: 'monthly' },
    { url: `${BASE}/services/link-building/`,         priority: 0.62, changeFrequency: 'monthly' },
    { url: `${BASE}/services/ai-receptionist/`,       priority: 0.62, changeFrequency: 'monthly' },
    { url: `${BASE}/resources/`,                      priority: 0.55, changeFrequency: 'monthly' },

    // Intentionally excluded: /sources/ (utility), /free-seo-audit/thank-you/ (noindex)
  ].map((page) => ({ ...page, lastModified: NOW }))

  /* ── 2. Blog posts — published only ──────────────────────── */
  const blogPages = POSTS
    .filter((post) => post.published === true)
    .map((post) => ({
      url:             `${BASE}/blog/${post.slug}/`,
      lastModified:    post.isoDate ? new Date(post.isoDate).toISOString() : NOW,
      changeFrequency: 'monthly',
      priority:        0.70,
    }))

  return [...staticPages, ...blogPages]
}
