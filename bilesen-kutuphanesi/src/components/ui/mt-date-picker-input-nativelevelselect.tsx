/**
 * MtDatePickerInputNativelevelselect
 * Yerel düzey (saf React, Mantine kaynaklı).
 * @id 1654
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputNativelevelselect() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerInputNativelevelselect }
