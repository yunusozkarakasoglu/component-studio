/**
 * DateField
 * Saf React bileşen (bağımlılıksız).
 * Tarih giriş alanı — "GG.AA.YYYY" formatında, geçerlilik kontrolü.
 *   <DateField defaultValue="2025-02-14" label="Date" />
 * Değerler içte "YYYY-MM-DD" string.
 * @id 262
 * @category Date
 * @subcategory DateField
 */
import { useState } from "react"
import { cn } from "@/lib/utils"
import { CalendarDays } from "@/components/ui/icons"

function parseInput(text: string): string | null {
  const m = text.trim().match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})$/)
  if (!m) return null
  const d = Number(m[1]), mo = Number(m[2]), y = Number(m[3])
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null
  const date = new Date(y, mo - 1, d)
  if (date.getFullYear() !== y || date.getMonth() !== mo - 1 || date.getDate() !== d) return null
  return `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`
}

function formatInput(iso: string): string {
  const [y, m, d] = iso.split("-")
  return `${d}.${m}.${y}`
}

function DateField({
  value,
  defaultValue,
  onChange,
  label,
  description,
  minValue,
  maxValue,
  isRequired,
  isDisabled,
  name,
  fullWidth,
  className,
}: {
  value?: string | null
  defaultValue?: string
  onChange?: (value: string | null) => void
  label?: string
  description?: string
  minValue?: string
  maxValue?: string
  isRequired?: boolean
  isDisabled?: boolean
  name?: string
  fullWidth?: boolean
  className?: string
}) {
  const [, setInternal] = useState<string | null>(defaultValue ?? null)
  const [text, setText] = useState<string>(defaultValue ? formatInput(defaultValue) : "")
  const controlled = value !== undefined

  const commit = (txt: string) => {
    setText(txt)
    const iso = parseInput(txt)
    if (iso && (!minValue || iso >= minValue) && (!maxValue || iso <= maxValue)) {
      if (!controlled) setInternal(iso)
      onChange?.(iso)
    } else if (!txt) {
      if (!controlled) setInternal(null)
      onChange?.(null)
    }
  }

  const valid = text === "" || !!parseInput(text)

  return (
    <div data-slot="date-field" className={cn("flex flex-col gap-1.5", fullWidth && "w-full", isDisabled && "opacity-60", className)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-2.5 transition-colors focus-within:border-black/50">
        <CalendarDays className="size-4 shrink-0 text-muted-foreground" />
        <input
          type="text"
          name={name}
          value={text}
          onChange={(e) => commit(e.target.value)}
          disabled={isDisabled}
          required={isRequired || undefined}
          placeholder="GG.AA.YYYY"
          inputMode="numeric"
          aria-invalid={!valid || undefined}
          className={cn("h-10 min-w-0 flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground/50", !valid && "text-red-600")}
        />
      </div>
      {!valid && <p className="text-xs text-red-600">Geçersiz tarih — GG.AA.YYYY</p>}
      {description && !(!valid && text) && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

export { DateField }
