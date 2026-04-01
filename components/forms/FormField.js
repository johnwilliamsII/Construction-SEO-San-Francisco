/**
 * FormField — Accessible labeled input, textarea, or select wrapper.
 *
 * Props:
 *   id        — links label to field (auto-generated if omitted)
 *   label     — visible label text
 *   type      — HTML input type OR 'textarea' | 'select'
 *   required  — boolean
 *   error     — error message string
 *   hint      — helper text below the field
 *   options   — array of { value, label } for type='select'
 *   className — applied to the outer .form-group wrapper
 *   All other props are forwarded to the input/textarea/select element.
 */
let _idCounter = 0

export default function FormField({
  id,
  label,
  type     = 'text',
  required = false,
  error,
  hint,
  options  = [],
  className = '',
  ...props
}) {
  const fieldId = id || `field-${type}-${++_idCounter}`
  const errorId = error ? `${fieldId}-error` : undefined
  const hintId  = hint  ? `${fieldId}-hint`  : undefined

  const ariaProps = {
    'aria-required':     required || undefined,
    'aria-describedby':  [hintId, errorId].filter(Boolean).join(' ') || undefined,
    'aria-invalid':      error ? 'true' : undefined,
  }

  const inputClass = [
    type === 'textarea' ? 'form-textarea' : type === 'select' ? 'form-select' : 'form-input',
    error ? (type === 'textarea' ? 'form-textarea--error' : 'form-input--error') : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label
          htmlFor={fieldId}
          className={`form-label${required ? ' form-label--required' : ''}`}
        >
          {label}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          id={fieldId}
          className={inputClass}
          required={required || undefined}
          {...ariaProps}
          {...props}
        />
      ) : type === 'select' ? (
        <select
          id={fieldId}
          className={inputClass}
          required={required || undefined}
          {...ariaProps}
          {...props}
        >
          {options.map(({ value, label: optLabel }) => (
            <option key={value} value={value}>{optLabel}</option>
          ))}
        </select>
      ) : (
        <input
          id={fieldId}
          type={type}
          className={inputClass}
          required={required || undefined}
          {...ariaProps}
          {...props}
        />
      )}

      {hint  && <p id={hintId}  className="form-hint">{hint}</p>}
      {error && <p id={errorId} className="form-error" role="alert">{error}</p>}
    </div>
  )
}
