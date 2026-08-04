/**
 * Calendar
 * Saf React bileşen (bağımlılıksız).
 * @internationalized/date YOK — kendi tarih mantığı (Date tabanlı), tarihler "YYYY-MM-DD".
 *   <Calendar value={date} onChange={setDate} minValue={today} isDateUnavailable={fn} />
 * Özellikler: selectionMode (single/multiple) · value/defaultValue/onChange ·
 * focusedValue/onFocusChange · minValue/maxValue · isDateUnavailable ·
 * weeksInMonth · isDisabled/isReadOnly · firstDayOfWeek.
 * @id 172
 * @category Takvim
 */
import { useMemo, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

/* ---------- Tarih yardımcıları (saf) ---------- */

const pad = (n: number) => String(n).padStart(2, "0")
const toKey = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`
const todayKey = () => {
  const t = new Date()
  return toKey(t.getFullYear(), t.getMonth(), t.getDate())
}
const parseKey = (key: string) => {
  const [y, m, d] = key.split("-").map(Number)
  return { y, m: m - 1, d }
}
const monthKey = (y: number, m: number) => `${y}-${pad(m + 1)}`

interface Cell {
  key: string
  day: number
  outside: boolean
}

function buildCells(y: number, m: number, firstDay: "mon" | "sun", fixedWeeks?: number): Cell[] {
  const first = new Date(y, m, 1)
  let offset = (first.getDay() + 6) % 7 // Pzt = 0
  if (firstDay === "sun") offset = first.getDay()
  const daysInMonth = new Date(y, m + 1, 0).getDate()
  const prevDays = new Date(y, m, 0).getDate()
  const cells: Cell[] = []
  for (let i = 0; i < offset; i++) {
    const d = prevDays - offset + i + 1
    cells.push({ key: toKey(y, m - 1, d), day: d, outside: true })
  }
  for (let d = 1; d <= daysInMonth; d++) cells.push({ key: toKey(y, m, d), day: d, outside: false })
  const total = fixedWeeks ? fixedWeeks * 7 : Math.ceil(cells.length / 7) * 7
  let next = 1
  while (cells.length < total) {
    cells.push({ key: toKey(y, m + 1, next), day: next, outside: true })
    next++
  }
  return cells
}

/* ---------- Calendar ---------- */

interface CalendarProps {
  /** Seçili tarih(ler) — "YYYY-MM-DD" (kontrollü) */
  value?: string | string[] | null
  /** İlk seçim (bağımsız) */
  defaultValue?: string | string[]
  onChange?: (value: string | string[] | null) => void
  selectionMode?: "single" | "multiple"
  /** Görüntülenen ayı kontrol eder — "YYYY-MM" */
  focusedValue?: string
  onFocusChange?: (value: string) => void
  minValue?: string
  maxValue?: string
  /** Tarih uygun değilse true döner (örn. hafta sonu) */
  isDateUnavailable?: (date: string) => boolean
  /** Sabit hafta sayısı (6 gibi) — grid yüksekliği sabit kalır */
  weeksInMonth?: number
  isDisabled?: boolean
  isReadOnly?: boolean
  firstDayOfWeek?: "mon" | "sun"
  /** Özel önceki/sonraki navigasyon ikonları */
  navIconPrev?: ReactNode
  navIconNext?: ReactNode
  /** Bu tarihlerde ("YYYY-MM-DD") hücre altında nokta gösterilir */
  indicatorDates?: string[]
  className?: string
  children?: ReactNode
}

const WEEKDAYS = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]

function Calendar({
  value,
  defaultValue,
  onChange,
  selectionMode = "single",
  focusedValue,
  onFocusChange,
  minValue,
  maxValue,
  isDateUnavailable,
  weeksInMonth,
  isDisabled,
  isReadOnly,
  firstDayOfWeek = "mon",
  navIconPrev,
  navIconNext,
  indicatorDates = [],
  className,
}: CalendarProps) {
  const [internalValue, setInternalValue] = useState<string | string[] | null>(defaultValue ?? null)
  const now = todayKey()
  const [internalFocused, setInternalFocused] = useState<string>(now.slice(0, 7))

  const controlled = value !== undefined
  const selected = controlled ? (value ?? null) : internalValue
  const focused = focusedValue ?? internalFocused
  const setFocused = (v: string) => {
    if (focusedValue === undefined) setInternalFocused(v)
    onFocusChange?.(v)
  }
  const setSelected = (v: string | string[] | null) => {
    if (!controlled) setInternalValue(v)
    onChange?.(v)
  }

  const [fy, fm] = focused.split("-").map(Number)
  const cells = useMemo(() => buildCells(fy, fm, firstDayOfWeek, weeksInMonth), [fy, fm, firstDayOfWeek, weeksInMonth])

  const isSelected = (key: string) => (Array.isArray(selected) ? selected.includes(key) : selected === key)

  const select = (key: string) => {
    if (isDisabled || isReadOnly) return
    const { y, m, d } = parseKey(key)
    const date = toKey(y, m, d)
    if (minValue && date < minValue) return
    if (maxValue && date > maxValue) return
    if (isDateUnavailable?.(date)) return
    if (selectionMode === "single") {
      setSelected(isSelected(date) ? null : date)
    } else {
      const arr = Array.isArray(selected) ? [...selected] : []
      setSelected(arr.includes(date) ? arr.filter((x) => x !== date) : [...arr, date])
    }
  }

  const nav = (delta: number) => {
    const d = new Date(fy, fm + delta, 1)
    setFocused(monthKey(d.getFullYear(), d.getMonth()))
  }

  const monthLabel = new Date(fy, fm, 1).toLocaleDateString("tr-TR", { month: "long", year: "numeric" })

  return (
    <div
      data-slot="calendar"
      className={cn("w-fit rounded-xl border border-border bg-background p-3 shadow-sm", isDisabled && "opacity-50", className)}
    >
      {/* Header */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <button
          type="button"
          aria-label="Önceki ay"
          disabled={isDisabled}
          onClick={() => nav(-1)}
          className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-40"
        >
          {navIconPrev ?? <ChevronLeft className="size-4" />}
        </button>
        <div className="text-sm font-medium">{monthLabel}</div>
        <button
          type="button"
          aria-label="Sonraki ay"
          disabled={isDisabled}
          onClick={() => nav(1)}
          className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-40"
        >
          {navIconNext ?? <ChevronRight className="size-4" />}
        </button>
      </div>

      {/* Hafta günleri */}
      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map((d) => (
          <div key={d} className="flex h-8 items-center justify-center text-xs font-medium text-muted-foreground">
            {d}
          </div>
        ))}

        {/* Günler */}
        {cells.map((cell) => {
          const sel = isSelected(cell.key)
          const today = cell.key === now
          const disabled = isDisabled || (minValue && cell.key < minValue) || (maxValue && cell.key > maxValue) || !!isDateUnavailable?.(cell.key)
          return (
            <button
              key={cell.key}
              type="button"
              disabled={disabled}
              onClick={() => select(cell.key)}
              data-selected={sel || undefined}
              data-today={today || undefined}
              data-outside-month={cell.outside || undefined}
              className={cn(
                "relative flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                cell.outside && "text-muted-foreground/40",
                sel ? "bg-blue-600 font-medium text-white" : "hover:bg-muted",
                today && !sel && "bg-blue-100 text-blue-700 font-medium",
                disabled && "cursor-not-allowed opacity-35 hover:bg-transparent"
              )}
            >
              {cell.day}
              {indicatorDates.includes(cell.key) && (
                <span className="pointer-events-none absolute bottom-0.5 size-1 rounded-full bg-current opacity-60" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { Calendar }
export type { CalendarProps }
