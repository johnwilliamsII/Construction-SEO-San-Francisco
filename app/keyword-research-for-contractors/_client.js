'use client'

import { useState } from 'react'
import CtaBanner from '../../components/sections/CtaBanner'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const DELIVERABLES = [
  {
    icon: '🗺️',
    title: 'Full Keyword Map by Trade & City',
    body: 'Every search term your buyers use — organized by service type, city, and neighborhood. You see exactly what to target and why.',
  },
  {
    icon: '📊',
    title: 'Search Volume & Difficulty Scoring',
    body: 'Real monthly search numbers and keyword difficulty scores — so you invest in terms worth winning instead of chasing vanity keywords.',
  },
  {
    icon: '🎯',
    title: 'Buyer-Intent Prioritization',
    body: 'Not all keywords are equal. We separate "just browsing" searches from "ready to hire" searches and sort your map by revenue potential.',
  },
  {
    icon: '🔍',
    title: 'Competitor Gap Analysis',
    body: 'We find every high-value keyword your top 3 competitors rank for that you don\'t — then build your strategy around closing those exact gaps.',
  },
  {
    icon: '📍',
    title: 'Neighborhood & Zip-Level Targeting',
    body: 'The Bay Area is hyperlocal. We map keywords by SF neighborhood, East Bay city, and Peninsula zip — not just broad metro terms.',
  },
  {
    icon: '📋',
    title: 'Page-by-Page Content Blueprint',
    body: 'Every keyword cluster comes with a content recommendation — which page to create, what to say, and how to structure it for maximum rankings.',
  },
]

const PACKAGES = [
  {
    id: 'starter',
    badge: 'Start Here',
    icon: '🗺️',
    title: 'Starter Keyword Map',
    price: '$297',
    priceNote: 'one-time',
    description: 'Perfect for a single trade or new contractor website. Get the foundational keyword data you need to start building the right pages from day one.',
    features: [
      '1 trade / service category',
      'Up to 3 target cities or neighborhoods',
      '100+ mapped keywords',
      'Volume + difficulty scoring on every term',
      'Buyer-intent sorting',
      'Delivered in 3–5 business days',
    ],
    highlight: false,
  },
  {
    id: 'full-market',
    badge: 'Most Popular',
    icon: '📊',
    title: 'Full Market Map',
    price: '$597',
    priceNote: 'one-time',
    description: 'The complete keyword strategy for an established Bay Area contractor. Covers multiple services, full competitor gap analysis, and your entire local market.',
    features: [
      'Up to 3 trades / service categories',
      'Full Bay Area service area coverage',
      '300+ mapped keywords',
      'Competitor gap analysis (top 3 rivals)',
      'Buyer-intent + revenue-potential scoring',
      'Page-by-page content blueprint',
      'Delivered in 5–7 business days',
    ],
    highlight: true,
  },
  {
    id: 'authority',
    badge: 'Maximum Coverage',
    icon: '🏆',
    title: 'Complete Authority Map',
    price: '$997',
    priceNote: 'one-time',
    description: 'Full-scale keyword intelligence for contractors who want to dominate every trade and every corner of the Bay Area. Built for growth-stage businesses.',
    features: [
      'Unlimited trades / service categories',
      'SF + Peninsula + East Bay + South Bay',
      '600+ mapped keywords',
      'Top 5 competitor deep-dive',
      'Neighborhood-level targeting included',
      'Full content architecture blueprint',
      'Priority delivery in 5 business days',
      '30-min strategy call to walk through results',
    ],
    highlight: false,
  },
]

const COMPARISONS = [
  {
    bad:  'Writing blog posts nobody searches for',
    good: 'Targeting 2,400/mo "HVAC contractor San Francisco" with a purpose-built page',
  },
  {
    bad:  'One generic "Services" page trying to rank for everything',
    good: '12 city + service landing pages, each locked onto one proven keyword',
  },
  {
    bad:  'Guessing which neighborhoods drive the best leads',
    good: 'Data showing Castro, Marina & Nob Hill bring 3× higher average ticket size',
  },
]

