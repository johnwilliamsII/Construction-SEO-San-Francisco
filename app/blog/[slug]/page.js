import { notFound } from 'next/navigation'
import { POSTS, PUBLISHED_SLUGS } from '../../../lib/blog-posts'
import { getCategoryBadgeColor, getCategoryLabel } from '../../../lib/blog-categories'
import { generatePostSchema } from '../../../lib/blog-schema'
import { enforceSEOFields } from '../../../lib/blog-seo-enforcer'
import { BLOG_CONTENT } from '../../../lib/blog-content'
import ReadingProgressBar from '../../../components/blog/ReadingProgressBar'
import TableOfContents from '../../../components/blog/TableOfContents'
import CtaBanner from '../../../components/sections/CtaBanner'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Article Not Found' }

  const isPublished = post.published === true

  /* ── Run SEO enforcement on published posts at metadata generation time ── */
  if (isPublished) {
    enforceSEOFields(post)
  }

  /* ── Prefer explicit metaTitle / metaDescription; fall back gracefully ── */
  const title = post.metaTitle
    || `${post.title} | contractorseosanfrancisco.com`

  const description = post.metaDescription
    || `${getCategoryLabel(post.seoCategory)} guide: ${post.title}. Actionable local SEO advice for Bay Area contractors.`

  return {
    title,
    description,
    robots: isPublished ? undefined : { index: false, follow: false },
    alternates: { canonical: `/blog/${params.slug}/` },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author || 'Contractor SEO SF Team'],
    },
  }
}

/* ── Placeholder TOC for unpublished posts ── */
const DEFAULT_TOC = [
  { id: 'overview',       label: 'Overview',                  level: 2 },
  { id: 'why-it-matters', label: 'Why It Matters',             level: 2 },
  { id: 'step-by-step',   label: 'Step-by-Step Strategy',      level: 2 },
  { id: 'common-mistakes',label: 'Common Mistakes',            level: 3 },
  { id: 'bay-area-context',label: 'Bay Area Context',          level: 3 },
  { id: 'tools',          label: 'Tools & Resources',           level: 2 },
  { id: 'faq',            label: 'Frequently Asked Questions',  level: 2 },
  { id: 'next-steps',     label: 'Next Steps',                  level: 2 },
]

const CATEGORY_ICONS = {
  'local-seo':        '📍',
  'link-building':    '🔗',
  'keyword-research': '🔍',
  'ai-tools':         '🤖',
  'seo-strategy':     '📈',
  'case-studies':     '📊',
}

