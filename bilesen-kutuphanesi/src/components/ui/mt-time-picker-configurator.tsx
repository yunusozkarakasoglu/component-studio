/**
 * MtTimePickerConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1729
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerConfigurator() {
  const [time, setTime] = useState<string | null>("12:00")

  return (
    <div className="flex flex-col items-start gap-2">
      <MtTimePicker label="Saat" value={time} onChange={setTime} clearable />
      <p className="text-xs text-muted-foreground">Seçilen: {time ?? "—"}</p>
    </div>
  )
}

export { MtTimePickerConfigurator }
