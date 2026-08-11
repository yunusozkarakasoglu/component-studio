/**
 * MuiSliderMinimumDistance
 * @id 2036
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { useState } from "react"
import { MuiSlider } from "@/components/ui/mui-slider"

function MuiSliderMinimumDistance() {
  const [value, setValue] = useState<number[]>([20, 60])
  const minDistance = 10
  const handle = (v: number | number[]) => {
    if (!Array.isArray(v)) return
    let [a, b] = v
    if (b - a < minDistance) {
      if (a === value[0]) b = Math.min(100, a + minDistance)
      else a = Math.max(0, b - minDistance)
    }
    setValue([a, b])
  }
  return (
    <div className="w-full max-w-sm">
      <MuiSlider value={value} onChange={handle} min={0} max={100} ariaLabel="Min mesafe" />
      <p className="mt-2 text-xs text-gray-500">
        Tutamaklar arası min mesafe: {Math.round(value[0])} – {Math.round(value[1])} (en az {minDistance} birim ayrık)
      </p>
    </div>
  )
}

export { MuiSliderMinimumDistance }
