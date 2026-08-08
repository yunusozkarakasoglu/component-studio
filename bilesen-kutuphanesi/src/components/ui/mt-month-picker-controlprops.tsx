/**
 * MtMonthPickerControlprops
 * Kontrol prop'ları (saf React, Mantine kaynaklı).
 * @id 1680
 * @category Takvim
 * @subcategory MtMonthPicker
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPicker } from "@/components/ui/mt-month-picker"

function MtMonthPickerControlprops() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMonthPicker value={value} onChange={setValue} label="Ay" />
  )
}

export { MtMonthPickerControlprops }
