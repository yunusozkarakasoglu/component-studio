/**
 * MtRingProgressConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1538
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { useState } from "react"
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressConfigurator() {
  const [value, setValue] = useState(55)
  const [size, setSize] = useState(120)

  return (
    <div className="flex items-center gap-8">
      <MtRingProgress sections={[{ value, color: "#3b82f6" }]} size={size} label={`%${value}`} />
      <div className="flex flex-col gap-3 text-xs text-muted-foreground">
        <label className="flex items-center gap-2">
          Değer: {value}
          <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(+e.target.value)} className="w-32" />
        </label>
        <label className="flex items-center gap-2">
          Boyut: {size}
          <input type="range" min={60} max={200} value={size} onChange={(e) => setSize(+e.target.value)} className="w-32" />
        </label>
      </div>
    </div>
  )
}

export { MtRingProgressConfigurator }
