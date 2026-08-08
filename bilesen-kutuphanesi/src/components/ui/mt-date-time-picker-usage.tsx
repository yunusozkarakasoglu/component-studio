/**
 * MtDateTimePickerUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1661
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"

function MtDateTimePickerUsage() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateTimePicker value={value} onChange={setValue} label="Tarih ve saat" />
  )
}

export { MtDateTimePickerUsage }
