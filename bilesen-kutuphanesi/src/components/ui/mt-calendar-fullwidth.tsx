/**
 * MtCalendarFullwidth
 * Tam genişlik (saf React, Mantine kaynaklı).
 * @id 1605
 * @category Takvim
 * @subcategory MtCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtCalendar } from "@/components/ui/mt-calendar"

function MtCalendarFullwidth() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtCalendar value={value} onChange={setValue} className="w-full" />
  )
}

export { MtCalendarFullwidth }
