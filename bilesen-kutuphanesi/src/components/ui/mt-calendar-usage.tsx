/**
 * MtCalendarUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1603
 * @category Takvim
 * @subcategory MtCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtCalendar } from "@/components/ui/mt-calendar"

function MtCalendarUsage() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtCalendar value={value} onChange={setValue}  />
  )
}

export { MtCalendarUsage }
