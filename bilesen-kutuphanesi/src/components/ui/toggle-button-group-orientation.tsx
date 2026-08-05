/**
 * ToggleButtonGroupOrientation
 * Yön örneği: yatay/dikey (saf React).
 * @id 428
 * @category Seçim
 * @subcategory ToggleButtonGroup
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"

function ToggleButtonGroupOrientation() {
  return (
    <div className="flex items-start gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Horizontal</span>
        <ToggleButtonGroup orientation="horizontal" selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold-h">
            <Bold className="size-4" />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic-h">
            <ToggleButtonGroupSeparator />
            <Italic className="size-4" />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline-h">
            <ToggleButtonGroupSeparator />
            <Underline className="size-4" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Vertical</span>
        <ToggleButtonGroup orientation="vertical" selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold-v">
            <Bold className="size-4" />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic-v">
            <ToggleButtonGroupSeparator />
            <Italic className="size-4" />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline-v">
            <ToggleButtonGroupSeparator />
            <Underline className="size-4" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  )
}

export { ToggleButtonGroupOrientation }
