/**
 * MtMonthPickerInputClearsectionmode
 * Temizleme bölümü (saf React, Mantine kaynaklı).
 * @id 1691
 * @category Takvim
 * @subcategory MtMonthPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPickerInput } from "@/components/ui/mt-month-picker-input"

function MtMonthPickerInputClearsectionmode() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMonthPickerInput value={value} onChange={setValue} label="Ay" clearable />
  )
}

export { MtMonthPickerInputClearsectionmode }
