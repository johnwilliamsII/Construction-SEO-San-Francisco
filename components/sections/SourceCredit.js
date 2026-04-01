/**
 * SourceCredit — Attribution block for third-party media assets.
 *
 * Two display modes:
 *   1. Inline — small pill shown beside/under an image
 *   2. Table  — full table row for the /sources page
 *
 * Props:
 *   source   — a source entry object from lib/sources.js
 *   mode     — 'inline' | 'table' — default 'inline'
 *   className
 */
export default function SourceCredit({ source, mode = 'inline', className = '' }) {
  if (!source) return null

  if (mode === 'inline') {
    return (
      <span className={`source-credit ${className}`}>
        Photo:{' '}
        {source.author && source.authorUrl ? (
          <a href={source.authorUrl} target="_blank" rel="noopener noreferrer">
            {source.author}
          </a>
        ) : source.author || 'Unknown'}
        {source.providerUrl && (
          <>
            {' '}on{' '}
            <a href={source.providerUrl} target="_blank" rel="noopener noreferrer">
              {source.provider}
            </a>
          </>
        )}
      </span>
    )
  }

  // Table row mode — used in the /sources page
  return (
    <tr className={className}>
      <td>
        {source.file ? (
          <code style={{ fontSize: '0.8rem', background: 'var(--bg-subtle)', padding: '2px 6px', borderRadius: '4px' }}>
            {source.file}
          </code>
        ) : '—'}
      </td>
      <td>{source.title}</td>
      <td>
        <a href={source.sourceUrl} target="_blank" rel="noopener noreferrer">
          {source.provider}
        </a>
      </td>
      <td>
        {source.author && source.authorUrl ? (
          <a href={source.authorUrl} target="_blank" rel="noopener noreferrer">
            {source.author}
          </a>
        ) : (source.author || '—')}
      </td>
      <td>
        {source.licenseUrl ? (
          <a href={source.licenseUrl} target="_blank" rel="noopener noreferrer">
            {source.license}
          </a>
        ) : source.license}
      </td>
      <td style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
        {source.notes}
      </td>
    </tr>
  )
}

/**
 * SourcesTable — Full sources page table.
 * Renders all source entries from lib/sources.js.
 */
export function SourcesTable({ sources = [] }) {
  if (!sources.length) {
    return (
      <p style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
        No third-party assets registered yet.
      </p>
    )
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="source-table">
        <thead>
          <tr>
            <th>File</th>
            <th>Asset</th>
            <th>Provider</th>
            <th>Author</th>
            <th>License</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => (
            <SourceCredit key={source.id} source={source} mode="table" />
          ))}
        </tbody>
      </table>
    </div>
  )
}
