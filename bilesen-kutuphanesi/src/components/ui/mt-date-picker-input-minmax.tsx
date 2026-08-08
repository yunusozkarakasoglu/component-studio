/**
 * MtDatePickerInputMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1653
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" minDate={new Date(2025, 0, 1)} maxDate={new Date(2025, 11, 31)} />
  )
}

export { MtDatePickerInputMinmax }
