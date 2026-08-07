/**
 * ShadcnCalendarCaption
 * Ay/yıl seçici başlık (saf React, shadcn kaynaklı).
 * @id 888
 * @category Takvim
 * @subcategory ShadcnCalendar
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCalendar } from "@/components/ui/shadcn-calendar"

function ShadcnCalendarCaption() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <ShadcnCalendar mode="single" selected={date} onSelect={(v) => v instanceof Date && setDate(v)} captionLayout="dropdown" className="rounded-lg border" />
  )
}

export { ShadcnCalendarCaption }
