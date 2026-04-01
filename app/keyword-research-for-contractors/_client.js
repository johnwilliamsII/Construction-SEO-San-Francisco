'use client'

import { useState } from 'react'
import CtaBanner from '../../components/sections/CtaBanner'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const PAIN_POINTS = [
  {
    icon: '💸',
    pain: 'Paying $100+/mo for SEMrush or Ahrefs and still not sure which keywords to actually target',
  },
  {
    icon: '📉',
    pain: 'Writing blog posts and service pages that get zero traffic because nobody searches for those exact phrases',
  },
  {
    icon: '😤',
    pain: 'Watching competitors rank on page 1 for the terms that actually drive calls — while you\'re stuck on page 3',
  },
  {
    icon: '🎲',
    pain: 'Guessing at which cities, neighborhoods, or services to build pages for instead of knowing',
  },
]

const DELIVERABLES = [
  {
    icon: '🗺️',
    title: 'Full Keyword Map by Trade & City',
    body: 'Every search term your buyers use — organized by service type, city, and neighborhood. You see exactly what to target and why.',
  },
  {
    icon: '📊',
    title: 'Search Volume & Difficulty Scoring',
    body: 'Real monthly search numbers and keyword difficulty scores on every term — so you invest only in keywords worth winning.',
  },
  {
    icon: '🎯',
    title: 'Buyer-Intent Prioritization',
    body: '"Just browsing" searches vs. "ready to hire" searches — sorted and labeled so your most revenue-ready terms rise to the top.',
  },
  {
    icon: '🔍',
    title: 'Competitor Gap Analysis',
    body: 'Every high-value keyword your top 5 competitors rank for that you don\'t. We show you the exact gaps — and which ones to close first.',
  },
  {
    icon: '📍',
    title: 'Neighborhood & Zip-Level Targeting',
    body: 'The Bay Area is hyperlocal. We map keywords by SF neighborhood, East Bay city, and Peninsula zip — not just broad metro terms.',
  },
  {
    icon: '📋',
    title: 'Page-by-Page Content Blueprint',
    body: 'Every keyword cluster comes with a page recommendation — what to build, what to say, and how to structure it for maximum rankings.',
  },
]

const FAQS = [
  {
    q: 'What exactly do I need to send you to get started?',
    a: 'Just three things: (1) your website URL, (2) up to 20 keywords you\'re currently targeting or want to rank for, and (3) up to 5 competitor URLs. That\'s it. We handle everything from there.',
  },
  {
    q: 'What does the report actually look like when I receive it?',
    a: 'You get a structured, organized report with every keyword mapped by service type and location. Each term includes monthly search volume, keyword difficulty, buyer-intent classification, competitor gap notes, and a specific content recommendation. It\'s built to be handed directly to a writer or SEO team — not a raw data dump.',
  },
  {
    q: 'What\'s the 20-page / 20-keyword limit?',
    a: 'This package covers up to 20 target pages and maps up to 20 seed keywords you provide. In practice this covers most Bay Area contractors fully — a typical campaign maps service pages (HVAC, plumbing, etc.) across several neighborhoods. If you need broader coverage, reach out and we\'ll quote accordingly.',
  },
  {
    q: 'Is this different from just using Google Keyword Planner?',
    a: 'Completely. Keyword Planner gives you raw volume on terms you already know. We find terms you don\'t know about yet — specifically what your competitors rank for that you\'re missing, hyperlocal Bay Area variations, and buyer-intent terms your tools never surface. Two days of strategy work vs. a data list.',
  },
  {
    q: 'How long does the research take?',
    a: 'Delivery in 5–7 business days from when you submit your information. If you need it faster, reach out — we can often turn rush orders in 3 days.',
  },
  {
    q: 'Can I use this report with a different SEO agency or my own team?',
    a: 'Absolutely. The report is yours — take it anywhere. Many contractors use our keyword map as the strategic foundation and then execute with their own team or another agency. It\'s plug-and-play for any SEO workflow.',
  },
]

