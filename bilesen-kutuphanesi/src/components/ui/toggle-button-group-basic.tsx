/**
 * ToggleButtonGroupBasic
 * Temel örnek: biçimlendirme araç çubuğu (saf React).
 * @id 426
 * @category Seçim
 * @subcategory ToggleButtonGroup
 */
import { Bold, Italic, Strikethrough, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"

function ToggleButtonGroupBasic() {
  return (
    <ToggleButtonGroup selectionMode="multiple">
      <ToggleButton isIconOnly aria-label="Bold" id="bold">
        <Bold className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Italic" id="italic">
        <ToggleButtonGroupSeparator />
        <Italic className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Underline" id="underline">
        <ToggleButtonGroupSeparator />
        <Underline className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
        <ToggleButtonGroupSeparator />
        <Strikethrough className="size-4" />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export { ToggleButtonGroupBasic }
