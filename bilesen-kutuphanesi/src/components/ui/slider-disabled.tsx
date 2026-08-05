/**
 * SliderDisabled
 * Devre dışı kaydırıcı örneği (saf React).
 * @id 383
 * @category Form Elemanları
 * @subcategory Slider
 */
import { Label } from "@/components/ui/label"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

function SliderDisabled() {
  return (
    <Slider isDisabled className="w-full max-w-xs" defaultValue={30}>
      <Label>Volume</Label>
      <SliderOutput />
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}

export { SliderDisabled }
