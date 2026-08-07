/**
 * ShadcnDatePicker
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Tarih seçici — buton + açılır takvim (ShadcnCalendar tabanlı).
 *   <ShadcnDatePicker value={date} onChange={setDate} />
 * mode: single | range · placeholder · format (toLocaleDateString seçenekleri).
 * @id 891
 * @category Takvim
 * @subcategory ShadcnDatePicker
 * @source shadcn
 */
import { useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon, ChevronDown } from "@/components/ui/icons"
import { ShadcnCalendar, type ShadcnDateRange } from "@/components/ui/shadcn-calendar"

type ShadcnDatePickerValue = Date | ShadcnDateRange | undefined

interface ShadcnDatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  mode?: "single" | "range"
  value?: ShadcnDatePickerValue
  onChange?: (value: ShadcnDatePickerValue) => void
  placeholder?: string
}

function ShadcnDatePicker({
  className,
  mode = "single",
  value,
  onChange,
  placeholder = "Pick a date",
  ...props
}: ShadcnDatePickerProps) {
  const [open, setOpen] = useState(false)

  const label =
    mode === "range" && value && "from" in value
      ? value.from
        ? `${value.from.toLocaleDateString()} → ${value.to ? value.to.toLocaleDateString() : "…"}`
        : placeholder
      : value instanceof Date
        ? value.toLocaleDateString()
        : placeholder

  return (
    <div data-slot="shadcn-date-picker" className={cn("relative inline-block", className)} {...props}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-9 w-[212px] cursor-pointer items-center justify-between gap-2 rounded-md border border-border bg-background px-3 text-left text-sm text-foreground transition-colors outline-none",
          "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40",
          !value && "text-muted-foreground"
        )}
      >
        <span className="flex items-center gap-2">
          <CalendarIcon className="size-4" />
          {label}
        </span>
        <ChevronDown className="size-4 text-muted-foreground" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-2 rounded-lg border border-border bg-background p-2 shadow-lg">
            <ShadcnCalendar
              mode={mode}
              selected={value}
              onSelect={(v) => {
                onChange?.(v)
                if (mode === "single") setOpen(false)
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export { ShadcnDatePicker }
export type { ShadcnDatePickerProps, ShadcnDatePickerValue }
