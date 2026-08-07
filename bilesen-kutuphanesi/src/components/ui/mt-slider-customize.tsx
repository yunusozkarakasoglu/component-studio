/**
 * MtSliderCustomize
 * Özelleştirme — stiller (saf React, Mantine kaynaklı).
 * @id 1271
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderCustomize() {
  return (
    <MtSlider
      defaultValue={40}
      className="max-w-sm [&_.bg-blue-600]:bg-emerald-500 [&_div]:rounded-md"
      marks={[{ value: 0, label: "Low" }, { value: 50, label: "Mid" }, { value: 100, label: "High" }]}
    />
  )
}

export { MtSliderCustomize }
