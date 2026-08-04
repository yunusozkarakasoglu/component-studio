/**
 * ColorSwatchPickerBasic
 * Usage örneği (saf React).
 * @id 242
 * @category Colors
 * @subcategory ColorSwatchPicker
 */
import { ColorSwatchPicker } from "@/components/ui/color-swatch-picker"

const palette = ["#0485F7", "#EF4444", "#F59E0B", "#10B981", "#D946EF"]

function ColorSwatchPickerBasic() {
  return <ColorSwatchPicker colors={palette} />
}

export { ColorSwatchPickerBasic }
