/**
 * MtMonthPickerMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1687
 * @category Takvim
 * @subcategory MtMonthPicker
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPicker } from "@/components/ui/mt-month-picker"

function MtMonthPickerMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMonthPicker value={value} onChange={setValue} label="Ay" minDate={new Date(2025, 0, 1)} maxDate={new Date(2025, 11, 31)} />
  )
}

export { MtMonthPickerMinmax }
