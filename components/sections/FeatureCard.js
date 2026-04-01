/**
 * FeatureCard — Glass card with icon, title, and body text.
 * Used in feature grids, benefits sections, and service highlights.
 *
 * Props:
 *   icon      — emoji or JSX icon element
 *   title     — card heading string
 *   body      — body text string or JSX
 *   badge     — optional badge/pill above the title
 *   cta       — { label, href } for an optional inline link
 *   as        — HTML element for the wrapper ('div' | 'article')
 *   className
 */
import Link from 'next/link'

export default function FeatureCard({
  icon,
  title,
  body,
  badge,
  cta,
  as: Tag   = 'div',
  className = '',
  ...props
}) {
  return (
    <Tag className={`feature-card ${className}`} {...props}>
      {icon && (
        <div className="feature-card__icon" aria-hidden="true">
          {icon}
        </div>
      )}

      {badge && (
        <span className="badge badge--accent" style={{ marginBottom: '0.75rem' }}>
          {badge}
        </span>
      )}

      {title && <h3 className="feature-card__title">{title}</h3>}
      {body  && <p  className="feature-card__body">{body}</p>}

      {cta && (
        <Link href={cta.href} className="service-card-cta" style={{ marginTop: '1.25rem' }}>
          {cta.label}
        </Link>
      )}
    </Tag>
  )
}
