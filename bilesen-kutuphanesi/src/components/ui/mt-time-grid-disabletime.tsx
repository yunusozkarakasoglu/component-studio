/**
 * MtTimeGridDisabletime
 * Saat kısıtlama (saf React, Mantine kaynaklı).
 * @id 1751
 * @category Takvim
 * @subcategory MtTimeGrid
 * @source mantine
 */
import { useState } from "react"
import { MtTimeGrid } from "@/components/ui/mt-time-grid"

function MtTimeGridDisabletime() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimeGrid value={value} onChange={setValue} minTime="09:00" maxTime="17:00" />
  )
}

export { MtTimeGridDisabletime }
