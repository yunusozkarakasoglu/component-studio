/**
 * ShadcnDatePickerDemo
 * Temel örnek — tek tarih (saf React, shadcn kaynaklı).
 * @id 892
 * @category Takvim
 * @subcategory ShadcnDatePicker
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnDatePicker } from "@/components/ui/shadcn-date-picker"

function ShadcnDatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-2">
      <ShadcnDatePicker mode="single" value={date} onChange={(v) => v instanceof Date && setDate(v)} />
      <p className="text-sm text-muted-foreground">
        {date ? `Selected: ${date.toLocaleDateString()}` : "No date selected"}
      </p>
    </div>
  )
}

export { ShadcnDatePickerDemo }
