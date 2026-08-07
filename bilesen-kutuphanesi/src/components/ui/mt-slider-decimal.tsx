/**
 * MtSliderDecimal
 * Ondalıklı kaydırıcı (saf React, Mantine kaynaklı).
 * @id 1269
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderDecimal() {
  return <MtSlider defaultValue={0.5} min={0} max={1} step={0.1} label={(v) => v.toFixed(1)} className="max-w-sm" />
}

export { MtSliderDecimal }
