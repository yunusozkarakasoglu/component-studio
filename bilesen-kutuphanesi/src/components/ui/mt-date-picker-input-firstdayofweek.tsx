/**
 * MtDatePickerInputFirstdayofweek
 * Hafta başlangıcı (saf React, Mantine kaynaklı).
 * @id 1646
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputFirstdayofweek() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" firstDayOfWeek={0} />
  )
}

export { MtDatePickerInputFirstdayofweek }
