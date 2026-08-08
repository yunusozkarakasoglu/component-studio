/**
 * MtDatePickerInputExcludedate
 * Tarih hariç tut (saf React, Mantine kaynaklı).
 * @id 1645
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputExcludedate() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDatePickerInput value={value} onChange={setValue} label="Tarih" excludeDate={(d) => d.getDay() === 0} />
  )
}

export { MtDatePickerInputExcludedate }
