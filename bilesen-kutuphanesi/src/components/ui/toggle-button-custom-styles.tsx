/**
 * ToggleButtonCustomStyles
 * Özelleştirilmiş örnek — yuvarlak kaydet butonu (saf React).
 * @id 424
 * @category Seçim
 * @subcategory ToggleButton
 */
import { Heart } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"

function ToggleButtonCustomStyles() {
  return (
    <ToggleButton className="gap-2 rounded-full border border-border/80 bg-background px-4 text-foreground shadow-sm data-[selected=true]:border-blue-500/30 data-[selected=true]:bg-blue-500/10 data-[selected=true]:text-blue-600 [&_svg]:text-muted-foreground data-[selected=true]:[&_svg]:text-blue-600">
      <Heart className="size-4" />
      Save article
    </ToggleButton>
  )
}

export { ToggleButtonCustomStyles }
