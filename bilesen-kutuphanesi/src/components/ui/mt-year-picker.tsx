/**
 * MtYearPicker
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yıl seçici — on yıllık sayfalar, yıl grid.
 *   <MtYearPicker value={date} onChange={setDate} />
 * @id 1591
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

interface MtYearPickerProps {
  label?: ReactNode
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  className?: string
}

function MtYearPicker({ label, value, defaultValue = null, onChange, minDate, maxDate, className }: MtYearPickerProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue)
  const [decade, setDecade] = useState(() => {
    const y = (value ?? internal ?? new Date()).getFullYear()
    return Math.floor(y / 10) * 10
  })
  const selected = value !== undefined ? value : internal

  const select = (y: number) => {
    const d = new Date(y, 0, 1)
    if (value === undefined) setInternal(d)
    onChange?.(d)
  }

  const years = Array.from({ length: 12 }, (_, i) => decade - 1 + i)
  const isDisabled = (y: number) => (minDate && new Date(y, 0, 1) < minDate) || (maxDate && new Date(y, 11, 31) > maxDate)

  return (
    <div data-slot="mt-year-picker" className={cn("w-fit select-none rounded-xl border border-border bg-background p-3", className)}>
      {label && <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>}
      <div className="mb-2 flex items-center justify-between">
        <button type="button" aria-label="Önceki on yıl" onClick={() => setDecade((d) => d - 10)}
          className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
          <ChevronLeft className="size-4" />
        </button>
        <span className="text-sm font-semibold text-foreground">{decade} – {decade + 9}</span>
        <button type="button" aria-label="Sonraki on yıl" onClick={() => setDecade((d) => d + 10)}
          className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {years.map((y) => {
          const active = selected && selected.getFullYear() === y
          const dis = isDisabled(y)
          return (
            <button
              key={y}
              type="button"
              disabled={dis}
              onClick={() => select(y)}
              className={cn(
                "cursor-pointer rounded-lg px-2 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                active ? "bg-blue-600 font-semibold text-white" : dis ? "cursor-not-allowed text-muted-foreground/40" : "text-foreground hover:bg-muted"
              )}
            >
              {y}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { MtYearPicker }
export type { MtYearPickerProps }
