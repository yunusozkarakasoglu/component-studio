/**
 * MtDateTimePickerClearsectionmode
 * Temizleme bölümü (saf React, Mantine kaynaklı).
 * @id 1663
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"

function MtDateTimePickerClearsectionmode() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateTimePicker value={value} onChange={setValue} label="Tarih ve saat" clearable />
  )
}

export { MtDateTimePickerClearsectionmode }
