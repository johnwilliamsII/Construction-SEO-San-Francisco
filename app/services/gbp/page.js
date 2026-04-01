import SectionHeading from '../../../components/sections/SectionHeading'
import StatCard from '../../../components/sections/StatCard'
import FaqAccordion from '../../../components/sections/FaqAccordion'
import CtaBanner from '../../../components/sections/CtaBanner'
import Section from '../../../components/layout/Section'

export const metadata = {
  title: 'Google Business Profile Optimization | Construction SEO San Francisco',
  description:
    'Get into the Google Maps 3-Pack for Bay Area construction searches. We fully optimize and manage your GBP to drive more calls and direction requests.',
}

const FEATURES = [
  { icon: '✅', title: 'Full GBP Setup & Verification',      body: 'Complete setup, category optimization, and verification — done right the first time.' },
  { icon: '✍️', title: 'Keyword-Rich Descriptions',          body: 'Service descriptions and Q&A sections optimized with the terms Bay Area customers actually search.' },
  { icon: '📅', title: 'Weekly Google Posts',                body: 'We publish regular posts (offers, project updates, news) to signal activity to Google.' },
  { icon: '📸', title: 'Photo Strategy & Management',        body: 'Before/afters, job site photos, team images — a consistent photo cadence that builds trust.' },
  { icon: '⭐', title: 'Review Acquisition System',          body: 'A systematic process to generate more genuine 5-star reviews and respond professionally.' },
  { icon: '📈', title: 'GBP Insights Reporting',             body: 'Monthly reports on calls, direction requests, website clicks — the metrics that actually matter.' },
]

const STATS = [
  { value: '44%',  label: 'of Local Clicks Go to the 3-Pack', detail: 'Google internal data' },
  { value: '200+', label: 'Monthly Calls from GBP',            detail: 'Avg. client after 6 months' },
  { value: '–60%', label: 'Cost Per Lead Reduction',           detail: 'Vs. paid directory listings' },
  { value: '3×',   label: 'Faster Results vs. Organic SEO',    detail: 'For new GBP profiles' },
]

const FAQ = [
  {
    question: 'What is the Google Business Profile 3-Pack?',
    answer:
      'The 3-Pack is the block of three local business listings that appears at the top of Google for local searches (e.g., "general contractor San Francisco"). It includes a map, business name, rating, hours, and phone number. Getting into the 3-Pack is the single highest-ROI move for most local contractors.',
  },
  {
    question: 'My GBP already exists. Can you optimize it?',
    answer:
      'Yes — most of our GBP clients already have a profile but it\'s under-optimized. We audit your existing profile, fix issues, fill in missing fields, rewrite descriptions, add photos, and start an active posting and review cadence.',
  },
  {
    question: 'How does GBP optimization help me get more calls?',
    answer:
      'An optimized GBP appears higher in local map results, shows up for more relevant keywords, and has complete information that builds trust. Combined, these factors drive more clicks to call, direction requests, and website visits from high-intent local searchers.',
  },
]

export default function GBPPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section variant="gradient" size="lg" aria-labelledby="gbp-heading">
        <SectionHeading
          label="Google Business Profile"
          heading={<>Own the Maps <em>3-Pack</em> for Bay Area Construction Searches</>}
          body="The Google Maps 3-Pack gets 44% of all local search clicks. We put your construction business there — and keep it there."
          id="gbp-heading"
        />
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="/#contact" className="btn btn-primary btn--lg">Get a Free GBP Audit</a>
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
      <Section id="features" variant="subtle" aria-labelledby="gbp-features-heading">
        <SectionHeading
          label="What We Do"
          heading={<>Full GBP Management, <em>Done For You</em></>}
          body="We handle everything your Google Business Profile needs to rank in the Maps 3-Pack and convert views into phone calls."
          id="gbp-features-heading"
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
      <Section id="faq" aria-labelledby="gbp-faq-heading">
        <SectionHeading
          label="Common Questions"
          heading="GBP Optimization FAQs"
          id="gbp-faq-heading"
        />
        <FaqAccordion items={FAQ} />
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Free Audit"
        heading={<>How Does Your GBP Stack Up Against <em>Bay Area Competitors</em>?</>}
        body="Get a free GBP audit. We'll show you where your profile falls short and exactly what it takes to get into the Maps 3-Pack."
        primaryCta={{ label: 'Get My Free GBP Audit', href: '/#contact' }}
        secondaryCta={{ label: 'See Local SEO Services', href: '/services/local-seo/' }}
      />
    </>
  )
}
