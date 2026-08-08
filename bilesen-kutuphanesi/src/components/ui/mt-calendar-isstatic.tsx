/**
 * MtCalendarIsstatic
 * Statik (saf React, Mantine kaynaklı).
 * @id 1606
 * @category Takvim
 * @subcategory MtCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtCalendar } from "@/components/ui/mt-calendar"

function MtCalendarIsstatic() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtCalendar value={value} onChange={setValue}  />
  )
}

export { MtCalendarIsstatic }
