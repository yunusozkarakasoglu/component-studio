/**
 * MtSliderStep
 * Adımlı kaydırıcı (saf React, Mantine kaynaklı).
 * @id 1265
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderStep() {
  return <MtSlider defaultValue={20} step={10} className="max-w-sm" marks={[{ value: 20, label: "20%" }, { value: 60, label: "60%" }]} />
}

export { MtSliderStep }
