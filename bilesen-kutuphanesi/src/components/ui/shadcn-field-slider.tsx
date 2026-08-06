/**
 * ShadcnFieldSlider
 * Field + Slider — fiyat aralığı (saf React, shadcn kaynaklı).
 * Slider: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 654
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldTitle,
} from "@/components/ui/shadcn-field"
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnFieldSlider() {
  return (
    <ShadcnField className="w-full max-w-xs">
      <ShadcnFieldTitle>Price Range</ShadcnFieldTitle>
      <ShadcnFieldDescription>
        Set your budget range ($200 - $800).
      </ShadcnFieldDescription>
      <Slider defaultValue={[200, 800]} minValue={0} maxValue={1000} step={10} aria-label="Price Range" className="mt-2 w-full">
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </ShadcnField>
  )
}

export { ShadcnFieldSlider }
