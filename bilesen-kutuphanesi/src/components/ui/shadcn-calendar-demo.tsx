/**
 * ShadcnCalendarDemo
 * Temel örnek — tek tarih seçimi (saf React, shadcn kaynaklı).
 * @id 885
 * @category Takvim
 * @subcategory ShadcnCalendar
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCalendar } from "@/components/ui/shadcn-calendar"

function ShadcnCalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-2">
      <ShadcnCalendar mode="single" selected={date} onSelect={(v) => v instanceof Date && setDate(v)} captionLayout="dropdown" className="rounded-lg border" />
      <p className="text-sm text-muted-foreground">
        {date ? `Selected: ${date.toLocaleDateString()}` : "No date selected"}
      </p>
    </div>
  )
}

export { ShadcnCalendarDemo }