export default function BlogPostPage({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const isPublished  = post.published === true
  const toc          = post.toc || DEFAULT_TOC
  const badgeClass   = getCategoryBadgeColor(post.seoCategory)
  const categoryLabel = getCategoryLabel(post.seoCategory)
  const categoryIcon  = CATEGORY_ICONS[post.seoCategory] || '📋'

  /* ── JSON-LD schema blocks (array — Article + optionally HowTo/FAQPage/LocalBusiness) ── */
  const schemas = isPublished ? generatePostSchema(post) : []

  /* ── Content HTML for published posts ── */
  const contentHtml = BLOG_CONTENT[post.slug] || null

  return (
    <>
      {/* ── JSON-LD Schema ── */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <ReadingProgressBar />

      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="post-title"
        style={{
          background:  'linear-gradient(160deg, #16192A 0%, #1A2240 50%, #1C1F32 100%)',
          position:    'relative',
          overflow:    'hidden',
          padding:     'clamp(3.5rem, 8vw, 6rem) 0 clamp(2.5rem, 5vw, 4rem)',
        }}
      >
        {/* Orange glow orb */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,97,26,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Blue glow orb */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* ── Category breadcrumb + back link ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/blog/" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
              ← Blog
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            {/* Category badge — links to filtered archive */}
            <a
              href={`/blog/?category=${post.seoCategory}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                padding: '4px 14px', borderRadius: '9999px',
                background: 'rgba(232,97,26,0.18)', border: '1px solid rgba(232,97,26,0.35)',
                color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              {categoryIcon} {categoryLabel}
            </a>
          </div>

          {/* ── Title ── */}
          <h1
            id="post-title"
            style={{
              fontSize:      'clamp(1.8rem, 4vw, 3rem)',
              color:         '#FFFFFF',
              fontFamily:    'var(--font-manrope)',
              fontWeight:    800,
              lineHeight:    1.2,
              letterSpacing: '-0.02em',
              marginBottom:  '1.25rem',
            }}
          >
            {post.title}
          </h1>

          {/* ── Meta row ── */}
          <div style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            '1.5rem',
            flexWrap:       'wrap',
            fontSize:       '0.85rem',
            color:          'rgba(255,255,255,0.50)',
            marginBottom:   '2.5rem',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {post.author || 'Contractor SEO SF Team'}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 1v3M11 1v3M2 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {post.readTime} min read
            </span>
          </div>

          {/* ── Featured image ── */}
          {post.featuredImage ? (
            /* Real Unsplash image — fetch via lib/unsplash.js and save to post object */
            <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto' }}>
              <div style={{
                aspectRatio: '16/9', borderRadius: 'var(--radius-xl)',
                overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="eager"
                />
              </div>
              {/* Unsplash photographer credit — required by Unsplash ToS */}
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.30)', marginTop: '0.4rem', textAlign: 'right' }}>
                Photo by{' '}
                <a
                  href={post.featuredImage.photographerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}
                >
                  {post.featuredImage.photographer}
                </a>
                {' '}on Unsplash
              </p>
            </div>
          ) : (
            /* Placeholder when no featuredImage configured yet */
            <div
              aria-hidden="true"
              style={{
                width:          '100%',
                maxWidth:       '720px',
                margin:         '0 auto',
                aspectRatio:    '16/9',
                borderRadius:   'var(--radius-xl)',
                background:     'linear-gradient(135deg, rgba(232,97,26,0.12) 0%, rgba(37,99,235,0.08) 100%)',
                border:         '1px solid rgba(255,255,255,0.08)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontSize:       '3rem',
                color:          'rgba(255,255,255,0.15)',
                overflow:       'hidden',
              }}
            >
              {categoryIcon}
            </div>
          )}
        </div>
      </section>

      {/* ── Body: TOC + Content ── */}
      <div
        style={{
          background:     'var(--bg-surface)',
          paddingTop:     'clamp(2rem, 4vw, 3.5rem)',
          paddingBottom:  'clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div
          className="container"
          style={{
            display:             'grid',
            gridTemplateColumns: '260px 1fr',
            gap:                 '3rem',
            alignItems:          'start',
            maxWidth:            '1100px',
            margin:              '0 auto',
          }}
        >
          {/* Left — Table of Contents */}
          <aside>
            <TableOfContents items={toc} />
          </aside>

          {/* Right — Article content */}
          <article style={{ minWidth: 0 }}>

            {/* ── Filed under — category link ── */}
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Filed under:</span>
              <a
                href={`/blog/?category=${post.seoCategory}`}
                className={`badge ${badgeClass}`}
                style={{ textDecoration: 'none', fontSize: '0.78rem' }}
              >
                {categoryIcon} {categoryLabel}
              </a>
            </div>

            {isPublished && contentHtml ? (
              /*
               * ── Rendered article content ──
               *
               * Content is pre-processed HTML stored in lib/blog-content/index.js.
               *
               * To add internal links programmatically, run processInternalLinks()
               * from lib/blog-internal-links.js on the raw HTML before storing it here:
               *
               *   import { processInternalLinks, getLinkedUrls } from '../lib/blog-internal-links'
               *   const linkedHtml = processInternalLinks(rawHtml, getLinkedUrls(rawHtml))
               *
               * Internal links are already woven into the content below for posts 01–03.
               */
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            ) : isPublished ? (
              /* Published but no content file yet — render placeholder */
              <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic', padding: '2rem 0' }}>
                Article content coming soon.
              </div>
            ) : (
              /* Coming soon state for unpublished posts */
              <div
                style={{
                  background:   'var(--bg-subtle)',
                  border:       '1px dashed var(--border-default)',
                  borderRadius: 'var(--radius-xl)',
                  padding:      'clamp(2rem, 5vw, 4rem)',
                  textAlign:    'center',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✍️</div>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Full Article Publishing Soon
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.75rem', fontSize: '0.95rem', lineHeight: 'var(--leading-relaxed)' }}>
                  This guide is being written. While you wait, grab a free SEO audit and we&rsquo;ll personally walk through the core concepts with you.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="/free-seo-audit/" className="btn btn-primary">Get a Free SEO Audit</a>
                  <a href="/blog/" className="btn btn-outline-dark">← Back to Blog</a>
                </div>
              </div>
            )}

            {/* ── Inline CTA — always shown on published posts ── */}
            {isPublished && (
              <div
                style={{
                  marginTop:    '3rem',
                  padding:      '1.5rem',
                  background:   'var(--accent-light)',
                  border:       '1px solid var(--accent-border)',
                  borderRadius: 'var(--radius-lg)',
                  display:      'flex',
                  gap:          '1.25rem',
                  alignItems:   'center',
                  flexWrap:     'wrap',
                }}
              >
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '0.95rem' }}>
                    Stop reading about SEO — start owning it.
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Get a free audit and see exactly what&rsquo;s holding your rankings back.
                  </p>
                </div>
                <a href="/free-seo-audit/" className="btn btn-primary" style={{ flexShrink: 0 }}>
                  Get Free Audit →
                </a>
              </div>
            )}

            {/* ── "Filed under" footer ── */}
            {isPublished && (
              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>More in:</span>
                <a
                  href={`/blog/?category=${post.seoCategory}`}
                  className={`badge ${badgeClass}`}
                  style={{ textDecoration: 'none', fontSize: '0.78rem' }}
                >
                  {categoryIcon} {categoryLabel}
                </a>
                <a href="/blog/" style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginLeft: 'auto', textDecoration: 'none' }}>
                  ← All articles
                </a>
              </div>
            )}
          </article>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <CtaBanner
        label="Ready to Rank?"
        heading={<>Turn What You Learned Into <em>Real Rankings</em></>}
        body="One free audit call. We show you exactly where your site stands and what it takes to outrank every competitor in your Bay Area market."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View All Articles', href: '/blog/' }}
        dark
      />
    </>
  )
}
