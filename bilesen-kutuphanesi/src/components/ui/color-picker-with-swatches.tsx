/**
 * ColorPickerWithSwatches
 * With Swatches örneği (saf React).
 * @id 245
 * @category Colors
 * @subcategory ColorPicker
 */
import { ColorPicker } from "@/components/ui/color-picker"

const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981", "#D946EF", "#8B5CF6", "#EC4899", "#0EA5E9"]

function ColorPickerWithSwatches() {
  return <ColorPicker className="w-56" defaultValue="#0485F7" label="Renk" swatches={swatches} />
}

export { ColorPickerWithSwatches }
