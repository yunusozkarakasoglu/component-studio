/**
 * MtDateInputFormat
 * Biçim (saf React, Mantine kaynaklı).
 * @id 1615
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputFormat() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateInput value={value} onChange={setValue} label="Tarih" valueFormat="DD/MM/YYYY" />
  )
}

export { MtDateInputFormat }
