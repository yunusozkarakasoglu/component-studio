/**
 * MtRangeSliderMaxRange
 * Maksimum aralık (saf React, Mantine kaynaklı).
 * @id 1274
 * @category Seçim
 * @subcategory MtRangeSlider
 * @source mantine
 */
import { MtRangeSlider } from "@/components/ui/mt-range-slider"

function MtRangeSliderMaxRange() {
  return <MtRangeSlider defaultValue={[20, 60]} maxRange={30} className="max-w-sm" />
}

export { MtRangeSliderMaxRange }
