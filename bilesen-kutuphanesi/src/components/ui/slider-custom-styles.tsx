/**
 * SliderCustomStyles
 * Özelleştirilmiş kaydırıcı örneği (saf React).
 * @id 387
 * @category Form Elemanları
 * @subcategory Slider
 */
import { Label } from "@/components/ui/label"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

function SliderCustomStyles() {
  return (
    <Slider className="w-full max-w-xs" defaultValue={40}>
      <Label className="font-medium text-foreground">Brightness</Label>
      <SliderOutput className="text-xs text-muted-foreground tabular-nums" />
      <SliderTrack className="bg-muted">
        <SliderFill className="bg-blue-600" />
        <SliderThumb className="border-blue-600 bg-blue-600" />
      </SliderTrack>
    </Slider>
  )
}

export { SliderCustomStyles }
