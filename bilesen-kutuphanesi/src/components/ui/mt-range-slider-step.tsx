/**
 * MtRangeSliderStep
 * Adımlı aralık kaydırıcısı (saf React, Mantine kaynaklı).
 * @id 1277
 * @category Seçim
 * @subcategory MtRangeSlider
 * @source mantine
 */
import { MtRangeSlider } from "@/components/ui/mt-range-slider"

function MtRangeSliderStep() {
  return <MtRangeSlider defaultValue={[20, 60]} step={10} className="max-w-sm" label={(v) => `${v}`} />
}

export { MtRangeSliderStep }
