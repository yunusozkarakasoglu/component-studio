/**
 * MtJsonInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * JSON girişi — formatlama + doğrulama.
 *   <MtJsonInput label="Config" placeholder="{...}" />
 * @id 1119
 * @category Form Elemanları
 * @subcategory MtJsonInput
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtJsonInputProps {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  formatOnBlur?: boolean
  validationError?: string
  autosize?: boolean
  minRows?: number
  className?: string
  disabled?: boolean
  loading?: boolean
  success?: ReactNode
}

function MtJsonInput({
  label,
  description,
  error,
  value,
  defaultValue = "",
  onChange,
  placeholder,
  formatOnBlur = true,
  validationError = "Invalid JSON",
  autosize,
  minRows = 4,
  className,
  disabled,
  loading,
  success,
}: MtJsonInputProps) {
  const [internal, setInternal] = useState(defaultValue)
  const [touched, setTouched] = useState(false)
  const current = value !== undefined ? value : internal

  const set = (v: string) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const isValid = (() => {
    if (current.trim() === "") return true
    try { JSON.parse(current); return true } catch { return false }
  })()

  const format = () => {
    try {
      set(JSON.stringify(JSON.parse(current), null, 2))
    } catch { /* geçersiz — olduğu gibi bırak */ }
  }

  const showError = error || (touched && !isValid ? validationError : undefined)

  return (
    <div data-slot="mt-json-input" className="flex w-full flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <textarea
        value={current}
        onChange={(e) => set(e.target.value)}
        onBlur={() => { setTouched(true); if (formatOnBlur) format() }}
        rows={autosize ? undefined : minRows}
        placeholder={placeholder}
        spellCheck={false}
        disabled={disabled || loading}
        className={cn(
          "w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-sm text-foreground shadow-xs transition-colors outline-none",
          "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
          showError && "border-red-500",
          success && !showError && "border-emerald-500",
          className
        )}
      />
      {loading && (
        <span className="absolute right-3 top-3">
          <span className="size-3.5 animate-spin rounded-full border-2 border-border border-t-blue-500" />
        </span>
      )}
      {showError && <p className="text-xs text-red-500">{showError}</p>}
      {success && !showError && <p className="text-xs text-emerald-600">{success}</p>}
    </div>
  )
}

export { MtJsonInput }
export type { MtJsonInputProps }
