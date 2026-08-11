/**
 * MuiSliderInput
 * @id 2040
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { useState } from "react"
import { MuiSlider } from "@/components/ui/mui-slider"
import { MuiTextField } from "@/components/ui/mui-text-field"

function MuiSliderInput() {
  const [value, setValue] = useState(30)
  return (
    <div className="flex w-full max-w-sm items-center gap-4">
      <MuiSlider value={value} onChange={(v) => setValue(v as number)} min={0} max={100} ariaLabel="Girişli" className="flex-1" />
      <MuiTextField
        value={String(value)}
        onChange={(e) => {
          const n = Number(e.target.value)
          if (!isNaN(n)) setValue(Math.max(0, Math.min(100, n)))
        }}
        size="small"
        label="Değer"
        className="!max-w-24"
      />
    </div>
  )
}

export { MuiSliderInput }
