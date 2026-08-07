/**
 * ShadcnDatePickerWithRange
 * Aralık seçici (saf React, shadcn kaynaklı).
 * @id 894
 * @category Takvim
 * @subcategory ShadcnDatePicker
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnDatePicker, type ShadcnDatePickerValue } from "@/components/ui/shadcn-date-picker"
import type { ShadcnDateRange } from "@/components/ui/shadcn-calendar"

function ShadcnDatePickerWithRange() {
  const [range, setRange] = useState<ShadcnDatePickerValue>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: new Date(new Date().getFullYear(), 0, 42),
  })

  return (
    <div className="flex flex-col gap-2">
      <ShadcnDatePicker mode="range" value={range} onChange={(v) => v && "from" in v && setRange(v as ShadcnDateRange)} placeholder="Pick a date range" />
    </div>
  )
}

export { ShadcnDatePickerWithRange }
