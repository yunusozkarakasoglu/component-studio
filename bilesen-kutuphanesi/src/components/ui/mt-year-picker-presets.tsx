/**
 * MtYearPickerPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1714
 * @category Takvim
 * @subcategory MtYearPicker
 * @source mantine
 */
import { useState } from "react"
import { MtYearPicker } from "@/components/ui/mt-year-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtYearPickerPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtYearPicker label="Yıl" value={date} onChange={setDate} />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2023, 0, 1))}>2023</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 0, 1))}>2025</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2027, 0, 1))}>2027</MtButton>
      </div>
    </div>
  )
}

export { MtYearPickerPresets }
