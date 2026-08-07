/**
 * ShadcnDatePickerInput
 * Input görünümlü tarih seçici (saf React, shadcn kaynaklı).
 * @id 896
 * @category Takvim
 * @subcategory ShadcnDatePicker
 * @source shadcn
 */
import { useState } from "react"
import { Calendar as CalendarIcon } from "@/components/ui/icons"
import { ShadcnCalendar } from "@/components/ui/shadcn-calendar"

function ShadcnDatePickerInput() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-[212px] cursor-pointer items-center gap-2 rounded-md border border-border bg-background px-3 text-left text-sm text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40"
      >
        <CalendarIcon className="size-4 text-muted-foreground" />
        <span className={date ? "" : "text-muted-foreground"}>
          {date ? date.toLocaleDateString() : "Select date"}
        </span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-2 rounded-lg border border-border bg-background p-2 shadow-lg">
            <ShadcnCalendar
              mode="single"
              selected={date}
              onSelect={(v) => {
                if (v instanceof Date) setDate(v)
                setOpen(false)
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export { ShadcnDatePickerInput }
