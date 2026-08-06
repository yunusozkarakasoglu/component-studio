/**
 * ShadcnSliderDemo
 * Temel örnek — tek değer kaydırıcısı (saf React, shadcn kaynaklı).
 * Slider: kütüphanenin mevcut bileşeni (Heroui — saf React, API uyumlu).
 * @id 692
 * @category Form Elemanları
 * @subcategory ShadcnSlider
 * @source shadcn
 */
import { Slider, SliderFill, SliderThumb, SliderTrack } from "@/components/ui/slider"

function ShadcnSliderDemo() {
  return (
    <Slider defaultValue={[75]} minValue={0} maxValue={100} step={1} className="mx-auto w-full max-w-xs">
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}

export { ShadcnSliderDemo }
