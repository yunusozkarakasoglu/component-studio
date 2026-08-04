/**
 * ColorSliderVertical
 * Vertical örneği — dikey kaydırıcılar (saf React).
 * @id 236
 * @category Colors
 * @subcategory ColorSlider
 */
import { ColorSlider } from "@/components/ui/color-slider"

function ColorSliderVertical() {
  return (
    <div className="flex h-48 gap-4">
      <ColorSlider channel="hue" orientation="vertical" defaultValue="hsl(0, 100%, 50%)" showOutput={false} />
      <ColorSlider channel="saturation" orientation="vertical" defaultValue="hsl(0, 100%, 50%)" showOutput={false} />
      <ColorSlider channel="lightness" orientation="vertical" defaultValue="hsl(0, 100%, 50%)" showOutput={false} />
    </div>
  )
}

export { ColorSliderVertical }
