/**
 * MtDateInputUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1609
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputUsage() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateInput value={value} onChange={setValue} label="Tarih" />
  )
}

export { MtDateInputUsage }
