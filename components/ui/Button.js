import Link from 'next/link'

/**
 * Button — Unified button / link component.
 *
 * Props:
 *   href     — renders as <Link> if provided, otherwise <button>
 *   variant  — 'primary' | 'secondary' | 'outline' | 'outline-dark' | 'ghost' | 'white'
 *   size     — 'sm' | 'md' | 'lg' | 'xl'
 *   pill     — boolean, applies pill radius
 *   full     — boolean, full width
 *   icon     — icon-only mode (square button)
 *   loading  — boolean, shows spinner
 *   disabled — boolean
 *   external — boolean, adds target="_blank" rel attributes
 *   className
 *   children
 */
export default function Button({
  href,
  variant   = 'primary',
  size      = 'md',
  pill      = false,
  full      = false,
  icon      = false,
  loading   = false,
  disabled  = false,
  external  = false,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    pill         ? 'btn--pill'     : '',
    full         ? 'btn--full'     : '',
    icon         ? 'btn--icon'     : '',
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <Link href={href} className={classes} {...externalProps} {...props}>
        {loading ? <Spinner /> : children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  )
}

function Spinner() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      className="spin" aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle
        cx="8" cy="8" r="6"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="28" strokeDashoffset="10"
        opacity="0.8"
      />
    </svg>
  )
}
