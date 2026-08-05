/**
 * ToggleButtonDisabled
 * Devre dışı örnek (saf React).
 * @id 422
 * @category Seçim
 * @subcategory ToggleButton
 */
import { Heart } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"

function ToggleButtonDisabled() {
  return (
    <div className="flex items-center gap-3">
      <ToggleButton isDisabled>
        <Heart className="size-4" />
        Like
      </ToggleButton>
      <ToggleButton defaultSelected isDisabled>
        <Heart className="size-4 fill-current" />
        Like
      </ToggleButton>
    </div>
  )
}

export { ToggleButtonDisabled }
