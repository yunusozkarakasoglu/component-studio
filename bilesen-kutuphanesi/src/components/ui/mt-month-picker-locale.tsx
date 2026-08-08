/**
 * MtMonthPickerLocale
 * Dil (saf React, Mantine kaynaklı).
 * @id 1685
 * @category Takvim
 * @subcategory MtMonthPicker
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPicker } from "@/components/ui/mt-month-picker"

function MtMonthPickerLocale() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMonthPicker value={value} onChange={setValue} label="Ay" locale="en" />
  )
}

export { MtMonthPickerLocale }
