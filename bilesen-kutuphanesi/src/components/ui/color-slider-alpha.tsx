/**
 * ColorSliderAlpha
 * HeroUI Alpha Channel örneği — şeffaflık (saf React).
 * @id 237
 * @category Colors
 * @subcategory ColorSlider
 */
import { ColorSlider } from "@/components/ui/color-slider"

function ColorSliderAlpha() {
  return (
    <div className="w-full max-w-xs">
      <ColorSlider channel="alpha" defaultValue="hsla(0, 100%, 50%, 0.5)" label="Alpha" />
    </div>
  )
}

export { ColorSliderAlpha }
