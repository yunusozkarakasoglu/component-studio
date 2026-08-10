/**
 * MuiSliderDiscrete
 * @id 1955
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { useState } from "react"
import { MuiSlider } from "@/components/ui/mui-slider"

function MuiSliderDiscrete() {
  const [value, setValue] = useState(3)
  return (
    <div className="w-full max-w-sm space-y-2">
      <MuiSlider
        value={value}
        onChange={(v) => setValue(v as number)}
        min={0}
        max={10}
        step={1}
        marks
        ariaLabel="Adımlı"
      />
      <p className="text-xs text-gray-500">Seçilen adım: {value}</p>
    </div>
  )
}

export { MuiSliderDiscrete }
