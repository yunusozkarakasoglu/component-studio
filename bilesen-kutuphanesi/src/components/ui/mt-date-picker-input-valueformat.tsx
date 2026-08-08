/**
 * MtDatePickerInputValueformat
 * Değer biçimi (saf React, Mantine kaynaklı).
 * @id 1658
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputValueformat() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" valueFormat="DD/MM/YYYY" />
  )
}

export { MtDatePickerInputValueformat }
