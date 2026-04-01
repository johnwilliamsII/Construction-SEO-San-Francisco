/**
 * ImageBlock — Responsive image with consistent aspect ratios and optional overlay.
 *
 * Since this is a static-export site (images.unoptimized: true in next.config.js),
 * we use a standard <img> with responsive width/height attributes.
 * When the project eventually enables Image Optimization, swap <img> for <Image>.
 *
 * Props:
 *   src         — image path (from /public) or absolute URL
 *   alt         — alt text (required for accessibility)
 *   ratio       — 'hero' | 'card' | 'square' | 'tall' | 'wide' | 'thumb'
 *   caption     — optional caption below the image
 *   overlay     — JSX rendered in the image overlay area (e.g., titles)
 *   credit      — { text, href } source attribution shown over the image
 *   rounded     — boolean, applies border-radius (default true)
 *   hover       — boolean, enables zoom-on-hover (default false)
 *   priority    — boolean, hints browser to load this image eagerly
 *   className
 */
export default function ImageBlock({
  src,
  alt          = '',
  ratio        = 'card',
  caption,
  overlay,
  credit,
  rounded      = true,
  hover        = false,
  priority     = false,
  className    = '',
  ...props
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        className={[
          'img-block',
          `img-block--${ratio}`,
          !rounded ? 'img-block--no-radius' : '',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: hover ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : undefined,
            }}
          />
        ) : (
          /* Placeholder when no src is provided */
          <div
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--bg-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-tertiary)',
              fontSize: '0.85rem',
            }}
          >
            Image placeholder
          </div>
        )}

        {overlay && (
          <div className="img-block__overlay">
            {overlay}
          </div>
        )}

        {credit && (
          <span
            className="source-credit"
            style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem' }}
          >
            Photo:{' '}
            {credit.href ? (
              <a href={credit.href} target="_blank" rel="noopener noreferrer">
                {credit.text}
              </a>
            ) : credit.text}
          </span>
        )}
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: '0.5rem',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-tertiary)',
            lineHeight: '1.5',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
