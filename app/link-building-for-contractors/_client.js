'use client'

import { useState } from 'react'
import CtaBanner from '../../components/sections/CtaBanner'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const PUBLICATIONS = [
  { name: 'Houzz',                visitors: '28.4M',  da: 88 },
  { name: 'HomeAdvisor',          visitors: '18.2M',  da: 87 },
  { name: 'Angi',                 visitors: '14.5M',  da: 84 },
  { name: 'Thumbtack',            visitors: '12.3M',  da: 83 },
  { name: 'SF Chronicle',         visitors: '8.1M',   da: 94 },
  { name: 'Architectural Digest', visitors: '8.5M',   da: 93 },
  { name: 'SFGate',               visitors: '5.2M',   da: 92 },
  { name: 'Nextdoor',             visitors: '72M',    da: 91 },
  { name: 'Bay Area News Group',  visitors: '4.2M',   da: 86 },
  { name: 'This Old House',       visitors: '4.8M',   da: 82 },
  { name: 'KTVU Fox 2',           visitors: '2.8M',   da: 80 },
  { name: 'Remodeling Magazine',  visitors: '1.2M',   da: 79 },
  { name: 'Construction Dive',    visitors: '2.1M',   da: 78 },
  { name: 'BuildZoom',            visitors: '3.4M',   da: 76 },
  { name: 'Contractor Magazine',  visitors: '890K',   da: 74 },
]

const PACKAGES = [
  {
    id: 'bulk-basic',
    badge: 'Most Popular',
    icon: '📦',
    title: 'Bulk Guest Posts',
    subtitle: 'DA 10–30',
    description: 'High-volume, white-hat guest post links on real niche sites. Best for building foundational authority and domain score fast.',
    highlight: false,
    tiers: [
      { label: '5 Links',  price: '$175',   per: '$35 / link'    },
      { label: '10 Links', price: '$325',   per: '$32.50 / link' },
      { label: '20 Links', price: '$600',   per: '$30 / link'    },
      { label: '30 Links', price: '$850',   per: '$28.33 / link' },
    ],
    features: ['Real niche site placements', 'Permanent do-follow links', 'Manual outreach only', 'Full report + anchor text control'],
  },
  {
    id: 'bulk-standard',
    badge: 'Best Authority',
    icon: '🏆',
    title: 'Bulk Guest Posts',
    subtitle: 'DA 30–65+',
    description: 'Mid-to-high authority guest posts on established niche sites with real audiences. Bigger ranking impact, longer shelf life.',
    highlight: true,
    tiers: [
      { label: '5 Links',  price: '$275',   per: '$55 / link'    },
      { label: '10 Links', price: '$500',   per: '$50 / link'    },
      { label: '20 Links', price: '$925',   per: '$46.25 / link' },
      { label: '30 Links', price: '$1,300', per: '$43.33 / link' },
    ],
    features: ['DA 30–65+ verified authority', 'Real editorial audiences', 'Permanent do-follow links', 'Full report + anchor text control'],
  },
  {
    id: 'niche-edit',
    badge: 'Highest Value',
    icon: '🎯',
    title: 'Single Niche Edit',
    subtitle: 'Per Placement',
    description: 'One high-authority, niche-specific link inserted into existing content on a relevant industry site. Maximum relevance signal.',
    highlight: false,
    tiers: [
      { label: '1 Niche Edit', price: '$400', per: 'per placement' },
    ],
    features: ['Industry-specific site targeting', 'Inserted into aged content', 'Highest contextual relevance', 'Construction / home niche only'],
  },
  {
    id: 'press-release',
    badge: 'Brand Authority',
    icon: '📰',
    title: 'Press Release Distribution',
    subtitle: 'News Wire Syndication',
    description: 'Professionally written press release distributed to real news outlets and wire services — builds brand signals and earns editorial links.',
    highlight: false,
    tiers: [
      { label: 'Standard — 50+ Outlets',  price: '$570',   per: 'one-time' },
      { label: 'Premium — 200+ Outlets',  price: '$1,425', per: 'one-time' },
    ],
    features: ['PR copywriting included', 'Syndicated to Google News partners', 'Permanent news archive links', 'SF Chronicle & SFGate network eligible'],
  },
  {
    id: 'local-press',
    badge: 'Bay Area Focus',
    icon: '📍',
    title: 'Local Press Outreach',
    subtitle: 'Editorial Placement',
    description: 'We pitch your story to real Bay Area journalists for editorial coverage — the most powerful link you can earn.',
    highlight: false,
    tiers: [
      { label: 'Local — Neighborhood / City',   price: '$300', per: 'per placement' },
      { label: 'Regional — Bay Area Wide',       price: '$450', per: 'per placement' },
      { label: 'National — Major Publications',  price: '$600', per: 'per placement' },
    ],
    features: ['Genuine editorial outreach', 'Bay Area journalist network', 'Real story angle development', 'Highest trust signal to Google'],
  },
]

