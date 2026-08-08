/**
 * MtMiniCalendarGetdayprops
 * Gün prop'ları (saf React, Mantine kaynaklı).
 * @id 1754
 * @category Takvim
 * @subcategory MtMiniCalendar
 * @source mantine
 */
import { useState } from "react"
import { MtMiniCalendar } from "@/components/ui/mt-mini-calendar"

function MtMiniCalendarGetdayprops() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-2">
      <MtMiniCalendar value={date} onChange={setDate} />
      <p className="text-xs text-muted-foreground">{date ? date.toLocaleDateString("tr-TR") : "Gün seçilmedi"}</p>
    </div>
  )
}

export { MtMiniCalendarGetdayprops }
