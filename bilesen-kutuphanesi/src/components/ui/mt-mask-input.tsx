/**
 * MtMaskInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Maskeli giriş — basit format fonksiyonu (örn. telefon).
 *   <MtMaskInput label="Phone" placeholder="+90 (555) 000 00 00" mask={phoneMask} />
 * @id 1120
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { useState, type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtMaskInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  mask?: (value: string) => string
}

function MtMaskInput({ className, label, description, error, value, defaultValue = "", onChange, mask, id, ...props }: MtMaskInputProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = value !== undefined ? value : internal

  const set = (v: string) => {
    const masked = mask ? mask(v) : v
    if (value === undefined) setInternal(masked)
    onChange?.(masked)
  }

  return (
    <div data-slot="mt-mask-input" className="flex w-full flex-col gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <input
        id={id}
        value={current}
        onChange={(e) => set(e.target.value)}
        className={cn(
          "w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground shadow-xs transition-colors outline-none",
          "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtMaskInput }
export type { MtMaskInputProps }
