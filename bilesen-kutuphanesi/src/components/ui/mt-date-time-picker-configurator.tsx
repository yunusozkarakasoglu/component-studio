/**
 * MtDateTimePickerConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1664
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"

function MtDateTimePickerConfigurator() {
  const [date, setDate] = useState<Date | null>(new Date(2025, 2, 10, 14, 30))

  return (
    <div className="flex flex-col items-start gap-2">
      <MtDateTimePicker label="Toplantı zamanı" value={date} onChange={setDate} clearable />
      <p className="text-xs text-muted-foreground">
        {date ? new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" }).format(date) : "Seçilmedi"}
      </p>
    </div>
  )
}

export { MtDateTimePickerConfigurator }
