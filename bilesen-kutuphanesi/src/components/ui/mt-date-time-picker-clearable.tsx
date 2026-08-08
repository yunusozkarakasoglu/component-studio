/**
 * MtDateTimePickerClearable
 * Temizlenebilir (saf React, Mantine kaynaklı).
 * @id 1662
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"

function MtDateTimePickerClearable() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateTimePicker value={value} onChange={setValue} label="Tarih ve saat" clearable />
  )
}

export { MtDateTimePickerClearable }
