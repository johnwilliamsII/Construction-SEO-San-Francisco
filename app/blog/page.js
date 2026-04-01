import Section from '../../components/layout/Section'
import CtaBanner from '../../components/sections/CtaBanner'
import { POSTS, PUBLISHED_SLUGS, BADGE_COLORS } from '../../lib/blog-posts'

export const metadata = {
  title: 'Construction SEO Blog | Bay Area Contractor Marketing Tips',
  description:
    'Actionable SEO tips, local search strategies, and Google Business Profile guides for Bay Area construction companies, HVAC contractors, and remodeling businesses.',
  robots: { index: false, follow: false },
}

const CATEGORIES = ['All', 'HVAC Contractors', 'Remodeling Contractors', 'General Guides']

const PUBLISHED_POSTS = POSTS.filter((p) => PUBLISHED_SLUGS.includes(p.slug))

const CATEGORY_ICONS = {
  'HVAC Contractors':       '❄️',
  'Remodeling Contractors': '🏗️',
  'General Guides':         '📋',
}

export default function BlogPage() {
  return (
    <>
      {/* ── Dark Hero (inspired by editorial blog aesthetic) ── */}
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
        {/* Orange glow */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-100px', right: '-60px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Blue glow */}
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
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-manrope)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Insights for Bay Area <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Contractors</em>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.60)',
            lineHeight: 'var(--leading-relaxed)',
            maxWidth: '540px',
            margin: '0 auto 2rem',
          }}>
            Actionable local SEO guides, GBP optimization tips, and lead generation strategies — written specifically for construction businesses and trades.
          </p>

          {/* Stats strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            {[
              { num: '20', label: 'HVAC articles' },
              { num: '20', label: 'Remodeling articles' },
              { num: '20', label: 'General guides' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)' }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.40)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <Section variant="white">
        {/* Category filter */}
        <div className="tabs" style={{ marginBottom: '2rem' }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} className={`tab-button${cat === 'All' ? ' active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        {PUBLISHED_POSTS.length > 0 ? (
          <div className="grid-3">
            {PUBLISHED_POSTS.map((post) => (
              <article key={post.slug} className="glass-card glass-card--sm glass-highlight" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: '100%', aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-subtle) 100%)',
                    borderRadius: 'var(--radius-md)', marginBottom: '1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem', color: 'var(--accent)', opacity: 0.5,
                  }}
                >
                  {CATEGORY_ICONS[post.category]}
                </div>

                <div style={{ padding: '0 0.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <span className={`badge ${BADGE_COLORS[post.category] || 'badge--neutral'}`}>{post.category}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: '0.98rem', lineHeight: 'var(--leading-snug)', marginBottom: 'auto', color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <a href={`/blog/${post.slug}/`} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
                      Read article →
                    </a>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{post.readTime} min</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Coming soon — all articles publishing soon */
          <div>
            {/* Preview grid (shows structure, links disabled) */}
            <p style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-tertiary)', marginBottom: '2rem', fontStyle: 'italic' }}>
              60 articles publishing soon — sign up for the free audit to get notified.
            </p>
            <div className="grid-3">
              {POSTS.map((post) => (
                <div key={post.slug} className="glass-card glass-card--sm" style={{ display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: '100%', aspectRatio: '16/9',
                      background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-subtle) 100%)',
                      borderRadius: 'var(--radius-md)', marginBottom: '1rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.75rem', color: 'var(--accent)', opacity: 0.4,
                    }}
                  >
                    {CATEGORY_ICONS[post.category]}
                  </div>
                  <div style={{ padding: '0 0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className={`badge ${BADGE_COLORS[post.category] || 'badge--neutral'}`}>{post.category}</span>
                    </div>
                    <h3 style={{ fontSize: '0.93rem', lineHeight: 'var(--leading-snug)', color: 'var(--text-secondary)' }}>{post.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