const STEPS = [
  { num: '01', title: 'Link Profile Audit',     body: 'We analyze your current backlinks, your top competitors\' link profiles, and the gap between you and the #1 ranking contractor in your area.' },
  { num: '02', title: 'Strategy & Target List', body: 'Based on your trade, service area, and budget, we build a prioritized list of specific sites and publications to target.' },
  { num: '03', title: 'Manual Outreach',        body: 'Our team reaches out to editors, site owners, and journalists directly. No automated tools, no bulk email blasts — human-to-human only.' },
  { num: '04', title: 'Link Placement',         body: 'Once a placement is confirmed, we send anchor text recommendations aligned to your target keywords and have the link published.' },
  { num: '05', title: 'Monthly Report',         body: 'You receive a full report showing every new link: the URL, domain authority, anchor text used, and the ranking keywords it supports.' },
]

const NICHES = [
  'General Contractors', 'HVAC', 'Remodeling', 'Roofing', 'Plumbing',
  'Electrical', 'Landscaping', 'Concrete & Foundation', 'Flooring',
  'Painting', 'Deck & Fencing', 'ADU / Room Additions', 'Design-Build',
  'Kitchen & Bath', 'Pool & Spa', 'Solar Contractors',
]

const FAQS = [
  {
    q: 'What makes a "quality" backlink for a contractor?',
    a: 'A quality link comes from a site relevant to construction, home improvement, or Bay Area local business — and has its own established authority. A link from a local SF news outlet covering a project you completed is worth more than 100 generic directory links. We target relevance and authority, not volume.',
  },
  {
    q: 'Are these real editorial links or paid placements?',
    a: 'All of our links are from real, editorially reviewed websites with genuine audiences. Our guest posts go through real editorial review. Press releases are picked up based on newsworthiness. No link farms, no PBNs, no link schemes — every link would survive any Google algorithm update.',
  },
  {
    q: 'How long before link building moves my rankings?',
    a: 'Google takes time to crawl and assign value to new links. Most clients see ranking movement 60–120 days after a campaign begins. The effect compounds — links built in month 2 still benefit you in month 12 and beyond.',
  },
  {
    q: 'Can I choose my anchor text?',
    a: 'Yes. You can specify preferred anchor text for each link, or we can recommend anchor text based on your target keywords and the natural link profile Google expects. We never over-optimize anchors — it triggers red flags.',
  },
  {
    q: 'Is link building included in your SEO packages?',
    a: 'Foundational link building is included in our Standard and Pro SEO packages. These à la carte packages are for contractors who want to accelerate their authority building or run a dedicated campaign on top of ongoing SEO.',
  },
  {
    q: 'What if a link gets removed?',
    a: 'We monitor all placed links for 90 days. If a link is removed without cause within that window, we replace it at no additional charge.',
  },
]

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function PricingCard({ pkg }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)

  return (
    <div style={{
      background: pkg.highlight ? 'var(--navy)' : '#fff',
      border: pkg.highlight ? '2px solid var(--accent)' : '1.5px solid #E2E8F0',
      borderRadius: '20px',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxShadow: pkg.highlight
        ? '0 8px 32px rgba(232,97,26,0.18)'
        : '0 4px 20px rgba(13,27,42,0.07)',
    }}>
      {/* Badge */}
      <span style={{
        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
        background: pkg.highlight ? 'var(--accent)' : 'var(--navy)',
        color: '#fff', fontSize: '0.68rem', fontWeight: 700,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '4px 14px', borderRadius: '9999px', whiteSpace: 'nowrap',
      }}>
        {pkg.badge}
      </span>

      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{pkg.icon}</div>
      <h3 style={{
        fontSize: '1.15rem',
        color: pkg.highlight ? '#fff' : 'var(--navy)',
        marginBottom: '2px',
        fontFamily: 'var(--font-manrope)',
        fontWeight: 800,
      }}>
        {pkg.title}
      </h3>
      <span style={{
        fontSize: '0.78rem', fontWeight: 700,
        color: pkg.highlight ? 'rgba(255,255,255,0.55)' : 'var(--accent)',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        marginBottom: '0.75rem', display: 'block',
      }}>
        {pkg.subtitle}
      </span>
      <p style={{
        fontSize: '0.88rem',
        color: pkg.highlight ? 'rgba(255,255,255,0.68)' : 'var(--gray)',
        lineHeight: 1.6, marginBottom: '1.5rem',
      }}>
        {pkg.description}
      </p>

      {/* Tier selector (multi-tier) or static display (single tier) */}
      {pkg.tiers.length > 1 ? (
        <div style={{ marginBottom: '1.25rem', position: 'relative' }}>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', borderRadius: '10px', cursor: 'pointer',
              background: pkg.highlight ? 'rgba(255,255,255,0.10)' : '#F8FAFC',
              border: pkg.highlight ? '1px solid rgba(255,255,255,0.20)' : '1.5px solid #E2E8F0',
              color: pkg.highlight ? '#fff' : 'var(--navy)',
              fontSize: '0.9rem', fontWeight: 600,
            }}
          >
            <span>{pkg.tiers[selected].label} — {pkg.tiers[selected].price}</span>
            <span style={{ fontSize: '0.7rem', opacity: 0.55, marginLeft: '8px' }}>
              {open ? '▲' : '▼'}
            </span>
          </button>
          {open && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 10,
              border: pkg.highlight ? '1px solid rgba(255,255,255,0.15)' : '1.5px solid #E2E8F0',
              borderRadius: '10px', overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(13,27,42,0.12)',
            }}>
              {pkg.tiers.map((tier, i) => (
                <button
                  key={tier.label}
                  onClick={() => { setSelected(i); setOpen(false) }}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '11px 16px', cursor: 'pointer', textAlign: 'left',
                    background: i === selected
                      ? (pkg.highlight ? 'rgba(232,97,26,0.25)' : 'rgba(232,97,26,0.07)')
                      : (pkg.highlight ? '#1e2235' : '#fff'),
                    border: 'none',
                    borderBottom: i < pkg.tiers.length - 1
                      ? (pkg.highlight ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9')
                      : 'none',
                    color: pkg.highlight ? '#fff' : 'var(--navy)',
                    fontSize: '0.88rem',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{tier.label}</span>
                  <span>
                    <strong style={{ color: 'var(--accent)' }}>{tier.price}</strong>
                    <span style={{ fontSize: '0.72rem', color: pkg.highlight ? 'rgba(255,255,255,0.45)' : 'var(--gray)', marginLeft: '4px' }}>
                      ({tier.per})
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={{
          marginBottom: '1.25rem', padding: '12px 16px', borderRadius: '10px',
          background: pkg.highlight ? 'rgba(255,255,255,0.10)' : '#F8FAFC',
          border: pkg.highlight ? '1px solid rgba(255,255,255,0.20)' : '1.5px solid #E2E8F0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: pkg.highlight ? '#fff' : 'var(--navy)' }}>
            {pkg.tiers[0].label}
          </span>
          <span>
            <strong style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>{pkg.tiers[0].price}</strong>
            <span style={{ fontSize: '0.72rem', color: pkg.highlight ? 'rgba(255,255,255,0.45)' : 'var(--gray)', marginLeft: '4px' }}>
              ({pkg.tiers[0].per})
            </span>
          </span>
        </div>
      )}

      {/* Features */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {pkg.features.map((f) => (
          <li key={f} style={{
            display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
            fontSize: '0.85rem',
            color: pkg.highlight ? 'rgba(255,255,255,0.72)' : 'var(--slate)',
          }}>
            <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="/free-seo-audit/"
        style={{
          marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'center',
          padding: '13px 0', borderRadius: 'var(--radius-md)',
          background: pkg.highlight ? 'var(--accent)' : 'transparent',
          color: pkg.highlight ? '#fff' : 'var(--accent)',
          border: pkg.highlight ? '2px solid var(--accent)' : '2px solid var(--accent)',
          fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
          fontFamily: 'var(--font-manrope)',
        }}
      >
        Get Started →
      </a>
    </div>
  )
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E2E8F0' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: '1rem',
        }}
      >
        <span style={{
          fontSize: '1rem', fontWeight: 700, color: 'var(--navy)',
          fontFamily: 'var(--font-manrope)', lineHeight: 1.35,
        }}>
          {faq.q}
        </span>
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: open ? 'var(--accent)' : '#F1F5F9',
          color: open ? '#fff' : 'var(--navy)',
          fontSize: '1.1rem', fontWeight: 700, lineHeight: 1,
        }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p style={{
          fontSize: '0.92rem', color: 'var(--gray)', lineHeight: 1.75,
          paddingBottom: '1.25rem', margin: 0,
        }}>
          {faq.a}
        </p>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function LinkBuildingClient() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(rgba(13,27,42,0.65), rgba(13,27,42,0.60)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80) center/cover no-repeat',
        padding: 'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 16px', borderRadius: '9999px',
            background: 'rgba(232,97,26,0.20)', border: '1px solid rgba(232,97,26,0.40)',
            color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            Link Building for Contractors
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#fff',
            fontFamily: 'var(--font-manrope)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            Build the Authority That Makes{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Competitive Rankings Possible.</em>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.75,
            maxWidth: '600px', margin: '0 auto 2rem',
          }}>
            The top-ranking Bay Area contractors aren&rsquo;t just optimized — they&rsquo;re authoritative.
            We earn high-quality backlinks from real industry publications and local press
            that tell Google your business belongs at the top.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">Get a Free Link Audit</a>
            <a href="#packages" style={{
              display: 'inline-flex', alignItems: 'center', padding: '13px 24px',
              borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.30)',
              color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem',
              fontWeight: 600, textDecoration: 'none',
            }}>
              View Packages ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ background: 'var(--navy)', padding: '1.75rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem', textAlign: 'center',
          }}>
            {[
              { v: '10+',  l: 'Quality Links/Month'  },
              { v: '0',    l: 'Spammy Links, Ever'   },
              { v: '2–4×', l: 'DA Improvement'       },
              { v: '40+',  l: 'Contractors Ranking'  },
            ].map(({ v, l }) => (
              <div key={l}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800,
                  color: 'var(--accent)', fontFamily: 'var(--font-manrope)',
                }}>
                  {v}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.58)', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publication Grid ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray)',
              marginBottom: '0.75rem',
            }}>
              Real Sites. Real Audiences.
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.15,
              letterSpacing: '-0.02em', marginBottom: '0.75rem',
            }}>
              YOUR STORY WILL APPEAR ON:
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto' }}>
              We place your business on the same sites your customers already trust —
              from local Bay Area press to national home improvement destinations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(176px, 1fr))',
            gap: '1rem',
          }}>
            {PUBLICATIONS.map((pub) => (
              <div key={pub.name} style={{
                background: '#fff',
                border: '1.5px solid #E2E8F0',
                borderRadius: '14px',
                padding: '1.25rem 1rem',
                textAlign: 'center',
                boxShadow: '0 2px 12px rgba(13,27,42,0.04)',
              }}>
                <div style={{
                  fontWeight: 800, fontSize: '0.97rem', color: 'var(--navy)',
                  fontFamily: 'var(--font-manrope)', marginBottom: '0.6rem',
                  lineHeight: 1.25,
                }}>
                  {pub.name}
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 600, color: 'var(--gray)',
                    background: '#F1F5F9', padding: '2px 8px', borderRadius: '9999px',
                  }}>
                    {pub.visitors}/mo
                  </span>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 700,
                    color: pub.da >= 90 ? '#059669' : pub.da >= 80 ? '#2563EB' : 'var(--accent)',
                    background: pub.da >= 90 ? '#ECFDF5' : pub.da >= 80 ? '#EFF6FF' : '#FFF7ED',
                    padding: '2px 8px', borderRadius: '9999px',
                  }}>
                    DA {pub.da}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: 'center', fontSize: '0.78rem', color: 'var(--gray)', marginTop: '1.5rem',
          }}>
            Placement availability varies by niche and campaign scope. Not all sites available in every package.
          </p>
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="packages" style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Packages &amp; Pricing
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              Choose Your Link Building Package
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto' }}>
              Every package includes permanent do-follow links, manual outreach, and a detailed placement report.
              Select a tier from each card&rsquo;s dropdown to see per-link pricing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}>
            {PACKAGES.map((pkg) => <PricingCard key={pkg.id} pkg={pkg} />)}
          </div>

          <div style={{
            marginTop: '2.5rem', background: '#F8FAFC', borderRadius: '14px',
            padding: '1.5rem 2rem', textAlign: 'center',
          }}>
            <p style={{ color: 'var(--slate)', fontSize: '0.9rem', margin: 0 }}>
              <strong style={{ color: 'var(--navy)' }}>Not sure which package fits?</strong>{' '}
              Book a free audit — we&rsquo;ll analyze your competitors&rsquo; link profiles and tell you exactly what level makes sense for your market.{' '}
              <a href="/free-seo-audit/" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                Get a free audit →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              The Process
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2,
            }}>
              How Link Building Works
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '760px', margin: '0 auto' }}>
            {STEPS.map((step) => (
              <div key={step.num} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: '1.5rem', alignItems: 'start',
                background: '#fff', borderRadius: '16px', padding: '1.75rem 2rem',
                boxShadow: '0 2px 12px rgba(13,27,42,0.05)',
                borderLeft: '4px solid var(--accent)',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'var(--accent)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.82rem', fontFamily: 'var(--font-manrope)',
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.05rem', color: 'var(--navy)',
                    fontFamily: 'var(--font-manrope)', fontWeight: 700, marginBottom: '0.4rem',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.7, margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Niches ── */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontFamily: 'var(--font-manrope)',
            fontWeight: 800, color: '#fff', marginBottom: '0.5rem',
          }}>
            We Know Your Trade
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            We build links in every major construction and home service niche across the Bay Area.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {NICHES.map((niche) => (
              <span key={niche} style={{
                display: 'inline-block', padding: '6px 16px', borderRadius: '9999px',
                background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.78)', fontSize: '0.83rem', fontWeight: 600,
              }}>
                {niche}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Questions
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2,
            }}>
              Link Building FAQs
            </h2>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {FAQS.map((faq) => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Build Your Authority"
        heading={<>See How Your Link Profile Compares to the <em>Market Leaders</em></>}
        body="Free audit includes a full competitor backlink analysis. We show you exactly what links they have that you don't — and build a plan to close the gap."
        primaryCta={{ label: 'Get My Free Link Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />

    </main>
  )
}
