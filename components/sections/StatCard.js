/**
 * StatCard — Glass card for a single metric/statistic.
 * Used in stats rows, proof sections, and hero callouts.
 *
 * Props:
 *   value     — the number or metric string (e.g., '+312%', '4.8×', '40+')
 *   label     — primary label text
 *   detail    — optional secondary description
 *   icon      — optional emoji or JSX icon
 *   as        — HTML element
 *   className
 */
export default function StatCard({
  value,
  label,
  detail,
  icon,
  as: Tag   = 'div',
  className = '',
  ...props
}) {
  return (
    <Tag className={`stat-card ${className}`} {...props}>
      {icon && <div aria-hidden="true" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{icon}</div>}
      {value && <span className="stat-card__value">{value}</span>}
      {label && <p    className="stat-card__label">{label}</p>}
      {detail && <p   className="stat-card__detail">{detail}</p>}
    </Tag>
  )
}
