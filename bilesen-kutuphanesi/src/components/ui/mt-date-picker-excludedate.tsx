/**
 * MtDatePickerExcludedate
 * Tarih hariç tut (saf React, Mantine kaynaklı).
 * @id 1624
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerExcludedate() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePicker value={value} onChange={setValue} label="Tarih" excludeDate={(d) => d.getDay() === 0} />
  )
}

export { MtDatePickerExcludedate }