const STEPS = [
  { num: '01', title: 'Discovery Call',       body: 'We learn your trade(s), service area, and revenue goals — so the map reflects what you actually want to rank for, not generic industry terms.' },
  { num: '02', title: 'Seed Keyword Build',   body: 'We pull every search term in your niche using professional SEO tools, your competitors\' organic rankings, and our Bay Area contractor keyword library.' },
  { num: '03', title: 'Intent & Volume Sort', body: 'Every keyword is scored on monthly search volume, ranking difficulty, and buyer intent — separating "hire-ready" searches from informational browsing.' },
  { num: '04', title: 'Competitor Gap Map',   body: 'We run a side-by-side ranking analysis against your top 3 competitors to find every high-value term they rank for that you\'re missing.' },
  { num: '05', title: 'Blueprint Delivery',   body: 'You receive a structured map organized by keyword clusters, with specific content recommendations for each — ready to hand to a writer or SEO team.' },
]

const FAQS = [
  {
    q: 'What does the keyword research deliverable actually look like?',
    a: 'You receive a structured spreadsheet organized by service type, location, and buyer intent. Each keyword includes monthly search volume, competition score, current ranking (if any), and a specific content recommendation. It\'s built to be immediately actionable — not a raw data dump.',
  },
  {
    q: 'Is keyword research a one-time thing or ongoing?',
    a: 'We start with a foundational map that covers your core services and top markets. As you expand into new service areas, add trade specialties, or enter new cities, we update the map. Clients on monthly SEO plans get quarterly keyword expansion reviews included.',
  },
  {
    q: 'How is this different from just using Google Keyword Planner?',
    a: 'Keyword Planner shows you raw volume. It doesn\'t show you which terms your specific competitors rank for, which have buyer intent vs. informational intent, or how to cluster them into a content strategy. Our research takes 3–5 days and produces a strategic blueprint, not just a list.',
  },
  {
    q: 'Do you specialize in any particular trades?',
    a: 'We work exclusively with Bay Area contractors — HVAC, GC, remodeling, roofing, plumbing, electrical, landscaping, flooring, ADU builders, and more. Our keyword libraries are built from years of working in these specific trade categories, not generic marketing knowledge.',
  },
  {
    q: 'Can I use this keyword map with my own team or a different SEO agency?',
    a: 'Absolutely. The deliverable is yours. Many clients use our keyword map as the strategic foundation and then execute content creation or link building with us or another team. It\'s designed to be plug-and-play for any SEO workflow.',
  },
  {
    q: 'What if I want keyword research as part of an ongoing SEO package?',
    a: 'Our Standard and Pro SEO packages include initial keyword mapping plus quarterly updates. If you\'re planning to do ongoing SEO with us, starting with the Full Market Map package gives you a head start before your monthly campaign begins.',
  },
]

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function PricingCard({ pkg }) {
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
        marginBottom: '0.35rem',
        fontFamily: 'var(--font-manrope)',
        fontWeight: 800,
      }}>
        {pkg.title}
      </h3>

      <div style={{ marginBottom: '0.75rem' }}>
        <span style={{
          fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-manrope)',
          color: pkg.highlight ? '#fff' : 'var(--navy)',
        }}>
          {pkg.price}
        </span>
        <span style={{
          fontSize: '0.78rem', color: pkg.highlight ? 'rgba(255,255,255,0.50)' : 'var(--gray)',
          marginLeft: '6px',
        }}>
          {pkg.priceNote}
        </span>
      </div>

      <p style={{
        fontSize: '0.88rem',
        color: pkg.highlight ? 'rgba(255,255,255,0.68)' : 'var(--gray)',
        lineHeight: 1.6, marginBottom: '1.5rem',
      }}>
        {pkg.description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        {pkg.features.map((f) => (
          <li key={f} style={{
            display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
            fontSize: '0.85rem',
            color: pkg.highlight ? 'rgba(255,255,255,0.75)' : 'var(--slate)',
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
          border: '2px solid var(--accent)',
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

export default function KeywordResearchClient() {
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
            Keyword Research for Contractors
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#fff',
            fontFamily: 'var(--font-manrope)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            Stop Guessing. Start Ranking the{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Terms That Drive Real Jobs.</em>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.75,
            maxWidth: '600px', margin: '0 auto 2rem',
          }}>
            We map every high-intent keyword your Bay Area buyers use — by trade, city, and neighborhood.
            Every page you build after this has a clear, data-backed path to traffic and leads.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">Get a Free Keyword Audit</a>
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
              { v: '750+',   l: 'Keywords Mapped'        },
              { v: '40+',    l: 'Trades Covered'         },
              { v: '3×',     l: 'More Content ROI'       },
              { v: '60–90',  l: 'Days to First Rankings' },
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

      {/* ── Deliverables ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              What You Get
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              A Complete Keyword Map — Not a Spreadsheet Dump
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto' }}>
              Every keyword comes with volume, competition, buyer intent scoring, and a specific content recommendation.
              Built to be immediately actionable by you, your writer, or your SEO team.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {DELIVERABLES.map((d) => (
              <div key={d.title} style={{
                background: '#F8FAFC', border: '1.5px solid #E2E8F0',
                borderRadius: '16px', padding: '1.75rem',
                boxShadow: '0 2px 12px rgba(13,27,42,0.04)',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{d.icon}</div>
                <h3 style={{
                  fontSize: '1.02rem', color: 'var(--navy)',
                  fontFamily: 'var(--font-manrope)', fontWeight: 700, marginBottom: '0.5rem',
                }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray)', lineHeight: 1.65, margin: 0 }}>
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center',
          }}>
            <div>
              <span style={{
                display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
                marginBottom: '0.75rem',
              }}>
                Why It Matters
              </span>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'var(--font-manrope)',
                fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '1rem',
              }}>
                Most Contractor Content Fails Because It Targets the{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Wrong Keywords</em>
              </h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.95rem' }}>
                Writing blog posts and landing pages without keyword data is guesswork. You might spend
                20 hours producing content that 8 people per month search for — while 10,000-search
                terms in your market go completely unaddressed.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                Our keyword maps tell you exactly which terms to target, in what order, and with what
                type of content. Every hour you spend on SEO after the map is invested — not gambled.
              </p>
              <a href="/free-seo-audit/" className="btn btn-primary">
                See Your Keyword Opportunities →
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {COMPARISONS.map((c, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: '14px', overflow: 'hidden',
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(13,27,42,0.05)',
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                }}>
                  <div style={{ padding: '1.1rem 1.25rem', borderRight: '1px solid #E2E8F0' }}>
                    <div style={{
                      fontSize: '0.65rem', fontWeight: 700, color: '#DC2626',
                      textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem',
                    }}>
                      ✕ Before
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--gray)', margin: 0, lineHeight: 1.5 }}>
                      {c.bad}
                    </p>
                  </div>
                  <div style={{ padding: '1.1rem 1.25rem', background: 'rgba(232,97,26,0.04)' }}>
                    <div style={{
                      fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent)',
                      textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem',
                    }}>
                      ✓ After
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--slate)', margin: 0, lineHeight: 1.5 }}>
                      {c.good}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              Choose Your Keyword Map Package
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto' }}>
              All packages are one-time deliverables. No subscriptions, no retainers.
              Get the data, then use it however you need.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '1.5rem', alignItems: 'start',
          }}>
            {PACKAGES.map((pkg) => <PricingCard key={pkg.id} pkg={pkg} />)}
          </div>

          <div style={{
            marginTop: '2.5rem', background: '#F8FAFC', borderRadius: '14px',
            padding: '1.5rem 2rem', textAlign: 'center',
          }}>
            <p style={{ color: 'var(--slate)', fontSize: '0.9rem', margin: 0 }}>
              <strong style={{ color: 'var(--navy)' }}>Already signed up for an SEO package?</strong>{' '}
              Keyword mapping is included — ask us to start there.{' '}
              <a href="/free-seo-audit/" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                Book your audit call →
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
              How Keyword Research Works
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
              Keyword Research FAQs
            </h2>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {FAQS.map((faq) => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Start With Data"
        heading={<>Know Exactly Which Keywords Will <em>Win Your Market</em></>}
        body="Start with a free audit — we'll pull your current rankings, show your top keyword gaps, and map out what it takes to own your Bay Area market."
        primaryCta={{ label: 'Get My Free Keyword Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />

    </main>
  )
}
