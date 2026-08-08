/**
 * MtDatePickerInputClearsectionmode
 * Temizleme bölümü (saf React, Mantine kaynaklı).
 * @id 1641
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputClearsectionmode() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" clearable />
  )
}

export { MtDatePickerInputClearsectionmode }
