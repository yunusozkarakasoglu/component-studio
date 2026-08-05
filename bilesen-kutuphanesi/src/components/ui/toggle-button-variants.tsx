/**
 * ToggleButtonVariants
 * default/ghost variant örneği (saf React).
 * @id 419
 * @category Seçim
 * @subcategory ToggleButton
 */
import { Heart } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"

function ToggleButtonVariants() {
  return (
    <div className="flex items-center gap-3">
      <ToggleButton>
        <Heart className="size-4" />
        Default
      </ToggleButton>
      <ToggleButton variant="ghost">
        <Heart className="size-4" />
        Ghost
      </ToggleButton>
    </div>
  )
}

export { ToggleButtonVariants }
