/**
 * MtTimePickerControlleddropdown
 * Kontrollü açılır (saf React, Mantine kaynaklı).
 * @id 1730
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerControlleddropdown() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" />
  )
}

export { MtTimePickerControlleddropdown }
