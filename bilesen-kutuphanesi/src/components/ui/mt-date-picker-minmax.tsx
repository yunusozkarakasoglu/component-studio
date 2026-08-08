/**
 * MtDatePickerMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1634
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" minDate={new Date(2025, 0, 1)} maxDate={new Date(2025, 11, 31)} />
  )
}

export { MtDatePickerMinmax }
