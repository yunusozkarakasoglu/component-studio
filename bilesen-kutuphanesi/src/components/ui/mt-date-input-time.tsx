/**
 * MtDateInputTime
 * Saatli (saf React, Mantine kaynaklı).
 * @id 1619
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputTime() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateInput value={value} onChange={setValue} label="Tarih ve saat" />
  )
}

export { MtDateInputTime }
