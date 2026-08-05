/**
 * ToolbarVertical
 * Dikey araç çubuğu örneği (saf React).
 * @id 515
 * @category Butonlar & Aksiyonlar
 * @subcategory Toolbar
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Bold, Italic, Redo, Underline, Undo } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"
import { ToggleButtonGroup, ToggleButtonGroupSeparator } from "@/components/ui/toggle-button-group"
import { Toolbar } from "@/components/ui/toolbar"

const VSeparator = () => <span className="mx-1 h-5 w-px shrink-0 bg-border" aria-hidden="true" />

function ToolbarVertical() {
  return (
    <Toolbar aria-label="Tools" orientation="vertical">
      <ToggleButtonGroup aria-label="Text style" selectionMode="multiple">
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
      <VSeparator />
      <ButtonGroup variant="tertiary">
        <Button isIconOnly aria-label="Undo">
          <Undo className="size-4" />
        </Button>
        <Button isIconOnly aria-label="Redo">
          <ButtonGroupSeparator />
          <Redo className="size-4" />
        </Button>
      </ButtonGroup>
    </Toolbar>
  )
}

export { ToolbarVertical }
