/**
 * ToggleButtonSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 421
 * @category Seçim
 * @subcategory ToggleButton
 */
import { Heart } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"

function ToggleButtonSizes() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <ToggleButton size="sm">
          <Heart className="size-4" />
          Small
        </ToggleButton>
        <ToggleButton size="md">
          <Heart className="size-4" />
          Medium
        </ToggleButton>
        <ToggleButton size="lg">
          <Heart className="size-4" />
          Large
        </ToggleButton>
      </div>
      <div className="flex items-center gap-3">
        <ToggleButton isIconOnly aria-label="Like" size="sm">
          <Heart className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Like" size="md">
          <Heart className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Like" size="lg">
          <Heart className="size-4" />
        </ToggleButton>
      </div>
    </div>
  )
}

export { ToggleButtonSizes }
