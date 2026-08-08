/**
 * MtTimePickerMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1737
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerMinmax() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" minTime="09:00" maxTime="18:00" />
  )
}

export { MtTimePickerMinmax }
