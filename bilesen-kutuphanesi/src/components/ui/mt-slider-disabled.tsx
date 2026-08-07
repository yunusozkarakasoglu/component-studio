/**
 * MtSliderDisabled
 * Devre dışı kaydırıcı (saf React, Mantine kaynaklı).
 * @id 1266
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderDisabled() {
  return <MtSlider defaultValue={40} disabled className="max-w-sm" />
}

export { MtSliderDisabled }
