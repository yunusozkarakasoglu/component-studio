/**
 * MtInlineDateTimePicker
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Satır içi tarih + saat seçici — popover yok, doğrudan görünür.
 *   <MtInlineDateTimePicker value={date} onChange={setDate} />
 * @id 1599
 * @category Takvim
 * @subcategory MtInlineDateTimePicker
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MtCalendar } from "@/components/ui/mt-calendar"

interface MtInlineDateTimePickerProps {
  label?: ReactNode
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  className?: string
}

function MtInlineDateTimePicker({ label, value, defaultValue = null, onChange, minDate, maxDate, className }: MtInlineDateTimePickerProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue)
  const [time, setTime] = useState("12:00")
  const selected = value !== undefined ? value : internal

  const select = (d: Date | null) => {
    let next = d
    if (d) {
      const [hh, mm] = time.split(":").map(Number)
      next = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm)
    }
    if (value === undefined) setInternal(next)
    onChange?.(next)
  }

  return (
    <div className={cn("flex w-fit flex-col gap-2", className)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
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
          {selected && (
            <span className="ml-auto text-xs text-muted-foreground">
              {new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(selected)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export { MtInlineDateTimePicker }
export type { MtInlineDateTimePickerProps }
