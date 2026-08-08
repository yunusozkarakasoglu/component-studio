/**
 * MtDatePickerDefaultdate
 * Varsayılan tarih (saf React, Mantine kaynaklı).
 * @id 1622
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerDefaultdate() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" defaultDate={new Date(2025, 5, 15)} />
  )
}

export { MtDatePickerDefaultdate }
