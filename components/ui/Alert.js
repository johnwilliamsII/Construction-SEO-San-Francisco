/**
 * Alert — Inline notice/callout block.
 *
 * Props:
 *   variant  — 'success' | 'warning' | 'info' | 'error' | 'glass'
 *   title    — optional bold heading above the body
 *   icon     — JSX element or emoji; defaults to a variant-appropriate symbol
 *   className
 *   children — alert body content
 */
export default function Alert({
  variant   = 'info',
  title,
  icon,
  className = '',
  children,
  ...props
}) {
  const defaultIcons = {
    success: '✓',
    warning: '⚠',
    info:    'ℹ',
    error:   '✕',
    glass:   '💡',
  }

  const displayIcon = icon !== undefined ? icon : defaultIcons[variant]

  return (
    <div
      className={`alert alert--${variant} ${className}`}
      role={variant === 'error' || variant === 'warning' ? 'alert' : 'status'}
      {...props}
    >
      {displayIcon && (
        <span className="alert__icon" aria-hidden="true">
          {displayIcon}
        </span>
      )}
      <div>
        {title && <p className="alert__title">{title}</p>}
        <div className="alert__body">{children}</div>
      </div>
    </div>
  )
}
