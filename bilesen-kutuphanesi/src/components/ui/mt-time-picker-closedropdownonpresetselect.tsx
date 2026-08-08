/**
 * MtTimePickerClosedropdownonpresetselect
 * Seçimde kapat (saf React, Mantine kaynaklı).
 * @id 1728
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerClosedropdownonpresetselect() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" />
  )
}

export { MtTimePickerClosedropdownonpresetselect }
