/**
 * MtMonthPickerFullwidth
 * Tam genişlik (saf React, Mantine kaynaklı).
 * @id 1682
 * @category Takvim
 * @subcategory MtMonthPicker
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPicker } from "@/components/ui/mt-month-picker"

function MtMonthPickerFullwidth() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtMonthPicker value={value} onChange={setValue} label="Ay" className="w-full" />
  )
}

export { MtMonthPickerFullwidth }
