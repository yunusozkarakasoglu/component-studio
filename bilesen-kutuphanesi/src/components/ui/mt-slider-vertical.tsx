/**
 * MtSliderVertical
 * Dikey kaydırıcı (saf React, Mantine kaynaklı).
 * @id 1267
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderVertical() {
  return (
    <div className="flex gap-8">
      <MtSlider defaultValue={30} orientation="vertical" />
      <MtSlider defaultValue={60} orientation="vertical" />
      <MtSlider defaultValue={80} orientation="vertical" />
    </div>
  )
}

export { MtSliderVertical }
