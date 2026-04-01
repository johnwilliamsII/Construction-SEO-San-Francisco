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
    <main>

      {/* ===== HERO ===== */}
      <section style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-label">Service</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '12px 0 20px', color: '#fff' }}>
            Google Business Profile Optimization for Bay Area Contractors
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
            The Google Maps &ldquo;3-Pack&rdquo; appears above all organic results and captures 44% of local search clicks.
            For a contractor in San Francisco or Oakland, being in that 3-Pack for the right keywords can fill your schedule
            for months. We fully build, optimize, and actively manage your Google Business Profile to put you there — and keep you there.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">Audit My GBP for Free →</a>
            <a href="/services/seo-packages/" className="btn btn-outline-dark" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>View Packages</a>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Deliver</span>
            <h2>Full GBP Management, Start to Finish</h2>
            <p>Your Google Business Profile is more than a listing — it&apos;s your most powerful local ranking signal. We treat it like an active marketing channel, not a set-and-forget checkbox.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

            <div className="service-card">
              <h3>Setup, Verification &amp; Category Optimization</h3>
              <p>An unclaimed or misconfigured GBP can&apos;t rank. We handle the entire setup process — from verification to selecting the exact primary and secondary categories that signal the right services to Google.</p>
              <ul className="service-features">
                <li>Full profile claim &amp; verification</li>
                <li>Primary &amp; secondary category selection</li>
                <li>Service area configuration</li>
                <li>Business hours, attributes &amp; features</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Keyword-Rich Descriptions &amp; Services</h3>
              <p>Most contractors leave the description field blank or fill it with generic text. We write keyword-optimized descriptions and build out your full services list to capture more search real estate.</p>
              <ul className="service-features">
                <li>750-character business description (fully optimized)</li>
                <li>Service listings with descriptions &amp; pricing ranges</li>
                <li>Q&amp;A section populated with high-value questions</li>
                <li>Products section (where applicable)</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Weekly Google Posts</h3>
              <p>Active profiles outrank dormant ones. We publish weekly posts to keep your profile fresh and signal engagement — project spotlights, seasonal offers, and local tips that drive clicks.</p>
              <ul className="service-features">
                <li>4 posts/month — offers, updates, events, project features</li>
                <li>Keyword integration in every post</li>
                <li>CTA links to drive website visits &amp; calls</li>
                <li>Seasonal &amp; local content calendar</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Photo Strategy &amp; Management</h3>
              <p>Profiles with 100+ photos get dramatically more views and calls. We build and execute a photo strategy that makes your business look active, professional, and trustworthy.</p>
              <ul className="service-features">
                <li>Before &amp; after project photos</li>
                <li>Team &amp; job site imagery</li>
                <li>Keyword-rich photo file naming &amp; geo-tagging</li>
                <li>360° interior/exterior photos (where available)</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Review Acquisition &amp; Response Management</h3>
              <p>Reviews are one of the top 3 local ranking factors — and they convert skeptical visitors into booked jobs. We build a system to consistently earn 5-star reviews and respond professionally to every one.</p>
              <ul className="service-features">
                <li>Post-job review request system (SMS &amp; email)</li>
                <li>Responses to all reviews — positive &amp; negative</li>
                <li>Review velocity monitoring</li>
                <li>Flagging &amp; dispute management for unfair reviews</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>GBP Insights &amp; Performance Reporting</h3>
              <p>You can&apos;t improve what you don&apos;t measure. Monthly reports connect your GBP activity to real business outcomes so you always know what&apos;s working.</p>
              <ul className="service-features">
                <li>Monthly calls, direction requests &amp; website clicks</li>
                <li>Search query visibility (what people search to find you)</li>
                <li>Photo &amp; post engagement data</li>
                <li>Competitor 3-Pack ranking comparison</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHY GBP ===== */}
      <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why It Matters</span>
            <h2>The 3-Pack Is the Most Valuable Real Estate on Google</h2>
            <p>For local searches like &ldquo;general contractor San Francisco&rdquo; or &ldquo;roofing company Oakland,&rdquo; Google shows a map with 3 local businesses before any website results. If you&apos;re not in that box, you&apos;re invisible to most buyers.</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-num">44% of Clicks</span>
              <h3>The 3-Pack Dominates Local Traffic</h3>
              <p>The top 3 map listings capture nearly half of all clicks on a local search results page — more than all organic website results combined.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Direct Calls</span>
              <h3>Leads Call You Directly From Google</h3>
              <p>Your phone number is right in the listing. Qualified buyers can call you without ever visiting your website — a friction-free path to a new job.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Trust Signals</span>
              <h3>Reviews Build Instant Credibility</h3>
              <p>A 4.8-star profile with 80 reviews closes more jobs than the same contractor with 4 reviews — even if the work is identical. Reviews are proof.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Mobile-First</span>
              <h3>It&apos;s What People See on Their Phone</h3>
              <p>On mobile, Google Maps results fill the entire screen. If you&apos;re not optimized for GBP, you&apos;re missing the majority of local construction searches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span className="section-label">Get Started</span>
          <h2 style={{ color: '#fff', margin: '12px 0 20px' }}>See How Your GBP Stacks Up Against Competitors</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '32px', fontSize: '1.05rem' }}>
            We&apos;ll audit your Google Business Profile, show you exactly why competitors outrank you in the 3-Pack, and lay out what it takes to get there. Free, no obligation.
          </p>
          <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Get My Free GBP Audit →
          </a>
          <p style={{ color: '#94A3B8', marginTop: '16px', fontSize: '0.9rem' }}>No contracts. No spam. Just honest data.</p>
        </div>
      </section>

    </main>
  )
}
