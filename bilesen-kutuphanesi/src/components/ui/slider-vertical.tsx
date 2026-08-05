/**
 * SliderVertical
 * Dikey kaydırıcı örneği (saf React).
 * @id 384
 * @category Form Elemanları
 * @subcategory Slider
 */
import { Label } from "@/components/ui/label"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

function SliderVertical() {
  return (
    <div className="flex h-64 items-center justify-center">
      <Slider className="h-full" defaultValue={30} orientation="vertical" aria-label="Volume">
        <Label>Volume</Label>
        <SliderOutput />
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  )
}

export { SliderVertical }
