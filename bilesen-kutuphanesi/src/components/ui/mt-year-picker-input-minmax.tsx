/**
 * MtYearPickerInputMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1720
 * @category Takvim
 * @subcategory MtYearPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtYearPickerInput } from "@/components/ui/mt-year-picker-input"

function MtYearPickerInputMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPickerInput value={value} onChange={setValue} label="Yıl" minDate={new Date(2020, 0, 1)} maxDate={new Date(2030, 11, 31)} />
  )
}

export { MtYearPickerInputMinmax }
