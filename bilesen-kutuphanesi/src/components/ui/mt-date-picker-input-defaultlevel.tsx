/**
 * MtDatePickerInputDefaultlevel
 * Varsayılan düzey (saf React, Mantine kaynaklı).
 * @id 1643
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputDefaultlevel() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerInputDefaultlevel }
