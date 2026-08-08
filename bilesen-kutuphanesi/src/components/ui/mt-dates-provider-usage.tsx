/**
 * MtDatesProviderUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1760
 * @category Takvim
 * @subcategory MtDatesProvider
 * @source mantine
 */
import { useState } from "react"
import { MtCalendar } from "@/components/ui/mt-calendar"
import { MtDatesProvider } from "@/components/ui/mt-dates-provider"

function MtDatesProviderUsage() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <MtDatesProvider locale="tr" firstDayOfWeek={1}>
      <MtCalendar value={date} onChange={setDate} />
    </MtDatesProvider>
  )
}

export { MtDatesProviderUsage }
