'use client'

import { useState } from 'react'
import CtaBanner from '../../components/sections/CtaBanner'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const PAIN_POINTS = [
  {
    icon: '🔇',
    text: 'You\'ve been in business for years — but homeowners searching "roofer near me" or "landscaper San Francisco" never find you. Your competitors do.',
  },
  {
    icon: '📉',
    text: 'You\'re getting outranked on Google Maps by companies that are newer, less experienced, and doing half the quality work you are.',
  },
  {
    icon: '📋',
    text: 'Your Google Business Profile is incomplete, unclaimed, or hasn\'t been touched since you first set it up — and Google can tell.',
  },
  {
    icon: '💸',
    text: 'You\'re paying $50–$200 per lead through Yelp, Angi, or Google Ads — with zero organic baseline to fall back on when you pause the spend.',
  },
]

const STARTER_INCLUDES = [
  'Google Business Profile full optimization',
  'Up to 10 target keywords mapped & tracked',
  'Local citation building — 5 citations/month',
  'Call tracking setup & monthly call reporting',
  'Review monitoring & alert notifications',
  'Monthly performance report',
  'On-page optimization for core service pages',
  'Kickoff call + strategy review',
]

const GROWTH_INCLUDES = [
  'Everything in Starter',
  'Up to 25 target keywords mapped & tracked',
  'Local citation building — 15 citations/month',
  'Review response management',
  'Content creation — 2 optimized posts/month',
  'Schema markup (LocalBusiness, Service, FAQ)',
  'Competitor gap analysis & tracking',
  'Quarterly strategy review call',
  'Priority email support',
]

const CONTRACTORS = [
  'Roofing Contractors', 'Landscapers & Lawn Care', 'ADU Builders',
  'General Contractors', 'HVAC Companies', 'Plumbers',
  'Electricians', 'Home Inspectors', 'Painting Contractors',
  'Concrete & Hardscape', 'Fence Companies', 'Window & Door',
  'Solar Installers', 'Deck & Patio Builders', 'Remodelers',
]

