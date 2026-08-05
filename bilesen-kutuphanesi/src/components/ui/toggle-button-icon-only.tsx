/**
 * ToggleButtonIconOnly
 * Sadece ikon örneği (saf React).
 * @id 420
 * @category Seçim
 * @subcategory ToggleButton
 */
import { Bookmark, Heart } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"

function ToggleButtonIconOnly() {
  return (
    <div className="flex items-center gap-3">
      <ToggleButton isIconOnly aria-label="Like">
        <Heart className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Bookmark" variant="ghost">
        <Bookmark className="size-4" />
      </ToggleButton>
    </div>
  )
}

export { ToggleButtonIconOnly }
