import CtaBanner from '../../components/sections/CtaBanner'
import Section from '../../components/layout/Section'
import ReadingProgressBar from '../../components/blog/ReadingProgressBar'
import CategoryFilter from '../../components/blog/CategoryFilter'
import { POSTS } from '../../lib/blog-posts'
import { CATEGORIES } from '../../lib/blog-categories'
import { enforceAllPublished } from '../../lib/blog-seo-enforcer'

export const metadata = {
  title: 'Construction SEO Blog: Bay Area Contractor Marketing Tips & Guides | contractorseosanfrancisco.com',
  description:
    'The Construction SEO Blog for Bay Area contractors — local search strategies, Google Business Profile guides, and actionable SEO tips for HVAC, electrical, roofing, and general contractors.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.contractorseobayarea.com/blog/' },
}

/* Run SEO enforcement on all published posts at render/build time */
const PUBLISHED = POSTS.filter((p) => p.published === true)
if (PUBLISHED.length > 0) {
  enforceAllPublished(POSTS, PUBLISHED.map((p) => p.slug))
}

const CATEGORY_COUNT = CATEGORIES.reduce((acc, cat) => {
  acc[cat.slug] = cat.slug === 'all'
    ? PUBLISHED.length
    : PUBLISHED.filter((p) => p.seoCategory === cat.slug).length
  return acc
}, {})

export default function BlogPage() {
  return (
    <>
      {/* ── Reading Progress Bar — blog pages only (Section 1) ── */}
      <ReadingProgressBar />

      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="blog-heading"
        style={{
          background:   'linear-gradient(160deg, #16192A 0%, #1A2240 55%, #1C1F32 100%)',
          position:     'relative',
          overflow:     'hidden',
          padding:      'clamp(3.5rem, 8vw, 6rem) 0 clamp(2.5rem, 5vw, 4rem)',
          textAlign:    'center',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: '-100px', right: '-60px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '5px 16px', borderRadius: '9999px',
            background: 'rgba(232,97,26,0.15)', border: '1px solid rgba(232,97,26,0.30)',
            color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            Construction SEO Blog
          </span>

          <h1 id="blog-heading" style={{
            fontSize:     'clamp(2rem, 4.5vw, 3.2rem)',
            color:        '#FFFFFF',
            fontFamily:   'var(--font-manrope)',
            fontWeight:   800,
            lineHeight:   1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            The <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Construction SEO Blog</em> for Bay Area Contractors
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.60)', lineHeight: 'var(--leading-relaxed)', maxWidth: '540px', margin: '0 auto 2rem' }}>
            The Construction SEO Blog covers local search strategy, Google Business Profile optimization, and lead generation — written for HVAC, roofing, electrical, and general contractors competing in the Bay Area.
          </p>

          {/* Category counts strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { num: PUBLISHED.length,                    label: 'Live Articles'  },
              { num: CATEGORY_COUNT['local-seo']   || 0, label: 'Local SEO'      },
              { num: CATEGORY_COUNT['seo-strategy'] || 0, label: 'SEO Strategy'  },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)' }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.40)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts grid with live category filter (Section 6) ── */}
      <Section variant="white">
        <CategoryFilter posts={PUBLISHED} initialSlug="all" />
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Get Ahead of the Competition"
        heading={<>Free SEO Audit for <em>Bay Area Contractors</em></>}
        body="While these articles publish, get a personalized audit — we'll walk you through exactly what your competitors are doing that you're not."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View Packages', href: '/seo-packages-for-contractors/' }}
      />
    </>
  )
}
