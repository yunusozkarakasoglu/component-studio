/**
 * MtTimePickerUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1744
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerUsage() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" />
  )
}

export { MtTimePickerUsage }
