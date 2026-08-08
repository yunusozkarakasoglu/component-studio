/**
 * MtDatesProviderConsistentweeks
 * Tutarlı haftalar (saf React, Mantine kaynaklı).
 * @id 1759
 * @category Takvim
 * @subcategory MtDatesProvider
 * @source mantine
 */
import { useState } from "react"
import { MtDatesProvider } from "@/components/ui/mt-dates-provider"
import { MtMiniCalendar } from "@/components/ui/mt-mini-calendar"

function MtDatesProviderConsistentweeks() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <MtDatesProvider locale="en" firstDayOfWeek={0}>
      <MtMiniCalendar value={date} onChange={setDate} size="md" />
    </MtDatesProvider>
  )
}

export { MtDatesProviderConsistentweeks }
