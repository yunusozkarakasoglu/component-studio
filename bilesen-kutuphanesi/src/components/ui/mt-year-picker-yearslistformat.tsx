/**
 * MtYearPickerYearslistformat
 * Yıl listesi biçimi (saf React, Mantine kaynaklı).
 * @id 1715
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"

function MtYearPickerYearslistformat() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPicker value={value} onChange={setValue} label="Yıl" />
  )
}

export { MtYearPickerYearslistformat }
