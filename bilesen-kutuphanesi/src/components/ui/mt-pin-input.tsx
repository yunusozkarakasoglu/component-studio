/**
 * MtPinInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * PIN/OTP girişi — length, regexp, success, disabled.
 *   <MtPinInput length={4} />
 * @id 1259
 * @category Seçim
 * @subcategory MtPinInput
 * @source mantine
 */
import { useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtPinInputProps {
  length?: number
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  regexp?: RegExp
  success?: boolean
  disabled?: boolean
  size?: "xs" | "sm" | "md" | "lg"
  placeholder?: string
  className?: string
  label?: ReactNode
  error?: ReactNode
}

function MtPinInput({
  length = 4,
  value,
  defaultValue = "",
  onChange,
  onComplete,
  regexp,
  success,
  disabled,
  size = "md",
  placeholder = "○",
  className,
  label,
  error,
}: MtPinInputProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = value !== undefined ? value : internal
  const refs = useRef<(HTMLInputElement | null)[]>([])

  const set = (v: string) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
    if (v.length === length) onComplete?.(v)
  }

  const handleChange = (idx: number, char: string) => {
    if (!regexp || regexp.test(char)) {
      const next = current.slice(0, idx) + char + current.slice(idx + 1)
      set(next)
      if (char && idx < length - 1) refs.current[idx + 1]?.focus()
    }
  }

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !current[idx] && idx > 0) {
      refs.current[idx - 1]?.focus()
    }
  }

  const sizeClass = size === "xs" ? "size-7 text-sm" : size === "sm" ? "size-8 text-sm" : size === "lg" ? "size-12 text-lg" : "size-10 text-base"

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <div className="flex gap-2">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => { refs.current[i] = el }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={current[i] ?? ""}
            disabled={disabled}
            onChange={(e) => handleChange(i, e.target.value.slice(-1))}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            placeholder={placeholder}
            aria-label={`Digit ${i + 1}`}
            data-slot="mt-pin-input"
            className={cn(
              "rounded-md border border-border bg-background text-center text-foreground shadow-xs transition-colors outline-none",
              "focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
              "disabled:cursor-not-allowed disabled:opacity-50",
              success && "border-emerald-500",
              sizeClass
            )}
          />
        ))}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtPinInput }
export type { MtPinInputProps }
