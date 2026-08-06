/**
 * ShadcnSliderDisabled
 * Devre dışı kaydırıcı (saf React, shadcn kaynaklı).
 * @id 697
 * @category Form Elemanları
 * @subcategory ShadcnSlider
 * @source shadcn
 */
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnSliderDisabled() {
  return (
    <Slider defaultValue={[50]} minValue={0} maxValue={100} step={1} isDisabled className="mx-auto w-full max-w-xs">
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}

export { ShadcnSliderDisabled }
