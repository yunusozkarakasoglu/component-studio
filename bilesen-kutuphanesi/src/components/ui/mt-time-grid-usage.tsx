/**
 * MtTimeGridUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1753
 * @category Takvim
 * @subcategory MtTimeGrid
 * @source mantine
 */
import { useState } from "react"
import { MtTimeGrid } from "@/components/ui/mt-time-grid"

function MtTimeGridUsage() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <MtTimeGrid value={value} onChange={setValue}  />
  )
}

export { MtTimeGridUsage }
