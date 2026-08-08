/**
 * MtDatePickerHeadercontrolsorder
 * Başlık sırası (saf React, Mantine kaynaklı).
 * @id 1627
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerHeadercontrolsorder() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerHeadercontrolsorder }
