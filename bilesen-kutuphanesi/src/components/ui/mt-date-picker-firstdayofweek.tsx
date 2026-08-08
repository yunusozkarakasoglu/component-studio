/**
 * MtDatePickerFirstdayofweek
 * Hafta başlangıcı (saf React, Mantine kaynaklı).
 * @id 1625
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerFirstdayofweek() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" allowDeselect />
  )
}

export { MtDatePickerFirstdayofweek }
