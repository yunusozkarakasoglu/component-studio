/**
 * MtDatePickerInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Tarih seçici girdisi — input + takvim popover, valueFormat, size, weekendDays.
 *   <MtDatePickerInput value={date} onChange={setDate} valueFormat="DD/MM/YYYY" />
 * @id 1597
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon, X } from "@/components/ui/icons"
import { MtCalendar } from "@/components/ui/mt-calendar"

interface MtDatePickerInputProps {
  label?: ReactNode
  placeholder?: string
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  valueFormat?: string
  clearable?: boolean
  size?: "xs" | "sm" | "md" | "lg"
  radius?: "sm" | "md" | "lg"
  weekendDays?: number[]
  firstDayOfWeek?: number
  minDate?: Date
  maxDate?: Date
  excludeDate?: (date: Date) => boolean
  disabled?: boolean
  error?: ReactNode
  renderDay?: (date: Date) => ReactNode
  className?: string
}

const sizes: Record<string, string> = { xs: "h-7 text-xs", sm: "h-8 text-sm", md: "h-9 text-sm", lg: "h-11 text-base" }
const radii: Record<string, string> = { sm: "rounded-md", md: "rounded-lg", lg: "rounded-xl" }

function MtDatePickerInput({ label, placeholder = "Tarih seçin", value, defaultValue = null, onChange, clearable, size = "md", radius = "md", weekendDays, firstDayOfWeek, minDate, maxDate, excludeDate, disabled, error, renderDay, className }: MtDatePickerInputProps) {
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

  const label_ = selected ? new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" }).format(selected) : ""

  return (
    <div ref={ref} className={cn("relative w-fit", className)}>
      {label && <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>}
      <div className="relative">
        <input
          readOnly
          value={label_}
          placeholder={placeholder}
          disabled={disabled}
          onClick={() => setOpened((o) => !o)}
          className={cn(
            "w-44 cursor-pointer rounded-lg border border-border bg-background pr-8 pl-3 text-foreground outline-none transition-colors",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            radii[radius],
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
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {opened && (
        <div className="absolute left-0 top-full z-20 mt-1">
          <MtCalendar value={selected} onChange={select} weekendDays={weekendDays} firstDayOfWeek={firstDayOfWeek} minDate={minDate} maxDate={maxDate} excludeDate={excludeDate} renderDay={renderDay} />
        </div>
      )}
    </div>
  )
}

export { MtDatePickerInput }
export type { MtDatePickerInputProps }
