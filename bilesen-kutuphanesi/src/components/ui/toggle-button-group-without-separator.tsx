/**
 * ToggleButtonGroupWithoutSeparator
 * Ayraçsız örnek (saf React).
 * @id 431
 * @category Seçim
 * @subcategory ToggleButtonGroup
 */
import { Bold, Italic, Strikethrough, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group"

function ToggleButtonGroupWithoutSeparator() {
  return (
    <ToggleButtonGroup selectionMode="multiple">
      <ToggleButton isIconOnly aria-label="Bold" id="bold-ns">
        <Bold className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Italic" id="italic-ns">
        <Italic className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Underline" id="underline-ns">
        <Underline className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Strikethrough" id="strike-ns">
        <Strikethrough className="size-4" />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export { ToggleButtonGroupWithoutSeparator }
