/**
 * SliderControlled
 * Kontrollü örnek — değer senkronizasyonu (saf React).
 * @id 388
 * @category Form Elemanları
 * @subcategory Slider
 */
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

function SliderControlled() {
  const [value, setValue] = useState(25)

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Slider value={value} onChange={(v) => setValue(Array.isArray(v) ? v[0] : v)}>
        <Label>Volume</Label>
        <SliderOutput />
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
      <p className="text-sm text-muted-foreground">
        Current value: <code className="font-mono">{value}</code>
      </p>
    </div>
  )
}

export { SliderControlled }
