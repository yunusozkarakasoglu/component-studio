/**
 * MtCalendarNativelevelselect
 * Yerel düzey (saf React, Mantine kaynaklı).
 * @id 1607
 * @category Takvim
 * @subcategory MtCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtCalendar } from "@/components/ui/mt-calendar"

function MtCalendarNativelevelselect() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtCalendar value={value} onChange={setValue}  />
  )
}

export { MtCalendarNativelevelselect }
