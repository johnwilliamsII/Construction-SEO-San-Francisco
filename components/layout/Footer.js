import Link from 'next/link'

const SERVICES = [
  { label: 'Local SEO for Contractors',     href: '/services/local-seo/' },
  { label: 'Google Business Profile',       href: '/services/gbp/' },
  { label: 'All Services',                  href: '/services/' },
]

const COMPANY = [
  { label: 'About Us',      href: '/about/' },
  { label: 'Case Studies',  href: '/case-studies/' },
  { label: 'Blog',          href: '/blog/' },
  { label: 'Our Process',   href: '/#process' },
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
              Construction<span>SEO</span><em>.sf</em>
            </div>
            <p>
              SEO built exclusively for Bay Area construction companies and contractors.
              More Google rankings, more calls, more booked work.
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
            &copy; {year} Construction SEO San Francisco
            &nbsp;|&nbsp;
            <Link href="mailto:hello@constructionseo.sf">hello@constructionseo.sf</Link>
            &nbsp;|&nbsp;
            <Link href="/sources/">Image Sources & Credits</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
