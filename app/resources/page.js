import SectionHeading from '../../components/sections/SectionHeading'
import CtaBanner from '../../components/sections/CtaBanner'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'Resources | Construction SEO San Francisco',
  description:
    'Free guides, checklists, and tools for Bay Area construction companies looking to improve their Google rankings and generate more leads.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/resources/' },
}

/* ── Resource items ─────────────────────────────────────────────
   Add resources as they are created.
   Each: { title, description, type, href, icon, free }
──────────────────────────────────────────────────────────────── */
const RESOURCES = [
  {
    title:       'Bay Area Contractor SEO Checklist',
    description: 'A 50-point checklist covering everything your website and GBP need to compete in the Bay Area construction market.',
    type:        'Checklist',
    href:        '/#contact',
    icon:        '✅',
    free:        true,
  },
  {
    title:       'Local Keyword Research Template',
    description: 'A Google Sheets template for mapping keywords by service type, city, and neighborhood across the Bay Area.',
    type:        'Template',
    href:        '/#contact',
    icon:        '📊',
    free:        true,
  },
  {
    title:       'GBP Optimization Guide',
    description: 'Step-by-step guide to optimizing every field in your Google Business Profile for maximum visibility in the Maps 3-Pack.',
    type:        'Guide',
    href:        '/#contact',
    icon:        '📖',
    free:        true,
  },
]

const TYPES = ['All', 'Checklist', 'Guide', 'Template', 'Tool']

export default function ResourcesPage() {
  return (
    <>
      {/* ── Header ── */}
      <Section variant="gradient" size="lg" aria-labelledby="resources-heading">
        <SectionHeading
          as="h1"
          label="Free Resources"
          heading={<>Tools & Guides for Bay Area <em>Contractor Marketing</em></>}
          body="Free, practical resources to help you improve your Google rankings and generate more leads — no fluff, no upsells."
          id="resources-heading"
        />
      </Section>

      {/* ── Filter + Grid ── */}
      <Section variant="white">
        <div className="tabs" style={{ marginBottom: '2.5rem' }}>
          {TYPES.map((t) => (
            <button key={t} className={`tab-button${t === 'All' ? ' active' : ''}`}>{t}</button>
          ))}
        </div>

        <div className="grid-3">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.href}
              className="glass-card glass-highlight"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{r.icon}</div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
                <span className="badge badge--neutral">{r.type}</span>
                {r.free && <span className="badge badge--success">Free</span>}
              </div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{r.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                {r.description}
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '1.25rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent)' }}>
                Get it free →
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="More Than Resources"
        heading={<>Want Us to Do the Work <em>For You</em>?</>}
        body="Resources are great. But nothing beats having an expert handle your SEO while you focus on running jobs."
        primaryCta={{ label: 'Get a Free SEO Audit', href: '/contact/' }}
        secondaryCta={{ label: 'View Services', href: '/services/' }}
      />
    </>
  )
}
