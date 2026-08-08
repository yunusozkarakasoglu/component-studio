/**
 * MtMonthPickerInputPresetsrange
 * Aralık hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1699
 * @category Takvim
 * @subcategory MtMonthPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPickerInput } from "@/components/ui/mt-month-picker-input"
import { MtButton } from "@/components/ui/mt-button"

function MtMonthPickerInputPresetsrange() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtMonthPickerInput label="Ay" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 3, 1))}>Nisan</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 8, 1))}>Eylül</MtButton>
      </div>
    </div>
  )
}

export { MtMonthPickerInputPresetsrange }
