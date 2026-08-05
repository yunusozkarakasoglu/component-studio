/**
 * ToggleButtonGroupFullWidth
 * Tam genişlik örneği — çoklu + tekli seçim (saf React).
 * @id 429
 * @category Seçim
 * @subcategory ToggleButtonGroup
 */
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Strikethrough, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"

function ToggleButtonGroupFullWidth() {
  return (
    <div className="w-full max-w-md space-y-3">
      <ToggleButtonGroup fullWidth selectionMode="multiple">
        <ToggleButton isIconOnly aria-label="Bold" id="bold-fw">
          <Bold className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Italic" id="italic-fw">
          <ToggleButtonGroupSeparator />
          <Italic className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Underline" id="underline-fw">
          <ToggleButtonGroupSeparator />
          <Underline className="size-4" />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Strikethrough" id="strike-fw">
          <ToggleButtonGroupSeparator />
          <Strikethrough className="size-4" />
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup fullWidth selectionMode="single">
        <ToggleButton id="left">
          <AlignLeft className="size-4" />
          Left
        </ToggleButton>
        <ToggleButton id="center">
          <ToggleButtonGroupSeparator />
          <AlignCenter className="size-4" />
          Center
        </ToggleButton>
        <ToggleButton id="right">
          <ToggleButtonGroupSeparator />
          <AlignRight className="size-4" />
          Right
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export { ToggleButtonGroupFullWidth }
