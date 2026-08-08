/**
 * MtMiniCalendarNumberofdays
 * Gün sayısı (saf React, Mantine kaynaklı).
 * @id 1757
 * @category Takvim
 * @subcategory MtMiniCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtMiniCalendar } from "@/components/ui/mt-mini-calendar"

function MtMiniCalendarNumberofdays() {
  const [date, setDate] = useState<Date | null>(null)

  return <MtMiniCalendar value={date} onChange={setDate} size="md" />
}

export { MtMiniCalendarNumberofdays }
