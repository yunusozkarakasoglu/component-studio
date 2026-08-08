/**
 * MtCalendarWeekpicker
 * Hafta seçici (saf React, Mantine kaynaklı).
 * @id 1608
 * @category Takvim
 * @subcategory MtCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtCalendar } from "@/components/ui/mt-calendar"

function MtCalendarWeekpicker() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtCalendar value={value} onChange={setValue} weekendDays={[0, 6]} />
  )
}

export { MtCalendarWeekpicker }
