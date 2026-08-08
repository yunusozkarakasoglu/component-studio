/**
 * MtDatePickerInputWeekenddays
 * Hafta sonu (saf React, Mantine kaynaklı).
 * @id 1659
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputWeekenddays() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" weekendDays={[0, 6]} />
  )
}

export { MtDatePickerInputWeekenddays }
