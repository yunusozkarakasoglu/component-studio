/**
 * MtTimePickerPresetsgroups
 * Gruplu hazır seçimler (saf React, Mantine kaynaklı).
 * @id 1739
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerPresetsgroups() {
  const [time, setTime] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtTimePicker label="Vardiya" value={time} onChange={setTime} clearable />
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium text-muted-foreground">Sabah:</span>
        {["07:00", "08:00", "09:00"].map((t) => (
          <button key={t} onClick={() => setTime(t)} className="cursor-pointer rounded bg-muted px-2 py-0.5 text-xs hover:bg-muted/70">{t}</button>
        ))}
      </div>
    </div>
  )
}

export { MtTimePickerPresetsgroups }
