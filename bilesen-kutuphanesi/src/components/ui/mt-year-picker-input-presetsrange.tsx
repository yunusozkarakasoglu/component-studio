/**
 * MtYearPickerInputPresetsrange
 * Aralık hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1721
 * @category Takvim
 * @subcategory MtYearPickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtYearPickerInput } from "@/components/ui/mt-year-picker-input"
import { MtButton } from "@/components/ui/mt-button"

function MtYearPickerInputPresetsrange() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtYearPickerInput label="Yıl" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2021, 0, 1))}>2021</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2029, 0, 1))}>2029</MtButton>
      </div>
    </div>
  )
}

export { MtYearPickerInputPresetsrange }
