import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import CtaBanner from '../../components/sections/CtaBanner'

export const metadata = {
  title: 'Construction SEO Blog | Bay Area Contractor Marketing Tips',
  description:
    'Actionable SEO tips, local search strategies, and Google Business Profile guides for Bay Area construction companies, HVAC contractors, and remodeling businesses.',
}

/* ─────────────────────────────────────────────────────────────────
   BLOG POSTS — 60 total
   Categories: HVAC Contractors | Remodeling Contractors | General Guides
───────────────────────────────────────────────────────────────── */
const POSTS = [
  /* ── HVAC Contractors (B01–B20) ── */
  { slug: 'hvac-seo-san-francisco', title: "How Jake's HVAC Business Got to #1 on Google in San Francisco", category: 'HVAC Contractors', date: 'Jan 2025' },
  { slug: 'hvac-seo-guide-bay-area', title: 'HVAC SEO: The Complete Guide for Bay Area Contractors', category: 'HVAC Contractors', date: 'Jan 2025' },
  { slug: 'hvac-google-business-profile-san-francisco', title: 'Google Business Profile Setup for HVAC Companies in San Francisco', category: 'HVAC Contractors', date: 'Feb 2025' },
  { slug: 'hvac-keywords-oakland-east-bay', title: 'Best Keywords for HVAC Contractors in Oakland and the East Bay', category: 'HVAC Contractors', date: 'Feb 2025' },
  { slug: 'hvac-leads-without-yelp-homeadvisor', title: 'How to Get More HVAC Leads Without Paying Yelp or HomeAdvisor', category: 'HVAC Contractors', date: 'Feb 2025' },
  { slug: 'hvac-website-seo-checklist', title: 'HVAC Website SEO Checklist for Bay Area Companies', category: 'HVAC Contractors', date: 'Mar 2025' },
  { slug: 'hvac-local-citations-directories', title: 'Local Citations for HVAC: Which Directories Actually Matter', category: 'HVAC Contractors', date: 'Mar 2025' },
  { slug: 'rank-for-ac-repair-san-francisco', title: "How to Rank for 'AC Repair San Francisco' — A Step-by-Step Guide", category: 'HVAC Contractors', date: 'Mar 2025' },
  { slug: 'hvac-google-reviews', title: 'HVAC Review Generation: How to Get 50+ Google Reviews Fast', category: 'HVAC Contractors', date: 'Apr 2025' },
  { slug: 'hvac-seo-san-mateo', title: 'Why HVAC Contractors in San Mateo Are Losing Jobs to SEO', category: 'HVAC Contractors', date: 'Apr 2025' },
  { slug: 'hvac-schema-markup', title: 'Schema Markup for HVAC Companies: A Plain-English Guide', category: 'HVAC Contractors', date: 'Apr 2025' },
  { slug: 'hvac-content-marketing-blog-topics', title: 'HVAC Content Marketing: The Blog Topics That Drive Leads', category: 'HVAC Contractors', date: 'May 2025' },
  { slug: 'hvac-google-maps-strategy', title: "How Jake Doubled His HVAC Revenue With a Google Maps Strategy", category: 'HVAC Contractors', date: 'May 2025' },
  { slug: 'hvac-website-speed', title: 'HVAC Website Speed: Why Slow Sites Cost You Bay Area Jobs', category: 'HVAC Contractors', date: 'May 2025' },
  { slug: 'seasonal-hvac-seo-winter', title: 'Seasonal HVAC SEO: Ranking for Winter Heating Keywords in the Bay', category: 'HVAC Contractors', date: 'Jun 2025' },
  { slug: 'hvac-competitor-analysis', title: 'HVAC Competitor Analysis: How to Outrank the Big Companies', category: 'HVAC Contractors', date: 'Jun 2025' },
  { slug: 'hvac-google-maps-3-pack', title: 'How to Appear in the Google Maps 3-Pack for HVAC Searches', category: 'HVAC Contractors', date: 'Jun 2025' },
  { slug: 'hvac-landing-pages', title: 'HVAC Landing Pages That Convert: Structure and Copy Tips', category: 'HVAC Contractors', date: 'Jul 2025' },
  { slug: 'hvac-mobile-seo', title: 'Mobile SEO for HVAC: Why 70% of HVAC Searches Happen on Phones', category: 'HVAC Contractors', date: 'Jul 2025' },
  { slug: 'hvac-link-building', title: 'HVAC Link Building: How to Earn Backlinks in the Bay Area Market', category: 'HVAC Contractors', date: 'Jul 2025' },

  /* ── Remodeling Contractors (B21–B40) ── */
  { slug: 'remodeling-contractor-seo-san-francisco', title: 'How a San Francisco Remodeling Contractor Went From Page 4 to #1', category: 'Remodeling Contractors', date: 'Jan 2025' },
  { slug: 'kitchen-remodel-seo-keywords', title: 'Kitchen Remodel SEO: Keywords That Drive $100K+ Projects', category: 'Remodeling Contractors', date: 'Jan 2025' },
  { slug: 'bathroom-remodel-seo-bay-area', title: 'SEO for Bathroom Remodeling Contractors in the Bay Area', category: 'Remodeling Contractors', date: 'Feb 2025' },
  { slug: 'remodeling-contractor-gbp', title: 'Google Business Profile for Remodeling Contractors: Full Walkthrough', category: 'Remodeling Contractors', date: 'Feb 2025' },
  { slug: 'jenny-remodeling-seo-oakland', title: "How Jenny Built an SEO Machine for Her Oakland Remodeling Business", category: 'Remodeling Contractors', date: 'Feb 2025' },
  { slug: 'remodeling-before-after-photos-seo', title: 'Before & After Photos: The Secret SEO Weapon for Remodelers', category: 'Remodeling Contractors', date: 'Mar 2025' },
  { slug: 'adu-contractor-seo', title: 'ADU Contractor SEO: Ranking for Accessory Dwelling Unit Keywords', category: 'Remodeling Contractors', date: 'Mar 2025' },
  { slug: 'home-addition-contractor-seo-san-jose', title: 'Local SEO for Home Addition Contractors in San Jose and the South Bay', category: 'Remodeling Contractors', date: 'Mar 2025' },
  { slug: 'remodeling-website-not-generating-leads', title: "Why Your Remodeling Website Isn't Generating Leads (And How to Fix It)", category: 'Remodeling Contractors', date: 'Apr 2025' },
  { slug: 'houzz-vs-google-remodelers', title: 'Houzz vs. Google: Where Bay Area Remodelers Should Invest Their Budget', category: 'Remodeling Contractors', date: 'Apr 2025' },
  { slug: 'remodeling-contractor-reviews', title: 'Remodeling Contractor Reviews: How to Outrank Competitors With Social Proof', category: 'Remodeling Contractors', date: 'Apr 2025' },
  { slug: 'jenny-google-maps-playbook', title: "Jenny's Google Maps Playbook: 200 Leads a Month for a Remodeling Co.", category: 'Remodeling Contractors', date: 'May 2025' },
  { slug: 'deck-fence-contractor-seo', title: 'Deck and Fence Contractor SEO in the Bay Area: A Niche Guide', category: 'Remodeling Contractors', date: 'May 2025' },
  { slug: 'interior-remodel-keywords', title: 'Interior Remodel Keywords: What Bay Area Homeowners Are Searching', category: 'Remodeling Contractors', date: 'May 2025' },
  { slug: 'remodeling-neighborhood-seo', title: 'How Remodeling Contractors Can Rank for Neighborhood-Specific Terms', category: 'Remodeling Contractors', date: 'Jun 2025' },
  { slug: 'building-permit-seo-pages', title: 'Building Permit Pages: The SEO Goldmine Remodelers Are Ignoring', category: 'Remodeling Contractors', date: 'Jun 2025' },
  { slug: 'seo-case-study-480k-contracts', title: 'Case Study: $480K in New Contracts From a 6-Month SEO Campaign', category: 'Remodeling Contractors', date: 'Jun 2025' },
  { slug: 'remodeling-video-seo', title: 'Video SEO for Remodeling Contractors: YouTube, Google, and GBP', category: 'Remodeling Contractors', date: 'Jul 2025' },
  { slug: 'flooring-contractor-seo', title: 'Flooring Contractor SEO: How to Rank for High-Value Installation Keywords', category: 'Remodeling Contractors', date: 'Jul 2025' },
  { slug: 'roofing-contractor-seo-san-francisco', title: 'Roofing Contractor SEO in San Francisco: Competing in a Crowded Market', category: 'Remodeling Contractors', date: 'Jul 2025' },

  /* ── General Guides (B41–B60) ── */
  { slug: 'what-is-local-seo-contractors', title: "What Is Local SEO? A Plain-English Guide for Bay Area Contractors", category: 'General Guides', date: 'Jan 2025' },
  { slug: 'google-business-profile-vs-yelp', title: 'Google Business Profile vs. Yelp for Contractors: Which One Matters More', category: 'General Guides', date: 'Jan 2025' },
  { slug: 'how-long-does-seo-take-contractors', title: 'How Long Does SEO Take? What Contractors Should Expect in the Bay Area', category: 'General Guides', date: 'Feb 2025' },
  { slug: 'cost-of-buying-leads-angi-homeadvisor', title: 'The Real Cost of Buying Leads From Angi, HomeAdvisor, and Thumbtack', category: 'General Guides', date: 'Feb 2025' },
  { slug: 'on-page-seo-contractor-websites', title: 'On-Page SEO for Contractor Websites: The 10 Things That Matter Most', category: 'General Guides', date: 'Feb 2025' },
  { slug: 'nap-consistency-local-seo', title: 'NAP Consistency: Why Your Business Name, Address & Phone Must Match Everywhere', category: 'General Guides', date: 'Mar 2025' },
  { slug: 'respond-to-google-reviews-contractor', title: 'How to Respond to Google Reviews as a Contractor (With Templates)', category: 'General Guides', date: 'Mar 2025' },
  { slug: 'contractor-website-structure-seo', title: 'Contractor Website Structure: How to Organize Your Pages for SEO', category: 'General Guides', date: 'Mar 2025' },
  { slug: 'eeat-contractor-websites', title: 'What Is E-E-A-T and Why It Matters for Contractor Websites', category: 'General Guides', date: 'Apr 2025' },
  { slug: 'link-building-contractors-2025', title: 'Link Building for Contractors: The Only Strategies That Still Work in 2025', category: 'General Guides', date: 'Apr 2025' },
  { slug: 'city-landing-pages-contractors', title: 'How to Create City Landing Pages That Actually Rank', category: 'General Guides', date: 'Apr 2025' },
  { slug: 'construction-schema-markup', title: 'Construction Schema Markup: The Complete Implementation Guide', category: 'General Guides', date: 'May 2025' },
  { slug: 'google-search-console-contractors', title: "Google Search Console for Contractors: A Beginner's Walkthrough", category: 'General Guides', date: 'May 2025' },
  { slug: 'contractor-blog-topics', title: 'Blog Topics for Contractor Websites: 50 Ideas That Drive Local Traffic', category: 'General Guides', date: 'May 2025' },
  { slug: 'core-web-vitals-contractors', title: 'Core Web Vitals for Contractor Websites: Speed, Layout, Interaction', category: 'General Guides', date: 'Jun 2025' },
  { slug: 'track-seo-roi-contractor', title: 'How to Track ROI From SEO as a Contractor', category: 'General Guides', date: 'Jun 2025' },
  { slug: 'ai-contractor-seo', title: 'AI and Contractor SEO: What Changes and What Stays the Same', category: 'General Guides', date: 'Jun 2025' },
  { slug: 'local-services-ads-vs-seo', title: "The Contractor's Guide to Google's Local Services Ads (LSA) vs. SEO", category: 'General Guides', date: 'Jul 2025' },
  { slug: 'contractor-website-seo-audit', title: 'How to Audit Your Contractor Website for SEO in Under an Hour', category: 'General Guides', date: 'Jul 2025' },
  { slug: 'bay-area-construction-seo-numbers', title: 'Bay Area Construction Market: The Local SEO Opportunity by the Numbers', category: 'General Guides', date: 'Jul 2025' },
]

