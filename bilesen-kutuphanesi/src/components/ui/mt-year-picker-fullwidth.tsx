/**
 * MtYearPickerFullwidth
 * Tam genişlik (saf React, Mantine kaynaklı).
 * @id 1711
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"

function MtYearPickerFullwidth() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtYearPicker value={value} onChange={setValue} label="Yıl" className="w-full" />
  )
}

export { MtYearPickerFullwidth }
