/**
 * MtDatePickerInputHeadercontrolsorder
 * Başlık sırası (saf React, Mantine kaynaklı).
 * @id 1647
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputHeadercontrolsorder() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerInputHeadercontrolsorder }
