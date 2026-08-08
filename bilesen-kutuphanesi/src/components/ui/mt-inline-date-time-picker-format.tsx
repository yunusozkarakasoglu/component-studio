/**
 * MtInlineDateTimePickerFormat
 * Biçim (saf React, Mantine kaynaklı).
 * @id 1674
 * @category Takvim
 * @subcategory MtInlineDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtInlineDateTimePicker } from "@/components/ui/mt-inline-date-time-picker"

function MtInlineDateTimePickerFormat() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtInlineDateTimePicker value={value} onChange={setValue} label="Tarih ve saat" />
  )
}

export { MtInlineDateTimePickerFormat }
