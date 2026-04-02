/* ─────────────────────────────────────────────────────────────────
   BLOG SEO FIELD ENFORCER
   Validates required SEO fields for every published blog post.

   RULES ENFORCED:
   1. post.keyword       — must be defined (non-null, non-empty string)
   2. post.metaTitle     — must be defined AND contain the verbatim keyword
                           Format must be: "Primary Keyword | contractorseosanfrancisco.com"
   3. post.metaDescription — must be defined, 140–155 characters,
                             and contain the verbatim keyword
   4. H1 keyword check   — checked at render time by the post component
                           (see app/blog/[slug]/page.js)
   5. H2 keyword check   — checked at render time by the post component

   BEHAVIOR:
   - Logs all failures as ⚠️  console.warn messages
   - Does NOT throw or block the build
   - Only runs for posts in PUBLISHED_SLUGS (no noise from unpublished drafts)
   - Each failure is identified by slug and field name for quick lookup
─────────────────────────────────────────────────────────────────── */

const SITE_DOMAIN  = 'contractorseosanfrancisco.com'
const META_DESC_MIN = 140
const META_DESC_MAX = 155
const WARN_PREFIX  = '⚠️  [SEO Enforcer]'

/**
 * enforceSEOFields(post)
 *
 * Runs validation on a single post object.
 * Returns an array of warning strings (empty = all clear).
 * Also logs each warning to console.warn.
 *
 * Call this in generateMetadata() or the page component for published posts.
 */
export function enforceSEOFields(post) {
  const warnings = []
  const id = `post "${post.slug}"`

  const warn = (msg) => {
    const line = `${WARN_PREFIX} ${id} — ${msg}`
    warnings.push(line)
    console.warn(line)
  }

  /* 1. Primary keyword */
  if (!post.keyword || post.keyword.trim() === '') {
    warn('MISSING primary keyword. Add post.keyword before publishing.')
    // Can't validate downstream fields without keyword — exit early
    return warnings
  }

  const kw = post.keyword.trim().toLowerCase()

  /* 2. Meta title */
  if (!post.metaTitle) {
    warn(`MISSING metaTitle. Expected format: "${post.keyword} | ${SITE_DOMAIN}"`)
  } else {
    if (!post.metaTitle.toLowerCase().includes(kw)) {
      warn(`KEYWORD missing from metaTitle. Keyword: "${post.keyword}" | Title: "${post.metaTitle}"`)
    }
    if (!post.metaTitle.includes(`| ${SITE_DOMAIN}`)) {
      warn(`metaTitle does not follow required format: "Primary Keyword | ${SITE_DOMAIN}"`)
    }
  }

  /* 3. Meta description */
  if (!post.metaDescription) {
    warn('MISSING metaDescription. Must be 140–155 characters and contain the verbatim keyword.')
  } else {
    const len = post.metaDescription.length
    if (len < META_DESC_MIN || len > META_DESC_MAX) {
      warn(`metaDescription is ${len} chars (must be ${META_DESC_MIN}–${META_DESC_MAX}). "${post.metaDescription}"`)
    }
    if (!post.metaDescription.toLowerCase().includes(kw)) {
      warn(`KEYWORD missing from metaDescription. Keyword: "${post.keyword}"`)
    }
  }

  /* 4 & 5. H1 / H2 — these are rendered from post.title and post.toc.
     The post component calls checkRenderedKeyword() below at render time. */

  if (warnings.length === 0) {
    // Soft confirmation in dev — remove or gate behind NODE_ENV if noisy
    if (process.env.NODE_ENV === 'development') {
      console.info(`✅ [SEO Enforcer] post "${post.slug}" passed all SEO checks.`)
    }
  }

  return warnings
}

/**
 * checkRenderedKeyword(post, element, value)
 *
 * Checks that the verbatim keyword appears in a rendered text element (H1, H2).
 * Logs a warning if absent. Call from the post page component at render time.
 *
 * @param {object} post    — post metadata object with .keyword and .slug
 * @param {string} element — element name for logging ('H1', 'H2', etc.)
 * @param {string} value   — the rendered text content to check against
 */
export function checkRenderedKeyword(post, element, value) {
  if (!post.keyword || !value) return
  const kw = post.keyword.trim().toLowerCase()
  if (!value.toLowerCase().includes(kw)) {
    console.warn(
      `${WARN_PREFIX} post "${post.slug}" — KEYWORD missing from ${element}.`,
      `\n   Keyword: "${post.keyword}"`,
      `\n   ${element} value: "${value}"`,
    )
  }
}

/**
 * enforceAllPublished(posts, publishedSlugs)
 *
 * Convenience runner — validates all published posts in one call.
 * Use in a build script or in the blog archive page's server component.
 */
export function enforceAllPublished(posts, publishedSlugs) {
  const published = posts.filter((p) => publishedSlugs.includes(p.slug))
  if (published.length === 0) return

  console.info(`\n[SEO Enforcer] Checking ${published.length} published post(s)...\n`)
  let failCount = 0

  published.forEach((post) => {
    const warnings = enforceSEOFields(post)
    if (warnings.length > 0) failCount++
  })

  if (failCount > 0) {
    console.warn(
      `\n${WARN_PREFIX} ${failCount} post(s) failed SEO validation.`,
      'Fix the warnings above before deploying.\n',
    )
  } else {
    console.info('[SEO Enforcer] All published posts passed validation.\n')
  }
}
