/**
 * MtDatePickerPresetsrange
 * Aralık hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1636
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtDatePickerPresetsrange() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtDatePicker label="Tarih" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date())}>Bugün</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 6, 1))}>Temmuz başı</MtButton>
      </div>
    </div>
  )
}

export { MtDatePickerPresetsrange }
