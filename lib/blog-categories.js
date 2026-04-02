/* ─────────────────────────────────────────────────────────────────
   BLOG CATEGORY CONFIG — Single source of truth for category taxonomy.

   HOW TO ADD A NEW CATEGORY:
   1. Add an entry to CATEGORIES below (id, label, slug, color).
   2. That's it. The archive filter and post badge pick it up automatically.
      No changes needed in blog/page.js or blog/[slug]/page.js.

   CATEGORY ID RULES:
   - id   : lowercase, hyphen-separated, unique key
   - label: Display name shown in UI
   - slug : used in URL query param: /blog/?category=local-seo
   - color: maps to a CSS badge class in globals.css
─────────────────────────────────────────────────────────────────── */

export const CATEGORIES = [
  { id: 'all',              label: 'All Posts',              slug: 'all',              color: 'badge--neutral'  },
  { id: 'local-seo',        label: 'Local SEO',              slug: 'local-seo',        color: 'badge--accent'   },
  { id: 'link-building',    label: 'Link Building',          slug: 'link-building',    color: 'badge--info'     },
  { id: 'keyword-research', label: 'Keyword Research',       slug: 'keyword-research', color: 'badge--success'  },
  { id: 'ai-tools',         label: 'AI Tools for Contractors', slug: 'ai-tools',       color: 'badge--warning'  },
  { id: 'seo-strategy',     label: 'SEO Strategy',           slug: 'seo-strategy',     color: 'badge--neutral'  },
]

/** Lookup category config by slug. Falls back to 'All Posts' if not found. */
export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0]
}

/** Returns the badge color class for a given category slug. */
export function getCategoryBadgeColor(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.color || 'badge--neutral'
}

/** Returns the display label for a given category slug. */
export function getCategoryLabel(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.label || slug
}

/** Returns all category slugs (excluding 'all') for validation use. */
export const VALID_CATEGORY_SLUGS = CATEGORIES
  .filter((c) => c.slug !== 'all')
  .map((c) => c.slug)
