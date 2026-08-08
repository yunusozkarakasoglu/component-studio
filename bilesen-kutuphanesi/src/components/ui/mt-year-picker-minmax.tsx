/**
 * MtYearPickerMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1712
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"

function MtYearPickerMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPicker value={value} onChange={setValue} label="Yıl" minDate={new Date(2020, 0, 1)} maxDate={new Date(2030, 11, 31)} />
  )
}

export { MtYearPickerMinmax }
