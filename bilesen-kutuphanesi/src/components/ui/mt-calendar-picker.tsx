/**
 * MtCalendarPicker
 * Seçici (saf React, Mantine kaynaklı).
 * @id 1604
 * @category Takvim
 * @subcategory MtCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtCalendar } from "@/components/ui/mt-calendar"

function MtCalendarPicker() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtCalendar value={value} onChange={setValue} weekendDays={[0]} />
  )
}

export { MtCalendarPicker }
