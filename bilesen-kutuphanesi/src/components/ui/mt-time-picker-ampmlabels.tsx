/**
 * MtTimePickerAmpmlabels
 * AM/PM etiketleri (saf React, Mantine kaynaklı).
 * @id 1725
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerAmpmlabels() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimePicker value={value} onChange={setValue} label="Saat" format="12" />
  )
}

export { MtTimePickerAmpmlabels }
