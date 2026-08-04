/**
 * DateRangePickerSimple
 * Template Maker — özel bileşen (HTML'den TSX'e dönüştürüldü)
 * Basit, bağımsız tarih aralığı seçici (takvim + aralık vurgusu + temizle).
 * @id 088
 * @category Özel Komponentler
 */
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"

interface DateRangePickerSimpleProps {
  className?: string
  /** Başlangıç ve bitiş tarihi (opsiyonel, kontrollü) */
  value?: { start: Date | null; end: Date | null }
  /** Seçim değiştiğinde çağrılır */
  onChange?: (range: { start: Date | null; end: Date | null }) => void
}

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

type Cell = { day: number; month: number; year: number; other: boolean }

function buildCells(view: Date): Cell[] {
  const firstDay = new Date(view.getFullYear(), view.getMonth(), 1)
  const startOffset = (firstDay.getDay() + 6) % 7 // Pazartesi=0
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate()
  const prevDays = new Date(view.getFullYear(), view.getMonth(), 0).getDate()
  const cells: Cell[] = []
  for (let i = startOffset; i > 0; i--) cells.push({ day: prevDays - i + 1, month: view.getMonth() - 1, year: view.getFullYear(), other: true })
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, month: view.getMonth(), year: view.getFullYear(), other: false })
  let next = 1
  while (cells.length % 7 !== 0) cells.push({ day: next++, month: view.getMonth() + 1, year: view.getFullYear(), other: true })
  return cells
}

function sameDay(a: Date, b: Date) {
  return b && a.toDateString() === b.toDateString()
}

function DateRangePickerSimple({ className, value, onChange }: DateRangePickerSimpleProps) {
  const [view, setView] = useState(() => new Date(2026, 8, 1))
  const [internal, setInternal] = useState<{ start: Date | null; end: Date | null }>({
    start: new Date(2026, 8, 1),
    end: new Date(2026, 8, 9),
  })

  const range = value ?? internal
  const setRange = (r: { start: Date | null; end: Date | null }) => {
    setInternal(r)
    onChange?.(r)
  }

  const cells = useMemo(() => buildCells(view), [view])

  const selectDate = (y: number, m: number, d: number) => {
    const picked = new Date(y, m, d)
    if (!range.start || (range.start && range.end)) {
      setRange({ start: picked, end: null })
    } else if (!range.end) {
      if (picked < range.start) setRange({ end: range.start, start: picked })
      else setRange({ start: range.start, end: picked })
    }
  }

  const changeMonth = (delta: number) => {
    setView(new Date(view.getFullYear(), view.getMonth() + delta, 1))
  }

  const clear = () => setRange({ start: null, end: null })

  return (
    <div className={cn("w-[340px] rounded-[10px] bg-white p-[18px_20px] shadow-[0_2px_12px_rgba(0,0,0,.08)]", className)}>
      {/* Üst bar: ay/yıl gezinme + temizle */}
      <div className="mb-3.5 flex items-center justify-center gap-3.5">
        <button
          onClick={() => changeMonth(-1)}
          aria-label="Önceki ay"
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border-none bg-slate-100 text-sm text-[#555] transition-colors hover:bg-slate-200"
        >‹</button>
        <span className="flex cursor-pointer items-center gap-1 text-[15px] font-semibold text-[#222]">
          {MONTH_NAMES[view.getMonth()]}
          <span className="text-xs text-[#888]">⌄</span>
        </span>
        <span className="flex cursor-pointer items-center gap-1 text-[15px] font-semibold text-[#222]">
          {view.getFullYear()}
          <span className="text-xs text-[#888]">⌄</span>
        </span>
        <button
          onClick={() => changeMonth(1)}
          aria-label="Sonraki ay"
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border-none bg-slate-100 text-sm text-[#555] transition-colors hover:bg-slate-200"
        >›</button>
        <button
          onClick={clear}
          title="Temizle"
          aria-label="Seçimi temizle"
          className="ml-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border-none bg-slate-100 text-sm text-[#555] transition-colors hover:bg-red-100 hover:text-red-600"
        >✕</button>
      </div>

      {/* Gün adları */}
      <div className="mb-1 grid grid-cols-7 text-center">
        {DAY_NAMES.map((d) => (
          <div key={d} className="py-1.5 text-xs font-semibold text-[#8b93a1]">{d}</div>
        ))}
      </div>

      {/* Takvim hücreleri */}
      <div className="grid grid-cols-7 gap-y-1.5">
        {cells.map((c, idx) => {
          const date = new Date(c.year, c.month, c.day)
          const inRange = range.start && range.end && date >= range.start && date <= range.end
          const isOnlyStart = range.start && !range.end && sameDay(date, range.start)
          const col = idx % 7

          let cls = "relative flex h-[34px] cursor-pointer items-center justify-center text-sm text-[#3a3f4b]"
          if (c.other) cls += " text-[#c7cbd3]"
          if (inRange) {
            cls += " bg-[#0b84fe] text-white"
            if (c.other) cls += " text-white/60"
            if (sameDay(date, range.start as Date) || col === 0) cls += " rounded-l-[17px]"
            if (sameDay(date, range.end as Date) || col === 6) cls += " rounded-r-[17px]"
          } else if (isOnlyStart) {
            cls += " rounded-l-[17px] rounded-r-[17px] bg-[#0b84fe] text-white"
          }

          return (
            <div key={idx} className={cls} onClick={() => selectDate(c.year, c.month, c.day)}>
              {c.day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { DateRangePickerSimple }
export type { DateRangePickerSimpleProps }
