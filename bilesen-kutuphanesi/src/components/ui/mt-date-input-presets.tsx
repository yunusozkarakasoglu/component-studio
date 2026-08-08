/**
 * MtDateInputPresets
 * Hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1618
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"
import { MtButton } from "@/components/ui/mt-button"

function MtDateInputPresets() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtDateInput label="Tarih" value={date} onChange={setDate} clearable />
      <div className="flex gap-2">
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date())}>Bugün</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 0, 1))}>1 Ocak</MtButton>
        <MtButton size="sm" variant="default" onClick={() => setDate(new Date(2025, 11, 31))}>Yıl sonu</MtButton>
      </div>
    </div>
  )
}

export { MtDateInputPresets }
