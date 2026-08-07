/**
 * MtSliderInverted
 * Ters kaydırıcı (saf React, Mantine kaynaklı).
 * @id 1268
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderInverted() {
  return <MtSlider defaultValue={60} inverted className="max-w-sm" />
}

export { MtSliderInverted }
