/**
 * MtYearPickerInputClearsectionmode
 * Temizleme bölümü (saf React, Mantine kaynaklı).
 * @id 1716
 * @category Takvim
 * @subcategory MtYearPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtYearPickerInput } from "@/components/ui/mt-year-picker-input"

function MtYearPickerInputClearsectionmode() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPickerInput value={value} onChange={setValue} label="Yıl" clearable />
  )
}

export { MtYearPickerInputClearsectionmode }
