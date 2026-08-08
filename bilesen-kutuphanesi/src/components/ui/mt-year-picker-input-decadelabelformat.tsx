/**
 * MtYearPickerInputDecadelabelformat
 * On yıl biçimi (saf React, Mantine kaynaklı).
 * @id 1718
 * @category Takvim
 * @subcategory MtYearPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtYearPickerInput } from "@/components/ui/mt-year-picker-input"

function MtYearPickerInputDecadelabelformat() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPickerInput value={value} onChange={setValue} label="Yıl" />
  )
}

export { MtYearPickerInputDecadelabelformat }
