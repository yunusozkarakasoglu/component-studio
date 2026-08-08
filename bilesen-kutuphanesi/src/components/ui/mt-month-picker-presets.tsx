/**
 * MtMonthPickerPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1690
 * @category Takvim
 * @subcategory MtMonthPicker
 * @source mantine
 */
import { useState } from "react"
import { MtMonthPicker } from "@/components/ui/mt-month-picker"
import { MtButton } from "@/components/ui/mt-button"

function MtMonthPickerPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtMonthPicker label="Ay" value={date} onChange={setDate} />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 0, 1))}>Ocak</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 5, 1))}>Haziran</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 11, 1))}>Aralık</MtButton>
      </div>
    </div>
  )
}

export { MtMonthPickerPresets }
