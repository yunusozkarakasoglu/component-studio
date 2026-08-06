/**
 * ShadcnSliderRtl
 * RTL örneği (saf React, shadcn kaynaklı).
 * @id 698
 * @category Form Elemanları
 * @subcategory ShadcnSlider
 * @source shadcn
 */
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnSliderRtl() {
  return (
    <div dir="rtl">
      <Slider defaultValue={[75]} minValue={0} maxValue={100} step={1} className="mx-auto w-full max-w-xs">
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  )
}

export { ShadcnSliderRtl }
