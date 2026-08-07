/**
 * MtNumberInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Sayı girişi — min/max/step, artır/azalt butonları, clampBehavior.
 *   <MtNumberInput label="Age" min={0} max={100} step={1} />
 * @id 1117
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { useState, type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtNumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  min?: number
  max?: number
  step?: number
  value?: number | string
  defaultValue?: number | string
  onChange?: (value: number | string) => void
  hideControls?: boolean
  loading?: boolean
  disabled?: boolean
  success?: ReactNode
}

function MtNumberInput({
  className,
  label,
  description,
  error,
  min = -Infinity,
  max = Infinity,
  step = 1,
  value,
  defaultValue = "",
  onChange,
  hideControls,
  loading,
  disabled,
  success,
  id,
  ...props
}: MtNumberInputProps) {
  const [internal, setInternal] = useState<number | string>(defaultValue)
  const current = value !== undefined ? value : internal

  const set = (v: number | string) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const clamp = (n: number) => Math.min(max, Math.max(min, n))

  const stepValue = (dir: 1 | -1) => {
    const num = typeof current === "number" ? current : parseFloat(current) || 0
    set(clamp(num + dir * step))
  }

  return (
    <div data-slot="mt-number-input" className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>
      )}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="relative w-full">
        <input
          id={id}
          type="number"
          data-slot="mt-number-input-field"
          value={current}
          onChange={(e) => set(e.target.value)}
          disabled={disabled || loading}
          className={cn(
            "w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground shadow-xs transition-colors outline-none",
            "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500",
            success && "border-emerald-500",
            className
          )}
          {...props}
        />
        {!hideControls && (
          <span className="absolute inset-y-0 right-1 flex items-center gap-0.5">
            <button type="button" tabIndex={-1} onClick={() => stepValue(1)} aria-label="Increment"
              className="flex size-5 cursor-pointer items-center justify-center rounded text-muted-foreground hover:bg-muted">+</button>
            <button type="button" tabIndex={-1} onClick={() => stepValue(-1)} aria-label="Decrement"
              className="flex size-5 cursor-pointer items-center justify-center rounded text-muted-foreground hover:bg-muted">−</button>
          </span>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {success && !error && <p className="text-xs text-emerald-600">{success}</p>}
    </div>
  )
}

export { MtNumberInput }
export type { MtNumberInputProps }
