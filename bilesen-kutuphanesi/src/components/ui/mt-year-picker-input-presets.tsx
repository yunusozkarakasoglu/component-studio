/**
 * MtYearPickerInputPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1722
 * @category Takvim
 * @subcategory MtYearPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtYearPickerInput } from "@/components/ui/mt-year-picker-input"
import { MtButton } from "@/components/ui/mt-button"

function MtYearPickerInputPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtYearPickerInput label="Yıl" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2024, 0, 1))}>2024</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2026, 0, 1))}>2026</MtButton>
      </div>
    </div>
  )
}

export { MtYearPickerInputPresets }
