'use client'

import { useState } from 'react'
import CtaBanner from '../../components/sections/CtaBanner'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const COST_ROWS = [
  { label: 'Base wages — part-time 25 hrs/wk @ $16.50/hr',  monthly: '$1,788' },
  { label: 'Employer payroll taxes (FICA, FUTA, SUI ~15%)',  monthly: '$268'   },
  { label: "California workers' comp insurance",             monthly: '$175'   },
  { label: 'Mandatory paid sick leave (CA law)',             monthly: '$112'   },
  { label: 'Initial training & onboarding (4 wks, prorated)',monthly: '$450'   },
  { label: 'Average turnover cost prorated over 12 months',  monthly: '$183'   },
]

const VOICES = [
  {
    flag: '🇺🇸',
    region: 'American English',
    options: ['Female — Warm & Professional', 'Male — Friendly & Clear'],
  },
  {
    flag: '🇬🇧',
    region: 'British English',
    options: ['Female — Polished & Crisp', 'Male — Authoritative & Calm'],
  },
  {
    flag: '🌍',
    region: 'European Accent',
    options: ['Female — Elegant & Approachable', 'Male — Confident & Measured'],
  },
]

const BASIC_INCLUDES = [
  'Your existing business phone number (1 line)',
  'Your hours of operation',
  'Where to direct callers during business hours',
  'Email address for your monthly call log spreadsheet',
]

const ADVANCED_INCLUDES = [
  '30-minute onboarding call with our team',
  'Your sales process, qualifying criteria & ideal customer profile',
  'Agent built, tested & launched within 3 weeks',
  'Client review & approval before go-live',
  'Room for tweaks after launch',
  '150 agentic calls/month included',
  'Multiple voice options — American, European, M/F',
  'Larger call packages available for high-volume users',
]

