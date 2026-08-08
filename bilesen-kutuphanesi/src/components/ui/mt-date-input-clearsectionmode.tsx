/**
 * MtDateInputClearsectionmode
 * Temizleme bölümü (saf React, Mantine kaynaklı).
 * @id 1611
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { useState } from "react"
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputClearsectionmode() {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <MtDateInput value={value} onChange={setValue} label="Tarih" clearable />
  )
}

export { MtDateInputClearsectionmode }
