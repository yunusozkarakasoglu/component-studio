/**
 * MtInlineDateTimePickerRangecontrolled
 * Kontrollü aralık (saf React, Mantine kaynaklı).
 * @id 1675
 * @category Takvim
 * @subcategory MtInlineDateTimePicker
 * @source mantine
 */
import { useState } from "react"
import { MtInlineDateTimePicker } from "@/components/ui/mt-inline-date-time-picker"

function MtInlineDateTimePickerRangecontrolled() {
  const [start, setStart] = useState<Date | null>(new Date(2025, 6, 10, 8, 30))
  const [end, setEnd] = useState<Date | null>(new Date(2025, 6, 12, 17, 0))

  return (
    <div className="flex flex-col items-start gap-4">
      <MtInlineDateTimePicker label="Giriş" value={start} onChange={setStart} />
      <MtInlineDateTimePicker label="Çıkış" value={end} onChange={setEnd} />
    </div>
  )
}

export { MtInlineDateTimePickerRangecontrolled }
