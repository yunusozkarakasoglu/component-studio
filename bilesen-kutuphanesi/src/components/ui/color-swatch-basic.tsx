/**
 * ColorSwatchBasic
 * HeroUI Usage örneği (saf React).
 * @id 233
 * @category Colors
 * @subcategory ColorSwatch
 */
import { ColorSwatch } from "@/components/ui/color-swatch"

function ColorSwatchBasic() {
  return (
    <div className="flex items-center gap-3">
      <ColorSwatch aria-label="Blue" color="#0485F7" />
      <ColorSwatch aria-label="Red" color="#EF4444" />
      <ColorSwatch aria-label="Amber" color="#F59E0B" />
      <ColorSwatch aria-label="Green" color="#10B981" />
      <ColorSwatch aria-label="Fuchsia" color="#D946EF" />
    </div>
  )
}

export { ColorSwatchBasic }
