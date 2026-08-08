/**
 * MtDatePickerInputHideoutsidedates
 * Dış tarihleri gizle (saf React, Mantine kaynaklı).
 * @id 1648
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputHideoutsidedates() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerInputHideoutsidedates }
