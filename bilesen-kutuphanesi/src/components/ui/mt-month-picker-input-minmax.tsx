/**
 * MtMonthPickerInputMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1697
 * @category Takvim
 * @subcategory MtMonthPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPickerInput } from "@/components/ui/mt-month-picker-input"

function MtMonthPickerInputMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMonthPickerInput value={value} onChange={setValue} label="Ay" minDate={new Date(2025, 0, 1)} maxDate={new Date(2025, 11, 31)} />
  )
}

export { MtMonthPickerInputMinmax }
