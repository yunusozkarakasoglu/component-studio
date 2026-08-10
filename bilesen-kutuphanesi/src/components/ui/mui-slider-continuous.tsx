/**
 * MuiSliderContinuous
 * @id 1953
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { useState } from "react"
import { MuiSlider } from "@/components/ui/mui-slider"
import { Volume2, Volume1 } from "@/components/ui/icons"

function MuiSliderContinuous() {
  const [value, setValue] = useState(30)
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-3">
        <Volume1 className="size-5 shrink-0 text-gray-500" />
        <MuiSlider value={value} onChange={(v) => setValue(v as number)} ariaLabel="Ses" />
        <Volume2 className="size-5 shrink-0 text-gray-500" />
      </div>
      <p className="text-xs text-gray-500">Ses seviyesi: {Math.round(value)}</p>
      <MuiSlider defaultValue={30} disabled ariaLabel="Devre dışı" />
    </div>
  )
}

export { MuiSliderContinuous }
