/**
 * MtDatePickerPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1637
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtDatePickerPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtDatePicker label="Tarih" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date())}>Bugün</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))}>Ay başı</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(new Date().getFullYear(), 11, 31))}>Yıl sonu</MtButton>
      </div>
    </div>
  )
}

export { MtDatePickerPresets }
