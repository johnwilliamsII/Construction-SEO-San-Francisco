import { Inter, Manrope } from 'next/font/google'
import Nav from '../components/Nav'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'Construction SEO San Francisco | Rank #1 on Google | Bay Area Contractor Marketing',
  description:
    'SEO for construction companies in San Francisco & the Bay Area. Rank #1 on Google, dominate local search, and get more contractor leads with proven SEO strategies.',
  keywords:
    'construction SEO San Francisco, contractor SEO Bay Area, local SEO for contractors, Google Business Profile optimization, construction company marketing SF',
  robots: 'index, follow',
  openGraph: {
    title: 'Construction SEO San Francisco | Rank #1 & Get More Contractor Leads',
    description:
      'SEO built exclusively for Bay Area construction companies. More Google rankings, more calls, more jobs.',
    type: 'website',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ConstructionSEOSanFrancisco.com',
  description:
    'SEO services exclusively for construction companies and contractors in the San Francisco Bay Area.',
  areaServed: [
    { '@type': 'City', name: 'San Francisco' },
    { '@type': 'City', name: 'Oakland' },
    { '@type': 'City', name: 'San Jose' },
    { '@type': 'City', name: 'Berkeley' },
    { '@type': 'City', name: 'Fremont' },
    { '@type': 'City', name: 'Daly City' },
    { '@type': 'City', name: 'South San Francisco' },
  ],
  serviceType: ['Local SEO', 'Google Business Profile Optimization', 'Construction Marketing'],
  knowsAbout: [
    'Construction SEO',
    'Contractor Lead Generation',
    'Google Maps Ranking',
    'Local Search Optimization',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="footer-logo">Construction<span>SEO</span>SanFrancisco<em>.com</em></div>
                <p>SEO built exclusively for Bay Area construction companies and contractors.</p>
              </div>
              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><a href="/services/local-seo/">Local SEO</a></li>
                  <li><a href="/services/gbp/">Google Business Profile</a></li>
                  <li><a href="/services/keyword-research/">Keyword Research</a></li>
                  <li><a href="/services/link-building/">Link Building</a></li>
                  <li><a href="/services/seo-packages/">SEO Packages</a></li>
                  <li><a href="/services/ai-receptionist/">AI Receptionist</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="/about/">About</a></li>
                  <li><a href="/blog/">Blog</a></li>
                  <li><a href="/free-seo-audit/">Free SEO Audit</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Service Area</h4>
                <ul>
                  <li>San Francisco</li>
                  <li>Oakland &amp; East Bay</li>
                  <li>San Jose &amp; South Bay</li>
                  <li>Marin &amp; Peninsula</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 ConstructionSEOSanFrancisco.com &nbsp;|&nbsp; <a href="mailto:hello@constructionseosanfrancisco.com">hello@constructionseosanfrancisco.com</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
