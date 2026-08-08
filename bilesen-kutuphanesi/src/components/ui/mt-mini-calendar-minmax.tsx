/**
 * MtMiniCalendarMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1756
 * @category Takvim
 * @subcategory MtMiniCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtMiniCalendar } from "@/components/ui/mt-mini-calendar"

function MtMiniCalendarMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMiniCalendar value={value} onChange={setValue} minDate={new Date(2025, 0, 1)} maxDate={new Date(2025, 11, 31)} />
  )
}

export { MtMiniCalendarMinmax }
