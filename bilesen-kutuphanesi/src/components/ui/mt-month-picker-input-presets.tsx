/**
 * MtMonthPickerInputPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1700
 * @category Takvim
 * @subcategory MtMonthPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPickerInput } from "@/components/ui/mt-month-picker-input"
import { MtButton } from "@/components/ui/mt-button"

function MtMonthPickerInputPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtMonthPickerInput label="Ay" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 1, 1))}>Şubat</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 7, 1))}>Ağustos</MtButton>
      </div>
    </div>
  )
}

export { MtMonthPickerInputPresets }
