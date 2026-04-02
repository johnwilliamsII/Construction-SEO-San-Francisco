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
    subtitle: 'Basic — DA 10–30',
    description: 'You need backlinks for any site to rank in even a mildly competitive niche. That\'s SEO 101. Outside of links that grow organically, guest posts are the safest, most powerful way to build your site\'s authority.',
    highlight: false,
    tiers: [
      { label: '5 Posts',  price: '$199',   per: '$39.80 / post', stripeUrl: 'https://buy.stripe.com/5kQ14ndYn0DY1Z56ZP43S0a' },
      { label: '10 Posts', price: '$370',   per: '$37 / post',    stripeUrl: 'https://buy.stripe.com/7sY5kDg6v72mavB1Fv43S0b' },
      { label: '20 Posts', price: '$710',   per: '$35.50 / post', stripeUrl: 'https://buy.stripe.com/eVq4gz2fFcmGbzF83T43S0c' },
      { label: '50 Posts', price: '$1,710', per: '$34.20 / post', stripeUrl: 'https://buy.stripe.com/28E9AT2fFcmGgTZesh43S0d' },
    ],
    features: [
      'Niche article with contextual anchor/link',
      'Real sites — DA 10–30',
      'Permanent do-follow links',
      'No adult, drug, casino, or gambling content',
    ],
  },
  {
    id: 'bulk-standard',
    badge: 'Best Authority',
    icon: '🏆',
    title: 'Bulk Guest Posts',
    subtitle: 'Standard — DA 30–65+',
    description: 'Stronger than PBNs — these are real sites with real traffic and higher metrics than any private blog network. 100% safe backlinks from sites Google actually trusts, constantly updated with the best current network.',
    highlight: true,
    tiers: [
      { label: '5 Posts',     price: '$300',    per: '$60 / post',    stripeUrl: 'https://buy.stripe.com/eVqbJ19I7aey47dfwl43S0e' },
      { label: '10 Posts',    price: '$550',    per: '$55 / post',    stripeUrl: 'https://buy.stripe.com/eVqbJ107x0DYbzFesh43S0f' },
      { label: '25 Posts',    price: '$1,450',  per: '$58 / post',    stripeUrl: 'https://buy.stripe.com/14A3cv07xgCWeLR83T43S0g' },
      { label: '50 Posts',    price: '$2,150',  per: '$43 / post',    stripeUrl: 'https://buy.stripe.com/5kQcN5cUjcmG8nt0Br43S0h' },
      { label: '100 Posts',   price: '$4,250',  per: '$42.50 / post', stripeUrl: 'https://buy.stripe.com/eVq6oHg6veuO6fl3ND43S0i' },
      { label: '1,000 Posts', price: '$34,200', per: '$34.20 / post', stripeUrl: 'https://buy.stripe.com/5kQ4gzf2r86qdHN2Jz43S0j' },
    ],
    features: [
      'DoFollow links on real traffic sites',
      'Unique handwritten articles with image',
      '100% safe — sites Google trusts',
      'Latest methods — updated site network',
      '100% positive client feedback',
      'English sites only — No Pharmacy or Adult',
    ],
  },
  {
    id: 'niche-gold',
    badge: 'Highest Value',
    icon: '🎯',
    title: 'Niche Guest Post',
    subtitle: 'Single Placement — DR 50–70',
    description: 'Real sites, real organic traffic. Niche-specific placements that generate relevant traffic and reinforce your authority — plus pre-approval of every domain before we publish.',
    highlight: false,
    tiers: [
      { label: '1 Placement', price: '$400', per: 'per placement', stripeUrl: 'https://buy.stripe.com/6oU14n1bB5Yi339esh43S0k' },
    ],
    features: [
      'Domain organic traffic: 0–2,000/mo',
      'Up to DR 50–70 (niche dependent)',
      'Pre-approval of domains',
      'Permanent, unmarked placement',
      '100% manual content & publishing',
      'Footprint protected',
    ],
  },
  {
    id: 'press-release',
    badge: 'Brand Authority',
    icon: '📰',
    title: 'Press Release Distribution',
    subtitle: 'News Wire Syndication',
    description: 'Serious news site power pointing back to your brand. Established names attracting tens of millions of visitors every month — giving instant expert status to anyone published on them.',
    highlight: false,
    tiers: [
      { label: 'Standard — 500+ News Sites',      price: '$570',   per: 'one-time', stripeUrl: 'https://buy.stripe.com/bJedR9f2r5Yi5bh5VL43S0l' },
      { label: 'Premium — Yahoo + Major Outlets',  price: '$1,425', per: 'one-time', stripeUrl: 'https://buy.stripe.com/dRm9AT4nN2M65bhesh43S0m' },
    ],
    features: [
      'Brand building & reputation management',
      'GMB ranking + website authority',
      '500+ published news sites (Standard)',
      'US State + International distribution',
      'Financial sites included',
      'APNews, Benzinga, Yahoo News, GlobeNews, EIN + PR Booster Links (Premium)',
    ],
  },
  {
    id: 'local-press',
    badge: 'Bay Area Focus',
    icon: '📍',
    title: 'Local AB News',
    subtitle: 'Targeted Media Outreach',
    description: 'Web + Media Outreach Distribution — a single premium press release with targeted outreach across 5 industry targets. USA and Canada only.',
    highlight: false,
    tiers: [
      { label: 'Local — One City / Metro / State', price: '$300', per: 'per placement', stripeUrl: 'https://buy.stripe.com/5kQaEX7zZ72mbzF1Fv43S0n' },
      { label: 'Regional — Multi-State',           price: '$450', per: 'per placement', stripeUrl: 'https://buy.stripe.com/5kQ9ATbQfbiCcDJ83T43S0o' },
      { label: 'National Distribution',            price: '$600', per: 'per placement', stripeUrl: 'https://buy.stripe.com/5kQ14n1bB5Yi339esh43S0k' },
    ],
    features: [
      'Premium press release included',
      'Web distribution + targeted media outreach',
      '5 industry targets per release',
      'All prices for a single release',
      'USA and Canada only',
    ],
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
              background: pkg.highlight ? '#1a1f33' : '#ffffff',
              border: pkg.highlight ? '1px solid rgba(255,255,255,0.18)' : '1.5px solid #D1D9E0',
              borderRadius: '10px', overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(13,27,42,0.18), 0 2px 8px rgba(13,27,42,0.10)',
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
        href={pkg.tiers[selected]?.stripeUrl || '/free-seo-audit/'}
        target={pkg.tiers[selected]?.stripeUrl ? '_blank' : undefined}
        rel={pkg.tiers[selected]?.stripeUrl ? 'noopener noreferrer' : undefined}
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
        Buy Now →
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
            Link Building for Contractors{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>in the Bay Area</em>
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
              { v: 'À La Carte', l: 'No Monthly Contract' },
              { v: '0',          l: 'Spammy Links, Ever'  },
              { v: '2–4×',       l: 'DA Improvement'      },
              { v: '40+',        l: 'Contractors Ranking' },
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
              How It Works
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            maxWidth: '960px',
            margin: '0 auto',
          }}>
            {[
              {
                num: '1',
                icon: '🔍',
                visual: 'audit',
                title: 'Place Your Order',
                body: 'Choose your package and tier, then provide your target URL and preferred anchor text. You write and submit your article — we handle placement. Where the site allows it, we\'ll submit your article directly with your anchor text and link. Where it doesn\'t, we use your anchor text and link within our own content. Ideally you get both.',
              },
              {
                num: '2',
                icon: '✍️',
                visual: 'outreach',
                title: 'We Get to Work',
                body: 'Manual outreach to real editors and site owners. For niche placements, you pre-approve every domain before we publish a single word.',
              },
              {
                num: '3',
                icon: '📊',
                visual: 'results',
                title: 'Get Results',
                body: 'Links go live and you receive a full placement report — every URL, domain authority score, anchor text used, and live link confirmed.',
              },
            ].map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                {/* Visual card frame — mirrors the reference style */}
                <div style={{
                  border: '3px solid var(--accent)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  background: '#fff',
                  boxShadow: '0 4px 24px rgba(232,97,26,0.12)',
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  padding: '1.5rem',
                }}>
                  {step.visual === 'audit' && (
                    <>
                      <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>🔍</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textAlign: 'center', lineHeight: 1.4, marginBottom: '0.4rem' }}>
                        Target URL<br/>
                        <span style={{ color: 'var(--accent)' }}>contractorco.com/hvac-sf</span>
                      </div>
                      <div style={{ width: '100%' }}>
                        {[
                          'You provide your article',
                          'You choose your anchor text',
                          'We submit it — or write around it',
                        ].map((item) => (
                          <div key={item} style={{
                            display: 'flex', alignItems: 'center', gap: '5px',
                            fontSize: '0.68rem', color: 'var(--slate)', marginBottom: '3px',
                          }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                      <div style={{
                        marginTop: '0.4rem', padding: '5px 14px', borderRadius: '9999px',
                        background: 'var(--accent)', color: '#fff', fontSize: '0.68rem', fontWeight: 700,
                      }}>
                        Order Confirmed ✓
                      </div>
                    </>
                  )}
                  {step.visual === 'outreach' && (
                    <>
                      <div style={{ fontSize: '2.5rem' }}>✍️</div>
                      <div style={{ width: '100%' }}>
                        {['Real Sites — DA 30–65', 'Pre-Approved Domains', 'Manual Outreach Only', 'Human-to-Human'].map((item) => (
                          <div key={item} style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            fontSize: '0.72rem', color: 'var(--slate)', marginBottom: '4px',
                          }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {step.visual === 'results' && (
                    <>
                      <div style={{ fontSize: '2.5rem' }}>📊</div>
                      <div style={{ width: '100%' }}>
                        {[
                          { label: 'Links Live', val: '10', color: '#059669' },
                          { label: 'Avg DA',     val: '44', color: '#2563EB' },
                          { label: 'Indexed',    val: '10', color: 'var(--accent)' },
                        ].map((r) => (
                          <div key={r.label} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '4px 0', borderBottom: '1px solid #F1F5F9',
                            fontSize: '0.72rem',
                          }}>
                            <span style={{ color: 'var(--gray)' }}>{r.label}</span>
                            <strong style={{ color: r.color }}>{r.val}</strong>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.1rem', fontFamily: 'var(--font-manrope)', fontWeight: 800,
                  color: 'var(--accent)', marginBottom: '0.5rem',
                }}>
                  {step.num}. {step.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.65, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included / Sample Report ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Also Included In Every Order
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              Your Link Report — Delivered With Every Campaign
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto' }}>
              Every link we build comes with full documentation. No black boxes, no vague deliverables —
              you see exactly where your links landed and how to use them.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.6fr',
            gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'start',
          }}>
            {/* Inclusions list */}
            <div>
              <h3 style={{
                fontSize: '1.05rem', fontFamily: 'var(--font-manrope)', fontWeight: 800,
                color: 'var(--navy)', marginBottom: '1.25rem',
              }}>
                What Every Report Includes:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'Professional link placement with industry-proven outreach',
                  'Live URL for every link placed — no dead links, ever',
                  'Domain authority score for each placement',
                  'Exact anchor text used on every link',
                  'Confirmation of do-follow status',
                  'Full report in PDF and CSV — white-label available',
                  'Delivery period 10–14 working days',
                  'All links run through an indexing network',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/free-seo-audit/" className="btn btn-primary">Start My Campaign →</a>
            </div>

            {/* Mock report widget */}
            <div style={{
              border: '2px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(13,27,42,0.08)',
            }}>
              {/* Report header */}
              <div style={{
                background: 'var(--navy)', padding: '0.9rem 1.25rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.50)', marginBottom: '2px' }}>
                    Published: Campaign Report
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-manrope)' }}>
                    Release Placement &amp; Pick-Ups
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['PDF', 'CSV'].map((f) => (
                    <span key={f} style={{
                      fontSize: '0.65rem', fontWeight: 700, padding: '3px 10px',
                      border: '1px solid rgba(255,255,255,0.30)', borderRadius: '4px',
                      color: 'rgba(255,255,255,0.70)',
                    }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                borderBottom: '1px solid #E2E8F0',
              }}>
                {[
                  { label: 'Placements', main: '634', sub: 'Full Text', sub2: '62 Headline' },
                  { label: 'Total Views', main: '5,171', sub: '289 Unique', sub2: 'Readers' },
                  { label: 'Reach', main: '373M', sub: '1.4B', sub2: 'Headline Reach' },
                ].map((stat, i) => (
                  <div key={stat.label} style={{
                    padding: '1rem',
                    borderRight: i < 2 ? '1px solid #E2E8F0' : 'none',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--gray)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)',
                      fontFamily: 'var(--font-manrope)', lineHeight: 1,
                    }}>
                      {stat.main}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--gray)', marginTop: '4px' }}>
                      {stat.sub}<br/>{stat.sub2}
                    </div>
                  </div>
                ))}
              </div>

              {/* Link placement table */}
              <div style={{ padding: '1rem 1.25rem' }}>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700, color: 'var(--navy)',
                  textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem',
                }}>
                  Sample Link Placements
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {/* Table header */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '2fr 0.7fr 1.4fr 0.7fr',
                    gap: '0.5rem', padding: '6px 0',
                    borderBottom: '2px solid #E2E8F0',
                  }}>
                    {['Site / URL', 'DA', 'Anchor Text', 'Status'].map((h) => (
                      <span key={h} style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                  {/* Table rows */}
                  {[
                    { site: 'homedecortrends.com/…',    da: '48', anchor: 'HVAC contractor SF',      status: 'Live' },
                    { site: 'contractorguide.net/…',    da: '37', anchor: 'plumber San Francisco',   status: 'Live' },
                    { site: 'bayhomeowners.com/…',      da: '55', anchor: 'general contractor SF',   status: 'Live' },
                    { site: 'sfbuildingpros.com/…',     da: '41', anchor: 'roofing contractor Bay Area', status: 'Live' },
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '2fr 0.7fr 1.4fr 0.7fr',
                      gap: '0.5rem', padding: '8px 0',
                      borderBottom: '1px solid #F1F5F9',
                      alignItems: 'center',
                    }}>
                      <span style={{ fontSize: '0.72rem', color: '#2563EB', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {row.site}
                      </span>
                      <span style={{
                        fontSize: '0.72rem', fontWeight: 700,
                        color: parseInt(row.da) >= 50 ? '#059669' : parseInt(row.da) >= 40 ? '#2563EB' : 'var(--accent)',
                      }}>
                        {row.da}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--slate)', lineHeight: 1.3 }}>{row.anchor}</span>
                      <span style={{
                        fontSize: '0.65rem', fontWeight: 700, color: '#059669',
                        background: '#ECFDF5', padding: '2px 8px', borderRadius: '9999px',
                        textAlign: 'center',
                      }}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.72rem', color: 'var(--gray)', marginTop: '0.75rem', marginBottom: 0, fontStyle: 'italic' }}>
                  Sample report data for illustration. Actual placements vary by package and niche.
                </p>
              </div>
            </div>
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
