import LocalSEOClient from './_client'

export const metadata = {
  title: 'Local SEO for Contractors | contractorseosanfrancisco.com',
  description:
    'Our local SEO for contractors puts your Bay Area business on the Google Map Pack. More calls, more jobs, and a search presence you own — not rent.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/local-seo-for-contractors/' },
}

export default function LocalSEOPage() {
  return <LocalSEOClient />
}
