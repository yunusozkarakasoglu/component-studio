/**
 * ColorSwatchPickerStack
 * HeroUI Stack Layout örneği (saf React).
 * @id 243
 * @category Colors
 * @subcategory ColorSwatchPicker
 */
import { ColorSwatchPicker } from "@/components/ui/color-swatch-picker"

const palette = ["#0485F7", "#EF4444", "#F59E0B", "#10B981", "#D946EF"]

function ColorSwatchPickerStack() {
  return <ColorSwatchPicker colors={palette} layout="stack" defaultValue={["#0485F7"]} />
}

export { ColorSwatchPickerStack }
