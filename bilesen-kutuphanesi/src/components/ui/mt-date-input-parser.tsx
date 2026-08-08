/**
 * MtDateInputParser
 * Ayrıştırıcı (saf React, Mantine kaynaklı).
 * @id 1617
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputParser() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDateInputParser }
