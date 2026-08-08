/**
 * MtMonthPickerInputLabelformat
 * Etiket biçimi (saf React, Mantine kaynaklı).
 * @id 1694
 * @category Takvim
 * @subcategory MtMonthPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPickerInput } from "@/components/ui/mt-month-picker-input"

function MtMonthPickerInputLabelformat() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMonthPickerInput value={value} onChange={setValue} label="Ay" />
  )
}

export { MtMonthPickerInputLabelformat }
