/**
 * MtMonthPicker
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Ay seçici — yıl navigasyonu, 12 ay grid.
 *   <MtMonthPicker value={date} onChange={setDate} />
 * @id 1590
 * @category Takvim
 * @subcategory MtMonthPicker
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

const MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

interface MtMonthPickerProps {
  label?: ReactNode
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  locale?: string
  className?: string
}

function MtMonthPicker({ label, value, defaultValue = null, onChange, minDate, maxDate, locale = "tr", className }: MtMonthPickerProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue)
  const [year, setYear] = useState(() => (value ?? internal ?? new Date()).getFullYear())
  const selected = value !== undefined ? value : internal

  const monthNames = locale === "en" ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : MONTHS

  const select = (m: number) => {
    const d = new Date(year, m, 1)
    if (value === undefined) setInternal(d)
    onChange?.(d)
  }

  const isDisabled = (m: number) => {
    const d = new Date(year, m, 1)
    return (minDate && d < new Date(minDate.getFullYear(), minDate.getMonth(), 1)) || (maxDate && d > maxDate)
  }

  return (
    <div data-slot="mt-month-picker" className={cn("w-fit select-none rounded-xl border border-border bg-background p-3", className)}>
      {label && <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>}
      <div className="mb-2 flex items-center justify-between">
        <button type="button" aria-label="Önceki yıl" onClick={() => setYear((y) => y - 1)}
          className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
          <ChevronLeft className="size-4" />
        </button>
        <span className="text-sm font-semibold text-foreground">{year}</span>
        <button type="button" aria-label="Sonraki yıl" onClick={() => setYear((y) => y + 1)}
          className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {monthNames.map((m, i) => {
          const active = selected && selected.getFullYear() === year && selected.getMonth() === i
          const dis = isDisabled(i)
          return (
            <button
              key={m}
              type="button"
              disabled={dis}
              onClick={() => select(i)}
              className={cn(
                "cursor-pointer rounded-lg px-2 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                active ? "bg-blue-600 font-semibold text-white" : dis ? "cursor-not-allowed text-muted-foreground/40" : "text-foreground hover:bg-muted"
              )}
            >
              {m}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { MtMonthPicker }
export type { MtMonthPickerProps }