const PAGE_STRUCTURES = [
  {
    url: '/hvac-contractor-san-francisco/',
    h1: 'HVAC Contractor San Francisco',
    h2s: ['Trusted Heating & Cooling Services in the Bay Area', 'Our HVAC Services', 'SF Neighborhoods We Serve', 'Why Homeowners Choose Us'],
    supporting: ['hvac company san francisco', 'hvac services sf', 'heating cooling contractor sf'],
    firstSentence: 'If your heating or cooling system is acting up in San Francisco, our licensed HVAC technicians are ready to diagnose, repair, or replace it — with same-day availability across every neighborhood.',
    intent: 'Transactional', priority: 'High',
  },
  {
    url: '/emergency-hvac-san-francisco/',
    h1: '24/7 Emergency HVAC San Francisco',
    h2s: ['We Answer When You Call — Day or Night', 'Common HVAC Emergencies We Handle', 'Fast Response Across All SF Neighborhoods'],
    supporting: ['emergency hvac sf', '24 hour hvac san francisco', 'hvac emergency repair sf'],
    firstSentence: 'HVAC emergencies don\'t wait for business hours — and neither do we. Our emergency team serves all San Francisco neighborhoods with response times under two hours.',
    intent: 'Transactional', priority: 'High',
  },
  {
    url: '/ac-repair-san-francisco/',
    h1: 'AC Repair San Francisco',
    h2s: ['Signs Your AC Needs Repair', 'Our AC Repair Process', 'Flat-Rate Diagnostic — No Surprise Bills'],
    supporting: ['air conditioner repair sf', 'ac not cooling san francisco', 'ac technician sf'],
    firstSentence: 'When your air conditioner stops working in a San Francisco heat wave, you need a reliable AC repair team that shows up fast, diagnoses accurately, and fixes it right the first time.',
    intent: 'Transactional', priority: 'High',
  },
  {
    url: '/hvac-nob-hill-sf/',
    h1: 'HVAC Contractor Nob Hill, San Francisco',
    h2s: ['Local HVAC Service for Nob Hill Residents', 'Heating & Cooling in Historic Buildings', 'Schedule Same-Day Service'],
    supporting: ['hvac nob hill', 'heating repair nob hill sf', 'ac service nob hill'],
    firstSentence: 'Nob Hill homeowners trust us for HVAC service that works around the unique challenges of San Francisco\'s older buildings — from Victorian-era ductwork to modern mini-split installs.',
    intent: 'Transactional', priority: 'High',
  },
  {
    url: '/hvac-marina-district-sf/',
    h1: 'HVAC Contractor Marina District, San Francisco',
    h2s: ['HVAC Service in the Marina', 'Heating & Cooling for Marina Homes & Condos', 'Book a Same-Day Appointment'],
    supporting: ['hvac marina district', 'ac repair marina sf', 'furnace repair marina district'],
    firstSentence: 'From Marina District condos to single-family homes, our HVAC team provides fast, reliable heating and cooling service backed by a satisfaction guarantee.',
    intent: 'Transactional', priority: 'High',
  },
  {
    url: '/ac-installation-san-francisco/',
    h1: 'AC Installation San Francisco',
    h2s: ['Central AC vs. Mini-Split — Which is Right for Your Home?', 'Our Installation Process', 'Financing Available'],
    supporting: ['ac installation cost sf', 'mini split installation san francisco', 'central ac install sf'],
    firstSentence: 'Installing air conditioning in a San Francisco home requires understanding the city\'s mild climate, older building stock, and permit requirements — our team has done it hundreds of times.',
    intent: 'Commercial', priority: 'High',
  },
  {
    url: '/furnace-repair-san-francisco/',
    h1: 'Furnace Repair San Francisco',
    h2s: ['Signs Your Furnace Needs Repair', 'Common Furnace Problems We Fix', 'When to Repair vs. Replace'],
    supporting: ['furnace repair sf', 'gas furnace repair san francisco', 'heater repair sf'],
    firstSentence: 'A broken furnace on a cold San Francisco night is more than an inconvenience — our furnace repair team provides same-day diagnostics and most repairs completed in a single visit.',
    intent: 'Transactional', priority: 'Medium',
  },
  {
    url: '/hvac-maintenance-san-francisco/',
    h1: 'HVAC Maintenance Plans San Francisco',
    h2s: ['What\'s Included in Our Maintenance Plan', 'How Regular Maintenance Saves You Money', 'Annual vs. Bi-Annual Service'],
    supporting: ['hvac tune up sf', 'hvac annual maintenance san francisco', 'ac maintenance plan sf'],
    firstSentence: 'San Francisco\'s damp winters and warm summers put real strain on HVAC systems — our maintenance plans keep your equipment running efficiently and catch problems before they become expensive.',
    intent: 'Commercial', priority: 'Medium',
  },
  {
    url: '/commercial-hvac-san-francisco/',
    h1: 'Commercial HVAC San Francisco',
    h2s: ['HVAC Solutions for SF Businesses', 'Retail, Office & Restaurant HVAC', 'Preventive Maintenance for Commercial Systems'],
    supporting: ['commercial hvac company sf', 'office hvac san francisco', 'commercial ac repair sf'],
    firstSentence: 'San Francisco businesses rely on us for commercial HVAC installation, repair, and maintenance — with flexible scheduling designed to minimize disruption to your operations.',
    intent: 'Commercial', priority: 'Medium',
  },
  {
    url: '/how-much-does-hvac-cost-san-francisco/',
    h1: 'How Much Does HVAC Cost in San Francisco?',
    h2s: ['Average HVAC Costs in SF', 'Factors That Affect Your Price', 'Getting an Accurate Quote', 'Financing Options'],
    supporting: ['hvac cost sf', 'hvac replacement cost san francisco', 'how much is a new ac unit sf'],
    firstSentence: 'HVAC costs in San Francisco typically run higher than national averages — this guide breaks down real pricing for repairs, replacements, and new installs so you know what to expect before you call.',
    intent: 'Informational', priority: 'Medium',
  },
]

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function PageCard({ page, index, isOpen, onToggle }) {
  const intentColor = page.intent === 'Transactional' ? '#059669' : page.intent === 'Commercial' ? '#2563EB' : 'var(--gray)'
  const intentBg   = page.intent === 'Transactional' ? '#ECFDF5' : page.intent === 'Commercial' ? '#EFF6FF' : '#F1F5F9'
  return (
    <div style={{
      border: '1.5px solid',
      borderColor: isOpen ? 'var(--accent)' : '#E2E8F0',
      borderRadius: '14px', overflow: 'hidden',
      boxShadow: isOpen ? '0 4px 20px rgba(232,97,26,0.10)' : '0 2px 8px rgba(13,27,42,0.04)',
      transition: 'border-color 0.2s, box-shadow 0.2s',
    }}>
      {/* Row header — always visible */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%', display: 'grid',
          gridTemplateColumns: 'auto 1fr auto auto',
          gap: '0.75rem', alignItems: 'center',
          padding: '1rem 1.25rem', background: isOpen ? '#FFF7F4' : '#fff',
          border: 'none', cursor: 'pointer', textAlign: 'left',
          transition: 'background 0.2s',
        }}
      >
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
          background: 'var(--accent)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.75rem', fontWeight: 800, fontFamily: 'var(--font-manrope)',
        }}>
          {index + 1}
        </span>
        <div>
          <span style={{
            fontSize: '0.72rem', color: '#2563EB', fontFamily: 'monospace',
            display: 'block', marginBottom: '1px',
          }}>
            {page.url}
          </span>
          <span style={{
            fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)',
            fontFamily: 'var(--font-manrope)',
          }}>
            H1: {page.h1}
          </span>
        </div>
        <span style={{
          fontSize: '0.65rem', fontWeight: 700, color: intentColor,
          background: intentBg, padding: '3px 10px', borderRadius: '9999px',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          {page.intent}
        </span>
        <span style={{
          width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: isOpen ? 'var(--accent)' : '#F1F5F9',
          color: isOpen ? '#fff' : 'var(--navy)',
          fontSize: '1rem', fontWeight: 700,
        }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Expanded detail */}
      {isOpen && (
        <div style={{
          padding: '1.25rem 1.25rem 1.5rem',
          borderTop: '1px solid #FDDDD0',
          background: '#fff',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1.25rem',
        }}>
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>H2 Sections</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              {page.h2s.map((h) => (
                <li key={h} style={{ fontSize: '0.82rem', color: 'var(--slate)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>H2</span> {h}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '0.9rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Supporting Keywords</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {page.supporting.map((kw) => (
                  <span key={kw} style={{
                    fontSize: '0.7rem', background: '#F1F5F9', color: 'var(--slate)',
                    padding: '3px 10px', borderRadius: '9999px', fontFamily: 'monospace',
                  }}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>First Sentence on Page</div>
            <p style={{
              fontSize: '0.85rem', color: 'var(--navy)', lineHeight: 1.65, margin: 0,
              fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '0.75rem',
            }}>
              &ldquo;{page.firstSentence}&rdquo;
            </p>
          </div>
        </div>
      )}
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
  const [openPage, setOpenPage] = useState(0)

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
            One flat fee. You send us your URL, your keywords, and up to 5 competitors.
            We send back a complete, organized keyword map built for Bay Area contractors — ready to rank.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">Order Your Keyword Map — $450</a>
            <a href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', padding: '13px 24px',
              borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.30)',
              color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem',
              fontWeight: 600, textDecoration: 'none',
            }}>
              See How It Works ↓
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
              { v: '$450',    l: 'Flat Fee — One-Time'    },
              { v: '20',      l: 'Pages Mapped'           },
              { v: '5',       l: 'Competitors Analyzed'   },
              { v: '5–7',     l: 'Day Delivery'           },
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

      {/* ── Pain Point Section ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Sound Familiar?
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              You Keep Paying for Keyword Visibility
              <br />With{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Nothing to Show for It.</em>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
              Most contractors we talk to are doing <em>something</em> for SEO — but flying blind
              on which keywords actually drive calls and booked jobs.
            </p>
          </div>

          {/* Pain points grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem', marginBottom: '3rem',
          }}>
            {PAIN_POINTS.map((p) => (
              <div key={p.pain} style={{
                background: '#FFF7F4', border: '1.5px solid #FDDDD0',
                borderRadius: '14px', padding: '1.5rem',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.65, margin: 0 }}>
                  {p.pain}
                </p>
              </div>
            ))}
          </div>

          {/* Pivot card */}
          <div style={{
            background: 'var(--navy)', borderRadius: '20px', padding: '2.5rem',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden="true" style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '280px', height: '280px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232,97,26,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <span style={{
              display: 'inline-block', padding: '4px 16px', borderRadius: '9999px',
              background: 'rgba(232,97,26,0.20)', border: '1px solid rgba(232,97,26,0.40)',
              color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              The Fix
            </span>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: '0.85rem',
            }}>
              Let Us Get You the Targeting You Need
              <br />to{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Win More Calls and Sales.</em>
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.70)', fontSize: '0.95rem', lineHeight: 1.75,
              maxWidth: '540px', margin: '0 auto 1.75rem',
            }}>
              You don&rsquo;t need another tool subscription. You need a strategist who understands your
              trade and your Bay Area market — and can hand you a clear map of exactly what to rank for.
              That&rsquo;s what $450 buys you here.
            </p>
            <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Order Your Keyword Map →
            </a>
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
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
              Every keyword comes with volume, difficulty, buyer-intent scoring, and a specific page recommendation.
              Built to be immediately usable by you, your writer, or your SEO team.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {DELIVERABLES.map((d) => (
              <div key={d.title} style={{
                background: '#fff', border: '1.5px solid #E2E8F0',
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

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
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
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem', maxWidth: '960px', margin: '0 auto',
          }}>
            {[
              {
                num: '1',
                visual: 'submit',
                title: 'Submit Your Info',
                body: 'Send us your website URL, up to 20 keywords you want to rank for, and up to 5 competitor URLs. That\'s everything we need — no calls, no questionnaires.',
              },
              {
                num: '2',
                visual: 'research',
                title: 'We Get to Work',
                body: 'We run deep keyword research using professional tools, cross-reference your competitor rankings, apply buyer-intent scoring, and map every term to a specific page recommendation.',
              },
              {
                num: '3',
                visual: 'report',
                title: 'Receive Your Report',
                body: 'Within 5–7 business days you receive a fully organized keyword map — sorted by priority, labeled by intent, and ready to hand to any writer or SEO team.',
              },
            ].map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                {/* Visual card frame */}
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
                  {step.visual === 'submit' && (
                    <>
                      <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>📝</div>
                      <div style={{ width: '100%' }}>
                        {[
                          'Your website URL',
                          'Up to 20 target keywords',
                          'Up to 5 competitor URLs',
                        ].map((item) => (
                          <div key={item} style={{
                            display: 'flex', alignItems: 'center', gap: '5px',
                            fontSize: '0.72rem', color: 'var(--slate)', marginBottom: '5px',
                          }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                      <div style={{
                        padding: '5px 14px', borderRadius: '9999px',
                        background: 'var(--accent)', color: '#fff', fontSize: '0.68rem', fontWeight: 700,
                      }}>
                        Submitted ✓
                      </div>
                    </>
                  )}
                  {step.visual === 'research' && (
                    <>
                      <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>🔬</div>
                      <div style={{ width: '100%' }}>
                        {[
                          'Professional SEO tools',
                          'Competitor ranking analysis',
                          'Buyer-intent scoring',
                          'Bay Area keyword library',
                        ].map((item) => (
                          <div key={item} style={{
                            display: 'flex', alignItems: 'center', gap: '5px',
                            fontSize: '0.68rem', color: 'var(--slate)', marginBottom: '4px',
                          }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {step.visual === 'report' && (
                    <>
                      <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>📊</div>
                      <div style={{ width: '100%' }}>
                        {[
                          { label: 'Keywords Mapped', val: '60+',  color: '#059669' },
                          { label: 'Competitor Gaps', val: '22',   color: '#2563EB' },
                          { label: 'Buyer-Intent',    val: '38',   color: 'var(--accent)' },
                        ].map((r) => (
                          <div key={r.label} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '4px 0', borderBottom: '1px solid #F1F5F9', fontSize: '0.72rem',
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

      {/* ── Pricing ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Simple, Flat Pricing
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2,
            }}>
              One Price. Full Report. No Subscription.
            </h2>
          </div>

          {/* Single pricing card */}
          <div style={{
            background: 'var(--navy)', border: '2px solid var(--accent)',
            borderRadius: '24px', padding: '2.5rem',
            boxShadow: '0 8px 40px rgba(232,97,26,0.18)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden="true" style={{
              position: 'absolute', top: '-80px', right: '-80px',
              width: '300px', height: '300px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗺️</div>
                <h3 style={{
                  fontSize: '1.4rem', color: '#fff', fontFamily: 'var(--font-manrope)',
                  fontWeight: 800, marginBottom: '0.5rem',
                }}>
                  Contractor Keyword Map
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  A complete, organized keyword strategy report built specifically for your trade and Bay Area market.
                  One-time purchase — yours to keep and use forever.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {[
                    'Up to 20 pages mapped',
                    'Up to 20 seed keywords analyzed',
                    'Up to 5 competitors included',
                    'Full volume + difficulty scoring',
                    'Buyer-intent classification on every term',
                    'Competitor gap analysis',
                    'Neighborhood & zip-level Bay Area targeting',
                    'Page-by-page content blueprint',
                    'Delivered in 5–7 business days',
                  ].map((f) => (
                    <div key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-manrope)', lineHeight: 1 }}>
                  $450
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.50)', marginBottom: '1.25rem' }}>
                  one-time
                </div>
                <a href="/free-seo-audit/" style={{
                  display: 'block', padding: '13px 24px', borderRadius: 'var(--radius-md)',
                  background: 'var(--accent)', color: '#fff',
                  fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none',
                  fontFamily: 'var(--font-manrope)', textAlign: 'center', whiteSpace: 'nowrap',
                }}>
                  Order Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample Report ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              What You Receive
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              Your Keyword Report — Detailed, Organized, Actionable
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto' }}>
              Every term mapped, scored, and prioritized. Hand it directly to a writer,
              your SEO team, or use it to build pages yourself.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.7fr',
            gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'start',
          }}>
            {/* Inclusions list */}
            <div>
              <h3 style={{
                fontSize: '1.05rem', fontFamily: 'var(--font-manrope)', fontWeight: 800,
                color: 'var(--navy)', marginBottom: '1.25rem',
              }}>
                Every Report Includes:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'Organized by trade, service type, and city',
                  'Monthly search volume on every keyword',
                  'Keyword difficulty score (0–100)',
                  'Buyer-intent label: Informational / Commercial / Transactional',
                  'Competitor gap flags — what they rank for that you don\'t',
                  'Priority tier: High / Medium / Low',
                  'Recommended page for each keyword cluster',
                  'Delivered as PDF + CSV — share with any team',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/free-seo-audit/" className="btn btn-primary">Order My Keyword Map →</a>
            </div>

            {/* Mock report widget */}
            <div style={{
              border: '2px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(13,27,42,0.08)',
            }}>
              {/* Header */}
              <div style={{
                background: 'var(--navy)', padding: '0.9rem 1.25rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.50)', marginBottom: '2px' }}>
                    Keyword Research Report — Bay Area Contractor
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-manrope)' }}>
                    HVAC Contractor — San Francisco
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

              {/* Summary stats */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                borderBottom: '1px solid #E2E8F0',
              }}>
                {[
                  { label: 'Keywords Mapped', main: '64', sub: 'Across 18 pages' },
                  { label: 'Competitor Gaps', main: '27', sub: 'Terms to target' },
                  { label: 'Buyer-Intent Terms', main: '41', sub: 'High-priority' },
                ].map((stat, i) => (
                  <div key={stat.label} style={{
                    padding: '1rem', textAlign: 'center',
                    borderRight: i < 2 ? '1px solid #E2E8F0' : 'none',
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
                    <div style={{ fontSize: '0.68rem', color: 'var(--gray)', marginTop: '4px' }}>{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Keyword table */}
              <div style={{ padding: '1rem 1.25rem' }}>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700, color: 'var(--navy)',
                  textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem',
                }}>
                  Sample Keywords
                </div>
                {/* Table header */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '2.2fr 0.8fr 0.7fr 1.1fr 0.8fr',
                  gap: '0.4rem', padding: '6px 0', borderBottom: '2px solid #E2E8F0',
                }}>
                  {['Keyword', 'Vol/mo', 'KD', 'Intent', 'Priority'].map((h) => (
                    <span key={h} style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase' }}>
                      {h}
                    </span>
                  ))}
                </div>
                {/* Rows */}
                {[
                  { kw: 'HVAC contractor San Francisco',     vol: '2,400', kd: '38', intent: 'Transactional', priority: 'High',   pColor: '#059669', pBg: '#ECFDF5' },
                  { kw: 'emergency HVAC San Francisco',      vol: '880',   kd: '22', intent: 'Transactional', priority: 'High',   pColor: '#059669', pBg: '#ECFDF5' },
                  { kw: 'AC repair Nob Hill SF',             vol: '390',   kd: '14', intent: 'Transactional', priority: 'High',   pColor: '#059669', pBg: '#ECFDF5' },
                  { kw: 'best HVAC company Bay Area',        vol: '1,100', kd: '45', intent: 'Commercial',    priority: 'Medium', pColor: '#2563EB', pBg: '#EFF6FF' },
                  { kw: 'how much does AC installation cost',vol: '720',   kd: '29', intent: 'Informational', priority: 'Medium', pColor: '#2563EB', pBg: '#EFF6FF' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '2.2fr 0.8fr 0.7fr 1.1fr 0.8fr',
                    gap: '0.4rem', padding: '8px 0',
                    borderBottom: '1px solid #F1F5F9', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--navy)', lineHeight: 1.3 }}>{row.kw}</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--slate)' }}>{row.vol}</span>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      color: parseInt(row.kd) < 25 ? '#059669' : parseInt(row.kd) < 40 ? '#2563EB' : 'var(--accent)',
                    }}>
                      {row.kd}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--gray)', lineHeight: 1.3 }}>{row.intent}</span>
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 700, color: row.pColor,
                      background: row.pBg, padding: '2px 8px', borderRadius: '9999px',
                      textAlign: 'center', whiteSpace: 'nowrap',
                    }}>
                      {row.priority}
                    </span>
                  </div>
                ))}
                <p style={{ fontSize: '0.72rem', color: 'var(--gray)', marginTop: '0.75rem', marginBottom: 0, fontStyle: 'italic' }}>
                  Sample report data for illustration. Actual results vary by trade and market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page Architecture Examples ── */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(232,97,26,0.90)', marginBottom: '0.75rem',
            }}>
              How We Use This Data
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '0.85rem',
            }}>
              We Don&rsquo;t Just Hand You Data.
              <br />We Show You{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>How to Build With It.</em>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.65)', fontSize: '0.97rem', lineHeight: 1.75,
              maxWidth: '620px', margin: '0 auto',
            }}>
              Included in your report: the top 10 page structure recommendations based on your keyword map.
              For each priority page we give you the URL, H1, H2 sections, supporting keywords, and
              the first sentence — so you can see exactly how we&rsquo;d build it.
              This is our thought process. You take it from here.
            </p>
            <div style={{
              display: 'inline-block', marginTop: '1.25rem',
              padding: '0.65rem 1.25rem', borderRadius: '10px',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
            }}>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                <strong style={{ color: 'rgba(255,255,255,0.80)' }}>Note:</strong>{' '}
                This isn&rsquo;t a complete site plan — we don&rsquo;t have all the pieces of your puzzle.
                But for a straightforward contractor website, this is exactly our approach.
                The rest of the report is yours as a full keyword spreadsheet to work from.
              </p>
            </div>
          </div>

          {/* Page cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '900px', margin: '0 auto' }}>
            {PAGE_STRUCTURES.map((page, i) => (
              <PageCard
                key={page.url}
                page={page}
                index={i}
                isOpen={openPage === i}
                onToggle={() => setOpenPage(openPage === i ? null : i)}
              />
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.40)', marginTop: '1.5rem' }}>
            Example shown for HVAC contractor in San Francisco. Your report uses your actual trade, URL structure, and keyword data.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
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
        body="$450. One-time. No subscription. You send us your URL, keywords, and competitors — we send back the complete roadmap."
        primaryCta={{ label: 'Order My Keyword Map — $450', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />

    </main>
  )
}
