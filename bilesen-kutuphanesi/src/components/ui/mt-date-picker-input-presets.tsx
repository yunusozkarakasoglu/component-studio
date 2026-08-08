/**
 * MtDatePickerInputPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1656
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"
import { MtButton } from "@/components/ui/mt-button"

function MtDatePickerInputPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtDatePickerInput label="Tarih" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date())}>Bugün</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 5, 15))}>15 Haziran</MtButton>
      </div>
    </div>
  )
}

export { MtDatePickerInputPresets }
