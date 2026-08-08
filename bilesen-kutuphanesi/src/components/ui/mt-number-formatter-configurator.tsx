/**
 * MtNumberFormatterConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1562
 * @category Yükleme & İlerleme
 * @subcategory MtNumberFormatter
 * @source mantine
 */
import { useState } from "react"
import { MtNumberFormatter } from "@/components/ui/mt-number-formatter"

function MtNumberFormatterConfigurator() {
  const [value, setValue] = useState(1234567.891)
  const [scale, setScale] = useState(2)

  return (
    <div className="flex flex-col items-start gap-3">
      <MtNumberFormatter value={value} thousandSeparator decimalScale={scale} className="text-xl font-semibold text-blue-600" />
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <input type="number" value={value} onChange={(e) => setValue(+e.target.value)} className="w-28 rounded border border-border bg-background px-2 py-1" />
        <label className="flex items-center gap-1.5">
          Ondalık: {scale}
          <input type="range" min={0} max={4} value={scale} onChange={(e) => setScale(+e.target.value)} className="w-24" />
        </label>
      </div>
    </div>
  )
}

export { MtNumberFormatterConfigurator }
