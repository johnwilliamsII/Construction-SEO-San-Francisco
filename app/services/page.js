import SectionHeading from '../../components/sections/SectionHeading'
import ServiceCard from '../../components/sections/ServiceCard'
import CtaBanner from '../../components/sections/CtaBanner'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'Services | Construction SEO San Francisco',
  description:
    'Two focused SEO services for Bay Area contractors: Local SEO and Google Business Profile optimization. Both built exclusively for construction businesses.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/services/' },
}

const SERVICES = [
  {
    icon: '📍',
    title: 'Local SEO for Construction Companies',
    href: '/services/local-seo/',
    description:
      'Capture homeowners and project managers who are searching "contractor near me" right now. We optimize every local signal so your business appears at the top of San Francisco and Bay Area search results.',
    features: [
      'Hyper-local keyword research (SF neighborhoods, cities, zip codes)',
      'On-page SEO for city & service landing pages',
      'Local citation building & NAP consistency across 80+ directories',
      'Competitor gap analysis — see exactly who outranks you and why',
      'Schema markup for contractors (LocalBusiness, Service, Review)',
      'Monthly ranking reports with plain-English explanations',
    ],
    ctaLabel: 'Learn more about Local SEO →',
  },
  {
    icon: '🗺️',
    title: 'Google Business Profile (GBP) Optimization',
    href: '/services/gbp/',
    description:
      'The Google Maps "3-Pack" gets 44% of all clicks for local searches. We fully optimize and actively manage your GBP so you own that prime real estate for every high-value construction keyword.',
    features: [
      'Complete GBP setup, verification & category optimization',
      'Keyword-rich service descriptions and Q&A population',
      'Weekly Google Posts (offers, projects, news)',
      'Photo strategy — before/afters, job sites, team photos',
      'Review acquisition system + response management',
      'GBP insights reporting — calls, directions, website clicks',
    ],
    ctaLabel: 'Learn more about GBP →',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <Section variant="gradient" size="lg" aria-labelledby="services-heading">
        <SectionHeading
          label="Our Services"
          heading={<>Two Services. One Goal: <em>More Bay Area Jobs</em></>}
          body="We don't offer a menu of 20 things. We offer two focused, deeply refined services that move the needle for Bay Area construction companies."
          id="services-heading"
        />
      </Section>

      {/* ── Services grid ── */}
      <Section variant="white">
        <div className="services-grid">
          {SERVICES.map((svc) => (
            <ServiceCard
              key={svc.href}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
              features={svc.features}
              href={svc.href}
              ctaLabel={svc.ctaLabel}
            />
          ))}
        </div>
      </Section>

      {/* ── How we're different ── */}
      <Section variant="subtle" aria-labelledby="diff-heading">
        <SectionHeading
          label="Why It Works"
          heading={<>We Only Work With <em>Contractors</em></>}
          body="Generic SEO agencies treat construction like any other business. We don't. Niche expertise means faster results and rankings that actually last."
          id="diff-heading"
        />
        <div className="grid-3">
          {[
            { icon: '🏗️', title: 'Construction-Only Focus',   body: "We know the industry, the terminology, and how Bay Area buyers search. That knowledge is built into every strategy we run." },
            { icon: '📞', title: 'We Optimize for Calls',      body: "Traffic is great. Phone calls from real Bay Area homeowners with real projects are better. We track and optimize for the signals that actually mean business." },
            { icon: '📅', title: 'Month-to-Month Engagements', body: "No contracts. No lock-ins. We earn your continued business through performance, not paperwork." },
          ].map((d) => (
            <div key={d.title} className="feature-card">
              <div className="feature-card__icon">{d.icon}</div>
              <h3 className="feature-card__title">{d.title}</h3>
              <p className="feature-card__body">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Free Audit"
        heading={<>Not Sure Which Service Is Right for You? <em>Let's Talk.</em></>}
        body="Get a free audit and we'll recommend the right starting point for your business goals and budget."
        primaryCta={{ label: 'Get My Free Audit', href: '/contact/' }}
        secondaryCta={{ label: 'See Case Studies', href: '/case-studies/' }}
      />
    </>
  )
}
