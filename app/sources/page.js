import { getSourcesByType } from '../../lib/sources'
import { SourcesTable } from '../../components/sections/SourceCredit'
import SectionHeading from '../../components/sections/SectionHeading'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'Image Sources & Credits | Construction SEO San Francisco',
  description:
    'Attribution and licensing information for all third-party images, fonts, icons, and media assets used on this website.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/sources/' },
}

export default function SourcesPage() {
  const byType = getSourcesByType()
  const types  = Object.keys(byType).sort()

  return (
    <>
      {/* ── Header ── */}
      <Section variant="gradient" size="md" aria-labelledby="sources-heading">
        <SectionHeading
          as="h1"
          label="Transparency"
          heading="Image Sources & Asset Credits"
          body="We believe in proper attribution. This page lists every third-party image, font, icon, and media asset used on this site, along with their license information."
          id="sources-heading"
        />
      </Section>

      {/* ── Credits table ── */}
      <Section variant="white">
        {types.length === 0 ? (
          <p style={{ color: 'var(--text-tertiary)', fontStyle: 'italic', textAlign: 'center' }}>
            No third-party assets registered yet. This page will be populated as images and media are added to the site.
          </p>
        ) : (
          types.map((type) => (
            <div key={type} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.2rem', textTransform: 'capitalize', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {type}s
              </h2>
              <div className="glass-card glass-card--sm glass-highlight" style={{ padding: '0' }}>
                <SourcesTable sources={byType[type]} />
              </div>
            </div>
          ))
        )}

        {/* Attribution notes */}
        <div className="glass-card glass-highlight" style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Attribution Notes</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li>• All fonts are served via Next.js Google Fonts optimization and comply with the SIL Open Font License.</li>
            <li>• Stock photos from Unsplash are used under the Unsplash License (free for commercial use, no attribution required — we credit voluntarily).</li>
            <li>• Custom icons and illustrations created for this site are &copy; {new Date().getFullYear()} Construction SEO San Francisco.</li>
            <li>• If you believe an asset has been incorrectly attributed, please contact <a href="mailto:partners@contractorseobayarea.com" style={{ color: 'var(--accent)' }}>partners@contractorseobayarea.com</a>.</li>
          </ul>
        </div>
      </Section>
    </>
  )
}
