/**
 * ColorSliderBasic
 * Usage örneği — hue kaydırıcı (saf React).
 * @id 235
 * @category Colors
 * @subcategory ColorSlider
 */
import { ColorSlider } from "@/components/ui/color-slider"

function ColorSliderBasic() {
  return (
    <div className="w-full max-w-xs">
      <ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)" label="Hue" />
    </div>
  )
}

export { ColorSliderBasic }
