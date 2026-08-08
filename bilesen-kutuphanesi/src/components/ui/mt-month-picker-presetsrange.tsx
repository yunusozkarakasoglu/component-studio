/**
 * MtMonthPickerPresetsrange
 * Aralık hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1689
 * @category Takvim
 * @subcategory MtMonthPicker
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPicker } from "@/components/ui/mt-month-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtMonthPickerPresetsrange() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtMonthPicker label="Ay" value={date} onChange={setDate} />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 2, 1))}>Mart</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 9, 1))}>Ekim</MtButton>
      </div>
    </div>
  )
}

export { MtMonthPickerPresetsrange }
