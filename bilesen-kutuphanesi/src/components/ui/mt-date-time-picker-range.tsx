/**
 * MtDateTimePickerRange
 * Aralık (saf React, Mantine kaynaklı).
 * @id 1671
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"

function MtDateTimePickerRange() {
  const [start, setStart] = useState<Date | null>(new Date(2025, 3, 1, 9, 0))
  const [end, setEnd] = useState<Date | null>(new Date(2025, 3, 3, 18, 0))

  return (
    <div className="flex flex-col items-start gap-3">
      <MtDateTimePicker label="Başlangıç" value={start} onChange={setStart} clearable />
      <MtDateTimePicker label="Bitiş" value={end} onChange={setEnd} clearable />
    </div>
  )
}

export { MtDateTimePickerRange }
