import SectionHeading from '../../../components/sections/SectionHeading'
import ServiceCard from '../../../components/sections/ServiceCard'
import StatCard from '../../../components/sections/StatCard'
import FaqAccordion from '../../../components/sections/FaqAccordion'
import CtaBanner from '../../../components/sections/CtaBanner'
import Section from '../../../components/layout/Section'

export const metadata = {
  title: 'Local SEO for Contractors | Construction SEO San Francisco',
  description:
    'Hyper-local SEO for Bay Area construction companies. Rank for "contractor near me" searches across SF neighborhoods, Oakland, San Jose, and the Peninsula.',
}

const FEATURES = [
  { icon: '🗺️', title: 'Hyper-Local Keyword Research',    body: 'We map every search term Bay Area homeowners and PMs use when looking for contractors — by neighborhood, city, and zip code.' },
  { icon: '📄', title: 'City & Service Landing Pages',     body: 'We build and optimize dedicated pages for each service + location combination you want to rank for.' },
  { icon: '📋', title: 'Local Citation Building',          body: 'NAP consistency across 80+ Bay Area directories, ensuring Google trusts your business information.' },
  { icon: '🔍', title: 'Competitor Gap Analysis',          body: 'See exactly which keywords your top competitors rank for that you don\'t — and we fix that.' },
  { icon: '⚙️', title: 'Schema Markup for Contractors',   body: 'LocalBusiness, Service, and Review schema signals help Google understand your offerings precisely.' },
  { icon: '📊', title: 'Monthly Ranking Reports',          body: 'Plain-English reports showing exactly where your rankings moved, what traffic you gained, and what\'s next.' },
]

const STATS = [
  { value: '+312%', label: 'Avg. Organic Traffic Growth',   detail: 'Measured over 12 months' },
  { value: '60–90', label: 'Days to First Ranking Gains',   detail: 'Bay Area timeline' },
  { value: '4.8×',  label: 'Average Lead Multiplier',       detail: 'Vs. pre-SEO baseline' },
  { value: '80+',   label: 'Citation Sources Built',        detail: 'Per client engagement' },
]

const FAQ = [
  {
    question: 'What is local SEO for contractors?',
    answer:
      'Local SEO is the process of optimizing your website and online presence so your construction business appears at the top of Google when Bay Area customers search for contractors in your area. It includes on-page optimization, citation building, schema markup, and content strategy.',
  },
  {
    question: 'How long before I see local ranking improvements?',
    answer:
      'Most clients see movement in targeted keywords within 60–90 days and meaningful traffic growth within 4–6 months. More competitive keywords (like "general contractor San Francisco") can take 6–9 months to reach the top 3.',
  },
  {
    question: 'Do you work in all Bay Area cities?',
    answer:
      'Yes — we target SF neighborhoods, Oakland, Berkeley, San Jose, South Bay, the Peninsula, Marin, and East Bay. We build location-specific pages for every market you want to serve.',
  },
]

export default function LocalSEOPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section variant="gradient" size="lg" aria-labelledby="local-seo-heading">
        <SectionHeading
          label="Local SEO for Contractors"
          heading={<>Rank #1 in Every Bay Area Market <em>You Serve</em></>}
          body="Hyper-local SEO that puts your construction business at the top of Google when homeowners and PMs in your service area are searching right now."
          id="local-seo-heading"
        />
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="/#contact" className="btn btn-primary btn--lg">Get a Free Local SEO Audit</a>
          <a href="#features" className="btn btn-secondary btn--lg">See What's Included</a>
        </div>
      </Section>

      {/* ── Stats ── */}
      <Section variant="white">
        <div className="grid-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </Section>

      {/* ── Features ── */}
      <Section id="features" variant="subtle" aria-labelledby="features-heading">
        <SectionHeading
          label="What's Included"
          heading={<>Everything You Need to <em>Own Local Search</em></>}
          body="A complete local SEO engagement — not a checklist of deliverables, but a strategy built around ranking your specific construction business."
          id="features-heading"
        />
        <div className="grid-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__body">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq" aria-labelledby="faq-heading">
        <SectionHeading
          label="Common Questions"
          heading="Local SEO FAQs"
          id="faq-heading"
        />
        <FaqAccordion items={FAQ} />
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Limited Spots"
        heading={<>Ready to Rank for <em>Bay Area Contractor</em> Searches?</>}
        body="Get a free local SEO audit. We'll show your current rankings, top competitors, and the exact keywords driving jobs in your area."
        primaryCta={{ label: 'Get My Free Audit', href: '/#contact' }}
        secondaryCta={{ label: 'See GBP Services', href: '/services/gbp/' }}
      />
    </>
  )
}
