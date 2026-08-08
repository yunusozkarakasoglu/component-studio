/**
 * MtTimePickerMinhoursdigits
 * Saat haneleri (saf React, Mantine kaynaklı).
 * @id 1736
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerMinhoursdigits() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" />
  )
}

export { MtTimePickerMinhoursdigits }