const FAQS = [
  {
    q: 'How long until I see results?',
    a: 'Most contractors see meaningful movement in Google Maps rankings within 60–90 days. Organic search results typically follow at the 90–120 day mark. Our 82-day SF case study is real — not a cherry-picked outlier. Timelines vary based on competition and starting position.',
  },
  {
    q: 'Do you work with contractors outside San Francisco?',
    a: 'Yes. We work across the entire Bay Area — Oakland, San Jose, Marin, Peninsula, East Bay, and South Bay. We also work with contractors in other California markets. Our focus is always hyperlocal: ranking you in the specific neighborhoods and cities you actually serve.',
  },
  {
    q: 'What\'s the difference between Local SEO and regular SEO?',
    a: 'Local SEO focuses on Google Maps (the "Local Pack") and location-based searches — "contractor near me," "roofer in Oakland," etc. Regular SEO targets broader organic rankings. We do both under one package, but for most contractors, Local SEO drives the majority of inbound calls.',
  },
  {
    q: 'Do I need a website to get started?',
    a: 'You need at least a basic website — even a simple one. Without a website, Google has no destination to send searchers, and we can\'t optimize service or city pages. If you need a site built first, reach out and we can discuss options.',
  },
  {
    q: 'What makes this different from what I could do myself?',
    a: 'The technical depth. Citation building at scale, proper schema implementation, GBP category selection and optimization, on-page structure for local intent — these things are nuanced and time-consuming. You\'re a contractor, not an SEO agency. That\'s the whole point.',
  },
  {
    q: 'Can I run Google Ads alongside this?',
    a: 'Yes — and it\'s a great stack. SEO builds your long-term organic baseline; ads capture immediate intent. Many of our clients run both. Once your organic rankings improve, you can reduce ad spend and still maintain lead volume.',
  },
]

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E2E8F0' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '1.25rem 0', background: 'none',
          border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem',
        }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-manrope)', lineHeight: 1.35 }}>
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
        <p style={{ fontSize: '0.92rem', color: 'var(--gray)', lineHeight: 1.75, paddingBottom: '1.25rem', margin: 0 }}>
          {faq.a}
        </p>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function LocalSEOClient() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(rgba(13,27,42,0.68), rgba(13,27,42,0.62)), url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80) center/cover no-repeat',
        padding: 'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 16px', borderRadius: '9999px',
            background: 'rgba(232,97,26,0.20)', border: '1px solid rgba(232,97,26,0.40)',
            color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            Local SEO for Bay Area Contractors
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#fff',
            fontFamily: 'var(--font-manrope)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            Local SEO for Contractors{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>
              in the Bay Area
            </em>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.75,
            maxWidth: '640px', margin: '0 auto 2rem',
          }}>
            Hyper-local SEO for roofers, landscapers, ADU builders, HVAC companies, and every
            contractor the big agencies overlook. We rank you on Google Maps and organic search
            across every Bay Area city you serve — so the phone rings without paying for every click.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">Get My Free SEO Audit</a>
            <a href="#pricing" style={{
              display: 'inline-flex', alignItems: 'center', padding: '13px 24px',
              borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.30)',
              color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none',
            }}>
              See Plans ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ background: '#16192A', padding: '1.75rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
            {[
              { v: '82',     l: 'Days to Results (SF Case Study)' },
              { v: '#1',     l: 'Google Maps Rankings'            },
              { v: '$1,200', l: 'Starter / Month'                 },
              { v: '50+',    l: 'Bay Area Cities Covered'         },
            ].map(({ v, l }) => (
              <div key={l}>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)' }}>
                  {v}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain Point ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              Sound Familiar?
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              Hundreds of Homeowners Search for Contractors in the Bay Area{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Every Single Day.</em>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
              The contractors at the top of Google Maps get the call. The ones buried on page 2 — or
              missing from Maps entirely — get nothing. Which one are you right now?
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {PAIN_POINTS.map((p, i) => (
              <div key={i} style={{
                background: '#FFF7F4', border: '1.5px solid #FDDDD0',
                borderRadius: '14px', padding: '1.5rem',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>

          {/* Pivot */}
          <div style={{
            background: '#16192A', borderRadius: '20px', padding: '2.5rem',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden="true" style={{
              position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px',
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <span style={{
              display: 'inline-block', padding: '4px 16px', borderRadius: '9999px',
              background: 'rgba(232,97,26,0.20)', border: '1px solid rgba(232,97,26,0.40)',
              color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              We Fix This
            </span>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: '0.85rem',
            }}>
              We Built This Agency for the Contractors Everyone Else Ignores.
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>You Deserve to Win Too.</em>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto 1.75rem' }}>
              Landscapers. Roofers. ADU builders. Inspection contractors. The trades that keep the Bay Area
              running — these are our clients. We know your market, your keywords, and exactly what it takes
              to rank in the neighborhoods where your customers live.
            </p>
            <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Get My Free Audit →
            </a>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section style={{ background: '#16192A', padding: 'clamp(3rem, 6vw, 4.5rem) 0', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(232,97,26,0.90)', marginBottom: '0.75rem',
            }}>
              What You'll Gain
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: '#fff', lineHeight: 1.2,
            }}>
              The Long-Game Advantages That{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Compound Over Time</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'Stronger Domain Authority',     desc: 'Every citation, backlink, and optimized page signals to Google that your business is the trusted local authority in your trade.' },
              { label: 'Long-Term SEO Rankings',        desc: 'Unlike ads that stop the moment you pause spend, organic rankings compound — your position improves month over month.' },
              { label: 'High DA / DR Link Building',    desc: 'Quality citations and directory placements from high-authority sources that pass real link equity to your domain.' },
              { label: 'Elite Authentic Link Equity',   desc: 'We only build links from legitimate, vetted sources — no PBNs, no spam, nothing that puts your domain at risk.' },
              { label: 'Top DoFollow Backlinks',        desc: 'Every citation we build is a permanent dofollow placement that actively passes authority and supports ranking improvements.' },
              { label: 'Increased Referral Traffic',    desc: 'Citations on Yelp, Angi, Houzz, and 75+ other directories don\'t just help rankings — they send direct visitors to your site.' },
            ].map((b, i) => (
              <div key={b.label} style={{
                display: 'grid', gridTemplateColumns: '1fr 1.4fr',
                gap: '2rem', alignItems: 'center',
                padding: '1.5rem 0',
                borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontFamily: 'var(--font-manrope)',
                  fontWeight: 800, color: i % 2 === 0 ? '#fff' : 'var(--accent)',
                  lineHeight: 1.2, letterSpacing: '-0.01em',
                }}>
                  {b.label}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.60)', lineHeight: 1.7 }}>
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              The System
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              A Simple System to Rank Higher and{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Get More Calls</em>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
              It&rsquo;s not a guarantee or magic. It&rsquo;s a structured system built around
              the signals that move the needle for local contractors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>
            {[
              {
                num: '1',
                icon: '📍',
                title: 'Show Up Where Clients Are Searching',
                body: 'We optimize your Google Business Profile, build citations across 80+ local directories, and target the exact neighborhood-level keywords Bay Area homeowners search before they call.',
              },
              {
                num: '2',
                icon: '🏗️',
                title: 'Build Authority Across the Internet',
                body: 'We create and optimize city + service landing pages, implement proper schema markup, and build the on-page signals that tell Google you\'re the most relevant contractor in each market.',
              },
              {
                num: '3',
                icon: '📞',
                title: 'Track Every Call. Improve Every Month.',
                body: 'Call tracking, keyword ranking reports, and monthly performance reviews. You see exactly which searches are driving inquiries and where we\'re pushing harder next month.',
              },
            ].map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{
                  border: '3px solid var(--accent)', borderRadius: '18px', overflow: 'hidden',
                  marginBottom: '1.25rem', background: '#fff',
                  boxShadow: '0 4px 24px rgba(232,97,26,0.10)',
                  aspectRatio: '4/3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '0.75rem', padding: '1.5rem',
                }}>
                  <div style={{ fontSize: '2.5rem' }}>{step.icon}</div>
                  <div style={{
                    fontSize: '2rem', fontWeight: 800, color: 'var(--accent)',
                    fontFamily: 'var(--font-manrope)', lineHeight: 1,
                  }}>
                    0{step.num}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-manrope)', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray)', lineHeight: 1.65, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section style={{ background: '#16192A', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(232,97,26,0.90)', marginBottom: '0.75rem',
            }}>
              Real Results
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              82 Days. San Francisco.{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>All Green.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.97rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
              From buried across positions 8–19 throughout San Francisco to dominating positions 1–4
              across the entire map grid. This is what a properly executed local SEO campaign looks like.
            </p>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem',
            marginBottom: '2.5rem', maxWidth: '680px', margin: '0 auto 2.5rem',
          }}>
            {[
              { v: '82 Days', l: 'Campaign Timeline' },
              { v: 'SF-Wide', l: 'Full Map Coverage' },
              { v: '#1–4',   l: 'Positions Dominated' },
            ].map(({ v, l }) => (
              <div key={l} style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px', padding: '1.25rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)', lineHeight: 1 }}>
                  {v}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Case study image */}
          <div style={{
            borderRadius: '16px', overflow: 'hidden',
            border: '2px solid rgba(232,97,26,0.30)',
            boxShadow: '0 12px 48px rgba(0,0,0,0.40)',
          }}>
            <img
              src="/images/sf-ranking-case-study.webp"
              alt="Google Maps ranking transformation — San Francisco contractor, before and after 82 days of Local SEO"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.40)', marginTop: '1rem', lineHeight: 1.5 }}>
            Actual client result. Google Maps ranking grid — San Francisco metro. Timeline: 82 days.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              Plans & Pricing
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.5rem',
            }}>
              Transparent SEO Pricing. No Lock-In. No Surprises.
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
              Both plans are month-to-month. Built for contractors who want real results,
              not retainer traps.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>

            {/* Starter Card */}
            <div style={{
              background: '#fff', border: '2px solid #E2E8F0',
              borderRadius: '24px', padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(13,27,42,0.06)',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>📍</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                Starter
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', fontFamily: 'var(--font-manrope)', fontWeight: 800, marginBottom: '0.5rem' }}>
                Local SEO — Foundation
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Perfect for contractors getting started with local SEO. Rank in your primary market, build your citation foundation, and start showing up where buyers are searching.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-manrope)' }}>$1,200</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>/month</span>
              </div>

              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                What's Included
              </div>
              {STARTER_INCLUDES.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.55rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}

              <a href="/free-seo-audit/" style={{
                display: 'block', padding: '13px 24px', borderRadius: 'var(--radius-md)',
                border: '2px solid var(--navy)', color: 'var(--navy)',
                fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none',
                fontFamily: 'var(--font-manrope)', textAlign: 'center', marginTop: '1.75rem',
              }}>
                Get Started →
              </a>
            </div>

            {/* Growth Card */}
            <div style={{
              background: '#16192A', border: '2px solid var(--accent)',
              borderRadius: '24px', padding: '2.25rem',
              boxShadow: '0 8px 40px rgba(232,97,26,0.18)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden="true" style={{
                position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px',
                borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{ fontSize: '1.8rem' }}>🏆</div>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px',
                  background: 'var(--accent)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Most Popular
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(232,97,26,0.90)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                Growth
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', fontFamily: 'var(--font-manrope)', fontWeight: 800, marginBottom: '0.5rem' }}>
                Local SEO — Full Market Domination
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                For contractors serious about owning their market. More keywords, more content, deeper coverage, and ongoing competitor tracking to stay ahead as rankings improve.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '2.25rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-manrope)' }}>$2,500</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>/month</span>
              </div>

              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(232,97,26,0.90)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                What's Included
              </div>
              {GROWTH_INCLUDES.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.55rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}

              <a href="/free-seo-audit/" style={{
                display: 'block', padding: '13px 24px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent)', color: '#fff',
                fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none',
                fontFamily: 'var(--font-manrope)', textAlign: 'center', marginTop: '1.75rem',
              }}>
                Get Started →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              Getting Started
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.5rem',
            }}>
              How to Order — Four Steps,{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Then We Take It From Here</em>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
              No lengthy onboarding forms. No discovery calls that go nowhere. Here&rsquo;s exactly what we need to get started.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              {
                n: '01',
                icon: '🌐',
                title: 'Share Your Website URL',
                body: 'Your live business website. We\'ll audit it as part of your kickoff and identify quick-win opportunities right away.',
              },
              {
                n: '02',
                icon: '🔑',
                title: 'Your Target Keywords',
                body: 'Up to 10 keywords you want to rank for. Not sure which ones? We\'ll guide you during the kickoff call.',
              },
              {
                n: '03',
                icon: '📅',
                title: 'Choose Your Kickoff Date',
                body: 'Pick a time that works for your schedule. We\'ll have everything reviewed before the call so we hit the ground running.',
              },
              {
                n: '04',
                icon: '📦',
                title: 'Choose Your Package',
                body: 'Starter at $1,200/mo or Growth at $2,500/mo. Both are month-to-month — no lock-in contracts.',
              },
            ].map((step) => (
              <div key={step.n} style={{
                background: '#F8FAFC', border: '1.5px solid #E2E8F0',
                borderRadius: '16px', padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}>
                <div style={{
                  fontSize: '0.68rem', fontWeight: 800, color: 'var(--accent)',
                  fontFamily: 'var(--font-manrope)', letterSpacing: '0.1em',
                }}>
                  STEP {step.n}
                </div>
                <div style={{ fontSize: '2rem' }}>{step.icon}</div>
                <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-manrope)', lineHeight: 1.3, margin: 0 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--gray)', lineHeight: 1.65, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              Get My Free Audit — Let&rsquo;s Talk →
            </a>
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              Built For The Trades
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              Every Contractor the Big Agencies Overlook
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
              If you do hands-on trade work in the Bay Area and your phone isn&rsquo;t ringing
              from Google — this is for you.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', justifyContent: 'center' }}>
            {CONTRACTORS.map((c) => (
              <span key={c} style={{
                padding: '8px 18px', borderRadius: '9999px',
                background: '#F8FAFC', border: '1.5px solid #E2E8F0',
                fontSize: '0.88rem', fontWeight: 600, color: 'var(--navy)',
                fontFamily: 'var(--font-manrope)',
              }}>
                {c}
              </span>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--gray)' }}>
            Don&rsquo;t see your trade?{' '}
            <a href="/free-seo-audit/" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
              Reach out — we work with all Bay Area contractors.
            </a>
          </p>
        </div>
      </section>

      {/* ── Belief Breaking ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              Let&rsquo;s Be Honest
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2,
            }}>
              We Hear These Every Week.{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Here&rsquo;s the Truth.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                belief: '"SEO takes 12 months to see anything."',
                truth: 'Our 82-day San Francisco case study went from positions 8–19 to dominating #1–4 across the entire city map. Strategy and execution matter more than the calendar.',
              },
              {
                belief: '"I tried SEO before and got burned."',
                truth: 'Most contractors were sold generic SEO from agencies that don\'t understand the trades. We exclusively serve contractors — this is a completely different thing.',
              },
              {
                belief: '"I can\'t compete with the big companies."',
                truth: 'Local SEO isn\'t about outspending national brands. It\'s about hyperlocal relevance. A homeowner in Noe Valley searching for a roofer doesn\'t want a national chain — they want you.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#F8FAFC', border: '1.5px solid #E2E8F0',
                borderRadius: '16px', padding: '1.75rem',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                <div style={{
                  fontSize: '1rem', fontWeight: 700, color: 'var(--slate)',
                  fontStyle: 'italic', lineHeight: 1.4, fontFamily: 'var(--font-manrope)',
                  borderLeft: '3px solid #FDDDD0', paddingLeft: '0.75rem',
                }}>
                  {item.belief}
                </div>
                <div style={{
                  width: '32px', height: '3px', background: 'var(--accent)', borderRadius: '2px',
                }} />
                <p style={{ fontSize: '0.88rem', color: 'var(--gray)', lineHeight: 1.7, margin: 0 }}>
                  {item.truth}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              Questions
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2,
            }}>
              Local SEO FAQs
            </h2>
          </div>
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        label="Ready to Rank?"
        heading="Get Your Free SEO Audit — See Exactly Where You Stand"
        body="We'll show you where you're ranking, what your competitors are doing, and the specific steps to move you to the top of Google Maps in your market."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View All Services', href: '/seo-packages-for-contractors/' }}
        dark
      />

    </main>
  )
}
