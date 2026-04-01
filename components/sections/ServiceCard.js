import Link from 'next/link'

/**
 * ServiceCard — Glass card for service offerings.
 * Displays icon, title, description, feature checklist, and a CTA link.
 *
 * Props:
 *   icon        — emoji or JSX
 *   title       — service name
 *   description — short summary paragraph
 *   features    — array of strings for the checklist
 *   href        — link for the "Learn more" CTA
 *   ctaLabel    — CTA link text (default: 'Learn more')
 *   as          — HTML element ('article' | 'div')
 *   className
 */
export default function ServiceCard({
  icon,
  title,
  description,
  features    = [],
  href,
  ctaLabel    = 'Learn more',
  as: Tag     = 'article',
  className   = '',
  ...props
}) {
  return (
    <Tag className={`service-card ${className}`} {...props}>
      {icon && <div className="service-icon" aria-hidden="true">{icon}</div>}

      {title       && <h3>{title}</h3>}
      {description && <p>{description}</p>}

      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
      )}

      {href && (
        <Link href={href} className="service-card-cta">
          {ctaLabel}
        </Link>
      )}
    </Tag>
  )
}
