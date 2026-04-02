import Link from 'next/link'

const SERVICES = [
  { label: 'SEO Packages',      href: '/seo-packages-for-contractors/' },
  { label: 'Local SEO',         href: '/local-seo-for-contractors/' },
  { label: 'Link Building',     href: '/link-building-for-contractors/' },
  { label: 'Keyword Research',  href: '/keyword-research-for-contractors/' },
  { label: 'AI Receptionist',   href: '/ai-receptionist-service/' },
]

const COMPANY = [
  { label: 'About',         href: '/bay-area-seo-company/' },
  { label: 'Case Studies',  href: '/case-studies/' },
  { label: 'Blog',          href: '/blog/' },
  { label: 'Free SEO Audit', href: '/free-seo-audit/' },
  { label: 'Resources',     href: '/resources/' },
]

const SERVICE_AREA = [
  'San Francisco',
  'Oakland & East Bay',
  'San Jose & South Bay',
  'Marin County',
  'Peninsula & Silicon Valley',
  'North Bay',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              contractor<span>seo</span>bayarea<em>.com</em>
            </div>
            <p>
              SEO built exclusively for Bay Area construction companies and contractors.
              More Google rankings, more calls, more booked work.
            </p>
            <p style={{ marginTop: '6px', fontSize: '0.85rem', color: 'var(--gray)' }}>
              Headquartered in San Francisco, CA
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map(({ label, href }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {COMPANY.map(({ label, href }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div className="footer-col">
            <h4>Service Area</h4>
            <ul>
              {SERVICE_AREA.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} contractorseobayarea.com
            &nbsp;|&nbsp;
            <Link href="mailto:partners@contractorseobayarea.com">partners@contractorseobayarea.com</Link>
            &nbsp;|&nbsp;
            <Link href="/sources/">Image Sources & Credits</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
