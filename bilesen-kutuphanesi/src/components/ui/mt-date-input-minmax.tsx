/**
 * MtDateInputMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1616
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputMinmax() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateInput value={value} onChange={setValue} label="Tarih" minDate={new Date(2025, 0, 1)} maxDate={new Date(2025, 11, 31)} />
  )
}

export { MtDateInputMinmax }
