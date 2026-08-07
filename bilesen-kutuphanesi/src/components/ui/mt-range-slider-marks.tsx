/**
 * MtRangeSliderMarks
 * İşaretli aralık kaydırıcısı (saf React, Mantine kaynaklı).
 * @id 1275
 * @category Seçim
 * @subcategory MtRangeSlider
 * @source mantine
 */
import { MtRangeSlider } from "@/components/ui/mt-range-slider"

function MtRangeSliderMarks() {
  return (
    <MtRangeSlider
      defaultValue={[20, 80]}
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

export { MtRangeSliderMarks }