const FAQS = [
  {
    q: 'Will callers know they\'re talking to an AI?',
    a: 'The AI presents itself as your business receptionist — professional, natural, and trained on your specific services. It doesn\'t claim to be human, but most callers simply experience a helpful, responsive front desk that represents your brand.',
  },
  {
    q: 'Do I need to change my phone number?',
    a: 'No. We use your existing business phone number. You just point it to the AI system — one number, no new lines needed.',
  },
  {
    q: 'What happens to calls during my business hours on the Basic plan?',
    a: 'You tell us where to direct callers who don\'t need immediate help — hold and notify you, take a message, or forward elsewhere. We configure it exactly the way you want.',
  },
  {
    q: 'How do I receive my call log?',
    a: 'Every month we send a spreadsheet to the email you provide — every call logged with caller info, time, duration, and a summary. Shareable with your whole team.',
  },
  {
    q: 'How long does the Advanced agent take to launch?',
    a: 'From your 30-minute onboarding call, we build, test, and launch within 3 weeks. You review and approve before anything goes live — with room for tweaks included.',
  },
  {
    q: 'What if I get more than 150 agentic calls in a month?',
    a: 'Larger call packages are available for higher-volume users. Just reach out and we\'ll quote based on your actual monthly volume.',
  },
  {
    q: 'Can I add this to an SEO package?',
    a: 'Yes — and it stacks perfectly. SEO drives more inbound calls. The AI captures every single one of them. Many of our clients run both for maximum lead capture.',
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
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: '1rem',
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

export default function AIReceptionistClient() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(rgba(13,27,42,0.70), rgba(13,27,42,0.65)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80) center/cover no-repeat',
        padding: 'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 16px', borderRadius: '9999px',
            background: 'rgba(232,97,26,0.20)', border: '1px solid rgba(232,97,26,0.40)',
            color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            AI Receptionist for Contractors
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#fff',
            fontFamily: 'var(--font-manrope)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            AI Receptionist for Contractors:{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>HVAC, Remodeling &amp; More</em>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.75,
            maxWidth: '620px', margin: '0 auto 2rem',
          }}>
            You&rsquo;re on a job site. A homeowner calls. They don&rsquo;t leave a voicemail — they call your competitor
            next. Our AI receptionist picks up immediately, handles the conversation, and logs every
            single inquiry. No salary. No sick days. No turnover.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#pricing" className="btn btn-primary">See Plans — From $500/mo</a>
            <a href="#pricing" style={{
              display: 'inline-flex', alignItems: 'center', padding: '13px 24px',
              borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.30)',
              color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem',
              fontWeight: 600, textDecoration: 'none',
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
              { v: '24/7',  l: 'Call Coverage'         },
              { v: '365',   l: 'Days a Year'            },
              { v: '$500',  l: 'Basic Plan / mo'         },
              { v: '< 2s',  l: 'Answer Time'            },
            ].map(({ v, l }) => (
              <div key={l}>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)' }}>
                  {v}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost Reality ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '940px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              The Real Cost
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              What a Part-Time Receptionist Actually Costs{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>in California</em>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
              Before you think about hiring someone to answer phones, run the actual numbers.
              California labor law makes even part-time hires significantly more expensive than the hourly rate suggests.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Cost breakdown table */}
            <div style={{ border: '2px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(13,27,42,0.07)' }}>
              <div style={{ background: '#F8FAFC', padding: '1rem 1.5rem', borderBottom: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Part-Time Human Receptionist — Monthly Cost
                </div>
              </div>
              {COST_ROWS.map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.85rem 1.5rem',
                  background: i % 2 === 0 ? '#fff' : '#FAFAFA',
                  borderBottom: i < COST_ROWS.length - 1 ? '1px solid #F1F5F9' : 'none',
                }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--slate)', lineHeight: 1.4, paddingRight: '1rem' }}>{row.label}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--navy)', flexShrink: 0 }}>{row.monthly}</span>
                </div>
              ))}
              {/* Total */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 1.5rem', background: '#16192A',
              }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>
                  Estimated Monthly Total
                </span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#E8611A', fontFamily: 'var(--font-manrope)' }}>
                  ~$2,976/mo
                </span>
              </div>
              <p style={{ fontSize: '0.68rem', color: 'var(--gray)', padding: '0.6rem 1.5rem', fontStyle: 'italic', margin: 0 }}>
                * Figures illustrative. Actual costs vary. Full-time receptionist: $4,800–$6,200/mo all-in.
              </p>
            </div>

            {/* Pain points + pivot */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '💸', text: 'Nearly $3,000/month — for someone who only works 25 hours a week and can still call in sick' },
                { icon: '🔄', text: 'Average receptionist tenure is under 18 months — then you start the hiring and training cycle all over again' },
                { icon: '📵', text: 'Still only covers business hours. After 5pm, weekends, and holidays? Back to voicemail.' },
                { icon: '🤯', text: 'Virtual assistants seem cheaper until you factor in management time, timezone gaps, and inconsistent quality' },
              ].map((p, i) => (
                <div key={i} style={{
                  background: '#FFF7F4', border: '1.5px solid #FDDDD0',
                  borderRadius: '12px', padding: '1rem 1.25rem',
                  display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{p.icon}</span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
                </div>
              ))}

              {/* Pivot card */}
              <div style={{
                background: '#16192A', borderRadius: '14px', padding: '1.5rem',
                textAlign: 'center', position: 'relative', overflow: 'hidden', marginTop: '0.5rem',
              }}>
                <div aria-hidden="true" style={{
                  position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px',
                  borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.20) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <span style={{
                  display: 'inline-block', padding: '3px 12px', borderRadius: '9999px',
                  background: 'rgba(232,97,26,0.20)', border: '1px solid rgba(232,97,26,0.40)',
                  color: '#F4875A', fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem',
                }}>
                  The Alternative
                </span>
                <h3 style={{
                  fontSize: '1.15rem', fontFamily: 'var(--font-manrope)', fontWeight: 800,
                  color: '#fff', lineHeight: 1.3, marginBottom: '0.5rem',
                }}>
                  AI Receptionist — Always On.{' '}
                  <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Never Calls In Sick.</em>
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.65, margin: '0 0 1rem' }}>
                  From $500/mo (Basic) or $950/mo (Pro). 24/7/365 coverage from day one.
                </p>
                <a href="#pricing" style={{
                  display: 'inline-block', padding: '10px 24px', borderRadius: 'var(--radius-md)',
                  background: 'var(--accent)', color: '#fff',
                  fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none',
                }}>
                  See Pricing →
                </a>
              </div>
            </div>
          </div>
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
              Two Tiers. One Goal: Every Call Handled.
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
              Basic at $500/mo (Nimbata) or Pro at $950/mo (Smith.ai). Choose based on how much you want the AI to do.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>

            {/* Basic Card */}
            <div style={{
              background: '#fff', border: '2px solid #E2E8F0',
              borderRadius: '24px', padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(13,27,42,0.06)',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>📞</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                Basic
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', fontFamily: 'var(--font-manrope)', fontWeight: 800, marginBottom: '0.5rem' }}>
                AI Receptionist
              </h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Powered by Nimbata — your phone answered 24/7, up to 150 calls/mo. Every caller handled professionally. Every inquiry logged and sent to your inbox monthly.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-manrope)' }}>$500</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>/month</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '1.75rem' }}>
                150 calls/mo included — no setup fee
              </div>

              <div style={{ marginBottom: '0.65rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  What We Need to Get Started
                </div>
                {BASIC_INCLUDES.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.55rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://buy.stripe.com/fZu00jg6v72m6fl5VL43S08" target="_blank" rel="noopener noreferrer" style={{
                display: 'block', padding: '13px 24px', borderRadius: 'var(--radius-md)',
                border: '2px solid var(--navy)', color: 'var(--navy)',
                fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none',
                fontFamily: 'var(--font-manrope)', textAlign: 'center', marginTop: '1.5rem',
              }}>
                Get Started — $500/mo →
              </a>
            </div>

            {/* Advanced Card */}
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
                <div style={{ fontSize: '1.8rem' }}>🤖</div>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px',
                  background: 'var(--accent)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Most Popular
                </span>
              </div>

              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(232,97,26,0.90)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                Pro
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', fontFamily: 'var(--font-manrope)', fontWeight: 800, marginBottom: '0.5rem' }}>
                Agentic AI Receptionist
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Powered by Smith.ai — a fully trained, autonomous AI agent built around your sales process. Qualifies leads, handles objections, books appointments, and logs every interaction. 150 agentic calls/month included.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-manrope)' }}>$950</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>/month</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', marginBottom: '1.75rem' }}>
                150 agentic calls/mo included — larger packages available
              </div>

              <div style={{ marginBottom: '0.65rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(232,97,26,0.90)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  What's Included
                </div>
                {ADVANCED_INCLUDES.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.55rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://buy.stripe.com/14A28rcUjeuOfPVac143S09" target="_blank" rel="noopener noreferrer" style={{
                display: 'block', padding: '13px 24px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent)', color: '#fff',
                fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none',
                fontFamily: 'var(--font-manrope)', textAlign: 'center', marginTop: '1.5rem',
              }}>
                Get Started — $950/mo →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '960px', margin: '0 auto' }}>

            {/* Basic track */}
            <div>
              <div style={{
                fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase',
                letterSpacing: '0.1em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800 }}>B</span>
                Basic Plan
              </div>
              {[
                { n: '1', title: 'You Share 4 Things', body: 'Your phone number, hours of operation, where to direct callers during business hours, and an email for your monthly call log. That\'s it.' },
                { n: '2', title: 'We Configure & Connect', body: 'We set up the AI on your number within 24–48 hours. No equipment. No new lines. Just point your calls our way.' },
                { n: '3', title: 'Monthly Log Delivered', body: 'Every month you receive a full spreadsheet of every call — who called, when, and what was discussed. Yours to review and share with your team.' },
              ].map((step) => (
                <div key={step.n} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem',
                }}>
                  <span style={{
                    width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                    background: '#FFF7F4', border: '2px solid var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)',
                  }}>
                    {step.n}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-manrope)', marginBottom: '0.25rem' }}>{step.title}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--gray)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advanced track */}
            <div>
              <div style={{
                fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase',
                letterSpacing: '0.1em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800 }}>A</span>
                Advanced Plan
              </div>
              {[
                { n: '1', title: '$500 Setup — Book Your Onboarding Call', body: 'We schedule a 30-minute call with our team to understand your sales process, qualifying criteria, and ideal customer profile.' },
                { n: '2', title: 'We Build Your Agent', body: 'Using your onboarding information, we configure a fully agentic AI — trained on your services, objections, and lead qualification standards.' },
                { n: '3', title: 'Test, Approve & Tweak', body: 'We test the agent thoroughly before it ever touches a real call. You review, give feedback, and sign off. Room for tweaks is built in.' },
                { n: '4', title: 'Live in 3 Weeks — Then Autopilot', body: 'From your onboarding call to launch: 3 weeks. Once live, your phone is fully staffed by AI. Monthly subscription autopays. Boomski.' },
              ].map((step) => (
                <div key={step.n} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem',
                }}>
                  <span style={{
                    width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                    background: '#16192A',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)',
                  }}>
                    {step.n}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-manrope)', marginBottom: '0.25rem' }}>{step.title}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--gray)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Voice Options ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem',
            }}>
              Advanced Plan Feature
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontFamily: 'var(--font-manrope)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              Choose Your AI&rsquo;s Voice
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
              The Advanced Agentic Receptionist comes with multiple voice options — American, European,
              male and female — so your AI sounds exactly like the brand you want to project.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {VOICES.map((v) => (
              <div key={v.region} style={{
                background: '#fff', border: '1.5px solid #E2E8F0',
                borderRadius: '16px', padding: '1.75rem',
                boxShadow: '0 2px 12px rgba(13,27,42,0.04)',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{v.flag}</div>
                <h3 style={{
                  fontSize: '1rem', color: 'var(--navy)', fontFamily: 'var(--font-manrope)',
                  fontWeight: 700, marginBottom: '1rem',
                }}>
                  {v.region}
                </h3>
                {v.options.map((opt) => (
                  <div key={opt} style={{
                    display: 'flex', gap: '0.5rem', alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}>
                    <span style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: 'var(--accent)', flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--slate)', lineHeight: 1.4 }}>{opt}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--gray)', marginTop: '1.5rem', lineHeight: 1.6 }}>
            Voice selection happens during your onboarding call. Additional voice options may be available — ask our team.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
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
              AI Receptionist FAQs
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
        label="Never Miss Another Lead"
        heading="Your Phone Fully Staffed by AI — Starting at $500"
        body="$500 setup. Low monthly subscription. 24/7/365 coverage from day one. No salary. No sick days. No voicemail black holes."
        primaryCta={{ label: 'Get Started — $500 Setup', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />

    </main>
  )
}
