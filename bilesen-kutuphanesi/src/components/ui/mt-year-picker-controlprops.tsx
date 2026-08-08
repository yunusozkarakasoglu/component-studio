/**
 * MtYearPickerControlprops
 * Kontrol prop'ları (saf React, Mantine kaynaklı).
 * @id 1708
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"

function MtYearPickerControlprops() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPicker value={value} onChange={setValue} label="Yıl" />
  )
}

export { MtYearPickerControlprops }
