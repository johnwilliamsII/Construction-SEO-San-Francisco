/* ─────────────────────────────────────────────────────────────────
   UNSPLASH FEATURED IMAGE UTILITY
   Fetches a relevant stock photo for each blog post using the Unsplash API.

   ── SETUP ────────────────────────────────────────────────────────
   Required environment variable: UNSPLASH_ACCESS_KEY
   1. Go to https://unsplash.com/developers and create a free application.
   2. Copy your Access Key.
   3. Add it to your .env.local file:
        UNSPLASH_ACCESS_KEY=your_access_key_here
   4. Restart your dev server.

   ── HOW IT WORKS ─────────────────────────────────────────────────
   - deriveImageQuery(post) → picks a relevant search term based on post title
   - fetchFeaturedImage(post) → calls Unsplash API, returns image metadata
   - If UNSPLASH_ACCESS_KEY is missing, logs a setup instruction and returns null
   - If the API call fails, logs the error and returns null
   - Photographer credit must be displayed beneath the featured image (Unsplash ToS)

   ── RESPONSE SHAPE ───────────────────────────────────────────────
   {
     url: string           // full-size image URL
     thumbUrl: string      // thumbnail URL for previews
     alt: string           // alt text (from Unsplash description)
     photographer: string  // photographer display name
     photographerUrl: string // photographer profile URL with UTM attribution
   }

   ── STORING THE RESULT ───────────────────────────────────────────
   Once fetched, save the result into the post's `featuredImage` field
   in lib/blog-posts.js so subsequent builds don't re-fetch:
     featuredImage: {
       url: 'https://images.unsplash.com/...',
       thumbUrl: '...',
       alt: '...',
       photographer: 'John Doe',
       photographerUrl: 'https://unsplash.com/@johndoe?utm_source=...',
     }
─────────────────────────────────────────────────────────────────── */

const UNSPLASH_API_BASE = 'https://api.unsplash.com'
const UTM = 'utm_source=contractorseosanfrancisco&utm_medium=referral'

/**
 * deriveImageQuery(post) → string
 *
 * Maps a post title to a focused Unsplash search query.
 * Prioritizes photographic, trade-related imagery.
 * Add new mappings here as new post topics are introduced.
 */
export function deriveImageQuery(post) {
  const t = post.title.toLowerCase()

  if (t.includes('hvac') || t.includes('ac repair') || t.includes('heating') || t.includes('air conditioning'))
    return 'HVAC technician work'
  if (t.includes('kitchen'))
    return 'kitchen remodel renovation'
  if (t.includes('bathroom'))
    return 'bathroom renovation contractor'
  if (t.includes('roofing') || t.includes('roof'))
    return 'roofing contractor work'
  if (t.includes('flooring'))
    return 'flooring installation'
  if (t.includes('adu') || t.includes('accessory dwelling') || t.includes('home addition'))
    return 'home addition construction'
  if (t.includes('deck') || t.includes('fence'))
    return 'deck fence outdoor construction'
  if (t.includes('google maps') || t.includes('google business') || t.includes('gbp'))
    return 'contractor smartphone business'
  if (t.includes('website') || t.includes('seo') || t.includes('keyword') || t.includes('search'))
    return 'contractor laptop office work'
  if (t.includes('san francisco') || t.includes('bay area'))
    return 'San Francisco construction site'
  if (t.includes('oakland') || t.includes('east bay'))
    return 'Oakland construction worker'
  if (t.includes('remodel') || t.includes('renovation'))
    return 'home remodeling construction'
  if (t.includes('plumb'))
    return 'plumber work pipes'
  if (t.includes('electric'))
    return 'electrician work'
  if (t.includes('landscap') || t.includes('lawn'))
    return 'landscaping contractor'
  if (t.includes('review') || t.includes('reputation'))
    return 'contractor customer handshake'
  if (t.includes('link building') || t.includes('backlink'))
    return 'construction blueprint planning'
  if (t.includes('case study') || t.includes('revenue') || t.includes('leads'))
    return 'construction business success'
  if (t.includes('mobile'))
    return 'contractor using phone on site'

  return 'construction contractor work'
}

/**
 * fetchFeaturedImage(post) → Promise<ImageResult | null>
 *
 * Fetches a featured image from Unsplash for the given post.
 * Logs a setup warning and returns null if UNSPLASH_ACCESS_KEY is not set.
 * Logs a fetch error and returns null if the API call fails.
 *
 * Must be called server-side (not in a client component).
 */
export async function fetchFeaturedImage(post) {
  const key = process.env.UNSPLASH_ACCESS_KEY

  if (!key) {
    console.warn(
      '\n📸 [Unsplash] UNSPLASH_ACCESS_KEY is not configured.',
      '\n──────────────────────────────────────────────',
      '\n To enable auto-featured images for blog posts:',
      '\n 1. Visit https://unsplash.com/developers',
      '\n 2. Create a free application (takes ~2 minutes)',
      '\n 3. Copy your Access Key',
      '\n 4. Add to .env.local: UNSPLASH_ACCESS_KEY=your_key_here',
      '\n 5. Restart your dev server',
      `\n\n Post "${post.slug}" will show a placeholder image until configured.`,
      '\n──────────────────────────────────────────────\n',
    )
    return null
  }

  const query = deriveImageQuery(post)

  try {
    const res = await fetch(
      `${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&per_page=5&content_filter=high`,
      {
        headers: { Authorization: `Client-ID ${key}` },
        next: { revalidate: 86400 }, // cache for 24h in Next.js
      }
    )

    if (!res.ok) {
      throw new Error(`Unsplash API responded with ${res.status}: ${res.statusText}`)
    }

    const data = await res.json()
    const photo = data?.results?.[0]

    if (!photo) {
      console.warn(`[Unsplash] No results found for query "${query}" (post: "${post.slug}")`)
      return null
    }

    return {
      url:             photo.urls.regular,
      thumbUrl:        photo.urls.thumb,
      alt:             photo.alt_description || query,
      photographer:    photo.user.name,
      photographerUrl: `${photo.user.links.html}?${UTM}`,
    }
  } catch (err) {
    console.warn(`[Unsplash] Failed to fetch image for post "${post.slug}": ${err.message}`)
    return null
  }
}
