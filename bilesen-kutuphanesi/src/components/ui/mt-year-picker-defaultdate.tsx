/**
 * MtYearPickerDefaultdate
 * Varsayılan tarih (saf React, Mantine kaynaklı).
 * @id 1710
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"

function MtYearPickerDefaultdate() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPicker value={value} onChange={setValue} label="Yıl" />
  )
}

export { MtYearPickerDefaultdate }
