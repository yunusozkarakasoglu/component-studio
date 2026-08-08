/**
 * MtRollingNumberConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1558
 * @category Yükleme & İlerleme
 * @subcategory MtRollingNumber
 * @source mantine
 */
import { useState } from "react"
import { MtRollingNumber } from "@/components/ui/mt-rolling-number"

function MtRollingNumberConfigurator() {
  const [value, setValue] = useState(1000)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtRollingNumber value={value} transitionDuration={1500} className="text-3xl font-bold text-blue-600" />
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={0}
          max={10000}
          step={50}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          className="w-56"
        />
        <span className="text-xs text-muted-foreground">{value}</span>
      </div>
    </div>
  )
}

export { MtRollingNumberConfigurator }
