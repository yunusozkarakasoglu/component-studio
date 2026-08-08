/**
 * MtYearPickerDecadelabelformat
 * On yıl biçimi (saf React, Mantine kaynaklı).
 * @id 1709
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"

function MtYearPickerDecadelabelformat() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPicker value={value} onChange={setValue} label="Yıl" />
  )
}

export { MtYearPickerDecadelabelformat }
