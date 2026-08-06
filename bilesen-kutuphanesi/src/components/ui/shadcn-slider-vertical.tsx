/**
 * ShadcnSliderVertical
 * Dikey kaydırıcılar (saf React, shadcn kaynaklı).
 * @id 695
 * @category Form Elemanları
 * @subcategory ShadcnSlider
 * @source shadcn
 */
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnSliderVertical() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
      <Slider defaultValue={[50]} minValue={0} maxValue={100} step={1} orientation="vertical" className="h-40">
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
      <Slider defaultValue={[25]} minValue={0} maxValue={100} step={1} orientation="vertical" className="h-40">
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  )
}

export { ShadcnSliderVertical }
