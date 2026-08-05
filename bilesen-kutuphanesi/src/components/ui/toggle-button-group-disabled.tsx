/**
 * ToggleButtonGroupDisabled
 * Devre dışı örnek — tümü + bireysel (saf React).
 * @id 430
 * @category Seçim
 * @subcategory ToggleButtonGroup
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"

function ToggleButtonGroupDisabled() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">All buttons disabled</span>
        <ToggleButtonGroup isDisabled selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold-ad">
            <Bold className="size-4" />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic-ad">
            <ToggleButtonGroupSeparator />
            <Italic className="size-4" />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline-ad">
            <ToggleButtonGroupSeparator />
            <Underline className="size-4" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Individual button disabled</span>
        <ToggleButtonGroup selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold-id">
            <Bold className="size-4" />
          </ToggleButton>
          <ToggleButton isDisabled isIconOnly aria-label="Italic" id="italic-id">
            <ToggleButtonGroupSeparator />
            <Italic className="size-4" />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline-id">
            <ToggleButtonGroupSeparator />
            <Underline className="size-4" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  )
}

export { ToggleButtonGroupDisabled }
