/**
 * MtYearPickerInputControlprops
 * Kontrol prop'ları (saf React, Mantine kaynaklı).
 * @id 1717
 * @category Takvim
 * @subcategory MtYearPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtYearPickerInput } from "@/components/ui/mt-year-picker-input"

function MtYearPickerInputControlprops() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPickerInput value={value} onChange={setValue} label="Yıl" />
  )
}

export { MtYearPickerInputControlprops }
