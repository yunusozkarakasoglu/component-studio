/**
 * ToggleButtonGroupSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 427
 * @category Seçim
 * @subcategory ToggleButtonGroup
 */
import { Bold, Italic, Strikethrough, Underline } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"

function Toolbar({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <ToggleButtonGroup selectionMode="multiple" size={size}>
      <ToggleButton isIconOnly aria-label="Bold" id={`bold-${size}`}>
        <Bold className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Italic" id={`italic-${size}`}>
        <ToggleButtonGroupSeparator />
        <Italic className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Underline" id={`underline-${size}`}>
        <ToggleButtonGroupSeparator />
        <Underline className="size-4" />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Strikethrough" id={`strike-${size}`}>
        <ToggleButtonGroupSeparator />
        <Strikethrough className="size-4" />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

function ToggleButtonGroupSizes() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Small</span>
        <Toolbar size="sm" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Medium (default)</span>
        <Toolbar size="md" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Large</span>
        <Toolbar size="lg" />
      </div>
    </div>
  )
}

export { ToggleButtonGroupSizes }
