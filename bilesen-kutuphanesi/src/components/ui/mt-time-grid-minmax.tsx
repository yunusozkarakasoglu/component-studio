/**
 * MtTimeGridMinmax
 * Min/maks (saf React, Mantine kaynaklı).
 * @id 1752
 * @category Takvim
 * @subcategory MtTimeGrid
 * @source mantine
 */
import { useState } from "react"
import { MtTimeGrid } from "@/components/ui/mt-time-grid"

function MtTimeGridMinmax() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimeGrid value={value} onChange={setValue} minTime="08:30" maxTime="20:00" />
  )
}

export { MtTimeGridMinmax }
