import Button from '../ui/Button'

/**
 * CtaBanner — Full-width CTA section.
 *
 * Props:
 *   label     — optional badge label above the heading
 *   heading   — main CTA heading (supports JSX for <em>)
 *   body      — supporting paragraph
 *   primaryCta  — { label, href }
 *   secondaryCta — { label, href } (optional)
 *   footnote  — small text below the buttons (e.g., 'No commitment. No spam.')
 *   dark      — boolean, uses dark background variant
 *   id        — HTML id
 *   className
 */
export default function CtaBanner({
  label,
  heading,
  body,
  primaryCta,
  secondaryCta,
  footnote,
  dark      = false,
  id,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`cta-banner${dark ? ' cta-banner--dark' : ''} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {label && (
          <span className="section-label">{label}</span>
        )}

        {heading && (
          <h2 id={id ? `${id}-heading` : undefined} style={{ marginBottom: '1rem' }}>
            {heading}
          </h2>
        )}

        {body && (
          <p style={{ fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem' }}>
            {body}
          </p>
        )}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {primaryCta && (
            <Button
              href={primaryCta.href}
              variant={dark ? 'white' : 'primary'}
              size="lg"
            >
              {primaryCta.label}
            </Button>
          )}

          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant={dark ? 'outline' : 'outline-dark'}
              size="lg"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>

        {footnote && (
          <p className="contact-sub">{footnote}</p>
        )}
      </div>
    </section>
  )
}
