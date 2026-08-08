/**
 * MtTimePickerPresetsrange
 * Aralık hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1740
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtTimePickerPresetsrange() {
  const [time, setTime] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtTimePicker label="Saat" value={time} onChange={setTime} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setTime("08:00")}>08:00</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setTime("18:00")}>18:00</MtButton>
      </div>
    </div>
  )
}

export { MtTimePickerPresetsrange }
