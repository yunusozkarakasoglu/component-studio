/**
 * MtYearPickerPresetsrange
 * Aralık hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1713
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtYearPickerPresetsrange() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtYearPicker label="Yıl" value={date} onChange={setDate} />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2020, 0, 1))}>2020</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2030, 0, 1))}>2030</MtButton>
      </div>
    </div>
  )
}

export { MtYearPickerPresetsrange }
