/**
 * MtTimeGridAmpmlabels
 * AM/PM (saf React, Mantine kaynaklı).
 * @id 1749
 * @category Takvim
 * @subcategory MtTimeGrid
 * @source mantine
 */
import { useState } from "react"
import { MtTimeGrid } from "@/components/ui/mt-time-grid"

function MtTimeGridAmpmlabels() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimeGrid value={value} onChange={setValue} format="12" />
  )
}

export { MtTimeGridAmpmlabels }
