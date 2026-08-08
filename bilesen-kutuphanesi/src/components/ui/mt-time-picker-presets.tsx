/**
 * MtTimePickerPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1741
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtTimePickerPresets() {
  const [time, setTime] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtTimePicker label="Saat" value={time} onChange={setTime} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setTime("09:00")}>09:00</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setTime("12:00")}>12:00</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setTime("17:00")}>17:00</MtButton>
      </div>
    </div>
  )
}

export { MtTimePickerPresets }