const CATEGORIES = ['All', 'HVAC Contractors', 'Remodeling Contractors', 'General Guides']

const BADGE_COLORS = {
  'HVAC Contractors': 'badge--accent',
  'Remodeling Contractors': 'badge--info',
  'General Guides': 'badge--neutral',
}

export default function BlogPage() {
  return (
    <>
      {/* ── Header ── */}
      <Section variant="gradient" size="lg" aria-labelledby="blog-heading">
        <SectionHeading
          label="Construction SEO Blog"
          heading={<>Insights for Bay Area <em>Contractors</em></>}
          body="Actionable local SEO guides, GBP optimization tips, and lead generation strategies written specifically for construction businesses and trades."
          id="blog-heading"
        />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ display: 'inline-flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <span><strong style={{ color: 'var(--accent)' }}>20</strong> HVAC articles</span>
            <span><strong style={{ color: 'var(--accent)' }}>20</strong> Remodeling articles</span>
            <span><strong style={{ color: 'var(--accent)' }}>20</strong> General guides</span>
          </div>
        </div>
      </Section>

      {/* ── Posts grid ── */}
      <Section variant="white">
        {/* Category filter */}
        <div className="tabs" style={{ marginBottom: '2.5rem' }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} className={`tab-button${cat === 'All' ? ' active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {POSTS.map((post) => (
            <article key={post.slug} className="glass-card glass-card--sm glass-highlight" style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Placeholder image block */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-subtle) 100%)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'var(--accent)',
                  opacity: 0.6,
                }}
                aria-hidden="true"
              >
                {post.category === 'HVAC Contractors' ? '❄️' : post.category === 'Remodeling Contractors' ? '🏗️' : '📋'}
              </div>

              <div style={{ padding: '0 0.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <span className={`badge ${BADGE_COLORS[post.category] || 'badge--neutral'}`}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>{post.date}</span>
                </div>

                <h3 style={{ fontSize: '0.98rem', lineHeight: 'var(--leading-snug)', marginBottom: 'auto', color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>

                <a
                  href={`/blog/${post.slug}/`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    marginTop: '1rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    textDecoration: 'none',
                  }}
                >
                  Read article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Newsletter CTA ── */}
      <CtaBanner
        label="Stay Ahead"
        heading={<>Free SEO Tips for <em>Bay Area Contractors</em></>}
        body="Get our monthly guides on local search, GBP management, and what's changing in construction marketing — straight to your inbox."
        primaryCta={{ label: 'Get the Free Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View Our Services', href: '/local-seo-for-contractors/' }}
      />
    </>
  )
}
