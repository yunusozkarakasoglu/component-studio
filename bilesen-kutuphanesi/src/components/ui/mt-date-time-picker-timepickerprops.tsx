/**
 * MtDateTimePickerTimepickerprops
 * Saat seçici prop'ları (saf React, Mantine kaynaklı).
 * @id 1672
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"

function MtDateTimePickerTimepickerprops() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateTimePicker value={value} onChange={setValue} label="Tarih ve saat" />
  )
}

export { MtDateTimePickerTimepickerprops }
