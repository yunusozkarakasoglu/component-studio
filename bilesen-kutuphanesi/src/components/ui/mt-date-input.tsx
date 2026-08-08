/**
 * MtDateInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Tarih girdisi — input + takvim popover, clearable, valueFormat.
 *   <MtDateInput value={date} onChange={setDate} label="Tarih" />
 * @id 1595
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon, X } from "@/components/ui/icons"
import { MtCalendar } from "@/components/ui/mt-calendar"

interface MtDateInputProps {
  label?: ReactNode
  placeholder?: string
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  clearable?: boolean
  valueFormat?: string
  minDate?: Date
  maxDate?: Date
  excludeDate?: (date: Date) => boolean
  disabled?: boolean
  error?: ReactNode
  description?: ReactNode
  size?: "xs" | "sm" | "md" | "lg"
  className?: string
}

const sizes: Record<string, string> = { xs: "h-7 text-xs", sm: "h-8 text-sm", md: "h-9 text-sm", lg: "h-11 text-base" }

function formatDate(d: Date | null, locale: string, valueFormat?: string) {
  if (!d) return ""
  const day = String(d.getDate()).padStart(2, "0")
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const year = d.getFullYear()
  if (valueFormat === "DD/MM/YYYY") return `${day}/${month}/${year}`
  if (valueFormat === "YYYY-MM-DD") return `${year}-${month}-${day}`
  if (valueFormat === "MM/DD/YYYY") return `${month}/${day}/${year}`
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit", year: "numeric" }).format(d)
}

function MtDateInput({ label, placeholder = "Tarih seçin", value, defaultValue = null, onChange, clearable, valueFormat, minDate, maxDate, excludeDate, disabled, error, description, size = "md", className }: MtDateInputProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue)
  const [opened, setOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = value !== undefined ? value : internal

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpened(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const select = (d: Date | null) => {
    if (value === undefined) setInternal(d)
    onChange?.(d)
    setOpened(false)
  }

  return (
    <div ref={ref} className={cn("relative w-fit", className)}>
      {label && <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>}
      <div className="relative">
        <input
          readOnly
          value={formatDate(selected, "tr-TR", valueFormat)}
          placeholder={placeholder}
          disabled={disabled}
          onClick={() => setOpened((o) => !o)}
          className={cn(
            "w-40 cursor-pointer rounded-lg border border-border bg-background pr-8 pl-3 text-foreground outline-none transition-colors",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            error && "border-red-500",
            disabled && "cursor-not-allowed opacity-50",
            sizes[size]
          )}
        />
        <button type="button" tabIndex={-1} onClick={() => setOpened((o) => !o)} aria-label="Takvim"
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground">
          {clearable && selected ? <X className="size-4" onClick={() => select(null)} /> : <CalendarIcon className="size-4" />}
        </button>
      </div>
      {description && !error && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {opened && (
        <div className="absolute left-0 top-full z-20 mt-1">
          <MtCalendar value={selected} onChange={select} minDate={minDate} maxDate={maxDate} excludeDate={excludeDate} />
        </div>
      )}
    </div>
  )
}

export { MtDateInput }
export type { MtDateInputProps }
