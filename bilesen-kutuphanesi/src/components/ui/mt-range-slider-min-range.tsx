/**
 * MtRangeSliderMinRange
 * Minimum aralık (saf React, Mantine kaynaklı).
 * @id 1273
 * @category Seçim
 * @subcategory MtRangeSlider
 * @source mantine
 */
import { MtRangeSlider } from "@/components/ui/mt-range-slider"

function MtRangeSliderMinRange() {
  return <MtRangeSlider defaultValue={[30, 60]} minRange={20} className="max-w-sm" />
}

export { MtRangeSliderMinRange }
