/**
 * MtTimePickerClearable
 * Temizlenebilir (saf React, Mantine kaynaklı).
 * @id 1726
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerClearable() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" clearable />
  )
}

export { MtTimePickerClearable }
