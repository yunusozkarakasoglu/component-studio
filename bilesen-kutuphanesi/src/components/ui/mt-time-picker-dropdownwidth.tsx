/**
 * MtTimePickerDropdownwidth
 * Açılır genişlik (saf React, Mantine kaynaklı).
 * @id 1733
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerDropdownwidth() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" />
  )
}

export { MtTimePickerDropdownwidth }
