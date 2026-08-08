/**
 * MtDatePickerFullwidth
 * Tam genişlik (saf React, Mantine kaynaklı).
 * @id 1626
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerFullwidth() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" className="w-full [&>div]:w-full" />
  )
}

export { MtDatePickerFullwidth }
