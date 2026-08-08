/**
 * MtInlineDateTimePickerRange
 * Aralık (saf React, Mantine kaynaklı).
 * @id 1676
 * @category Takvim
 * @subcategory MtInlineDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtInlineDateTimePicker } from "@/components/ui/mt-inline-date-time-picker"

function MtInlineDateTimePickerRange() {
  const [start, setStart] = useState<Date | null>(new Date(2025, 3, 1, 9, 0))
  const [end, setEnd] = useState<Date | null>(new Date(2025, 3, 3, 18, 0))

  return (
    <div className="flex flex-col items-start gap-4">
      <MtInlineDateTimePicker label="Başlangıç" value={start} onChange={setStart} />
      <MtInlineDateTimePicker label="Bitiş" value={end} onChange={setEnd} />
    </div>
  )
}

export { MtInlineDateTimePickerRange }
