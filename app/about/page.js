import SectionHeading from '../../components/sections/SectionHeading'
import CtaBanner from '../../components/sections/CtaBanner'
import StatCard from '../../components/sections/StatCard'
import SplitSection from '../../components/sections/SplitSection'
import ImageBlock from '../../components/sections/ImageBlock'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'About | Construction SEO San Francisco',
  description:
    'We are a Bay Area SEO agency that works exclusively with construction companies and contractors. Learn our story, our approach, and why niche expertise beats generic marketing.',
}

const STATS = [
  { value: '40+',  label: 'Bay Area Contractors',  detail: 'Served since founding' },
  { value: '4.8×', label: 'Avg. Lead Increase',    detail: 'Measured after 6 months' },
  { value: '#1',   label: 'Rankings Delivered',     detail: 'Across competitive SF keywords' },
  { value: '100%', label: 'Construction Focus',     detail: 'We only work with contractors' },
]

const VALUES = [
  { icon: '🎯', title: 'Niche Over Breadth', body: "We turn down clients who aren't in construction. Depth beats generalism every time." },
  { icon: '📊', title: 'Data First',         body: 'Every decision is backed by Search Console, Analytics, and call tracking — not guesses.' },
  { icon: '🤝', title: 'No Lock-Ins',        body: 'Month-to-month only. We stay because you choose to keep us, not because a contract forces it.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section variant="gradient" size="lg" aria-labelledby="about-heading">
        <SectionHeading
          label="Our Story"
          heading={<>Built Specifically for <em>Bay Area Builders</em></>}
          body="We got tired of watching great construction companies lose to mediocre competitors because they didn't understand SEO. So we fixed that."
          id="about-heading"
        />
      </Section>

      {/* ── Stats ── */}
      <Section variant="white">
        <div className="grid-4">
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} detail={s.detail} />
          ))}
        </div>
      </Section>

      {/* ── Mission ── */}
      <Section variant="subtle">
        <div className="split-section">
          <div className="split-section__text">
            <span className="section-label">Our Mission</span>
            <h2 style={{ marginBottom: '1rem' }}>We Only Win When You Win</h2>
            <p>
              Generic marketing agencies don&apos;t understand construction. They don&apos;t know the
              difference between a GC and a sub, what &ldquo;design-build&rdquo; means to a Bay Area
              homeowner, or why March and September are your busiest search months.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We do. And that specificity is why our clients rank — and stay ranked.
            </p>
          </div>
          <div className="split-section__visual">
            <ImageBlock src="" alt="Construction SEO team at work" ratio="card" />
          </div>
        </div>
      </Section>

      {/* ── Values ── */}
      <Section aria-labelledby="values-heading">
        <SectionHeading
          label="How We Work"
          heading="Our Principles"
          id="values-heading"
        />
        <div className="grid-3">
          {VALUES.map((v) => (
            <div key={v.title} className="feature-card">
              <div className="feature-card__icon">{v.icon}</div>
              <h3 className="feature-card__title">{v.title}</h3>
              <p className="feature-card__body">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Ready to Grow?"
        heading={<>Start With a <em>Free Audit</em></>}
        body="No commitment. We'll show you exactly where you rank, who's beating you, and what it takes to fix it."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/#contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies/' }}
      />
    </>
  )
}
