/**
 * ToggleButtonBasic
 * Temel örnek (saf React).
 * @id 418
 * @category Seçim
 * @subcategory ToggleButton
 */
import { Heart } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"

function ToggleButtonBasic() {
  return (
    <ToggleButton>
      <Heart className="size-4" />
      Like
    </ToggleButton>
  )
}

export { ToggleButtonBasic }
