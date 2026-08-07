/**
 * MtRangeSliderDisabled
 * Devre dışı aralık kaydırıcısı (saf React, Mantine kaynaklı).
 * @id 1276
 * @category Seçim
 * @subcategory MtRangeSlider
 * @source mantine
 */
import { MtRangeSlider } from "@/components/ui/mt-range-slider"

function MtRangeSliderDisabled() {
  return <MtRangeSlider defaultValue={[25, 75]} disabled className="max-w-sm" />
}

export { MtRangeSliderDisabled }
