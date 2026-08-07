/**
 * MtSliderLabel
 * Etiketli kaydırıcı (saf React, Mantine kaynaklı).
 * @id 1264
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderLabel() {
  return <MtSlider defaultValue={40} label={(v) => `${v}%`} className="max-w-sm" />
}

export { MtSliderLabel }
