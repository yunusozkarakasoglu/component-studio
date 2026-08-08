/**
 * MtTimePickerFormat12h
 * 12 saatlik (saf React, Mantine kaynaklı).
 * @id 1735
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerFormat12h() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" format="12" />
  )
}

export { MtTimePickerFormat12h }
