/**
 * MtMiniCalendarLocale
 * Dil (saf React, Mantine kaynaklı).
 * @id 1755
 * @category Takvim
 * @subcategory MtMiniCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtMiniCalendar } from "@/components/ui/mt-mini-calendar"

function MtMiniCalendarLocale() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMiniCalendar value={value} onChange={setValue}  />
  )
}

export { MtMiniCalendarLocale }
