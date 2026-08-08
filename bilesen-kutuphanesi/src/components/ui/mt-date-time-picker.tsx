/**
 * MtDateTimePicker
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Tarih + saat seçici — takvim popover + saat girdisi.
 *   <MtDateTimePicker value={date} onChange={setDate} />
 * @id 1598
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon, X } from "@/components/ui/icons"
import { MtCalendar } from "@/components/ui/mt-calendar"

interface MtDateTimePickerProps {
  label?: ReactNode
  placeholder?: string
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  clearable?: boolean
  disabled?: boolean
  error?: ReactNode
  minDate?: Date
  maxDate?: Date
  className?: string
}

function MtDateTimePicker({ label, placeholder = "Tarih ve saat seçin", value, defaultValue = null, onChange, clearable, disabled, error, minDate, maxDate, className }: MtDateTimePickerProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue)
  const [opened, setOpened] = useState(false)
  const [time, setTime] = useState("12:00")
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
    let next = d
    if (d) {
      const [hh, mm] = time.split(":").map(Number)
      next = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm)
    }
    if (value === undefined) setInternal(next)
    onChange?.(next)
    setOpened(false)
  }

  const label_ = selected
    ? new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(selected)
    : ""

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
            "w-52 cursor-pointer rounded-lg border border-border bg-background pr-8 pl-3 text-sm text-foreground outline-none transition-colors",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            error && "border-red-500",
            disabled && "cursor-not-allowed opacity-50",
            "h-9"
          )}
        />
        <button type="button" tabIndex={-1} onClick={() => setOpened((o) => !o)} aria-label="Takvim"
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground">
          {clearable && selected ? (
            <X className="size-4" onClick={() => select(null)} />
          ) : (
            <CalendarIcon className="size-4" />
          )}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {opened && (
        <div className="absolute left-0 top-full z-20 mt-1">
          <div className="rounded-xl border border-border bg-background p-3">
            <MtCalendar value={selected} onChange={select} minDate={minDate} maxDate={maxDate} />
            <div className="mt-2 flex items-center gap-2 border-t border-border pt-2">
              <label className="text-xs text-muted-foreground">Saat</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-8 cursor-pointer rounded-md border border-border bg-background px-2 text-xs text-foreground outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { MtDateTimePicker }
export type { MtDateTimePickerProps }
