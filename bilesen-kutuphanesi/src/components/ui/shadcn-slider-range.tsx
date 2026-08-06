/**
 * ShadcnSliderRange
 * Aralık — iki değer (saf React, shadcn kaynaklı).
 * @id 693
 * @category Form Elemanları
 * @subcategory ShadcnSlider
 * @source shadcn
 */
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnSliderRange() {
  return (
    <Slider defaultValue={[25, 50]} minValue={0} maxValue={100} step={5} className="mx-auto w-full max-w-xs">
      <SliderTrack>
        <SliderFill />
        <SliderThumb index={0} />
        <SliderThumb index={1} />
      </SliderTrack>
    </Slider>
  )
}

export { ShadcnSliderRange }
