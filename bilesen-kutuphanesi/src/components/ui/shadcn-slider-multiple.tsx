/**
 * ShadcnSliderMultiple
 * Çoklu tutamak — üç değer (saf React, shadcn kaynaklı).
 * @id 694
 * @category Form Elemanları
 * @subcategory ShadcnSlider
 * @source shadcn
 */
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnSliderMultiple() {
  return (
    <Slider defaultValue={[10, 20, 70]} minValue={0} maxValue={100} step={10} className="mx-auto w-full max-w-xs">
      <SliderTrack>
        <SliderFill />
        <SliderThumb index={0} />
        <SliderThumb index={1} />
        <SliderThumb index={2} />
      </SliderTrack>
    </Slider>
  )
}

export { ShadcnSliderMultiple }
