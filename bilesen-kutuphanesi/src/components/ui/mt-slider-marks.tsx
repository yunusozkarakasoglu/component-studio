/**
 * MtSliderMarks
 * İşaretler (saf React, Mantine kaynaklı).
 * @id 1263
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderMarks() {
  return (
    <MtSlider
      defaultValue={40}
      className="max-w-sm"
      marks={[
        { value: 0, label: "0" },
        { value: 25, label: "25" },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
        { value: 100, label: "100" },
      ]}
    />
  )
}

export { MtSliderMarks }
