/**
 * MtDatePickerInputRenderday
 * Gün render (saf React, Mantine kaynaklı).
 * @id 1657
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { useState } from "react"
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputRenderday() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <MtDatePickerInput
      label="Tarih"
      value={date}
      onChange={setDate}
      renderDay={(d) => (
        <div className="flex items-center justify-center">
          {d.getDate() % 2 === 0 ? <span className="font-bold text-blue-600">{d.getDate()}</span> : d.getDate()}
        </div>
      )}
    />
  )
}

export { MtDatePickerInputRenderday }
