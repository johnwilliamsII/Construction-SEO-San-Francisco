'use client'

import { useState, useMemo } from 'react'
import { CATEGORIES, getCategoryBadgeColor } from '../../lib/blog-categories'

/**
 * CategoryFilter
 *
 * Client component that renders:
 *  - Clickable category tab bar
 *  - Filtered post grid based on active category
 *
 * Props:
 *   posts        — full array of post objects from blog-posts.js
 *   initialSlug  — category slug to activate on mount (from URL param or 'all')
 *
 * Category filtering is purely client-side — no page reload required.
 * To add a new category, update lib/blog-categories.js only.
 */

const CATEGORY_ICONS = {
  'local-seo':        '📍',
  'link-building':    '🔗',
  'keyword-research': '🔍',
  'ai-tools':         '🤖',
  'seo-strategy':     '📈',
}

export default function CategoryFilter({ posts, initialSlug = 'all' }) {
  const [active, setActive] = useState(initialSlug)

  const filtered = useMemo(() => {
    if (active === 'all') return posts
    return posts.filter((p) => p.seoCategory === active)
  }, [active, posts])

  return (
    <>
      {/* ── Category tabs ── */}
      <div
        role="tablist"
        aria-label="Filter posts by category"
        style={{
          display:    'flex',
          flexWrap:   'wrap',
          gap:        '0.5rem',
          marginBottom: '2rem',
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.slug
          return (
            <button
              key={cat.slug}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.slug)}
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '0.35rem',
                padding:        '7px 18px',
                borderRadius:   '9999px',
                border:         isActive
                  ? '1.5px solid var(--accent)'
                  : '1.5px solid var(--border-default)',
                background:     isActive ? 'var(--accent)' : 'transparent',
                color:          isActive ? '#fff' : 'var(--text-secondary)',
                fontSize:       '0.83rem',
                fontWeight:     isActive ? 700 : 500,
                cursor:         'pointer',
                transition:     'all 0.18s ease',
                letterSpacing:  '0.01em',
              }}
            >
              {cat.slug !== 'all' && (
                <span aria-hidden="true" style={{ fontSize: '0.85em' }}>
                  {CATEGORY_ICONS[cat.slug]}
                </span>
              )}
              {cat.label}
              <span style={{
                fontSize: '0.72rem',
                opacity: 0.7,
                marginLeft: '2px',
              }}>
                {cat.slug === 'all'
                  ? `(${posts.length})`
                  : `(${posts.filter((p) => p.seoCategory === cat.slug).length})`
                }
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Post grid ── */}
      {filtered.length > 0 ? (
        <div className="grid-3">
          {filtered.map((post) => {
            const badgeColor = getCategoryBadgeColor(post.seoCategory)
            const isPublished = post.published === true

            return (
              <article
                key={post.slug}
                className={`glass-card glass-card--sm glass-highlight${!isPublished ? '' : ''}`}
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  opacity:       isPublished ? 1 : 0.72,
                  position:      'relative',   /* anchor for stretched link */
                }}
              >
                {/* ── Stretched link — covers the whole card except category badge ── */}
                {isPublished && (
                  <a
                    href={`/blog/${post.slug}/`}
                    aria-label={`Read: ${post.title}`}
                    style={{
                      position:     'absolute',
                      inset:        0,
                      borderRadius: 'inherit',
                      zIndex:       0,
                    }}
                  />
                )}

                {/* Featured image / placeholder */}
                <div
                  aria-hidden="true"
                  style={{
                    width:        '100%',
                    aspectRatio:  '16/9',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1rem',
                    overflow:     'hidden',
                    background:   post.featuredImage
                      ? 'var(--bg-subtle)'
                      : 'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-subtle) 100%)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    fontSize:        '2rem',
                    color:           'var(--accent)',
                    opacity:         post.featuredImage ? 1 : 0.5,
                    cursor:          isPublished ? 'pointer' : 'default',
                  }}
                >
                  {post.featuredImage ? (
                    <img
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt || post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  ) : (
                    <span>{CATEGORY_ICONS[post.seoCategory] || '📋'}</span>
                  )}
                </div>

                <div style={{ padding: '0 0.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                    <a
                      href={`/blog/?category=${post.seoCategory}`}
                      onClick={(e) => { e.preventDefault(); setActive(post.seoCategory) }}
                      className={`badge ${badgeColor}`}
                      style={{ textDecoration: 'none', cursor: 'pointer', position: 'relative', zIndex: 1 }}
                    >
                      {CATEGORY_ICONS[post.seoCategory]} {
                        CATEGORIES.find((c) => c.slug === post.seoCategory)?.label || post.seoCategory
                      }
                    </a>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{post.date}</span>
                  </div>

                  <h3 style={{
                    fontSize:    '0.98rem',
                    lineHeight:  'var(--leading-snug)',
                    marginBottom: 'auto',
                    color:       isPublished ? 'var(--text-primary)' : 'var(--text-primary)',
                    position:    'relative',
                    zIndex:      1,
                    cursor:      isPublished ? 'pointer' : 'default',
                  }}>
                    {post.title}
                  </h3>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    {isPublished ? (
                      <a
                        href={`/blog/${post.slug}/`}
                        style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', position: 'relative', zIndex: 1 }}
                      >
                        Read article →
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                        Publishing soon
                      </span>
                    )}
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      {post.readTime} min
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-tertiary)' }}>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>No posts in this category yet.</p>
          <button
            onClick={() => setActive('all')}
            style={{
              fontSize:   '0.88rem',
              fontWeight: 600,
              color:      'var(--accent)',
              background: 'none',
              border:     'none',
              cursor:     'pointer',
            }}
          >
            View all posts →
          </button>
        </div>
      )}
    </>
  )
}
