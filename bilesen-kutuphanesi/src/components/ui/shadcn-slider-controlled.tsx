/**
 * ShadcnSliderControlled
 * Kontrollü kaydırıcı — canlı değer (saf React, shadcn kaynaklı).
 * @id 696
 * @category Form Elemanları
 * @subcategory ShadcnSlider
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnLabel } from "@/components/ui/shadcn-label"
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnSliderControlled() {
  const [value, setValue] = useState([0.3, 0.7])

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <ShadcnLabel>Temperature</ShadcnLabel>
        <span className="text-sm text-muted-foreground">{value.join(", ")}</span>
      </div>
      <Slider value={value} onChange={(v) => setValue(Array.isArray(v) ? v : [v])} minValue={0} maxValue={1} step={0.1}>
        <SliderTrack>
          <SliderFill />
          <SliderThumb index={0} />
          <SliderThumb index={1} />
        </SliderTrack>
      </Slider>
    </div>
  )
}

export { ShadcnSliderControlled }
