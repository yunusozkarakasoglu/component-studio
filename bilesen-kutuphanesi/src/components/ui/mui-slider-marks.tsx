/**
 * MuiSliderMarks
 * @id 1956
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { MuiSlider } from "@/components/ui/mui-slider"

function MuiSliderMarks() {
  return (
    <MuiSlider
      defaultValue={37}
      min={0}
      max={100}
      step={null}
      marks={[
        { value: 0, label: "0°C" },
        { value: 20, label: "20°C" },
        { value: 37, label: "37°C" },
        { value: 100, label: "100°C" },
      ]}
      ariaLabel="Özel işaretler"
      className="!max-w-sm"
    />
  )
}

export { MuiSliderMarks }
