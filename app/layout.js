import { Inter, Manrope } from 'next/font/google'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/layout/ScrollToTop'
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
  name: 'contractorseobayarea.com',
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KW3R4LTZ2V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KW3R4LTZ2V');`,
          }}
        />
        {/* ── Schema.org structured data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {/* ── END Schema.org ── */}
      </head>
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
