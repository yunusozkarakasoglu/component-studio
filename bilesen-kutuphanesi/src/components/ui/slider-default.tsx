/**
 * SliderDefault
 * Temel örnek: ses seviyesi kaydırıcısı (saf React).
 * @id 382
 * @category Form Elemanları
 * @subcategory Slider
 */
import { Label } from "@/components/ui/label"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

function SliderDefault() {
  return (
    <Slider className="w-full max-w-xs" defaultValue={30}>
      <Label>Volume</Label>
      <SliderOutput />
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}

export { SliderDefault }
