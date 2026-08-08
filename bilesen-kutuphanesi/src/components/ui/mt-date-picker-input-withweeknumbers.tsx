/**
 * MtDatePickerInputWithweeknumbers
 * Hafta numaraları (saf React, Mantine kaynaklı).
 * @id 1660
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputWithweeknumbers() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerInputWithweeknumbers }
