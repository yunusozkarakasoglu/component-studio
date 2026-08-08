/**
 * MtDateTimePickerPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1670
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtDateTimePickerPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtDateTimePicker label="Randevu" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date())}>Şimdi</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 9, 0))}>Yarın 09:00</MtButton>
      </div>
    </div>
  )
}

export { MtDateTimePickerPresets }
