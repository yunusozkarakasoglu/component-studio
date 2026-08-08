/**
 * MtMiniCalendar
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Küçük takvim — dar alanlar için kompakt ay görünümü.
 *   <MtMiniCalendar value={date} onChange={setDate} />
 * @id 1589
 * @category Takvim
 * @subcategory MtMiniCalendar
 * @source mantine
 */
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}
function addMonths(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1)
}

interface MtMiniCalendarProps {
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  excludeDate?: (date: Date) => boolean
  firstDayOfWeek?: number
  locale?: string
  size?: "xs" | "sm" | "md"
  className?: string
}

function MtMiniCalendar({ value, defaultValue = null, onChange, minDate, maxDate, excludeDate, firstDayOfWeek = 1, locale = "tr", size = "sm", className }: MtMiniCalendarProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue)
  const [view, setView] = useState(() => startOfMonth(value ?? internal ?? new Date()))
  const selected = value !== undefined ? value : internal

  const select = (d: Date) => {
    if (value === undefined) setInternal(d)
    onChange?.(d)
  }

  const monthStart = startOfMonth(view)
  const firstDay = (monthStart.getDay() - firstDayOfWeek + 7) % 7
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate()
  const cells: (Date | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1)),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(view)
  const isSameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  const isDisabled = (d: Date) => (minDate && d < minDate) || (maxDate && d > maxDate) || (excludeDate?.(d) ?? false)

  const cellSize = size === "xs" ? "size-6 text-[10px]" : size === "md" ? "size-8 text-xs" : "size-7 text-[11px]"

  return (
    <div data-slot="mt-mini-calendar" className={cn("w-fit select-none rounded-lg border border-border bg-background p-2", className)}>
      <div className="mb-1 flex items-center justify-between">
        <button type="button" aria-label="Önceki" onClick={() => setView((v) => addMonths(v, -1))}
          className="flex size-6 cursor-pointer items-center justify-center rounded text-muted-foreground hover:bg-muted">
          <ChevronLeft className="size-3.5" />
        </button>
        <span className="text-xs font-semibold capitalize text-foreground">{monthLabel}</span>
        <button type="button" aria-label="Sonraki" onClick={() => setView((v) => addMonths(v, 1))}
          className="flex size-6 cursor-pointer items-center justify-center rounded text-muted-foreground hover:bg-muted">
          <ChevronRight className="size-3.5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {["pt", "sa", "ça", "pe", "cu", "ct", "pa"].slice(firstDayOfWeek).concat(["pt", "sa", "ça", "pe", "cu", "ct", "pa"].slice(0, firstDayOfWeek)).map((w, i) => (
          <div key={i} className={cn("flex items-center justify-center text-[9px] font-medium uppercase text-muted-foreground", cellSize)}>{w}</div>
        ))}
        {cells.map((d, i) => {
          if (!d) return <div key={i} className={cellSize} />
          const active = selected ? isSameDay(d, selected) : false
          const dis = isDisabled(d)
          return (
            <button
              key={i}
              type="button"
              disabled={dis}
              onClick={() => select(d)}
              className={cn(
                "flex cursor-pointer items-center justify-center rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                cellSize,
                active && "bg-blue-600 font-semibold text-white",
                !active && !dis && "text-foreground hover:bg-muted",
                dis && "cursor-not-allowed text-muted-foreground/40"
              )}
            >
              {d.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { MtMiniCalendar }
export type { MtMiniCalendarProps }
