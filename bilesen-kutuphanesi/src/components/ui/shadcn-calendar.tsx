/**
 * ShadcnCalendar
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Takvim — tek (single) veya aralık (range) seçim; ay/yıl seçici.
 * Not: kaynak react-day-picker kullanır — üçüncü parti olduğundan
 * kendi saf React çekirdeği yazıldı (API uyumlu).
 *   <ShadcnCalendar mode="single" selected={date} onSelect={setDate} />
 * mode: single | range · numberOfMonths: 1 | 2 · captionLayout: default | dropdown.
 * @id 884
 * @category Takvim
 * @subcategory ShadcnCalendar
 * @source shadcn
 */
import { useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

export interface ShadcnDateRange {
  from: Date
  to?: Date
}

interface ShadcnCalendarProps extends HTMLAttributes<HTMLDivElement> {
  mode?: "single" | "range"
  selected?: Date | ShadcnDateRange
  onSelect?: (value: Date | ShadcnDateRange | undefined) => void
  defaultMonth?: Date
  numberOfMonths?: number
  captionLayout?: "default" | "dropdown"
  isDisabled?: (date: Date) => boolean
}

const DAY_LABELS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function buildMonthGrid(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1)
  // Pzt başlangıçlı: JS getDay() Pazar=0 → Pzt=1 dizinine çevir
  let startOffset = (first.getDay() + 6) % 7
  const cells: (Date | null)[] = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

function CalendarMonth({
  year,
  month,
  mode,
  selected,
  onSelect,
  isDisabled,
}: {
  year: number
  month: number
  mode: "single" | "range"
  selected?: Date | ShadcnDateRange
  onSelect?: (value: Date | ShadcnDateRange | undefined) => void
  isDisabled?: (date: Date) => boolean
}) {
  const cells = buildMonthGrid(year, month)
  const isInRange = (d: Date): boolean => {
    if (mode !== "range" || !selected || !("from" in selected)) return false
    const { from, to } = selected
    if (!to) return sameDay(d, from)
    return d >= from && d <= to
  }
  const isStart = (d: Date): boolean => mode === "range" && !!selected && "from" in selected && sameDay(d, selected.from)
  const isEnd = (d: Date): boolean => mode === "range" && !!selected && "to" in selected && !!selected.to && sameDay(d, selected.to as Date)

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {DAY_LABELS.map((l) => (
          <div key={l} className="py-1 text-xs font-medium text-muted-foreground">{l}</div>
        ))}
        {cells.map((d, i) => {
          if (!d) return <div key={`e-${i}`} />
          const disabled = isDisabled?.(d) ?? false
          const singleSel = mode === "single" && !!selected && selected instanceof Date && sameDay(d, selected)
          const rangeSel = isInRange(d)
          return (
            <button
              key={d.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => {
                if (mode === "single") {
                  onSelect?.(singleSel ? undefined : d)
                } else {
                  const cur = selected && "from" in selected ? selected : undefined
                  if (!cur || (cur.from && cur.to)) {
                    onSelect?.({ from: d } as ShadcnDateRange)
                  } else if (d < cur.from) {
                    onSelect?.({ from: d, to: cur.from } as ShadcnDateRange)
                  } else {
                    onSelect?.({ from: cur.from, to: d } as ShadcnDateRange)
                  }
                }
              }}
              className={cn(
                "flex size-8 cursor-pointer items-center justify-center rounded-md text-sm text-foreground transition-colors outline-none select-none",
                "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40",
                "disabled:cursor-not-allowed disabled:opacity-40",
                (singleSel || rangeSel) && "bg-blue-600 text-white hover:bg-blue-700",
                isStart(d) && "rounded-l-md bg-blue-600 text-white",
                isEnd(d) && "rounded-r-md bg-blue-600 text-white",
                mode === "range" && rangeSel && !isStart(d) && !isEnd(d) && "bg-blue-600/15 text-foreground hover:bg-blue-600/20"
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

function ShadcnCalendar({
  className,
  mode = "single",
  selected,
  onSelect,
  defaultMonth,
  numberOfMonths = 1,
  captionLayout = "default",
  isDisabled,
  ...props
}: ShadcnCalendarProps) {
  const now = defaultMonth ?? new Date()
  const [month, setMonth] = useState({ year: now.getFullYear(), month: now.getMonth() })
  const [dropdownYear, setDropdownYear] = useState(now.getFullYear())
  const [dropdownMonth, setDropdownMonth] = useState(now.getMonth())

  const prev = () => setMonth((m) => (m.month === 0 ? { year: m.year - 1, month: 11 } : { year: m.year, month: m.month - 1 }))
  const next = () => setMonth((m) => (m.month === 11 ? { year: m.year + 1, month: 0 } : { year: m.year, month: m.month + 1 }))

  const monthsToRender = numberOfMonths === 2 ? [month, { year: month.month === 11 ? month.year + 1 : month.year, month: (month.month + 1) % 12 }] : [month]

  const applyDropdown = () => {
    setMonth({ year: dropdownYear, month: dropdownMonth })
  }

  return (
    <div data-slot="shadcn-calendar" className={cn("inline-flex w-auto flex-col gap-3 p-3", className)} {...props}>
      {monthsToRender.map((m, idx) => (
        <div key={`${m.year}-${m.month}`} className="flex flex-col gap-2">
          {captionLayout === "dropdown" && idx === 0 ? (
            <div className="flex items-center justify-between">
              <select value={dropdownMonth} onChange={(e) => setDropdownMonth(Number(e.target.value))} className="h-8 rounded-md border border-border bg-background px-2 text-sm">
                {MONTH_NAMES.map((name, mi) => (
                  <option key={name} value={mi}>{name}</option>
                ))}
              </select>
              <select value={dropdownYear} onChange={(e) => setDropdownYear(Number(e.target.value))} className="h-8 rounded-md border border-border bg-background px-2 text-sm">
                {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - 7 + i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <button type="button" onClick={applyDropdown} className="rounded-md border border-border px-2 py-1 text-xs hover:bg-muted">Go</button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              {idx === 0 ? (
                <>
                  <button type="button" aria-label="Previous month" onClick={prev} className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                    <ChevronLeft className="size-4" />
                  </button>
                  <div className="text-sm font-medium">{MONTH_NAMES[m.month]} {m.year}</div>
                  {numberOfMonths === 1 && (
                    <button type="button" aria-label="Next month" onClick={next} className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                      <ChevronRight className="size-4" />
                    </button>
                  )}
                  {numberOfMonths === 2 && <div className="w-7" />}
                </>
              ) : (
                <>
                  <div className="w-7" />
                  <div className="text-sm font-medium">{MONTH_NAMES[m.month]} {m.year}</div>
                  <button type="button" aria-label="Next month" onClick={next} className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                    <ChevronRight className="size-4" />
                  </button>
                </>
              )}
            </div>
          )}
          <CalendarMonth year={m.year} month={m.month} mode={mode} selected={selected} onSelect={onSelect} isDisabled={isDisabled} />
        </div>
      ))}
    </div>
  )
}

export { ShadcnCalendar }
export type { ShadcnCalendarProps }
