/**
 * ShadcnCalendarRange
 * Aralık seçimi — iki ay (saf React, shadcn kaynaklı).
 * @id 887
 * @category Takvim
 * @subcategory ShadcnCalendar
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCalendar, type ShadcnDateRange } from "@/components/ui/shadcn-calendar"

function ShadcnCalendarRange() {
  const [range, setRange] = useState<ShadcnDateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: new Date(new Date().getFullYear(), 0, 42),
  })

  return (
    <div className="flex flex-col gap-2">
      <ShadcnCalendar
        mode="range"
        defaultMonth={range?.from}
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-lg border"
      />
      <p className="text-sm text-muted-foreground">
        {range?.from ? `${range.from.toLocaleDateString()} → ${range.to ? range.to.toLocaleDateString() : "…"}` : "Select a range"}
      </p>
    </div>
  )
}

export { ShadcnCalendarRange }
