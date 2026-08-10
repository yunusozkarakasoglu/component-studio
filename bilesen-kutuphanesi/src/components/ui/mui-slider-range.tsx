/**
 * MuiSliderRange
 * @id 1954
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { useState } from "react"
import { MuiSlider } from "@/components/ui/mui-slider"

function MuiSliderRange() {
  const [value, setValue] = useState<number[]>([20, 70])
  return (
    <div className="w-full max-w-sm space-y-2">
      <MuiSlider value={value} onChange={(v) => setValue(v as number[])} min={0} max={100} ariaLabel="Fiyat aralığı" />
      <p className="text-xs text-gray-500">
        Aralık: {Math.round(value[0])}₺ – {Math.round(value[1])}₺
      </p>
    </div>
  )
}

export { MuiSliderRange }
