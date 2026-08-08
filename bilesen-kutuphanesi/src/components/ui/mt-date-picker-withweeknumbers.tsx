/**
 * MtDatePickerWithweeknumbers
 * Hafta numaraları (saf React, Mantine kaynaklı).
 * @id 1640
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerWithweeknumbers() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDatePickerWithweeknumbers }
