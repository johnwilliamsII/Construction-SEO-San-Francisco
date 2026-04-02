/* ─────────────────────────────────────────────────────────────────
   BLOG POST SCHEMA UTILITY
   Generates JSON-LD structured data for every blog post.

   ── BASE SCHEMA (every post gets this) ──────────────────────────
   Article — includes headline, dates, author, image, publisher,
   mainEntityOfPage, and inLanguage.

   ── PRIMARY TYPE CLASSIFICATION ─────────────────────────────────
   One of the following is applied to every post based on TYPE_RULES:

   HowTo        Applied when the post title contains instructional
                language: starts with "How to", "How [Name]", includes
                "Step-by-Step", "Checklist", "Walkthrough", or "Guide to".
                Uses post.howToSteps[] if available; falls back to a single
                generic step derived from the title.

   FAQPage      Applied when the post title contains "What Is", "FAQ", or
                "Everything You Need to Know", OR post.faq === true, OR the
                title is phrased as a direct question (starts with a question
                word and ends with "?"). Uses post.faqItems[] for Q&A pairs.

   BlogPosting  Default. Applied to opinion pieces, market analysis, guides,
                case studies, and any post that does not match HowTo or FAQPage.

   ── SECONDARY SCHEMA (appended when relevant) ───────────────────
   LocalBusiness — added as a SECOND schema block (not replacing the
                   primary) when post.localBusiness === true, OR when the
                   post title contains a Bay Area city or region name.

   ── HOW TO ADD A NEW SCHEMA TYPE ────────────────────────────────
   1. Add a rule object to TYPE_RULES: { type: 'MyType', test: (post) => boolean }
   2. Add a build function: buildMyTypeSchema(post, base)
   3. Add a case to the switch in generatePostSchema()
   4. Document the rule above in this comment block.
─────────────────────────────────────────────────────────────────── */

const SITE_NAME = 'contractorseosanfrancisco.com'
const SITE_URL  = 'https://contractorseosanfrancisco.com'
const DEFAULT_AUTHOR = 'Contractor SEO SF Team'
const DEFAULT_IMAGE  = `${SITE_URL}/images/blog-default.jpg`

/* ── Classification rules ── evaluated in order, first match wins ── */
const TYPE_RULES = [
  {
    type: 'HowTo',
    test: (post) => {
      const t = post.title.toLowerCase()
      return (
        /^how (to |jake|jenny|a |an )/.test(t) ||
        t.includes('step-by-step') ||
        t.includes('checklist')    ||
        t.includes('walkthrough')  ||
        t.includes('guide to')     ||
        t.includes('full setup')
      )
    },
  },
  {
    type: 'FAQPage',
    test: (post) => {
      const t = post.title.toLowerCase()
      return (
        post.faq === true                             ||
        t.startsWith('what is')                       ||
        t.includes(' faq')                            ||
        t.includes('everything you need to know')     ||
        (t.endsWith('?') && /^(what|why|how|when|where|which)/.test(t))
      )
    },
  },
]

/* ── Classifiers ─────────────────────────────────────────────── */

/** Returns 'HowTo' | 'FAQPage' | 'BlogPosting' */
export function classifyPost(post) {
  for (const rule of TYPE_RULES) {
    if (rule.test(post)) return rule.type
  }
  return 'BlogPosting'
}

/** Returns true when the post should include a secondary LocalBusiness block */
function needsLocalBusiness(post) {
  if (post.localBusiness === true) return true
  const t = post.title.toLowerCase()
  const BAY_AREA_TERMS = [
    'bay area', 'san francisco', 'oakland', 'san jose',
    'san mateo', 'peninsula', 'east bay', 'south bay',
    'marin', 'berkeley', 'fremont', 'daly city',
  ]
  return BAY_AREA_TERMS.some((term) => t.includes(term))
}

/* ── Schema builders ─────────────────────────────────────────── */

function buildBaseArticle(post, schemaType) {
  const postUrl  = `${SITE_URL}/blog/${post.slug}/`
  const imageUrl = post.featuredImage?.url || DEFAULT_IMAGE
  const today    = new Date().toISOString().split('T')[0]

  return {
    '@type': schemaType,
    headline: post.title,
    name:     post.title,
    url:      postUrl,
    datePublished:  post.isoDate         || today,
    dateModified:   post.isoDateModified || post.isoDate || today,
    author: {
      '@type': 'Person',
      name: post.author || DEFAULT_AUTHOR,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url:  SITE_URL,
    },
    image: {
      '@type': 'ImageObject',
      url:    imageUrl,
      width:  1200,
      height: 630,
    },
    description: post.metaDescription || post.excerpt || `${post.title} — ${SITE_NAME}`,
    mainEntityOfPage: {
      '@type': '@WebPage',
      '@id':   postUrl,
    },
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: `${SITE_NAME} Blog`,
      url:  `${SITE_URL}/blog/`,
    },
  }
}

function buildHowToSchema(post, base) {
  const steps = (post.howToSteps || [{ name: post.title, text: post.excerpt || post.title }])
    .map((s, i) => ({
      '@type':   'HowToStep',
      position:  i + 1,
      name:      s.name,
      text:      s.text,
    }))
  return { ...base, '@type': 'HowTo', step: steps }
}

function buildFAQSchema(post, base) {
  const entities = (post.faqItems || []).map((item) => ({
    '@type': 'Question',
    name:    item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  }))
  return { ...base, '@type': 'FAQPage', mainEntity: entities }
}

function buildBlogPostingSchema(post, base) {
  return { ...base, '@type': 'BlogPosting' }
}

function buildLocalBusinessSchema() {
  return {
    '@type':       'LocalBusiness',
    name:          SITE_NAME,
    url:           SITE_URL,
    description:   'SEO services built exclusively for Bay Area contractors and construction companies.',
    areaServed: [
      { '@type': 'City', name: 'San Francisco' },
      { '@type': 'City', name: 'Oakland'       },
      { '@type': 'City', name: 'San Jose'      },
      { '@type': 'City', name: 'Berkeley'      },
      { '@type': 'City', name: 'San Mateo'     },
    ],
    serviceType: 'SEO for Contractors',
    priceRange:  '$$$',
  }
}

/* ── Public API ──────────────────────────────────────────────── */

/**
 * generatePostSchema(post)
 *
 * Returns an array of JSON-LD schema objects for injection into the page.
 * Always returns at least one block. Appends LocalBusiness as a second
 * block when the post is Bay Area-specific.
 *
 * Usage in Next.js App Router page:
 *   const schemas = generatePostSchema(post)
 *   // then in JSX:
 *   {schemas.map((s, i) => (
 *     <script key={i} type="application/ld+json"
 *       dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
 *   ))}
 */
export function generatePostSchema(post) {
  const primaryType = classifyPost(post)
  const base        = buildBaseArticle(post, primaryType)

  let primary
  switch (primaryType) {
    case 'HowTo':   primary = buildHowToSchema(post, base);      break
    case 'FAQPage': primary = buildFAQSchema(post, base);         break
    default:        primary = buildBlogPostingSchema(post, base); break
  }

  const schemas = [{ '@context': 'https://schema.org', ...primary }]

  if (needsLocalBusiness(post)) {
    schemas.push({ '@context': 'https://schema.org', ...buildLocalBusinessSchema() })
  }

  return schemas
}
