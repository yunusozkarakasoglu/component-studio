/**
 * MtCalendar
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Takvim — ay görünümü, gün seçimi, min/maxDate, excludeDate, weekendDays, locale.
 *   <MtCalendar value={date} onChange={setDate} firstDayOfWeek={1} />
 * @id 1588
 * @category Takvim
 * @subcategory MtCalendar
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

const weekDays = (locale: string, firstDay: number) => {
  const base = locale === "en" ? ["su", "mo", "tu", "we", "th", "fr", "sa"] : ["pa", "pt", "sa", "ça", "pe", "cu", "ct"]
  return [...base.slice(firstDay), ...base.slice(0, firstDay)]
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}
function addMonths(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1)
}

interface MtCalendarProps {
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  excludeDate?: (date: Date) => boolean
  firstDayOfWeek?: number
  weekendDays?: number[]
  locale?: string
  size?: "xs" | "sm" | "md" | "lg"
  renderDay?: (date: Date) => ReactNode
  className?: string
}

function MtCalendar({
  value,
  defaultValue = null,
  onChange,
  minDate,
  maxDate,
  excludeDate,
  firstDayOfWeek = 1,
  weekendDays = [0, 6],
  locale = "tr",
  size = "md",
  renderDay,
  className,
}: MtCalendarProps) {
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
  const today = new Date()

  const isSameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  const isDisabled = (d: Date) =>
    (minDate && d < startOfMonth(minDate)) || (maxDate && d > maxDate) || (excludeDate?.(d) ?? false)
  const isWeekend = (d: Date) => weekendDays.includes(d.getDay())

  const cellSize = size === "xs" ? "size-7 text-xs" : size === "sm" ? "size-8 text-xs" : size === "lg" ? "size-11 text-base" : "size-9 text-sm"

  return (
    <div data-slot="mt-calendar" className={cn("w-fit select-none rounded-xl border border-border bg-background p-3", className)}>
      <div className="mb-2 flex items-center justify-between">
        <button type="button" aria-label="Önceki ay" onClick={() => setView((v) => addMonths(v, -1))}
          className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
          <ChevronLeft className="size-4" />
        </button>
        <span className="text-sm font-semibold capitalize text-foreground">{monthLabel}</span>
        <button type="button" aria-label="Sonraki ay" onClick={() => setView((v) => addMonths(v, 1))}
          className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {weekDays(locale, firstDayOfWeek).map((w, i) => (
          <div key={i} className={cn("flex items-center justify-center text-[11px] font-medium uppercase text-muted-foreground", cellSize)}>{w}</div>
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
                "flex cursor-pointer items-center justify-center rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                cellSize,
                active && "bg-blue-600 font-semibold text-white hover:bg-blue-700",
                !active && isWeekend(d) && !dis && "text-blue-400",
                !active && !isWeekend(d) && !dis && "text-foreground hover:bg-muted",
                isSameDay(d, today) && !active && "border border-blue-400",
                dis && "cursor-not-allowed text-muted-foreground/40"
              )}
            >
              {renderDay ? renderDay(d) : d.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { MtCalendar }
export type { MtCalendarProps }
