/**
 * ShadcnCalendarRtl
 * RTL örneği — Arapça takvim (saf React, shadcn kaynaklı).
 * @id 890
 * @category Takvim
 * @subcategory ShadcnCalendar
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCalendar } from "@/components/ui/shadcn-calendar"

function ShadcnCalendarRtl() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <ShadcnCalendar mode="single" selected={date} onSelect={setDate} dir="rtl" className="rounded-lg border" />
  )
}

export { ShadcnCalendarRtl }
