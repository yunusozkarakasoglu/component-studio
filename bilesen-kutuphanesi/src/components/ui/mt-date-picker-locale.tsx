/**
 * MtDatePickerLocale
 * Dil (saf React, Mantine kaynaklı).
 * @id 1632
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerLocale() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerLocale }
