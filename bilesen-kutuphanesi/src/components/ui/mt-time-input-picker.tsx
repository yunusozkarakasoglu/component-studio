/**
 * MtTimeInputPicker
 * Seçici (saf React, Mantine kaynaklı).
 * @id 1705
 * @category Takvim
 * @subcategory MtTimeInput
 * @source mantine
 */
import { useState } from "react"
import { MtTimeInput } from "@/components/ui/mt-time-input"

function MtTimeInputPicker() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimeInput value={value} onChange={setValue} label="Saat" />
  )
}

export { MtTimeInputPicker }
