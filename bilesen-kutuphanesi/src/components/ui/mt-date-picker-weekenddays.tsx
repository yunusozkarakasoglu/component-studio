/**
 * MtDatePickerWeekenddays
 * Hafta sonu (saf React, Mantine kaynaklı).
 * @id 1639
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerWeekenddays() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" allowDeselect />
  )
}

export { MtDatePickerWeekenddays }
