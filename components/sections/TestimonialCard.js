/**
 * TestimonialCard — Glass card for a customer testimonial.
 *
 * Props:
 *   quote      — the testimonial text (without quotes — added via CSS/JSX)
 *   name       — reviewer name
 *   role       — reviewer title/company
 *   initials   — 2-char initials for the avatar (e.g., 'JM')
 *   stars      — number of stars (1–5), default 5
 *   avatarSrc  — optional image src for the avatar
 *   className
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  initials  = '??',
  stars     = 5,
  avatarSrc,
  className = '',
  ...props
}) {
  return (
    <article className={`testi-card ${className}`} {...props}>
      <div className="stars" aria-label={`${stars} out of 5 stars`}>
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </div>

      {quote && (
        <p className="testi-body">
          &ldquo;{quote}&rdquo;
        </p>
      )}

      <footer className="testi-author">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={name || 'Reviewer'}
            className="testi-avatar"
            width={44} height={44}
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="testi-avatar" aria-hidden="true">
            {initials}
          </div>
        )}
        <div>
          {name && <p className="testi-name">{name}</p>}
          {role && <p className="testi-role">{role}</p>}
        </div>
      </footer>
    </article>
  )
}
