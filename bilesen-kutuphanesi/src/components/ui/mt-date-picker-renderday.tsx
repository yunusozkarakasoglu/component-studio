/**
 * MtDatePickerRenderday
 * Gün render (saf React, Mantine kaynaklı).
 * @id 1638
 * @category Takvim
 * @subcategory MtDatePicker
 * @source mantine
 */
import { useState } from "react"
import { MtDatePicker } from "@/components/ui/mt-date-picker"

function MtDatePickerRenderday() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-start gap-2">
      <MtDatePicker
        label="Tarih"
        value={date}
        onChange={setDate}
        renderDay={(d) => (
          <div className="flex flex-col items-center">
            <span>{d.getDate()}</span>
            {d.getDate() === 15 && <span className="size-1 rounded-full bg-blue-500" />}
          </div>
        )}
      />
      <p className="text-xs text-muted-foreground">15. gün nokta ile işaretlenir</p>
    </div>
  )
}

export { MtDatePickerRenderday }
