/**
 * MtDatePickerInputHideweekdays
 * Hafta günlerini gizle (saf React, Mantine kaynaklı).
 * @id 1649
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputHideweekdays() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerInputHideweekdays }
